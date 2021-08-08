# chops-assignment

Road-map for the project:

1) Check the data types with if-else statements to make sure that the arguments that get passed are the desired data types, if not, give error.

2) Use string methods and iterators (array methods) to reach the final result.

3) Use Jest to test different conditions.

4) Integrate Typescript, use type annotations to make sure to pass the right values.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Steps that are followed:

note: -main branch is used for JS code, and unit test. First 11 step has only been made in main branch. -new branch: duyguTS is created to integrate TS to the assignment. all TS related commits has been made from this branch.

1) Split() method is applied to the data argument, to make each word in string that gets passed via the argument -data- as an array item, so that array methods can be applicable for the next steps.
    for this purpose by appliying split() method, splitedData array is created.

2) map() method is applied to the splitedData array. newArray is created with this action.

3) in order to map the array items that is wrapped with curly brackets, if statement is created. In if statement, slice method is applied.

4)For the items that is wrapped with the curly brackets, for in method is used to loop over, and replace() method is used to replace the current values, with the value of the properties that is passed with the template argument.

5)For the other items that is not wrapped with the curly brackets, I simply returned the items itself, so that they end up in the array as the way they are.

6)For the items that are wrapped with curly brackets, another if statement is created to check index of the item to see that if they matches with the index of the property that is being mapped over.

7)After replace() method is being applied, and items in the curly brackets are replaced with the value of the properties that is passed with the template argument, I returned those items, so that they end up in newArray.

8)In this step, our newArray have the desired result.

9)Therefore join() method is applied to newArray to convert it to the string. joinedArray is created.

10)Function returns to the JoinedArray, to render the final result.

11)Unit test, Jest is applied with different scenerios during the process, and after the function is finalized.

12)JS implementations and unit tests are completed on 11th Step. New Github branch named duyguTS is created in order to integrage typeScript to the assignment. From this step on, all commits has been made to the new branch.

13)Type annotations are added to the funtion arguments, different scenerios are tested.



 
