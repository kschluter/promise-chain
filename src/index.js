var mod1 = require('./mod1');
var mod2 = require('./mod2');
var mod3 = require('./mod3');

function execModChain(data) {

    let result = {
        errors: [],
        messages: []
    };

    return mod1(result)
        .then(data => {
            //console.log(data)
            return data;
        })
        .then(mod2)
        .then(data => {
            //console.log(data)
            return data;
        })
        .then(mod3)
        .then(data => {
            //console.log(data)
            return data;
        })
        .catch(data => {
            //console.log(data)
            return data;
        });
}

execModChain().then(data => {
    console.log(data)
});
