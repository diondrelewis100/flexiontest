const units = require('./units.json');
const measurement = require('./unit-difference');

module.exports =function (source, target, input){
    switch(source){
           case units["FAHRENHEIT"]:
               //converting all cases where input unit is "FAHRENHEIT"
                return convertValFromFahrenheit(target, input);
           case units["CELCIUS"]:
               //converting all cases where input unit is "CELCIUS"
                return convertValFromCelcius(target, input);
           case units["KELVIN"]:
               //converting all cases where input unit is "KELVIN"
                return convertValFromKelvin(target, input);
           case units["RANKINE"]:
               //converting all cases where input unit is "RANKINE"
                return convertValFromRankine(target, input);
           case units["TABLE_SPOON"]:
               //converting all cases where input unit is "TABLE_SPOON"
                return convertValFromTableSpoon(target, input);
           case units["CUP"]:
               //converting all cases where input unit is "CUP"
                return convertValFromCup(target, input);
           case units["LITER"]:
               //converting all cases where input unit is "LITER"
                return convertValFromLiter(target, input);
           case units["GALLON"]:
               //converting all cases where input unit is "GALLON"
                return convertValFromGallon(target, input);
            case units["CUBIC_INCH"]:
                //converting all cases where input unit is "CUBIC_INCH"
                return convertValFromCubicInch(target, input);
            case units["CUBIC_FEET"]:
                //converting all cases where input unit is "CUBIC_FEET"
                return convertValFromCubicFeet(target, input);        
      }
}

//calculating value in target unit where input source unit is "Fahrenheit"
const convertValFromFahrenheit = (target, input) =>{
    switch(target){
        case units["FAHRENHEIT"]:
             return parseFloat(input);
        case units["CELCIUS"]:
             //Formula to convert from "FAHRENHEIT" to "CELCIUS"
             return ((parseFloat(input) - parseFloat(measurement[`FahrenheitTo${target}`])) / 1.8);
        case units["KELVIN"]:
             //Formula to convert from "FAHRENHEIT" to "KELVIN"
             return ((parseFloat(input) + parseFloat(measurement[`FahrenheitTo${target}`])) * (5.0/9.0));
        case units["RANKINE"]:
             //Formula to convert from "FAHRENHEIT" to "RANKINE"
             return parseFloat(input) + parseFloat(measurement[`FahrenheitTo${target}`]);
   }
}

//calculating value in target unit where input source unit is "Celcius"
const convertValFromCelcius = (target, input) =>{
    switch(target){
        case units["CELCIUS"]:
             return parseFloat(input);
        case units["FAHRENHEIT"]:
            //Formula to convert from "CELCIUS" to "FAHRENHEIT"
             return ((parseFloat(input) * (1.8)) + parseFloat(measurement[`CelciusTo${target}`]));
        case units["KELVIN"]:
            //Formula to convert from "CELCIUS" to "FAHRENHEIT"
             return (parseFloat(input) + parseFloat(measurement[`CelciusTo${target}`]));
        case units["RANKINE"]:
            //Formula to convert from "CELCIUS" to "FAHRENHEIT"
            return ((parseFloat(input) + parseFloat(measurement[`CelciusTo${target}`])) * (1.8));
   } 
}


//calculating value in target unit where input source unit is "Kelvin"
const convertValFromKelvin = (target, input) =>{
    switch(target){
        case units["KELVIN"]:
             return parseFloat(input);
        case units["CELCIUS"]:
            //Formula to convert from "KELVIN" to "CELCIUS"
             return (parseFloat(input) - parseFloat(measurement[`KelvinTo${target}`]));
        case units["FAHRENHEIT"]:
            //Formula to convert from "KELVIN" to "FAHRENHEIT"
            return ((parseFloat(input) * (1.8)) - parseFloat(measurement[`KelvinTo${target}`]));
        case units["RANKINE"]:
            //Formula to convert from "KELVIN" to "RANKINE"
             return (parseFloat(input) * (1.8));
   } 
}

//calculating value in target unit where input source unit is "Rankine"
const convertValFromRankine = (target, input) =>{
    switch(target){
        case units["RANKINE"]:
             return parseFloat(input);
        case units["CELCIUS"]:
            //Formula to convert from "RANKINE" to "CELCIUS"
             return ((parseFloat(input) - parseFloat(measurement[`RankineTo${target}`])) * (5.0/9.0));
        case units["KELVIN"]:
            //Formula to convert from "RANKINE" to "KELVIN"
             return (parseFloat(input) * (5.0/9.0));
        case units["FAHRENHEIT"]:
            //Formula to convert from "RANKINE" to "FAHRENHEIT"
             return parseFloat(input) - parseFloat(measurement[`RankineTo${target}`]);
   }
}

//calculating value in target unit where input source unit is "Tablespoon"
const convertValFromTableSpoon = (target, input) =>{
    if(units["TABLE_SPOON"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`TablespoonTo${target}`]));
    }
}

//calculating value in target unit where input source unit is "CubicInch"
const convertValFromCubicInch = (target, input) =>{
    if(units["CUBIC_INCH"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`CubicInchTo${target}`]));
    }
}

//calculating value in target unit where input source unit is "CubicFeet"
const convertValFromCubicFeet = (target, input) =>{
    if(units["CUBIC_FEET"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`CubicFeetTo${target}`]));
    }
}

//calculating value in target unit where input source unit is "Cup"
const convertValFromCup = (target, input) =>{
    if(units["CUP"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`CupTo${target}`]));
    }
}

//calculating value in target unit where input source unit is "Liter"
const convertValFromLiter = (target, input) =>{
    if(units["LITER"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`LiterTo${target}`]));
    }
}


//calculating value in target unit where input source unit is "Gallon"
const convertValFromGallon = (target, input) =>{
    if(units["GALLON"] == target){
        return parseFloat(input);
    }else{
        return (parseFloat(input) * parseFloat(measurement[`GallonTo${target}`]));
    }
}
