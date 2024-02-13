module.exports = async function (context, req) {
    //  import mjml2html from 'mjml';
    const mjml2html = require('mjml');

    context.log('MJML HTTP trigger function processed a request.');

    const mjmlInput = (req.body && req.body.mjml);
    const options = (req.body && req.body.options);
    const mjmlResponse = mjml2html(mjmlInput, options);
    const responseMessage = mjmlResponse.html;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}