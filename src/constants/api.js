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
  }
};