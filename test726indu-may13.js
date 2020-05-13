let Swagger = require('swagger-client');

exports.handler = async (event) => {
    try {
        let response = await Swagger.http({
            url: `https://api-sandbox.starlingbank.com/api/v2/accounts/123/balance`,
            method: 'get',
            query: {},
            headers: { "Accept": "application/json" }
        });
        // your code goes here

    } catch (err) {
        // error handling goes here
    }

    return { "message": "Successfully executed 1" };
};