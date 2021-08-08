function chop(data, template) {
    if (template === null ||
        Array.isArray(template) ||
        typeof template === "function") {
        return "data type of the argument does not match with the requirements";
    }
    else if (typeof data == "string" && typeof template == "object") {
        var splitedData = data.split(" ");
        var newArray = splitedData.map(function (item) {
            if (item.slice(0, 2) === "{{" &&
                item.slice(item.length - 2, item.length) === "}}") {
                var prop;
                for (prop in template) {
                    if (item.indexOf(prop) >= 0) {
                        item = item.replace(item, template[prop]);
                    }
                }
                return item;
            }
            else {
                return item;
            }
        });
        var joinedArray = newArray.join(" ");
        console.log("joinedArray", joinedArray);
        return joinedArray;
    }
    else {
        return "data type of the argument does not match with the requirements";
    }
}
chop(2, { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" });
