import home from './views/home.js';
import detail from './views/detail.js'
import error from './views/error.js'
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';

// Define your routes and their associated views
const routes = {
  '/': home,
  '/detail': detail,
  '/error': error
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector('#root')
  setRootEl(root);
  onURLChange(window.location.pathname)
});