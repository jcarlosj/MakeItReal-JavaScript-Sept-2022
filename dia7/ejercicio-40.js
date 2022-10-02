const persona = { 
    peso: 65, 
    estatura: 1.8, 
    bmi: function() { 
        return this.peso / this.estatura**2; 
    } 
};

console.log( persona.bmi() ); // 20.061728395061728