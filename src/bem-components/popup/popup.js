'use strict';

import {menuIsOpen} from "../header-nav/header-nav";

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'popup';

const elems = {
  bg: block + '__bg',
  buttonSend: block + '__button'
};

const mods = {
  phonePopup: block + '--phone-call',
  opened: block + '--opened'
};

$(document).ready(function () {
  const $block = $('.' + block),
        $phonePopup = $('.' + mods.phonePopup),
        $bg = $block.find('.' + elems.bg);

  $bg.on(EVENTS.ELEMENT.CLICK, function () {
    $phonePopup.removeClass(mods.opened);
  });

  $(document).on(EVENTS.CUSTOM.PHONE_POPUP.OPENED, function () {
    $phonePopup.addClass(mods.opened);
  });
});