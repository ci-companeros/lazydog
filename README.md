# LazyDog - Student Resource Platform

<div style="display: flex; justify-content: space-around;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
</div>
<br>

This site [ADD DESCRIPTION]

[Deployed site](#)

---
<a id="table-of-contents"></a>

## Content

- [LazyDog - Student Resource Platform](#lazydog---student-resource-platform)
- [Strategy](#strategy-why)
- [Scope](#scope-what)
- [Structure](#structure-how-does-it-work)
- [Skeleton](#skeleton-how-is-it-designed)
- [Surface](#surface-what-does-it-look-like)
- [Technology Stack](#technology-stack)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## Strategy (Why?)

> `Help Text - to be removed:`  
> *Goal*: Define the purpose and objectives of your project. Answer questions like `"What are we building?"` and `"Who is it for?"`.
>
> *Activities*:  
>
> - Identify user needs and business goals.  
> - Determine core features and the project's scope.  
> - Perform market and user research.  
>
> *Output*: A clear understanding of the product's purpose, the audience, and what success looks like (e.g., features, goals, user personas).

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Scope (What?)

> `Help Text - to be removed:`  
> *Goal*: Define what features and functionality your application will provide based on the strategy.
>
> *Activities*:  
>
> - List the features, functionality, and content.  
> - Define what the project will include and what it won't (prioritizing).  
> - Create user stories and requirements.  
>
> *Output*: A detailed list of the features, functionalities, and requirements that need to be developed.

<details>
  <summary><strong>User Stories</strong></summary>

| Title | User Story | Epic |
|---|---|---|
| [Initialize Project Repository on GitHub](https://github.com/ci-companeros/lazydog/issues/1) | As a developer, I can create a repository on GitHub so that we have a centralized location for our project code, allowing collaboration and version control from the very beginning. | Initialize |
| [Establish Branch Protection Rules on GitHub](https://github.com/ci-companeros/lazydog/issues/2) | As a developer, I can set up branch protection rules for the main branch so that the integrity of our codebase is maintained through required reviews and status checks before merging. | Initialize |
| [Create & Update ERD](https://github.com/ci-companeros/lazydog/issues/3) | As a developer I can create an ERD diagram for the database structure so that we can visualize and plan how data will be organized for the application. | Setup |
| [Create & update Flow chart](https://github.com/ci-companeros/lazydog/issues/4) | As a developer, I can create a flowchart so that I can visually represent the process for better understanding and implementation. | Setup |

<br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
  <summary><strong>Summary of Core Features</strong></summary>

1. *User Accounts*:

   - Users sign up with a username and password.
   - Logged-in users gain access to additional features, such as submitting resources, rating, and commenting.

2. *Categorized Resource Listings*:

   - Resources are divided into categories (e.g., programming languages, frameworks, tools, etc.) and are fully searchable.

   1. **Project 1 - Introduction to Web dev**
      - Tech covered: HTML, CSS
      - Subcategories:
        - HTML: Docs, articles, YouTube, games
        - CSS: Docs, articles, YouTube, games
   2. **Project 2 - Javascript fundamentals**
      - Tech covered: Javascript
      - Subcategories:
        - Docs, articles, YouTube, games
   3. **Project 3 - Python Basics**
      - Tech covered: Python
      - Subcategories:
        - Docs, articles, YouTube, games
   4. **Project 4 - Frameworks & Databases**
      - Tech covered: Django, PostgresSQL
      - Subcategories:
        - Docs, articles, YouTube, games
   5. **Project 5 - Specializations**
      - Tech covered: Advanced Frontend, Predictive Analytics, E-commerce
      - Subcategories:
        - Docs, articles, YouTube, games

3. *Resource Submission Form*:
   - Users can submit URLs along with a short description, stating why the resource is useful and what it’s for.
   - Users must choose a category for the resource.

4. *Community Interaction*:
   - Logged-in users can rate resources and leave comments, creating a feedback loop for which resources are most helpful.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

## Structure (How does it work?)

> `Help Text - to be removed:`  
> *Goal*: Organize how users will navigate and interact with the application. Establish a logical hierarchy of content and features.
>
> *Activities*:  
>
> - Plan information architecture (how content is structured).  
> - Define workflows, navigation flows, and content organization.  
> - Create wireframes or basic UI layout.  
>
> *Output*: Site maps, user flow diagrams, and a clear blueprint of how the application will be structured.

<details>
  <summary><strong>Platform Structure</strong></summary>

1. User Authentication (Signup/Login)
   - *Sign Up*:
     - Fields: Username, password. (email)
     - Optional: Email verification to prevent spam.
   - *Login*:
     - Fields: Username, password.
     - "Forgot password" flow for recovery.

2. Categorized Resource Listings

   - *Categories*:
     - Divide resources into logical groups like:
       - Programming Languages and frameworks (HTML, CSS, JavaScript, Python, Django, etc.)
       - Tools (IDEs, testing tools, etc.)
     - Each category should be filterable and searchable.
   - *Search*:
     - A dynamic search bar to filter by keywords.
     - Optional: Filters like "highest-rated," "most recent."

3. Resource Submission Form

   - Available only to logged-in users.
   - *Fields*:
     - URL link (required).
     - Short description (required): Why the resource is useful.
     - Category selection (dropdown - required).
   - *Submission Review*:
     - Auto-approval or admin approval for submitted resources (depending on how open we want it)?

4. Rating & Commenting System

   - *Ratings*:
     - Simple 1-5 star system or thumbs up/thumbs down.
     - Aggregate rating score displayed on each resource.
   - *Comments*:
     - Logged-in users can leave short reviews or comments on each resource.
     - Optional: Upvote/downvote system for comments to highlight helpful feedback.

5. Admin Dashboard (Optional)

   - *Moderation*:
     - Admins can approve/reject submitted resources.
     - Flagged comments or resources can be reviewed and moderated.
   - *Analytics*:
     - Track which resources are most popular, user engagement, etc.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

## Skeleton (How is it designed?)

> `Help Text - to be removed:`  
> *Goal*: Lay out the user interface with more detail, focusing on the layout, positioning, and interaction of individual components.
>
> *Activities*:  
>
> - Design the interface elements (e.g., buttons, forms, post components).  
> - Work on component hierarchy, placement of UI elements.  
> - Ensure usability and interactivity (interaction design).  
>
> *Output*: Detailed wireframes, mockups, and a more refined UI design with placement of specific elements.

<details>
  <summary><strong>Initial Design Plan</strong></summary>

1. Homepage (Landing Page)
   - *Header*:
     - Site logo, navigation links (Home, Resources (categories dropdown), Contribute (form), About, Login/Signup).
   - *Search Bar*:
     - Prominent search feature to allow users to quickly find resources via keywords.
   - *Popular Categories*:
     - Highlight the main categories (e.g., Programming, Tools).
   - *Trending/Top Resources*:
     - Display a few trending or highly rated resources.
   - *Call to Action*:
     - Encourage users to sign up to contribute and interact with the platform.

2. Resource Listing Page

   - *Category View*:
     - When a category is selected, display all resources under that category.
     - Include a sidebar or top filter options for sorting by rating, date, etc.
   - *Individual Resource Cards*:
     - Each resource card displays:
       - Title, description, category.
       - Star rating or number of likes.
       - Comment count.
       - Option to “view details” to go to the full page?

3. Resource Detail Page

   - *Full Resource View*:
     - Display full resource description and link.
     - Show comments and ratings.
   - *Interactive Section*:
     - Logged-in users can rate the resource and leave a comment.

4. User Dashboard

   - Available after login.
   - *Tabs*:
     - *My Submissions*: List of resources the user has submitted, with edit/delete options.
     - *My Comments*: History of comments the user has left.
   - *Submit Resource*: Quick access to the resource submission form.

5. Sign-Up / Login Page

   - Clean and simple form layout.
   - Option for social login (if desired, e.g., Google, GitHub) to make the process faster.

6. Admin Dashboard (Optional)

   - *Resource Management*: Admins can see a queue of newly submitted resources for approval.
   - *User Management*: Option to manage user accounts, if needed.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

## Surface (What does it look like?)

> `Help Text - to be removed:`  
> *Goal*: Focus on the visual design, colors, typography, and final aesthetic details of the interface.
>
> *Activities*:  
>
> - Apply visual design principles, such as color schemes, fonts, and spacing.  
> - Ensure consistency in branding, style, and responsiveness.  
> - Implement final interactive details (animations, transitions, etc.).  
>
> *Output*: The finished user interface with a polished look and feel, ready for final deployment.

<details>
<summary><b>Color scheme</b></summary><br>
  
*Placeholder palette- to be removed*

[!!....  Add RATIONALE to the palette ....!!]

![Placeholder palette - to be removed](./docs/readme-img/placeholder%20palette%20-%20to%20be%20removed.webp)

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>Typography</b></summary><br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>Imagery</b></summary><br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

## Technology Stack

<details>
<summary><b>Frontend</b></summary>

- HTML/CSS/JavaScript (React.js for a dynamic UI).
- Tailwind CSS for responsive design.
<br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>Backend</b></summary>

- Node.js with Express for handling user authentication and resource submissions
- TBD!  or Django REST Framework.
- PostgreSQL for the database (storing users, resources, comments, etc.).
<br>

  *<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>OAuth</b></summary>

- OAuth for secure login.
<br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>Hosting</b></summary>

- Vercel/Netlify for frontend.
- Oracle/Google Cloud/AWS for backend and database.
- Firebase (part of Google Cloud) for auth, database storage.
<br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

## Testing

> `Help Text - to be removed:`  
> *Goal*: Verify the functionality, usability, and performance of the application.
>
> *Activities*:  
>
> - Write unit tests for individual components.  
> - Perform manual testing to validate navigation and workflows.  
> - Ensure responsiveness and browser compatibility.  
> - Validate code
>
> *Output*: A fully tested application that meets the defined requirements and functions as expected.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Deployment

The site was developed in VS Code/Gitpod, stored in GitHub as the local repository. XX was used to deploy the live website. The instructions to achieve this are below.

<details>
<summary><b>Local Deployment</b></summary>

### How to Fork

TBD

### How to Clone

TBD

</details>

<br>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Credits

### Code Used

- {{RESOURCE_DESCRIPTION}}, created by {{AUTHOR}} and sourced from [{{SOURCE_NAME}}]({{SOURCE_URL}})

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

### Acknowledgements

- Special thanks to any tutorials, courses, or communities that helped with this project.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

---

*Written by [EVondrus](https://github.com/EVondrus), [JaqiKal](https://github.com/JaqiKal), [NiclO1337](https://github.com/NiclO1337) & [JorgenDIF](https://github.com/JorgenDIF)*
