/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const n = position.length;
    const car_time_to_dest = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
      car_time_to_dest[i] = [position[i], (target - position[i]) / speed[i]];
    }
    console.log(car_time_to_dest)
    
    car_time_to_dest.sort((a, b) => a[0] - b[0]);
    
        console.log(car_time_to_dest)

    const cars_stack = [];
    
    for (let i = n - 1; i >= 0; i--) {
      if (cars_stack.length === 0 || (cars_stack.length > 0 && car_time_to_dest[i][1] > cars_stack[cars_stack.length - 1][1])) {
        cars_stack.push(car_time_to_dest[i]);
      }
    }
    
    return cars_stack.length;
    
};