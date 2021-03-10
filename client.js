const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => { // when connection is UP
    console.log('Successfully connected to game server'); // Show this message
    conn.write("Name: JAY"); //Send this text to server (appears next to snake)
  //  conn.write("Move: up"); // Send command to move one block Up
  });

  conn.on('data', (data) => {
    console.log('you ded cuz you idled');
  });

  return conn;
}

module.exports = connect;