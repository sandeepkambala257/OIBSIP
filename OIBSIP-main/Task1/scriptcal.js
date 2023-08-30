const insertValue = value => {
    const result = document.getElementById('result');
    result.value += value;
}

const clearResult = () => {
    const result = document.getElementById('result');
    result.value = '';
}

const calculateResult = () => {
    const result = document.getElementById('result');
    try {
        const calculatedResult = eval(result.value);
        result.value = calculatedResult;
    } catch (error) {
        result.value = 'Error';
    }
}
Ṇ