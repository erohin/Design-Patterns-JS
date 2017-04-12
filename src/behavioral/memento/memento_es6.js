class Memento {
    constructor(value) {
        this.value = value;
    }
}

var originator = {
    store: function(val) {
        return new Memento(val);
    },
    restore: function(memento) {
        return memento.value;
    }
};

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
}



module.exports = [originator, Caretaker];
