'use strict';
const Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.response.speak('Hello World New !');
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = 'This is the Hello World Sample Skill. New ';
        const reprompt = 'Say hello, to hear me speak.New ';

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye! New ');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later! New');
        this.emit(':responseReady');
    }
};