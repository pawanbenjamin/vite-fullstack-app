# ⚡️ Vite + Express

## For Production:

1. Build Vite Application

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

## For Development

In development, Vite defaults to serving the application on `PORT 5173`. Our express server is running on `PORT 3000`. This could potentially be an issue when trying to fetch from an endpoint in our backend.

You will need to do the following to setup a full stack workflow between client and server!

1. Make sure you have both your servers running (Your React Client and your Express Application)

2. In the `vite.config.js` file change your config object to look like this:
   ```
      export default defineConfig({
         plugins: [react()],
         server: {
            proxy: {
            "/api": "http://localhost:3000"
            }
         }
      });
   ```

Now, when you are developing, you can make a request to any routes that start with `/api`! Vite will look for it on `5173`, but wont find it, then will look at the proxy server, and will find our express application!
