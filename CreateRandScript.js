//function to get n random non-repeating elements from an array
	function getRandom(arr, n) {
	var result = new Array(n),
	len = arr.length,
	taken = new Array(len);
	if (n > len) {
		throw new RangeError("getRandom: more elements taken than available")
		};
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
	}

//type your URLs here one after another in quotes e.g. ['word1', 'word2', 'word3]
	//Organized alphabetically within gender.
	
	URLlist =  [];//put urls here
						 
	
	//get order for each list.
	mat1 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];

    sifiOrd = []
    sifiURLs = []
	
	for (i=0; i<=14;i++) {
        //Create a larger list of numbers
        newMat = getRandom(mat1,24);
        sifiOrd= sifiOrd.concat(newMat);
    };
    
    sifiOrd = getRandom(sifiOrd,360)

    for (i=0; i<=sifiOrd.length; i++){
        //push the URL associated w/ each number to the URL
        sifiURLs.push(URLlist[sifiOrd[i]])
    }

	//Embed data!	
	for (i=0; i<=sifiURLs.length; i++) {
		itemString = 'sifi'+(i+1).toString();
		
		Qualtrics.SurveyEngine.setEmbeddedData( itemString, sifiURLs[i]);
	};
	
	
	//Delete all those preliminary lists. It smooths the process a bit. 
	delete mat1, newMat