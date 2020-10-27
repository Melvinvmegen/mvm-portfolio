import Vue from 'vue'
import BlaBla from '~/components/BlaBla/BlaBla'
import ButtonProject from '~/components/Button/ButtonProject'
import Polygons from '~/components/Polygons/Polygons'
import Banner from "~/components/Banner/Banner";

const components = { BlaBla, ButtonProject, Polygons, Banner }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})