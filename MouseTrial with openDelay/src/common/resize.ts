/**
 * Resize library
 */
import { isNullOrUndefined as isNOU, createElement, EventHandler, detach, Browser } from '@syncfusion/ej2-base';
let elementClass: string [] = ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'];
let targetElement: HTMLElement;
let selectedHandler: HTMLElement;
let originalWidth: number = 0;
let originalHeight: number = 0;
let originalX: number = 0;
let originalY: number = 0;
let originalMouseX: number = 0;
let originalMouseY: number = 0;
const RESIZE_HANDLER: string =  'e-resize-handle';
const FOCUSED_HANDLER: string = 'e-focused-handle';
let RESTRICT_LEFT: string [] = ['e-restrict-left'];
const RESIZE_WITHIN_VIEWPORT: string = 'e-resize-viewport';
let minHeight: number;
let maxHeight: number ;
let minWidth: number;
let maxWidth: number;
let containerElement: HTMLElement;
let resizeStart: Function = null;
let resize: Function = null;
let resizeEnd: Function = null;
let resizeWestWidth: number;
let setLeft: boolean = true;
let previousWidth: number = 0;
let setWidth: boolean = true;
// tslint:disable-next-line
let proxy: any;
let dialogBorderResize: string [] = ['north', 'west', 'east', 'south'];

/**
 * Provides information about a Resize event.
 */
export interface ResizeArgs {
    element: HTMLElement | string;
    direction: string;
    minHeight: number;
    minWidth: number;
    maxHeight?: number;
    maxWidth?: number;
    boundary?: HTMLElement | string;
    resizeBegin(e: MouseEvent): void;
    resizing(e: MouseEvent): void;
    resizeComplete(e: MouseEvent): void;
    // tslint:disable-next-line
    proxy: any;
}

export function createResize(args: ResizeArgs): void {
    resizeStart = args.resizeBegin;
    resize = args.resizing;
    resizeEnd = args.resizeComplete;
    targetElement = getDOMElement(args.element);
    containerElement = getDOMElement(args.boundary);
    let directions: string[] = args.direction.split(' ');
    for (let i: number = 0; i < directions.length; i++) {
        if (dialogBorderResize.indexOf(directions[i]) >= 0 && directions[i]) {
            setBorderResizeElm(directions[i]);
        } else if (directions[i].trim() !== '') {
            let resizeHandler: HTMLElement = createElement(
                'div', { className: 'e-icons ' + RESIZE_HANDLER + ' ' + 'e-' + directions[i] }
            );
            targetElement.appendChild(resizeHandler);
        }
    }
    minHeight = args.minHeight;
    minWidth = args.minWidth;
    maxWidth = args.maxWidth;
    maxHeight = args.maxHeight;
    if (args.proxy && args.proxy.element && args.proxy.element.classList.contains('e-dialog')) {
        wireEvents(args.proxy);
    } else {
        wireEvents();
    }
}

function setBorderResizeElm(direction: string): void {
    calculateValues();
    let borderBottom: HTMLElement = createElement('span', {
        attrs: {
            'unselectable': 'on', 'contenteditable': 'false'
        }
    });
    borderBottom.setAttribute('class', 'e-dialog-border-resize e-' + direction);
    if (direction === 'south') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '-webkit-fill-available';
        borderBottom.style.bottom = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'north') {
        borderBottom.style.height = '2px';
        borderBottom.style.width = '-webkit-fill-available';
        borderBottom.style.top = '0px';
        borderBottom.style.left = '0px';
    }
    if (direction === 'east') {
        borderBottom.style.height = '-webkit-fill-available';
        borderBottom.style.width = '2px';
        borderBottom.style.right = '0px';
    }
    if (direction === 'west') {
        borderBottom.style.height = '-webkit-fill-available';
        borderBottom.style.width = '2px';
        borderBottom.style.left = '0px';
    }
    targetElement.appendChild(borderBottom);
}

function getDOMElement(element: string | HTMLElement): HTMLElement {
    let domElement: HTMLElement;
    if (!isNOU(element)) {
        if (typeof(element) === 'string') {
            domElement =  document.querySelector(element);
        } else {
            domElement = element;
        }
    }
    return domElement;
}

