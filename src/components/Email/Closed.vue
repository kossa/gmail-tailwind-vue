<template>
  <div class="grid w-full grid-cols-6 cursor-pointer" @click="openEmail()">
    <div class="">
      <img class="rounded-full w-9" :src="email.src" alt="">
    </div> <!-- image -->
    <div class="col-span-4 space-y-1 leading-none" :class="{'text-gray-500': email.is_read , 'text-gray-200': ! email.is_read }">
      <div >{{ email.name }}</div>
      <div class="line-clamp-1">{{ email.subject }}</div>
      <div class="line-clamp-1 text-gray-500">{{ email.content }}</div>
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
