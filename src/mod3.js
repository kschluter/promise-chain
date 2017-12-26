module.exports = args => {
    console.log('running mod 3')
    return new Promise((resolve, reject) => {
        const pass = true; // switch to false to simulate error/failure
        if (pass == true) {
            args.messages.push('module 3 passed');
            resolve(args);
        } else{
            args.errors.push('module 3 failed');
            reject(args);
        }
    })
}
