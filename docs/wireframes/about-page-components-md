# About Page Component Guide

## AboutPage (Parent Component)

### Purpose

Introduces the project and team members, allowing users to view individual member details and contribute to the project.

### State Management

* `teamMembers` (array):  Array of team member objects.  Each object contains `name`, `role`, `image`, `bio`, `detailLink`, and `theme` (background color).
* `hoveredMember` (string | null):  The name of the currently hovered team member (for hover effects).
* `isContributing` (boolean):  True if the "Contribute" button is clicked.

### Child Components

| Component          | Location                      | Props                                   | Purpose                                                           | Data Source           |
|---------------------|-------------------------------|----------------------------------------|-------------------------------------------------------------------|-----------------------|
| Navbar              | `/src/components/Navbar`       | `onNavigate`                             | Main navigation bar (or BackToHomeButton)                            | N/A                   |
| TeamMembersSection | `/src/pages/About/TeamMembers` | `teamMembers`, `onNavigate`             | Displays team members with hover effects and navigation to detail pages | API call (via hook)  |
| ProjectOverviewSection | `/src/pages/About/ProjectOverview` | None                                   | Provides project overview and contribution button                       | Static data or API call |

**Child Components of `TeamMembersSection`:**

* `TeamMemberCard`: Displays a single team member.

## Hierarchical Diagram

```bash
AboutPage
├── Navbar
├── TeamMembersSection
│   └── TeamMemberCard
└── ProjectOverviewSection
```

## Communication Flow

* `teamMembers` data (fetched via `useFetchTeamMembers` custom hook) is passed to `TeamMembersSection`.
* `TeamMembersSection` handles hover effects on `TeamMemberCard` components, updating the `hoveredMember` state.
* Clicking a team member triggers navigation to the detail page via `onNavigate` (React Router).
* Clicking the "Contribute" button updates `isContributing` and redirects to the contribution page.

## Data Fetching and Hover Effects

* **Data Fetching:** The `teamMembers` data is fetched using a custom hook:  `useFetchTeamMembers()`.  Error handling is implemented within this hook.

* **Hover Effects:** Hover effects on `TeamMemberCard` components are implemented using CSS transitions or a JavaScript animation library like Framer Motion.  The `theme` property in each `teamMember` object determines the background color.

---
