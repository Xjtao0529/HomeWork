<template>
  <div>
    <xu-form :item="formItem" :button='formButton' :field="formField"></xu-form>
  </div>
</template>

<script>
export default {
  components: {
    xuForm: () => import("../components/form/index.vue"),
  },
  data() {
    return {
      formButton: [
        { label: "提交", key: "submit", type: "primary" },
        { label: "重置", key: "cancel", type: "danger" },
        { label: "下一步", key: "next", type: "success" },
      ],
      formItem: [
        {
          label: "手机号",
          type: "input",
          valueType: "phone",
          prop: "phone",
          required: true,
        },
        {
          label: "姓名",
          type: "input",
          prop: "name",
          required: true,
        },
        {
          label: "密码",
          type: "input",
          prop: "password",
          required: true,
        },
        {
          label: "年龄",
          type: "select",
          prop: "age",
          required: true,
        },
      ],
      formField: {
        name: "jack",
        password: "123456",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
