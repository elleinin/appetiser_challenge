# CODING CHALLENGE FOR APPETISER APPS
~ last updated: 01/08/21

--- INTRODUCTION ---

Hi, there! This is a simple boilerplate that features 4 pages:
--- 1. Registration Page (Landing)
--- 2. Verification Page (!not completed)
--- 3. Login Page
--- 4. Success Page (Dashboard)

--------------------

--- TECHNOLOGY ---

This app is built on Vue.js
--- Vue-router handles the redirects and page handling
--- Axios library is used to make HTTP/AJAX requests

------------------

--- REGISTRATION PAGE ---

[POST Register With Email]
- Register component takes in form inputs to save and send as JSON objects
- Async "reggie" method waits for information from form to POST to baseplate api
- If successful post, routes to login page

------------------

--- VERIFICATION PAGE ---

- Unfortunately, this page was not build

------------------

--- LOGIN PAGE---

[POST Login]
- Login component takes in username and password (where username = email)
- Async "carlog" method waits for form submission to confirm with baseplate api
- Authentication token remembered in local storage to save user login info
- If successful, routes to success page

------------------

--- SUCCESS PAGE ---

- Displays login successful

------------------

--- NOTES AND EXCLUSIONS---

- Site does not properly save and access authentication tokens yet, so dashboard and registered pages can still be accessed when "logged in"
- Verification page not built

------------------


------------------
NODE/BUILD COMMANDS

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
