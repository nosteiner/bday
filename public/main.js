

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
setTimeout(function(){ 
    location.href = '/trivia'},1000)
})

// =============start trivia============================
// 1. 
function renderQuestion(question,number){
    let whatToAsk = question
    let htmlToAppend = newHtml(whatToAsk,number);
    
    $('.question').append(htmlToAppend);
}
$('#btn-start').on('click', () => {
    let number = 1
    let question = "איזה פרי הכי טעים?"
    $('.start').empty()
    renderQuestion(question,number);
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
            let number = 2
            let question = "איזו קטנייה הכי מגעילה?"
            renderQuestion(question,number);
            
         },2000)
        
    }else{
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");

        setTimeout(function(){ 
        $('#response').empty()

        let number = 1
        let question = "איזה פרי הכי טעים?"
        renderQuestion(question,number);
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
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
        setTimeout(function(){ 
            $('#response').empty()
            let number = 2
            let question = "איזו קטנייה הכי מגעילה?"
            renderQuestion(question,number);
       
     },2000)
     
        
    }
})

$('.question').on('click','#btn-continue3', () => {
    

    let $input=$('#input')
    console.log($input.val())
    if($input.val()==="נמלה"){
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=center>הוכחת שאתה הוא נועם זלומונסקי ילד היומולדת, הינך מועבר לאיחולים שלשמם נתכנסנו</p>");

        setTimeout(function(){ 
            location.href = '/greetings';
         },5000)
        
    }else{
        $('#response').empty()
        $('.question').empty()
        $('#response').append("<p class=wrong> אתה יותר מוצלח מזה נסה שוב</p>");
        setTimeout(function(){ 
            $('#response').empty()
            let number = 3
            let question = "מהו בעל החיים הדוחה ביותר?"
            renderQuestion(question,number);
       
     },2000)
        
    }
})

// ==========================


var modal = document.getElementById('myModal');
console.log(modal)
            
// Get the image and insert it inside the modal - use its "alt" text as a caption

$('.myImg').on('click', function(){
    console.log('p')
var img = this.closest('#thisImg');
console.log(img)
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
$(span).on('click', function() { 
    modal.style.display = "none";
})





