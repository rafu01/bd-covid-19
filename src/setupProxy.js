
const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        createProxyMiddleware("/dhaka", {
            target:"https://covid19bangladesh.pythonanywhere.com",
            changeOrigin:true
        })
    );
};