import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';

const Cart=(props)=>{
    console.log("PROPS: ",props);
    let addedItems =props.items.length ?
        (  
           props.items.map(item=>{
                return(
                    
                    <li className="collection-item avatar row" key={item.productId}>
                        <div className="item-img col s12 m3"> 
                            <img src={item.image} alt={item.image} className=""/>
                        </div>
                    
                        <div className="item-desc  col s12 m9">
                            <span className="title">{item.title}</span>
                            <p><b>Price: £{item.price}</b></p> 
                            <p><b>Quantity: {item.quantity}</b></p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleAddQuantity(props,item.productId)}}>arrow_drop_up</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{handleSubtractQuantity(props,item.productId)}}>arrow_drop_down</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{handleRemove(props,item.productId)}}>Remove</button>
                        </div>
                        
                    </li>
                        
                )
            })
        ):
        (
            <p className="pt10 pr10 pb10 pl10">Your cart is currently empty</p>
        )
        
    return(
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div> 
            <Recipe />          
        </div>
    )
    
}


//to remove the item completely
const handleRemove = (props,id)=>{
   props.removeItem(id);
}
//to add the quantity
const handleAddQuantity = (props,id)=>{
   props.addQuantity(id);
}
//to substruct from the quantity
const handleSubtractQuantity = (props,id)=>{
   props.subtractQuantity(id);
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)