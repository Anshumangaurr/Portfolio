import os
import json
from typing import List, Dict
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load resume data
try:
    with open("resume.json", "r") as f:
        RESUME_DATA = json.load(f)
except FileNotFoundError:
    RESUME_DATA = {}

# Initialize OpenRouter client
client = OpenAI(
  base_url="https://openrouter.ai/api/v1",
  api_key=os.getenv("OPENROUTER_API_KEY"),
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

SYSTEM_PROMPT = f"""
You are the elite, highly advanced AI assistant representing Anshuman Gaur's professional portfolio. 
Your tone is sophisticated, technically astute, yet approachable and helpful. 

CONTEXT:
Anshuman is a high-achieving Computer Science student at VIT Vellore (CGPA 8.1) with professional experience in Full Stack Development and Machine Learning.

RESUME DATA:
{json.dumps(RESUME_DATA, indent=2)}

YOUR CORE PRINCIPLES:
1. **Unwavering Accuracy**: Speak only from the provided resume data. If details are missing (like specific personal stories), maintain professionalism by offering to redirect the user to Anshuman's contact info.
2. **Professional Elegance**: Use clear, concise, and beautifully formatted Markdown. Use bolding and bullet points to make technical details pop.
3. **Proactive Helpfulness**: When asked about a specific area (like 'Skills'), don't just list them; explain how they apply to his projects (like using React for his Inventory Management system).
4. **Absolute Focus**: Stay strictly professional. If asked inappropriate or unrelated questions, politely bring the conversation back to Anshuman's career and potential.

GOAL:
Leave every visitor impressed with Anshuman's technical depth and professional caliber. You are NOT just a chatbot; you are a reflection of his excellence.
"""

@app.get("/")
async def root():
    return {"message": "AI Portfolio Backend is running"}

@app.post("/chat")
async def chat(request: ChatRequest):
    api_key = os.getenv("OPENROUTER_API_KEY")
    
    if not api_key or api_key == "your_key_here":
        async def key_reminder():
            yield "⚠️ **API Key Missing**: Please add your OpenRouter API key to the `backend/.env` file to enable the AI chat functionality. \n\nGet your key at [openrouter.ai](https://openrouter.ai/)."
        return StreamingResponse(key_reminder(), media_type="text/plain")

    async def event_generator():
        try:
            stream = client.chat.completions.create(
                extra_headers={
                    "HTTP-Referer": "http://localhost:5174",
                    "X-Title": "Anshuman Portfolio",
                },
                model="openrouter/free",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    *[{"role": m.role, "content": m.content} for m in request.messages]
                ],
                stream=True,
            )
            for chunk in stream:
                if chunk.choices and chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
        except Exception as e:
            yield f"❌ **Error**: {str(e)}"

    return StreamingResponse(event_generator(), media_type="text/plain")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
