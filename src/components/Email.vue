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
import OpendEmail from './Email/Opened.vue'
import ClosedEmail from './Email/Closed.vue'

export default {
  components: {
    OpendEmail,
    ClosedEmail,
  },
  props: ['index', 'email'],

  data() {
    return {
    }
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
