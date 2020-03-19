import React, { Component } from 'react';
import ListOfItems from './ListOfItems';
import Sell from './Sell';
import Buy from './Buy';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //set initial states
            itemsForSellArray: [],
            itemsOfferArray: [],
            wantsToBuy: false,
            wantsToSell: false,
        }
    }
    //call back function to update array from child component
    updateItemsForSellArray = (updatedArray) => {
        this.setState(
            {
                itemsForSellArray: updatedArray
            }
        )
    }
    //call back function to update array from child component
    updateItemsOfferArray = (updatedArray) => {
        this.setState(
            {
                itemsOfferArray: updatedArray
            }
        )
    }
    //Button event to conditionally render buy form
    showBuy = () => {
        this.setState(
            {
                wantsToBuy: true
            }
        )
        this.setState(
            {
                wantsToSell: false
            }
        )
    }
    //Button event to conditionally render sell form
    showSell = () => {
        this.setState(
            {
                wantsToSell: true
            }
        )
        this.setState(
            {
                wantsToBuy: false
            }
        )
    }

    render() {
        //declaring empty variable
        let buyOrSell;
        //condition saying that if the state of wants to buy is true then show the buy form/ else if wants to sell is true then render that form
        if (this.state.wantsToBuy) {
            buyOrSell = <Buy updateItemsOfferArray={this.updateItemsOfferArray} />
        } else if (this.state.wantsToSell) {
            buyOrSell = <Sell updateItemsForSellArray={this.updateItemsForSellArray} />
        }

        return (
            <div>
                <h1 className='title'>Buy Sell App</h1>
                <ListOfItems itemsForSellArray={this.state.itemsForSellArray} itemsOfferArray={this.state.itemsOfferArray} />

                {/* buttons with onClick functions created above */}
                <button onClick={this.showBuy} className='button'>Buying</button>
                <button onClick={this.showSell} className='button'>Selling</button>
                {/* placing the declared variable in the div to return the conditional */}
                {buyOrSell}
            </div>
        );
    }
}

export default AppContainer;