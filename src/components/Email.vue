<template>
  <div>
    <OpendEmail v-if="is_opened"
      :email="email"
    />
    <ClosedEmail v-else
      :email="email"
      :index="index"
    />
  </div>
</template>

<script>
import faker from 'faker'
import OpendEmail from './Email/Opened.vue'
import ClosedEmail from './Email/Closed.vue'

export default {
  components: {
    OpendEmail,
    ClosedEmail,
  },
  props: ['index'],

  data() {
    return {
      email: {
        src        : faker.image.avatar(),
        name       : faker.name.findName(),
        subject     : faker.lorem.sentence(),
        content    : faker.lorem.sentences(10) + '<br><br>' + faker.lorem.sentences(3) + '<br><br>' + faker.lorem.sentences(1),
        time       : this.getRandomNumber(1, 12) + ':' + this.getRandomNumber(0, 59),
        am         : this.getRandomNumber(0, 2) ? 'AM' : 'PM',
        is_favorite: this.getRandomNumber(0, 2),
        is_read: this.getRandomNumber(0, 2),
        is_open: false,
      }
    }
  },

  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * max) + min
    },
  },

  computed: {
    is_opened() {
      return this.$parent.openned_email === this.index
    }
  }

}
</script>

<style>

</style>
