/**
 * @param {String} tagName 
 * @param {String} id 
 */
export const createElement = function(tagName, id) {
    const element = document.createElement(tagName)
    id && (element.id = id)
    return element
}

/**
 * @param {Number} qtd 
 * @param {String[]} texts
 */
export const createButtons = function(qtd, texts){
    const auxiliar = [];
    for (let index = 0; index < qtd; index++) {
        const button = createElement("button", "meu-btn");
        const textButton = texts[index];
        button.innerText = textButton;
        auxiliar.push(button);
    }    
    return auxiliar;
}

const btn = createButtons(2, ["texto1", "texto2"])