//Only half done so far

var app = require("../underscore.js")

describe("Average", function() {
	
	it("should return the average value in a given array", function() {
		expect(app.calculate([4, 6, 1, 1])).toEqual(3)
	});
});

describe("Contains", function() {
	it('should return true if a given value is present in an array', function() {
		expect(app.calculate([7, 55, 99], 99)).toBe(true)
	});
});

describe("First", function() {
	it('should return the first element of an array', function() {
		expect(app.calculate([3, 5, 7])).toEqual(3)
	});
});

describe("Max", function() {
	it('should return the maximum value in an array', function() {
		expect(app.calculate([10, 5, 100, 2, 1000])).toEqual(1000)
	});
});

describe("map, function", function() {
	it("maps a function to a new array", function() {
		expect(app.map([1,2,3], function(x) {
			return x * 2;	
		})).toEqual([2,4,6]);
		expect()

		expect(calc.map(["jAyA", "anDERs", "matTHew"], function(str){
			return str.toUpperCase();
		})).toEqual(["JAYA", "ANDERS", "MATTHEW"]);
	});
});

/*describe("Each", function() {
	it('should call a given function with each element in an array', function {
		expect
	})
})

*/

