
describe("Question Seven", function () {
    describe("MumsPalace.getCakeShopsWithTwoCakes function", function () {
        var theMumsPalace;
        beforeEach(
            function () {
                theMumsPalace = Controller.setup();
            }
        );
       
		it("should be defined", function () {
            expect( theMumsPalace.getCakeShopsWithTwoCakes()).toBeDefined()
        })
        it("should return a string", function () {
            expect(typeof theMumsPalace.getCakeShopsWithTwoCakes()).toBe('string');
        })

        it("should NOT be hard coded", function () {
            theMumsPalace = new MumsPalace()
            expect(theMumsPalace.getCakeShopsWithTwoCakes()).toBe('');
        })

        it("should correctly report details of CakeShops who has 2 Cakes in order", function () {
            expect(theMumsPalace.getCakeShopsWithTwoCakes()).toBe("The Bagel Shop, Chocolate. <01>\n	Angel cake  (United Kingdom) worth $20\n	Babka  (Poland) worth $15\nPatty Cakes, Butterscotch. <04>\n	Cheesecake  (Greece) worth $20\n	Panettone  (Italy) worth $15\n" )	
        })
    });
});