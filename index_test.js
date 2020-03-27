const calculate = require('./processor');

const testData = [
    {input:"84.2" , input_unit:"Fahrenheit" , target_unit:"Rankine" , response:"543.94"},
    {input:"317.33" , input_unit:"Kelvin" , target_unit:"Fahrenheit" , response:"111.554"},
    {input:"25.6" , input_unit:"Cup" , target_unit:"Liter" , response:"6.1"},
    {input:"73.12" , input_unit:"Gallon" , target_unit:"Kelvin" , response:"19.4"},
    {input:"6.5" , input_unit:"Fahrenheit" , target_unit:"Rankine" , response:"dog"},
    {input:"136.1" , input_unit:"dog" , target_unit:"Celsius" , response:"45.32"}
];
const testCases = () =>{
    testData.map((el,index)=>{
      let answers =[];
      answers.push(el.input);
      answers.push(el.input_unit);
      answers.push(el.target_unit);
      answers.push(el.response);
      console.log("\n ================ Running Test cases =================");
      console.log("\n Input data:"+answers +"\n");
      calculate(answers);
    })
}

testCases();
