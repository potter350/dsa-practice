
class City{
    constructor(name){
        this.name = name
        this.routes = new Map()
    }


    addRoutes(destinationCity, distance){
        this.routes.set(destinationCity, distance)
    }
}

let chennai = new City('chennai')
let kanchipuram = new City('kanchipuram')
let vellore = new City('vellore')
let ambur = new City('ambur')
let pondichery = new City('pondichery')
let trichy = new City('trichy')


chennai.addRoutes(kanchipuram, 50)
chennai.addRoutes(vellore, 100)
chennai.addRoutes(pondichery,90)
vellore.addRoutes(ambur, 50)
ambur.addRoutes(trichy,200)
pondichery.addRoutes(trichy, 290 )
kanchipuram.addRoutes(ambur, 98)


findShortestPath(chennai, trichy)

function findShortestPath(startingCity, destinationCity) {
  let currentCity = startingCity;
  let shortestDistance = {};
  let previousShortestDistanceCity = {};
  let unvisitedCity = [startingCity];
  let visitedCity = {};

  shortestDistance[currentCity.name] = 0;

  while (unvisitedCity.length > 0) {
    visitedCity[currentCity.name] = true;

    // Remove current city from unvisited list
    unvisitedCity = unvisitedCity.filter(city => city !== currentCity);

    // Explore adjacent cities
    for (let adjacentCity of currentCity.routes.keys()) {
      let distance = currentCity.routes.get(adjacentCity);

      // Add to unvisited if not visited or already added
      if (!visitedCity[adjacentCity.name] && !unvisitedCity.includes(adjacentCity)) {
        unvisitedCity.push(adjacentCity);
      }

      let distanceToAdjacent = shortestDistance[currentCity.name] + distance;

      if (
        !shortestDistance[adjacentCity.name] ||
        distanceToAdjacent < shortestDistance[adjacentCity.name]
      ) {
        shortestDistance[adjacentCity.name] = distanceToAdjacent;
        previousShortestDistanceCity[adjacentCity.name] = currentCity.name;
      }
    }

    // Select next city with the shortest known distance
    let minDistance = Infinity;
    for (let city of unvisitedCity) {
      if (shortestDistance[city.name] < minDistance) {
        minDistance = shortestDistance[city.name];
        currentCity = city;
      }
    }
  }

  // Reconstruct path
  let shortestPath = [];
  let currentCityName = destinationCity.name;

  while (currentCityName) {
    shortestPath.unshift(currentCityName);
    currentCityName = previousShortestDistanceCity[currentCityName];
  }

  // Debug logs
  console.log('Shortest Distances:', shortestDistance);
  console.log('Previous City Table:', previousShortestDistanceCity);
  console.log('Shortest Path:', shortestPath);

  return shortestPath;
}

dkstraShort(chennai, ambur)
// second time
function dkstraShort(startingCity, destinationCity){
     let currentCity = startingCity
     let shortestDistance = {}
     let previousShortestDistanceCity = {}
     let unvisitedCity = [startingCity]
     let visitedCity = {}

     shortestDistance[currentCity.name] = 0

     while(unvisitedCity.length > 0){
         visitedCity[currentCity.name] = true;
         unvisitedCity = unvisitedCity.filter((city) => city != currentCity)

         for(let adjacentCity of currentCity.routes.keys() ){
              let distance = currentCity.routes.get(adjacentCity)

              if( !visitedCity[adjacentCity.name] && !unvisitedCity.includes(currentCity) ){
                  unvisitedCity.push(adjacentCity)
              }

              let distanceToAdjacentCity = shortestDistance[currentCity.name] + distance;

              if( !distanceToAdjacentCity[currentCity.name] ||
                 distanceToAdjacentCity < shortestDistance[currentCity.name] ){
                     shortestDistance[adjacentCity.name] = distanceToAdjacentCity;
                     previousShortestDistanceCity[adjacentCity.name] = currentCity.name
                 }
         }

         let shortDistance = Infinity;
         for(let city of unvisitedCity){
             if( shortestDistance[city.name] <  shortDistance){
                 shortDistance = shortestDistance[city.name]
                 currentCity = city
             }
         }
     }


     let shortPath = []
     let currentDesCity = destinationCity.name;
     while(currentDesCity){
        shortPath.unshift(currentDesCity)
        currentDesCity = previousShortestDistanceCity[currentDesCity]
     }

     console.log(shortPath,shortestDistance)
     return shortPath
}