import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router_APP } from "./Router";
import BaseLayout from "../Layout/BaseLayout";
import {
  Error,
  Home,
  ViewCreatorAll,
  ViewGameAll,
  ViewGameDetails,
  ViewStoreAll,
  ViewStoreDetails,
} from "../View";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router_APP.HOME} element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path={Router_APP.ERROR} element={<Error />} />
          <Route path={Router_APP.VIEWGAMEALL} element={<ViewGameAll />} />
          <Route
            path={Router_APP.VIEWGAMEDETAILS}
            element={<ViewGameDetails />}
          />
          <Route path={Router_APP.VIEWSTOREALL} element={<ViewStoreAll />} />
          <Route
            path={Router_APP.VIEWSTOREDETAILS}
            element={<ViewStoreDetails />}
          />
          <Route
            path={Router_APP.VIEWCREATORALL}
            element={<ViewCreatorAll />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
