## Deployment Instructions to Heroku

### Prerequisites
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Ensure that **Git** is installed and your project repository is initialized.
3. Set up MongoDB connection URI for deployment.

---

### Steps to Deploy

1. **Login to Heroku CLI**
   ```bash
   heroku login
   ```
   Follow the instructions in the browser to authenticate.

2. **Create a Heroku Application**
   ```bash
   heroku create <app-name>
   ```
   Replace `<app-name>` with your desired app name.

3. **Add MongoDB Environment Variable**
   ```bash
   heroku config:set MONGODB_URI='<your-mongodb-uri>'
   ```

4. **Deploy the Application**
   Push your code to the Heroku Git remote:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push heroku main
   ```

5. **Verify Deployment**
   Check your deployed app URL:
   ```bash
   heroku open
   ```
   Your API should now be live.

6. **Access Swagger API Documentation**
   Visit:
   ```
   https://<app-name>.herokuapp.com/api-docs
   ```

---

### Notes
- Replace placeholder variables like `<app-name>` and `<your-mongodb-uri>` with actual values.
- Ensure `MONGODB_URI` points to your MongoDB instance.
- Swagger UI will be available at `/api-docs` to explore your API endpoints.
- Logs can be viewed using:
   ```bash
   heroku logs --tail
   ```
