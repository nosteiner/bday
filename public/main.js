

function newHtml(whatToAsk,number) {
let html = ("<form>" +
"<div class=question-title>" + whatToAsk + "</div>" +
"<input type=text id=input>" +
"<button type=button class=btn id=btn-continue"+number+">המשך</button>" +
"</form>")
    return html
}


// =============start page press pace to go to validation
$('#face').on('click', () => {

    location.href = '/trivia';
})

// =============start trivia============================
// 1. 

$('#btn-start').on('click', () => {
    let whatToAsk = "איזה פרי הכי טעים?"
    let htmlToAppend = newHtml(whatToAsk,1);
    $('.start').empty()
    $('.question').append(htmlToAppend);

    
})

// 2 or more 

$('.question').on('click','#btn-continue1', () => {
    let $input=$('#input')
    console.log($input.val())
    if($input.val()==="נקטרינה"){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=correct>אתה גאון!</p>");

        setTimeout(function(){ 
            $('#response').empty()
            let whatToAsk = "איזו קטנייה הכי מגעילה?"
            let htmlToAppend = newHtml(whatToAsk,2);
            
            $('.question').append(htmlToAppend);
         },2000)
        
    }else{
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
        setTimeout(function(){ 
        $('#response').empty()
       
     },2000)
     
        
    }

  
})

$('.question').on('click','#btn-continue2', () => {
    

    let $input=$('#input')
    console.log($input.val())
    if($input.val()==="חומוס"){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=correct>אתה גאון!</p>");

        setTimeout(function(){ 
            $('#response').empty()
            let whatToAsk = "מהו בעל החיים הדוחה ביותר?"
            let htmlToAppend = newHtml(whatToAsk,3);
            
            $('.question').append(htmlToAppend);
         },2000)
        
    }else{
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
        setTimeout(function(){ 
        $('#response').empty()
       
     },2000)
     
        
    }
})

$('.question').on('click','#btn-continue3', () => {
    

    let $input=$('#input')
    console.log($input.val())
    if($input.val()==="נמלה"){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=respect>אתה גאון על! הוכחת שאתה הוא נועם זלומונסקי ילד היומולדת, הינך מועבר לאיחולים שלשמם נתכנסנו</p>");

        setTimeout(function(){ 
            location.href = '/greetings';
         },5000)
        
    }else{
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
        setTimeout(function(){ 
        $('#response').empty()
       
     },2000)
     
        
    }
})

// ==========================








