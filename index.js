// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  drivers.map{ function(driver) { return driver.revenue >= revenue }}
}
