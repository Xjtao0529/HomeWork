<template>
  <div>
    <div v-html="config.callback && config.callback(data)"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    prop: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
