import EventsHandler from './EventsHandler.js';

import QRender from './QRender.js';
let eventsHandler = new EventsHandler();
let qRender = new QRender();




// =============start page press pace to go to validation
eventsHandler.startTrivia()

// =============start trivia============================
// 1. 

$('#btn-start').on('click', () => {
    let number = 1
    let question = "איזה פרי הכי טעים?"

    $('.start').empty()
    qRender.renderQuestion(question, number);
})

// 2 or more 

$('.question').on('click', '#btn-continue1', () => {
    let $input = $('#input')
    console.log($input.val())
    if ($input.val() === "נקטרינה") {
        qRender.correctMessage("אתה גאון!", "correct")

        setTimeout(function () {
           
            let number = 2
            let question = "איזו קטנייה הכי מגעילה?"
            qRender.renderQuestion(question, number);

        }, 2000)

    } else {
        qRender.wrongMessage()

        setTimeout(function () {
           

            let number = 1
            let question = "איזה פרי הכי טעים?"
            qRender.renderQuestion(question, number);
        }, 2000)
    }
})

$('.question').on('click', '#btn-continue2', () => {

    let $input = $('#input')
    
    if ($input.val() === "חומוס") {
        qRender.correctMessage("אתה גאון!", "correct")

        setTimeout(function () {
            
            let question = "מהו בעל החיים הדוחה ביותר?"
            let number = 3;

            qRender.renderQuestion(question, number);
        }, 2000)

    } else {
        qRender.wrongMessage()
        setTimeout(function () {
           
            let number = 2
            let question = "איזו קטנייה הכי מגעילה?"
            qRender.renderQuestion(question, number);

        }, 2000)
    }
})

$('.question').on('click', '#btn-continue3', () => {
    let $input = $('#input')
    
    if ($input.val() === "נמלה") {
        qRender.correctMessage("תהליך האימות הושלם בהצלחה, הינך מועבר לאיחולים", "center")
      
        setTimeout(function () {
            location.href = '/greetings';
        }, 5000)

    } else {
        qRender.wrongMessage()
        setTimeout(function () {
          
            let number = 3
            let question = "מהו בעל החיים הדוחה ביותר?"
            qRender.renderQuestion(question, number);

        }, 2000)
    }
})

// ============gallery==============

eventsHandler.imgPopUp()
eventsHandler.closeImg()



