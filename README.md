# Welcome to Flight Service

## Project Setup
- clone the project on your machine
- execute the command `npm init` on the same path of the root directory of the downlaoded folder
- create a `.env` file in the root directory and add the following enviroment variables
    - `PORT=3000`

- Inside the `src/config` folder create a file name config.json and then add the following piece of code

```

{
  "development": {
    "username": <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "flight_search",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```