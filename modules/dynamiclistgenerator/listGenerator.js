function listGenerator(theList, heading, headerNumber) {
    var listString = "";
    if (heading != "") {
        listString += "<h" + headerNumber + ">" + heading + "</h" + headerNumber + ">";
        listString += '<ul>'
        for (var key in theList) {
            if (theList.hasOwnProperty(key)) {
                if (typeof theList[key] === 'object') {
                    listString += '<li>';
                    listString += listGenerator(theList[key], key, 6);
                    listString += '</li>';
                } else {
                    listString += '<li>' + key + ' : ' + theList[key] + '</li>'
                }
            }
        }
        listString += '</ul>';
        return listString;
    }
}