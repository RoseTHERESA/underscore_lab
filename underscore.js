var testArray = [45, 76, 22, 99];

var _ = {

        average: function(array) {
            var sum = 0;
            for (var i = 0; i < array.length; i++) {
                sum += array[i];
            }
            console.log(sum);
            return (sum / array.length);
        },

        console.log(_.average(testArray));


        contains: function(array, number) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === number) {
                    return true;
                } else return false;
            },

            console.log(_contains(testArray, 22));


            first: function(array) {
                return array[0];
            },

            console.log(_.first(testArray));


            last: function(array) {
                return array[array.length - 1];
            },

            console.log(_.last(testArray));


            max: function(array) {
                for (var i = 0; i < array.length; i++) {
                    var max = 0;
                    if (array[0] > array[1]) {
                            max = array[0];
                            return max
                        }
                    }
                },

                console.log(_.max(testArray));


                min: function(array) {
                    for (var i = 0; i > array.length; i++) {
                        var min = 0;
                        if (array[0] < array[1]) {
                                min = array[0];
                                return min
                            }
                        }
                    },

                    console.log


                 shuffle: function(array) {
                 	for (var i = 0; i > array.length; i++)
                 		var rand, temp;
                 		rand = Math.floor((i + 1) * Math.random());
                 		temp = array[rand];
                 		array[rand] = 

                 	 {
                 		Math.floor(Math.random)([0], [array.length - 1])
                 		}
                 		;
                 		
                 	}
                 }


	/*sample:


	difference:


	indexOf:


	pluck:



//Part 2


	each:


	compact:


	map:


	filter:
*/


                };