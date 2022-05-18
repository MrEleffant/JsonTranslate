var TJO = require('translate-json-object')();
const fs = require('fs');
// Choose the service to use google/yandex,
// if you provide both yandex will be used as the default
TJO.init({
    googleApiKey: 'AIzaSyDHAbHNCGWmXfgiKnxEP9MXbMi90dvCiYI'
});

// An example scenario (json) object
const source = require("./fr.json")

// Translate method takes (source object, and language code)
const target = ["en", "es", "it", "de"]
target.forEach(lang => {
    TJO.translate(source, lang)
        .then(function (data) {
            fs.writeFile(`./${lang}.json`, JSON.stringify(data, null, 2), function (err) {
                if (err) throw err;
                console.log(`${lang} file has been saved!`);
            });
        }).catch(function (err) {
            console.log('error ', err)
        });
})