// tslint:disable-next-line
function wireEvents(args?: any): void  {
    if (isNOU(args)) {
        args = this;
    }
    let resizers: NodeListOf<Element> = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (let i: number = 0; i < resizers.length; i++) {
        selectedHandler = resizers[i] as HTMLElement;
        EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
        let eventName: string = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
        EventHandler.add(selectedHandler, eventName, onTouchStart, args);
    }
    let borderResizers: NodeListOf<Element> = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!isNOU(borderResizers)) {
        for (let i: number = 0; i < borderResizers.length; i++) {
            selectedHandler = borderResizers[i] as HTMLElement;
            EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
            let eventName: string = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
            EventHandler.add(selectedHandler, eventName, onTouchStart, args);
        }
    }
}

/* istanbul ignore next */
function getEventType(e: string): string {
    return (e.indexOf('mouse') > -1) ? 'mouse' : 'touch';
}

/* istanbul ignore next */
function onMouseDown(e: MouseEvent): void {
    e.preventDefault();
    targetElement = (e.target as HTMLElement).parentElement;
    calculateValues();
    originalMouseX = e.pageX;
    originalMouseY = e.pageY;
    (e.target as HTMLElement).classList.add(FOCUSED_HANDLER);
    if (!isNOU(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    let target: Document | HTMLElement = (isNOU(containerElement)) ? document : containerElement;
    EventHandler.add(target, 'mousemove', onMouseMove, this);
    EventHandler.add(document, 'mouseup', onMouseUp, this);
    for (let i: number = 0; i < RESTRICT_LEFT.length; i++) {
        if (targetElement.classList.contains(RESTRICT_LEFT[i])) {
            setLeft = false;
        } else {
            setLeft = true;
        }
    }
}
/* istanbul ignore next */
function onMouseUp(e: MouseEvent): void {
    let touchMoveEvent: string = (Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    let touchEndEvent: string = (Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    let target: Document | HTMLElement = (isNOU(containerElement)) ? document : containerElement;
    EventHandler.remove(target, 'mousemove', onMouseMove);
    EventHandler.remove(target, touchMoveEvent , onMouseMove);
    let eventName: string = (Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
    EventHandler.remove(target, eventName, onMouseMove);
    if (!isNOU(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        document.body.querySelector('.' + FOCUSED_HANDLER).classList.remove(FOCUSED_HANDLER);
    }
    if (!isNOU(resizeEnd)) {
        proxy = this;
        resizeEnd(e, proxy);
    }
    EventHandler.remove(document, 'mouseup', onMouseUp);
    EventHandler.remove(document, touchEndEvent, onMouseUp);
}

/* istanbul ignore next */
function calculateValues(): void {
    originalWidth = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('width').replace('px', ''));
    originalHeight = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('height').replace('px', ''));
    originalX = targetElement.getBoundingClientRect().left;
    originalY = targetElement.getBoundingClientRect().top;
}
/* istanbul ignore next */
function onTouchStart(e: TouchEvent | MouseEvent): void {
    targetElement = (e.target as HTMLElement).parentElement;
    calculateValues();
    let coordinates: Touch | MouseEvent = (e as TouchEvent).touches ? (e as TouchEvent).changedTouches[0] : e as MouseEvent;
    originalMouseX = coordinates.pageX;
    originalMouseY = coordinates.pageY;
    if (!isNOU(resizeStart)) {
        proxy = this;
        if (resizeStart(e, proxy) === true) {
            return;
        }
    }
    let touchMoveEvent: string = (Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
    let touchEndEvent: string = (Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
    let target: Document | HTMLElement = (isNOU(containerElement)) ? document : containerElement;
    EventHandler.add(target, touchMoveEvent, onMouseMove, this);
    EventHandler.add(document, touchEndEvent, onMouseUp);
}

/* istanbul ignore next */
function onMouseMove(e: MouseEvent): void {
    if ((e.target as HTMLElement).classList.contains(RESIZE_HANDLER) && (e.target as HTMLElement).classList.contains(FOCUSED_HANDLER)) {
        selectedHandler =   e.target as HTMLElement;
    } else if (!isNOU(document.body.querySelector('.' + FOCUSED_HANDLER))) {
        selectedHandler = document.body.querySelector('.' + FOCUSED_HANDLER);
    }
    if (!isNOU(selectedHandler)) {
        let resizeTowards: string = '';
        for (let i: number = 0; i < elementClass.length; i++) {
            if (selectedHandler.classList.contains('e-' + elementClass[i])) {
              resizeTowards = elementClass[i];
            }
        }
        if (!isNOU(resize)) {
            proxy = this;
            resize(e, proxy);
        }
        switch (resizeTowards) {
            case 'south':
              resizeSouth(e);
              break;
            case 'north':
              resizeNorth(e);
              break;
            case 'west':
              resizeWest(e);
              break;
            case 'east':
              resizeEast(e);
              break;
            case 'south-east':
              resizeSouth(e);
              resizeEast(e);
              break;
            case 'south-west':
              resizeSouth(e);
              resizeWest(e);
              break;
            case 'north-east':
              resizeNorth(e);
              resizeEast(e);
              break;
            case 'north-west':
              resizeNorth(e);
              resizeWest(e);
              break;
            default: break;
          }
    }
}

/* istanbul ignore next */
function getClientRectValues (element: HTMLElement): ClientRect | DOMRect {
    return element.getBoundingClientRect();
}

/* istanbul ignore next */
// tslint:disable-next-line
function resizeSouth(e: any): void {
    let documentHeight: number = document.documentElement.clientHeight;
    let calculateValue: boolean = false;
    let containerRectValues: ClientRect;
    let coordinates: Touch | MouseEvent = (e as TouchEvent).touches ? (e as TouchEvent).changedTouches[0] : e as MouseEvent;
    let currentpageY: number = coordinates.pageY;
    let targetRectValues: ClientRect = getClientRectValues(targetElement);
    if (!isNOU(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    if (!isNOU(containerElement)) {
        calculateValue = true;
    } else if (isNOU(containerElement) && ((documentHeight - currentpageY) >= 0 || (targetRectValues.top < 0))) {
        calculateValue = true;
    }
    let calculatedHeight: number = originalHeight + (currentpageY - originalMouseY);
    calculatedHeight = (calculatedHeight > minHeight) ? calculatedHeight : minHeight;
    let containerTop: number = 0;
    if (!isNOU(containerElement)) {
        containerTop =  containerRectValues.top;
    }
    let borderValue: number = isNOU(containerElement) ? 0 : containerElement.offsetHeight - containerElement.clientHeight;
    let topWithoutborder: number = (targetRectValues.top - containerTop) - (borderValue / 2);
    topWithoutborder = (topWithoutborder < 0) ? 0 : topWithoutborder;
    if ( targetRectValues.top > 0 && (topWithoutborder + calculatedHeight) > maxHeight) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) { return; }
        targetElement.style.height = (maxHeight - parseInt(topWithoutborder.toString(), 10)) + 'px';
        return;
    }
    let targetTop: number = 0;
    if (calculateValue) {
        if (targetRectValues.top < 0 && (documentHeight + (targetRectValues.height + targetRectValues.top) > 0)) {
            targetTop = targetRectValues.top;
            if ((calculatedHeight + targetTop) <= 30 ) {
                calculatedHeight = (targetRectValues.height - (targetRectValues.height + targetRectValues.top)) + 30;
            }
        }
        if (((calculatedHeight + targetRectValues.top) >= maxHeight)) {
            targetElement.style.height = targetRectValues.height +
            (documentHeight - (targetRectValues.height + targetRectValues.top)) + 'px';
        }
        let calculatedTop: number = (isNOU(containerElement)) ? targetTop : topWithoutborder;
        if (calculatedHeight >= minHeight && ((calculatedHeight + calculatedTop) <= maxHeight)) {
            targetElement.style.height = calculatedHeight + 'px';
        }
    }
}

/* istanbul ignore next */
// tslint:disable-next-line
function resizeNorth(e: any): void {
    let calculateValue: boolean = false;
    let boundaryRectValues: ClientRect;
    let pageY: number = (getEventType(e.type) === 'mouse') ? e.pageY : e.touches[0].pageY;
    let targetRectValues: ClientRect = getClientRectValues(targetElement);
    if (!isNOU(containerElement)) {
        boundaryRectValues = getClientRectValues(containerElement);
    }
    if (!isNOU(containerElement) && (targetRectValues.top - boundaryRectValues.top) > 0 ) {
        calculateValue = true;
    } else if (isNOU(containerElement) && pageY > 0) {
        calculateValue = true;
    }
    let currentHeight: number = originalHeight - (pageY - originalMouseY);
    if (calculateValue) {
        if (currentHeight >= minHeight && currentHeight <= maxHeight) {
            let containerTop: number = 0;
            if (!isNOU(containerElement)) {
                containerTop = boundaryRectValues.top;
            }
            let top: number = (originalY - containerTop) + (pageY - originalMouseY);
            top = top > 0 ? top : 1;
            targetElement.style.height = currentHeight  + 'px';
            targetElement.style.top = top + 'px';
        }
    }
}

/* istanbul ignore next */
// tslint:disable-next-line
function resizeWest(e: any): void {
    let documentWidth: number = document.documentElement.clientWidth;
    let calculateValue: boolean = false;
    let rectValues: ClientRect;
    if (!isNOU(containerElement)) {
        rectValues = getClientRectValues(containerElement);
    }
    let pageX: number = (getEventType(e.type) === 'mouse') ? e.pageX : e.touches[0].pageX;
    let targetRectValues: ClientRect = getClientRectValues(targetElement);
    let borderValue: number = isNOU(containerElement) ? 0 : containerElement.offsetWidth - containerElement.clientWidth;
    let left: number = isNOU(containerElement) ? 0 : rectValues.left;
    let containerWidth: number = isNOU(containerElement) ? 0 : rectValues.width;
    if (isNOU(resizeWestWidth)) {
        if (!isNOU(containerElement)) {
            resizeWestWidth = (((targetRectValues.left - left) - borderValue / 2)) + targetRectValues.width ;
            resizeWestWidth = resizeWestWidth + (containerWidth - borderValue - resizeWestWidth);
        } else {
            resizeWestWidth = documentWidth;
        }
    }
    if (!isNOU(containerElement) &&
    (Math.floor((targetRectValues.left - rectValues.left) + targetRectValues.width +
    (rectValues.right - targetRectValues.right)) - borderValue) <= maxWidth) {
        calculateValue = true;
    } else if (isNOU(containerElement) && pageX >= 0) {
        calculateValue = true;
    }
    let calculatedWidth: number = originalWidth - (pageX - originalMouseX);
    if (setLeft) {
        calculatedWidth = (calculatedWidth > resizeWestWidth) ? resizeWestWidth : calculatedWidth;
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            let containerLeft: number = 0;
            if (!isNOU(containerElement)) {
                containerLeft = rectValues.left;
            }
            let left: number = (originalX - containerLeft) + (pageX - originalMouseX);
            left = (left > 0) ? left : 1;
            if (calculatedWidth !== previousWidth && setWidth) {
                targetElement.style.width = calculatedWidth + 'px';
            }
            if (setLeft) {
                targetElement.style.left = left + 'px';
                if (left === 1) {
                    setWidth = false;
                } else {
                    setWidth = true;
                }
            }
        }
    }
    previousWidth = calculatedWidth;
}

/* istanbul ignore next */
// tslint:disable-next-line
function resizeEast(e: any): void {
    let documentWidth: number = document.documentElement.clientWidth;
    let calculateValue: boolean = false;
    let containerRectValues: ClientRect;
    if (!isNOU(containerElement)) {
        containerRectValues = getClientRectValues(containerElement);
    }
    let coordinates: Touch | MouseEvent = (e as TouchEvent).touches ? (e as TouchEvent).changedTouches[0] : e as MouseEvent;
    let pageX: number = coordinates.pageX;
    let targetRectValues: ClientRect | DOMRect =  getClientRectValues(targetElement);
    if (!isNOU(containerElement) && (((targetRectValues.left - containerRectValues.left) + targetRectValues.width) < maxWidth
    || (targetRectValues.right - containerRectValues.left) > targetRectValues.width)) {
        calculateValue = true;
    } else if (isNOU(containerElement) && (documentWidth - pageX) > 0) {
        calculateValue = true;
    }
    let calculatedWidth: number = originalWidth + (pageX - originalMouseX);
    let containerLeft: number = 0;
    if (!isNOU(containerElement)) {
        containerLeft = containerRectValues.left;
    }
    if (((targetRectValues.left - containerLeft) + calculatedWidth) > maxWidth) {
        calculateValue = false;
        if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) { return; }
        targetElement.style.width = maxWidth - (targetRectValues.left - containerLeft) + 'px';
    }
    if (calculateValue) {
        if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
            targetElement.style.width = calculatedWidth + 'px';
        }
    }
}

/* istanbul ignore next */
export function setMinHeight(minimumHeight: number): void {
    minHeight = minimumHeight;
}

export function setMaxWidth(value: number): void {
    maxWidth = value;
}

export function setMaxHeight(value: number): void {
    maxHeight = value;
}

export function removeResize(): void {
    let handlers: NodeListOf<HTMLElement> = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
    for (let i: number = 0; i < handlers.length; i++ ) {
        detach(handlers[i]);
    }
    let borderResizers: NodeListOf<HTMLElement> = targetElement.querySelectorAll('.e-dialog-border-resize');
    if (!isNOU(borderResizers)) {
        for (let i: number = 0; i < borderResizers.length; i++ ) {
            detach(borderResizers[i]);
        }
    }
}