<template>
  <div class="w-[375px] mx-auto  bg-white h-[812px] rounded-3xl p-3  text-xs">
    <div class="relative overflow-hidden h-full px-4 py-2 bg-gray-900 rounded-3xl">
      <Header />

      <LeftMenu :is_left_menu_open="is_left_menu_open"/>

      <Search />

      <div class="my-5">
        <div class="font-medium text-gray-400">Inbox</div>

        <div class="space-y-3 mt-3">
          <div class="grid items-center w-full grid-cols-6">
            <div class="text-indigo-400 col-span-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div> <!-- icons -->
            <div class="col-span-4 space-y-1">
              <div class="text-white">Social</div>
              <div class="text-gray-400">Youtube</div>
            </div> <!-- Content -->
            <div class="py-1 text-center text-indigo-100 bg-indigo-500 rounded-full w-full col-span-1">10 new</div>
            <!-- label -->
          </div> <!-- Social -->
          <div class="grid items-center w-full grid-cols-6">
            <div class="text-lime-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div> <!-- icons -->
            <div class="col-span-4 space-y-1">
              <div class="text-white">Promotions</div>
              <div class="text-gray-400">Google play</div>
            </div> <!-- Content -->
            <div class="py-1 text-center rounded-full text-lime-100 bg-lime-500 w-14">3 new</div>
            <!-- label -->
          </div> <!-- Promotions -->
          <div class="grid items-center w-full grid-cols-6">
            <div class="text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div> <!-- icons -->
            <div class="col-span-4 space-y-1">
              <div class="text-white">Updates</div>
              <div class="text-gray-400">Google Store</div>
            </div> <!-- Content -->
            <div class="py-1 text-center text-orange-100 bg-orange-500 rounded-full w-14">1 new</div>
            <!-- label -->
          </div> <!-- Updates -->
        </div> <!-- End social/promotios/updates -->

        <div class="space-y-5 mt-6">
          <Email v-for="x in 6" :key="x-1" :index="x-1" />
        </div> <!-- emails wrapper -->
      </div> <!-- emails list -->

      <Footer v-if="openned_email === null" />

      <Compose v-if="openned_email === null" />

    </div> <!-- phone wrapper -->
  </div> <!-- phone frame -->
</template>

<script>
import Header from './components/Header.vue'
import LeftMenu from './components/LeftMenu.vue'
import Search from './components/Search.vue'
import Email from './components/Email.vue'
import Footer from './components/Footer.vue'
import Compose from './components/Compose.vue'

export default {
  components: {
    Header,
    LeftMenu,
    Search,
    Email,
    Footer,
    Compose,
  },

  data() {
    return {
      openned_email: null,
      is_left_menu_open: false,
    }
  },
}

</script>

<style>
</style>
