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
                    {/* iterating through each arrray passed down from the parent component using map */}
                {
            
                this.props.itemsForSellArray.map((item,idx) =>{
                    return(
                        <div key={idx}>
                            <h2 className='purple'>Items For Sell</h2>
                          <p className='blue'>Product: {item.productTitle}</p>
                          <p className='blue'>Price: {item.productPrice}</p> 
                          <p className='blue'>Condition: {item.condition}</p>   
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
                                    <h2 className='purple'>Product Offers</h2>
                                    <p className='blue'>Title: {offer.productOfferTitle}</p>
                                    <p className='blue'>Offer Price: {offer.productOfferPrice}</p>
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