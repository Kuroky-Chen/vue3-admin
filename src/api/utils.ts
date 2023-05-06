// 后端使用微服务架构
// export const baseUrlApi = (url: string) => `/api/${url}`;

// 前端和后端部署在一起
export const baseUrlApi = (url: string) =>
  process.env.NODE_ENV === "development"
    ? `/api/${url}`
    : `http://127.0.0.1:3000/${url}`;
