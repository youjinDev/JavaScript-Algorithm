'use strict';
// 내 답안

function solution(arr){  
    let answer = 0;
    let array = [[0, 0, 0, 0, 0], ...arr, [0, 0, 0, 0, 0]];
    array.forEach(item => {
        item.unshift(0);
        item.push(0);
    });
    console.log(array);
    for (let i = 1; i <= array.length - 2 ; i++) {
        for (let j = 1 ; j <= array.length - 2; j++) {
            if (array[i][j] > array[i-1][j] && array[i][j] > array[i+1][j]) { // 위아래
                if (array[i][j] > array[i][j-1] && array[i][j] > array[i][j+1]) { // 양 옆
                    answer++;
                    console.log(array[i][j]);
                }
            }
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 9]];
console.log(solution(arr));
console.log((arr)); // 원본 배열이 조작되는 문제점이 있음