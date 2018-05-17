import Vue from "vue";

const directives = {};

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});