# LazyDog - Your Code Compass
<!-- markdownlint-disable MD033 -->
![GitHub contributors](https://img.shields.io/github/contributors/ci-companeros/lazydog?color=blue)  <!-- Blue for contributors -->
![GitHub last commit](https://img.shields.io/github/last-commit/ci-companeros/lazydog?color=brightgreen)  <!-- Green for activity -->
![GitHub language count](https://img.shields.io/github/languages/count/ci-companeros/lazydog?color=orange)  <!-- Orange for language diversity -->
![GitHub license](https://img.shields.io/github/license/ci-companeros/lazydog?color=yellow)  <!-- Yellow for license info -->
![GitHub issues](https://img.shields.io/github/issues/ci-companeros/lazydog?color=darkred)  <!-- Red for issues -->
![GitHub pull requests](https://img.shields.io/github/issues-pr/ci-companeros/lazydog?color=purple)  <!-- Purple for PRs -->
![GitHub repo size](https://img.shields.io/github/repo-size/ci-companeros/lazydog?color=black)  <!-- Gray for repo size -->

<div style="display: flex; justify-content: space-around;">
  <img src="documentation/readme/readme-image/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
  <img src="documentation/readme/readme-image/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;"><img src="documentation/readme/readme-image/ld-black.jpg" alt="LazyDog with black glasses" style="width: 28%; border-radius: 5%;">
</div>
<br>

*LazyDog* is a collaborative student resource-sharing platform, designed and built by four developers as part of a continued learning project following a bootcamp. The platform allows users to share, rate, and comment on educational resources related to various programming and development topics. Our goal is to create a space for students to access, contribute, and engage with high-quality learning materials while reinforcing what we've learned during the bootcamp.

🚨 🚨 🚨 <span style="color: red;">***<a href="https://www.example.com" target="_blank">Live Demo</a>*** OBS FIxa länken!</span>

## Contents

- [Overview](#overview)
- [Features](#features)   🚨
- [Technologies](#technologies)
- [Installation](#installation)
- [Design Details](#design-details)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)

## Overview

*LazyDog* was built to address the challenge of finding high-quality, categorized educational resources in one place. It is aimed at students and developers looking to discover or contribute valuable content, with features that encourage community engagement through ratings and comments. The platform helps users enhance their learning journey and share insights from a range of development topics.

## Core Features

This section outlines the core functionality of the platform and the key features planned for the Minimum Viable Product (MVP).

1. **User Accounts**:
   - Users can create an account with a username, email, and password.
   - Logged-in users can submit resources, rate resources, and participate in discussions by leaving comments.

      <details>
      <summary><b>Screenshots</b></summary>

      ![Signup Page]()

      ![Login Page]()

      </details>

2. **Resource Categorization**:
   - Resources are organized into categories like programming languages, frameworks, and tools.
   - Each category includes subcategories with various types of resources, such as documentation, articles, YouTube tutorials, and games.  

   Example of categorized resources:
     - **Project 1 - Introduction to Web Dev**: HTML, CSS  
       Subcategories: Docs, Articles, YouTube, Games.

     - **Project 2 - JavaScript Fundamentals**: JavaScript  
       Subcategories: Docs, Articles, YouTube, Games.
  
     - **Project 3 - Python Basics**: Python  
       Subcategories: Docs, Articles, YouTube, Games.

        <details>
        <summary><b>Screenshots</b></summary>

        ![Resource Page]()

        </details>

3. **Resource Submission**:
   - Logged-in users can contribute by submitting new resources through a simple form.
   - The submission includes fields for a URL, title, short description, optional image, category, and tags to ensure proper categorization and relevance.

      <details>
      <summary><b>Screenshots</b></summary>

      ![Contribution Page]()

      </details>

4. **Rating & Commenting System**:
   - Users can rate resources on a 1-5 star scale.
   - The platform displays the average rating and the total number of ratings for each resource.
   - Users can leave comments to discuss resources, provide feedback, or ask questions.

      <details>
      <summary><b>Screenshots</b></summary>

      ![Rating Feature]()

      ![Comment Feature]()

      </details>

5. **User Dashboard**:
   - Logged-in users have access to a personal dashboard where they can:
     - View and manage their submitted resources.
     - See their previous comments and ratings.
     - Delete their account and associated data if they choose.

      <details>
      <summary><b>Screenshots</b></summary>

      ![User Dashboard]()

      </details>

6. **Community Interaction**:
   - Resources are rated and commented on by the community, allowing users to engage with and improve the platform.
   - The number of comments and the average rating help users identify the most valuable resources.

      <details>
      <summary><b>Screenshots</b></summary>

      ![Resource Detail Page]()

      ![Comment Section]()

      </details>

7. **Flagging Feature**:
   - Users can flag inappropriate or harmful content, ensuring the platform remains a safe and respectful space.
   - Admins review flagged resources or comments and take action when necessary (e.g., removing or moderating content).
      <details>
      <summary><b>Screenshots</b></summary>

      ![Flagging feature]()

      ![Flagging feature - Admin Dashboard]()

      </details>

8. **Responsive Design**:
   - The platform is fully optimized for both desktop and mobile devices, ensuring a seamless experience across all screen sizes.
      <details>
      <summary><b>Screenshots</b></summary>

      ![Large Screen]()

      ![Small Screen]()

      </details>

9. **Modern UI/UX**:
   - A clean, modern interface with accessible design features to ensure ease of use for all users, regardless of their abilities or preferences of dark or light mode. See further accessibility details in the [Testing documentation.](documentation/testing/TESTING.md)

      <details>
      <summary><b>Screenshots</b></summary>

      ![Light Mode]()

      ![Dark Mode]()

      </details>

For more details on features and to view the user stories, visit our [Kanban board](https://github.com/orgs/ci-companeros/projects/2).

## Technologies

- **Frontend**:  
  - React
- **Backend**:  
  - Django REST Framework
- **Database**:  
  - PostgreSQL
- **Deployment**:  
  - [Relevant services](https://example.com)

## Agile Development Process

### Our Agile Approach

- The development of *LazyDog* is guided by Agile principles, emphasizing flexibility, continuous improvement, and rapid adaptation to change. While not strictly adhering to traditional Agile practices such as scheduled sprints or scrums, the development process is inspired by Agile methodologies.

<details>
<summary><b>Read more</b></summary>
<br>

- Instead of working within defined sprint timelines, the project focuses on milestones that align with the overall vision. This straightforward approach prioritizes the development of core functionalities first, allowing for a solid foundation before expanding into more complex features.

- Bugs and issues encountered during development are recorded as bug issues and added to the backlog. This strategy allows for continuous progress in other areas while ensuring that the backlog is revisited periodically. Prioritization is based on the severity and impact of the issues, maintaining development momentum while systematically addressing and resolving concerns.

- User feedback is actively sought and analyzed to identify areas for improvement, ensuring that LazyDog evolves to meet the needs and expectations of its users effectively.

### MoSCoW Prioritization

- To assist with task prioritization, labels have been added to user stories.
- The MoSCoW method involves categorizing tasks with the following labels:
  - **MUST HAVE**
  - **SHOULD HAVE**
  - **COULD HAVE**
  - **WON'T HAVE**
- This method helps ensure that essential features are completed first, optimizing resource allocation and effectively guiding the project's development priorities.

For more details, please follow this link to our [GitHub Kanban board](https://github.com/orgs/ci-companeros/projects/2).
</details>

## Installation

To set up the project locally, follow these steps:

1. Clone the Repository:

   ```bash
   git clone https://github.com/your-username/lazydog.git
   ```

2. Navigate to the Project Directory:

    ```bash
    cd lazydog
    ```

3. Install Backend Dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Install Frontend Dependencies:

    ```bash
    npm install
    ```

5. Run the Backend Server:

    ```bash
    python manage.py runserver
    ```

6. Run the Frontend Development Server:

    ```bash
    npm start
    ```

## Usage

For detailed instructions on using the LazyDog platform, refer to the [Usage Guide.](documentation/guidelines/usage-guide.md)

## Design Details

This section provides an overview of the core design elements for the platform, with links to detailed documents.

### Development Framework - 5 Planes of Web Development

Our design and development process follows the **5 Planes of Web Development**: **Strategy, Scope, Structure, Skeleton, and Surface**. This framework guides our approach to ensure a user-centered design.

- **[Design Document - 5 Planes Framework](documentation/design/5-planes/x)**  🚨 <span style="color: red;">***OBS FIxa länken!***</span>

### Frontend Design

- **[Design Document - Color Schemes](documentation/design/color-scheme/)**
- **[Design Document - Typography](documentation/design/typography/)**
- **[Design Document - Wireframes](documentation/design/wireframes/)** (Figma design?) 🚨 🚨 🚨
- **[Design Document - UI Components](documentation/design/UI-components/)**

### Backend Design

- **[Design Document - Entity Relationship Diagram (ERD)](documentation/design/erd/erd-jk.webp)**

<details>
<summary><i>ERD relationships explained</i></summary>

#### User - Resource

- Cardinality: One (User) to Many (Resources)
- Description: A user can submit many resources, but each resource is submitted by one and only one user.

#### User - Comment

- Cardinality: One (User) to Many (Comments)
- Description: A user can write many comments, but each comment is written by one and only one user.

#### Resource - Comment

- Cardinality: One (Resource) to Many (Comments)
- Description: A resource can have many comments, but each comment is associated with one and only one resource.

#### Resource - Rating

- Cardinality: One (Resource) to Many (Ratings)
- Description: A resource can have many ratings, but each rating belongs to one and only one resource.

#### User - Rating

- Cardinality: One (User) to Many (Ratings)
- Description: A user can give many ratings, but each rating is provided by one and only one user.

#### Category - Resource

- Cardinality: One (Category) to Many (Resources)
- Description: A category can include many resources, but each resource belongs to one and only one category.

#### Resource - Tag (via Resource_Tag)

- Cardinality: Many (Resources) to Many (Tags)
- Description: A resource can have many tags, and a tag can be associated with many resources.

#### Resource_Tag (Join Table)

Cardinalities:

- Resource_Tag is linked to one and only one resource.
- Resource_Tag is linked to one and only one tag.

</details>

### Workflow & Processes

This section covers both frontend user interactions and backend processes, detailing how data flows through the platform.

- **[Design Document - Workflow](documentation/design/flow/)**

### User Experience

- **[Design Document - Wireframes](documentation/design/wireframes/)**

#### Defensive Design

Defensive design ensures a smooth user experience by providing clear feedback during user interactions.

- **Success Messages**:  
  Users receive positive feedback after successfully completing actions, confirming their requests were processed.

  ![Success message]()

- **Error Handling**:  
  If an action fails due to invalid data or other issues, users get specific, actionable error messages to guide them.

  ![Error message]()

## Testing

Testing is integral to ensuring the application operates as intended. Comprehensive testing documentation, including strategies and results, is available in the [Testing Document.](documentation/testing/TESTING.md)

<details>
<summary><b>What we tested</b></summary>
<br>

- **Functionality**: Ensured that all features—such as resource submissions, ratings, and comments—work as intended.
- **Usability**: Validated that users can navigate easily, interact with elements, and complete actions like signing up, logging in, submit and searching for resources.
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

## Contributing

**Contributions are welcome!**

Please review the [Contributing Guidelines](documentation/guidelines/contribution-guide.md) for more information on how to get involved.
🚨 <span style="color: red;">***OBS Är det rätt doc länkat? ***</span>

## Deployment

Detailed instructions for deploying the application can be found in the [Deployment Guide.](documentation/guidelines/CONTRIBUTION.md)

## Credits

A heartfelt thank you to everyone who contributed to our learning journey. We also appreciate the tools and services that supported us throughout this project.

<details>
<summary><b>Code Used</b></summary>
  
  - {{RESOURCE_DESCRIPTION}}, created by {{AUTHOR}} and sourced from [{{SOURCE_NAME}}]({{SOURCE_URL}})

</details>

<details>
<summary><b>Acknowledgements</b></summary>

- Special thanks to any tutorials, courses, or communities that helped with this project.

</details><br>

**[Back to Contents](#content)**


## License

This project is licensed under the MIT License. See the [LICENSE](C:\Users\ellav\lazydog\LICENSE) file for more details.

---
<br>*Readme authors: [EVondrus](https://github.com/EVondrus), [JaqiKal](https://github.com/JaqiKal), [NiclO1337](https://github.com/NiclO1337) & [JorgenDIF](https://github.com/JorgenDIF)*
<!-- markdownlint-enable MD033 -->