/*Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as 
diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14) */
let opcao = prompt("Digite a opção desejada: \n 1 - Triângulo \n 2 - Retângulo \n 3 - Quadrado \n 4 - Trapézio \n 5 - Círculo \n 6 - Sair");
let base = parseFloat(prompt("Digite a base: "));
let altura = parseFloat(prompt("Digite a altura: "));       
function triangulo(base, altura) {
    return (base * altura) / 2;
}
function retangulo(base ,altura) {
    return base * altura
}
function quadrado(lado){
    return lado * lado
}
function trapezio(basemaior, basemenor, altura) {
    return (basemaior + basemenor) * altura / 2
}
function circulo(raio) {
    return 3.14 * raio ** 2 
}
do{
    switch (opcao) {
        case '1':
            let base = parseInt(prompt('digite a base'))
            let altura= parseInt(prompt('digite a altura'))
            alert(triangulo(base,altura))
        break
        case '2':
            let base1 = parseInt(prompt('digite a base'))
            let altura1 = parseInt(prompt('digite a altura'))
            alert(retangulo(base1,altura1))
            break
            case '3':
            let lado = parseInt(prompt('digite o lado'))
            alert(quadrado(lado))
            break
            case '4':
            let basema  = parseInt(prompt('qual sua base maior'))
            let baseme  = parseInt(prompt('qual sua base menor'))
            let altura2  = parseInt(prompt('qual sua altura'))
            alert(trapezio(basema, baseme, altura2))
            break
            
    }
    opcao = prompt("Digite a opção desejada: \n 1 - Triângulo \n 2 - Retângulo \n 3 - Quadrado \n 4 - Trapézio \n 5 - Círculo \n 6 - Sair");
} while(opcao != '6')
