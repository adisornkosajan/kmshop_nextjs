<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <div class="bg-white">
      <div class="pt-6">

        <!-- Image gallery -->
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img :src=product.thumbnail alt="" class="h-full w-full object-cover object-center" />
          </div>
          
        
        </div>
  
        <!-- Product info -->
        <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ product.title }}</h1>
          </div>
  
          <!-- Options -->
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">ราคา {{ product.price }} บาท</p>
  
            
            <form class="mt-10">
              <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
            </form>
          </div>
  
          <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <!-- Description and details -->
            <div>
              <h3 class="sr-only">Description</h3>
  
              <div class="space-y-6">
                <p class="text-base text-gray-900">{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { StarIcon } from '@heroicons/vue/20/solid'
  import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
  
 const {id} = useRoute().params
 const { data: product } = await useFetch('https://dummyjson.com/products/'+id)

</script>

<style scoped>

</style>