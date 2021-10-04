import React, {Component} from "react";
import { Link } from "react-router-dom";
import { addProductRequest, editProductRequest, updateProductRequest } from "../../Actions";
import { connect } from "react-redux";

class ActionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name:"",
            price:"",
            status:false
        };
    }
    componentDidMount(){
        var {match} = this.props;
        if(match){
            this.props.getProduct(match.params.id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.product){
            var {product} = nextProps;
            this.setState({
                id:product.id,
                name:product.name,
                price:product.price,
                status:product.status
            })
        }
    }

    onchange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        })
    }

    onSave = (e)=>{
        e.preventDefault();
        var {history} = this.props;
        var {id} = this.state;
        if(id){
            this.props.updateProduct(this.state)
        }else{
            this.props.addProduct(this.state)
        }
        history.push('/products');
    }

    render() {
        var {name,status,price} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên</label>
                        <input type="text" 
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={this.onchange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá</label>
                        <input type="text"
                         className="form-control"
                          name="price"
                          value={price}
                          onChange={this.onchange}
                          />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái</label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                             value={status} 
                             name="status"
                             onChange={this.onchange}
                             checked={status} 
                             />
                            Còn hàng
                        </label>
                    </div>
                    <button type="submit"
                     className="btn btn-primary"
                     >Lưu</button>

                     <Link to="/products" className="btn btn-danger ml-10">
                        Hủy
                     </Link>
                </form>

            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        product : state.item,
    }
}
const mapDispathToProps = (dispath,props) =>{
    return {
        addProduct : (product)=>{
            dispath(addProductRequest(product));
        },
        updateProduct : (product) =>{
            dispath(updateProductRequest(product));
        },
        getProduct : (id) =>{
            dispath(editProductRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ActionPage);