# E-commerce Back End

![License](https://img.shields.io/badge/license-MIT-green)

## Description

This is an E-commerce back-end application built with Express.js API and Sequelize to interact with a MySQL database. It demonstrates the fundamental architecture of an E-commerce site.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [Associations](#associations)
- [API Routes](#api-routes)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## User Story


## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a MySQL database using the schema provided in the `schema.sql` file located in the `db` folder.
4. Seed the database with sample data using the `npm run seed` command.
5. Update the `.env` file with your MySQL database credentials.

## Usage

To start the server, open your terminal, navigate to the project folder, and run `npm start`. Use a tool like Insomnia Core or Postman to test the API endpoints.

## Database Models

The application has four models:

1. Category
2. Product
3. Tag
4. ProductTag

Please refer to the [Database Models section](#database-models) in the assignment description for detailed information about each model's properties.

## Associations

The application establishes the following associations between the models:

1. Product belongs to Category.
2. Category has many Product models.
3. Product belongs to many Tag models through the ProductTag model.
4. Tag belongs to many Product models through the ProductTag model.

## API Routes

The application includes API routes for categories, products, and tags to perform CRUD operations. For more information on these routes, refer to the [API Routes section](#api-routes) in the assignment description.

## Walkthrough Video

[Click here](<https://watch.screencastify.com/v/LPp7XsNJDTmvmIU6Y9QL>) to watch the walkthrough video demonstrating the functionality of the E-commerce Back End application.

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize
- MySQL2
- dotenv

## License

This project is licensed under the MIT License.

## Contributing

To contribute to this project, please submit a pull request with your proposed changes
