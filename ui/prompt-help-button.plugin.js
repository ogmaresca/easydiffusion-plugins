/**
 * Prompt Help Button
 * v.1.0.0, 2022-03-24
 * 
 * https://github.com/ogmaresca/easydiffusion-plugins
 */

"use strict";

(function() {
    const usingDiffusers = typeof testDiffusers !== 'undefined' && testDiffusers?.checked;

    if (!usingDiffusers) {
        console.warn('Diffusers is disabled - not adding a prompt help button');
        return;
    }

    const helpButton = createElement(
        'a',
        {
            href: 'https://invoke-ai.github.io/InvokeAI/features/PROMPTS/#prompt-syntax-features',
            target: '_blank',
            style: 'margin-left: 0.25em',
        },
        undefined,
        createElement(
            'i',
            undefined,
            ['fa-solid', 'fa-circle-question', 'help-btn'],
            createElement(
                'span',
                undefined,
                ['simple-tooltip', 'top-right'],
                'Click to learn about diffusers prompt syntax',
            ),
        ),
    );

    const promptLabel = document.querySelector('label[for="prompt"]');
    promptLabel.appendChild(helpButton);
})();
