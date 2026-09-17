# 🚀 DevStack

DevStack is a React + TypeScript based web application where users can explore different technologies and add their favorite technologies to their personal stack.

## 🌐 Live Demo

🔗 **[View Live Project](YOUR_LIVE_LINK_HERE)**

## ✨ Features

- 📚 Browse different technologies with their details and ratings.
- ➕ Add technologies to your personal stack.
- 🗑️ Remove individual technologies or clear the entire stack.
- 🔔 Get toast notifications when adding technologies.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- Vite

## 📖 React Questions & Answers

### 1. What is JSX and why do we use it?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript/TypeScript.

It makes React code easier to write and understand because we can describe the UI using familiar HTML-like syntax.

---

### 2. What is the difference between State and Props?

**Props** are used to pass data from a parent component to a child component.

**State** is data that belongs to a component and can change over time.

Example:

```tsx
<Child name="Hasib" />
```

Here, `name` is a prop.

```tsx
const [count, setCount] = useState(0);
```

Here, `count` is state.

---

### 3. What is the useState hook and how do you use it?

`useState` is a React Hook used to create and manage state inside a functional component.

Example:

```tsx
const [added, setAdded] = useState<Itechnology[]>([]);
```

Here:

- `added` → stores the current state.
- `setAdded` → updates the state.
- `[]` → initial value of the state.

In this project, it is used to store the technologies added to the user's stack.

---

### 4. What is the useEffect hook and why is it important?

`useEffect` is a React Hook used to handle side effects such as fetching data, updating the document title, or working with external systems after a component renders.

Example:

```tsx
useEffect(() => {
  // side effect
}, []);
```

In this project, I did not use `useEffect` to load the JSON data. Instead, I used React's `use()` with `Suspense` to handle the JSON Promise.

---

### 5. Why is the key prop important when rendering lists?

The `key` prop helps React identify which items in a list have changed, been added, or removed.

Example:

```tsx
technologies.map(technology => (
  <TechnologyCard
    key={technology.name}
    technology={technology}
  />
))
```

Each item should have a unique and stable key so React can update the UI efficiently.

---

### 6. What is conditional rendering? Give an example.

Conditional rendering means displaying different UI depending on a condition.

In this project, when the stack is empty:

```tsx
{added.length === 0
  ? <div>Your stack is empty</div>
  : <div>{added.length} Technology Selected</div>
}
```

If `added.length === 0`, an empty-stack message is shown. Otherwise, the selected technologies are displayed.

---

### 7. How do you pass data from a parent component to a child component?

We pass data from parent to child using **props**.

Example:

```tsx
<Technologies
  added={added}
  setAdded={setAdded}
/>
```

Here, the parent component passes `added` and `setAdded` to the `Technologies` child component.

A child can communicate back to the parent by calling a function received through props.

For example:

```tsx
setAdded(prev => [...prev, technology]);
```

This allows the child component to update the parent's state.

## 📁 Project Structure

```text
src/
├── components/
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── nav.tsx
│   ├── technologies.tsx
│   ├── technologyCard.tsx
│   └── yourStack.tsx
│
├── type/
│   └── type.ts
│
├── App.tsx
└── main.tsx

public/
└── data.json
```

## 👨‍💻 Author

**Hasibul Hasan Siam**

🔗 [GitHub Profile](https://github.com/hasibsiam119)
