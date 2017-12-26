module.exports = args => {
    console.log('running mod 1')
    return new Promise((resolve, reject) => {
        const pass = true; // switch to false to simulate error/failure
        if (pass == true) {
            args.messages.push('module 1 passed');
            resolve(args);
        } else{
            args.errors.push('module 1 failed');
            reject(args);
        }
    })
}
