import routerAuth from "./auth.js";
import routerSevice from "./service.js";
import routerVendor from "./vendor.js";

export default function router(app) {
  app.use("/api/v1/services", routerSevice);
  app.use("/api/v1/vendors", routerVendor);
  app.use("/api/v1/auth", routerAuth);
}
