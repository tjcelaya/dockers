const http = require('http')
const spawn = require('child_process').spawn;
const fs = require('fs')

// http.createServer((req, res) => {
//     console.log('received a request?')
// })

const piano = spawn('env', [], {
    stdio: 'inherit',
    env: {
        XDG_CONFIG_HOME: process.env.XDG_CONFIG_HOME
    },
});

piano.on('close', (code) => {
  console.log(`THE PIANO DIED !!! ${code}`);
});
