import React, {Component} from "react";
import { Link } from "react-router-dom";

class Item extends Component {
    onDelete = (id) =>{
        if(window.confirm("bạn có muốn xóa?")){
            this.props.onDelete(id);
        }
    }

    render() {
        var {data, index} = this.props;
        var status = data.status ? "Còn hàng" : "Hết hàng";
        var statusClass = data.status ? "warning" : "default"
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{status}</span>
                </td>
                <td>
                    <Link to={`/product/${data.id}/edit`}
                     className="btn btn-success"
                     >
                        Sửa
                    </Link>
                    <button type="button"
                     className="btn btn-warning ml-10" 
                     onClick={() => this.onDelete(data.id)}
                     >
                         xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default Item;
