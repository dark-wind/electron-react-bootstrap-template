import Test from "./views/Test";
import Welcome from "./views/Welcome";

const dashboardRoutes = [
  {
    path: "/welcome",
    name: "welcome",
    icon: "pe-7s-rocket",
    component: Welcome,
    layout: "/admin"
  },
  {
    path: "/test",
    name: "test",
    icon: "pe-7s-rocket",
    component: Test,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
