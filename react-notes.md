# React notes
https://www.youtube.com/watch?v=w7ejDZ8SWv8
## What is React
- A javaScript library for building frontend UI 
    - often called a framework due to comparability with Vue and Angular
- Only runs in browser as a SPA (Single Page App)
- Can be used to build full stack app by communicating with a server/API (e.g. MERN stack)
- big ecosystem of packages 
## Why React?
- Structure the "view" layer (MVC) of application
- Uses JSX for Dynamic markup
    - looks like HTML, but is actually js
- Interactive UIs with Virtual DOM
    - can interact with elements in page without reloading
- Performance and testing

## Components
- building blocks of the framework
- can hold its own state and data

- Components can be created in React with:
    - Functions components with hooks, or
    - Classes which extents React.Components

- Can have states which determine how it renders and behaves
    - "App" or "global" state refers to states that is available to the entire UI, not just component

## React Hooks
- are functions that let us hook into the React state and lifecycle features from function components
- ex: 
    - useState : Returns a stateful value and a function to update it
    - useEffect : Perform side effect in function components
    - etc.

