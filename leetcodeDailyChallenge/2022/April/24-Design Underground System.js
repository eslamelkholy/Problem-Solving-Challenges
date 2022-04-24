class UndergroundSystem {
  constructor() {
    this.checkinMap = new Map();
    this.averageTimeMap = new Map();
  }
  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkIn(id, stationName, t) {
    this.checkinMap.set(id, [stationName, t]);
  }
  /**
   * @param {number} id
   * @param {string} stationName
   * @param {number} t
   * @return {void}
   */
  checkOut(id, stationName, t) {
    const [station, time] = this.checkinMap.get(id);
    const checkoutTime = Math.abs(t - time);
    const stationDesitination = station + '-' + stationName;
    const averageBetween = this.averageTimeMap.get(stationDesitination);
    this.checkinMap.delete(id);

    if (!averageBetween) {
      this.averageTimeMap.set(stationDesitination, [checkoutTime]);
    } else {
      this.averageTimeMap.set(stationDesitination, [...averageBetween, checkoutTime]);
    }
    return checkoutTime;
  }
  /**
   * @param {string} startStation
   * @param {string} endStation
   * @return {number}
   */
  getAverageTime(startStation, endStation) {
    const stationDesitination = startStation + '-' + endStation;
    const averageBetween = this.averageTimeMap.get(stationDesitination);
    return averageBetween.reduce((a, b) => a + b, 0) / averageBetween.length;
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
const undergroundSystem = new UndergroundSystem();
console.log(undergroundSystem.checkIn(45, 'Leyton', 3));
console.log(undergroundSystem.checkIn(32, 'Paradise', 8));
console.log(undergroundSystem.checkIn(27, 'Leyton', 10));
console.log(undergroundSystem.checkOut(45, 'Waterloo', 15)); // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
console.log(undergroundSystem.checkOut(27, 'Waterloo', 20)); // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
console.log(undergroundSystem.checkOut(32, 'Cambridge', 22)); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
console.log(undergroundSystem.getAverageTime('Paradise', 'Cambridge')); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo')); // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
console.log(undergroundSystem.checkIn(10, 'Leyton', 24));
console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo')); // return 11.00000
console.log(undergroundSystem.checkOut(10, 'Waterloo', 38)); // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
console.log(undergroundSystem.getAverageTime('Leyton', 'Waterloo'));
