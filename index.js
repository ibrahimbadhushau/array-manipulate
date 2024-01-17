module.exports = {
    SumArray: (arr) => arr.reduce((a, b) => a + b, 0),

    MaxArray: (arr) => Math.max(...arr),

    MinArray: (arr) => Math.min(...arr),

    AvgArray: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,

    UniqArray: (arr) => [...new Set(arr)],

    DescSortArray: (arr) => arr.sort((a, b) => b - a),

    SortArray: (arr) => arr.sort((a, b) => b - a).reverse(),

    InsertArray: (arr, num,  index = arr.length) => {
        arr.splice(index, 0, num);
        return arr;
    },

    DeleteArray: (arr, num, index = null) => {
        const indexVal = index != null ? index : arr.indexOf(num);
        if(indexVal > -1) arr.splice(indexVal, 1);
        return arr;
    },

    MergeArray: (arr1, arr2) => arr1.concat(arr2),
}