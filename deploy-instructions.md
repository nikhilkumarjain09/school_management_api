# Deploying a Node.js Application to AWS Elastic Beanstalk

This guide provides step-by-step instructions to deploy a Node.js application to AWS Elastic Beanstalk.

---

## Prerequisites

1. **AWS CLI Installed**:  
   Install the AWS CLI and configure it:  
   ```bash
   aws configure
   ```

2. **Elastic Beanstalk CLI Installed**:  
   Install the Elastic Beanstalk CLI (`eb-cli`):  
   [Installation Guide](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html).

3. **Node.js Installed**:  
   Install Node.js from [Node.js Official Website](https://nodejs.org/).

4. **Git Installed**:  
   Install Git from [Git Downloads](https://git-scm.com/downloads).

---

## Deployment Instructions

1. **Prepare Your Application**:  

   Ensure the project has:  
   - A `package.json` file with the `start` script:  
     ```json
     "scripts": {
         "start": "node app.js"
     }
     ```  
   - A `Procfile` with the following content:  
     ```plaintext
     web: node app.js
     ```

2. **Initialize Elastic Beanstalk**:  

   Run the following to initialize your EB environment:  
   ```bash
   eb init
   ```  
   - Choose your AWS region.  
   - Select the **Node.js** platform.  
   - Provide an application name.

3. **Create a New Environment**:  

   Create the environment for deployment:  
   ```bash
   eb create
   ```  
   - Provide a name for the environment (e.g., `nodejs-env`).

4. **Deploy Your Application**:  

   Deploy your application using the following command:  
   ```bash
   eb deploy
   ```

5. **Access Your Application**:  

   Open the deployed application in your browser:  
   ```bash
   eb open
   ```

---

## Managing the Application

- **Set Environment Variables**:  
  ```bash
  eb setenv MONGO_URI=YOURMONGOURI
  ```

- **Retrieve Logs**:  
  ```bash
  eb logs
  ```

- **Redeploy After Changes**:  
  ```bash
  eb deploy
  ```

---

## Cleanup

To terminate the environment and delete associated resources:  
```bash
eb terminate
```

---

For more details, refer to the [AWS Elastic Beanstalk Documentation](https://docs.aws.amazon.com/elasticbeanstalk/).
