import Vue from "vue";
import BForm from "./form";
import BSearchBar from "./search-bar";
import BTable from "./table";

const components = {
  BForm,
  BSearchBar,
  BTable
};

Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});