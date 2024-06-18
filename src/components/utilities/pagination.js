// Pagination
import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate'; /* React Paginate */
import RightArrowIcon from '../../icons/RightArrow';

const Pagination = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        setPageCount(Math.ceil(props.pageCount / 20));
    }, [props.pageCount]);

    useEffect(() => {
        setCurrentPage(props?.page);
    }, [props?.page]);

    // Page click event
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage + 1);
        if(props?.onPageChange) props?.onPageChange(selectedPage + 1);
    }

     return (
        <div className="cf_pagination">

            {/* Pagination */}
            <ReactPaginate
                previousLabel={<RightArrowIcon fill="#FFFFFF" /> }
                nextLabel={<RightArrowIcon fill="#FFFFFF" />}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                pageLinkClassName={'cf_pagination-link'} 
                previousLinkClassName={'cf_pagination-link cf_pagination-link-previous'}
                breakLinkClassName={'cf_pagination-link cf_pagination-link-break'} 
                nextLinkClassName={'cf_pagination-link cf_pagination-link-next'}
                disabledLinkClassName={'cf_pagination-link-disabled'}
                activeLinkClassName={'cf_pagination-link-active'}
                forcePage={currentPage ? (currentPage-1) : 1}
            />
        </div>

    );
};

export default Pagination;