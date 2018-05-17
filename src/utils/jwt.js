import {
  create,
  http
} from "bravo-http";
import storage from "store2";
import {
  jwt
} from "@/constants/api";

// 设置本地缓存中的TOKEN
export const setToken = (accessToken, refreshToken) => {
  storage("ACCESS_TOKEN", accessToken);
  storage("REFRESH_TOKEN", refreshToken);
};

// 清除本地缓存中的TOKEN
export const clearToken = () => {
  storage.remove("ACCESS_TOKEN");
  storage.remove("REFRESH_TOKEN");
  storage.remove("USER");
};

// 获取本地缓存中的ACCESS_TOKEN
const findAccessToken = () => {
  return storage("ACCESS_TOKEN");
};

// 获取本地缓存中的REFRESH_TOKEN
const findRefreshToken = () => {
  return storage("REFRESH_TOKEN");
};

// 验证ACCESS_TOKEN
const validateAccessToken = async token => {
  const {
    method,
    url
  } = jwt.validate;
  const params = {
    token
  };
  const {
    success,
    msg,
    data
  } = await http[method](url, params)
  if (success) {
    const {
      userIdentifer
    } = data
    storage('USER', userIdentifer)
  } else {
    console.warn(msg)
  }
  return {
    success
  };
};

// 验证REFRESH_TOKEN
const validateRefreshToken = refreshToken => {
  const payload = {
    params: {
      refreshToken
    }
  };
  return create(jwt.refresh, payload);
};

export default {
  setToken,
  findAccessToken,
  findRefreshToken,
  validateAccessToken,
  validateRefreshToken
};