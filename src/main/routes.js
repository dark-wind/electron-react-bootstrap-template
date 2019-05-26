import Tools from "./views/Tools";
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
    path: "/tools",
    name: "tools",
    icon: "pe-7s-rocket",
    component: Tools,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
