let list1 = [a, b, c];
let list2 = [1, 2, 3];

function zipList(data1, data2){
  let newdata = [];
  let sum41 = data1.length + data2.length;

  let itter = 0;
  for(let sum14 of sum41){
    if((sum14%2) === 0){
        newdata+= data1[itter];
    }
    if((sum14%2) === 1){
        newdata+= data2[itter];
        itter++;
    }
  }
  return newdata;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(data1, data2){
    return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(list1, list2));