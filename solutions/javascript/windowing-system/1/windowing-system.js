// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// const size = new Size(1080, 764);
// size.width;
// // => 1080
// size.height;
// // => 764

// size.resize(1920, 1080);
// size.width;
// // => 1920
// size.height;
// // => 1080

//TASK 1 ---------------------------------------

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width;
  this.height = height;
};

//TASK 2 ----------------------------------------

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

//alternative way of doing the above

// const coordinates = {x: 0, y: 0}

// function move(newX, newY) {
//   return {
//     x: newX,
//     y: newY
//   }
// }

// const newCoordinates = move(20, 20)

// export class Size {
//   constructor(width = 80, height = 60) {
//     this.width = width
//     this.height = height
//   }

//   resize(width, height) {
//     this.width = width
//     this.height = height
//   }
// }

//TASK 3/TASK 4

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    let newWidth = newSize.width;
    let newHeight = newSize.height;

    if (newWidth > maxWidth) {
      newWidth = maxWidth;
    }

    if (newWidth < 1) {
      newWidth = 1;
    }

    if (newHeight > maxHeight) {
      newHeight = maxHeight;
    }

    if (newHeight < 1) {
      newHeight = 1;
    }

    this.size = new Size(newWidth, newHeight);
  }
  
  move(position) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    let newX = position.x;
    let newY = position.y;

    if (newX > maxX) {
      newX = maxX;
    }

    if (newX < 0) {
      newX = 0;
    }

    if (newY > maxY) {
      newY = maxY;
    }

    if (newY < 0) {
      newY = 0;
    }

    this.position.move(newX, newY);
  }
}

const programWindow = new ProgramWindow();

console.log("programWindow", programWindow);

//TASK 6

export function changeWindow(programWindow) {

  const newSize = new Size(400, 300)
  const newPosition = new Position(100, 150)
  programWindow.resize(newSize)
  programWindow.move(newPosition)

  
  return programWindow
}