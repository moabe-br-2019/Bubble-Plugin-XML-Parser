function(instance, properties, context) {

instance.data.xmlFile = function (url, element) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var xmlString = xhr.responseText;
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(xmlString, "text/xml");
                var elementValue = xmlDoc.getElementsByTagName(element)[0].textContent;
                
                instance.publishState("xml_parsed_value", elementValue);
            } else {
                console.log("Failed to load XML from URL: " + xhr.status + " " + xhr.statusText);
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
};


    


}