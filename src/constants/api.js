// token
export const jwt = {
  validate: {
    method: "post",
    url: "/share/api/jwt/validateToken"
  },
  refresh: {
    method: "post",
    url: "/share/api/jwt/refresh"
  }
};

// 用户
export const user = {
  validate: {
    method: "post",
    url: "/share/api/ugrp/erpUser/validate"
  },
  pager: {
    method: "post",
    url: "/share/api/ugrp/erpUser/pager"
  },
  getByUuid: {
    method: "get",
    url: "/share/api/ugrp/erpUser/fetchByUuid"
  },
  create: {
    method: "post",
    url: "/security/api/ugrp/erpUser/regist"
  },
  delete: {
    method: "delete",
    url: "/security/api/ugrp/erpUser/dropByUuid"
  },
  modify: {
    method: "put",
    url: "/security/api/ugrp/erpUser/modify"
  },
  modifyStatus: {
    method: "patch",
    url: "/security/api/ugrp/erpUser/modifyStatus"
  },
  modifyPassword: {
    method: "patch",
    url: "/security/api/ugrp/erpUser/modifyPassword"
  }
};