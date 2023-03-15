/**
 * View Full Size Images
 * v.1.0.0, 2022-03-15
 * 
 * https://github.com/ogmaresca/easydiffusion-plugins
 */

"use strict";

(function() {
    PLUGINS['IMAGE_INFO_BUTTONS'].push({
        html: () => createElement(
            'i',
            { title: 'View Full Size Image', style: 'margin: 0;' },
            ['fa-solid', 'fa-expand'],
        ),
        on_click: function(origRequest, image) {
            imageModal(image.src)
        },
    });
})();
