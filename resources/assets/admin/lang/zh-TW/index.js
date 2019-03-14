const files = require.context("./", false, /[A-Za-z0-9-_,\s]+\.json$/i);
let locales = {};
files.keys().forEach(key => {
    locales = Object.assign(locales, files(key));
});

export default locales;
