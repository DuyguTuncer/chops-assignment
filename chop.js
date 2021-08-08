function chop (data, template) {
    if (
        template === null ||
        Array.isArray(template) ||
        typeof template === "function"
    ) {
        console.log("data type is not right");
        return "wrong data type"
    } else if (typeof data == "string" && typeof template == "object") {
        // console.log("data type is right.");

         const splitedData = data.split(" ");
         console.log("splitedData", splitedData);
      
        let filteredData = splitedData.filter((item) => {
            if (
                item.slice(0, 2) === "{{" &&
                item.slice(item.length - 2, item.length) === "}}"
            ) {
                return item;
            }
        });

        console.log("filteredData:", filteredData);

        

        return;
    }
}

chop(
    "I have many things in my fridge such as {{bread}} {{focaccio}} {{salmon}} say {{hallo}}",
    { bread: "essential", salmon: "delicioussy", focaccio: "carby", hallo: "meal" });

module.exports = chop

