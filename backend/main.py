import os
import json
import asyncio
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]

@app.get("/")
async def root():
    return {"message": "AI Portfolio Backend is running"}

@app.post("/chat")
async def chat(request: ChatRequest):
    api_key = os.getenv("GOOGLE_API_KEY")

    if not api_key or api_key == "your_key_here":
        async def key_reminder():
            yield "⚠️ **API Key Missing**: Please add your Google AI Studio API key to the `backend/.env` file. Get your free key at [aistudio.google.com](https://aistudio.google.com/)."
        return StreamingResponse(key_reminder(), media_type="text/plain")

    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel(
            model_name="models/gemini-flash-latest",
            system_instruction=SYSTEM_PROMPT,
        )

        # Build conversation history
        # Build conversation history
        all_messages = list(request.messages)
        if not all_messages:
            return StreamingResponse(iter(["No messages provided"]), media_type="text/plain")

        last_message_obj = all_messages.pop()
        last_message = last_message_obj.content
        
        history = []
        for msg in all_messages:
            history.append({
                "role": "user" if msg.role == "user" else "model",
                "parts": [msg.content]
            })

        async def event_generator():
            try:
                chat_session = model.start_chat(history=history)
                response = chat_session.send_message(last_message, stream=True)
                for chunk in response:
                    if chunk.text:
                        yield chunk.text
            except Exception as e:
                yield f"❌ **Error**: {str(e)}"

        return StreamingResponse(event_generator(), media_type="text/plain")

    except Exception as e:
        async def error_response():
            yield f"❌ **Error**: {str(e)}"
        return StreamingResponse(error_response(), media_type="text/plain")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
