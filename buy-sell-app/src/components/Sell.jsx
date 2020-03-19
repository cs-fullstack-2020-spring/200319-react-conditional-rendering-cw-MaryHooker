import React, { Component } from 'react';

class Sell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productTitle: '',
            productPrice: '',
            condition: '',
            itemsForSellArray: [],
        }
    }

    handleInputs = (event) => {
        if (event.target.name === 'productTitle') {
            this.setState(
                {
                    productTitle: event.target.value
                }
            )
        } else if (event.target.name === 'productPrice') {
            this.setState(
                {
                    productPrice: event.target.value
                }
            )
        } else if (event.target.name === 'condition') {
            this.setState(
                {
                    condition: event.target.value
                }
            )
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();

        this.state.itemsForSellArray.push(
            {
                productTitle: this.state.productTitle,
                productPrice: this.state.productPrice,
                condition: this.state.condition,
            }
        )
        //update the current state of the array
        this.setState(
            {
                itemsForSellArray: this.state.itemsForSellArray
            }
        )
        //sanity
        console.log(this.state.itemsForSellArray)

        //reference the call back function and send current array up to parent
        this.props.updateItemsForSellArray(this.state.itemsForSellArray)

        //reset the form
        this.setState(
            {
                productTitle: '',
                productPrice: '',
                condition: '', 
            }
        )
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Sell an item</legend>
                        <div>
                            <label htmlFor="productTitle">Product Title: </label>
                            <input type="text" name='productTitle' value={this.state.productTitle} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <label htmlFor="productPrice">Product Price: </label>
                            <input type="text" name='productPrice' value={this.state.productPrice} onChange={this.handleInputs} />
                        </div>
                        <div>
                            <label htmlFor="condition">Product Condition: </label>
                            <input type="text" name='condition' value={this.state.condition} onChange={this.handleInputs} />
                        </div>

                        <button onClick={this.handleSubmission}>Sell Item</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Sell;