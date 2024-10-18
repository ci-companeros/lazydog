# Project Setup Guide for LazyDog

This repository provides a customizable starter template for development projects using both **Gitpod** and **VS Code** environments. It is pre-configured with tools like Node.js, Python, PostgreSQL, MongoDB, and Heroku, and includes useful scripts to streamline development.

---

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
   1. [For Gitpod Users](#for-gitpod-users)
   2. [For VS Code Users](#for-vs-code-users)
- [Project Structure](#project-structure)
- [Custom Scripts and Aliases](#custom-scripts-and-aliases)
- [Recommended Extensions](#recommended-extensions)
- [Why Prettier, ESLint, and Black Together?](#why-prettier-eslint-and-black-together)
- [FAQs](#faqs)
   
---

## Features

- Ready-to-use in **Gitpod** and **VS Code**.
- Supports **Node.js**, **Python** (with virtual environments), **PostgreSQL**, **MongoDB**, and **Heroku CLI**.
- Pre-configured **VS Code settings** and **Gitpod tasks**.
- Includes Python linting, code formatting, and additional tools.
- Easy-to-use custom aliases for frequently used commands.

---

## Getting Started

### For Gitpod Users

1. **Open the Repository in Gitpod**:
   - You can directly open the repository in Gitpod by navigating to the repository page and clicking the **Gitpod** button (if you have the Gitpod browser extension installed) or by prepending `gitpod.io/#` to the repo URL.

     ```bash
     https://gitpod.io/#https://github.com/yourusername/jaqi-vscode-project-starter
     ```

2. **Automatic Setup**:
   - The `.gitpod.yml` and `.gitpod.dockerfile` are configured to automatically set up your development environment. This includes:
     - Installing Node.js, Python, PostgreSQL, MongoDB, and Heroku CLI.
     - Creating a virtual environment for Python.
     - Installing all Python dependencies from `requirements.txt`.

3. **Starting the Project**:
   - Run the Django development server:

     ```bash
     python3 manage.py runserver 0.0.0.0:8000
     ```

   - You can use pre-configured aliases, such as:

     ```bash
     run     # Alias for running the Django development server
     ```

4. **PostgreSQL & MongoDB**:
   - PostgreSQL and MongoDB are pre-installed and can be started automatically.
   - The alias `set_pg` configures the `PGHOSTADDR` environment variable for PostgreSQL.

[Back to the top](#project-setup-guide-for-lazydog)


### For VS Code Users

1. **Clone the Repository**:
   - Clone the repository to your local machine:

     ```bash
     git clone https://github.com/yourusername/jaqi-vscode-project-starter.git
     cd jaqi-vscode-project-starter
     ```

2. **Python Virtual Environment Setup**:
   - Create a virtual environment (if you’re using Python):

     ```bash
     python3 -m venv env
     
     # Linux/MacOS
     source env/bin/activate

     # Windows
     env\Scripts\activate

     ```

3. **Install Dependencies**:
   - Install Python dependencies:

     ```bash
     pip install -r requirements.txt
     ```

4. **VS Code Configuration**:
   - This repository includes pre-configured **VS Code settings** and **debugging configurations** for Django:
     - Open the repository folder in VS Code.
     - Use the **`launch.json`** file to run and debug the Django app by pressing `F5` or clicking the green "play" button.

5. **Custom Aliases**:
   - If you wish to use the custom aliases (like `run` for starting Django), add the following to your `.bashrc` or `.zshrc`:, or:
   
     ```bash
     alias run="python3 manage.py runserver 0.0.0.0:8000"
     ```
      or:
      ``` 
      pip install django shortcuts
      ```
      Edit: *[EV](https://github.com/EVondrus)*

[Back to the top](#project-setup-guide-for-lazydog)

---

## Project Structure

```bash
project-root/
├── .gitpod.yml                # Gitpod tasks and extensions configuration
├── .gitpod.dockerfile         # Dockerfile to set up the Gitpod environment
├── .vscode/                   # VS Code settings for the project
│   ├── settings.json          # Formatting and editor settings
│   ├── launch.json            # Debug configurations for Django
│   ├── extensions.json        # Recommended VS Code extensions
│   ├── init_tasks.sh          # Initialization script (e.g., for SQLite, virtualenv)
│   ├── repo_updater.py        # Script for repository migrations and updates
│   ├── uptime.sh              # Script to track uptime and monitor basic stats
│   ├── heroku_config.sh       # Script to configure Heroku API key
│   └── make_url.py            # Utility for creating Cloudinary URLs from config
├── requirements.txt           # Python dependencies
├── manage.py                  # Django entry point
├── README.md                  # This file
├── .gitignore                 # Ignored files and directories
└── ...                        # Other project files
```
[Back to the top](#project-setup-guide-for-lazydog)

## Custom Scripts and Aliases

The project includes several useful scripts and aliases for Gitpod users and developers:

- **repo_updater.py**: A Python script to help with migration tasks or repository version control updates.
- **heroku_config.sh**: Configures your Heroku CLI with your API key.
- **Custom Aliases**:
  - **run**: Alias to run the Django server.
  - **set_pg**: Configures PostgreSQL's `PGHOSTADDR` variable.
  - **mongo**: Alias for running MongoDB shell commands.

## Recommended Extensions

These extensions will be automatically installed in Gitpod and are recommended for VS Code users:

- **Python** (`ms-python.python`): For Python development, debugging, and IntelliSense in VS Code.
- **Auto Close Tag** (`formulahendry.auto-close-tag`): Automatically closes HTML and JSX tags while you type.
- **Prettier - Code Formatter** (`esbenp.prettier-vscode`): A code formatter for HTML, CSS, JavaScript, and JSX. Ensures consistent formatting across the project.
- **ESLint** (`dbaeumer.vscode-eslint`): Lints JavaScript and React (JSX) code. Helps catch potential issues and enforce consistent coding standards.
- **Black** (`ms-python.black-formatter`): An opinionated Python code formatter that enforces consistency across Python files.
- **Bootstrap 4 CDN Snippets** (`eventyret.bootstrap-4-cdn-snippet`): Adds quick Bootstrap 4 snippets to speed up development.
- **Jupyter** (`ms-toolsai.jupyter`): Adds Jupyter notebook support to VS Code for data science or quick Python testing.

[Back to the top](#project-setup-guide-for-lazydog)


### Why Prettier, ESLint, and Black Together?

- **Prettier** handles automatic formatting like indentation, line spacing, and wrapping for JavaScript, HTML, and CSS.
- **ESLint** helps find potential errors and enforces JavaScript/React code standards.
- **Black** ensures Python code is consistently formatted with minimal setup.
- When used together, Prettier and ESLint ensure both the style and correctness of your frontend code, while Black enforces Python formatting.

To configure Prettier and ESLint together without conflicts, you can use this ESLint configuration:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ]
}
```
For Black, add this setting to your Python configuration in VS Code to automatically format Python files on save:

```json
{
  "python.formatting.provider": "black"
}
```
Edit: *[EV](https://github.com/EVondrus)*

## FAQs

### How do I contribute to this project?

1. Fork the repository.
2. Make your changes.
3. Open a pull request!

For detailed guidelines on contributing, please check our [Project Contributing Guide]().

### Made By

[JaqiKal](https://github.com/JaqiKal/)


### I’m getting an error with PostgreSQL or MongoDB in Gitpod. What should I do?

- Ensure that you are using the correct aliases and environment variables to start and configure the databases.

[Back to the top](#project-setup-guide-for-lazydog)

---
