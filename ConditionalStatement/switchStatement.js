/*
this is another way of checking conditions if they are true or not
*/
/*
lets set an alarm 
mon-7am
tuesday - thursday= 9am
friday - 9am
sat-sun - 8am
*/
let day = "thursday";
// lets try the same concept with if else
if (day === "monday") {
  console.log(day, ":7am");
} else if (day === "tuesday" || day === "wednesday" || day === "thursday") {
  console.log(day, ": 4am");
} else if (day === "friday") {
  console.log(day, ":9am");
} else if (day === "saturday" || day === "sunday") {
  console.log(day, ":8am");
} else {
  console.log("wrong input");
}

// now lets try it with switch case statements
switch (day) {
  case "monday":
    console.log(day, "7am");
    break;
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log(day, ": 4am");
    break;
  case "friday":
    console.log(day, ":9am");
    break;
  case "saturday":
  case "sunday":
    console.log(day, ":8am");
    break;
  default: // you can use this default word when there is not any input as yours,, it works as else keyword in if else statements
    console.log("wrong input");
}

// disclaimer ,, you have to break the case after each case but if you dont then youll have several outputs
