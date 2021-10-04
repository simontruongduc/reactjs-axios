import List from "../../Components/Products/List";
import Item from "../../Components/Products/Item";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { deleteProductsRequest, fetchProductsRequest } from "../../Actions";

class ProductsPage extends Component {

    componentDidMount(){
        this.props.getProducts();
    }

    onDelete = (id) =>{
        this.props.deleteProduct(id);
    }

    showProducts = (products) => {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Item
                        key={index}
                        data={product}
                        index={index}
                        onDelete = {this.onDelete}
                    />
                );
            })
        }
        return {result}
    }

    render() {
        var {products} = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" type="button" className="btn btn-default mb-10">
                    Thêm sản phẩm
                </Link>
                <List>{this.showProducts(products)}</List>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        products : state.products
    }
}
const mapDispathToProps = (dispath,props) =>{
    return {
        getProducts : ()=>{
            dispath(fetchProductsRequest());
        },
        deleteProduct : (id) => {
            dispath(deleteProductsRequest(id));
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ProductsPage);