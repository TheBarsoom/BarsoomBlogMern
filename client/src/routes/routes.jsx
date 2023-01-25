
import { AddPostP, EditPostP, LoginP,PostP, RegisterP,Home } from "../pages";


export const routesGen = {
//   home: "/",
//   mediaList: (type) => `/${type}`,
//   mediaDetail: (type, id) => `/${type}/${id}`,
//   mediaSearch: "/search",
//   person: (id) => `/person/${id}`,
//   favoriteList: "/favorites",
//   reviewList: "/reviews",
//   passwordUpdate: "password-update"
};

const routes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/posts",
    element: <PostP/> ,
  },
  {
    path: "/:id",
    element: <PostP />,

  },

  {
    path: "/:id/edit",
    element: <EditPostP />
  },
  {
    path: "/new",
    element: <AddPostP />
  },
  {
    path: "/register",
    element: <RegisterP />
  },
  {
    path: "/login",
    element: <LoginP />
  }
];

export default routes;