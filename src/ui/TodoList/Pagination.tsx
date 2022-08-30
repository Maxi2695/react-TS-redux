import React           from "react";
import { PAGINATIONS } from "@utils/constants";
import { TodoAction }  from "@application/todo/actions/todoActions";

interface IPagination {
  setTodoPage: (page: number) => TodoAction;
  page: number
}

const Pagination = ({
  setTodoPage,
  page
}: IPagination) => {

  return (
    <div style={{ display: 'flex' }}>
      {PAGINATIONS.map((p) => {
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
