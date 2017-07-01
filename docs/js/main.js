"use strict";

let bodyElement = document.getElementsByTagName("body")[0];

bodyElement.appendChild(makeForm({
    type: "group",
    content: [
        {
            type: "string",
            label: "Name"
        },
        {
            type: "string",
            label: "Address"
        },
        {
            type: "number",
            label: "Age",
            min: 0,
            step: 1
        }
    ]
}));
