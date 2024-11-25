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

<span style="color: red;">***<a href="https://www.example.com" target="_blank">Live Demo</a>*** OBS Fixa länken!</span> 🚨 🚨 🚨

## Content

- [Overview](#overview)
- [Core Features](#core-features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Design Details](#design-details)
- [API Overview](#api-overview)
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

**[Back to Content](#content)**

## API Overview

This chapter outlines the structure of the current stable release for our web application. Our goal is to ensure a consistent and reliable interface for interacting with the various data models that form the core of our system, such as Users, Resources, Comments, and more.

Our API provides a stable set of endpoints that facilitate all the necessary CRUD operations for our application's primary models. This version reflects the current data structures, ensuring smooth interaction between the frontend and backend components. Our approach is designed to provide a reliable contract for any client that consumes this API, whether it's our own frontend or third-party integrations.

We recognize that our API will evolve over time to accommodate new features, enhancements, or structural changes. We strive to maintain backward compatibility whenever possible. Major changes—such as modifying existing endpoints, removing fields, or altering the behavior of the API—will be carefully considered to avoid breaking existing integrations and provide a seamless transition for all consumers.

For now, our focus is on delivering a comprehensive, consistent API, with the understanding that any significant changes will be communicated clearly to ensure stability for current and future clients.

Consult our [CHANGELOG.md](./#) for changes made over time.

<details>
<summary>Detailed view CRUP operations</summary>

### User Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                  | Response          |
|----------------|-----------------------|-----------------------|------------------------------------------------------|-------------------|
| Create         | /api/users            | Create a new user     | ```json { "username": "john", "password": "secure", "email": "john@mail.com" }``` | `201 Created`      |
| Read           | /api/users/{id}       | Retrieve a user       | ```json { "user_id": 1, "username": "john", "role": "admin" }``` | `200 OK`           |
| Update         | /api/users/{id}       | Update user info      | ```json { "email": "newemail@mail.com" }```                    | `200 OK`           |
| Delete         | /api/users/{id}       | Delete a user         | -                                                    | `204 No Content`  |

### Resource Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                        | Response          |
|----------------|-----------------------|-----------------------|------------------------------------------------------------|-------------------|
| Create         | /api/resources        | Create a new resource | ```json { "title": "Learn Python", "description": "A Python guide", "url": "example.com", "category_id": 1 }``` | `201 Created`      |
| Read All       | /api/resources        | List all resources    | ```json [ { "resource_id": 1, "title": "Learn Python" } ]```   | `200 OK`           |
| Read Single    | /api/resources/{id}   | Retrieve a resource   | ```json { "resource_id": 1, "title": "Learn Python" }```       | `200 OK`           |
| Update         | /api/resources/{id}   | Update a resource     | ```json { "title": "Advanced Python" }```                      | `200 OK`           |
| Delete         | /api/resources/{id}   | Delete a resource     | -                                                    | `204 No Content`  |

### Comment Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                           | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/comments         | Create a new comment  | ```json { "resource_id": 1, "content": "Great resource!" }``` | `201 Created`      |
| Read All       | /api/comments         | List all comments     | ```json [ { "comment_id": 1, "content": "Great resource!" } ]``` | `200 OK`           |
| Read Single    | /api/comments/{id}    | Retrieve a comment    | ```json { "comment_id": 1, "content": "Great resource!" }```   | `200 OK`           |
| Update         | /api/comments/{id}    | Update a comment      | ```json { "content": "Updated comment." }```                   | `200 OK`           |
| Delete         | /api/comments/{id}    | Delete a comment      | -                                                    | `204 No Content`  |

### Rating Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                          | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/ratings          | Add a rating          | ```json { "resource_id": 1, "score": 5 }```                       | `201 Created`      |
| Read All       | /api/ratings          | List all ratings      | ```json [ { "rating_id": 1, "score": 5 } ]```                  | `200 OK`           |
| Read Single    | /api/ratings/{id}     | Retrieve a rating     | ```json { "rating_id": 1, "score": 5 }```                      | `200 OK`           |
| Update         | /api/ratings/{id}     | Update a rating       | ```json { "score": 4 }```                                      | `200 OK`           |
| Delete         | /api/ratings/{id}     | Delete a rating       | -                                                    | `204 No Content`  |

### Flag Model

| CRUD Operation | Endpoint              | Description                    | Example Data (json)                                          | Response          |
|----------------|-----------------------|--------------------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/flags            | Create a new flag              | ```json { "resource_id": 1, "reason": "Inappropriate content" }``` | `201 Created`      |
| Read All       | /api/flags            | List all flags                 | ```json [ { "flag_id": 1, "reason": "Inappropriate content" } ]``` | `200 OK`           |
| Read Single    | /api/flags/{id}       | Retrieve a flag                | ```json { "flag_id": 1, "reason": "Inappropriate content" }```   | `200 OK`           |
| Update         | /api/flags/{id}       | Update flag status             | ```json { "status": "Reviewed" }```                             | `200 OK`           |
| Delete         | /api/flags/{id}       | Delete a flag                  | -                                                    | `204 No Content`  |

### Bookmark Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                         | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/bookmarks        | Create a new bookmark | ```json { "resource_id": 1 }```                                | `201 Created`      |
| Read All       | /api/bookmarks        | List all bookmarks    | ```json [ { "bookmark_id": 1, "resource_id": 1 } ]```          | `200 OK`           |
| Delete         | /api/bookmarks/{id}   | Delete a bookmark     | -                                                    | `204 No Content`  |

### Category Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                          | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/categories       | Create a new category | ```json { "name": "Programming", "description": "Coding-related content" }``` | `201 Created`      |
| Read All       | /api/categories       | List all categories   | ```json [ { "category_id": 1, "name": "Programming" } ]```     | `200 OK`           |
| Read Single    | /api/categories/{id}  | Retrieve a category   | ```json { "category_id": 1, "name": "Programming" }```         | `200 OK`           |
| Update         | /api/categories/{id}  | Update a category     | ```json { "description": "Updated description." }```           | `200 OK`           |
| Delete         | /api/categories/{id}  | Delete a category     | -                                                    | `204 No Content`  |

### Tag Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                         | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/tags             | Create a new tag      | ```json { "name": "Python", "description": "Python-related resources" }``` | `201 Created`      |
| Read All       | /api/tags             | List all tags         | ```json [ { "tag_id": 1, "name": "Python" } ]```               | `200 OK`           |
| Read Single    | /api/tags/{id}        | Retrieve a specific tag | ```json { "tag_id": 1, "name": "Python", "description": "Python-related" }``` | `200 OK`           |
| Update         | /api/tags/{id}        | Update a tag          | ```json { "description": "Updated tag description." }```       | `200 OK`           |
| Delete         | /api/tags/{id}        | Delete a tag          | -                                                     | `204 No Content`  |

### Notification Model

| CRUD Operation | Endpoint                  | Description                | Example Data (json)                                           | Response          |
|----------------|---------------------------|----------------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/notifications        | Create a new notification  | ```json { "user_id": 1, "message": "Your resource has been flagged." }``` | `201 Created`      |
| Read All       | /api/notifications        | List all notifications     | ```json [ { "notification_id": 1, "message": "Your resource has been flagged." } ]``` | `200 OK`           |
| Read Single    | /api/notifications/{id}   | Retrieve a notification    | ```json { "notification_id": 1, "message": "Your resource has been flagged." }``` | `200 OK`           |
| Update         | /api/notifications/{id}   | Update read status         | ```json { "is_read": true }```                                 | `200 OK`           |
| Delete         | /api/notifications/{id}   | Delete a notification      | -                                                    | `204 No Content`  |

### Audit Model

| CRUD Operation | Endpoint              | Description           | Example Data (json)                                           | Response          |
|----------------|-----------------------|-----------------------|----------------------------------------------------------------|-------------------|
| Create         | /api/audits           | Create an audit record | ```json { "user_id": 1, "action": "Created resource", "entity_type": "Resource", "entity_id": 5 }``` | `201 Created`      |
| Read All       | /api/audits           | List all audit records | ```json [ { "audit_id": 1, "action": "Created resource" } ]``` | `200 OK`           |
| Read Single    | /api/audits/{id}      | Retrieve an audit record | ```json { "audit_id": 1, "action": "Created resource", "entity_type": "Resource", "entity_id": 5 }``` | `200 OK`           |
| Delete         | /api/audits/{id}      | Delete an audit record | -                                                    | `204 No Content`  |

</details>

**[Back to Content](#content)**



## Technologies

- **Frontend**:  
  - React
- **Backend**:  
  - Django REST Framework
- **Database**:  
  - PostgreSQL
- **Deployment**:  
  - [Relevant services](https://example.com)🚨 <span style="color: red;">***OBS Fixa länken!***</span>

**[Back to Content](#content)**

## Agile Development Process

### Our Agile Approach

The development of *LazyDog* is guided by Agile principles, emphasizing flexibility, continuous improvement, and rapid adaptation to change. While not strictly adhering to traditional Agile practices such as scheduled sprints or scrums, the development process is inspired by Agile methodologies.

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
</details><br>

**[Back to Content](#content)**

## Installation

<details><summary>To set up the project locally, follow these steps:</summary><br>

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

</details><br>

**[Back to Content](#content)**

## Usage

For detailed instructions on using the LazyDog platform, refer to the [Usage Guide.](./documentation/guidelines/usage-guide.md)

**[Back to Content](#content)**

## Design Details

This section provides an overview of the core design elements for the platform, with links to detailed documents.

<details><summary><span>Development Framework - 5 Planes of Web Development</span></summary>

Our design and development process follows the **5 Planes of Web Development**: **Strategy, Scope, Structure, Skeleton, and Surface**. This framework guides our approach to ensure a user-centered design.

➡️ **[Design Document - 5 Planes Framework](./documentation/design/5-planes/five-planes.md)**

</details>

<details><summary><span>Frontend Design</span></summary>

➡️ **[Design Document - Color Schemes](./documentation/design/color-scheme/)**<br>
➡️ **[Design Document - Typography](./documentation/design/typography/)**<br>
➡️ **[Design Document - Wireframes](./documentation/design/wireframes/)** (Figma design? 🚨🚨🚨) <br>
➡️ **[Design Document - UI Components](./documentation/design/UI-components/)**

</details>

<details><summary><span>Backend Design</span></summary>

➡️ **[Design Document - Entity Relationship Diagram](./documentation/design/erd/erd.webp)**<br>
➡️ **[ERD relationships explained](./documentation/design/erd/erd.md)**

</details>

<details><summary><span>Workflow & Processes</span></summary>

This section covers both frontend user interactions and backend processes, detailing how data flows through the platform.

➡️ **[Design Document - Workflow](./documentation/design/flow/)**

</details>

<details><summary><span>User Experience</span></summary>

➡️ **[Design Document - Wireframes](./documentation/design/wireframes/)**

</details>

<details><summary><span>Defensive Design</span></summary>

Defensive design ensures a smooth user experience by providing clear feedback during user interactions.

- **Success Messages**:  
  Users receive positive feedback after successfully completing actions, confirming their requests were processed.

  ![Success message]()

- **Error Handling**:  
  If an action fails due to invalid data or other issues, users get specific, actionable error messages to guide them.

  ![Error message]()

</details><br>

**[Back to Content](#content)**

## Testing

Testing is integral to ensuring the application operates as intended. Comprehensive testing documentation, including strategies and results, is available in the [Testing Document.](./documentation/testing/TESTING.md)

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

</details><br>

**[Back to Content](#content)**

## Contributing

**Contributions are welcome!**

Please review the [Contributing Guidelines](./documentation/guidelines/contribution-guide.md) for more information on how to get involved. 🚨 <span style="color: red;">***OBS Fixa länken!***</span>

## Deployment

Detailed instructions for deploying the application can be found in the [Deployment Guide.](./documentation/guidelines/CONTRIBUTION.md)

**[Back to Content](#content)**

## Credits

A heartfelt thank you to everyone who contributed to our learning journey. We also appreciate the tools and services that supported us throughout this project.

<details>
<summary><b>Code Used</b></summary>
  
- {{RESOURCE_DESCRIPTION}}, created by {{AUTHOR}} and sourced from [{{SOURCE_NAME}}]({{SOURCE_URL}})

</details>

<details>
<summary><b>Acknowledgements</b></summary>

We would like to give special thanks to the tutorials, courses, and communities that provided invaluable guidance and support throughout the development of this project.

</details><br>

**[Back to Content](#content)**

## License

This project is licensed under the MIT License. See the [LICENSE](C:\Users\ellav\lazydog\LICENSE) file for more details.

---
<br>*Readme authors: [EVondrus](https://github.com/EVondrus), [JaqiKal](https://github.com/JaqiKal), [NiclO1337](https://github.com/NiclO1337) & [JorgenDIF](https://github.com/JorgenDIF)*

**[Back to Content](#content)**
<!-- markdownlint-enable MD033 -->
