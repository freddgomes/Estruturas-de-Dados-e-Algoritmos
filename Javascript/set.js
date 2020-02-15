function TSet() {
    let items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    }
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }
    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }
    this.clear = function () {
        items = {};
    }
    this.size = function () {
        return Object.keys(items).length;
    }
    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    }
    this.union = function (otherSet) {
        let unionSet = new TSet();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }
    this.intersection = function (otherSet) {
        let intersectionSet = new TSet();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
    this.difference = function (otherSet) {
        let differenceSet = new TSet();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    }
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        else {
            let values = this.values();
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }5
    }
}
let set = new TSet();
set.add('test');
set.add(7);
set.add('js');
console.log(set.size());
console.log(set.has(8));
console.log(set.has('test'));
console.log(set.delete(7));
console.log(set.delete(6));
console.log(set.has(7));
console.log(set.values());

let setA = new TSet(); setA.add(1); setA.add(2); setA.add(3); setA.add(9);
let setB = new TSet(); setB.add(3); setB.add(4); setB.add(2); setB.add(6);
let setC = new TSet(); setC.add(10); setC.add(1); setC.add(2); setC.add(3); setC.add(9);

let unionAB = setA.union(setB);
console.log(unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log(differenceAB.values());

console.log(setA.subset(setB));
console.log(setA.subset(setC));
