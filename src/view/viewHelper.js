import { SELECTOR } from "./viewConstans.js";
import { $ } from "../utils/utils.js";

export function renderTemplate(selector, html) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', html);
}

export function renderSection(sectionId, template) {
    if (!document.querySelector(`#${sectionId}`)) {
        renderTemplate(SELECTOR.PAGE_AREA, `<div id="${sectionId}">${template}</div>`);
    }
}

export function clearChildNode(selector) {
    $(selector).innerHTML = ``;
}

export function clearClassNode(className) {
    document.querySelectorAll(`.${className}`).forEach((item) => item.remove());
}

export function clearInput(selector) {
    $(selector).value = '';
}