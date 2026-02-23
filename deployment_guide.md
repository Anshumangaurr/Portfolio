# One-Click Deployment Guide (Updated)

I've fixed why the chat wasn't working after deployment! The frontend needed to know your **external** backend URL, not the internal one.

## Step 1: Push the Fixes to GitHub
Run these commands in your terminal:
```powershell
git add .
git commit -m "Fix Post-Deployment Chat Connection"
git push origin main
```

## Step 2: Update on Render
1. Go to your **[Render Dashboard](https://dashboard.render.com/)**.
2. If you already applied the Blueprint, you'll see a new field for **`VITE_API_URL`** under your frontend service or during the "Apply" process.
3. **Crucially**: 
   - Set **`OPENROUTER_API_KEY`** in the backend service.
   - Set **`VITE_API_URL`** in the frontend service to your backend's public link (e.g., `https://ai-portfolio-backend.onrender.com`).
4. Apply the changes!

## Step 3: Verify the Chat
Once both services are "Live", go to your frontend link and try the chat. It will now connect to your live backend instead of trying to find it on your own computer.

🚀 **Your portfolio is ready for the world!**
