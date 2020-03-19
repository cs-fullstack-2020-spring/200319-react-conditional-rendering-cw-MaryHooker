# 20-03-19 React Conditional Rendering CW
### If the toggle forms the component to render is loaded - because we aren't dealing with a backend that means the array is empty (its' initial state) on reload. SO if I enter multiple items in your form without toggling forms your app appears to work great BUT if I toggle forms my pervious item to sell is overridden by the new one. Be sure to test thoroughly! You can fix this by maintaining the state of the item arrays in your parent component(aka just passing objects up instead of whole array) since it won't reload unless you reload the page.
### Score : 4/5
#### Set Up
- Create a react app called buy-sell-app
- Create a class based component called `AppContainer` that displays an h1 tag with the text `Buy Sell App`
- Reference the `AppContainer` in the `App` component

- Create a class based component called `ListOfItems` that will iterate through an array of itemsForSell objects passed down from the parent component and iterate through an array of itemOffer objects passed down from the parent component
- Reference the the `ListOfItems` component in the `AppContainer` component

#### Forms
- Create a class based component called `Sell` that displays a form with fields product title, product price, and product condition
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Sell` component in the `AppContainer` component

- Create a class based component called `Buy` that displays a form with fields product title, product offer price
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Buy` component in the `AppContainer` component

#### Conditional Rendering
- Add a `Buying` button and a `Selling` button to the `AppContainer` component
- When the `Buying` button is clicked display the `Buy` component
- When the `Selling` button is clicked display the `Sell` component