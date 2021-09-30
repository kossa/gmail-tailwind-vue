<template>
  <a
    href="#"
    class="flex justify-between py-3 pl-3 my-1 mr-2  rounded-r-full hover:bg-cyan-500 transition-all"
    :class="{'bg-cyan-500': is_current}"
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
