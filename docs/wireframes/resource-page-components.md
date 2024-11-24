# Resource Page Component Breakdown

## ResourcePage (Parent Component)

### Purpose

Manages resource display, search, filtering, and pagination.

### State Management (Using Context API)

- **`ResourceContext`:**
  - Manages `resources`, `isLoading`, `error`,
  - search parameters (`searchQuery`, `categoryFilters`, `industryFilters`, `sortBy`),
  - and pagination state (`currentPage`, `totalPages`).

### Functions (mostly handled within custom hooks)

- `useFetchResources` (custom hook): Fetches resources based on the context's filter and pagination state.

### Child Components

| Component             | Location                                  | Props                                                    | Purpose                                                                   | Data Source                     |
|----------------------|------------------------------------------|---------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------|
| SearchAndFilterSection | `/src/pages/Resources/SearchFilterSection` | Accesses `ResourceContext`, `onSearch`, `onFilterChange`, `onSortChange` | Handles search and filtering UI                                            | N/A                              |
| ResourceList          | `/src/pages/Resources/ResourceList`      | `resources` (from `ResourceContext`)                     | Displays the list of resources                                             | `ResourceContext`             |
| RecommendationCarousel | `/src/components/Carousel`                 | `recommendedResources` (from `ResourceContext`), `onNavigate`       | Displays recommended resources                                               | `ResourceContext`             |
| Pagination            | `/src/components/Pagination`             | `currentPage`, `totalPages`, `onPageChange` (updates `ResourceContext`) | Handles pagination                                                    | `ResourceContext`             |
| ResourceItem         | `/src/components/ResourceItem`          | `resource`, `onNavigate` (React Router function)           | Displays a single resource; title, description, category, rating, comments | `ResourceList`  or `RecommendationCarousel`              |

---

**SearchAndFilterSection Child Components:**

- `SearchBar`
- `CategoryFilter`
- `IndustryFilter`
- `SortOptions`

## Hierarchical Diagram

```bash
ResourcePage
├── SearchAndFilterSection
│   ├── SearchBar
│   ├── CategoryFilter
│   ├── IndustryFilter
│   └── SortOptions
├── ResourceList
│   └── ResourceItem
├── RecommendationCarousel
│   └── RecommendationItem (if different from ResourceItem)
└── Pagination
```

## Communication Flow

- `ResourceContext` provides data to child components.
- User interactions (search, filtering, sorting, pagination) update the `ResourceContext`, triggering re-renders via `useFetchResources`.
- Navigation to detail pages is handled by React Router.

---
