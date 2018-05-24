class EventsHandler {
    constructor() {


    }

    startTrivia() {
        $('#face').on('click', () => {
            setTimeout(function () {
                location.href = '/trivia'
            }, 1000)
        })
    }

    imgPopUp() {
        $('.myImg').on('click', function () {
            var modal = $('#myModal');
            var modalImg = $("#img01");
            var captionText = $("#caption");
            var img = this.closest('#thisImg');

            modal.fadeIn()
            modalImg.attr("src", img.src)
            console.log(modalImg.src)
            captionText.empty()
            captionText.append(img.alt)
        })
    }

    closeImg() {
        // // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            $('#myModal').hide()
        }

    }
}

export default EventsHandler