
# Resource Detail Page Component Breakdown

## ResourceDetailPage (Parent Component)

### Purpose

Displays detailed resource information, comments, and related resources.

### State Management (Using Context API)

 **`ResourceDetailContext`:** Manages `resource`, `comments`, `relatedResources`, `isLoading`, `error`.

### Child Components

| Component              | Location                                   | Props                                             | Purpose                                                                  | Data Source                       |
|------------------------|-------------------------------------------|--------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------|
| NavSection             | `/src/components/NavSection`             | `breadcrumbs`, `onNavigate`                         | Breadcrumbs and back navigation                                           |  N/A                               |
| ResourceDetailsComponent | `/src/pages/ResourceDetail/ResourceDetails` | Accesses `ResourceDetailContext`, `onNavigate`  | Displays main resource details                                             | `ResourceDetailContext`          |
| CommentSection         | `/src/pages/ResourceDetail/Comments`      | Accesses `ResourceDetailContext`                   | Manages comments (display, submission)                                     | `ResourceDetailContext`          |
| RecommendedResourcesSection | `/src/pages/ResourceDetail/Recommendations` | `recommendedResources` (from `ResourceDetailContext`), `onNavigate` | Displays related resources                                                   | `ResourceDetailContext`          |

---

**Child Components of `ResourceDetailsComponent`:**

* `ResourceImageComponent`: Displays the resource image.
* `ResourceTitleComponent`: Displays the resource title and link.
* `ResourceDescriptionComponent`: Shows the resource description.
* `ResourceMetadataComponent`: Displays metadata (rating, comments, author, date).

**Child Components of `CommentSection`:**

* `CommentList`
  * `CommentItem`: Displays a single comment.
* `CommentForm`: Allows submitting new comments.

---

## Hierarchical Diagram

```bash
ResourceDetailPage
├── NavSection
├── ResourceDetailsComponent
│   ├── ResourceImageComponent
│   ├── ResourceTitleComponent
│   ├── ResourceDescriptionComponent
│   └── ResourceMetadataComponent
├── CommentSection
│   ├── CommentList
│   │   └── CommentItem
│   └── CommentForm
└── RecommendedResourcesSection
    └── ResourceItem  (or similar component for displaying recommendations)
```

## Communication Flow

* `ResourceDetailContext` provides data (fetched via custom hooks: `useFetchResource`, `useFetchComments`, `useFetchRecommendations`).
* User interactions (comment submission) update the context, triggering re-renders.
* Navigation is handled by React Router.  Error handling is implemented within the custom hooks.

---
