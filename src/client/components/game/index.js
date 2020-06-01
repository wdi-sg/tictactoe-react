let hdbBlocks = [
['0','+','0'],
['+','0','+'],
['0','+','+']
]

let occupiedUnits = [];

hdbBlocks.forEach((floor, floorIndex) => {
    floor.forEach((column, columnIndex) => {
        if (column === '+') {
            occupiedUnits.push([floorIndex, columnIndex])
        }
    })
})

console.log(occupiedUnits.length)

let numOfClusters = occupiedUnits.length;

for (let i=0; i < occupiedUnits.length-1; i++) {
    let possibleCombi = adjacentCombi(occupiedUnits[i])

    for (let j=i+1; j < occupiedUnits.length; j++) {
        let isAdjacent = compareWithCombi(occupiedUnits[j], possibleCombi)

        numOfClusters -= 1;
    }
}

function adjacentCombi(occupiedUnits) {
    const topLeft = [occupiedUnits[0]-1, occupiedUnits[1]-1];
    const topCenter = [occupiedUnits[0]-1, occupiedUnits[1]];
    const topRight = [occupiedUnits[0]-1, occupiedUnits[1]+1];
    const middleLeft = [occupiedUnits[0], occupiedUnits[1]-1];
    const middleRight = [occupiedUnits[0], occupiedUnits[1]+1];
    const bottomLeft = [occupiedUnits[0]+1, occupiedUnits[1]-1];
    const bottomCenter = [occupiedUnits[0], occupiedUnits[1]];
    const bottomRight = [occupiedUnits[0]+1, occupiedUnits[1]+1];

    let allCombi = [];
    allCombi.push(topLeft, topCenter, topRight, middleLeft, middleRight, bottomLeft, bottomCenter, bottomRight)

    return allCombi;
}

function compareWithCombi(nextOccupiedUnit, possibleCombi) {
    let isAdjacent = false;

    for (let k=0; k < possibleCombi.length; k++) {
        console.log(possibleCombi)
        if (possibleCombi[k][0] === nextOccupiedUnit[0] && possibleCombi[k][1] === nextOccupiedUnit[1]) {

            isAdjacent = true;
        }
    }

    return isAdjacent;
}

console.log(numOfClusters)




   // //Compare units on same floor
   //      if (occupiedUnits[i][0] === occupiedUnits[j][0]) {
   //          if (occupiedUnits[i][1] + 1 === occupiedUnits[j][1]) {
   //              numOfClusters -= 1;
   //          }
   //      //Compare units in same column
   //      } else if (occupiedUnits[i][1] === occupiedUnits[j][1]) {
   //          if (occupiedUnits[i][0] + 1 === occupiedUnits[j][0]) {
   //              numOfClusters -= 1;
   //          }
   //      //Compare units in diagonal
   //      } else if (occupiedUnits[i+1]) {

   //      }