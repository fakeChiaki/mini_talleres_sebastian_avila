//Ejercicio 2 Codewars con Javascript.
//Ejercicio de RGB To Hex Conversion
//Link del ejercicio: https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

function rgb(r, g, b) {
    function clamp(value) {
        return Math.max(0, Math.min(255, value));
    }

    function toHex(value) {
        return clamp(value).toString(16).toUpperCase().padStart(2, "0");
    }

    return toHex(r) + toHex(g) + toHex(b);

}
