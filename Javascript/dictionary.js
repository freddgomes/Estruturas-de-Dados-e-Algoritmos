
function Dictionary() {
    let items = {};
    this.has = function (key) {
        return key in items;
    }
    this.set = function (key, value) {
        items[key] = value;
    }
    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    }
    this.values = function () {
        let values = [];
        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    }
    this.keys = function () {
        return Object.keys(items);
    }
    this.clear = function () {
        items = {};
    }
    this.size = function () {
        return Object.keys(items).length;
    }
    this.getItems = function () {
        return items;
    }
}

let dictionary = new Dictionary();
dictionary.set("han", "hansolo@email.com");
dictionary.set("luke", "luke@email.com");
dictionary.set("leia", "leia@email.com");

console.log(dictionary.has("leia"))
console.log(dictionary.has("yoda"))
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('luke'))
console.log(dictionary.delete('luke'))
console.log(dictionary.size())
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.getItems())