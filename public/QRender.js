class QRender {
    constructor() {


    }


    QnewHtml(question, number) {
        let html = ("<form>" +
            "<div class=question-title>" + question + "</div>" +
            "<input type=text class=form-control-sm id=input>" +
            "<button type=submit class=btn id=btn-continue" + number + ">המשך</button>" +
            "</form>")
        return html
    }


    renderQuestion(question, number) {
        $('#response').empty()
        let html = this. QnewHtml(question, number)
        $('.question').append(html);
    }

    wrongMessage(){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
    }

    correctMessage(message,css){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class="+css+">"+message+"</p>");
    }
}

export default QRender;