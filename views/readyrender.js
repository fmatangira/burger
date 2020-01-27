const render = function(name,id) {
    return `
    <h4 id="burgerEatName" data-id="${id}">${name} <button class="devourButton" data-id="${id}">Devour It!</button></h4>
    `
}

exports.render = render;