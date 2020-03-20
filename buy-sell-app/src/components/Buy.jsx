import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productOfferTitle: '',
            productOfferPrice: 0,
            
        }
    }
    //function that handles the change of all inputs and updates the current state of each property
    handleInputs = (event) => {
        if (event.target.name === 'productOfferTitle') {
            this.setState(
                {
                    productOfferTitle: event.target.value
                }
            )
        } else if (event.target.name === 'productOfferPrice') {
            this.setState(
                {
                    productOfferPrice: event.target.value
                }
            )
        } 
    }
    //function that handles the submission button by updating the properties and pushing them to the above array
    handleSubmission = (event) => {
        event.preventDefault();


        //reference the call back function and send current array up to parent
        this.props.updateItemsOfferArray(this.state);//removed state prop
        // this.props.updateItemsOfferArray(this.state);//removed state prop

        //reset the form
        this.setState(
            {
                productOfferTitle: '',
                productOfferPrice: 0,
            }
        )
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset className='fieldset'>
                        <legend className='legend'>Product Offer</legend>
                        <br/>
                        <div>
                            <label htmlFor="productOfferTitle" className='labels'>Product Title: </label>
                            <input type="text" name='productOfferTitle' value={this.state.productOfferTitle} onChange={this.handleInputs} className='inputs'/>
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="productOfferPrice" className='labels'>Offer Price: </label>
                            <input type="number" name='productOfferPrice' value={this.state.productOfferPrice} onChange={this.handleInputs} className='inputs'/>
                        </div>
                        <br/>

                        <button onClick={this.handleSubmission} className='button'>Submit Offer</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Buy;