'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;

      if(req.body.text == ''){
        res.json({ error: 'No text to translate' });
        return;
      }

      if (!text || !locale) {
        res.json({ error: 'Required field(s) missing' });
      } else if (!translator.isValidLocale(locale)) {
        res.json({ error: 'Invalid value for locale field' });
      } else {
        let translatedText = translator.translate(text, locale);
        translatedText = translatedText == text ? 'Everything looks good to me!' : translatedText;
        res.json({ text, translation: translatedText });
      }

      res.end();
      return;
    });
};
