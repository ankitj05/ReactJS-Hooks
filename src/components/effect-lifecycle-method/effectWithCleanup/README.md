## side effects with cleanup

Cleaning up ? Why ? to avoid unnecessary events getting triggered and effect the performace.

In Class Component, we can cleanup the effect using componentWillUnmount function. 

Just call it, and add the remove event listener or whatever you want to stop inside that. 


In Functional Component, we return the removeEventListener within the useEffect.
 
When ever the component is unmounted, the return statement is executed.

