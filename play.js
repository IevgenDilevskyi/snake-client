const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
// connect();

setupInput(connect()); // need to call connect with (). That was the ptroblem
