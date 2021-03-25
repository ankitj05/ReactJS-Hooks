## useContext Hook

useContext Hook is alternate to Context API.

It solves the problem of 
1. nested ContextAPI's in components.
2. prop drilling

In this, i have followed the same component tree structure. 

Component A, B, C as the second layer. 
Component D is nested within Component B.
Component E is nested within Component C.
Component F is nested within Component E.

                            UseContext
            A               B               C
                            D               E
                                            F

## Scenario 

1. UserContext & FileContext is defined in the UseContext Component.
2. I want to access these contexts in ComponentF.

Without prop drilling and nested contexts, we can achieve this using useContext Hook.

In ComponentF, 
1. you will see that we have imported useContext from 'react'
2. we have passed the UserContext and FileContext to the useContext as parameters.
3. useContext outputs the value associated with the context.
4. In Case of UserContext - userName
5. In Case of FileContext - fileName

So we can directly use these constants in the JSX.





