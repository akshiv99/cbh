# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
 I have refactored the above code by removing a few redundant if..else statements. In the original code and in the first if statement block, we can see that the 
 candidate attribute is getting assigned a value, which accounts for the if block of the next set of if..else statements. 
  We can elimiate the else block of this if..else statement by simply assisgning the TRIVIAL_PARTITION_KEY as the default value of the candidate. If the event exisits,
 it's value gets overwritten. Lastly, we can also incorporate the final if statement into the if block, because we know for a fact that the default value of (0) < 256.
 Since the value of the candidate is only getting modified by the first if block, we can simply place it within the first block itself.

 This also makes our code more readable, as there is there just one if block, instead of 3 in the original code. It is also easy to follow along how the candidate value keeps 
 getting updated in the following lines of code and it is then simply returned. If there is a null input, it is also easy to infer that the function would simply return the 
 default value of the candidate, which is the TRIVIAL_PARTITION_KEY (0) in this case. 