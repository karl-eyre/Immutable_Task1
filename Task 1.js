/*Task 1:
Write a script that filters elements from the DOM with duplicated tags from the https://godsunchained.com/ page and then prints them in alphabetical order.
*/

//find all page elements
//retrieve node list
var elementsObject = document.querySelectorAll("*");
//convert to array
var elementsArray = Object.values(elementsObject);
//return the local name of each element
var elementsStringArray = elementsArray.map(function(element) {
    return element.localName;
  });

//Check for duplicates
function find_duplicate_in_array(array){
    const count = {}
    const result = []

    //for each item found increase count by 1
    array.forEach(item => {
        if (count[item]) {
            count[item] +=1
            return
        }
        count[item] = 1
    })

    //push local name once if 2 or more items were counted
    for (let prop in count){
        if (count[prop] >=2){
            result.push(prop)
        }
    }
    console.log(count);
    return result;
}

//search for duplicates with our fuction
var duplicatesArray = find_duplicate_in_array(elementsStringArray);
//sort the list alphabeticaly
var orderedDuplicateTags = duplicatesArray.sort();
//print list to console
console.log(orderedDuplicateTags);

// recieve node list of elements with duplicated tags
var tagElements = document.querySelectorAll(orderedDuplicateTags);

// convert node list to array
var IndistinctElementsObjects = Object.values(tagElements);

// Create array of elements html
var IndistinctElements = IndistinctElementsObjects.map(function(element) {
    return element.outerHTML;
  });

//sort the list alphabeticaly
var orderedIndistinctElements = IndistinctElements.sort();

//print ordered list
console.log(orderedIndistinctElements);