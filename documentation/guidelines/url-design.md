# URL-design guidelines

### User-Friendliness
Readable URLs: URLs should be clear and descriptive, allowing users to understand the content of a page by just looking at the URL.

✅ /products/shoes/running<br>
❌ /p123/cat45

Use hyphens (-) to separate words instead of underscores (_) for better readability and SEO.

### SEO Best Practices
Avoid Query Parameters for Key Content: Use path segments instead of query parameters for primary content.

✅ /blog/react-url-design<br>
❌ /blog?id=react-url-design

Canonical URLs: Ensure that there's one definitive version of each URL to avoid duplicate content penalties.

Include Keywords: Use keywords in your URLs related to the page's content to improve discoverability.

### Security and Privacy
Avoid exposing sensitive data in URLs (e.g., user IDs or tokens).<br>
Ensure URLs cannot be tampered with to access unauthorized resources.

### Consistency
Stick to a consistent URL structure throughout the project.
- Use either singular (/user) or plural (/users) for collections, but not both.
- Use lowercase for all URLs to avoid case-sensitive discrepancies.

### Scalability
Design URLs with future growth in mind:
- Use meaningful categories that won't need drastic changes.
- Plan for expansion without breaking existing links.


## Core pages

### Index Page (Home)
URL: /

Displays the platform overview, featured resources, or a search prompt.

### About Page

URL: /about

Provides information about LazyDog's mission, purpose, and features.

### Other information pages
URL: /terms<br>
URL: /privacy


## Resource Management

### Search Resources Page
URL: /resources<br>
URL: /resources/add<br>
URL: /resources/edit<br>
URL: /resources/delete

A search interface where users can filter and discover resources by category, subcategory, tags, or keywords.

### Category Pages
URL: /resources/:category-name

Displays all resources within a specific category (e.g., /resources/javascript).

### Resource Details Page
URL: /resources/:resource-id/:resource-title

Shows details for a specific resource, including the title, description, link, ratings, comments, and related resources. (e.g., /resources/12345/intro-to-react).

## User Account Features

### Account Page
URL: /account<br>
URL: /account/sign-up<br>
URL: /account/sign-in<br>
URL: /account/edit<br>
URL: /account/delete

Displays user-specific options like updating account information or deleting their account. Shows a list of the user’s submitted resources, their ratings, and comments.

