function make_form(schema) {
    let formElement = document.createElement("form");
    formElement.appendChild(partial_make_form(schema));
    return formElement;
}




function partial_make_form(schema) {
    if (Array.isArray(schema)) {
        return make_form_sequence(schema);
    } else {
        switch (schema.type) {
            case "string":
                return make_string_form(schema.label);
            case "integer":
                return make_integer_form(schema);
            case "group":
                return make_group_form(schema.content);
            default:
                throw new Exception("Unknown schema.type: " + schema.type);
        }
    }
}




function make_group_form(content) {
    let divElement = document.createElement("div");
    for (let s of content) {
        divElement.appendChild(partial_make_form(s));
    }
    return divElement;
}




function make_string_form(labelText) {
    /* make <input> */
    let inputElement = document.createElement("input");
    inputElement.type = "text";

    /* make <label> */
    let labelElement = document.createElement("label");
    labelElement.appendChild(document.createTextNode(labelText));
    labelElement.appendChild(inputElement);
    
    /* make <div> */
    let divElement = document.createElement("div");
    divElement.appendChild(labelElement);
    
    return divElement;
}

