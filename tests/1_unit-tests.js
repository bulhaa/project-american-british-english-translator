const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', function () {
        const input = 'Mangoes are my favorite fruit.';
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test("Translate I ate yogurt for breakfast. to British English", function () {
        const input = 'I ate yogurt for breakfast.';
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
    });

    test("Translate We had a party at my friend's condo. to British English", function () {
        const input = "We had a party at my friend's condo.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    });

    test("Translate Can you toss this in the trashcan for me? to British English", function () {
        const input = "Can you toss this in the trashcan for me?";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'Can you toss this in the <span class="highlight">bin</span> for me?');
    });

    test("Translate The parking lot was full. to British English", function () {
        const input = "The parking lot was full.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'The <span class="highlight">car park</span> was full.');
    });

    test("Translate Like a high tech Rube Goldberg machine. to British English", function () {
        const input = "Like a high tech Rube Goldberg machine.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'Like a high tech <span class="highlight">Heath Robinson device</span>.');
    });

    test("Translate To play hooky means to skip class or work. to British English", function () {
        const input = "To play hooky means to skip class or work.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    });

    test("Translate No Mr. Bond, I expect you to die. to British English", function () {
        const input = "No Mr. Bond, I expect you to die.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    });

    test("Translate Dr. Grosh will see you now. to British English", function () {
        const input = "Dr. Grosh will see you now.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, '<span class="highlight">Dr</span> Grosh will see you now.');
    });

    test("Translate Lunch is at 12:15 today. to British English", function () {
        const input = "Lunch is at 12:15 today.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'Lunch is at <span class="highlight">12.15</span> today.');
    });

    test("Translate We watched the footie match for a while. to American English", function () {
        const input = "We watched the footie match for a while.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test("Translate Paracetamol takes up to an hour to work. to American English", function () {
        const input = "Paracetamol takes up to an hour to work.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, '<span class="highlight">acetaminophen</span> takes up to an hour to work.');
    });

    test("Translate First, caramelise the onions. to American English", function () {
        const input = "First, caramelise the onions.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'First, <span class="highlight">caramelize</span> the onions.');
    });

    test("Translate I spent the bank holiday at the funfair. to American English", function () {
        const input = "I spent the bank holiday at the funfair.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    });

    test("Translate I had a bicky then went to the chippy. to American English", function () {
        const input = "I had a bicky then went to the chippy.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
    });

    test("Translate I've just got bits and bobs in my bum bag. to American English", function () {
        const input = "I've just got bits and bobs in my bum bag.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    });

    test("Translate The car boot sale at Boxted Airfield was called off. to American English", function () {
        const input = "The car boot sale at Boxted Airfield was called off.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    });

    test("Translate Have you met Mrs Kalyani? to American English", function () {
        const input = "Have you met Mrs Kalyani?";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    });

    test("Translate Prof Joyner of King's College, London. to American English", function () {
        const input = "Prof Joyner of King's College, London.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    });

    test("Translate Tea time is usually around 4 or 4.30. to American English", function () {
        const input = "Tea time is usually around 4 or 4.30.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'Tea time is usually around 4 or 4.30.');
    });

    test("Highlight translation in Mangoes are my favorite fruit.", function () {
        const input = "Mangoes are my favorite fruit.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    });

    test("Highlight translation in I ate yogurt for breakfast.", function () {
        const input = "I ate yogurt for breakfast.";
        const result = translator.translate(input, 'american-to-british');
        assert.strictEqual(result, 'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.');
    });

    test("Highlight translation in We watched the footie match for a while.", function () {
        const input = "We watched the footie match for a while.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, 'We watched the <span class="highlight">soccer</span> match for a while.');
    });

    test("Highlight translation in Paracetamol takes up to an hour to work.", function () {
        const input = "Paracetamol takes up to an hour to work.";
        const result = translator.translate(input, 'british-to-american');
        assert.strictEqual(result, '<span class="highlight">acetaminophen</span> takes up to an hour to work.');
    });

});
