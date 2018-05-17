<template lang="pug">
  .page
    BDetail(backUrl="/user")
      FormItem(label="用户名：")
        div {{detail.username}}
      template(slot="btns")
        Button(type="ghost",icon="edit",@click="goModify") 编辑用户
        Button(type="ghost",icon="ios-reload",@click="handleReset") 重置密码
</template>

<script>
import { user } from "@/constants/api";

export default {
  metaInfo: {
    title: "详情"
  },
  data() {
    return {
      uuid: this.$route.params.uuid,
      detail: {
        username: ""
      }
    };
  },
  methods: {
    // 获取详情
    fetchDetail() {
      const payload = {
        id: this.uuid
      };
      this.$createHttpEx(user.getByUuid, payload, data => {
        this.detail = data;
      });
    },
    // 去编辑
    goModify() {
      const url = `./modify/${this.uuid}`;
      this.$router.push(url);
    },
    // 点击重置密码
    handleReset() {
      this.$Modal.confirm({
        title: "提示",
        content: "确定要重置密码吗？重置后密码为6个1。",
        onOk: () => {
          this.fetchReset();
        }
      });
    },
    // 重置密码
    fetchReset() {
      const payload = {
        id: this.uuid,
        params: {
          password: "111111"
        }
      };
      this.$createMsgHttp(user.modify, payload, "密码重置成功");
    }
  },
  mounted() {
    this.fetchDetail();
  }
};
</script>
