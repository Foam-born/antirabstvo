'use strict';

import {menuIsOpen} from "../header-nav/header-nav";

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'login-button';

$(document).ready(function () {
    const $block = $('.' + block);

    $block.on(EVENTS.ELEMENT.CLICK, function () {
        if(menuIsOpen()){
            $(document).trigger(EVENTS.CUSTOM.POPUP_MENU.CLOSED);
        }

        $(document).trigger(EVENTS.CUSTOM.LOGIN_POPUP.OPENED)
    });
});