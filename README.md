# Custom VSCode Project Starter

This repository provides a customizable starter template for development projects using both **Gitpod** and **VS Code** environments. It is pre-configured with tools like Node.js, Python, PostgreSQL, MongoDB, and Heroku, and includes useful scripts to streamline development.

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
     source env/bin/activate
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
   - If you wish to use the custom aliases (like `run` for starting Django), add the following to your `.bashrc` or `.zshrc`:

     ```bash
     alias run="python3 manage.py runserver 0.0.0.0:8000"
     ```

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

## Custom Scripts and Aliases

This project includes several useful scripts and aliases for Gitpod users and developers:

- **repo_updater.py**: A Python script to help with migration tasks or repository version control updates.
- **heroku_config.sh**: Configures your Heroku CLI with your API key.
- **Custom Aliases**:
  - **run**: Alias to run the Django server.
  - **set_pg**: Configures PostgreSQL's `PGHOSTADDR` variable.
  - **mongo**: Alias for running MongoDB shell commands.

## Recommended Extensions

These extensions will be automatically installed in Gitpod and are recommended for VS Code users:

- **Python** (`ms-python.python`): For Python development.
- **Auto Close Tag** (`formulahendry.auto-close-tag`): Automatically close HTML tags.
- **Beautify** (`hookyqr.beautify`): Code formatter for HTML, CSS, and JavaScript.
- **Bootstrap 4 CDN Snippets** (`eventyret.bootstrap-4-cdn-snippet`): Quick Bootstrap 4 snippets.
- **Jupyter** (`ms-toolsai.jupyter`): Jupyter notebook support in VS Code.

## FAQs

### How do I contribute to this project?

1. Fork the repository.
2. Make your changes.
3. Open a pull request!

### Made By

[JaqiKal](https://github.com/JaqiKal/)


### I’m getting an error with PostgreSQL or MongoDB in Gitpod. What should I do?

- Ensure that you are using the correct aliases and environment variables to start and configure the databases.
