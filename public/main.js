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
    let question = " אגדת הילדים שמדברת לליבם של צלמי הפפרצ`י (5,2,6)"

    $('.start').empty()
    qRender.renderQuestion(question, number);
   
})

// 2 or more 

$('.question').on('click', '#btn-continue1', () => {
    let $input = $('#input')
    console.log($input.val())
    if ($input.val() === "הנסיכה על העדשה") {
        qRender.correctMessage("אתה גאון!", "correct")

        setTimeout(function () {
           
            let number = 2
            let question = "הוצא אותו פעמיים מן המים ותגלה את מיוחדותו (4,4)"
            qRender.renderQuestion(question, number);

        }, 2000)

    } else {
        qRender.wrongMessage()

        setTimeout(function () {
           

            let number = 1
            let question = " אגדת הילדים שמדברת לליבם של צלמי הפפרצ`י (5,2,6)"
            qRender.renderQuestion(question, number);
        }, 2000)
    }
})

$('.question').on('click', '#btn-continue2', () => {

    let $input = $('#input')
    
    if ($input.val() === "משהו משהו") {
        qRender.correctMessage("אתה גאון!", "correct")

        setTimeout(function () {
            
            let question = "חומוס מסרב לקבל את ההצעה (4)"
            let number = 3;

            qRender.renderQuestion(question, number);
        }, 2000)

    } else {
        qRender.wrongMessage()
        setTimeout(function () {
           
            let number = 2
            let question = "הוצא אותו פעמיים מן המים ותגלה את מיוחדותו (4,4)"
            qRender.renderQuestion(question, number);

        }, 2000)
    }
})

$('.question').on('click', '#btn-continue3', () => {
    let $input = $('#input')
    
    if ($input.val() === "דוחה") {
        qRender.correctMessage("פתרת הכל בהצלחה, בעוד מס' שניות תועבר לאיחולים", "center")
      
        setTimeout(function () {
            location.href = '/greetings';
        }, 5000)

    } else {
        qRender.wrongMessage()
        setTimeout(function () {
          
            let number = 3
            let question = "חומוס מסרב לקבל את ההצעה (4)"
            qRender.renderQuestion(question, number);

        }, 2000)
    }
})

// ============gallery==============

eventsHandler.imgPopUp()
eventsHandler.closeImg()



