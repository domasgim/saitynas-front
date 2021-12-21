import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class DoorParts extends React.Component {
    state = {
        parts: [],
        loading: true
    }

    async componentDidMount() {
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        const res = await axios.get(`api/orders/${order_id}/doors/${door_id}/parts`);
        if(res.status === 200) 
        {

            this.setState({
                parts: res.data,
                loading: false
            });
        }
    }

    deletePart = async (e, orderId, doorId, partId) => {
        const res = await axios.delete(`api/orders/${orderId}/doors/${doorId}/parts/${partId}`);
        if(res.status === 200) {

        }
    }

    render() { 
        const order_id = this.props.match.params.orderId;
        const door_id = this.props.match.params.doorId;
        const part_id = this.props.match.params.partId;
        var order_HTMLTABLE ="";
        if (this.state.loading)
        {
            order_HTMLTABLE = <tr><td colSpan="5"><h2>Loading...</h2></td></tr>;
        }
        else
        {
            order_HTMLTABLE =
            this.state.parts.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>
                            <Link to={`parts/${item.id}/edit`} className="btn btn-primary btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => this.deletePart(e, order_id, door_id, item.id)} className="btn btn-danger btn-sm">Delete</button>
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
                                <h4>Parts
                                    <Link to='parts/new-part' className="btn btn-primary btm-sm float-end">New Part</Link>
                                    <Link to={`/orders/${order_id}/doors`} className="btn btn-primary btm-sm float-end">Back</Link>
                                </h4>
                            </div>
                            <div>
                                <div className="card-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Part name</th>
                                                <th>Part notes</th>
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
 
export default DoorParts;