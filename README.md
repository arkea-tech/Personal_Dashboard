# Personal_Dashboard


## Table of contents
* [Description](#description)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Sources](#sources)
* [Author](#author)


## Description

Dashboard web application inspired from [Net Vibes](https://www.netvibes.com/en), offering **Services** and customizable **Widgets**.
The web application provide useful informations from various external sources.


Currently, the available **Services** and managed **Widgets** are :

1. Entertainment
    - **YouTube Videos** : Display uploaded videos infos about a channel/user/content.
2. Productivity
    - **Weather** : Current day & forecast weather datas as well as details.
    - **Calendar** : Display monthly/weekly/daily Calendar view and user events.

By subscribing to these **Services**, the user can then compose his/her dashboard by inserting preconfigured **Widgets instances**.

Also, it's possible to edit, delete and move **Widgets** on the dashboard.

_Note : some Widgets configuration (exemple : YouTube, Google Calendar) required user to authenticate through an OAuth2 autorisation process in order to allow his/her personal datas_.


## Technologies

Frameworks        | Version | Description
------------------|---------|-----------------
Express.js        | 4.1     | REST API Manager
Angular.js        | 9.0     | Client Interface


Libs & Database   | Version | Description
------------------|---------|-------------------------------------------
MongoDB           |  0+     | Database that store datas into collections
Node              | 10.1    | Server side development and stacks handler
npm               | 6.1     | Package and dependency manager


## Setup

### To run the server :

1. `cd ./server`.
2. Required __one time__ to install all dependencies : `npm install`.
3. `node server.js`.

### To run the client :

1. `cd ./web-client`.
2. Required __one time__ to install all dependencies : `npm install`.
3. `ng serve`.

## Features


### Server Side

- [x] User Management Module
- [x] OAuth2
- [x] MEAN Stack
- [x] REST API
- [x] Widgets operations & datas fetched
- [x] Managed Services

### Client Side

- [ ] Register/Auth
- [ ] Navigation & Screens
- [ ] YouTube Widget
- [ ] Calendar Widget
- [ ] Weather Widget
- [ ] Add, Modify, Edit, Delete & Move Widgets
- [ ] Subscriptions
- [ ] Profile
- [ ] Timer


## Sources

MEAN Stack and Front-end structure based from _Open Classrooms_ tutorials :
- [MEAN Stack Set-up](https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/exercises/2998).
- [Angular](https://openclassrooms.com/en/courses/4668271-developpez-des-applications-web-avec-angular/6730441-entrainez-vous-en-creant-une-application-de-type-blog).

OAuth2 implementation: [OAuth2 in Node.js](https://github.com/googleapis/google-api-nodejs-client#using-api-keys).

API Documentations:
- [OpenWeather](https://openweathermap.org/api).
- [YouTube](https://developers.google.com/youtube/v3).
- [Google Calendar](https://developers.google.com/calendar).


## Author

Created with :heart: by [WoshiWoshu](https://github.com/WoshiWoshu).
