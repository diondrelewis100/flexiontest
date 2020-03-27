const units = require('./units.json');
const measurement = require('./unit-difference');

module.exports =function (source, target, input){
    switch(source){
           case units["FAHRENHEIT"]:
                return convertValFromFahrenheit(target, input);
           case units["CELCIUS"]:
                return convertValFromCelcius(target, input);
           case units["KELVIN"]:
                return convertValFromKelvin(target, input);
           case units["RANKINE"]:
                return convertValFromRankine(target, input);
           case units["TABLE_SPOON"]:
                return convertValFromTableSpoon(target, input);
           case units["CUP"]:
                return convertValFromCup(target, input);
           case units["LITER"]:
                return convertValFromLiter(target, input);
           case units["GALLON"]:
                return convertValFromGallon(target, input);
            case units["CUBIC_INCH"]:
                return convertValFromCubicInch(target, input);
            case units["CUBIC_FEET"]:
                return convertValFromCubicFeet(target, input);        
      }
}

//calculating value in target unit where input source unit is "Fahrenheit"
const convertValFromFahrenheit = (target, input) =>{
    switch(target){
        case units["FAHRENHEIT"]:
             return parseFloat(input);
        case units["CELCIUS"]:
             return ((parseFloat(input) - parseFloat(measurement[`FahrenheitTo${target}`])) / 1.8);
        case units["KELVIN"]:
             return ((parseFloat(input) + parseFloat(measurement[`FahrenheitTo${target}`])) * (5.0/9.0));
        case units["RANKINE"]:
             return parseFloat(input) + parseFloat(measurement[`FahrenheitTo${target}`]);
   }
}

//calculating value in target unit where input source unit is "Celcius"
const convertValFromCelcius = (target, input) =>{
    switch(target){
        case units["CELCIUS"]:
             return parseFloat(input);
        case units["FAHRENHEIT"]:
             return ((parseFloat(input) * (1.8)) + parseFloat(measurement[`CelciusTo${target}`]));
        case units["KELVIN"]:
             return (parseFloat(input) + parseFloat(measurement[`CelciusTo${target}`]));
        case units["RANKINE"]:
            return ((parseFloat(input) + parseFloat(measurement[`CelciusTo${target}`])) * (1.8));
   } 
}


//calculating value in target unit where input source unit is "Kelvin"
const convertValFromKelvin = (target, input) =>{
    switch(target){
        case units["KELVIN"]:
             return parseFloat(input);
        case units["CELCIUS"]:
             return (parseFloat(input) - parseFloat(measurement[`KelvinTo${target}`]));
        case units["FAHRENHEIT"]:
            return ((parseFloat(input) * (1.8)) - parseFloat(measurement[`KelvinTo${target}`]));
        case units["RANKINE"]:
             return (parseFloat(input) * (1.8));
   } 
}

//calculating value in target unit where input source unit is "Rankine"
const convertValFromRankine = (target, input) =>{
    switch(target){
        case units["RANKINE"]:
             return parseFloat(input);
        case units["CELCIUS"]:
             return ((parseFloat(input) - parseFloat(measurement[`RankineTo${target}`])) * (5.0/9.0));
        case units["KELVIN"]:
             return (parseFloat(input) * (5.0/9.0));
        case units["FAHRENHEIT"]:
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
