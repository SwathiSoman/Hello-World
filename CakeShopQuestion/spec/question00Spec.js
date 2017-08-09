
describe("Basic Check For Original Source Code", function () {

    describe("MumsPalace", function () {
        var theMumsPalace;
        beforeEach(function () {
            theMumsPalace = new MumsPalace();
        });

        describe("the allMyCakeShops property", function () {
            it("should have an .allMyCakeShops property", function () {
                expect(theMumsPalace.hasOwnProperty('allMyCakeShops')).toBeTruthy();
            });
            it("should reference an array", function () {
                expect(Array.isArray(theMumsPalace.allMyCakeShops)).toBeTruthy();
            });
        });

        it("should have an .addCakeShop function", function () {
            expect(typeof theMumsPalace.addCakeShop).toBe('function');
        });

        it("should have a .findCakeShop function", function () {
            expect(typeof theMumsPalace.findCakeShop).toBe('function');
        });

        it("should have a .sortCakeShop function", function () {
            expect(typeof theMumsPalace.sortCakeShop).toBe('function');
        });
    });

    describe("CakeShop", function () {
        var theCakeShop;
        beforeEach(function () {
            theCakeShop = new CakeShop();
        });

        it("should have an .id property", function () {
            expect(theCakeShop.hasOwnProperty('id')).toBeTruthy();
        });

        it("should have a .firstName property", function () {
            expect(theCakeShop.hasOwnProperty('firstName')).toBeTruthy();
        });

        it("should have a .lastName property", function () {
            expect(theCakeShop.hasOwnProperty('flavour')).toBeTruthy();
        });

        it("should have a .birthDate property", function () {
            expect(theCakeShop.hasOwnProperty('place')).toBeTruthy();
        });

     
        describe("the allMyCakes property", function () {
            it("should have an .allMyCakes reference", function () {
                expect(theCakeShop.hasOwnProperty('allMyCakes')).toBeTruthy();
            });

            it("should reference an array", function () {
                expect(Array.isArray(theCakeShop.allMyCakes)).toBeTruthy();
            });
        });

        it("should have a .sortCakes function", function () {
            expect(typeof theCakeShop.sortCakes).toBe('function');
        });
    });
});