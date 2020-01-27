const render = function(ready,devour) {
    return `
    <div class="col-6 id="burgerEatDiv">
        <h3 id="eatTitle">READY TO EAT!</h3>
        ${ready}
    </div>
    <div class="col-6 id="burgerDevourDiv">
        <h3 id="devourTitle">DEVOURED!!</h3>
       ${devour}
    </div>
    `
}

exports.render = render;