// comece a criar a sua função add na linha abaixo
function add(a, b) {
    return a + b
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a, b) {

    let result = 0;

    for (let i = 0; i < b; i = add(i, 1)) {
        result = add(result, a)
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a, b) {

    if (b === undefined) {
        return undefined
    }

    let num = 1;
    let result = 0;
    
    for (let i = 0; i < b; i = add(i, 1)) {
        
        result = multiply(num, a)

        num = result
        
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return multiply(n, factorial(n-1))
    }

}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(f) {

    let a = 1;
    let b = 0;
    
    for (let i = 0; i <= add(f, 1); i = add(i, 1)) {
        
        if (i >= 2) { 
            
            let x = a;
            a = add(a, b);
            b = x;
        }
    }
    return b
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
