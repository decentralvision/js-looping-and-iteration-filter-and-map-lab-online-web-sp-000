// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter( function(driver) { return driver.revenue > revenue })
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(driver) {return driver.name} )
}


function exactMatch(drivers, specs) {
  console.log(Object.keys(specs))
  return drivers.filter(function(driver) {return driver[`${Object.keys(specs)[0]}`] === specs[`${Object.keys(specs)[0]}`] })
}
