const fs = require('fs');
const chalk = require('chalk');

module.exports = {
    options: {
        debug: true,
        func: {
            list: [ 't'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            component: 'Trans',
            i18nKey: 'i18nKey',
            extensions: ['.js', '.jsx'],
            fallbackKey: function(ns, value) {
                // Returns a hash value as the fallback key
                return value;
            }
        },
        lngs: ['ct','es','en'],
        ns: [
            'translations'
        ],
        defaultLng: 'ct',
        defaultNs: 'translations',
        defaultValue: function(lng, ns, key) {
            if (lng === 'ct') {
                // Return key as the default value for Catalan language
                return key;
            }
            // Return the string '__NOT_TRANSLATED__' for other languages
            return '__NOT_TRANSLATED__';
        },
        resource: {
            loadPath: 'public/locales/{{lng}}/{{ns}}.json',
            savePath: 'public/locales/{{lng}}/{{ns}}.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: true, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(content, { list: ['i18next._', 'i18next.__'] }, (key, options) => {
            parser.set(key, Object.assign({}, options, {
                nsSeparator: false,
                keySeparator: false
            }));
            ++count;
        });

        if (count > 0) {
            console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
        }

        done();
    }
};