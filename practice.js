//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has 
//a closure over the name variable.
//Invoke outer saving the return value into another variable called 
//'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();

  //returns "The original name was Tyler"



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling 
//Jake at 435-215-9248' in your console.

  var doStuff = callFriend(); //line 30-32 is what this is set to
  doStuff("435-215-9248");



//Next Problem



/*
  Write a function called makeCounter that makes the following code 
  work properly.
*/

function makeCounter() {
  var number = 0;
  return function() {
    return ++number;
  }
}


  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument 
  and returns a new function
  (which invokes the original function that was passed in) that can 
  only ever be executed once.
  Once completed, add a second argument that allows the function to be 
  invoked N number of times.
  After the function has been called N number of times, 
  console.log('STAHHP');
*/



function main(func) {
  var hasRan = false;
  return function() {
    if (hasRan === false) {
      hasRan = true;
      func();
    }
    else {
      console.log("STAHHP");
    }
  };
}


function logHello() {
  console.log("Hello");
}

var test = main(logHello);

test();







