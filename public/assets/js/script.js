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

    $(".delete").on("click",function(event){
        var id = $(this).data("id");

        $.ajax("/api/pizzas/" + id, {
            type: "DELETE"
        }).then(function(){
            location.reload();
        });
    });

    $(".new-pizza-form").on("submit", function(event){
        event.preventDefault();

        var newPizza = {
            pizza_name: $("#newPizza").val().trim()
        };

        $.ajax("/api/pizzas",{
            type: "POST",
            data: newPizza
        }).then(function(res){
            location.reload();
        });
    });
});