let http = require('http');

module.exports = {
    sendBeacon: (speedTestData, callback) => {
        let bodyString = JSON.stringify(speedTestData);

        let headers = {
            'Content-Type': 'application/json',
            'Content-Length': bodyString.length
        };

        let options = {
            host: process.env.BEACON_HOST, //'ofiryaron.com',
            path: '/speedtest/beacon',
            port: 80,
            method: 'POST',
            headers: headers
        };

        console.dir(process.env.BEACON_HOST);
        http.request(options, callback).write(bodyString);
    }
};