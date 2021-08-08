function chop (data, template) {
    if (
        template === null ||
        Array.isArray(template) ||
        typeof template === "function"
    ) {
        return "data type of the argument does not match with the requirements"
    } else if (typeof data == "string" && typeof template == "object") {

        const splitedData = data.split(" ");

        const newArray = splitedData.map((item) =>  {
            if (
                item.slice(0, 2) === "{{" &&
                item.slice(item.length - 2, item.length) === "}}") {
                for(prop in template) {
                    if (item.indexOf(prop) >= 0){
                        item = item.replace(item, template[prop])
                    }
                } 
                return item; 
            } else {
                return item;
            }
         })
        let joinedArray = newArray.join(" ");
        console.log("joinedArray", joinedArray)
        return joinedArray;
    }
}

chop(
    "I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
    { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" });

module.exports = chop

