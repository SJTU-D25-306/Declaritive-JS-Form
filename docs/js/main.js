"use strict";

let bodyElement = document.getElementsByTagName("body")[0];

bodyElement.appendChild(make_form({
    type: "group",
    content: [
        {
            type: "string",
            label: "Name"
        },
        {
            type: "string",
            label: "Address"
        }
    ]
}));
