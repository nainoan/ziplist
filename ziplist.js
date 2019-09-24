let list1 = ['a', 'b', 'c'];
let list2 = [1, 2, 3];

function zipList(data1, data2){
    let newData = [];
    for(let i = 0; i < data1.length; i++){
        newData.push(data1[i], data2[i]);
    }
    return newData;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(data1, data2){
    return _.flatten(_.zip(data1, data2));
}

console.log(zipListTheSimpleWay(list1, list2));