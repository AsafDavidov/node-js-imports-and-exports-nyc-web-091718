module.exports = function getUserArguments() {
    if (userArgs.length > 1) {
      console.warn(`Warning: you provided more than one argument.`);
    }
    return process.argv.slice(2);
};
