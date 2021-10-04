import React, {Component} from "react";
import {Route, Link} from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: "/",
        exact: true
    },
    {
        name: "Sản phẩm",
        to: "/products",
        exact: false
    }
];
const MenuLink = ({ lable, to , activeOnlyWhenExact}) =>{
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to} >
                            {lable}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    getMenus = (menus) =>{
        let result = null
        if(menus.length > 0){
            result = menus.map((menu,index)=>{
                return (
                    <MenuLink
                        key={index}
                        lable={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
    render() {
        return (
            <div className="menu">
                <div className="navbar navbar-default">
                    <a className="navbar-brand">call api</a>
                    <ul className="nav navbar-nav">
                        {this.getMenus(menus)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
