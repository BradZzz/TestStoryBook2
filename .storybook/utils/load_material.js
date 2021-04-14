import Vue from 'vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


const loadMaterialUI = () => {
  Vue.use(VueMaterial)
}

export {
  loadMaterialUI
}