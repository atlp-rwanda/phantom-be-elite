[![Maintainability](https://api.codeclimate.com/v1/badges/a19ae61085b817267dc5/maintainability)](https://codeclimate.com/github/atlp-rwanda/phantom-be-elite/maintainability)[![Build](https://github.com/atlp-rwanda/phantom-be-elite/actions/workflows/build.yml/badge.svg)](https://github.com/atlp-rwanda/phantom-be-elite/actions/workflows/build.yml)

# Phantom

This project has been built by ELITE team in ATLP Program.

## Description

Phantom is a web application that allows a passenger to simulate bus movements and also cab track buses's locations & movements.p

## Getting Started

### Dependencies

- Nodejs has to be installed
- Javascript ES6+
- Postman for API testing
- Windows 10 or any other operating system

### Installing

- Clone the repository
- Install all packages with either npm or yarn

### Executing program

- npm run start:dev this is specifically for development.
- npm run start this is specifically for production.

```
code blocks for commands
npm install
npm run start:dev
```

## Authors

Contributors names and contact info

Elite team:

-[Dodo](#https://github.com/mukunzidd) -[PatrickNiyogitare](#https://github.com/PatrickNiyogitare28) -[NDAYISABYE Salim](#https://github.com/Salim-54) -[Axel Divin](#https://github.com/Xldivin) -[Epaphrodis](#https://github.com/) -[Prince Niyonshuti](#https://github.com/PrinceNiyonshuti) -[AKIMANA Rachel](#https://github.com/) -[SHYAKA Benjamin](#https://github.com/) -[NIYONKURU Sylvain](#https://github.com/) -[Hodal MUHETO](#https://github.com/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Sequelize

create model
sequelize model:generate --name User --attributes name:string,email:string

migration
sequelize db:migrate && npm run migration

seeding
sequelize db:seed:all && npm run seed
