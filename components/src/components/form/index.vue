<template>
  <div>
    <el-form :model="field" ref="form">
      <template v-for="item in fromItme">
        <el-form-item
          :key="item.label"
          :rules="item.rules"
          :label="item.label"
          :prop="item.prop"
          v-if="item.type === 'input'"
        >
          <el-input v-model="field[item.prop]"></el-input>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button v-for="item in button" :key="item.key" v-bind="item">
          {{ item.label }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import createRules from "./createRile";
export default {
  props: {
    item: {
      type: Array,
      default: () => [],
    },
    field: {
      type: Object,
      default: () => ({}),
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    button: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      fromItme: [],
    };
  },
  beforeMount() {
    this.fromItme = createRules(this.item);
  },
};
</script>

<style lang="scss" scoped></style>
