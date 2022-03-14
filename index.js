//////////////////////////////////////////////////////
///                                                ///
///           JS BEGINNER GROUP PROJECT            ///
///                   cohort 21                    ///
///              TEXT ADVENTURE GAME               ///
///             Undefined Territory!               ///
///         Let us help you decide to go or no     ///
//////////////////////////////////////////////////////

let name = prompt("What is your name?");

alert(`Hi ${name}! You're about to enter Undefined Territory!`);

let age = prompt("Due to the contagious nature of this game, we're going to need to verify that you're old enough to play. How old are you?");
//underage
if (age < 18){ 
alert("Sorry, kid, but we'd like to speak with your parents.");
}
//high-risk age
else if (age >=60 ){
  let oldie = confirm ("CDC says you are high risk to travel, do you still wish to proceed?");
  if (oldie == true) {
    playGame();
  }
  else {
  alert ("Good choice! Stay home and be safe.");
  }
}
//middle-aged
else if (age >= 18 && age <= 59){
alert("Welcome to the game. Where will you decide to go? Choose wisely or risk ending up in Undefined Territory.");
playGame();
}

// let vacation = lowestCovid || lowCovid || highCovid

function playGame() {
const allCountries = ['unknown','Vatican', 'Macao','Barbados','New Zealand', 'Thailand', 'Island', 'Norway', 'Egypt', 'Maldives', 'Cyprus', 'Aruba', 'Taiwan', 'Saint Martin', 'Mauritius', 'Monaco', 'Bermuda', 'Seychelles', 'Antigua and Barbuda', 'Virgin Islands', 'Fiji', 'Dominica', 'Greenland', 'Turks and Caicos', 'Saint Lucia', 'Vietnam', 'Saint Maarten', 'Singapore', 'China', 'Bahamas', 'Australia', 'Cuba', 'Hong Kong','Finland', 'Greece', 'Denmark', 'Croatia', 'Dominican Republic', 'Japan', "Guatemala", 'Honduras', 'Ireland', 'Austria', 'Costa Rica', 'Portugal', 'Lebanon', 'Turkey', 'Chile', 'Canada', 'USA', 'India', 'Brazil', 'Russia', 'Columbia', 'Argentina', 'Spain', 'Peru', 'Mexico', 'South Africa', 'UK', 'Iran', 'Chile', 'Argentina', 'France', 'Belgium', 'Netherlands', 'Italy', 'Ukraine', 'Mexico', 'Indonesia', 'Poland', 'Iran', 'Brazil', 'Romania', 'Germany', 'Morocco', 'Philippines', 'Czechia' ];

let country = prompt("The year is 2020 and you just got 14 days off. What country do you want to go to? ")

let countrycode = 0;
for (i = 0; i < allCountries.length; i++) {
//  console.log(allCountries[count]);
  if(country.toLowerCase() == allCountries[i].toLowerCase()) {
    countrycode = i;
  }
}
//lowestCovid
if (countrycode>=1 && countrycode<=28) {
    alert("You are free to go! But good luck getting home!");
}
//lowCovid
else if (countrycode>=29 && countrycode<=49) {
alert ("This country has a relatively low COVID rating! Pack your bags and don't forget your masks and hand sanitizers, but enter at your own risk!")
} 
//highCovid
else if (countrycode >=50 && countrycode<=78 )  {
    alert (`This country has lots of COVID(+) cases! We suggest you to go to Thailand, Cyprus or Greece instead. Enjoy your trip!`);
}
//Countries not in our list
else {
    alert ("This is Undefined Territory! You are on your own!");
}
}
