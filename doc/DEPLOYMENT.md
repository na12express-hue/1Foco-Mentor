# Deployment Guide for Foco Mentor IA

This guide explains how to deploy the Foco Mentor IA application. Since this application uses **static files** (HTML/JS) with CDN imports, it is lightweight and easy to deploy.

## ⚠️ CRITICAL: API Key Configuration

The current code references `process.env.API_KEY`.
*   **In Development:** This is handled by your local environment/editor.
*   **In Production (Static Deployment):** `process.env` does not exist in the browser.

**Before deploying**, you must choose one of these options:

1.  **Hardcode the Key (Easiest for Personal Use):**
    *   Open `services/gemini.ts`.
    *   Replace `process.env.API_KEY` with your actual key string:
        ```typescript
        // const API_KEY = process.env.API_KEY || ''; // OLD
        const API_KEY = "YOUR_ACTUAL_GEMINI_API_KEY_HERE"; // NEW
        ```
    *   *Warning:* If you publish this to a public GitHub repository, your key will be visible. Use a private repository.

2.  **Prompt for Key (Best for Public Deployment):**
    *   Modify the app to ask the user for their API key on the first load and save it to `localStorage`.

---

## 1. Deploy via Vercel (GitHub Integration)

"Verbal" in your request likely refers to **Vercel**, the standard platform for deploying web apps via GitHub.

### Steps:

1.  **Prepare the Code:**
    *   Ensure your code is pushed to a **GitHub Repository**.
    *   Make sure you have handled the API Key (see above).

2.  **Connect to Vercel:**
    *   Go to [vercel.com](https://vercel.com) and log in.
    *   Click **"Add New..."** -> **"Project"**.
    *   Select your "Foco Mentor IA" repository from the list.

3.  **Configure Project:**
    *   **Framework Preset:** Vercel should detect it automatically or select **"Other"** (since this is a static HTML app).
    *   **Root Directory:** `./` (default).
    *   **Build Command:** Leave empty.
    *   **Output Directory:** Leave empty (it serves the root).

4.  **Deploy:**
    *   Click **Deploy**.
    *   Vercel will provide you with a URL (e.g., `foco-mentor.vercel.app`).

---

## 2. Deploy to Google Cloud Run

Cloud Run requires a container. A `Dockerfile` has been added to your project root to serve the static files using Nginx.

### Prerequisites:
*   Google Cloud Platform (GCP) Account.
*   `gcloud` CLI installed or use Cloud Shell.
*   Billing enabled on your GCP project.

### Steps:

1.  **Build the Container Image:**
    Run this command in your project terminal:
    ```bash
    gcloud builds submit --tag gcr.io/YOUR_PROJECT_ID/foco-mentor
    ```
    *(Replace `YOUR_PROJECT_ID` with your actual Google Cloud Project ID).*

2.  **Deploy to Cloud Run:**
    ```bash
    gcloud run deploy foco-mentor \
      --image gcr.io/YOUR_PROJECT_ID/foco-mentor \
      --platform managed \
      --region us-central1 \
      --allow-unauthenticated
    ```

3.  **Access:**
    *   The terminal will output a Service URL (e.g., `https://foco-mentor-xyz-uc.a.run.app`).

---

## 3. GitHub Pages (Alternative)

If you prefer pure GitHub Pages:

1.  Go to your Repository **Settings**.
2.  Click **Pages** (sidebar).
3.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4.  Select Branch: `main`, Folder: `/` (root).
5.  Click **Save**.
