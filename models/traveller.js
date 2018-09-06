const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey) => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(methods => methods.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // const modesOfTransport = this.getModesOfTransport();
  // const result =[];
  // modesOfTransport.forEach((mode, index, modesOfTransport) => {
  //   if (modesOfTransport.indexOf(mode) === index) {
  //     result.push(mode);
  //   };
  // });
  return this.modesOfTransport().filter((mode, index, array) => {
    return array.indexOf(mode) === index;
  });
  // return result;
};


module.exports = Traveller;
