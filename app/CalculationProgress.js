const CalculationProgress = value => {
    let val = value
    if(value > 30) {
        val = value - 30
    }
    return Math.floor((val * 100) / 30)
};

export { CalculationProgress }