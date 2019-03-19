'use strict';

/* == HEADER-NAV == */

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'header-nav';

const elems = {
    list: block + '__list',
    link: block + '__link'
};

const mods = {
    opened: {
        name: block + '--mobile-view',
        status: false
    }
};

$(document).ready(function () {
    const $block = $('.' + block);

    $(document).on(EVENTS.CUSTOM.SANDWICH.OPENED, function () {
        openMenu($block);
    });

    $(document).on(EVENTS.CUSTOM.SANDWICH.CLOSED, function () {
        closeMenu($block);
    });
});




function closeMenu($block) {
    $block.removeClass(mods.opened.name);

    mods.opened.status = false;
}

function openMenu($block) {
    $block.addClass(mods.opened.name);

    mods.opened.status = true;
}

function menuIsOpen() {
    return mods.opened.status;
}

export {
    menuIsOpen
}