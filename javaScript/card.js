
export function formatToStringCard(input) {
    const numero = Array(16).fill(0)
    const inputArray = input.split("")

    for (let i = 0; i < inputArray.length; i++) {
        numero[ i ] = inputArray[ i ];
    }

    return `${numero.slice(0, 4).join("")} ${numero.slice(4, 8).join("")} ${numero.slice(8, 12).join("")} ${numero.slice(12, 16).join("")}`
}


