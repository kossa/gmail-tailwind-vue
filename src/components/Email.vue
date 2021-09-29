<template>
  <div class="grid w-full grid-cols-6">
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
        <template v-if="email.is_favorite">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </template>
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </template>

      </div>
    </div>
    <!-- label -->
  </div><!-- single email -->
</template>

<script>
import faker from 'faker'

export default {
  props: {
    index: {}
  },

  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * max) + min
    }
  },

  computed: {
    email() {
      return {
        src        : faker.image.avatar(),
        name       : faker.name.findName(),
        subject     : faker.lorem.sentence(),
        content    : faker.lorem.sentences(),
        time       : this.getRandomNumber(1, 12) + ':' + this.getRandomNumber(0, 59),
        am         : this.getRandomNumber(0, 2) ? 'AM' : 'PM',
        is_favorite: this.getRandomNumber(0, 2),
        is_read: this.getRandomNumber(0, 2),
      }
    }
  }
}
</script>

<style>

</style>
