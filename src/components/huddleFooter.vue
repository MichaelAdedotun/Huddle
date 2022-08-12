<template>
    <footer class="bg-Very-Dark-Cyan py-10 px-4 pt-28 text-cyan-50 md:flex md:items-center md:px-10 lg:flex lg:items-center lg:px-10">
        <section class="md:w-1/3 lg:w-1/3">
          <img class="w-1/2 my-10 md:w-2/3 lg:w-1/3" src="/src/assets/Landing-page-images/footerlogo.svg" alt="">

          <div class="flex mb-5">
            <img class="h-1/6" src="/src/assets/Landing-page-images/icon-location.svg" alt="">
            <p class="text-sm pl-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div class="flex mb-5">
            <img class="h-1/6" src="/src/assets/Landing-page-images/icon-phone.svg" alt="">
            <p class="text-sm pl-7">
              +1-543-123-4567
            </p>
          </div>

          <div class="flex mb-5">
            <img class="h-1/6"  src="/src/assets/Landing-page-images/icon-email.svg" alt="">
            <a class="pl-7 text-sm" href="">example@huddle.com</a>
          </div>
        </section>

        <ul class="py-7 text-xl md:w-1/3 lg:w-1/3 md:grid md:grid-cols-2 md:text-sm md:px-8 md:ml-8 md:pt-16 lg:pt-24 lg:ml-12">
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">About Us</a></li>
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">What We Do</a></li>
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">FAQ</a></li>
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">Career</a></li>
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">Blog </a></li>
          <li class="mb-5 "><a class="hover:border-b-2 border-cyan-50" href="">Contact Us</a></li>
        </ul>

        <div class="flex flex-col justify-between items-center md:w-1/3 lg:w-1/3">
          <ul class="flex mb-8 md:my-20 lg:my-24">
            <li><a class="border-cyan-50 hover:border-Pink border rounded-full p-2 hover:text-Pink" href=""><i class="fa-brands fa-facebook"></i></a></li>
            <li class="ml-5"><a class=" border-cyan-50 hover:border-Pink border rounded-full p-2 hover:text-Pink" href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li class="ml-5"><a class=" border-cyan-50 hover:border-Pink border rounded-full p-2 hover:text-Pink" href=""><i class="fa-brands fa-instagram"></i></a></li>
          </ul>

          <p class="text-xs md:pt-12 lg:pt-8">
            © Copyright 2018 Huddle. All rights reserved.
          </p>
        </div>
    </footer>
</template>

<script>
export default {
  name: "huddleFooter"
}
</script>

<style scoped>

</style>