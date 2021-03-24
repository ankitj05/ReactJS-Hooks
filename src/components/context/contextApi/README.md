## Context API

This is used to avoid prop drilling. 

Prop Drilling ?
1. Suppose you have an application, which has nested components and the tree is very big. 
2. You have a prop/state called username defined in the APP/Root Component of your application.
3. The same prop/state has to be used in the bottom most component of your tree. 
4. For that component to have access, you will have to pass the username as prop from App.js to each component in that branch. 
5. All the components that appear in that branch, have no use of that state/prop. 
6. This is called prop drilling. 

How Context solves it ?

In the codebase here, we have ContextApp.js as root component. 
Component A, B, C as the second layer. 
Component D is nested within Component B.
Component E is nested within Component C.
Component F is nested within Component E.

                            ContextApp
            A               B               C
                            D               E
                                            F

username is declared in ContextApp, to be used in component D and F. 

Check out the implmentation, you will understand how the username is Provided to the UserContex and it is extracted in Component F using Consumer property of UserContext.


This implementation poses an issue. What if we want to pass multiple props from ContextApp to Component F. 

It will become nested and messy. Checkout useContext which solves the issue. 
