function makeForm(schema) {
    let formElement = document.createElement("form");
    formElement.appendChild(partialMakeForm(schema));
    return formElement;
}




function partialMakeForm(schema) {
    if (Array.isArray(schema)) {
        return makeFormSequence(schema);
    } else {
        switch (schema.type) {
            case "group":
                return makeGroupForm(schema.content);
            case "string":
                return makeStringForm(schema.label);
            case "number":
                return makeNumberForm(schema.label, schema.min, schema.max, schema.step);
            default:
                throw new Exception("Unknown schema.type: " + schema.type);
        }
    }
}




function makeGroupForm(content) {
    let divElement = document.createElement("div");
    for (let s of content) {
        divElement.appendChild(partialMakeForm(s));
    }
    return divElement;
}




function makeStringForm(labelText) {
    /* make <input> */
    let inputElement = document.createElement("input");
    inputElement.type = "text";

    /* make <label> */
    let labelElement = document.createElement("label");
    labelElement.appendChild(document.createTextNode(labelText));
    labelElement.appendChild(inputElement);
    
    return labelElement;
}



function makeNumberForm(labelString, minNumber = null, maxNumber = null, stepNumber = null) {
    let inputElement = makeInputElement("number");
    inputElement.min = minNumber;
    inputElement.max = maxNumber;
    inputElement.step = stepNumber;
    return makeLabelElement(labelString, inputElement);
}





/* helper functions */

function makeInputElement(typeString) {
    let e = document.createElement("input");
    e.type = typeString;
    return e;
}



function makeLabelElement(labelString, inputElement) {
    let e = document.createElement("label");
    e.appendChild(document.createTextNode(labelString));
    e.appendChild(inputElement);
    return e;
}
