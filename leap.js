export const isLeap = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

// you will need to start with an expression that can go to either the smallest or largest year divisible
// dividing by 100 years is the only exception where it can be false and it will be a leap year
// you'll need to setup an if statement because dividing by 100 can go two directions and not limited to one answer like dividing by 4
// if divided by 4 and it is not true then it stops; dividing by 400 and it is not true then it stops
// so if dividing by 100 is true then it can go to dividing by 400 and check if it is true as well
// if dividing by 100 is false then we can check with dividing by 4 to check if it is true
