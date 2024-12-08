describe('increaseTtl function test', () => {
    it('should increase the income total by $50 from $200 to $250', () => {
        incTotal = 200
        const incOrExp = 'income';
        let amount = 50;
        let result = increaseTtl(amount, incOrExp);
        expect(result).toBe(incTotal = 250);
    });
    it('should increase the expense total by $50 from $100 to $150', () => {
        expTotal = 100
        const incOrExp = 'expense';
        let amount = 50;
        let result = increaseTtl(amount, incOrExp);
        expect(result).toBe(expTotal = 150);
    });
});

describe('reduceTtl function test', () => {
    it('should reduce the income total by $50 from $200 to $150', () => {
        incTotal = 200;
        const incOrExp = 'income';
        let amount = 50;
        let result = reduceTtl(amount, incOrExp);
        expect(result).toBe(incTotal = 150);
    });
    it('should reduce the expense total by $50 from $100 to $50', () => {
        expTotal = 100
        const incOrExp = 'expense';
        let amount = 50;
        let result = reduceTtl(amount, incOrExp);
        expect(result).toBe(expTotal = 50);
    });
});

describe('increaseBal function test', () => {
    it('should increase the balance total by $50 from $200 to $250', () => {
        balanceTotal = 200
        let amount = 50;
        let result = increaseBal(amount);
        expect(result).toBe(balanceTotal = 250);
    });
});

describe('reduceBal function test', () => {
    it('should decrease the balance total by $50 from $150 to $100', () => {
        balanceTotal = 150
        let amount = 50;
        let result = reduceBal(amount);
        expect(result).toBe(balanceTotal = 100);
    });
});