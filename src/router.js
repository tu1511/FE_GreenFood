import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
  ];
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
