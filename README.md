# tdd-calculator-kata

## Dependencies
- yarn install

## Run tests
- npm test

## Kata Instructions
- Working in pairs
- TDD approach (Code can only be written with a failing test)
- Output via the test command only
- Test Cases should include positive and negative cases

### Calculator Spec
- All basic functions: Add - Subtract - Multiply - Divide
- The calculate method takes 2 strings and the operator. e.g.
  ```
    calculator.calculate("1", "3", "+");
  ```
  - Extension: Supports taking 1 number only or 3 numbers
- Negative numbers not allowed
- Numbers bigger than 1000 not supported

### Things to practice
- Must use es6 syntax e.g. let & const, arrow functions, classes (https://www.w3schools.com/js/js_es6.asp)
- Must include:
  - Switch case
  - If, else
  - For loop

#### Arithmetic operators
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
| Operator | Name                                | Purpose                                                                                                                                                | Example                                                             |
|----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| +        | Addition                            | Adds two numbers together.                                                                                                                             | 6 + 9                                                               |
| -        | Subtraction                         | Subtracts the right number from the left.                                                                                                              | 20 - 15                                                             |
| *        | Multiplication                      | Multiplies two numbers together.                                                                                                                       | 3 * 7                                                               |
| /        | Division                            | Divides the left number by the right.                                                                                                                  | 10 / 5                                                              |