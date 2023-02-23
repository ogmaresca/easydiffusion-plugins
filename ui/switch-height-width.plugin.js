/**
 * Switch Height & Width
 * v.1.0, 2022-02-23
 * 
 * https://github.com/ogmaresca/easydiffusion-plugins
 */

"use strict";

(function() {
    /**
     * 
     * @param {string} tag 
     * @param {object} attributes
     * @param {Array<string>} classes
     * @returns {HTMLElement}
     */
     function createElement(tagName, attributes, classes, text) {
        const element = document.createElement(tagName);
        if (attributes) {
            Object.entries(attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        }
        if (classes) {
            classes.forEach(className => element.classList.add(className));
        }
        if (text) {
            element.appendChild(document.createTextNode(text));
        }
        return element;
    }

    const widthElem = document.getElementById('width');
    const heightElem = document.getElementById('height');

    const switchButton = createElement(
        'button',
        { id: `switch-width-height` },
    );
    switchButton.style.cursor = 'pointer';
    switchButton.style.background = 'transparent';
    switchButton.style.padding = '2px';
    switchButton.addEventListener('click', () => {
        const width = widthElem.value;
        const height = heightElem.value;

        widthElem.value = height;
        heightElem.value = width;
    });

    // I want to use arrow-up-arrow-down, but that's a pro icon
    const switchButtonIcon = createElement(
        'i',
        undefined,
        ['fa-solid', 'fa-right-left'],
    );
    switchButtonIcon.style.transform = 'rotate(-90deg)'
    switchButton.appendChild(switchButtonIcon);

    widthElem.parentElement.appendChild(switchButton);
})();