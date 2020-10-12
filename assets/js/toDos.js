// Check off specific Todos by clicking

$('ul').on('click', 'li', function(){
    $(this).toggleClass("completed");
      
});

//Click on X to delete Todo

$('ul').on('click', 'span', function(event){

    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//adding a new Todo to our existing list
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        //grabbing new Todo
        var textToDo = $(this).val();
        $(this).val("");
        //adding the new Todo using append (In case we want to add at the begging, we use "prepend" method)
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + textToDo + "</li>" );

    }
})

//fading out the input when we click the plus sign
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();

});
    


