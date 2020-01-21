$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        if(newDevoured === 0){
            newDevoured = 1;
        } else if (newDevoured === 1){
            newDevoured = 0;
        }

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/pizzas/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(function(){
            location.reload();
        });
    });
});