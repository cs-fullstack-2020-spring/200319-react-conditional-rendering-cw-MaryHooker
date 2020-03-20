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
                <h2 className='purple'>Items For Sell</h2>
                <div>
                    
                {
            
                this.props.itemsForSellArray.map((item,idx) =>{
                    return(
                        <div key={idx}>
                            
                          <p className='blue'>Product: {item.productTitle}</p>
                          <p className='blue'>Price: {item.productPrice}</p> 
                          <p className='blue'>Condition: {item.condition}</p>
                          <hr className='sellBreaks'/>   
                        </div>
                    )
                }
                )
                }
                </div>
                <h2 className='purple'>Product Offers</h2>
                <div>
                    {
                        this.props.itemsOfferArray.map((offer,idx) =>{
                            return(
                                <div key={idx}>
                                    
                                    <p className='orange'>Title: {offer.productOfferTitle}</p>
                                    <p className='orange'>Offer Price: {offer.productOfferPrice}</p>
                                    <hr className='offerBreaks'/>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
         )
    }
}
 
export default ListOfItems;