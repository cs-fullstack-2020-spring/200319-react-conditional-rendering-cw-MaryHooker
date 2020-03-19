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

    //function that handles the change of all inputs and updates the current state of each property
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

    //function that handles the submission button by updating the properties and pushing them to the above array
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
            {   //setting initial state of properties
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
                    <fieldset className='fieldset'>
                        <legend className='legend'>Sell an item</legend>
                        <br/>
                        <div>
                            <label htmlFor="productTitle" className='labels'>Product Title: </label>
                            <input type="text" name='productTitle' value={this.state.productTitle} onChange={this.handleInputs} className='inputs' />
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="productPrice" className='labels'>Product Price: </label>
                            <input type="text" name='productPrice' value={this.state.productPrice} onChange={this.handleInputs} className='inputs'/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="condition" className='labels'>Product Condition: </label>
                            <input type="text" name='condition' value={this.state.condition} onChange={this.handleInputs} className='inputs'/>
                        </div>
                        <br/>

                        <button onClick={this.handleSubmission} className='button'>Sell Item</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Sell;