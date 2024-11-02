# Deployment Guide for LazyDog

Welcome to the **LazyDog Deployment Guide**! This guide provides step-by-step instructions for deploying the LazyDog platform to Heroku, ensuring that you can get your application up and running smoothly. Whether you're a seasoned developer or a newcomer, this guide will help you navigate the deployment process, from setting up your environment to launching your application.

Before diving into the deployment steps, please ensure that you have **Python, pip (Python's package installer), Django, and React** installed on your system. These tools are essential for setting up your local development environment and managing project dependencies effectively.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Important Points Before Deployment](#important-points-before-deployment)
- [Heroku Deployment](#heroku-deployment)
   1. [Heroku Account](#heroku-account)
   2. [GitHub Repository](#github-repository)
   3. [Heroku Dashboard](#heroku-dashboard)
   4. [Create a New App](#create-a-new-app)
   5. [App Name](#app-name)
   6. [Region & Create App](#region--create-app)
   7. [Heroku Postgres](#heroku-postgres)
   8. [Config Vars](#config-vars)
   9. [Procfile](#procfile)
   10. [ALLOWED_HOSTS](#allowed-hosts)
   11. [Commit Changes](#commit-changes)
   12. [Add Buildpack](#add-buildpack)
   13. [Deploy](#deploy)
- [Local Deployment](#local-deployment)
   1. [How to Fork](#how-to-fork)
   2. [How to Clone](#how-to-clone)
   3. [Setting Up Your Local Environment](#setting-up-your-local-environment)

---

### Getting Started
To begin, make sure to follow these preliminary steps:

- Install [Python](https://www.python.org/) if you haven't already.
- Verify the installation by checking the Python version in your terminal using the command: `python --version`.
- Use `pip` or `pip3` to install the required libraries and modules for the project.

This guide is structured to help you through the entire deployment process, starting with critical points to consider before deploying and moving on to detailed instructions for deploying to Heroku.

--- 

### Important Points Before Deployment
- Ensure you generate a `requirements.txt` file that lists all project dependencies with the command `pip freeze > requirements.txt`.
- Add `env.py` to your `.gitignore` file to protect sensitive information from being pushed to GitHub.
- Reference the `SECRET_KEY` in `settings.py` from your `env.py` file for enhanced security.
- Set `DEBUG = False` in `settings.py` to prevent the exposure of sensitive information and ensure that Django relies on a cloud service for serving static files.
- Don’t forget to run migrations to set up your database before deployment.

[Back to the top](#deployment-guide-for-lazydog)

---

### Heroku Deployment
1. **Heroku Account:** Make sure you have a Heroku account. If not, sign up on the [Heroku website](https://www.heroku.com/).
2. **GitHub Repository:** Ensure your project is hosted on GitHub.
3. **Heroku Dashboard:** Log in to your Heroku account and go to the Heroku Dashboard.
4. **Create a New App:** On the dashboard, click `New` and choose `Create new app`.
5. **App Name:** Choose a unique name for your app (it cannot be the same as an existing app).
6. **Region & Create App:** Select the region closest to you (EU or USA), then click **Create App**.
7. **Heroku Postgres:** Go to the Resources Tab, under Add-ons, search for and add Heroku Postgres.
8. **Config Vars:** Go to the **Settings** tab, find the section for 'Config Vars,' click **Reveal Config Vars**.  
   - Add the following Config Vars for both development and production:
     - `CLOUDINARY_URL`
     - `DISABLE_COLLECTSTATIC`
     - `DATABASE_URL`
     - `EMAIL_HOST_PASS`
     - `EMAIL_HOST_USER`
     - `SECRET_KEY`
     - `HOST`
9. **Procfile:** Create a `Procfile` in your application's root directory. Use the command `echo web: gunicorn lazydog.wsgi > Procfile`. This file tells Heroku how to run your application, ensuring proper setup of your web server.
10. **ALLOWED_HOSTS:** In `settings.py`, add Heroku to `ALLOWED_HOSTS`.
11. **Commit Changes:** Add and commit your changes, then push to GitHub.
12. **Add Buildpack:** Scroll down the settings page, select **Add Buildpack**. Choose Python first, then Node.js. Ensure they are in this order, and reorder them if necessary.
13. **Deploy:** Select the 'Deploy' tab. Choose GitHub as the deployment method, confirm the connection, and search for your repository name. Once found, click "connect."
14. **Choose Deploy Method:** You can enable automatic deploys or manually deploy by clicking "Deploy branch." Wait for the app to build, and once complete, a message should confirm the successful deployment. Click the button "View" to see your app live.

[Back to the top](#deployment-guide-for-lazydog)

---

### Local Deployment
#### How to Fork
1. Log in (or sign up) to GitHub.
2. Go to the [LazyDog repository](https://github.com/ci-companeros/lazydog).
3. Click the Fork button in the top right corner to create a fork.
4. Optionally, rename the fork and add a description.
5. Choose to copy only the main branch or all branches.
6. Click Create a Fork to complete the process.

#### How to Clone
1. Log in (or sign up) to GitHub.
2. Go to the [LazyDog repository](https://github.com/ci-companeros/lazydog).
3. Click on the code button, choose whether to clone using HTTPS, SSH, or GitHub CLI, and copy the link.
4. Open your terminal or command-line interface and navigate to the directory where you want to clone the repository.
5. Run the following command:
    ```bash
    git clone https://github.com/ci-companeros/lazydog.git
    ```
6. Press Enter. Your local clone will be created.

#### Setting Up Your Local Environment
1. Create a virtual environment on your computer or use a built-in feature in Gitpod.
2. Create an `.env` file in the project's root folder and include the following variables:
   - Obtain the `DATABASE_URL` from your PostgreSQL app, adding it as an add-on when creating an app.
   - Generate the `SECRET_KEY` for Django.

    ```text
    DATABASE_URL = ...
    SECRET_KEY = ...
    DEVELOPMENT = True
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

For detailed instructions on setting up the development environment, please refer to the [Project Setup Guide](setup-guide.md).

[Back to the top](#deployment-guide-for-lazydog)


---
