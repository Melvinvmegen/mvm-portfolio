import Vue from 'vue'
import BlaBla from '~/components/BlaBla/BlaBla'
import ButtonProject from '~/components/Button/ButtonProject'
import Banner from "~/components/Banner/Banner"
import TextHeader from '~/components/TextHeader/TextHeader'
import Spinner from '~/components/Spinner/Spinner'
import CTA from '~/components/CTA/CTA'
import CompanyLogo from '~/components/CompanyLogo/CompanyLogo'


const components = { BlaBla, ButtonProject, Banner, TextHeader, Spinner, CTA, CompanyLogo }
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})