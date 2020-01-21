const render = function({name, devour, createdAt}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>BURGER Database</title>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/styles.css">

    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 burgerCol">
                    <img src="/images/Cheeseburger.png" alt="" class="burgerimg">
                </div>
                <div class="col-6 burgerCol">
                    <img src="/images/Cheeseburger.png" alt="" class="burgerimg">
                </div>
                <div class="col-3 burgerCol">
                    <img src="/images/Cheeseburger.png" alt="" class="burgerimg">
                </div>
                <div class="col-12 id="burgerDiv">
                    <h3 id="burgerTitle">Eat-Da-Burger!!</h3>
                </div>
            </div>
            <!-- <div class="row">
                <div class="col-12 burgerCol">
                    <h3 id="burgerTitle">Eat-Da-Burger!!</h3>
                </div>
            </div> -->
        </div>
        <h1>${name}</h1>
        <h1>${devour}</h1>
        <h1>${createdAt}</h1>
    </body>
    </html>
    `
}

exports.render = render;