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
   css: ['~/assets/css/main.css'],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
