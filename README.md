# Welcome to Flight Service

## Project Setup
- Clone the project on your machine
- Cxecute the command `npm init` on the same path of the root directory of the downlaoded folder
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

- Once you've added your db config as listed above, go to the src folder from you terminal and execute `npx sequelze db:create` 
and then execute `npx sequelize db:migrate`

## DB Design
 - Airplane Table
 - Flight
 - Airport
 - City

 - A flight belongs to an airplane but airplane can be used in multiple flights
 - A city has many airports but one airport belongs to a city
 - One airport can have multiple flights but a flight belongs to one airport


## Tables
  
### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many Airports and Airports belong to a city(one to many)