# CIS-1090 Project1

## Personal Dictionary

### First Steps

Remember to create a fork. The `npm ci` command will download the libraries we use, the `npm run test` command will run the tests.

### Part One

The first part of this assignment is to begin implementing the personal dictionary component. This component is defined in the (currently empty!) `personal-dictionary.js` file.

In this file you are to define two functions, but you may leave their contents blank. These functions are to be named `search` and `addWord`. Both functions take a single parameter, the word to be searched for, or added to the personal dictionary, respectively. The search function will eventually return `true` if the dictionary contains the word, and `false` if it does not. The addWord function has no return value.

You should also declare an array named `words` in this module, and set it's value to an empty array.

The implementation (the *inside*) of this module has **three** things, the search and addWord function, and the words array.

The interface (the parts visible from the *outside*) should only have two things: the two functions.

Add an `export` statement at the bottom of the module, exporting these two functions.


Helpful Hints:

* Remember to check in your code!
* **Before** you fill in the `personal-dictionary.js` file the `npm run tests` command will totally fail to run, because it is trying to use functions that are not there.
* **After** you fill it in the tests will run, *but many will fail*.
* You do not have to implement the functions, so your file should only have about **6** lines, excluding blank lines and comments.
* Forget the export statement?
    * https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
    * https://www.bundleapps.io/blog/use-named-exports-over-default-exports-in-javascript


### Part Two

Implement (write the code inside) the search and addWord function.

How do I add something to an array? Google it!

> javascript add item to array

I am not being a pain in the butt here, Javascript has *hundreds* of built-in functions, and no one can remember them all.

You may do a simple linear search, no need to sort the array either - we discovered that it is totally fast enough for a small personal dictionary.


**Once complete, all tests should pass**

**Remember to push it to GitHub**