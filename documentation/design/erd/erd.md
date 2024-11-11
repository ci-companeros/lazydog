<!-- markdownlint-disable MD033 MD036 -->
# Lazydog Models & ERD relationships

## Content

- [Models](#models)
- [Relationship](#erd-relationships-explained)
- [Diagram image](#diagram-image)

## Models

### User model

| Attribute   | Type                   | Description                                 |
|-------------|------------------------|---------------------------------------------|
| user_id     | IntegerField (PK)      | Primary Key                                 |
| username    | CharField (unique)     | Unique Username                             |
| password    | CharField              | User Password                               |
| email       | EmailField             | User Email Address                          |
| created_at  | DateTimeField          | Account Creation Date                       |

### Resource model

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| resource_id  | IntegerField (PK)     | Primary Key                                 |
| title        | CharField             | Title of the Resource                       |
| description  | TextField             | Detailed Description of the Resource        |
| category_id  | ForeignKey (Category) | Reference to Related Category               |
| user_id      | ForeignKey (User)     | Reference to the User who Submitted It      |
| url          | URLField              | URL of the Resource                         |
| created_at   | DateTimeField         | Resource Creation Date                      |
| updated_at   | DateTimeField         | Resource Last Updated Date                  |

### Comment model

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| comment_id   | IntegerField (PK)     | Primary Key                                 |
| user_id      | ForeignKey (User)     | Reference to the User who Wrote the Comment |
| resource_id  | ForeignKey (Resource) | Reference to the Related Resource           |
| content      | TextField             | The Comment Text                            |
| created_at   | DateTimeField         | Comment Creation Date                       |
| updated_at   | DateTimeField         | Comment Last Updated Date                   |

### Rating model

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| rating_id    | IntegerField (PK)     | Primary Key                                 |
| user_id      | ForeignKey (User)     | Reference to the User who Gave the Rating   |
| resource_id  | ForeignKey (Resource) | Reference to the Related Resource           |
| score        | IntegerField          | Rating Score (e.g., 1-5)                    |
| created_at   | DateTimeField         | Rating Creation Date                        |
| updated_at   | DateTimeField         | Rating Last Updated Date                    |

### Category model

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| category_id  | IntegerField (PK)     | Primary Key                                 |
| name         | CharField (unique)    | Name of the Category                        |
| description  | TextField             | Description of the Category                 |
| created_at   | DateTimeField         | Category Creation Date                      |
| updated_at   | DateTimeField         | Category Last Updated Date                  |

### Tag model

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| tag_id       | IntegerField (PK)     | Primary Key                                 |
| name         | CharField (unique)    | Name of the Tag                             |
| description  | TextField             | Description of the Tag (Optional)           |
| created_at   | DateTimeField         | Tag Creation Date                           |
| updated_at   | DateTimeField         | Tag Last Updated Date                       |

### Resource_Tag model (Join Table)

| Attribute    | Type                  | Description                                 |
|--------------|-----------------------|---------------------------------------------|
| id           | IntegerField (PK)     | Primary Key                                 |
| resource_id  | ForeignKey (Resource) | Reference to the Related Resource           |
| tag_id       | ForeignKey (Tag)      | Reference to the Related Tag                |
| created_at   | DateTimeField         | Timestamp when the Link was Created         |

[Back to Content](#content)

## ERD relationships explained

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

i. Resource_Tag is linked to one and only one resource.<br>
ii. Resource_Tag is linked to one and only one tag.

[Back to Content](#content)

## Diagram image

![x](/documentation/design/erd/erd.webp)

[Back to Content](#content)

<!-- markdownlint-enable MD033 MD036 -->