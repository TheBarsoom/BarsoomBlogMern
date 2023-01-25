import { Routes, Route } from "react-router-dom";
// import { GlobalStyle } from "../GlobalStyle";


import routes from "./routes";
import { MainLayout } from "../components";

const MainRoute = () => {
  return (
<>


    <Routes>
      <Route path="/" element={<MainLayout/>}>
        
        {routes.map((route,index)=>(
          route.index ? (
            <Route index key={index} element={route.element} />
          ): (
            <Route
            path={route.path}
            key={index}
            element={ route.element}
          />
          )
        ))}

      </Route>
    </Routes>
        

</>
  );
};

export default MainRoute;
