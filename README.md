# README

# OpenDumpster

OpenDumpster, an OpenTable clone, is an online platform for users to search and book reservations for restaurants.

## Background and Overview

OpenDumpster uses Ruby on Rails with a PostgreSQL database on the back-end, and React / Redux on the front-end to render the application. 

## Technologies

* Database: PostgreSQL
* Backend: Ruby on Rails
* Frontend: React.js, Redux.js, Javascript, jQuery

## Installation

### Prerequisites

Postgres Database is required for OpenDumpster to operate correctly.

### Setup

Please navigate to your main folder, and run the following commands:

`bundle install`
`npm install`
`bundle exec rails db:create`
`bundle exec rails db:migrate`
`bundle exec rails db:seed`

### Executing App

Please open two separate windows in your terminal and run the following commands:

`rails s`
`npm start`

## Features

### User Authenticity

* Users can search for restaurants without requiring to be logged in.
* Users can only make reservations if they are logged in.
* A demo account has been provided for ease of access to test the features.

