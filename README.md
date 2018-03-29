

- HMR for backend with webpack
- Hot reloading in frontend courtesy create-react-app
    equals awesome setup for development


FOR DEVELOPMENT
---------------
npm run dev
- opens server at 8080 
- opens react app at 3000

FOR PRODUCTION BUILD
---------------------
-build with 
    npm run build
    // server build at ./build/production.js
    // frontend build at ./client/build*

-serve with
    npm run serve
    // effectively node production.js (hosts the static frontend bundle at root route "/" and other api routes at "/api/*" )

