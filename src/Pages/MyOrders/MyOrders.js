import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const { email } = useParams();
  const [orders, setOrders] = useState([]);

  const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" };
    const url = `https://uni-travel-34404.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Update Succeflly");
          fetch(
            `https://uni-travel-34404.herokuapp.com/users/${user?.email}`
          )
            .then((res) => res.json())
            .then((data) => {
              setOrders(data);
              console.log(data);
            });
        }
      });
  };

  //   This is For Delete

  const handleDeelete = (id) => {
    const url = `https://uni-travel-34404.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("delete Succeflly");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };

  useEffect(() => {
    console.log(user?.email);
    fetch(`https://uni-travel-34404.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [user.email]);

  return (
    <div className="my-orders-main">
      <h2 className="text-center">My All Orders :{orders.length}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Event Name</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <td>{order.name}</td>
              <td>{order.eventName}</td>
              <td>{order.phone}</td>
              <td>{order.status}</td>
              <td>
                <div className="btn-all-table">
                  <button
                    onClick={() => handleUpdate(order._id)}
                    className="btn-action"
                  >
                    Approved
                  </button>

                  <button onClick={() => handleDeelete(order._id)}>X</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
