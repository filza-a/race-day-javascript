let raceNumber = Math.floor(Math.random() * 1000);
/*you can change the following two values and see the outputs change accordingly*/
let isEarlyRegistered = false
let runnerAge = 0

if(isEarlyRegistered && runnerAge >= 18){
  raceNumber += 1000
}

if(isEarlyRegistered && runnerAge >= 18){
  console.log(`Your race number is ${raceNumber}, race time is 9:30 AM.`)
}
else if(!isEarlyRegistered && runnerAge >= 18){
  console.log(`Your race number is ${raceNumber}, race time is 11:00 AM.`)
}
else if(runnerAge >= 8){
  console.log(`Your race number is ${raceNumber}, race time is 12:30 PM.`)
}
else{
  console.log('Age is invalid for race')
}
