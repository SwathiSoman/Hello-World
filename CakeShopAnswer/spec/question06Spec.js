
describe("Question Six", function () {
   
    describe("CakeShop.hasTwoCakes function", function () {
        var aCakeShop, aCake;
        beforeEach(function () {
            aCakeShop = new CakeShop();
            aCake = new Cake();
        });

        it("should exist", function () {
            expect(aCakeShop.hasTwoCakes).toBeDefined();
        });

        it("should return a boolean", function () {
            expect(typeof aCakeShop.hasTwoCakes()).toBe('boolean');
        });

        it("should return true if the number of Cake that CakeShop has is equal two.", function () {
            aCakeShop = new CakeShop('tao', null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            expect(aCakeShop.hasTwoCakes()).toBe(true);
        });

        it("should return false if the number of Cake that CakeShop has is less than two.", function () {
            aCakeShop = new CakeShop('tao', null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            expect(aCakeShop.hasTwoCakes()).toBe(false);
        });

        it("should return false if the number of Cake that CakeShop owns is more than two.", function () {
            aCakeShop = new CakeShop('tao', null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            aCake = aCakeShop.addCake(null, null, null, null);
            expect(aCakeShop.hasTwoCakes()).toBe(false);
        });
    });
});