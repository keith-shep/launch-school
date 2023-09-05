let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);
    // isMoving = true && (false || true);
    // isMoving = true;

  console.log(isMoving);

// output true
