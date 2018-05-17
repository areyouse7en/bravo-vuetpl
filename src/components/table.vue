<template lang="pug">
  div
    Row(type="flex",align="middle",justify="space-between")
      Col
        slot
      Col.pagination
        Page(:current="pagination.current",:total="pagination.total",:page-size="pagination.size",simple,@on-change="onChange")
        Button(icon="gear-a",@click="visible=true",size="small")
    .table
      Table(:loading="loading",:columns="renderedColumns",:data="data",highlight-row)
    .pagination
      Page(:current="pagination.current",:total="pagination.total",:page-size="pagination.size",show-elevator,show-sizer,show-total,@on-change="onChange",@on-page-size-change="onPageSizeChange")
    Modal(v-model="visible",title="设置表格列头",@on-ok="onOk")
      CheckboxGroup(v-model="checkedColumns")
        Checkbox(v-for="(item,index) in processedColumns",:key="index",:label="item.title",:disabled="item.disabled")
</template>

<script>
export default {
  name: "b-table",
  props: {
    // 数据源
    data: {
      type: Array,
      default: () => []
    },
    // 列表项
    columns: {
      type: Array,
      default: () => []
    },
    // 获取列表
    onChange: {
      type: Function,
      default: page => {
        console.log(page);
      }
    },
    // 页码
    pagination: {
      type: Object,
      default: () => {
        return {
          current: 1,
          total: 0,
          size: 10
        };
      }
    },
    // 加载动画
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      processedColumns: [],
      checkedColumns: []
    };
  },
  computed: {
    // 过滤列表显示项
    renderedColumns() {
      return this.processedColumns.filter(item => item.show);
    }
  },
  methods: {
    // 显示条数改变
    onPageSizeChange(size) {
      this.onChange(1, size);
    },
    // 处理列表项
    processColumns() {
      this.processedColumns = this.columns.map((item, index) => {
        return {
          ...item,
          ...{
            show: true,
            disabled: index == 0
          }
        };
      });
      this.checkedColumns = this.columns.map(item => item.title);
    },
    // 弹窗选择列表项
    onOk() {
      this.processedColumns.forEach(item => {
        const show = this.checkedColumns.some(checkedItem => {
          return checkedItem == item.title;
        });
        item.show = show;
      });
    }
  },
  mounted() {
    this.processColumns();
  }
};
</script>

<style lang="scss" scoped>
.table {
  margin: 10px 0;
}
.pagination {
  text-align: right;
  ul {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>