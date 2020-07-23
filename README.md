# Community First

Our Community First website is a way to discover how to give back, by providing an online forum to post community service events. The home page displays all community events. Clicking on one event will display information about that event. From the home page, a user can log in and create an event. A SQL database is generated to store user and event information, as well as a comments section for a future version. Login credentials are implemented with node packages bcrypt and cookie-parser.

## Link to Deployed Site

[Community First](https://communityfirst.herokuapp.com)

![Screenshot of home page](https://user-images.githubusercontent.com/58674283/88347954-f7d75580-cd00-11ea-968f-bfa472eac7c4.png?raw=true "Home page")

![Screenshot of create event page](https://user-images.githubusercontent.com/58674283/88347958-fc9c0980-cd00-11ea-9f2e-7b539d1a80af.png?raw=true "Create event page")

## Built With

- [Heroku](https://www.heroku.com/) - platform to deploy live websites
- [Travis CI](https://travis-ci.com/) - enable testing before merges of code format and API Get route
- [ESLint](https://eslint.org/) - ensure correct code format before merges, when combined with Travis CI
- [Node](https://nodejs.org/en/) - a Javascript libary for backend logic, or for use outside a browser
- [mysql2](https://www.npmjs.com/package/mysql2) - a node library for querying MySQL databases
- [sequelize](https://www.npmjs.com/package/sequelize) - node library and ORM (object related modeling) language for CRUD actions with a SQL database
- [bcrypt](https://www.npmjs.com/package/bcrypt) and [cookie-parser](https://www.npmjs.com/package/cookie-parser) - node libraries for implementing login credentials and verification
- [dotenv](https://www.npmjs.com/package/dotenv) - node library for handling environment variables
- [nodemon](https://www.npmjs.com/package/nodemon) - node library for efficient updating and browser testing
- [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai) and [chai-http](https://www.npmjs.com/package/chai-http) - node libraries to enable testing
- [express](https://www.npmjs.com/package/express) - a node library for initiating servers and setting up routes
- [express handlebars](https://www.npmjs.com/package/express-handlebars) - a node library to create html template files with values fillable by jquery logic
- [JQuery](https://jquery.com/) - a Javascript library
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - HyperText Markup Language used for structure
- [CSS](https://www.w3schools.com/css/css_intro.asp) - custom styling of html


## Authors

- **Aaron Garner** - _Front End Javascript Logic for CRUD AJAX calls, Reformat Handlebars Structure_ - [aaron-G18](https://github.com/aaron-G18)
- **Hung Le** - _Back End, Login Checks & Cookie Implementation & Routing to Update Database_ - [hungle913](https://github.com/hungle913)
- **Colin Chang** - _Front End Design & Implementation, Mobile Responsiveness_ - [semicolinc](https://github.com/semicolinc)
- **Kate Jamboretz** - _Backend, Initial Models & Routes, Deploy Site, README_ - [katejamboretz](https://github.com/katejamboretz)
- **UCB Full Stack Development Program** - _provide generic MVP starter code & file structure for CRUD application_

## Acknowledgments

- UC Berkeley Extension Full Stack Development 2020 Instructor, TAs and classmates
- [PurpleBooth README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
