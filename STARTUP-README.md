# LazyDog - student resource platform

## Summary of Core Features

1. _User Accounts_:

   - Users sign up with a username and password.
   - Logged-in users gain access to additional features, such as submitting resources, rating, and commenting.

2. _Categorized Resource Listings_:

   - Resources are divided into categories (e.g., programming languages, frameworks, tools, etc.) and are fully searchable.

   1. **Project 1 - Introduction to Web dev**
      - Tech covered: HTML, CSS
      - Subcategories:
        - HTML: Docs, arcticles, youtube, games
        - CSS: -"-
   2. **Project 2 - Javascript fundamentals**
      - Tech covered: Javascript
      - Subcategories:
        - Docs, articles, youtube, games
   3. **Project 3 - Python Basics**
      - Tech covered: Python
      - Subcategories:
        - Docs, articles, youtube, games
   4. **Project 4 - Frameworks & Databases**
      - Tech covered: Django, PostgresSQL
      - Subcategories:
        - Docs, articles, youtube, games
   5. **Project 5 - Specializations**
      - Tech covered: Advanced Frontend, Predictive Analytics, E-commerce
      - Subcategories:
        - Docs, articles, youtube, games

3. _Resource Submission Form_:
   - Users can submit URLs along with a short description, stating why the resource is useful and what it’s for.
   - Users must choose a category for the resource.

4. _Community Interaction_:
   - Logged-in users can rate resources and leave comments, creating a feedback loop for which resources are most helpful.

---

## Platform Structure

### 1. User Authentication (Signup/Login)

- _Sign Up_:
  - Fields: Username, password. (email)
  - Optional: Email verification to prevent spam.
- _Login_:
  - Fields: Username, password.
  - "Forgot password" flow for recovery.

### 2. Categorized Resource Listings

- _Categories_:
  - Divide resources into logical groups like:
    - Programming Languages and frameworks (Html, CSS, JavaScript, Python, Django etc.)
    - Tools (IDEs, testing tools, etc.)
  - Each category should be filterable and searchable.
- _Search_:
  - A dynamic search bar to filter by keywords.
  - Optional: Filters like "highest-rated," "most recent."

### 3. Resource Submission Form

- Available only to logged-in users.
- _Fields_:

  - URL link (required).
  - Short description (required): Why the resource is useful.
  - Category selection (dropdown - required).

- _Submission Review_:
  - Auto-approval or admin approval for submitted resources (depending on how open we want it)?

### 4. Rating & Commenting System

- _Ratings_:
  - Simple 1-5 star system or thumbs up/thumbs down.
  - Aggregate rating score displayed on each resource.
- _Comments_:
  - Logged-in users can leave short reviews or comments on each resource.
  - Optional: Upvote/downvote system for comments to highlight helpful feedback.

### 5. Admin Dashboard (Optional)

- _Moderation_:
  - Admins can approve/reject submitted resources.
  - Flagged comments or resources can be reviewed and moderated.
- _Analytics_:
  - Track which resources are most popular, user engagement, etc.

---

## Initial Design Plan

### 1. Homepage (Landing Page)

- _Header_:
  - Site logo, navigation links (Home, Resources (categories dropdown), Contribute (form), About, Login/Signup).
- _Search Bar_:
  - Prominent search feature to allow users to quickly find resources via keywords.
- _Popular Categories_:
  - Highlight the main categories (e.g., Programming, Tools).
- _Trending/Top Resources_:
  - Display a few trending or highly rated resources.
- _Call to Action_:
  - Encourage users to sign up to contribute and interact with the platform.

### 2. Resource Listing Page

- _Category View_:
  - When a category is selected, display all resources under that category.
  - Include a sidebar or top filter options for sorting by rating, date, etc.
- _Individual Resource Cards_:
  - Each resource card displays:
    - Title, description, category.
    - Star rating or number of likes.
    - Comment count.
    - Option to “view details” to go to the full page?

### 3. Resource Detail Page

- _Full Resource View_:
  - Display full resource description and link.
  - Show comments and ratings.
- _Interactive Section_:
  - Logged-in users can rate the resource and leave a comment.

### 4. User Dashboard

- Available after login.
- _Tabs_:
  - _My Submissions_: List of resources the user has submitted, with edit/delete options.
  - _My Comments_: History of comments the user has left.
- _Submit Resource_: Quick access to the resource submission form.

### 5. Sign-Up / Login Page

- Clean and simple form layout.
- Option for social login (if desired, e.g., Google, GitHub) to make the process faster.

### 6. Admin Dashboard (Optional)

- _Resource Management_: Admins can see a queue of newly submitted resources for approval.
- _User Management_: Option to manage user accounts, if needed.

---

## Technology Stack

### Frontend

- HTML/CSS/JavaScript (React.js for a dynamic UI).
- Tailwind CSS for responsive design.

### Backend

- Node.js with Express for handling user authentication and resource submissions.
- PostgreSQL for the database (storing users, resources, comments etc.).

### Authentication

- OAuth for secure login.?

### Hosting

- Vercel/Netlify for frontend.?
- Oracle/Google Cloud/AWS for backend and database.?
- Firebase (part of google cloud) have auth, database storage

-*[EVondrus](https://github.com/EVondrus)*