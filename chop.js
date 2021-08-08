function chop (data, template) {
    if (
        template === null ||
        Array.isArray(template) ||
        typeof template === "function"
    ) {
        console.log("data type is not right");
        return "wrong data type"
    } else if (typeof data == "string" && typeof template == "object") {
        console.log("data type is right.");
        let str = data;
                    let cleanStr = str.substring(2, str.length - 2);
                    console.log("str is: ", cleanStr);
                return cleanStr;
    }
}

chop("heyyyooooo", {});

module.exports = chop

