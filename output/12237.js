// enum Direction {
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT,
//   }
//   let dir: string;
//   function getDirection(direction: Direction): string {
//       console.log(direction)
//     switch (direction) {
//       case Direction.UP:
//         dir = "UP";
//         break;
//       case Direction.DOWN:
//         dir = "DOWN";
//         break;
//       case Direction.LEFT:
//         dir = "LEFT";
//         break;
//       case Direction.RIGHT:
//         dir ="RIGHT"
//         break;
//     }
//     return dir;
//   }
//   console.log(getDirection(Direction.UP))
var Direction;
(function (Direction) {
    Direction["UP"] = "UP";
    Direction["DOWN"] = "DOWN";
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction || (Direction = {}));
var dir;
function getDirection(direction) {
    switch (direction) {
        case Direction.UP:
            dir = Direction.UP;
            break;
        case Direction.DOWN:
            dir = Direction.DOWN;
            break;
        case Direction.LEFT:
            dir = Direction.LEFT;
            break;
        case Direction.RIGHT:
            dir = Direction.RIGHT;
            break;
    }
    return dir;
}
console.log(getDirection(Direction.UP));
