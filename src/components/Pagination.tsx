import ReactPaginate from "react-paginate";

interface IProps {
  pageCount: number;
  onPageChange: (data: { selected: number }) => void;
  offset: number;
}

const Pagination = ({ pageCount, onPageChange, offset }: IProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName={"paginateContainer"}
      pageClassName={"paginateItemContainer"}
      pageLinkClassName={"paginateLink"}
      activeClassName={"activePage"}
      forcePage={offset / 100}
      //@ts-ignore
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
