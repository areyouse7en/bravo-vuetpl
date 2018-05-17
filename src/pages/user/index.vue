<template lang="pug">
  .page
    BSearchBar(:model="searchForm",@on-search="getList")
      FormItem(prop="username")
        Input(placeholder="用户名",v-model="searchForm.username")
    BTable(:data="list",:columns="columns",:onChange="getList",:pagination="pagination",:loading="loading")
      BRole
        router-link(to="test/create")
          Button(type="primary") 新增
</template>

<script>
import { user } from "@/constants/api";

export default {
  metaInfo: {
    title: "管理"
  },
  data() {
    return {
      searchForm: {
        username: ""
      },
      list: [],
      columns: [
        {
          title: "名称",
          render: (h, { row }) => {
            const { username, uuid } = row;
            return <router-link to={`user/${uuid}`}>{username}</router-link>;
          }
        },
        {
          title: "操作",
          width: 200,
          render: (h, { row }) => {
            const BRole = "BRole";
            const ButtonGroup = "ButtonGroup";
            const Button = "Button";
            return (
              <BRole>
                <ButtonGroup>
                  <Button
                    type="error"
                    size="small"
                    onClick={() => this.handleDelete(row)}
                  >
                    删除
                  </Button>
                </ButtonGroup>
              </BRole>
            );
          }
        }
      ],
      pagination: {
        current: 1,
        total: 0,
        size: 10
      },
      loading: true
    };
  },
  methods: {
    // 获取列表
    getList(page, size) {
      this.loading = true;
      const { username: lusername } = this.searchForm;
      const payload = {
        params: {
          requirePage: true,
          currentPage: page || this.pagination.current,
          pageSize: size || this.pagination.size,
          lusername
        }
      };
      this.$createHttpEx(
        user.pager,
        payload,
        ({ list, currentPage, totalCount }) => {
          this.list = list;
          this.pagination.current = currentPage;
          this.pagination.total = totalCount;
          this.loading = false;
        }
      );
    },
    // 点击删除按钮
    handleDelete(item) {
      const { uuid, username } = item;
      this.$Modal.confirm({
        title: "提示",
        content: `确定要删除 <b>${username}</b> 吗`,
        onOk: () => {
          this.fetchDelete(uuid);
        }
      });
    },
    // 请求删除
    fetchDelete(id) {
      const payload = {
        id
      };
      this.$createMsgHttpEx(user.delete, payload, "删除成功", () => {
        this.getList();
      });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

