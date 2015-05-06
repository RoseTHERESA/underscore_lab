var testArray = [45, 76, 22, 99];

var _ = {

    average: function(array) {
	var sum = 0;
        for (var i = 0; i < array.length; i++) {
        	sum += array[i];
        }
        return (sum / array.length);
    },


    contains: function(array, number) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === number) {
                return true;
            } 
            else{
            	return false;
            }
        }
     },


    first: function(array) {
        return array[0];
    },


    last: function(array) {
        return array[array.length - 1];
    },


    max: function(array) {
        for (var i = 0; i < array.length; i++) {
            var max = 0;
            if (array[0] > array[1]) {
                max = array[0];               
            }
        }
        return max
    },



    min: function(array) {
        for (var i = 0; i < array.length; i++) {
            var min = 0;
            if (array[0] < array[1]) {
                min = array[0];               
            }
        }
        return min
    },


	shuffle: function(array) {
        for (var i = 0; i < array.length; i++) {
            var rand = Math.floor(Math.random() * (array.length - 1));
            var temp = array[i];
            array[i] = array[rand];
            array[rand] = temp;
        }
      	return testArray;
    }

          


	/*sample:


	difference:


	indexOf:


	pluck: 



Part 2 */


	each: function(array, alert) {
        for (var i = 0; i < array.length; i++) {
        	alert(array[i]);
        }
    },


	compact: function(array) {
		var newArray = [];
		for (var i = 0; i < array.length; i++) {
			if (array[i] !== undefined) {
				newArray.push(array[i]);
			}
		}
		return newArray;
	},


	map: function(array, givenFunk) {
		var newArray = [];
		for (var i = 0; i < array.length; i++) {
			newArray.push(givenFunk(array[i]));
		} 
		return newArray
	},


	filter: function(array, givenFunk) {
		var newArray = [];
		for (var i = 0; i < array.length; i++) {
			if (givenFunk(array[i]) === true) {
				newArray.push(array[i]);
			}
		}
		return newArray
	},

};
