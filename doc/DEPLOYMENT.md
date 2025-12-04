# Deployment Guide for Foco Mentor IA

This guide explains how to deploy the Foco Mentor IA application.

## API Key Configuration

The application now includes a built-in interface (`ApiKeyModal`) that prompts the user for their API Key on the first visit and securely stores it in the browser's Local Storage. 

**You do NOT need to hardcode API keys.** You can deploy the code publicly without exposing any credentials.

---

## 1. Deploy via Vercel (Recommended)

Vercel is the easiest way to deploy React applications directly from GitHub.

1.  **Push to GitHub:** Ensure your project is in a GitHub repository.
2.  **Import to Vercel:**
    *   Go to [vercel.com](https://vercel.com) and log in.
    *   Click **Add New... > Project**.
    *   Select your repository.
3.  **Configure:**
    *   Vercel will automatically detect `Vite`.
    *   **Build Command:** `npm run build`
    *   **Output Directory:** `dist`
4.  **Deploy:** Click **Deploy**.

---

## 2. Deploy to Google Cloud Run

To deploy to Cloud Run, we use Docker to build the app and serve the static files via Nginx.

### Prerequisites:
*   Google Cloud Platform (GCP) Project.
*   `gcloud` CLI installed.

### Steps:

1.  **Build and Submit Image:**
    ```bash
    gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/foco-mentor
    ```
    *(Replace `YOUR_PROJECT_ID` with your actual project ID).*

2.  **Deploy Service:**
    ```bash
    gcloud run deploy foco-mentor \
      --image gcr.io/YOUR_PROJECT_ID/foco-mentor \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated
    ```

---

## 3. GitHub Pages

You can deploy using GitHub Actions or manually.

**Manual Build & Deploy:**
1.  Run `npm install`.
2.  Run `npm run build`.
3.  Upload the contents of the `dist/` folder to your web server or `gh-pages` branch.

---

## Local Development

See `README.md` for local setup instructions.
