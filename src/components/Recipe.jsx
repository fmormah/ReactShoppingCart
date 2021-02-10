import React from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
const Recipe=(props)=>{    

    return(
        <div className="container">
            <div className="collection">
                <li className="collection-item"><b>Total: £{props.total.toFixed(2)}</b></li>
            </div>
            <div className="checkout">
                <button className="waves-effect waves-light btn">Checkout</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
