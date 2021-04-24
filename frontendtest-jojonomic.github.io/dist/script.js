// Complete the variadricAverage function so that it can take any number 
// of arguments and calculate their average.
//
// Bonus Test: Edit the 'average' function to use the 'variadricAverage'.

function executeQ1() {
  // Answer goes here.
  document.getElementById("my-name").innerHTML = "Damar Mahardika."
}
//*************************************
var listItems = [
  'aku',
  'anak',
  'indonesia',
  'bagian',
  'barat'
];

function executeQ2() {
  // Answer goes here.
  let items = listItems.map((item) => {
   return "<li>" + item + "</li>"
  }).join('')
  
  document.getElementById("q2-list").innerHTML = items;
}
//************************************
 
function Person() {
  var name = '';

  this.setName = function(n) {
    name = n;
  };

  this.getName = function() {
    return name;
  }
}

function executeQ3() {
  // Answer goes here.
  let Scott = new Person();
  Scott.setName("Scott");
  let Matt = new Person();
  Matt.setName("Matt");
  let namesList = [
    "<li>" + Scott.getName() + "</li>",
    "<li>" + Matt.getName() + "</li>"
    ].join('');
  document.getElementById("q3-list").innerHTML = namesList
  }
//*************************************
function executeQ4() {
        const url = "https://gist.githubusercontent.com/awadhawan18/54592d9ec5e7be1b39013cdd7e78dae4/raw/54a90fe99b8e821e273e1997f356d04308bdb232/Random-images.json";
        let description = [];
        fetch(url).then((response) => response.json()).then((data) => {
          console.log(data);
          const sample = data.sample;
          sample.map((sample) => {
            description.push(sample.description);
          })
          const q4Div = document.getElementById("q4-answer");
          q4Div.innerHTML = JSON.stringify(description);
        });
      }
      
//************************************      
function average(numbers) {
  return variadricAverage.apply(null, numbers);
};
console.log('The average is: ' + average([2, 5, 6, 2, 45, 3, 23, 14]));

function variadricAverage() {
  // YOUR CODE HERE
  for (var i = 0 , sum = 0 , n = arguments.length; i < n; i++) {
    sum += arguments[i];
  } 
  return sum / n;
};
console.log('The average is: ' + variadricAverage(2, 5, 6, 2, 45, 3, 23, 14));