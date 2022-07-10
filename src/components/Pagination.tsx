import ReactPaginate from "react-paginate";

interface IProps {
  pageCount: number;
  onPageChange: (data: { selected: number }) => void;
}

const Pagination = ({ pageCount, onPageChange }: IProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="<"
      containerClassName={"paginateContainer"}
      pageClassName={"paginateItemContainer"}
      pageLinkClassName={"paginateLink"}
      activeClassName={"activePage"}
      //@ts-ignore
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
