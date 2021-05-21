const kthGrammar = (row, column) => {
    if (row === 1 || column === 1) return 0;
    const lastResult = kthGrammar(row - 1, Math.ceil(k / 2));
    if (lastResult === 0) {
        if (column % 2) return 0;
        else return 1;
    } else {
        if (column % 2) return 1;
        return 0;
    }
};
