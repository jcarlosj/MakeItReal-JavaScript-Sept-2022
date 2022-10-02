const auto = {
    velocidad: 0,
    acelerar: function() {
        this.velocidad++;
    },
    frenar: function() {
        if (this.velocidad > 0)
        this.velocidad--;
    }
};

console.log( auto.velocidad ); // 0
auto.acelerar();
console.log( auto.velocidad ); // 1
auto.frenar();
console.log( auto.velocidad ); // 0