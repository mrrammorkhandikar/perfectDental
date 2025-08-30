# Perfect32 Dental Clinic Website

This project is a full-stack web application for a dental clinic, featuring a React frontend and a Node.js backend.

## Deployment on Vercel

To deploy this project to Vercel, follow these steps:

1.  **Push to GitHub**: Push your project to a GitHub repository.

2.  **Import Project on Vercel**:
    *   Go to your Vercel dashboard and click "Add New... > Project".
    *   Import the GitHub repository you just created.

3.  **Configure Project**:
    *   Vercel should automatically detect that you are using Vite.
    *   The root directory should be the root of your project.

4.  **Add Environment Variables**:
    *   In your Vercel project settings, go to "Environment Variables".
    *   Add the following variables for the email service to work:
        *   `EMAIL_USER`: Your Gmail address.
        *   `EMAIL_PASS`: Your 16-character Gmail App Password.

5.  **Deploy**:
    *   Click the "Deploy" button. Vercel will build and deploy your application. The `vercel.json` file in the root of the project will handle the routing between the frontend and the backend.