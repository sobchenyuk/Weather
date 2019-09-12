const CalculationProgress = value => {
    let val = value;
    if(value > 30) {
        val = value - 30
    }
    return (val * 100) / 30
};

const CalculationMinutes = value => {
    let val = value;
    if(value > 30) {
        val = value - 30
    }
    return 30 - val;
}

export { CalculationProgress, CalculationMinutes }