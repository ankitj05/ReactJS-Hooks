## effect implementation based on the state

If you checked the basic implementation you would have seen that when we click on the button the document title is updated with the count. But when we type in the text box, still the document title is getting updated. 

This happens because we had not added any condition on componentDidUpdate and useEffect.

Re-rendering of components which are not required, will severly impact the performace of the application.

In this, we have added a new condition in the class component. 
Inside the componentDidUpdate() you see, that we have added a if condition to check if the previous state value of count is different from the current state value. When you run this, you will see that the document title is not updated on each render when we type in the text box.

In functional Component, we have passed an array in the useEffect function. This array defines the dependency of that useEffect function on the state. If we do not pass the array, then the useEffect will be called on each render. 

If we want to call the useEffect only once, then we pass an empty array to useEffect. 
