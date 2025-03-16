# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. in App.js
<Router> (or <BrowserRouter>) is the main wrapper that enables routing in your React app.
<Routes> is used to contain multiple <Route> components.
<Route /> is supposed to define paths but is currently empty, which will cause an error.

2. in App.js there is toastify 
  React-Toastify is used for displaying notifications (toasts) in a React app. It helps show alerts, success messages, warnings, or errors in a visually appealing way without disturbing the user experience. 🚀