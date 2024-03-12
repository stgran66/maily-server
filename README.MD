# Maily

Website: [https://maily-server.onrender.com/](https://maily-server.onrender.com/)

The Maily app is a JavaScript application built using Node.js and React/Redux. It is designed to handle sending email surveys, and collect user's feedback

With Maily, you can log in using your Google or GitHub account and create custom surveys. You have the flexibility to set the survey title, email subject, and questions. Once you have configured your survey, you can send it to your listed recipients. Maily allows you to personalize your surveys and streamline the process of collecting feedback.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tools and libraries](#used-tools-and-libraries)
- [Credits](#credits)

## Installation

To install Maily, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/stgran66/maily.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. To install client dependencies, run the following command:

   ```bash
   npm run client-install
   ```

4. Configure the server by creating a `.env` or `.env.dev` file for development in the root directory with the following content:

   ```
   PORT = 5000
   ```

   Google credentials

   ```
   GOOGLE_CLIENT_ID = your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET = your_google_oauth_client_secret
   ```

   MongoDB connection string

   ```
   MONGO_URI = your_mongodb_connection_string
   ```

   Cookies

   ```
   COOKIE_KEY = your_string_to_encode_cookies
   ```

   Github credentials

   ```
   GITHUB_CLIENT_ID = your_github_oauth_client_id
   GITHUB_CLIENT_SECRET = your_github_oauth_client_secret
   ```

   Stripe credentials

   ```
   STRIPE_PUBLISHIBLE_KEY = your_stripe_publishible_key
   STRIPE_SECRET_KEY = your_stripe_secret_key
   ```

   SendGrid

   ```
   SENDGRID_KEY = your_sendgrid_key
   ```

   Email redirect domain (for dev http://localhost:3000)

   ```
   REDIRECT_DOMAIN = redirect_domain
   ```

5. Start the dev mode:

   ```bash
   npm run dev
   ```

   This will start the Maily server and client and make them accessible at the specified port.

## Usage

To use this project, follow these steps:

1. Log in using your GitHub or Google account.
2. To add credits, use the Stripe testing card: 4242 4242 4242 4242, with a valid expiration date and any 3-digit CVV code.
3. Once logged in, click the "+" button in the bottom right corner to create a new survey.
4. Complete the survey form, including a simple yes/no question in the email body and a list of recipient emails separated by commas.
5. Send your first survey.
6. On the dashboard, you can view your surveys and see response information.

## Used Tools and Libraries

Maily utilizes the following tools and libraries:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment that allows executing JavaScript code outside of a browser.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.
- [Express](https://expressjs.com/): A fast, unopinionated, minimalist web framework for Node.js.
- [MongoDB](https://www.mongodb.com/): A NoSQL database program that uses JSON-like documents with optional schemas.
- [Passport](http://www.passportjs.org/): An authentication middleware for Node.js.
- [SendGrid](https://sendgrid.com/): A cloud-based email delivery platform for sending transactional and marketing emails.
- [Stripe](https://stripe.com/): A payment processing platform for online businesses.
- [GitHub OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps): An authentication method using GitHub accounts.
- [Google OAuth](https://developers.google.com/identity/protocols/oauth2): An authentication method using Google accounts.
- [Mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js that provides a straightforward, schema-based solution to model your application data.
- [Passport](http://www.passportjs.org/): An authentication middleware for Node.js that supports various authentication strategies, including OAuth, OpenID, and more.
- [Axios](https://github.com/axios/axios): A promise-based HTTP client for the browser and Node.js.
- [Redux Form](https://redux-form.com/): A library for managing form state in Redux.
- [Materialize CSS](https://materializecss.com/): A modern responsive front-end framework based on Material Design.

## Credits

This app was built as a part of the course [Node with React: Fullstack Web Development](https://www.udemy.com/course/node-with-react-fullstack-web-development).
