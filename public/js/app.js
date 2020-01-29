// WHEN SUBMIT BUTTON IS CLICKED, CREATE NEW BURGER ON "READY TO EAT!" SIDE OF THE APPLICATION.
$(".createBurger").on("click", function(event) {

    event.preventDefault();

    // VARIABLE OBJECT TO GRAB DATA FROM TEXTBOX
    var newBurger = {
      name: $(".textBox").val().trim(),
      devour: false
    };
    
    // SEND POST REQUEST
    $.ajax("/create",{
      type: "POST",
      data: newBurger
    }).then(
      function() {
        window.location='/'
        console.log(`${newBurger} is created!`);
      }
    );
  });


  // WHEN DEVOUR BUTTON IS CLICKED, MAKE DEVOUR FALSE IN DATABASE, AND MOVE IT OVER TO DEVOUR SIDE
  $('.devourButton').on('click', function(event) {
      event.preventDefault();

        // VARIABLE OBJECT TO GRAB THE DATA ID ATTRIBUTE FROM THE BUTTON HTML
        let getID = {
            id: parseInt($(this).attr('data-id')),
            devour: 1
        };
        
        // SEND PUT REQUEST
        $.ajax("/update",{
            type: "PUT",
            data: getID
          }).then(
            function() {
              window.location='/'
              console.log(`You devoured a ${this.val}`);
            }
          );
  })