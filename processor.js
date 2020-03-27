const convertor = require('./convertors'); 
const inputData = require('./questionarie.json');

//calculating round off values
function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

module.exports =function (answers)  {
    const studentInput = answers[0];
    const inputUnit = answers[1];
    const targetUnit = answers[2];
    const studentResponse = answers[3];

    if (parseFloat(studentInput)) {
        if (parseFloat(studentResponse)) {

            // check invalid case (checking if source unit can be converted to target unit or not)
            const compatibleUnits = inputData.compatibleUnits
                .filter(_compatibleUnits => _compatibleUnits.indexOf(inputUnit) !== -1 && _compatibleUnits.indexOf(targetUnit) !== -1);
            const compatibleConversion = compatibleUnits && compatibleUnits.length ? true : false;
            // if source and target units are convertible then comparing  student response with converted value 
            if (compatibleConversion) {
                const convertedVal = convertor(inputUnit, targetUnit, studentInput);
                //rounding of calculated value to its tenth place
                const rounOfanswer = round(convertedVal,1);
                const rounOfresponse = Math.round(parseFloat(studentResponse) * 10) /10; //round(parseFloat(studentResponse),2);
                //comparision of round off values
                if (rounOfanswer === rounOfresponse) {
                    console.log("  correct");
                } else {
                    console.log("  incorrect");
                }
            } else {
                console.log('  invalid');
            }

        } else {
            console.log(" incorrect ");
        }
    } else {
        console.log(" Invalid input");
    }
}