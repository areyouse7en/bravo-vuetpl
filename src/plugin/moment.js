import Vue from "vue";
import moment from "moment";

Vue.prototype.$moment = moment;

const renderDate = date => {
  return moment(date).format("YYYY-MM-DD")
}

const renderTime = date => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss")
}

Vue.prototype.$renderDate = renderDate
Vue.prototype.$renderTime = renderTime