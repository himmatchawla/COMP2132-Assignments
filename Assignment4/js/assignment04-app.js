// PART ONE
document.getElementById("error1").innerHTML = listImages(notAnArrayOfImages);
document.getElementById("error2").innerHTML = listImages(alsoNotAnArrayOfImages);

document.getElementById("numberArrayOutput").innerHTML = listImages(anArrayOfNumbers);
document.getElementById("booleanArrayOutput").innerHTML = listImages(anArrayOfBooleans);
document.getElementById("validImagesOutput").innerHTML = listImages(arrayOfImages);
document.getElementById("mixedImagesOutput").innerHTML = listImages(arrayOfSomeImages);

// PART TWO
document.getElementById("badLinks1").innerHTML = listLinks(notAnArrayOfLinks);
document.getElementById("badLinks2").innerHTML = listLinks(alsoNotAnArrayOfLinks);
document.getElementById("validLinks").innerHTML = listLinks(arrayOfLinks);
document.getElementById("mixedLinks").innerHTML = listLinks(anotherArrayOfLinks);

// PART THREE
document.getElementById("nameTest1").innerHTML = listNames("hello", "ul");
document.getElementById("nameTest2").innerHTML = listNames(["Alice", "Bob"], "div");
document.getElementById("nameTest3").innerHTML = listNames(["Alice", "Bob", "Charlie"], "ul");
document.getElementById("nameTest4").innerHTML = listNames(["Alice", "Bob", "Charlie"], "ol");
