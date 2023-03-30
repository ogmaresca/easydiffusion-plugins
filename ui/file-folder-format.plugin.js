/**
 * Filename & folder format configurations
 * v.1.0.0, 2022-03-29
 * 
 * https://github.com/ogmaresca/easydiffusion-plugins
 */

 "use strict";

(function() {
    PARAMETERS.push(
        {
            id: "folder_format",
            type: ParameterType.custom,
            label: "Folder format",
            note: (parameter) => createElement(
                'div',
                undefined,
                undefined,
                [
                    'The format of the folders to save images in',
                    createElement('br'),
                    createElement('br'),
                    createElement(
                        'div',
                        { id: `${parameter.id}-placeholders`, style: 'display: none' },
                        undefined,
                        [
                            createElement('strong', undefined, undefined, 'Placeholders:'),
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$id:'),
                            ' The session ID (currently ',
                            createElement('strong', undefined, undefined, sessionId),
                            ')',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$p:'),
                            ' The prompt',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$yyyy:'),
                            ' Current year',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$MM:'),
                            ' Current month',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$dd:'),
                            ' Current day of the month',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$HH:'),
                            ' Current hour of the day (24 hour time)',
                        ]
                    )
                ]
            ),
            render: (parameter) => {
                const defaultValue = '$id'
    
                const folderFormatField = createElement(
                    'input',
                    { id: parameter.id, name: parameter.id, value: defaultValue },
                )
    
                const folderFormatWrapper = createElement(
                    'div',
                    { id: `${parameter.id}-input-wrapper`, style: 'display: none;' },
                    undefined,
                    [createElement('br'), folderFormatField],
                )
    
                const defaultRadio = createElement(
                    'input',
                    { type: 'radio', id: `${parameter.id}-default`, name: `${parameter.id}-radio`, checked: true },
                    undefined,
                )
    
                const customRadio = createElement(
                    'input',
                    { type: 'radio', id: `${parameter.id}-custom`, name: `${parameter.id}-radio` },
                    undefined,
                )
                const folderFormatRadioFields = [defaultRadio, customRadio]
    
                const toggleVisibility = (isCustom) => {
                    const display = isCustom ? 'block' : 'none'
                    folderFormatWrapper.style.display = display
                    document.getElementById(`${parameter.id}-placeholders`).style.display = display
    
                    if (!isCustom && !CURRENTLY_LOADING_SETTINGS) {
                        folderFormatField.value = defaultValue
                        folderFormatField.dispatchEvent(new Event('change'));
                    }
                }

                let initialChange = true
    
                folderFormatField.addEventListener('change', () => {
                    if (initialChange) {
                        initialChange = false
                        const isCustom = folderFormatField.value !== defaultValue
                        toggleVisibility(isCustom)
                        defaultRadio.checked = !isCustom
                        customRadio.checked = isCustom
                    }
                })
                defaultRadio.addEventListener('change', () => {
                    toggleVisibility(!defaultRadio.checked)
                })
                customRadio.addEventListener('change', () => {
                    toggleVisibility(customRadio.checked)
                })

                saveToDiskField.addEventListener('change', function(e) {
                    folderFormatField.disabled = !this.checked
                    folderFormatRadioFields.forEach(elem => elem.disabled = !this.checked)
                })
    
                return createElement(
                    'fieldset',
                    undefined,
                    undefined,
                    [
                        createElement('legend', undefined, undefined, 'Select a folder format:'),
                        createElement(
                            'label',
                            { for: `${parameter.id}-default` },
                            undefined,
                            'Session ID (default)',
                        ),
                        defaultRadio,
                        createElement('br'),
                        createElement('br'),
                        createElement(
                            'label',
                            { for: `${parameter.id}-custom` },
                            undefined,
                            'Custom',
                        ),
                        customRadio,
                        folderFormatWrapper,
                    ]
                )
            },
            saveInAppConfig: true,
        },
        {
            id: "filename_format",
            type: ParameterType.custom,
            label: "Filename format",
            note: (parameter) => createElement(
                'div',
                undefined,
                undefined,
                [
                    'The format of the image and metadata filenames to save',
                    createElement('br'),
                    createElement('br'),
                    createElement(
                        'div',
                        { id: `${parameter.id}-placeholders`, style: 'display: none' },
                        undefined,
                        [
                            createElement('strong', undefined, undefined, 'Placeholders:'),
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$p:'),
                            ' The prompt',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$n:'),
                            ' The image number in the current session',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$s:'),
                            ' Seed',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$ts:'),
                            ' Current UNIX timestamp (ex: ',
                            createElement('strong', undefined, undefined, new Date().getTime()),
                            ')',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$tsb64:'),
                            ' A base64 encoded timestamp (ex: ',
                            createElement('strong', undefined, undefined, 'EF02P780'),
                            ')',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$yyyy:'),
                            ' Current year',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$MM:'),
                            ' Current month',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$dd:'),
                            ' Current day of the month',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$HH:'),
                            ' Current hour of the day (24 hour time)',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$mm:'),
                            ' Current minute',
                            createElement('br'),
                            createElement('strong', undefined, undefined, '$ss:'),
                            ' Current second',
                            createElement('br'),
                        ]
                    )
                ]
            ),
            render: (parameter) => {
                const defaultValue = '$p_$tsb64'
    
                const filenameFormatField = createElement(
                    'input',
                    { id: parameter.id, name: parameter.id, value: defaultValue },
                )
    
                const folderFormatWrapper = createElement(
                    'div',
                    { id: `${parameter.id}-input-wrapper`, style: 'display: none;' },
                    undefined,
                    [createElement('br'), filenameFormatField],
                )
    
                const defaultRadio = createElement(
                    'input',
                    { type: 'radio', id: `${parameter.id}-default`, name: `${parameter.id}-radio`, checked: true },
                    undefined,
                )
    
                const customRadio = createElement(
                    'input',
                    { type: 'radio', id: `${parameter.id}-custom`, name: `${parameter.id}-radio` },
                    undefined,
                )
                const filenameFormatRadioFields = [defaultRadio, customRadio]
    
                const toggleVisibility = (isCustom) => {
                    const display = isCustom ? 'block' : 'none'
                    folderFormatWrapper.style.display = display
                    document.getElementById(`${parameter.id}-placeholders`).style.display = display
    
                    if (!isCustom && !CURRENTLY_LOADING_SETTINGS) {
                        filenameFormatField.value = defaultValue
                        filenameFormatField.dispatchEvent(new Event('change'));
                    }
                }
    
                let initialChange = true
                filenameFormatField.addEventListener('change', () => {
                    if (initialChange) {
                        initialChange = false
                        const isCustom = filenameFormatField.value !== defaultValue
                        toggleVisibility(isCustom)
                        defaultRadio.checked = !isCustom
                        customRadio.checked = isCustom
                    }
                })
                defaultRadio.addEventListener('change', () => {
                    toggleVisibility(!defaultRadio.checked)
                })
                customRadio.addEventListener('change', () => {
                    toggleVisibility(customRadio.checked)
                })

                saveToDiskField.addEventListener('change', function(e) {
                    filenameFormatField.disabled = !this.checked
                    filenameFormatRadioFields.forEach(elem => elem.disabled = !this.checked)
                })
    
                return createElement(
                    'fieldset',
                    undefined,
                    undefined,
                    [
                        createElement('legend', undefined, undefined, 'Select a file format:'),createElement(
                            'label',
                            { for: `${parameter.id}-default` },
                            undefined,
                            'Prompt and timestamp (default)',
                        ),
                        defaultRadio,
                        createElement('br'),
                        createElement('br'),
                        createElement(
                            'label',
                            { for: `${parameter.id}-custom` },
                            undefined,
                            'Custom',
                        ),
                        customRadio,
                        folderFormatWrapper,
                    ]
                )
            },
            saveInAppConfig: true,
        },
    )
})()
