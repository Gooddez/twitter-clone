export function formatNumber(number: number): string {
    const units = ["k", "M", "B", "T"];
    let formattedNumber = number.toString();

    for (let i = units.length - 1; i >= 0; i--) {
        const decimal = Math.pow(1000, i + 1);

        if (number >= decimal) {
            formattedNumber = (number / decimal).toFixed(1) + units[i];
            break;
        }
    }

    return formattedNumber;
}
