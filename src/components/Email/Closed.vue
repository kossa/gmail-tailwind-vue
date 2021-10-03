<template>
  <div class="w-full cursor-pointer grid grid-cols-6" @click="openEmail()">
    <div class="">
      <img class="rounded-full w-9" :src="email.src" alt="">
    </div> <!-- image -->
    <div class="leading-none col-span-4 space-y-1" :class="{'dark:text-gray-500 text-gray-400': email.is_read , 'dark:text-gray-200 text-gray-800': ! email.is_read }">
      <div >{{ email.name }}</div>
      <div class="line-clamp-1">{{ email.subject }}</div>
      <div class="text-gray-500 line-clamp-1">{{ email.content }}</div>
    </div> <!-- Content -->
    <div class="flex flex-col items-end justify-between text-gray-400">
      <div>{{ email.time }}{{ email.am }}</div>
      <div class="">
         <FavoriteStar :is_favorite="email.is_favorite" />

      </div>
    </div>
    <!-- label -->
  </div><!-- email in list -->

</template>

<script>
import FavoriteStar from '../FavoriteStar.vue'

export default {
  components: {
    FavoriteStar,
  },

  props: ['email', 'index'],

  methods: {
    openEmail() {
      // Mark email as read
      this.$root.emails[this.index].is_read = true

      // Open the email
      this.$parent.$parent.openned_email = this.index
    },
  },
}
</script>

<style>

</style>
