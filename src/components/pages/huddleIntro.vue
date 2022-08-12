<template>
    <section class=" overflow-y-hidden bg-single-mobile-bg bg-no-repeat object-cover bg-violet-600 md:bg-single-desktop-bg lg:bg-single-desktop-bg , px-8 py-7 md:py-10 md:px-14 lg:py-10 lg:px-20">
      <nav class="flex justify-between items-center mb-10">
        <div>
          <a href=""><img class="w-28 md:w-36 lg:w-44" src="src/assets/Single-intro-images/logo.svg" alt="huddle logo"></a>
        </div>

        <h3 class="bg-white text-xs font-semibold text-Very-Dark-Cyan rounded-3xl py-1 px-4 cursor-pointer hover:opacity-80 md:text-sm md:py-2 md:px-7 lg:px-10 "><router-link to="/">Back</router-link></h3>
      </nav>

      <section class="md:flex md:mt-20 lg:flex">
        <div class="mt-16 grid place-items-center w-full md:w-2/3 md:mt-5 lg:mt-5">
          <img class="w-full md:w-full" src="src/assets/Single-intro-images/illustration-mockups.svg" alt="mockups">
        </div>

        <div class="text-white mt-16 text-center md:px-20 md:text-start lg:text-start md:w-2/3">
          <h2 class="text-3xl font-bold mb-5 px-10 md:px-0 lg:px-0">
            Build The Community Your Fans Will Love
          </h2>
          <p class="mt-5 px-5 text-sm text-gray-300 md:px-0 lg:px-0">
            Huddle re-imagines the way we build communities.
            You have a voice, but so does your audience.
            Create connections with your users as you engage in genuine discussion.
          </p>
          <h3 class="my-10 md:px-0 lg:px-0"><router-link to="/huddleIntro" class=" py-2 px-10 border-none bg-white rounded-full text-Very-Dark-Cyan text-xs cursor-pointer hover:bg-pink-300 hover:text-white hover:shadow-2xl">Register</router-link></h3>
        </div>
      </section>

      <ul class="flex items-center justify-center mb-5 md:justify-end lg:justify-end md:my-12 lg:my-12">
        <li><a class="text-white border-cyan-50 hover:border-pink-300 border rounded-full p-2 hover:text-pink-300" href=""><i class="fa-brands fa-facebook"></i></a></li>
        <li class="ml-5"><a class="text-white border-cyan-50 hover:border-pink-300 border rounded-full p-2 hover:text-pink-300" href=""><i class="fa-brands fa-twitter"></i></a></li>
        <li class="ml-5"><a class="text-white border-cyan-50 hover:border-pink-300 border rounded-full p-2 hover:text-pink-300" href=""><i class="fa-brands fa-instagram"></i></a></li>
      </ul>
    </section>
</template>

<script>
export default {
  name: "huddleIntro"
}
</script>

<style scoped>

</style>