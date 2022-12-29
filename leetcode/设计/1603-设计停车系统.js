/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
  const CarTypeMap = {
    big: 1,
    medium: 2,
    small: 3
  }
  this.positionMap = {
    [CarTypeMap.big]: big,
    [CarTypeMap.medium]: medium,
    [CarTypeMap.small]: small
  }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.positionMap[carType] > 0) {
    this.positionMap[carType]--;
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

 const parkingSystem = new ParkingSystem(1, 1, 0);
 console.log(parkingSystem);
 parkingSystem.addCar(1); // 返回 true ，因为有 1 个空的大车位
 parkingSystem.addCar(2); // 返回 true ，因为有 1 个空的中车位
 parkingSystem.addCar(3); // 返回 false ，因为没有空的小车位
 parkingSystem.addCar(1);
 