import { SELECTOR } from "./viewConstans.js";
import { $ } from "../utils/utils.js";

export function renderBody(selector, html) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', html);
}

export function renderSection(sectionId, template) {
    if (!document.querySelector(`#${sectionId}`)) {
        renderBody(SELECTOR.PAGE_AREA, `<div id="${sectionId}">${template}</div>`);
    }
}

export function clearNode(selector) {
    $(selector).innerHTML = ``;
}