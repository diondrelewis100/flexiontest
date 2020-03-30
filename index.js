const readline = require('readline');
const inputData = require('./questionarie.json');
const calculate = require('./processor');

// Getting value of input & target source unit with student response from command line  
const getInput = (caption, choices) => {
    //creating new promise for each question
    return new Promise((resolve, reject) => {
        //combining all choices in signle string
        let choicesToShow = choices.map((item, index) => `${index + 1}. ${item}`).join('.\n');
        if (choicesToShow.length) {
            choicesToShow += '\n';
        }
        //combining questions and its choices to single string variable
        const title = `${caption}\n${choicesToShow}`

        //creating instance of readline with standard input and output which is further used to get user input from command line
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const handleAnswer = (answer) => {
            let intAns = parseInt(answer);
            
            if ( choicesToShow.length === 0){
                //if questions has no choices then we resolve promise by passing received answer
                rl.close();
                resolve(answer);
            }
            else if(intAns && intAns > 0 && intAns <= choicesToShow.length) {
                
                rl.close();
                //if questions has choices then we get the choice details corresponding to selected choice by user 
                const selectedAnswer = choices && choices.length ? choices[intAns - 1] : intAns;
                resolve(selectedAnswer);
            } else {
                // if selcted choice is greater than total length of choice array then selected choice is invalid 
                console.log("\ninvalid choice!!\n");
                //when user enter invalid choice it prompt user to re-enter choice
                rl.question(title, handleAnswer);
            }
        };

        // rendering questions on terminal (handleanswe is callback function which is called when user clicks enter after adding input)
        rl.question(title, handleAnswer);
    })
}

//entry point of application
const init = async() => {
    //getting questions to be asked from questionarie.json 
    const questions = inputData.questions;
    if (questions && Array.isArray(questions) && questions.length) {
        
        // array to hold of answers of each question
        const answers = [];

        // initial blank promise
        let p = Promise.resolve();

        // loop by all questions to get answers for each of them
        questions.forEach(question => {
            p = p.then(() => getInput(question.caption, question.choice).then(ans => answers.push(ans)));
        });

        // calculate and print result in last
        p.then(() => {
            //proceesing input data
            calculate(answers);
        })
    }
}



init();
