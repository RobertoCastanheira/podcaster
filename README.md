# Podcaster

This is a project that enables users to browse and listen to different podcasts. The project is built using Svelte, PicoCSS, and Svelte Routing.

## Installation

To get started with the project, clone the repository to your local machine, and then install the dependencies:

```
git clone https://github.com/RobertoCastanheira/podcaster.git
cd podcaster
npm install
```

## Running the Application

Visit `https://cors-anywhere.herokuapp.com/` and click on "Request temporary access to the demo server".

You can run the application in development mode using the `dev` script:

```
npm run dev
```
This will start a development server and the application will be available at `http://localhost:5173`.

## Building the Application

To build the application for production, run the `build` script:

```
npm run build
```

This will create an optimized production build of the application in the `dist` directory.

## Previewing the Production Build

To preview the production build, run the `preview` script:

```
npm run preview
```

This will start a preview server and the production build of the application will be available at `http://localhost:5173`.

## Testing

### Cypress

To run the Cypress end-to-end tests, run the following commands:

```
npm run cypress-open
```

This will open the Cypress test runner, where you can choose to run the tests interactively.

Alternatively, you can run the tests in headless mode using the following command:

```
npm run cypress-run
```

### Jest

To run the Jest unit tests, run the following command:

```
npm run jest-run
```

## Dependencies

- Svelte: A JavaScript framework for building user interfaces.
- PicoCSS: A lightweight CSS framework.
- Svelte Routing: A routing library for Svelte applications.
- Cross-Fetch: A lightweight fetch API polyfill.
- Dayjs: A JavaScript library for parsing, validating, manipulating, and formatting dates.
- Fast-XML-Parser: A fast XML parser written in JavaScript.
- Start-Server-And-Test: A tool for starting a server and running tests against it.

## Dev Dependencies

- Babel: A JavaScript compiler.
- Vite: A build tool for modern web applications.
- Jest: A JavaScript testing framework.
- Cypress: A JavaScript end-to-end testing framework.

## License

This project is licensed under the MIT license.
