console.log("process.env.NODE_ENV="+process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./ui-dev.js')
} else {
    module.exports = require('./ui.js')
}