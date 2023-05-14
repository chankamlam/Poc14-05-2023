#!/bin/bash
sleep 60
npx knex migrate:latest
npx knex seed:run
npx nodemon bin/www