
describe("Question Three", function () {
   
    describe("MumsPalace.getCakeShop function", function () {
        var theMumsPalace;
        beforeEach(function () {
            theMumsPalace = Controller.setup();
        });

        it("should exist", function () {
            expect( theMumsPalace.getCakeShops).toBeDefined()
        })
        it("should return a string", function () {
            expect(typeof theMumsPalace.getCakeShops()).toBe('string')
        })

        it("should NOT be hard coded", function () {
            theMumsPalace = new MumsPalace()
            expect(theMumsPalace.getCakeShops()).toBe('')
        })
		
        it("should return correctly formatted data in the right order", function () {
            expect(theMumsPalace.getCakeShops()).toBe('The Bagel Shop, Chocolate. <01>\nHot Crossed Buns, Vanilla. <02>\nSugar Booger, Red Velvet. <03>\nPatty Cakes, Butterscotch. <04>\n');
			
        });
    });
});