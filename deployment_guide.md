# One-Click Deployment Guide

I've created a **Render Blueprint** (`render.yaml`) that makes deploying your AI Portfolio incredibly simple.

## Step 1: Push the Blueprint to GitHub
Run these commands in your terminal to push the new configuration:
```powershell
git add .
git commit -m "Add Render Blueprint and mobile fixes"
git push origin main
```

## Step 2: Deploy on Render
1. Go to your **[Render Dashboard](https://dashboard.render.com/)**.
2. Click **New +** > **Blueprint**.
3. Connect your **Portfolio** repository.
4. Render will automatically detect the `render.yaml` file. Click **Approve**.
5. **Important**: Go to the **Environment** settings of the `ai-portfolio-backend` service and add your `OPENROUTER_API_KEY`.

## Step 3: Share your Portfolio!
Once the build is complete, Render will give you a link for the `anshuman-portfolio-frontend`. 

That's it! Your AI assistant and portfolio are now live for the world to see. 🚀

> [!TIP]
> Your backend URL is automatically linked to your frontend via the Blueprint, so you don't need to manually copy-paste URLs anymore!
