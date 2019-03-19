'use strict';

const EVENTS = require('./../../common/scripts/constants/EVENTS');

const block = 'popup';

const elems = {
  bg: block + '__bg',
  buttonSend: block + '__button'
};

const mods = {
  phonePopup: block + '--phone',
  loginPopup: block + '--login',
  opened: block + '--opened'
};

$(document).ready(function () {
  const $block = $('.' + block),
        $phonePopup = $('.' + mods.phonePopup),
        $loginPopup = $('.' + mods.loginPopup),
        $bg = $block.find('.' + elems.bg);

  $('#phone').usPhoneFormat({
    format: '(xxx) xxx-xxxx',
  });

  $bg.on(EVENTS.ELEMENT.CLICK, function () {
    closePopup($phonePopup);
    closePopup($loginPopup);

    $(document).trigger(EVENTS.CUSTOM.PHONE_POPUP.CLOSED);
    $(document).trigger(EVENTS.CUSTOM.LOGIN_POPUP.CLOSED);
  });

  $(document).on(EVENTS.CUSTOM.PHONE_POPUP.OPENED, function () {
    openPopup($phonePopup);
  });

  $(document).on(EVENTS.CUSTOM.LOGIN_POPUP.OPENED, function () {
    openPopup($loginPopup);
  });
});



function openPopup($block) {
  $block.addClass(mods.opened);
}

function closePopup($block) {
  $block.removeClass(mods.opened);
}