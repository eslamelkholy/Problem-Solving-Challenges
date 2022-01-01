class UndergroundSystem {
  constructor() {
    this.checkInTime = {};
    this.timeBetweenStations = {};
  }

  checkIn(id, stationName, t) {
    this.checkInTime[id] = {
      stationName,
      t,
    };
  }

  checkOut(id, stationName, t) {
    const { count = 0, sum = 0 } = this.timeBetweenStations[this.checkInTime[id].stationName + stationName] || {};
    this.timeBetweenStations[this.checkInTime[id].stationName + stationName] = {
      count: count + 1,
      sum: sum + (t - this.checkInTime[id].t),
    };
  }

  getAverageTime(startStation, endStation) {
    const { count, sum } = this.timeBetweenStations[startStation + endStation];
    return sum / count;
  }
}

const undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, 'Leyton', 3);
undergroundSystem.checkOut(10, 'Paradise', 8);
undergroundSystem.getAverageTime('Leyton', 'Paradise'); // return 5.00000
undergroundSystem.checkIn(5, 'Leyton', 10);
undergroundSystem.checkOut(5, 'Paradise', 16);
undergroundSystem.getAverageTime('Leyton', 'Paradise'); // return 5.50000
undergroundSystem.checkIn(2, 'Leyton', 21);
undergroundSystem.checkOut(2, 'Paradise', 30);
undergroundSystem.getAverageTime('Leyton', 'Paradise'); // return 6.66667
