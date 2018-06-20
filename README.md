# Sága

_Video Analytics Made Easy_

Sága is a capstone project for Lighthouse Labs by [Corrina Chow](https://github.com/corrinachow), [Kaan Yalti](https://github.com/kaanyalti), and [Steve Abouem](https://github.com/steveabouem)

The project was split as follows:

Fully collaborative effort in initial database planning (ERD), wireframing and design. Corrina focused primarily on the front-end logic and handling the video reactions logic on the back-end.  She set up the all front-end routes, views & navigation, configured OAuth2 to work with the YouTube API to receive the user's videos on login/registration, made initial calls to Kairos, and Ziggeo, manipulated the emotion analysis data in the server, as well as parsing the data to create the Overall Reactions donut chart.  She also created the mockups and leveraged the capabilities of Bootstrap 4 to produce fully responsive Home, Login, and Admin Dashboard pages.

Steve focused on setting up CanvasJS, retrieve the data from the server and filter it to render the time stamped emotion data. He also worked on the initial style for the Home, Admin and Dashboard pages, as well as created components for front end animaitons and transitions ont the login and home pages. Like the other members he participated in keeping our Trello up to data.

Kaan integrated the Kairos API, youtube Iframe API and the Ziggeo javascript recorder. Created the public video page where the viewers' reactions are recorded.  Synchronized the video play and recording to collect accurate data.  Setup the logic in the server to make calls to the Kairos API and did prelimenary data cleaning upon receiving the analysed data.  Collaborated on the boilerplate. Worked on the syling of the public video page and the video details page.

## Final Product

![Sága Homepage](/docs/saga_home.png)
Sága Homepage

![Saga Login](/docs/saga_login.png)
Sága Login

![Saga Analytics](/docs/saga_analytics.png)
Sága Overall and Filtered Analytics

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

