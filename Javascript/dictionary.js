
function Dictionary() {
    let items = new Array();

    this.add = function(key, value) {
        items[key] = value;
    }
    this.find = function(key) {
        return items[key];
    }
    this.remove = function(key) {
        delete items[key];
    }
    this.display = function() {
        Object.keys(items).forEach(k => {
            console.log(k + "=>" + items[k]);
        });
    }
    this.clear = function() {
        items = new Array();
    }
}

let dictionary = new Dictionary();
dictionary.add("han", "hansolo@email.com");
dictionary.add("luke", "luke@email.com");
dictionary.add("leia", "leia@email.com");

console.log(dictionary.find("leia"))
console.log(dictionary.find("yoda"))
console.log(dictionary.display())
console.log(dictionary.find('luke'))
console.log(dictionary.remove('luke'))
console.log(dictionary.display())