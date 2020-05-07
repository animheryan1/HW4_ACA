//1
function removeFirst(arr, i = 1) {
    if (arr.length === 0) return arr;
    if (i === arr.length) {
        arr.length--;
        return arr;
    }
    arr[i - 1] = arr[i];
    return removeFirst(arr, ++i);
}

console.log(removeFirst([6, 78, 'n', 0, 1]));
console.log(removeFirst([5]));
console.log(removeFirst([]));

//2

function invertObject(obj) {
    return Object.keys(obj).reduce((acc, item) => {
        if (acc[obj[item]]) {
            acc[obj[item]] = [...(acc[obj[item]] || []), item];
            return acc;
        }
        acc[obj[item]] = item;
        return acc;
    }, {});
}

console.log(invertObject({a: '1', b: '2'}));
console.log(invertObject({a: '1', b: '2', c: '2'}));
console.log(invertObject({a: '1', b: '2', c: '2', d: '2'}));

//3
let arr = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40},
    { book: "Animal Farm", readStatus: true, percent: 20},
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 } ,
    { book: "After Dark", readStatus: true, percent: 70 }
];
arr = arr.filter((item) => item.readStatus);
arr.sort((a,b) => (a.percent > b.percent) ? -1 : ((b.percent > a.percent) ? 1 : 0));
console.log(arr);

//4
function shiftArr(arr, count) {
    if (count === 0) {
        return arr;
    }
    if (count < 0) {
        return shiftArr(arr, arr.length + count);
    }
    arr.push(arr[0]);
    arr.shift();
    return shiftArr(arr, --count);
}

console.log(shiftArr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(shiftArr(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

//5

function makeTree(data){
    let root = {};
    data.forEach(el => {
        // Handle the root element
        if (el.parent === null) {
            root[el.id] = el;
            delete el.id;
            delete el.parent;
            return;
        }
        const parentEl = data[el.parent];
        parentEl[el.id] = el;
        delete el.id;
        delete el.parent;
    });

    return root;
}

let asd = makeTree([
    {parent: null, id:0},
    {parent: 0, id:1},
    {parent: 0, id:2},
    {parent: 1, id:3},
    {parent: 1, id:4},
    {parent: 2, id:5},
    {parent: 4, id:6},
]);
console.log(JSON.stringify(asd, null, 2));

//7
function Obj() {
    this.map = function(fn) {
        Object.keys(this).forEach(item => {
            this[item] = fn(this[item]);
        })
    };
}
let o = new Obj();

function fn(element){
    return element*2;
}
o.map(fn);

//6

function subsets(arr, r, index = 0, data = [], i = 0) {
    if (index === r) {
        for (let j = 0; j < r; j++) {
            console.log(data[j] + " ");
        }
        console.log("");
        return;
    }
    if (i >= arr.length) {
        return;
    }

    data[index] = arr[i];
    subsets(arr, r, index + 1, data, i + 1);

    subsets(arr, r, index, data, i + 1);
}

subsets([1, 2, 3, 4], 2);
subsets([1, 2, 3, 4], 3);
subsets([1, 2, 3, 4, 5], 3);