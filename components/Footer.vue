<template>
  <section
    class="linear h-full bg-black-primary px-4 pt-20 pb-12 transition-all duration-500 sm:px-8 md:px-16 lg:px-16"
  >
    <footer data-aos="fade-up" data-aos-duration="2000">
      <div class="mx-auto pb-16 lg:pb-24">
        <div class="grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div class="">
            <div class="mb-5 flex items-center">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.6752 54.3393L15.0085 43.8631C14.1874 43.2766 13.7768 42.9833 13.5552 42.5526C13.3335 42.1218 13.3335 41.6173 13.3335 40.6082V23.3918C13.3335 23.0704 13.3335 22.8003 13.3407 22.5673L31.0002 35.1813V55.2313C30.6434 55.0309 30.2271 54.7336 29.6752 54.3393ZM33.0002 55.2313C33.3569 55.0309 33.7732 54.7336 34.3251 54.3393L48.9918 43.8631C49.8129 43.2766 50.2235 42.9833 50.4452 42.5526C50.6668 42.1218 50.6668 41.6173 50.6668 40.6082V23.3918C50.6668 23.0704 50.6668 22.8003 50.6597 22.5673L33.0002 35.1813V55.2313ZM49.7944 20.7276L32.0002 33.4377L14.2059 20.7276C14.4172 20.5592 14.68 20.3715 15.0085 20.1369L29.6752 9.66067C30.7979 8.85875 31.3592 8.45779 32.0002 8.45779C32.6411 8.45779 33.2024 8.85875 34.3251 9.66067L48.9918 20.1369C49.3203 20.3715 49.5831 20.5592 49.7944 20.7276Z"
                  fill="#3364ED"
                />
              </svg>
              <h1 class="text-2xl font-bold text-white-primary">
                Next<span class="text-red-primary">Gen</span>
              </h1>
            </div>
          </div>
          <div class="">
            <h2 class="mb-5 text-xl font-medium text-white-primary">
              Services
            </h2>
            <nav class="list-footer list-none space-y-5">
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#services">Web Development</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#services">Mobile Development</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#services">Dev Ops Development</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#services">Server Development</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#services">UX/UI Design</nuxt-link>
              </li>
            </nav>
          </div>
          <div class="">
            <h2 class="mb-5 text-xl font-medium text-white-primary">
              Products
            </h2>
            <nav class="list-footer list-none space-y-5">
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#products">BI Services</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#products">AI development</nuxt-link>
              </li>
              <li class="tracking-wide text-slate-400">
                <nuxt-link to="#products">CRM setup and support</nuxt-link>
              </li>
            </nav>
          </div>
          <div class="">
            <h2 class="mb-5 text-xl font-medium text-white-primary">
              Contact Us
            </h2>
            <nav class="list-footer list-none space-y-5">
              <li class="tracking-wide text-slate-400">
                <span>The Metropolis Tower, Office 1503
Business Bay, Dubai</span>
              </li>
              <li class="tracking-wide text-slate-400">
                <a href="mailto:suaraowonias@gmail.com>">admin@enlightenedminds.io</a>
              </li>
              <li class="tracking-wide text-slate-400">
                <a href="tel:+62812-898-9000">+971 4 572 4036</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="border-color mx-auto">
        <div class="">
          <hr style="border-color: #94a3b8" />
        </div>
        <div
          class="container mx-auto flex flex-col items-center space-y-5 pt-12 lg:flex-row lg:space-y-0"
        >
          <nav
            class="mx-auto flex flex-wrap items-center justify-center space-x-5 text-base"
          >
            <a href="#" class="tracking-wide text-slate-400"
              >Terms of Service</a
            >
            <span class="tracking-wide text-slate-400">|</span>
            <a href="#" class="tracking-wide text-slate-400">Privacy Policy</a>
          </nav>
          <nav
            class="flex flex-col items-center justify-center text-base lg:flex-row"
          >
            <p class="tracking-wide text-slate-400 text-center sm:text-left">
              Copyright © 2024 by <a class="text-blue-secondary" href="https://enlightenedminds.io/index.php" target="_blank">Enlighted Minds</a>  
              <span class="mx-3 tracking-wide text-slate-400"> | </span> NextGen
            </p>
          </nav>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup>
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 1000);
});
</script>
<style lang=""></style>
