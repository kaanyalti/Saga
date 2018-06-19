# Sága

Video Analytics Made Easy

## Final Product

![Sage Homepage](/docs/saga_home.png)
Sage Homepage

![Saga Login](/docs/saga_login.png)
Sage Login

![Saga Analytics](/docs/saga_analytics.png)
Sage Overall and Filtered Analytics

## Setup

1. Clone this repository
2. Run `bundle install` to install dependencies in the root directory
3. Run `npm install` in the `app/client` directory
4. Create a `local_env.yml` using `local_env.example.yml` as a template
5. Run `bin/rake db:reset` in the root directory
6. Sign up for a [Kairos](https://www.kairos.com/) API key
7. Sign up for a [Ziggeo](https://ziggeo.com/) API key
8. Add the Kairos App ID and Ziggeo API keys into the appropriate `local_env.yml` variables
9. Obtain OAuth 2.0 client credientials from the [Google API Console](https://console.developers.google.com/)
10. Obtain a YouTube API key
11. Add the Ziggeo, OAuth2, and YouTube API keys into the appropriate `env.js` variables
12. Run `npm start` in `app/client` to run the front-end server
13. Run `bin/rails s -b 0.0.0.0 -p 3001` to run the back-end server


## React Server Dependencies

- axios
- canvasjs
- lottie-web
- moment
- pg
- react
- react-css-transition
- react-dom
- react-google-login
- react-moment
- react-router-dom
- react-scripts
- react-ziggeo
- reactstrap

## Rails Server Dependencies

- byebug
- faker
- rails
- pg
- puma
- httparty
- listen
- spring
- spring-watcher-listen

