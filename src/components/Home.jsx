import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import { updateItemsPool } from './actions/cartActions';

 const Home=(props)=>{

    const [didMount, setMount] = useState(false);

    useEffect(() => {
        if(didMount === false){
            updateProductList(props,props.products);
            levelOffCardHeights();
            window.addEventListener('resize', ()=>{
                levelOffCardHeights();
            });
            setMount(true);
        }
    });
    
    
    const levelOffCardHeights=()=>{
        setTimeout(function(){
            let cards = document.querySelectorAll('.card');
            let standardHeight = 0;
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.height = "auto";
            }
            Array.prototype.forEach.call(cards, function (card) {
                if(card.offsetHeight > standardHeight){
                    standardHeight = card.offsetHeight;
                }
            });
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.height = standardHeight+"px";
            }
        },500);
    }


    let itemList = props.products.map(item=>{
        return(
            <div className="col s12 m3" key={item.productId}>
                <div className="card">
                    <div className="card-image">
                        <img src={item.image} alt={item.title}/>
                        {/* <button to="/" className="btn-floating halfway-fab v2 waves-effect waves-light red" onClick={()=>{quickView(props,item.productId)}}><i className="material-icons">visibility</i></button> */}
                        <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{addItemToBasket(props,item.productId)}}><i className="material-icons">add</i></button>
                    </div>
                    <div className="card-content">
                        <span className="card-title">{item.title}</span>
                        <p>{item.sku}</p>
                        <p><b>£{item.price}</b></p>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="container">
            <div className="row">
                {itemList}
            </div>
        </div>
    )
    
}

const quickView = (props,id)=>{}

const addItemToBasket = (props,id)=>{
    props.addToCart(id); 
}

const updateProductList = (props,prods)=>{
    props.updateItemsPool(prods);
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))},
        updateItemsPool: (items)=>{dispatch(updateItemsPool(items))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)