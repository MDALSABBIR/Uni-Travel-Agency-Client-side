import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const AllOrders = () => {
  const { user } = useAuth();
  const { email } = useParams();
  const [orders, setOrders] = useState([]);

  const handleUpdate = (id) => {
    const updateStatus = { status: "Approved" };
    const url = `https://uni-travel-34404.herokuapp.com//users/${id}`;
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
          fetch(`https://uni-travel-34404.herokuapp.com//users/`)
            .then((res) => res.json())
            .then((data) => {
              setOrders(data);
              console.log(data);
            });
        }
      });
  };

  //   This is For Delete

  const handleDelete = (id) => {
    const url = `https://uni-travel-34404.herokuapp.com//users/${id}`;
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
    fetch(`https://uni-travel-34404.herokuapp.com//users`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h2>AllOrders</h2>
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

                  <button onClick={() => handleDelete(order._id)}>X</button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default AllOrders;
