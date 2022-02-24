export function avgCarYear(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr.car_model_year;
  }, 0) / arr.length;
  
}