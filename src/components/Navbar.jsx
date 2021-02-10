import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = (props)=>{

    const checkBasketCount=(qty)=>{
        if(props.itemCount > 0){
            return  <span id="cart-items-int">
                {qty}
            </span>
        }
    }
    return(
        <nav className="nav-wrapper mb20">
            <div className="container">
                <ul className="right nav-links">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li>
                        <Link to="/cart">
                            <i className="material-icons">shopping_cart</i>
                            {checkBasketCount(props.itemCount)}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=>{
    return{
        itemCount: state.itemCount,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{}
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);