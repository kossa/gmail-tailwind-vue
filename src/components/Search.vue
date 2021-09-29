<template>
  <div>
    <div class="flex items-center px-4 py-2 mt-4 bg-gray-700 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <input type="text" placeholder="Search mail" class="w-full pl-2 font-light text-white placeholder-gray-400 bg-transparent focus:outline-none">
        <div class="overflow-hidden rounded-full w-7">
          <img class="" :src="avatar" alt="">
        </div>
      </div> <!-- Search -->
  </div>
</template>

<script>
import faker from 'faker'

export default {
  computed: {
    avatar() {
      return faker.image.avatar()
    }
  }
}
</script>

<style>

</style>
