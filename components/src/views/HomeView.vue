<template>
  <div class="home">
    <xu-table
      init-request
      @onLoad="onLoad"
      :column="column"
      index
      checkbox
      :data="data_1"
      :params="params_1"
      url="/name/"
      method="post"
      :check-list.sync="checkList"
    >
      <template v-slot:operation="slot">
        <xu-button type="primary" @click="handleEdit(slot.data)"
          >编辑</xu-button
        >
      </template>
    </xu-table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      checkList: [],
      column: [
        {
          type: "function",
          label: "姓名",
          prop: "name",
          callback: () => {
            return "123";
          },
          sort: true,
        },
        {
          label: "性别",
          prop: "gender",
          sort: true,
          type: "function",
          callback: () => {
            return "哈哈哈";
          },
        },
        // { label: "创建时间", prop: "create_date" },
        // {
        //   label: "操作",
        //   type: "slot",
        //   slot_name: "operation",
        //   prop: "operation",
        // },
      ],
      data_1: {
        name: "jack",
      },
      params_1: {
        name: "rose",
      },
    };
  },
  watch: {
    checkList: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },

  components: {
    xuButton: () => import("../components/button/index.vue"),
    xuTable: () => import("../components/Table/index.vue"),
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    onLoad(data) {
      console.log(data);
    },
    formatData(data) {
      const tableData = data.data;
      tableData.forEach((item) => {
        item.gender = item.gender === "男" ? 1 : 0;
      });
      return tableData;
    },
  },
};
</script>
