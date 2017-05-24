# React-exercise

You can see a demonstration at [http://react-interview-exercise.surge.sh/](http://react-interview-exercise.surge.sh/).

**available scripts:**

`yarn start`

`yarn build`

`yarn test`

### Task

**Please add pagination support to the list when there are more than 2 entries**

The solution to this task was implemented in the FriendList component.
The logic is based on how many friends we have per page, the first and the last to be show.


**Please add option to select sex of a friend male/female and display it**

for this task we needed to:
1. add sex to the ADD_FRIEND action and pass it to the reducer
2. implement the select element itself
3. create onChange function for the select
4. modify the submit function for the entire form


**Please add tests using your preferred testing tool (jest, mocha, should.js ...)**

Here we are using jest, jest give us great overview about our tests and [expect](https://github.com/mjackson/expect) a nice and lean syntax.

we are mainly testing 3 behaviours:
1. the presences of component and element in our app
2. the state or our app before any actions
3. the structure of all our Actions

### Dependencies

Here we added [prop-types](https://github.com/facebook/prop-types), as recomended by React.JS, prop-types from `react` being deprecated.

### DevDependencies

Here we added:
1. [enzyme](https://github.com/airbnb/enzyme) as a test utility , mainly for its easy to use and intuitive syntax.
2. [react-test-renderer](https://www.npmjs.com/package/react-test-renderer) is needed when testing React apps wiht enzyme.
