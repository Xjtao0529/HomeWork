<template>
  <div>
    <!-- <div v-html="config.callback && config.callback(data)"></div> -->
    <!-- {{ data[prop] }} -->
    123
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

  data() {
    return {
      msg: 3333,
    };
  },
};
</script>

<style lang="scss" scoped></style>
