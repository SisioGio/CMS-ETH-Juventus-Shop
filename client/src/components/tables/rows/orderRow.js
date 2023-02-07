// client/src/App.js

import React from "react";

function OrderRow(props) {
  return (
    <tr key={props.id}>
      <td>
        <input name="id" type="text" disabled value={props.row.id} />
      </td>

      <td>
        <input
          name="Total Amount"
          type="number"
          value={props.row.totalAmount}
          disabled
        />
      </td>

      <td>
        <input
          name="User"
          type="text"
          disabled
          value={props.row.user ? props.row.user.email : "Not found"}
        />
      </td>
      <td>
        <input
          disabled
          name="Paid"
          type="checkbox"
          checked={props.row.paid ? true : false}
        />
      </td>
      <td>
        <input
          name="Delivered"
          type="checkbox"
          disabled
          value={props.row.delivered}
        />
      </td>

      <td>
        {props.row.order_products ? (
          <a
            href="#"
            onClick={() => props.setOrderDetails(props.row.order_products)}
          >
            <svg
              clip-rule="evenodd"
              fill-rule="evenodd"
              height="24px"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.985 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007zm1.991 6.999c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1zm-3 0c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1-1-.448-1-1z"
                fill-rule="nonzero"
              />
            </svg>
          </a>
        ) : null}
      </td>
    </tr>
  );
}

export default OrderRow;
