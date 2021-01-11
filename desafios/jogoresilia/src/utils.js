/**
 * @param {String} tagName 
 * @param {String} id 
 */
export const createElement = function(tagName, id) {
    const element = document.createElement(tagName)
    id && (element.id = id)
    return element
}

