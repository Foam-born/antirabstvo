'use strict';

// vendor
import Vue from 'vue/dist/vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery-input-mask-phone-number/dist/jquery-input-mask-phone-number.min'
import 'slick-carousel/slick/slick.css'
import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'

AOS.init({
  disable: function () {
    return window.innerWidth < 576;
  }
});

// common
import './common/styles/fonts.styl'
import './common/styles/global-variables.styl'
import './common/styles/style.styl'
import './common/styles/mixins.styl'
import './common/styles/effects.styl'

// bem components
import './bem-components/full-page-container/full-page-container.styl'
import './bem-components/full-page-container/full-page-container.js'

import './bem-components/logo/logo.styl'

import './bem-components/button/button.styl'

import './bem-components/popup/popup.styl'
import './bem-components/popup/popup.js'

import './bem-components/phone-button/phone-button.js'

import './bem-components/login-button/login-button.js'

import './bem-components/site-header/site-header.styl'

import './bem-components/header-nav/header-nav.styl'
import './bem-components/header-nav/header-nav.js'

import './bem-components/section/section.styl'

import './bem-components/services/services.styl'

import './bem-components/sandwich/sandwich.styl'
import './bem-components/sandwich/sandwich.js'



// vue components

new Vue({
  el: '#app',

  components: {

  }
});