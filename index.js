$(document).ready(function() {

    $("header button").click(function(){
        $("form").slideDown()
    })

    $("#btn-cancel").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function(e){
        e.preventDefault()

        const newImageAddress = $("#new-image-address").val()
        const newItem = $("<li style='display: none'></li>")

        $(`<img src=${newImageAddress}>`).appendTo(newItem)
        $(`<div class="overlay-image-link">
                <a href="${newImageAddress}" title="Ver imagem em tamanho real"" target="_blank">
                    Ver imagem no tamanho real
                </a>
            </div>
        `).appendTo(newItem)
        $(newItem).appendTo("ul")
        $(newItem).fadeIn(1000)
        $("#new-image-address").val("")
        
    })
})