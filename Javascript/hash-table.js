function HashTable() {
    let table = [];
    this.put = function (key, value) {
        let position = hashPosition(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }
    this.remove = function (key) {
        table[hashPosition(key)] = undefined;
    }
    this.get = function (key) {
        return table[hashPosition(key)];
    }
    let hashPosition = function (key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 42;
    }
}

let hash = new HashTable();
hash.put('leia', 'leia@email.com')
hash.put('luke', 'luke@email.com')
hash.put('yoda', 'yoda@email.com')

console.log(hash.get('vader'))
console.log(hash.get('yoda'))
hash.remove('leia')
console.log(hash.get('leia'))