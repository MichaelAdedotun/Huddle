<template>
  <huddle-header></huddle-header>
  <slot/>
  <huddle-footer></huddle-footer>
</template>

<script>
import HuddleFooter from "../huddleFooter.vue";
import HuddleHeader from "../huddleHeader.vue";

export default {
  name: "Default",
  components: {HuddleFooter, HuddleHeader}
}
</script>

<style scoped>

</style>