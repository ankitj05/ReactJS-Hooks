## state management with previous values

In file HookCounterTwo.js, if you check, we are incrementing the value of count by 5. 

Lets see if someone codes the incrementBy5 functionality using the for loop.

If you run the code, you will see that when the button is clicked, the value of count is incrementing by only 1 instead of 5. 

This happens because of the stale value which is held by the react. 

This can be corrected by passing the useState hook, in this case setCount with closure that captures the freshest value. 

This you can check out in the HookCounterThree.js code.
