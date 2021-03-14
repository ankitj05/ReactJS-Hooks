## state management with objects/arrays

What happens we implement the state with objects or arrays. 

In Class Component, the state has to be object. 
What happens, when the state has nested object parameters ?
How do you update single parament in the object ?

We are using the Name object, which contains firstName and lastName.
We have 2 input box to update the firstName and lastName.

When you run the HookNameTwo.js you will find that when you enter the first name, it is updating properly. But when you go on to enter the last name, the first name is becoming blank. Why ?

Because, states do not merge the object. They directly replace the object with the new value you are setting using the setter function. In this case, setName will update the object with either firstName or lastName not both. 

So we have to first merge the object and then update the particular value,we want to update. 

Check HookNameTwo.js -  we are first merging the name object, and then updating the first name or second name. 

This also has to be done in the Class components. Check ClassName.js
