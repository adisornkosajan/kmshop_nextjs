import { Meta, Link } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app:{
    head: {
        title: 'Kmshop',
        meta: [
          {name:"description",content:"หน้าแรก"}
        ]
        
      }
   },
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      
    },
   },
   
  css: ['~/assets/css/main.css'],
  runtimeConfig:{
    API_URL : "http://127.0.0.1:8000",
    public:{
      API_URL : "http://127.0.0.1:8000",
    }
  },

})
