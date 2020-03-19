import React,{Component} from 'react';
import ListOfItems from './ListOfItems';
import Sell from './Sell';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            itemsForSellArray: [],
            itemsOfferArray: [],
         }
    }

    updateItemsForSellArray = (updatedArray) =>{
        this.setState(
            {
                itemsForSellArray: updatedArray
            }
        )
    }

    render() { 
        return ( 
            <div>
                <h1>Buy Sell App</h1>
                <ListOfItems itemsForSellArray={this.state.itemsForSellArray} itemsOfferArray={this.state.itemsOfferArray}/>
                <Sell updateItemsForSellArray={this.updateItemsForSellArray}/>
            </div>
         );
    }
}
 
export default AppContainer;