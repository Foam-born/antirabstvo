'use strict';

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'phone-button';

$(document).ready(function () {
    const $block = $('.' + block);

    $block.on(EVENTS.ELEMENT.CLICK, function () {
        alert('Введите свой номер телефона');
    })
});