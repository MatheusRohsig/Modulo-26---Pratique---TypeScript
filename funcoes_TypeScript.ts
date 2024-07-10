

function multiplicaNumeros (numero1: number, numero2: number): number {
    const resultado = numero1 * numero2;
    return resultado;
};
const resultadoMultiplicacao = multiplicaNumeros(120, 10);
console.log(resultadoMultiplicacao);



function bemVindo(nome: string,): string {
    return `Olá ${nome}`;
};
const digaSeuNome = "srhth";
const saudacao = bemVindo(digaSeuNome);
console.log(saudacao)