<template>
  <div>
    <el-table
      :data="tableData"
      @selection-change="handleSelectionChange"
      style="width: 100%"
    >
      <el-table-column
        v-if="index"
        label="序号"
        type="index"
        width="55"
      ></el-table-column>
      <el-table-column
        v-if="checkbox"
        type="selection"
        width="55"
      ></el-table-column>
      <template v-for="(item, index) in column">
        <el-table-column
          :sortable="item.sort"
          :render-header="item.renderHeader"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template v-slot="scope">
            <component
              :data="scope.row"
              :config="item"
              :prop="item.prop"
              :is="!item.type ? 'com-text' : `com-${item.type}`"
            ></component>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
const modules = {};
const files = require.context("../control", true, /index.vue$/i);
files.keys().forEach((item) => {
  const key = item.split("/");
  const name = key[1];
  modules[`com-${name}`] = files(item).default;
});
console.log(modules);
export default {
  components: {
    ...modules,
  },
  name: "xuTable",
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    checkbox: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: "",
      required: true,
    },
    method: {
      type: String,
      default: "GET",
    },
    data: {
      type: Object,
      default: () => {},
    },
    params: {
      type: Object,
      default: () => {},
    },
    initRequest: Boolean,
    onLoad: Boolean,
    format: Function,
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.initRequest && this.getTableList();
  },
  methods: {
    async getTableList() {
      const url = this.url;
      if (!url) {
        throw new Error("url is required");
        return false;
      }
      try {
        const requestData = {
          url: this.url,
          method: this.method,
        };

        if (JSON.stringify(this.data) === "{}") {
          requestData.data = this.data;
        }

        if (JSON.stringify(this.params) === "{}") {
          requestData.params = this.params;
        }
        const response = await this.$axios(requestData);

        let data = response.data.data;

        if (this.format && typeof this.format === "function") {
          data = this.format(response.data);
        }
        this.tableData = data;

        this.onLoad && this.$emit("onLoad", response.data);
      } catch (e) {
        console.log(e);
      }
    },
    handleRequest() {
      this.getTableList();
    },
    handleSelectionChange(val) {
      console.log(val);
      this.$emit("update:checkList", val);
    },
  },
};
</script>

<style scoped></style>
