# ⚡️ Vite + Express

1. Build Vite application

   a. From the client directory you can run `npm run build` to create your production build.

   b. We can add a script to the root level `package.json`, so that we can install dependencies and build out our application:

   `"start:dev": "(npm run dev --prefix client) & nodemon server.js"`

   c. Make sure that when you are deploying, you run the build command at some point in that process.

2. Use the `express.static()` method to serve the `dist` folder from our `client` directory
3. Have some endpoint in your express app to serve the built `dist` folder

   Example using `app.use()`:

   ```
   app.use(express.static(path.join(__dirname, "./client", "dist")));
   ```
