# PropTech Development Sprint

A real estate application development sprint with ClickUp integration for task management and GitHub for version control.

## Project Overview

This repository contains the development sprint for a PropTech application with the following modules:

1. **Bhulekh API Integration** - Integration with land records API
2. **Dealer Verification Module** - Aadhaar and RERA-based verification
3. **Property Smart Filters Module** - Price range, locality, and size filtering capabilities
4. **UI Optimization for Android App** - Improved onboarding and property listing page UX
5. **AI-Powered Recommendation Engine** - Smart property recommendations based on user behavior

## Repository Structure

```
proptech-development-sprint/
├── .github/
│   └── workflows/
│       └── clickup-integration.yml
├── src/
│   ├── frontend/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── backend/
│   │   ├── services/
│   │   │   ├── bhulekh/
│   │   │   ├── dealer-verification/
│   │   │   ├── filters/
│   │   │   └── recommendations/
│   │   ├── controllers/
│   │   └── models/
│   ├── api/
│   │   └── endpoints/
│   └── database/
│       └── migrations/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
│   └── api-documentation.md
├── .gitignore
├── .env.example
└── README.md
```

## Development Workflow

### Branch Strategy

We follow a feature-branch workflow:

- `main`: Production-ready code
- `feature/*`: Feature development branches (e.g., `feature/property-filters`)
- `task/*`: Individual task branches (e.g., `task/filter-logic-services`)

### Commit Message Format

All commit messages should include the ClickUp task ID:

```
[CU-TaskID] Brief description of the change

More detailed explanation if necessary
```

Example: `[CU-Task-3.1] Implement price range filter logic`

### Pull Request Process

1. Create a task branch from the feature branch
2. Implement the required changes
3. Create a PR from the task branch to the feature branch
4. Link the ClickUp task in the PR description
5. After approval and merge, update the ClickUp task status

### GitHub-ClickUp Integration

- Each GitHub branch is linked to a ClickUp task via the "GitHub Branch" custom field
- PRs are linked to ClickUp tasks via the "PR Link" custom field
- Task status is updated as PRs progress through review and merging

## Modules

### 1. Bhulekh API Integration

Integration with the Bhulekh land records API to fetch and display property ownership data.

### 2. Dealer Verification Module

Verification system for real estate dealers using Aadhaar and RERA credentials.

### 3. Property Smart Filters Module

Advanced filtering capabilities for properties based on:
- Price range
- Locality/Location
- Property size

### 4. UI Optimization for Android App

Improved user experience for the Android application:
- Streamlined onboarding process
- Enhanced property listing page

### 5. AI-Powered Recommendation Engine

Intelligent property recommendations based on:
- User location preferences
- Budget constraints
- User behavior patterns
- Vendor trust signals

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/proptech-development-sprint.git
cd proptech-development-sprint
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## Contributing

1. Check the ClickUp board for available tasks
2. Create a task branch from the appropriate feature branch
3. Implement the required changes
4. Create a PR and link it to the ClickUp task
5. Request code review
6. Address review comments
7. Once approved, merge your PR

## ClickUp Integration

This project uses ClickUp for task management. Each GitHub branch and PR should be linked to its corresponding ClickUp task.

### Task Workflow

1. **Backlog**: Tasks pending assignment
2. **To Do**: Tasks selected for current sprint
3. **In Progress**: Tasks currently being worked on
4. **Review/QA**: Code complete, pending review
5. **Done**: Tasks completed and merged to feature branch

