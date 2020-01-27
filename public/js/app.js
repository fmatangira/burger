$(".createBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $(".textBox").val().trim(),
      devour: false
    };

    console.log(newBurger);
    
    // Send the POST request.
    $.ajax("/create",{
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
      }
    );
  });



  $('.devourButton').on('click', function(event) {
      event.preventDefault();

        let getID = {
            id: parseInt($(this).attr('data-id')),
            devour: 1
        };
      
        $.ajax("/update",{
            type: "PUT",
            data: getID
          }).then(
            function() {
                
              console.log("Burger is devoured!");
            }
          );
  })