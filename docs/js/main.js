"use strict";

let bodyElement = document.getElementsByTagName("body")[0];

bodyElement.appendChild(make_form({
    type: "string",
    label: "Name"
}));
