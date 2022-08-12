<template>
  <header class="bg-header-mobile-bg bg-no-repeat object-cover bg-Very-Pale-Cyan md:bg-header-desktop-bg lg:bg-header-desktop-bg , px-4 py-6 md:p-10 lg:p-10">
     <nav class="flex justify-between items-center mb-10">
       <div>
         <a href=""><img class="w-28 md:w-36 lg:w-44" src="src/assets/Landing-page-images/logo.svg" alt="huddle logo"></a>
       </div>

       <h3 class="bg-white text-sm font-semibold text-Very-Dark-Cyan rounded-3xl py-1 cursor-pointer hover:opacity-80 lg:py-2 px-3.5 md:px-7 lg:px-10 "><router-link to="/huddleIntro">Try It Free</router-link></h3>
     </nav>

     <section class="md:flex md:mt-24 lg:flex">
       <div class="text-Very-Dark-Cyan mt-16 text-center md:text-start lg:text-start md:mr-10 lg:mr-10">
         <h2 class="text-2xl font-bold mb-5 px-10 md:px-0 lg:0">
           Build The Community Your Fans Will Love
         </h2>
         <p class="mt-5 px-5 text-sm md:px-0 lg:px-0">
           Huddle re-imagines the way we build communities.
           You have a voice, but so does your audience.
           Create connections with your users as you engage in genuine discussion.
         </p>
         <h3 class="my-10 md:px-0 lg:px-0"><router-link to="/huddleIntro" class=" py-2 px-10 border-2 bg-Pink rounded-full text-white text-xs cursor-pointer hover:opacity-70">Get Started For Free</router-link></h3>
       </div>
       <div class="mt-16 grid place-items-center md:mt-5 lg:mt-5">
         <img class="w-full " src="src/assets/Landing-page-images/illustration-mockups.svg" alt="mockups">
       </div>
     </section>
  </header>
</template>

<script>
export default {
  name: "huddleHeader"
}
</script>

<style scoped>

</style>