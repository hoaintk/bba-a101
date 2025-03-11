const heightCm = 157;

const idealHeight = (heightCm%100)*9/10;
const maxWeight = (heightCm%100);
const minWeight = (heightCm%100)*8/10;


console.log("Cân nặng lý tưởng của bạn là: " + idealHeight + " kg. " +  "Cân nặng tối đa: " + maxWeight + " kg. " + "Cân nặng tối thiểu: " + minWeight + " kg.");
