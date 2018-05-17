import jwt from "@/utils/jwt";

const before = async (to, from, next) => {
  // 判断当前路由是否有效，无效则跳转404
  if (to.name) {
    // 判断当前路由是否需要登录
    if (to.meta.needLogin) {
      // 判断缓存中是否有AccessToken
      const accessToken = jwt.findAccessToken();
      if (accessToken) {
        // 验证accessToken
        const {
          success: accessTokenValid
        } = await jwt.validateAccessToken(
          accessToken
        );
        if (accessTokenValid) {
          next();
        } else {
          // 验证refreshToken
          const refreshToken = jwt.findRefreshToken();
          const {
            success: refreshTokenValid,
            data: newToken
          } = await jwt.validateRefreshToken(refreshToken);
          if (refreshTokenValid) {
            const {
              access_token,
              refresh_token
            } = newToken;
            // 保存token
            jwt.setToken(access_token, refresh_token);
            next();
          } else {
            next({
              name: "login"
            });
          }
        }
      } else {
        next({
          name: "login"
        });
      }
    } else {
      next();
    }
  } else {
    next({
      name: "404"
    });
  }
};

const after = () => {
  window.scrollTo(0, 0);
};

export default {
  before,
  after
};