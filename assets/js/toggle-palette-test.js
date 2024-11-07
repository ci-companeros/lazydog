/**
 * Introduction: JavaScript Theme Toggle for Light and Dark Modes
 *
 * This JavaScript snippet adds functionality for toggling between light and dark themes in a webpage. 
 * It listens for the DOM to be fully loaded before setting up an event listener on a theme toggle button.
 *
 * The event listener on the button checks the current theme:
 * - If the current theme is 'dark', it removes the `data-theme` attribute to switch back to the light mode.
 * - Otherwise, it adds the `data-theme="dark"` attribute to activate the dark theme.
 *
 * This allows users to seamlessly switch between light and dark modes with a simple button click, 
 * enhancing the user experience by providing visual customization options.
 *
 * Other:
 * - JSHint: This code uses the `jshint esversion: 6` directive to specify that the JavaScript version 
 *   used is ECMAScript 6 (ES6). JSHint is a popular static code analysis tool that helps developers 
 *   find errors and potential problems in their JavaScript code. Including this directive ensures 
 *   compatibility and prevents warnings about ES6-specific syntax, such as arrow functions.
 *
 * Author: Jacqueline Kalmár
 * Date: February 2024
 */

// jshint esversion: 6

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle');
  
  themeToggleButton.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });
});
