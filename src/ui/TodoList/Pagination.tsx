import React              from "react";
import { getPageNumbers } from "@utils/index";
import { TodoAction }     from "@application/todo/actions/todoActions";

interface IPagination {
  limit: LimitNum;
  setTodoPage: (page: number) => TodoAction;
  page: number;
  totalTodos: number;
}

const Pagination = ({
  limit,
  setTodoPage,
  page,
  totalTodos,
}: IPagination) => {
  const pageNumbers = getPageNumbers(totalTodos, limit);

  return (
    <div style={{ display: 'flex' }}>
      {pageNumbers.map((p: number) => {
        return (
          <div
            key={p}
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? '2px solid green' : '1px solid gray',
              padding: 10,
            }}
          >
            {p}
          </div>
        );
      })}
    </div>
  )
}

export default Pagination;
