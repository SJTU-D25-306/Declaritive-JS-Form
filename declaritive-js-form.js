function make_form(schema) {
    let formElement = document.createElement("form");
    formElement.appendChild(partial_make_form(schema));
    return formElement;
}




function partial_make_form(schema) {
    switch (schema.type) {
        case "string":
            return make_string_form(schema.label);
        case "integer":
            return make_integer_form(schema);
        default:
            throw new Exception("Unknown schema.type: " + schema.type);
    }
} 




function make_string_form(labelText) {
    /* make <input> */
    let inputElement = document.createElement("input");
    inputElement.type = "text";

    /* make <label> */
    let labelElement = document.createElement("label");
    labelElement.appendChild(document.createTextNode(labelText));
    labelElement.appendChild(inputElement);
    
    return labelElement;
}

