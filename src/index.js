/// Based of open-source api lib on top of speedtest:
/// https://github.com/ddsol/speedtest.net

let speedTest = require('speedtest-net');
let beacon = require('./beacon');
let test = speedTest({maxTime: 5000});

test.on('data', data => {
    console.dir(data);
    beacon.sendBeacon(data, (res) => { console.dir(res);});
});

test.on('error', err => {
    console.error(err);
});


// V> run speedtest return result as follows: resources/speedtest-result.json
// V> fix file styling for js, accept and style it as a valid ES6 node file
// X> Send data to specified location
//      > Configurable endpoint
//      > Add rest call on OfirYaron site
