class Polygon {
    constructor(int_array) {
        this.int_array = int_array;
    }

    get countSides() {
        return this.int_array.length
    }

    get perimeter() {
        let p = 0;
        let i;
        for (i in this.int_array) {
            p += this.int_array[i]
        }
        return p
    }
}

class Triangle extends Polygon {
    get isValid(){
        let a = this.int_array[0];
        let b = this.int_array[1];
        let c = this.int_array[2];
        if (a + b <= c || a + c <= b || b + c <= a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid(){
        let a = this.int_array[0];
        let b = this.int_array[1];
        let c = this.int_array[2];
        let d = this.int_array[3];
        if (a == b && b == c && c == d ) {
            return true
        } else {
            return false
        }
    }

    get area(){
        return this.int_array[0]*this.int_array[0]
    }
}