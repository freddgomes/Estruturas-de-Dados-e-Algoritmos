function HashTable() {
    this.table = new Array(137);
    this.values = [];

    this.get = get;
    this.put = put;
    this.hash = hash;
    this.display = display;

    function get(key) {
        let hash = this.hash(key);
        return this.values[hash];

    }
    function put(key, data) {
        let pos = this.hash(key);
        if (this.table[pos] == undefined) {
            this.table[pos] = key;
            this.values[pos] = data;
        }
        else {
            while (this.table[pos] != undefined) {
                pos++;
            }
            this.table[pos] = key;
            this.values[pos] = value;
        }
    }
    function hash(key) {
        const H = 37;
        let total = 0;
        let str = key.toString();
        for (let i = 0; i < str.length; i++) {
            total += H * total + str.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }

    function display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                let key = this.table[i];
                let hash = this.hash(key);
                let data = this.values[hash];
                console.log(key + ": " + data);
            }
        }
    }
}

let hash = new HashTable();
hash.put('leia', 'leia@email.com')
hash.put('luke', 'luke@email.com')
hash.put('yoda', 'yoda@email.com')
hash.display();
console.log(hash.get('ben'));
console.log(hash.get('yoda'));
console.log(hash.get('leia'));
console.log(hash.get('vader'));