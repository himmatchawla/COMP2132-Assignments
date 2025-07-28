//FUNCTION1 List Images
function listImages(imagesArray) {
  if (!Array.isArray(imagesArray)) {
    return `you must provide an array. '${imagesArray}' is not an array.`;
  }

  let htmlList = "<ul>";
  imagesArray.forEach(item => {
    if (typeof item === "string") {
      htmlList += `<li><img src="${pathToImages}${item}" alt="${item}"></li>`;
    } else {
      console.error("Skipping non-string value:", item);
    }
  });
  htmlList += "</ul>";
  return htmlList;
}

//FUNCTION2 List Links
function listLinks(linksArray) {
  if (!Array.isArray(linksArray)) {
    return `you must provide an array.`;
    
  }

  let htmlList = "<ul>";
  linksArray.forEach(item => {
    if (typeof item === "string") {
      htmlList += `<li><a href="${item}">${item}</a></li>`;
    } else {
      console.error("Invalid link item (not string):", item);
    }
  });
  htmlList += "</ul>";
  return htmlList;
}

//FUNCTION3 List Names
function listNames(namesArray, elementType = "ul") {
  if (!Array.isArray(namesArray)) {
    return "Error: First argument must be an array.";
  }
  if (namesArray.length < 2) {
    return "Error: Array must have at least 2 names.";
  }
  if (elementType !== "ul" && elementType !== "ol") {
    return "Error: Second argument must be 'ul' or 'ol'.";
  }

  let htmlElement = `<${elementType}>`;
  namesArray.forEach(name => {
    htmlElement += `<li>${name}</li>`;
  });
  htmlElement += `</${elementType}>`;
  return htmlElement;
}
