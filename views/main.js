const render = function(body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>BURGER Database</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="css/styles.css">
    
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 burgerCol">
                    <img src="images/Cheeseburger.png" alt="" class="burgerimg">
                </div>
                <div class="col-12 id=" burgerDiv">
                    <h1 id="burgerTitle">Eat-Da-Burger!!</h1>
                </div>
                ${body}
            </div>
            <form action="/" class="textArea">
                <input type="text" class="textBox">
                <button type="submit" class="createBurger">Submit</button>
            </form>
        </div>

        <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
        <script src="js/app.js"></script>
    </body>
    
    </html>
    `
}

exports.render = render;