// Code your solution in this file!
let hq = 42
let feet = 264


function distanceFromHqInBlocks(pickup){
  let hq = 42
  if(pickup > hq){
    return pickup - hq
} else if(pickup<hq){
  return hq - pickup
}
}

function distanceFromHqInFeet(length){
    return distanceFromHqInBlocks(length) * feet
}

function distanceTravelledInFeet(a, b){
  let difference = Math.abs(a - b)
    return difference * feet
}

function calculatesFarePrice(start, destination){
  let difference = Math.abs(start - destination)
  let sum = difference * feet
    if (sum <= 400) {
      return 0
    } else if (sum>= 400 && sum <= 2000){
      let cost = (sum-400)*.02
        return cost
    } else if (sum>= 2001 && sum < 2500){
      return 25
    } else (sum> 2500)
      return "cannot travel that far"
}