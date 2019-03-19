'use strict';

/* == FULL-PAGE-CONTAINER == */

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'full-page-container';

const mods = {
    hidden: block + '--overflow-hidden'
};

$(document).ready(function () {
    const $block = $('.' + block);

    $(document).on(EVENTS.CUSTOM.SANDWICH.OPENED, function () {
        $block.addClass(mods.hidden);
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        $block.removeClass(mods.hidden);
    });

    $(document).on(EVENTS.CUSTOM.PHONE_POPUP.OPENED, function () {
        $block.addClass(mods.hidden);
    });
});