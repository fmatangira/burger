const render = function(name,id) {
    return `
    <h4 id="burgerEatName" data-id="${id}">${name}</h4>
    `
}

exports.render = render;