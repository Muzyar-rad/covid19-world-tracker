# covid19-world-tracker

React mobile responsive web application that shows the live status of Covid19 cases, deaths and recovered in the world and by each country

## Technologies Used

1. React.js (React Hooks)
2. HTML5
3. CSS3
4. Bootstrap4
5. React-Bootstrap
6. Google Maps API
7. AWS EC2
8. NGINX
9. Fetch API

## Features

- Shows the current number of covid19 cases, recovered and deaths at the header section 
- Showd the current number of covid19 cases, recovered and deaths by each country on google map

   **Note:** Data is being updated every 10 minutes

## Live Demo

Try the application live at http://covidtracker.muzyar-rad.com

## Preview




## Collaborator 

Muzyar Rad aka. Mazy

## Setup Instructions

1. Install client dependencies

- `npm install` or `npm i`

2. Set the Google Maps key in `.env` file

- `REACT_APP_GOOGLE_MAP_API`= **{{Your google map API key}}**

   **Note:** You will need to provide your own google map API key from google cloud platform as mine is stored inside an environment variable

   **Note2:** Please refer to environment variables section in React Documentation on how to set the environment variable as there are different instructions on different operating systems

3. Run the project 

- npm start
