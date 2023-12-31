import React from "react";
import { Link } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";
import "./BreadCrumb.scss";

interface DataNameById {
  [id: number]: string | undefined;
}

interface Bread {
  dataNameById: DataNameById;
}

const BreadCrumb: React.FC<Bread> = ({ dataNameById }) => {
  const breadcrumbs = useReactRouterBreadcrumbs();

  return (
    <div className="breadcrumb-wrapper">
      {breadcrumbs.map(({ match, breadcrumb }) => {
        let id: number | undefined;

        // Check if breadcrumb is a ReactElement with props
        if (React.isValidElement(breadcrumb)) {
          id = parseInt(breadcrumb.props.children as string, 10);
        } else {
          // Handle other types (string, number, boolean, etc.)
          id = typeof breadcrumb === "number" ? breadcrumb : undefined;
        }

        if (id === Number(Object.keys(dataNameById)[0])) {
          return (
            <Link
              className="breadcrumb-item"
              to={match.pathname}
              key={match.pathname}
            >
              {dataNameById[id]}
            </Link>
          );
        }

        return (
          <Link
            className="breadcrumb-item"
            to={match.pathname}
            key={match.pathname}
          >
            {breadcrumb}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
