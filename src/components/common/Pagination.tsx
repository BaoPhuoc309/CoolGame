import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Pagination.scss";

interface Pagination {
  pageHandler: (page: number) => void;
  nextPage?: string | number | null;
  prevPage?: number | null | undefined;
  currentPage?: number | null | undefined;
}

const Pagination: React.FC<Pagination> = ({
  pageHandler,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNextHandler = () => {
    if (
      currentPage !== undefined &&
      currentPage !== null &&
      nextPage !== null
    ) {
      pageHandler(currentPage + 1);
    }
  };

  const pagePrevHandler = () => {
    if (
      currentPage !== undefined &&
      currentPage !== null &&
      prevPage !== null
    ) {
      pageHandler(currentPage - 1);
    }
  };

  return (
    <div className="pagination-wrapper d-flex align-items-center justify-content-center">
      <button
        type="button"
        className={`prev-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          prevPage === null ? "disabled" : ""
        }`}
        disabled={prevPage === null ? true : false}
        onClick={pagePrevHandler}
      >
        <AiOutlineArrowLeft className="me-3" />
        Prev
      </button>

      <button
        type="button"
        className={`next-btn fw-6 text-uppercase text-white d-flex align-items-center ${
          nextPage === null ? "disabled" : ""
        }`}
        disabled={nextPage === null ? true : false}
        onClick={pageNextHandler}
      >
        Next <AiOutlineArrowRight className="me-3" />
      </button>
    </div>
  );
};

export default Pagination;
