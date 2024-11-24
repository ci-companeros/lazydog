# Home Page Component Breakdown

## HomePage (Parent Component)

### Purpose

Main container for the home page, organizing layout and communication between child components.

### State Management (Using Context API)

- **`AuthContext`:** Manages user authentication state (`user` object).
- **`ThemeContext`:** Manages dark mode state (`darkMode` boolean).
- **Local State:** `carouselIndex` (number) for the hero carousel.

### Functions

- `onCarouselChange(index)`: Updates `carouselIndex`.

### Child Components

| Component       | Location                     | Props                                      | Purpose                                          |
|-----------------|------------------------------|-------------------------------------------|---------------------------------------------------|
| Navbar          | `/src/components/Navbar`    | `onNavigate` (React Router function)       | Navigation and user controls                      |
| HeroSection     | `/src/pages/HomePage/Hero` | `onNavigate`                               | Engaging hero section with carousel and CTA       |
| CategoriesSection| `/src/pages/HomePage/Categories` | `categories`, `onNavigate`                 | Displays resource categories                      |
| AboutSection    | `/src/pages/HomePage/About` | `onNavigate`                               | Introduces the platform and encourages contribution |
| Footer          | `/src/components/Footer`    | None                                       | Footer with legal and contact information        |

---

## Hierarchical Diagram

```bash
HomePage
├── Navbar
├── HeroSection
│   └── Carousel
├── CategoriesSection
├── AboutSection
└── Footer
```

## Communication Flow

- `HomePage` manages the carousel index.
- `AuthContext` and `ThemeContext` provide user and dark mode data.
- Navigation is handled by React Router.
- Data flows down minimally via props, primarily for navigation callbacks.

---
