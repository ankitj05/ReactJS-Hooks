## basic effect implementation in Class and Functional Components. 

In Class components we have lifecycles methods which are used to implement the side effects. 

We have following 3 most used and basic lifecycle methods:
1. componentDidMount() - gets called at first when the component is mounted.
2. componentWillUnmount() - gets called when the component is unmounted.
3. componentDidUpdate() - gets called everytime the component is rendered.

example used is
1. when button is clicked, the state object with count is incremented by 1. 
2. The document title is changed or updated when the component is re-rendered.
3. Component re-renders when the button is clicked.

In class component, we see that the ComponentDidMount is called when the component renders for the first time. 

componentDidUpdate is called everytime the button is clicked. Since we only have the button in this example, component will be rendered everytime the button is clicked. But in real case, there can be many different user interactions on which the component might render again. So the componentDidUpdate() will be called. 

Now, what is the problem ? 
1. If you see carefully, we have used the exact same code in both componentDidMount and componentDidUpdate. So, re-usage of the same code.
2. When we want to add a event listener, we will add in the componentDidMount and will remove the event listener in ComponentWillUnmount. So, we are clubbing different, unrelated code in the same function.

In Functional Component, we implement the side effects using useEffect Hook.
We simply pass the function to useEffect. 
In our case, we are passing a function to update the document title whenever the component renders.

Now, the issue with this kind of implementation is that, when we have a input text box, and we enter the text inside that, but we do not click the button, still on every render of the component, the document title will update, because we do not check the previous and current value of the button click count. 
