let order = prompt("Enter your order separated by commas:");
let orderarr = order.split(",");

console.log(orderarr);
alert("Your order:" + orderarr);

let newobject = toObject(orderarr);

function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
      rv[i] = arr[i];
    return rv;
  }
    console.log(toObject(orderarr));

    let cg = 0
    for (let properties in newobject){
        cg = cg + 1
    }
console.log("Total units in order: " + cg);

const orderFreq = newobject.reduce (
    (acc, curr) => acc.set(curr, (acc.get(curr) || 0) + 1),
    new Map()
  );
  const result = [...custFreq.entries()].reduce((acc, [key, value]) => {
    if (value >= 3.0) acc[key] = value;
    return acc;
  }, {});
  console.log(result);






