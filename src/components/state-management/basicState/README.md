## basic state management.

Basic implementation of state management between the class based component and functional component. 

In Class Component - there are 3 steps:
1. create class component.
2. add state inside the constructor.
3. functions capable of updating the state.

If you check out the ClassCounter.js code you will find that, there is counter implementation with 3 functions to increment, decrement and reset the counter. 

In Functional Component - there are 3 steps:
1. Create Functional Component.
2. Import useState from the react.
3. call useState() which will return the variable and setter function. 

If you check the HookCounter.js file, you will find how the useState is called. 
It returns count and setCount. count holds the value & setCount is used to update the value of count on button click.

