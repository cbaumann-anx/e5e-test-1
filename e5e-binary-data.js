exports.myfunction = (event, context) => {
    let input_binary = Buffer.from(event.data.binary, "base64").toString(),
        output_binary = input_binary
            .split("")
            .map((b) => String.fromCharCode(b.charCodeAt(0) ^ 255))
            .join("");
    return {
        type: "binary",
        data: {
            binary: Buffer.from(output_binary).toString("base64"),
            name: "output.blob",
            content_type: "x-my-first-function/blob",
        },
    };
};