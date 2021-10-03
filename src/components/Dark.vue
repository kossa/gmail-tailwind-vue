<template>
  <div class="flex items-center justify-center mb-6 ">
    <input type="checkbox" v-model="is_dark" class="hidden" id="is_dark">
    <label
      class="relative block w-16 h-8 mx-auto bg-gray-300 rounded-full dark:bg-gray-600"
      for="is_dark"
    >
      <div
        class="absolute flex items-center justify-center w-6 h-6 mx-2 mt-1 bg-white rounded-full shadow transition-all"
        :class="{'-translate-x-1': is_dark, 'translate-x-7': !is_dark}"
      >
        <svg v-if="! is_dark" xmlns="http://www.w3.org/2000/svg" class="w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-if="is_dark" xmlns="http://www.w3.org/2000/svg" class="w-6 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_dark: false,
    }
  },
  mounted() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      this.is_dark = true
    } else {
      document.documentElement.classList.remove('dark')
      this.is_dark = false
    }
  },

  watch: {
    is_dark(val) {
      console.log(val)
      if (val) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('theme')
      }
    }
  }
}
</script>

<style>

</style>
