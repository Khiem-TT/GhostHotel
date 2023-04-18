function MatrixElementsSum(arr: number[][]): number {
    let sum: number = 0;
    for (let i: number = 0; i < arr[0].length; i++) {
        if (arr[0][i] !== 0) sum += arr[0][i];
    }
    for (let j: number = 1; j < arr.length; j++) {
        for (let k: number = 0; k < arr[j].length; k++) {
            if (arr[j][k] !== 0) {
                let flag: boolean = true;
                for (let l: number = j - 1; l >= 0; l--) {
                    if (arr[l][k] === 0) flag = false;
                }
                if (flag) sum += arr[j][k];
            }
        }
    }
    return sum;
}

let matrix: number[][] = [[0, 2, 2, 3, 5], [0, 7, 0, 0, 0], [4, 0, 3, 1, 2]];
console.log(MatrixElementsSum(matrix));