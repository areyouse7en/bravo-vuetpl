// 不能为空
export const required = name => {
  return {
    required: true,
    message: `请输入${name}`
  };
};

// 不能不选
export const requiredSelect = name => {
  return {
    required: true,
    message: `请选择${name}`
  };
};

// 最少输入
export const min = num => {
  return {
    min: num,
    message: `最少输入${num}位`
  };
};

// 最多输入
export const max = num => {
  return {
    max: num,
    message: `最多输入${num}位`
  };
};

// 用户名
export const uname = {
  pattern: /^[a-zA-Z0-9_-]{4,30}$/,
  message: "请输入4到30位非中文字符"
};

// 密码
export const pwd = {
  pattern: /^[a-zA-Z0-9]{6,30}$/,
  message: "请输入6到30位英文或数字"
};

// 手机号
export const mobile = {
  pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/,
  message: "请输入正确的手机号"
};

// 价格
export const price = {
  pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
  message: "请输入正确的价格"
};

// 中文英文和数字
export const cen = {
  pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/,
  message: "请输入中文英文和数字"
};

// url
export const url = {
  pattern: /^((ht|f)tps?):\/\/[\w-]+(\.[\w-]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])/,
  message: "请输入正确的URL地址，以http://开头"
};

// 邮箱地址
export const email = {
  pattern: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
  message: "请输入正确的邮箱地址"
};

// 微信号
export const wechat = {
  pattern: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
  message: "请输入正确的微信号"
};

// 身份证号
export const identity = {
  pattern: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d/,
  message: "请输入正确的身份证号"
};

export default {
  required,
  min,
  max,
  uname,
  pwd,
  mobile,
  email,
  wechat,
  identity
};