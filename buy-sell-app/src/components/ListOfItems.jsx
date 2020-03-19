import React,{Component} from 'react';

class ListOfItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 
            <div>
                <div>
                {
            
                this.props.itemsForSellArray.map((item,idx) =>{
                    return(
                        <div key={idx}>
                            <h3>Items For Sell</h3>
                          <p>Product: {item.productTitle}</p>
                          <p>Price: {item.productPrice}</p> 
                          <p>Condition: {item.condition}</p>   
                        </div>
                    )
                }
                )
                }
                </div>
                <div>
                    {
                        this.props.itemsOfferArray.map((offer,index) =>{
                            return(
                                <div key={index}>
                                    <p>Title: {offer.offerTitle}</p>
                                    <p>Offer Price: {offer.offerPrice}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
         );
    }
}
 
export default ListOfItems;