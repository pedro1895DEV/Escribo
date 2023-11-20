let valorInserido = process.argv[2];

const retornaSomatorio = (numInteiro) => {
    let valorTotal = 0;
    for (let i = 1; i <= numInteiro; i++) {
        if (i % 3 == 0 || i % 5 == 0 && i < numInteiro) {
            valorTotal += i
        }
    }
    return valorTotal
}

console.log(`O valor da soma é: ${retornaSomatorio(valorInserido)}`);

/*
const retornaSomatorio = (numInteiro) => {
    let valorTotal = 0;
    for (let i = 1; i <= numInteiro; i++) {
        if (i % 3 == 0 || i % 5 == 0 && i < numInteiro) {
            valorTotal += i
        }
    }
    return valorTotal
}

console.log(`O valor da soma é: ${retornaSomatorio(10)}`);
*/