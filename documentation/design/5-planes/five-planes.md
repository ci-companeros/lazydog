<!-- markdownlint-disable MD033 -->
# The 5 Planes of Web Development: A Blueprint for LazyDog

In the ever-evolving landscape of web development, a structured approach is essential for creating successful projects. This document outlines the **5 Planes of Web Development** as a comprehensive blueprint for LazyDog, a platform designed to streamline access to high-quality educational resources.

 Each plane—**Strategy, Scope, Structure, Skeleton, and Surface**—provides a clear framework for understanding the rationale behind design decisions and technical implementations.

By following these principles, LazyDog aims to foster community engagement, enhance user experience, and facilitate learning for developers at different levels.

*Dive in to explore the details that shape our vision and execution!*

## Content

- [Strategy (Why?)](#strategy-why)
- [Scope (What?)](#scope-what)
  - [Technology Stack](#technology-stack)
  - [User Stories](#user-stories)
  - [Summary of Core Features](#summary-of-core-features)
  - [Prioritization of Features](#prioritization-of-features)
- [Structure (How does it work?)](#structure-how-does-it-work)
  - [Platform Structure](#platform-structure)
  - [Flow Diagram](#flow-diagram)
  - [Wireframes](#wireframes)
  - [Entity Relationship Diagram (ERD)](#entity-relationship-diagram-erd)
- [Skeleton (How is it designed?)](#skeleton-how-is-it-designed)
- [Initial Design Plan](#initial-design-plan)
- [Surface (What does it look like?)](#surface-what-does-it-look-like)
  - [Color Scheme](#color-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
- [List of Tools & Services](#list-of-tools-services)

## Strategy (Why?)

*LazyDog* was built to address the challenge of finding high-quality, categorized educational resources in one place. It is aimed at students and developers looking to discover or contribute valuable content, with features that encourage community engagement through ratings and comments. The platform helps users enhance their learning journey and share insights from a range of development topics.

[Back to Content](#content)

## Scope (What?)

This section outlines the core functionality of the platform, the features planned for the MVP (Minimum Viable Product), and the technologies used. The goal was to focus on essential features for resource submission, searchability, and community feedback while allowing for future scalability.

<a id="technology-stack"></a>
<details>
<summary><b>Technology Stack</b></summary>

- Frontend

  - **HTML/CSS/JavaScript**: Core technologies for building the structure, styling, and interactivity of the website.
  - **React.js**: A popular JavaScript library for building dynamic user interfaces, with components that manage state and handle complex UI interactions.
  - **Tailwind CSS**: A utility-first CSS framework for building custom designs quickly with responsive design out of the box.

- Backend

  - **Node.js**: A JavaScript runtime used on the backend to handle requests and manage user authentication and resource submissions.
  - **Django REST Framework**: Used for creating RESTful APIs, allowing communication between the frontend and backend services.
  - **PostgreSQL**: A powerful open-source relational database used to store user accounts, submitted resources, ratings, and comments.

- OAuth

  - **OAuth**: A secure authentication method allowing users to log in using third-party providers such as Google, GitHub, etc.

- Hosting

  - **Frontend Hosting**: Vercel is used to host the React.js frontend, providing fast, global deployment and a seamless development workflow.
  - **Backend Hosting**: Free-tier hosting solutions (TO BE DECIDED) will be used to host the Node.js/Django backend and PostgreSQL database. 🚨 <span style="color: red;">***OBS vilken hosting?***</span>

</details>

<a id="user-stories"></a>
<details>
  <summary><strong>User Stories</strong></summary><br>

Please visit our [project Kanban board for details](https://github.com/orgs/ci-companeros/projects/2)

[Back to Content](#content)

</details>

<a id="summary-of-core-features"></a>
<details>
  <summary><strong>Summary of Core Features</strong></summary>

For more information on our key features, refer to the [Core Features chapter](https://github.com/ci-companeros/lazydog/blob/main/README.md#core-features).

[Back to Content](#content)

</details>

<a id="prioritization-of-features"></a>
<details>
  <summary><strong>Prioritization of Features</strong></summary><br>

This section outlines the prioritization of features, identifying the essential ones for the initial launch (MVP - Minimum Viable Product) and which are reserved for future iterations. By prioritizing features based on their importance to both user experience and project goals, this breakdown ensures that the most critical functionality is delivered first, guiding development through an effective and incremental build process while managing expectations.

- Please visit our [project Kanban board for details](https://github.com/orgs/ci-companeros/projects/2) for details on prioritization.

[Back to Content](#content)

</details><br>

[Back to Content](#content)

## Structure (How does it work?)

The platform includes key features such as user authentication, resource categorization, and search functionality, all of which enhance user interaction with educational content. Logged-in users can contribute resources, rate them, and leave comments, creating an interactive feedback loop that highlights the most useful resources.

This section provides an overview of the platform’s structure, including user workflows, visual layout (wireframes), and database design (ERD), which together guide the user experience and data flow throughout the application.

<a id="platform-structure"></a>
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

[Back to Content](#content)

</details>

<a id="flow-diagram"></a>
<details>
  <summary><b>Flow diagram</b></summary>
  
The flow diagram illustrates the user's journey through the platform, showing how they interact with features such as signing up, submitting resources, and providing feedback.

![Flow Diagram](/documentation/design/flow/flow-jk.webp)

</details>

<a id="wireframes"></a>
<details>
  <summary><b>Wireframes</b></summary>
  
The wireframes provide a visual representation of the platform's interface, showing the layout and positioning of elements.

For more information please refer to [design documentation about wireframes](/documentation/design/wireframes/wireframes.md)
</details>

<a id="entity-relationship-diagram-erd"></a>
<details>
  <summary><b>Entity Relationship Diagram (ERD)</b></summary>
  
The ERD illustrates the structure of the database and the relationships between entities, such as users, resources, ratings, and comments.

[ERD](/documentation/design/erd/erd.md)

![ERD](/documentation/design/erd/erd-jk.webp)

</details>
<br>

[Back to Content](#content)

## Skeleton (How is it designed?)

This section focuses on the detailed design of individual components within the platform. It provides insights into the layout and interaction of key elements such as buttons, forms, and resource cards. The goal is to create an intuitive, user-friendly experience that enhances navigation and interaction with the platform.

<a id="initial-design-plan"></a>
<details>
  <summary><strong>Initial Design Plan</strong></summary>

1. **Homepage (Landing Page)**
   - *Header*: Contains site logo and navigation links (Home, Resources, (categories dropdown), Contribute (form), About, Login/Signup).
   - *Search Bar*: Prominent search bar for quick access to resources.
   - *Popular Categories*: Highlights the main categories such as Programming and Tools.
   - *Trending Resources*: Displays top-rated or recently popular resources.
   - *Call to Action*: Encourages users to sign up to contribute and engage with the platform.

2. **Resource Cards / Resource Listing Page**
   - Each *individual resource* is displayed as a card, showing the title, description, category, (star-)rating, no of likes and comments.
   - *Interaction Elements*: Includes buttons for viewing more details, rating, and leaving comments.
   - *Category View*: When a category is selected, display all resources under that category.
   - *Additionals*: Include a sidebar or top filter options for sorting by rating, date, etc.

3. **Forms**
   - *Signup/Login Form*: Simple, user-friendly forms with fields for username and password. Optional email field for signup and/or option for social login (if desired, e.g., Google, GitHub) to make the process faster.
   - *Resource Submission Form*: Allows logged-in users to submit resources, including fields for the URL, description, and category selection.

4. **Resource Detail Page**
   - *Full Resource View*: Display full resource description and link. Show comments and ratings.
   - *Interactive Section*: Logged-in users can rate the resource and leave a comment.

5. **User Dashboard**
   - Available after login.
     - *My Submissions*: Displays the user's submitted resources with options to edit or delete.
     - *My Comments*: Shows a history of the user’s comments.
   - *Submit Resource*: Direct access to the submission form.

6. **Admin Dashboard (Optional)**
   - For moderation and analytics, admins can manage submitted resources, review flagged content, and track engagement.
     i.e. Admins can see a queue of newly submitted resources for approval, option to manage user accounts, if needed.

</details>
<br>

[Back to Content](#content)

## Surface (What does it look like?)

The platform has a modern design with a focus on usability and accessibility. The color scheme and typography were carefully selected to maintain readability, while responsive design ensures usability across different device types.

<a id="color-scheme"></a>
<details>
<summary><b>Color scheme</b></summary><br>
  
</details>

<a id="typography"></a>
<details>
<summary><b>Typography</b></summary><br>

</details>

<a id="imagery"></a>
<details>
<summary><b>Imagery</b></summary><br>

</details>

<a id="list-of-tools-services"></a>
<details>
<summary><b>List of Tools & Services</b></summary>

<br>

- [Am I Responsive?](http://ami.responsivedesign.is/) is used to show the website image on a range of devices.
- [ASPOSE](https://products.aspose.app/pdf/sv/conversion/jpg-to-webp#) is used to convert image to WEBP.
- [Balsamiq](https://balsamiq.com/) is used to create wireframes.
- [Coolors](https://coolors.co/) is used to create the colour scheme palette.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input) is used to check code ensuring that my CSS is error-free and adheres to the latest web standards.
- [DevTools](https://developer.chrome.com/docs/devtools) to help in edit pages on-the-fly and diagnose problems quickly.
- [Diffchecker - text](https://www.diffchecker.com/text-compare/) is used to check code snippets.
- [Favicon.io](https://favicon.io/) is used to create favicon.
- [Font Awesome](https://fontawesome.com/) is used for the iconography on the website.
- [Git](https://git-scm.com/) is used for version control.
- [Gitpod](https://gitpod.io) streamlines your development process by providing a pre-configured, cloud-based development environment that's instantly ready for coding.
- [Github](https://github.com/) is essential for version control, allowing you to track changes, collaborate with others (if applicable), and secure online code storage.
- [Google Dev Tools](https://developers.google.com/web/tools) is used during testing, debugging and styling.
- [Google Fonts](https://fonts.google.com/) is a catalog of free, open-source fonts. Used for typography.
- [Looka](https:www.looka.com) ia used for the logo and symbol.
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [NVDA](https://www.nvaccess.org/download/), NonVisual Desktop Access is a free and open-source, portable screen reader for Microsoft Windows.
- [Tiny PNG](https://tinypng.com/) is used to compress images.
- [UXwing](https://uxwing.com/) is a provider of free icons free for commercial use.
- [Wave](https://wave.webaim.org) is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities.
- [Web Disability Sim](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) is a google chrome extension that allows you to view your site as people with accessibility needs would see it.

</details><br>

[Back to Content](#content)
<!-- markdownlint-enable MD033 -->