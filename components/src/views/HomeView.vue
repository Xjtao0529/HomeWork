<template>
  <div>
    <XuButton @click="Submit" disabled prefix="eye-close"> 默认按钮 </XuButton>
    <XuButton type="success" loading>成功</XuButton>
    <XuButton type="danger" round>危险</XuButton>
    <XuButton type="warning" suffix="browse">警告</XuButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    XuButton: () => import("../components/button/index.vue"),
  },
  methods: {
    Submit() {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
        console.log(this.flag);
      }, 3000);
    },
  },
};
</script>

<style lang="sass" scoped></style>
