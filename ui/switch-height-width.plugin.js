/**
 * Switch Height & Width
 * v.1.0.3, 2022-03-24
 * 
 * https://github.com/ogmaresca/easydiffusion-plugins
 */

 "use strict";

 (function() {
     /** @type {HTMLSelectElement} */
     const widthElem = document.getElementById('width');
     /** @type {HTMLSelectElement} */
     const heightElem = document.getElementById('height');
 
     const switchButton = createElement(
         'button',
         { id: `switch-width-height` },
     );
     switchButton.style.cursor = 'pointer';
     switchButton.style.background = 'transparent';
     switchButton.style.padding = '2px 10px 2px 0';
     switchButton.addEventListener('click', () => {
         const width = widthElem.value;
         const height = heightElem.value;
 
         widthElem.value = height;
         heightElem.value = width;
 
         // Save the new values on reloads
         widthElem.dispatchEvent(new Event('change'));
         heightElem.dispatchEvent(new Event('change'));
     });
 
     const switchButtonIcon = createElement(
         'i',
         undefined,
         ['fa-solid', 'fa-right-left'],
     );
     switchButton.appendChild(switchButtonIcon);
 
     heightElem.insertAdjacentElement('beforebegin', switchButton);
 })();
 