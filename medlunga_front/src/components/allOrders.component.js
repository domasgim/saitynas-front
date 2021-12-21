import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from './modal.component';


class AllOrders extends React.Component {
    state = {
        orders: [],
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get('api/orders');
        if(res.status === 200) 
        {
            this.setState({
                orders: res.data,
                loading: false
            });
        }
    }

    deleteStudent = async (e, id) => {
        const res = await axios.delete(`api/orders/${id}`);
        if(res.status === 200) {

        }

    }

    render() { 
        var order_HTMLTABLE ="";
        if (this.state.loading)
        {
            order_HTMLTABLE = <tr><td colSpan="5"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            order_HTMLTABLE =
            this.state.orders.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.customer_name}</td>
                        <td>{item.customer_email}</td>
                        <td>
                            <Link to={`orders/${item.id}/doors`} className="btn btn-primary btn-sm">Select</Link>
                        </td>
                        <td>
                            <Link to={`edit-order/${item.id}`} className="btn btn-primary btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deleteStudent(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Orders
                                    <Link to='/new-order' className="btn btn-primary btm-sm float-end">New Order</Link>
                                </h4>
                            </div>

                            <div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Customer name</th>
                                                <th>Customer email</th>
                                                <th>Select</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order_HTMLTABLE}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AllOrders;