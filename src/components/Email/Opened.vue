<template>
  <div class="absolute inset-0 flex flex-col p-4 text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-white top-6">
    <div class="flex justify-between mb-4">
      <a href="#" @click.prevent="back()">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg><!-- icon back -->
      </a>
      <div class="flex justify-between">
        <a href="#" class="flex items-center justify-center w-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg><!-- icon bin -->
        </a>
        <a href="#" class="flex items-center justify-center w-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg><!-- icon mail -->
        </a>
        <a href="#" class="flex items-center justify-center w-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg><!-- icon dots -->
        </a>
      </div>
    </div> <!-- email header -->
    <div class="flex items-center text-lg">
      <div class="flex flex-wrap items-center">
        {{ email.subject }}
        <div class="mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline w-4 rotate-135 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg> <!-- tags -->
        </div>
        <a href="#" class="text-xxs border px-2 rounded-md border-gray-500 leading-4">Add label</a>
      </div>
      <div>
        <FavoriteStar :is_favorite="email.is_favorite" />
      </div>

    </div>

    <div class="w-full mt-6 grid grid-cols-6">
      <div class="">
        <img class="rounded-full w-9" :src="email.src" alt="">
      </div> <!-- image -->
      <div class="leading-none text-gray-800 col-span-4 space-y-1 dark:text-gray-200">
        <div>
          {{ email.name }}
          <span class="ml-2 text-gray-500 text-xxs dark:text-gray-400">{{ time }}</span>
        </div>
        <div class="flex text-gray-500">
          <div>
            to me
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div> <!-- Content -->
      <div class="flex justify-between text-gray-400">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg> <!-- Replay icon -->
        </div>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg><!-- Three dots -->
        </div>
      </div> <!-- Actions -->
      <!-- label -->
    </div><!-- email in list -->

    <div class="flex flex-col justify-between flex-1 mt-8 overflow-auto">
      <div>
        <p>Hello,</p>
        <p class="mt-3" v-html="email.content"></p>

        <p class="mt-4">Best,</p>
        <p>{{ email.name }}</p>
      </div>

      <div class="flex px-1 pt-4 pb-2 space-x-2">
        <a href="#" class="flex items-center justify-center flex-1 p-2 border border-gray-300 rounded-full dark:border-gray-500 transition-all ring-gray-50 focus:ring-2	">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Reply
        </a>
        <a href="#" class="flex items-center justify-center flex-1 p-2 border border-gray-300 rounded-full dark:border-gray-500 transition-all ring-gray-50 focus:ring-2	">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 scale-x-flip" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Forward
        </a>
      </div>
    </div>

  </div> <!-- Closed email -->
</template>

<script>
import FavoriteStar from '../FavoriteStar.vue'
import moment from 'moment'

export default {
  components: {
    FavoriteStar,
  },

  props: ['email'],

  methods: {
    back() {
      this.$parent.$parent.openned_email = null
    },
  },

  computed: {
    time() {
      return moment(this.email.time, "hh:mm").fromNow();
    },
  }
}
</script>

<style>

</style>
