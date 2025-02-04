# User Dashboard Component Guide

## UserDashboard (Parent Component)

### Purpose

A personalized hub for users to manage bookmarks, submissions, comments, ratings, and account settings.

### State Management (Using Multiple Contexts)

* `AccountContext`: Manages account details and the account deletion process (`isDeletingAccount`).
* `BookmarksContext`: Manages bookmarks data.
* `SubmissionsContext`: Manages resource submissions data.
* `CommentsContext`: Manages latest comments data.
* `RatingsContext`: Manages latest ratings data.
* `NotificationsContext` : Manages Notifications
* `SearchContext` : Manages Search History

### Child Components

| Component             | Location                               | Props                               | Purpose                                                                              | Data Source              |
|----------------------|---------------------------------------|------------------------------------|--------------------------------------------------------------------------------------|--------------------------|
| Navbar                | `/src/components/Navbar`               | `onNavigate`                       | BackToHomeButton            | NA                      |
| AccountSection        | `/src/pages/Dashboard/AccountSection` | Accesses `AccountContext`         | Account details and delete account functionality                                     | `AccountContext`          |
| TabSection            | `/src/pages/Dashboard/TabSection`     | None                                | Allows switching between Bookmarks, Latest Search, and Notifications tabs.            | N/A                      |
| DashboardContentSection | `/src/pages/Dashboard/DashboardContentSection` | `selectedTab`                     | Displays the content corresponding to the selected tab (Bookmarks, etc.)            | respective contexts      |

**Child Components of `DashboardContentSection` (conditionally rendered based on `selectedTab`):**

* `BookmarksSection`:  Displays saved resources.
* `LatestSearchSection`: Displays recent search queries.
* `NotificationsSection`: Displays notifications.
* `ResourceSubmissionsSection`: Displays user's resource submissions.
* `LatestCommentsSection`: Displays user's recent comments.
* `LatestRatingsSection`: Displays user's recent ratings.

**Child Components of `ResourceSubmissionsSection`, `LatestCommentsSection`, `LatestRatingsSection`:**

* `ResourceItem` (for submissions)
* `CommentItem` (for comments)
* `RatingItem` (for ratings)  *(all these components would have edit and delete buttons)*

## Hierarchical Diagram

```bash
UserDashboard
├── Navbar
├── AccountSection
└── TabSection
    ├── BookmarksSection
    │   └── ResourceItem
    ├── LatestSearchSection
    │   └── SearchItem (if needed)
    ├── NotificationsSection
    │   └── NotificationItem (if needed)
    ├── ResourceSubmissionsSection
    │   └── ResourceItem
    ├── LatestCommentsSection
    │   └── CommentItem
    └── LatestRatingsSection
        └── RatingItem
```

---

<details>
<summary><strong>Color System for color mapping</strong></summary>

<br>

   1. **🟧 Orange = Sections**  
      * Large areas dividing the page into logical parts (e.g., header, footer, main content).

   2. **🟩 Green = Groups of elements**  
      * Collections of related modules or components, such as the category buttons or the list of resource cards.

   3. **🟪 Purple = Modules (Self-contained units)**  
      * Complete components that combine several parts, such as a resource card or a widget. These function as cohesive, standalone units.

   4. **🟦 Blue = Parts of modules**  
      * The individual elements that make up a module, such as buttons, text, ratings, or links.

   5. **🟨 Yellow = Expandable areas**  
      * Dropdown menus and sections that can be shown/hidden based on user interaction.

   6. **🟥 Red = Dynamic content**  
      * Content that can update in real time (e.g., number of views, star ratings, user information).

</details>

<br>

![User Dashboard Components](#)

---

## Communication Flow

* Data is fetched using custom hooks (e.g., `useFetchBookmarks`, `useFetchSubmissions`) and provided to the respective contexts.
* The `TabSection` manages the `selectedTab` state to show the appropriate section in `DashboardContentSection`.
* Child components of `DashboardContentSection` access and update their respective contexts.
* Actions (edit, delete) trigger API calls, updates to contexts, and re-renders.  Error handling is implemented within the custom hooks and potentially using error boundaries.

## Data Fetching and API Calls

Data fetching and API calls are handled within custom hooks:

* `useFetchBookmarks()`
* `useFetchSubmissions()`
* `useFetchComments()`
* `useFetchRatings()`
* `useFetchNotifications()`
* `useFetchSearchHistory()`

---
