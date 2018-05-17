import Vue from "vue";
import BDetail from "./detail";
import BForm from "./form";
import BRole from "./role";
import BSearchBar from "./search-bar";
import BTable from "./table";

const components = {
  BDetail,
  BForm,
  BRole,
  BSearchBar,
  BTable
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});