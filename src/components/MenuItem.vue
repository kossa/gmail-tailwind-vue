<template>
  <a
    href="#"
    class="flex justify-between py-3 pl-3 my-1 mr-2 rounded-r-full  hover:bg-cyan-300 transition-all"
    :class="{'dark:bg-cyan-600 bg-cyan-400': is_current}"
    >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    is_current: {default: false, type: Boolean}
  }
}
</script>

<style>

</style>
