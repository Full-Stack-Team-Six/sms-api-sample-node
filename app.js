

let api_key = "Enter Your API Key Here";
let message = "Enter Your Message Here";
let phone = "Enter The Recipient Phone number";

const http = require('http');
const querystring = require("querystring");

function send_message() {

    let data = {
        "key": api_key, "message": message, "phone": phone
    };
    let qs = querystring.stringify(data);
    let qsLength = qs.length;
    let options = {
        hostname: "portal.fullstackteamsix.com",
        path: '/api/v1/send/index.php',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': qsLength
        }
    };

    let buffer = "";
    let req = http.request(options, function (res) {
        res.on('data', function (chunk) {
            buffer += chunk;
        });
        res.on('end', function () {
            console.log(buffer);
        });
    });

    req.write(qs);
    req.end();



}

send_message();
