function TSet() {
    this.items = [];

    this.add = function (data) {
        if (this.items.indexOf(data) < 0) {
            this.items.push(data);
            return true;
        }
        return false;
    }

    this.remove = function (data) {
        const pos = this.items.indexOf(data);
        if (pos > -1) {
            this.items.splice(pos, 1);
            return true;
        }
        return false;
    }

    this.contains = function (data) {
        return this.items.indexOf(data) > -1;
    }
    this.union = function (set) {
        let tempSet = new TSet();
        for (let i = 0; i < this.items.length; i++) {
            tempSet.add(this.items[i]);
        }
        for (let i = 0; i < set.items.length; i++) {
            if (!tempSet.contains(set.items[i])) {
                tempSet.add(set.items[i]);
            }
        }
        return tempSet;
    }

    this.intersect = function (set) {
        let tempSet = new TSet();
        for (let i = 0; i < this.items.length; i++) {
            if (set.contains(this.items[i])) {
                tempSet.add(this.items[i]);
            }
        }
        return tempSet;
    }

    this.subset = function (set) {
        if (this.size() > set.size()) {
            return false;
        }
        for (let i = 0; i < this.items.length; i++) {
            if (!set.contains(this.items[i])) {
                return false;
            }
        }
        return true;
    }
    this.difference = function (set) {
        let tempSet = new TSet();
        for (let i = 0; i < this.items.length; ++i) {
            if (!set.contains(this.items[i])) {
                tempSet.add(this.items[i]);
            }
        }
        return tempSet;
    }

    this.display = function () {
        return console.log(this.items);
    }
    this.size = function () {
        return this.items.length;
    }
}
const set = new TSet();
set.add("dog");
set.add("dog");
set.add("cat");
set.add("pig");
set.add("bird");
set.remove("snake");
set.remove("cat");

const set2 = new TSet();
set2.add("shark");
set2.add("lion");
set2.add("dog");
set2.add("bird");

const set3 = new TSet();
set3.add("shark");
set3.add("lion");
set3.add("dog");
set3.add("pig");
set3.add("bird");
set3.add("spider");

let unionSet = set.union(set2);
let intersectSet = set.intersect(set2);
let differenceSet = set.difference(set2);

console.log("set 1: ");
set.display();
console.log("set 2: ");
set2.display();
console.log("set 3: ");
set3.display();

console.log("union: ");
unionSet.display();
console.log("intersect: ");
intersectSet.display();
console.log("difference: ");
differenceSet.display();
console.log("set is a subset of set3: ", set.subset(set3));
console.log("set2 is a subset of set3: ", set2.subset(set3));
console.log("set3 is a subset of set2: ", set3.subset(set2));
