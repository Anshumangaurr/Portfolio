# Deployment Guide: Share Your AI Portfolio

To share your portfolio with anyone, you need to host it on the web. I recommend using **Render.com** (Free) as it's very easy to set up for both your frontend and backend.

## Step 1: Push your code to GitHub
If you haven't already, make sure your latest code (including my mobile fixes) is on GitHub.

## Step 2: Deploy the Backend (FastAPI)
1. Go to [Render.com](https://render.com/) and create a free account.
2. Click **New** > **Web Service**.
3. Connect your GitHub repository.
4. Set the following:
   - **Name**: `ai-portfolio-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Go to **Environment** and add:
   - `OPENROUTER_API_KEY`: (Your OpenRouter Key)
6. Once deployed, copy your backend URL (e.g., `https://ai-portfolio-backend.onrender.com`).

## Step 3: Deploy the Frontend (Vite)
1. In Render, click **New** > **Static Site**.
2. Connect the same repository.
3. Set the following:
   - **Name**: `anshuman-portfolio`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Go to **Environment** and add:
   - `VITE_API_URL`: (Paste your backend URL from Step 2)
5. Deploy!

## Step 4: Share your Link!
You will get a link like `https://anshuman-portfolio.onrender.com`. Share this with anyone! They will see your beautiful, mobile-friendly portfolio and can chat with your AI assistant.

> [!IMPORTANT]
> Because you are using the **Free Tier**, the backend might "sleep" if no one visits for a while. It may take 30-60 seconds to wake up on the first message!
