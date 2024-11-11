# ERD relationships explained

**User - Resource**

- Cardinality: One (User) to Many (Resources)
- Description: A user can submit many resources, but each resource is submitted by one and only one user.

**User - Comment**

- Cardinality: One (User) to Many (Comments)
- Description: A user can write many comments, but each comment is written by one and only one user.

**Resource - Comment**

- Cardinality: One (Resource) to Many (Comments)
- Description: A resource can have many comments, but each comment is associated with one and only one resource.

**Resource - Rating**

- Cardinality: One (Resource) to Many (Ratings)
- Description: A resource can have many ratings, but each rating belongs to one and only one resource.

**User - Rating**

- Cardinality: One (User) to Many (Ratings)
- Description: A user can give many ratings, but each rating is provided by one and only one user.

**Category - Resource**

- Cardinality: One (Category) to Many (Resources)
- Description: A category can include many resources, but each resource belongs to one and only one category.

**Resource - Tag (via Resource_Tag)**

- Cardinality: Many (Resources) to Many (Tags)
- Description: A resource can have many tags, and a tag can be associated with many resources.

**Resource_Tag (Join Table)**

Cardinalities:

- Resource_Tag is linked to one and only one resource.
- Resource_Tag is linked to one and only one tag.