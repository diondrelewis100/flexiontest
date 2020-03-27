const readline = require('readline');
const inputData = require('./questionarie.json');
const calculate = require('./processor');

// Getting value of input & target source unit with student response from command line  
const getInput = (caption, choices) => {
    return new Promise((resolve, reject) => {
        let choicesToShow = choices.map((item, index) => `${index + 1}. ${item}`).join('.\n');
        if (choicesToShow.length) {
            choicesToShow += '\n';
        }
        const title = `${caption}\n${choicesToShow}`

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const handleAnswer = (answer) => {
            let intAns = parseInt(answer);
            if ( choicesToShow.length === 0){
                rl.close();
                resolve(answer);
            }
            else if(intAns && intAns > 0 && intAns <= choicesToShow.length) {
                rl.close();
                const selectedAnswer = choices && choices.length ? choices[intAns - 1] : intAns;
                resolve(selectedAnswer);
            } else {
                console.log("\ninvalid choice!!\n");
                rl.question(title, handleAnswer);
            }
        };

        rl.question(title, handleAnswer);
    })
}
const init = async() => {
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
