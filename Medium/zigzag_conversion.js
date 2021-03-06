// 6. ZigZag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
// (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Example 2:
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// Example 3:
// Input: s = "A", numRows = 1
// Output: "A"



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */


 var convert = function(s, numRows) {
    if(numRows === 1) return s
    
    let array = []
    let n = numRows
    while(n > 0){
        array.push([])
        n--
    }
  
    let rowNum = 0
    let down = true
    
    for(let i=0; i<s.length; i++){
        if(down){
            array[rowNum].push(s[i])
            rowNum++
            if(rowNum === numRows-1) down = false
        }
        else{
            array[rowNum].push(s[i])
            rowNum--
            if(rowNum === 0) down = true
        }
    }
    let final = array.flat().join("")
    return final
};







var convert = function(s, numRows) {
    if(numRows === 1) return s
      
    let array = Array(numRows).fill().map(x => [])
    
    let rowPos = 0
    let downDirection = true
    
    for(let i=0; i<s.length; i++){
      array[rowPos].push(s[i])
      
      if(downDirection){
        rowPos++
        if(rowPos === numRows-1) downDirection = false
      } else{
        rowPos--
        if(rowPos === 0) downDirection = true
      }
    }
      
    return array.flat().join('') 
  };
