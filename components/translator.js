const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    constructor() {
        this.americanOnly = americanOnly;
        this.americanToBritishSpelling = americanToBritishSpelling;
        this.americanToBritishTitles = americanToBritishTitles;
        this.britishOnly = britishOnly;
    }

    translate(text, locale) {
        let translatedText = text;
        if (locale === 'american-to-british') {
            translatedText = this.translateAmericanToBritish(text);
        } else if (locale === 'british-to-american') {
            translatedText = this.translateBritishToAmerican(text);
        }
        return translatedText;
    }

    translateAmericanToBritish(text) {
        let translatedText = text;

        for (const [key, value] of Object.entries(this.americanOnly)) {
            const regex = new RegExp('(^|\\W)'+key+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${value}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.americanToBritishSpelling)) {
            const regex = new RegExp('(^|\\W)'+key+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${value}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.americanToBritishTitles)) {
            const regex = new RegExp('(^|\\W)'+key+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${this.toTitleCase(value)}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.britishOnly)) {
            const regex = new RegExp('(^|\\W)'+value+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${key}</span>$2`);
        }

        // translate time
        const regex = new RegExp('(^|\\s)(\\d\\d):(\\d\\d)(\\s|$)', 'gi');
        translatedText = translatedText.replace(regex, `$1<span class="highlight">$2.$3</span>$4`);

        return translatedText;
    }

    translateBritishToAmerican(text) {
        let translatedText = text;

        for (const [key, value] of Object.entries(this.americanOnly)) {
            const regex = new RegExp('(^|\\W)'+value+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${key}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.americanToBritishSpelling)) {
            const regex = new RegExp('(^|\\W)'+value+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${key}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.americanToBritishTitles)) {
            const regex = new RegExp('(^|\\W)'+value+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${this.toTitleCase(key)}</span>$2`);
        }

        for (const [key, value] of Object.entries(this.britishOnly)) {
            const regex = new RegExp('(^|\\W)'+key+'(\\W|$)', 'gi');
            translatedText = translatedText.replace(regex, `$1<span class="highlight">${value}</span>$2`);
        }

        // translate time 
        const regex = new RegExp('(^|\\s)(\\d\\d).(\\d\\d)(\\s|$)', 'gi');
        translatedText = translatedText.replace(regex, `$1<span class="highlight">$2:$3</span>$4`);

        return translatedText;
    }

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    isValidLocale(locale) {
        return locale === 'american-to-british' || locale === 'british-to-american';
    }


}

module.exports = Translator;