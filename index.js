var i = 0
var numDwarves =[]

function dwarfRollCall(dwarves){
  while(i < dwarves.length){
numDwarves.push('' + [i+1] + '. ' + dwarves[i] + ' ')
i++;
}
return numDwarves.join('')
}


function summonCaptainPlanet(planeteerCalls){
  var j = []
  var i = 0
planeteerCalls = planeteerCalls.map(function(x){ return x.toUpperCase()  })
while (i < planeteerCalls.length){
j.push(planeteerCalls[i] + ['!'])
i++;
}

return j
}

function longPlaneteerCalls(words) {
  if (words.length > 4){
    return true
  } else {
    return false
  }
}

function findTheCheese (foods) {
  
 if ( foods.includes('cheddar')){
return 'cheddar'
 }  if ( foods.includes('gouda')){
   return 'gouda'
 }  if (foods.includes('camembert')){
   return 'camembert'
 } else
   return "no cheese!"
 }

