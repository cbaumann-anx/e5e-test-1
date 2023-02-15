exports.myfunction = (event, context) => {
    return {
        response_headers: {
            "x-sent-content-type": event["request_headers"]["content-type"] || "*/*",
        },
        data: "Hello world!",
    };
};