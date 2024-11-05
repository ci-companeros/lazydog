## Design Guide for Contribution to LazyDog Project

### Adding a new feature or change

Before starting work on a new feature, it’s crucial to ensure that your main branch is up to date. This prevents conflicts and ensures you're working with the latest version of the code.

#### Steps:

1. **Checkout to Main Branch:**
   ```bash
   $ git checkout main
   ```

2. **Pull the Latest Changes from Upstream:**
   ```bash
   $ git pull -r origin main
   ```

3. **Create a New Branch:**
   ```bash
   $ git checkout -b <topic-branch-name>
   ```

4. **Linking the Pull Request to an Issue:**
   When you open a pull request, link it to the relevant issue by including a reference in the pull request description:
   ```
   Fixes #<issue-number>
   ```
   This will automatically close the issue when the pull request is merged.

5. **Push Your Branch:**
   ```bash
   $ git push --set-upstream origin <topic-branch-name>
   ```

6. **Open a Pull Request:**
   Follow [this guide](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) to open a pull request with a clear title and description. Make sure to link to the relevant issue as mentioned above.

**Tips:**
- For significant tasks, open a Pull Request early with a `[WIP]` (Work In Progress) prefix to get feedback and assistance from the community.
- Allow maintainers to make changes to your Pull Request branch by following [these instructions](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork).


### When Collaborating: Multiple Contributors on the Same Branch

When multiple contributors are working on the same branch, coordination is key to avoid conflicts and ensure smooth integration of changes.

#### Steps:

1. **Regularly Pull Changes:**
   Regularly pull changes from the shared branch to keep your local repository up to date:
   ```bash
   $ git pull origin <shared-branch>
   ```

2. **Communicate with Team Members:**
   Use comments on the pull request, issues, or other communication tools to coordinate with team members. This helps prevent duplicate work and conflicts.

3. **Resolve Conflicts:**
   If conflicts arise when pulling changes, resolve them promptly. Communicate with your team to decide the best approach for conflict resolution.

4. **Test Thoroughly:**
   Before pushing changes to a shared branch, thoroughly test your code to ensure it integrates well with existing code. This helps maintain the stability of the branch.

5. **Push Changes to the Shared Branch:**
   Once your changes are ready and tested, push them to the shared branch:
   ```bash
   $ git push origin <shared-branch>
   ```

6. **Review and Merge Pull Requests:**
   Collaborate on reviewing pull requests. Provide constructive feedback and approve changes when they are ready to be merged.

  
### Submitting a Pull Request

Good pull requests, whether patches, improvements, or new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

If you have never created a pull request before, welcome 🎉 😄. [Here is a great tutorial](https://opensource.guide/how-to-contribute/#opening-a-pull-request) on how to send one :)

#### Summary of Steps:

1. **Get the Latest Changes from Upstream:**
   ```bash
   $ git checkout main
   $ git pull -r origin main
   ```

2. **Create a New Topic Branch:**
   ```bash
   $ git checkout -b <topic-branch-name>
   ```

3. **Make Your Code Changes:** Follow the [Coding rules](#coding-rules).

4. **Push Your Topic Branch:**
   ```bash
   $ git push --set-upstream origin <topic-branch-name>
   ```

5. **Open a Pull Request:**
   Follow [this guide](https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request) with a clear title and description.

6. **Things to add

By following these guidelines, you’ll ensure a smooth and collaborative development process. Happy coding!
```

## Commit Message Format  
  
Let's keep things basic with this structure
```bash
<type>(<scope>): <subject>
```

Type:
```bash
docs: Documentation only changes
feat: A new feature
fix: A bug fix
refactor: A change to the code's internal structure, with no change to its external behavior
test: Adding missing tests or correcting existing tests
chore: Other changes that don't modify src or test files
```

Scope
The scope should be the name of the component or feature affected (as perceived by the person reading the changelog generated from commit messages).

Subject
The subject contains a succinct description of the change:

use the imperative, present tense: "change" not "changed" nor "changes"
don't capitalize the first letter
no dot (.) at the end

### Type Examples:

- **docs**: Documentation only changes
  ```bash
  docs(readme): update installation instructions
  docs(api): add usage examples for new endpoints
  ```

- **feat**: A new feature
  ```bash
  feat(authentication): add two-factor authentication support
  feat(dashboard): implement user activity feed
  ```

- **fix**: A bug fix
  ```bash
  fix(login): resolve issue with password reset link
  fix(header): fix layout issue on mobile devices
  ```

- **refactor**: A change to the code's internal structure, with no change to its external behavior
  ```bash
  refactor(user-service): simplify user validation logic
  refactor(database): optimize query performance for large datasets
  ```

- **test**: Adding missing tests or correcting existing tests
  ```bash
  test(auth): add unit tests for login functionality
  test(api): improve test coverage for endpoint validation
  ```

- **chore**: Other changes that don't modify src or test files
  ```bash
  chore(dependencies): update npm packages
  ```

### Scope Examples:

- **Component or Feature Scope**
  ```bash
  chore(templates): add default pull request template
  feat(profile): add medication tracking visualization page
  test(notifications): add tests for notification service
  fix(settings): correct typo in settings page
  refactor(utils): restructure utility functions for better readability
  ```

These examples demonstrate how to format commit messages according to the provided guidelines, ensuring clear and concise descriptions for each change.