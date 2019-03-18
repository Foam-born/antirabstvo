'use strict';

// vendor
import Vue from 'vue/dist/vue'
import 'bootstrap/dist/css/bootstrap.css'
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

// bem components
import './bem-components/logo/logo.styl'

import './bem-components/site-header/site-header.styl'

import './bem-components/header-nav/header-nav.styl'

import './bem-components/section/section.styl'

import './bem-components/services/services.styl'

import './bem-components/sandwich/sandwich.styl'



// vue components

new Vue({
  el: '#app',

  components: {

  }
});