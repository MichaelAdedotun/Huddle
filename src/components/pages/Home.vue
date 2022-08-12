<template>
  <Default>
    <huddle-conversations></huddle-conversations>
    <huddle-newsletter class="-mb-16 mt-6 relative z-10"></huddle-newsletter>
  </Default>
</template>

<script>
import HuddleNewsletter from "../huddleNewsletter.vue";
import HuddleConversations from "../huddleConversations.vue";
import Default from "../layout/Default.vue";

export default {
  name: "Home",
  components: {Default, HuddleNewsletter, HuddleConversations}
}
</script>

<style scoped>

</style>