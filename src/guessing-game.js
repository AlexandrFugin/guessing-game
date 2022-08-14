class GuessingGame {
    constructor() {
        //задает начальное значение 
        this.min = null;
        this.max = null;
    }

    setRange(min, max) {
        //определяет переменные 
        this.min = min;
        this.max = max;
    }

    guess() {
        //выводит результат 
        // console.log(Math.round((this.min + this.max) / 2));
        return Math.round((this.min + this.max) / 2);
         
    }

    lower() {
        //обновляет максимальное число
        this.max = Math.round((this.min + this.max) / 2);
    }

    greater() {
        //обновляет минимальное число
        this.min = Math.round((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
