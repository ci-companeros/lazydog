# Project Contribution Guide for LazyDog

Thank you for considering contributing to *LazyDog*! We welcome all kinds of contributions, whether you’re fixing bugs, adding new features, or improving documentation. Follow this guide to ensure your contribution process is smooth and efficient.

---

## Table of Contents

- [How to Contribute to LazyDog](#how-to-contribute-to-lazydog)
   1. [Fork the Repository](#1-fork-the-repository)
   2. [Clone the Repository](#2-clone-the-repository)
   3. [Create a New Branch](#3-create-a-new-branch)
   4. [Make Your Changes](#4-make-your-changes)
   5. [Test Your Changes](#5-test-your-changes)
   6. [Commit Your Changes](#6-commit-your-changes)
   7. [Push to Your Fork](#7-push-to-your-fork)
   8. [Open a Pull Request](#8-open-a-pull-request)
   9. [Wait for Review](#9-wait-for-review)
- [Guidelines for Contributions](#guidelines-for-contributions)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [Adding New Features](#adding-new-features)
- [Reporting Bugs or Issues](#reporting-bugs-or-issues)
- [Thank You!](#thank-you)

## How to Contribute to LazyDog

### 1. Fork the Repository
Start by forking the main repository to your own GitHub account. This will create a personal copy where you can work on your changes without affecting the original project.

- On the main page of the repository, click the **Fork** button at the top-right corner.
- You’ll now have a copy of the repository under your GitHub account.

### 2. Clone the Repository
Clone the forked repository to your local machine so you can make changes.

```bash
git clone https://github.com/YOUR-USERNAME/lazydog.git
cd lazydog
```
For detailed instructions on setting up the development environment, please refer to the [Project Setup Guide](setup-guide.md).

### 3. Create a New Branch
Before you start working on changes, create a new branch. This keeps your main branch clean and allows you to work on different features or bug fixes separately.

```bash
git checkout -b feature/your-branch-name
```

Name your branch something meaningful, such as `feature/add-rating-system` or `bugfix/fix-signup-error`.

### 4. Make Your Changes
Now you’re ready to start working on the project! Whether you’re adding new features, fixing bugs, or updating documentation, **make your changes locally**.

Ensure your changes align with the project’s design and coding standards.
If you’re adding a new feature, consider writing unit tests to cover your code.

### 5. Test Your Changes
Make sure your changes work by running tests and verifying that no existing functionality is broken.

```bash
# Run the tests
python manage.py test
```
Test the application locally in development mode:

```bash
# Run the server
python manage.py runserver
```

### 6. Commit Your Changes
Once you're satisfied with your changes, commit them to your local branch.

```bash
git add .
git commit -m "Description of your changes"
```

Write a clear, descriptive commit message that explains what you’ve done. Follow these guidelines for your commit messages:

#### Commit Message Format:
- **Title:**
  - Use a short, concise title to summarize your changes (maximum 50 characters).
  - Start with a type prefix: `feat:`, `fix`:, `docs:`, `chore:`, etc.
- **Body:**
  - Include a detailed description of your changes (wrap at 72 characters).
  - Explain the reasoning behind the changes, how they were implemented, and any relevant context.
- **Reference Issues:**
  - If your changes relate to a specific issue, include the issue number in the title or body (e.g., "fix: correct signup error (#123)").
- Example commit:

  ```bash
  git commit -m "docs: Add Project Contribution Guide" 
  -m "Add a comprehensive guide for contributing to LazyDog, including:" 
  -m "Steps for forking, cloning, creating branches, and making changes." 
  -m "Guidelines for commit messages and contribution etiquette." 
  -m "Instructions on testing changes and opening pull requests." 
  -m "Information on setting up the development environment." 
  -m "Sections on reporting bugs and adding new features."

  -m "Related issues: #22, #25"
  ```


### 7. Push to Your Fork
Push your branch to the forked repository on GitHub.

```bash
git push origin feature/your-branch-name
```

### 8. Open a Pull Request
Once your changes are pushed, open a pull request to the main repository.

  1. Navigate to the Pull Requests tab in the main repository.
  2. Click **New pull request**.
  3. Select your branch
  4. Provide a description of the changes you’ve made, why they are needed, and how they’ve been tested.

### 9. Wait for Review
After submitting your pull request, the maintainers will review your code. They may ask questions, suggest changes, or approve your request for merging. Be responsive and open to feedback!

[Back to the top](#project-contribution-guide-for-lazydog)

---

## Guidelines for Contributions
To make the review process smoother and maintain the quality of the codebase, please follow these guidelines:

- **Follow the Code Style:** Keep your code clean and consistent with the project’s coding standards. 
- **Follow standard conventions:** PEP8 for Python and Prettier/ESLint for JavaScript.
- **Write Descriptive Commit Messages:** Your commit messages should clearly describe what has been changed and why.
- **Test Your Changes:** Always test your code before submitting. This includes writing unit tests for new features or checking that your bug fixes don’t introduce new issues.
- **Update Documentation:** If your changes affect the documentation (e.g., README, API docs), make sure to update it accordingly.
- **Foster a Positive Environment:** Please adhere to the project’s [Code of Conduct]() to help create a supportive and inclusive community

---

## Setting Up the Development Environment
To contribute effectively, ensure you have the right development environment setup.

- Requirements:
  - **Python:** Ensure you have Python 3.x installed.
  - **Django:** This project uses Django as the web framework.
  - **React:** For frontend development, you’ll need to work with React.

For detailed instructions on setting up the project, please refer to the [Project Setup Guide](setup-guide.md) to get started quickly and smoothly.

---

## Adding New Features
- If you’re planning to add a new feature, please consider opening an issue first to discuss it with the maintainers.
 - This avoids redundant work or introducing features that don’t align with the project’s goals.


 For current project tasks, feel free to explore our [Kanban board](https://github.com/orgs/ci-companeros/projects/2) or create a new [Issue](https://github.com/ci-companeros/lazydog/issues/new/choose) to propose your idea.

 ---

## Reporting Bugs or Issues
If you find a bug or an issue in the project, we encourage you to report it in the [Issues](https://github.com/ci-companeros/lazydog/issues) section of the repository.

- Provide a clear description of the problem.
- If possible, include steps to reproduce the issue.
- Suggest a potential solution or workaround, if applicable.

---

### **Thank you for contributing to LazyDog!**

Your contributions make the project better and help the student community. We’d love to see you in the community! Join discussions, share ideas, and help us grow together.

*We appreciate your efforts!*

[Back to the top](#project-contribution-guide-for-lazydog)

---
