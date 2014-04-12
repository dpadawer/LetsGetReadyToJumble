function isAlphanumeric (c) {
	if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
		return true;
	}
	return false;
}

function jumble(arr) {	
	for (var j = 1; j < arr.length - 1; j++) {
		var swapLoc = Math.floor(Math.random() * (arr.length - 2) + 1);
		var tmp = arr[j];
		arr[j] = arr[swapLoc];
		arr[swapLoc] = tmp;
	}
	return arr;
}

$("p").each(function () {
	var words = ($(this)).html();
	
	var curWord = [];
	var jumbled = [];
	var curPos = 0;
	var inTag = false;
	for (; curPos < words.length; curPos++) {
		nextChar = words.charAt(curPos);
		if (isAlphanumeric(nextChar)) {
			if (inTag) {
				jumbled.push(nextChar);
			}
			else {
				curWord.push(nextChar);
			}
		}
		else {
			if (nextChar == '<') {
				inTag = true;
				curWord = jumble(curWord);
				for (var i = 0; i < curWord.length; i++) {
					jumbled.push(curWord[i]);
				}
				curWord = [];
			}
			else if (nextChar == '>') {
				inTag = false;
			}
			else {
				if (!inTag) {
					curWord = jumble(curWord);
					for (var i = 0; i < curWord.length; i++) {
						jumbled.push(curWord[i]);
					}
					curWord = [];
				}
			}
			jumbled.push(nextChar);
		}
	}	
	($(this)).html(jumbled.join(""));
});


















