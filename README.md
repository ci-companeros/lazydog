# LazyDog - Student Resource Platform

<div style="display: flex; justify-content: space-around;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
  <img src="./docs/readme-img/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
</div>
<br>

LazyDog is a collaborative student resource-sharing platform, designed and built by four developers as part of a continued learning project following a bootcamp. The platform allows users to share, rate, and comment on educational resources related to various programming and development topics. Our goal is to create a space for students to access, contribute, and engage with high-quality learning materials while reinforcing what we've learned during the bootcamp.

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

LazyDog was built to address the challenge of finding high-quality, categorized educational resources in one place. It is aimed at students and developers looking to discover or contribute valuable content, with features that encourage community engagement through ratings and comments. The platform helps users enhance their learning journey and share insights from a range of development topics.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Scope (What?)

This section outlines the core functionality of the platform, the features planned for the MVP (Minimum Viable Product), and the technologies used. The goal was to focus on essential features for resource submission, searchability, and community feedback while allowing for future scalability.

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
  - **Backend Hosting**: Free-tier hosting solutions (TO BE DECIDED) will be used to host the Node.js/Django backend and PostgreSQL database.

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>


<details>
  <summary><strong>User Stories</strong></summary><br>

Please visit our [project Kanban board for details](https://github.com/orgs/ci-companeros/projects/2)

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

<details>
  <summary><strong>Prioritization of Features</strong></summary><br>

This section outlines the prioritization of features, identifying the essential ones for the initial launch (MVP - Minimum Viable Product) and which are reserved for future iterations. By prioritizing features based on their importance to both user experience and project goals, this breakdown ensures that the most critical functionality is delivered first, guiding development through an effective and incremental build process while managing expectations.

- Please visit our [project Kanban board for details](https://github.com/orgs/ci-companeros/projects/2) for details on prioritization.

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

The platform features user authentication, resource categorization, and search functionality, allowing users to interact with educational content. Logged-in users can submit resources, rate them, and leave comments, creating a feedback loop for what content is most helpful.

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

The wireframes and initial design focus on a clean, intuitive user interface. Resources are organized into searchable categories, and the navigation is designed to guide users through the submission, browsing, and interaction process effortlessly.

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

The platform has a modern design with a focus on usability and accessibility. The color scheme and typography were carefully selected to maintain readability, while responsive design ensures usability across different device types.

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
- [Heroku](https://www.heroku.com) ia a platform for deploying and hosting web applications.
- [Look](https:www.looka.com) ia used for the logo and symbol.
- [Markup Validation Service](https://validator.w3.org/) is used to check code ensuring that my HTML is error-free and adheres to the latest web standards.
- [NVDA](https://www.nvaccess.org/download/), NonVisual Desktop Access is a free and open-source, portable screen reader for Microsoft Windows.
- [Tiny PNG](https://tinypng.com/) is used to compress images.
- [UXwing](https://uxwing.com/) is a provider of free icons free for commercial use.
- [Wave](https://wave.webaim.org) is a suite of evaluation tools that helps authors make their web content more accessible to individuals with disabilities.
- [Web Disability Sim](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla) is a google chrome extension that allows you to view your site as people with accessibility needs would see it.

</details>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

## Testing
The goal of testing is to ensure that the application functions correctly, delivers a smooth user experience, and performs well across different devices and browsers. Testing helps to identify and fix bugs, validate the design, and ensure that the system meets the defined requirements before deployment. 

The project underwent rigorous testing to ensure the functionality works as intended, with special focus on usability and performance across devices. Manual and automated tests were conducted to confirm that the app functions smoothly in various scenarios.

<details>
<summary><b>What we tested</b></summary>
<br>

- **Functionality**: Ensured that all features—such as resource submissions, ratings, and comments—work as intended.
- **Usability**: Validated that users can navigate easily, interact with elements, and complete actions like signing up, logging in, and searching for resources.
- **Performance**: Checked the app's responsiveness, load times, and efficiency, especially on mobile devices.

</details>

<details>
<summary><b>How we tested</b></summary>
<br>

- **Unit Testing**: Each component and function was tested individually to confirm that they perform correctly in isolation.
- **Manual Testing**: A hands-on approach was used to simulate real user interactions, validating the flow and behavior of the app in various scenarios.
- **Cross-Browser and Device Testing**: We ensured the platform works smoothly on different browsers (Chrome, Firefox, Safari) and across multiple screen sizes (mobile, tablet, desktop).
- **Code Validation**: The code was checked for errors, optimized, and debugged for performance improvements.

</details>

<details>
<summary><b>Test report</b></summary>
<br>
  
- Test execution [result](#)

</details>


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

<details>
<summary><b>Code Used</b></summary>

Special thanks to our bootcamp mentors and the following tools and services used throughout the project.

  - {{RESOURCE_DESCRIPTION}}, created by {{AUTHOR}} and sourced from [{{SOURCE_NAME}}]({{SOURCE_URL}})

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*

</details>

<details>
<summary><b>Acknowledgements</b></summary>

- Special thanks to any tutorials, courses, or communities that helped with this project.

</details>

*<span style="color: blue;">[Back to Content](#table-of-contents)</span>*


---

*Written by [EVondrus](https://github.com/EVondrus), [JaqiKal](https://github.com/JaqiKal), [NiclO1337](https://github.com/NiclO1337) & [JorgenDIF](https://github.com/JorgenDIF)*
