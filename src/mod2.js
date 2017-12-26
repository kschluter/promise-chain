module.exports = args => {
    console.log('running mod 2')
    return new Promise((resolve, reject) => {
        const pass = true; // switch to false to simulate error/failure
        if (pass == true) {
            args.messages.push('module 2 passed');
            resolve(args);
        } else{
            args.errors.push('module 2 failed');
            reject(args);
        }
    })
}
