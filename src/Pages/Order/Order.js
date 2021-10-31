// import React, { useState } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./Order.css";

// const Order = (props) => {
//   console.log(props);
//   const {
//     _id,
//     address,
//     age,
//     email,
//     eventImg,
//     eventName,
//     eventPrice,
//     name,
//     phone,
//     status,
//   } = props.order;

//   const handleDeelete = (id) => {
//     const url = `https://uni-travel-34404.herokuapp.com/users/${id}`;
//     fetch(url, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount) {
//           alert("delete Succeflly");
//           const remaining = orders.filter((order) => order._id !== id);
//           console.log();
//         }
//       });
//   };
//   return (
//     <tbody>
//       <tr>
//         <td>{name}</td>
//         <td>{eventName}</td>
//         <td>
//           {phone}-:{_id}
//         </td>
//         <td>{status}</td>
//         <td>
//           <div className="btn-all-table">
//             <button className="btn-action">Approved</button>

//             <button onClick={() => handleDeelete(_id)}>X</button>
//           </div>
//         </td>
//       </tr>
//     </tbody>
//   );
// };

// export default Order;
