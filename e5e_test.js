const user = process.env.USER;
//console.log(`Your name is ${user}`);

exports.myfunction = (event, context) => {
    return {
        data: `Hello ${user}!`,
    };
};