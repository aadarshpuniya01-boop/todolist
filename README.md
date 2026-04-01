# ✅ Todo List

A clean, modern todo list app built with **React**, demonstrating core concepts like **components**, **props**, and **state management** — styled with minimal CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🚀 Features

- **Add** new tasks via an input form
- **Complete** tasks by clicking the checkbox
- **Delete** tasks with a single click
- **Filter** between All / Active / Completed views
- **Live stats** showing total and completed task counts
- **Smooth animations** on task entry
- **Dark theme** with a modern, minimal UI

---

## 🧱 Component Architecture

```
App
├── AddTodo        → Input form to create new tasks
├── Filters        → Toggle between All / Active / Completed
└── TodoList       → Renders the filtered list of tasks
    └── TodoItem   → Individual task with toggle & delete
```

### Props Flow

| Component   | Props Received                          | Description                          |
| ----------- | --------------------------------------- | ------------------------------------ |
| `AddTodo`   | `onAdd`                                 | Callback to add a new todo           |
| `Filters`   | `current`, `onChange`                   | Active filter & filter change handler|
| `TodoList`  | `todos`, `onToggle`, `onDelete`         | Filtered todos & action callbacks    |
| `TodoItem`  | `todo`, `onToggle`, `onDelete`          | Single todo object & action callbacks|

> State is managed in `App` and flows **downward** to children via props — following React's unidirectional data flow pattern.

---

## 📁 Project Structure

```
todolist/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx              # Entry point
    ├── App.jsx               # Root component (state lives here)
    ├── index.css             # All styles (single file, minimal CSS)
    └── components/
        ├── AddTodo.jsx       # New task input form
        ├── Filters.jsx       # All / Active / Completed filter buttons
        ├── TodoItem.jsx      # Single task row
        └── TodoList.jsx      # Task list container
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

```bash
# Clone the repo
git clone <your-repo-url>
cd todolist

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173/**

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

---

## 🎨 Styling

All styles live in a single `src/index.css` file using **CSS custom properties** (variables) for easy theming:

```css
:root {
  --bg: #0f0f1a;
  --surface: #1a1a2e;
  --accent: #7c5cfc;
  --text: #e8e6f0;
  --success: #3dd68c;
  --danger: #ff4d6a;
}
```

No CSS frameworks — just clean, minimal vanilla CSS with:
- CSS variables for theming
- Flexbox layouts
- Keyframe animations
- Hover transitions

---

## 📚 Concepts Demonstrated

- **Components** — UI split into reusable, focused pieces
- **Props** — Data & callbacks passed from parent to child
- **State** (`useState`) — Dynamic data managed in the root component
- **Conditional rendering** — Filter logic and empty states
- **List rendering** — `.map()` with keys for efficient rendering
- **Controlled inputs** — Form input bound to React state
- **Event handling** — Click and submit handlers

---
