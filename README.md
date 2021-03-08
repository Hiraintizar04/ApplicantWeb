# Applicant
The including Form is an Angular Application which uses the API to Post Data AND Validate all the inputs with
the exact same parameters as the API does.
- Typescript is used
- angular-cli is used
- Form can only be send if the data is valid
- include Boostrap for the UI
- include form validation
- invalid fields  marked with an red border and an explanation why the date is invalid
- the form has to buttons- send and reset.
- the reset button is only enabled if the user has typed in data -> if all fields are empty the reset button is not enabled.
- when the user has touched a field but afterwards deleted all entries, the reset button is also not enabled.
- The send button is only active if all required fields are filled out and are valid.
- after sending the data, the user redirects to a view which confirms the sending.
- if the sending was not successful an error message is shown in a dialog. Describing what was going wrong.

# Applicant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
