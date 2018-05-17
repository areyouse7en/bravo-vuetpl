import Vue from "vue";
import bravoHttp from "bravo-http";
import { Message, Notice } from "iview";
import jwt from "../utils/jwt";

const options = {
  before(opts) {
    // 发出请求前的处理
    const accessToken = jwt.findAccessToken();
    if (accessToken) {
      opts.headers.Authorization = accessToken;
    }
    return opts;
  },
  showSuccessMsg(value) {
    // 成功全局提示
    Message.success(value);
  },
  showErrorMsg(value) {
    // 失败侧边提醒条提示
    Notice.error({ title: value });
  }
};

Vue.use(bravoHttp, options);
