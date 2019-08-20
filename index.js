// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location){
  const selectedDrivers = drivers.filter(function(driver){
    return driver.hometown === location
  })
  selectedDrivers.forEach(function(driver){
    console.log(driver.name)
  });
}

function driversByRevenue(drivers){
<<<<<<< HEAD
  return [...drivers].sort(function(a, b){
=======
  return drivers.sort(function(a, b){
>>>>>>> 7e4ffb6b3de57e614db44f20093d1cba1255598c
    return a.revenue -b.revenue
    
  });
}
<<<<<<< HEAD

function driversByName(drivers) {
  return [...drivers].sort(function(a,b){
    return a.name.localeCompare(b.name)
  });
}

function totalRevenue(drivers){
  const reduceRevenues = function(agg, el, i, arr){
    return agg + el.revenue;
  }
  return drivers.reduce(reduceRevenues, 0);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}
=======
>>>>>>> 7e4ffb6b3de57e614db44f20093d1cba1255598c
