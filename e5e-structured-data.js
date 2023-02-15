exports.myfunction = (event, context) => {
    return {
        data: event.data.a + event.data.b,
    };
};