	class MumsPalace{
	constructor () {
		this.allMyCakeShops = []
	}

	addCakeShop(newId, newFirstName, newFlavour, newPlace) {
		var newCakeShop = new CakeShop(newId, newFirstName, newFlavour, newPlace, this)
		this.allMyCakeShops.push(newCakeShop)
	}

	findCakeShop(targetShopId) {
		let foundShop = null
		for (let aShop of this.allMyCakeShops) {
			if (aShop.id === targetShopId) {
				foundShop = aShop
				break
			}
		}
		return foundShop
	}
	}