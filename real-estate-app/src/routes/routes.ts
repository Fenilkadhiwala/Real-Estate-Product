import HomePage from "../components/user/HomePage";
import PostProperty from "../components/user/PostProperty";
import NotFoundPage from "../components/user/NotFoundPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/postproperty", component: PostProperty },
  { path: "*", component: NotFoundPage },
];

export default routes;
