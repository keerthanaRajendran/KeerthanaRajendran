define(["require", "exports", "@syncfusion/ej2-base"], function (require, exports, ej2_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var elementClass = ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'];
    var targetElement;
    var selectedHandler;
    var originalWidth = 0;
    var originalHeight = 0;
    var originalX = 0;
    var originalY = 0;
    var originalMouseX = 0;
    var originalMouseY = 0;
    var RESIZE_HANDLER = 'e-resize-handle';
    var FOCUSED_HANDLER = 'e-focused-handle';
    var RESTRICT_LEFT = ['e-restrict-left'];
    var RESIZE_WITHIN_VIEWPORT = 'e-resize-viewport';
    var minHeight;
    var maxHeight;
    var minWidth;
    var maxWidth;
    var containerElement;
    var resizeStart = null;
    var resize = null;
    var resizeEnd = null;
    var resizeWestWidth;
    var setLeft = true;
    var previousWidth = 0;
    var setWidth = true;
    // tslint:disable-next-line
    var proxy;
    var dialogBorderResize = ['north', 'west', 'east', 'south'];
    function createResize(args) {
        resizeStart = args.resizeBegin;
        resize = args.resizing;
        resizeEnd = args.resizeComplete;
        targetElement = getDOMElement(args.element);
        containerElement = getDOMElement(args.boundary);
        var directions = args.direction.split(' ');
        for (var i = 0; i < directions.length; i++) {
            if (dialogBorderResize.indexOf(directions[i]) >= 0 && directions[i]) {
                setBorderResizeElm(directions[i]);
            }
            else if (directions[i].trim() !== '') {
                var resizeHandler = ej2_base_1.createElement('div', { className: 'e-icons ' + RESIZE_HANDLER + ' ' + 'e-' + directions[i] });
                targetElement.appendChild(resizeHandler);
            }
        }
        minHeight = args.minHeight;
        minWidth = args.minWidth;
        maxWidth = args.maxWidth;
        maxHeight = args.maxHeight;
        if (args.proxy && args.proxy.element && args.proxy.element.classList.contains('e-dialog')) {
            wireEvents(args.proxy);
        }
        else {
            wireEvents();
        }
    }
    exports.createResize = createResize;
    function setBorderResizeElm(direction) {
        calculateValues();
        var borderBottom = ej2_base_1.createElement('span', {
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
    function getDOMElement(element) {
        var domElement;
        if (!ej2_base_1.isNullOrUndefined(element)) {
            if (typeof (element) === 'string') {
                domElement = document.querySelector(element);
            }
            else {
                domElement = element;
            }
        }
        return domElement;
    }
    // tslint:disable-next-line
    function wireEvents(args) {
        if (ej2_base_1.isNullOrUndefined(args)) {
            args = this;
        }
        var resizers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
        for (var i = 0; i < resizers.length; i++) {
            selectedHandler = resizers[i];
            ej2_base_1.EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
            var eventName = (ej2_base_1.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
            ej2_base_1.EventHandler.add(selectedHandler, eventName, onTouchStart, args);
        }
        var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
        if (!ej2_base_1.isNullOrUndefined(borderResizers)) {
            for (var i = 0; i < borderResizers.length; i++) {
                selectedHandler = borderResizers[i];
                ej2_base_1.EventHandler.add(selectedHandler, 'mousedown', onMouseDown, args);
                var eventName = (ej2_base_1.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
                ej2_base_1.EventHandler.add(selectedHandler, eventName, onTouchStart, args);
            }
        }
    }
    /* istanbul ignore next */
    function getEventType(e) {
        return (e.indexOf('mouse') > -1) ? 'mouse' : 'touch';
    }
    /* istanbul ignore next */
    function onMouseDown(e) {
        e.preventDefault();
        targetElement = e.target.parentElement;
        calculateValues();
        originalMouseX = e.pageX;
        originalMouseY = e.pageY;
        e.target.classList.add(FOCUSED_HANDLER);
        if (!ej2_base_1.isNullOrUndefined(resizeStart)) {
            proxy = this;
            if (resizeStart(e, proxy) === true) {
                return;
            }
        }
        var target = (ej2_base_1.isNullOrUndefined(containerElement)) ? document : containerElement;
        ej2_base_1.EventHandler.add(target, 'mousemove', onMouseMove, this);
        ej2_base_1.EventHandler.add(document, 'mouseup', onMouseUp, this);
        for (var i = 0; i < RESTRICT_LEFT.length; i++) {
            if (targetElement.classList.contains(RESTRICT_LEFT[i])) {
                setLeft = false;
            }
            else {
                setLeft = true;
            }
        }
    }
    /* istanbul ignore next */
    function onMouseUp(e) {
        var touchMoveEvent = (ej2_base_1.Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
        var touchEndEvent = (ej2_base_1.Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
        var target = (ej2_base_1.isNullOrUndefined(containerElement)) ? document : containerElement;
        ej2_base_1.EventHandler.remove(target, 'mousemove', onMouseMove);
        ej2_base_1.EventHandler.remove(target, touchMoveEvent, onMouseMove);
        var eventName = (ej2_base_1.Browser.info.name === 'msie') ? 'pointerdown' : 'touchstart';
        ej2_base_1.EventHandler.remove(target, eventName, onMouseMove);
        if (!ej2_base_1.isNullOrUndefined(document.body.querySelector('.' + FOCUSED_HANDLER))) {
            document.body.querySelector('.' + FOCUSED_HANDLER).classList.remove(FOCUSED_HANDLER);
        }
        if (!ej2_base_1.isNullOrUndefined(resizeEnd)) {
            proxy = this;
            resizeEnd(e, proxy);
        }
        ej2_base_1.EventHandler.remove(document, 'mouseup', onMouseUp);
        ej2_base_1.EventHandler.remove(document, touchEndEvent, onMouseUp);
    }
    /* istanbul ignore next */
    function calculateValues() {
        originalWidth = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('width').replace('px', ''));
        originalHeight = parseFloat(getComputedStyle(targetElement, null).getPropertyValue('height').replace('px', ''));
        originalX = targetElement.getBoundingClientRect().left;
        originalY = targetElement.getBoundingClientRect().top;
    }
    /* istanbul ignore next */
    function onTouchStart(e) {
        targetElement = e.target.parentElement;
        calculateValues();
        var coordinates = e.touches ? e.changedTouches[0] : e;
        originalMouseX = coordinates.pageX;
        originalMouseY = coordinates.pageY;
        if (!ej2_base_1.isNullOrUndefined(resizeStart)) {
            proxy = this;
            if (resizeStart(e, proxy) === true) {
                return;
            }
        }
        var touchMoveEvent = (ej2_base_1.Browser.info.name === 'msie') ? 'pointermove' : 'touchmove';
        var touchEndEvent = (ej2_base_1.Browser.info.name === 'msie') ? 'pointerup' : 'touchend';
        var target = (ej2_base_1.isNullOrUndefined(containerElement)) ? document : containerElement;
        ej2_base_1.EventHandler.add(target, touchMoveEvent, onMouseMove, this);
        ej2_base_1.EventHandler.add(document, touchEndEvent, onMouseUp);
    }
    /* istanbul ignore next */
    function onMouseMove(e) {
        if (e.target.classList.contains(RESIZE_HANDLER) && e.target.classList.contains(FOCUSED_HANDLER)) {
            selectedHandler = e.target;
        }
        else if (!ej2_base_1.isNullOrUndefined(document.body.querySelector('.' + FOCUSED_HANDLER))) {
            selectedHandler = document.body.querySelector('.' + FOCUSED_HANDLER);
        }
        if (!ej2_base_1.isNullOrUndefined(selectedHandler)) {
            var resizeTowards = '';
            for (var i = 0; i < elementClass.length; i++) {
                if (selectedHandler.classList.contains('e-' + elementClass[i])) {
                    resizeTowards = elementClass[i];
                }
            }
            if (!ej2_base_1.isNullOrUndefined(resize)) {
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
    function getClientRectValues(element) {
        return element.getBoundingClientRect();
    }
    /* istanbul ignore next */
    // tslint:disable-next-line
    function resizeSouth(e) {
        var documentHeight = document.documentElement.clientHeight;
        var calculateValue = false;
        var containerRectValues;
        var coordinates = e.touches ? e.changedTouches[0] : e;
        var currentpageY = coordinates.pageY;
        var targetRectValues = getClientRectValues(targetElement);
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            containerRectValues = getClientRectValues(containerElement);
        }
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            calculateValue = true;
        }
        else if (ej2_base_1.isNullOrUndefined(containerElement) && ((documentHeight - currentpageY) >= 0 || (targetRectValues.top < 0))) {
            calculateValue = true;
        }
        var calculatedHeight = originalHeight + (currentpageY - originalMouseY);
        calculatedHeight = (calculatedHeight > minHeight) ? calculatedHeight : minHeight;
        var containerTop = 0;
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            containerTop = containerRectValues.top;
        }
        var borderValue = ej2_base_1.isNullOrUndefined(containerElement) ? 0 : containerElement.offsetHeight - containerElement.clientHeight;
        var topWithoutborder = (targetRectValues.top - containerTop) - (borderValue / 2);
        topWithoutborder = (topWithoutborder < 0) ? 0 : topWithoutborder;
        if (targetRectValues.top > 0 && (topWithoutborder + calculatedHeight) > maxHeight) {
            calculateValue = false;
            if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
                return;
            }
            targetElement.style.height = (maxHeight - parseInt(topWithoutborder.toString(), 10)) + 'px';
            return;
        }
        var targetTop = 0;
        if (calculateValue) {
            if (targetRectValues.top < 0 && (documentHeight + (targetRectValues.height + targetRectValues.top) > 0)) {
                targetTop = targetRectValues.top;
                if ((calculatedHeight + targetTop) <= 30) {
                    calculatedHeight = (targetRectValues.height - (targetRectValues.height + targetRectValues.top)) + 30;
                }
            }
            if (((calculatedHeight + targetRectValues.top) >= maxHeight)) {
                targetElement.style.height = targetRectValues.height +
                    (documentHeight - (targetRectValues.height + targetRectValues.top)) + 'px';
            }
            var calculatedTop = (ej2_base_1.isNullOrUndefined(containerElement)) ? targetTop : topWithoutborder;
            if (calculatedHeight >= minHeight && ((calculatedHeight + calculatedTop) <= maxHeight)) {
                targetElement.style.height = calculatedHeight + 'px';
            }
        }
    }
    /* istanbul ignore next */
    // tslint:disable-next-line
    function resizeNorth(e) {
        var calculateValue = false;
        var boundaryRectValues;
        var pageY = (getEventType(e.type) === 'mouse') ? e.pageY : e.touches[0].pageY;
        var targetRectValues = getClientRectValues(targetElement);
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            boundaryRectValues = getClientRectValues(containerElement);
        }
        if (!ej2_base_1.isNullOrUndefined(containerElement) && (targetRectValues.top - boundaryRectValues.top) > 0) {
            calculateValue = true;
        }
        else if (ej2_base_1.isNullOrUndefined(containerElement) && pageY > 0) {
            calculateValue = true;
        }
        var currentHeight = originalHeight - (pageY - originalMouseY);
        if (calculateValue) {
            if (currentHeight >= minHeight && currentHeight <= maxHeight) {
                var containerTop = 0;
                if (!ej2_base_1.isNullOrUndefined(containerElement)) {
                    containerTop = boundaryRectValues.top;
                }
                var top_1 = (originalY - containerTop) + (pageY - originalMouseY);
                top_1 = top_1 > 0 ? top_1 : 1;
                targetElement.style.height = currentHeight + 'px';
                targetElement.style.top = top_1 + 'px';
            }
        }
    }
    /* istanbul ignore next */
    // tslint:disable-next-line
    function resizeWest(e) {
        var documentWidth = document.documentElement.clientWidth;
        var calculateValue = false;
        var rectValues;
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            rectValues = getClientRectValues(containerElement);
        }
        var pageX = (getEventType(e.type) === 'mouse') ? e.pageX : e.touches[0].pageX;
        var targetRectValues = getClientRectValues(targetElement);
        var borderValue = ej2_base_1.isNullOrUndefined(containerElement) ? 0 : containerElement.offsetWidth - containerElement.clientWidth;
        var left = ej2_base_1.isNullOrUndefined(containerElement) ? 0 : rectValues.left;
        var containerWidth = ej2_base_1.isNullOrUndefined(containerElement) ? 0 : rectValues.width;
        if (ej2_base_1.isNullOrUndefined(resizeWestWidth)) {
            if (!ej2_base_1.isNullOrUndefined(containerElement)) {
                resizeWestWidth = (((targetRectValues.left - left) - borderValue / 2)) + targetRectValues.width;
                resizeWestWidth = resizeWestWidth + (containerWidth - borderValue - resizeWestWidth);
            }
            else {
                resizeWestWidth = documentWidth;
            }
        }
        if (!ej2_base_1.isNullOrUndefined(containerElement) &&
            (Math.floor((targetRectValues.left - rectValues.left) + targetRectValues.width +
                (rectValues.right - targetRectValues.right)) - borderValue) <= maxWidth) {
            calculateValue = true;
        }
        else if (ej2_base_1.isNullOrUndefined(containerElement) && pageX >= 0) {
            calculateValue = true;
        }
        var calculatedWidth = originalWidth - (pageX - originalMouseX);
        if (setLeft) {
            calculatedWidth = (calculatedWidth > resizeWestWidth) ? resizeWestWidth : calculatedWidth;
        }
        if (calculateValue) {
            if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
                var containerLeft = 0;
                if (!ej2_base_1.isNullOrUndefined(containerElement)) {
                    containerLeft = rectValues.left;
                }
                var left_1 = (originalX - containerLeft) + (pageX - originalMouseX);
                left_1 = (left_1 > 0) ? left_1 : 1;
                if (calculatedWidth !== previousWidth && setWidth) {
                    targetElement.style.width = calculatedWidth + 'px';
                }
                if (setLeft) {
                    targetElement.style.left = left_1 + 'px';
                    if (left_1 === 1) {
                        setWidth = false;
                    }
                    else {
                        setWidth = true;
                    }
                }
            }
        }
        previousWidth = calculatedWidth;
    }
    /* istanbul ignore next */
    // tslint:disable-next-line
    function resizeEast(e) {
        var documentWidth = document.documentElement.clientWidth;
        var calculateValue = false;
        var containerRectValues;
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            containerRectValues = getClientRectValues(containerElement);
        }
        var coordinates = e.touches ? e.changedTouches[0] : e;
        var pageX = coordinates.pageX;
        var targetRectValues = getClientRectValues(targetElement);
        if (!ej2_base_1.isNullOrUndefined(containerElement) && (((targetRectValues.left - containerRectValues.left) + targetRectValues.width) < maxWidth
            || (targetRectValues.right - containerRectValues.left) > targetRectValues.width)) {
            calculateValue = true;
        }
        else if (ej2_base_1.isNullOrUndefined(containerElement) && (documentWidth - pageX) > 0) {
            calculateValue = true;
        }
        var calculatedWidth = originalWidth + (pageX - originalMouseX);
        var containerLeft = 0;
        if (!ej2_base_1.isNullOrUndefined(containerElement)) {
            containerLeft = containerRectValues.left;
        }
        if (((targetRectValues.left - containerLeft) + calculatedWidth) > maxWidth) {
            calculateValue = false;
            if (targetElement.classList.contains(RESIZE_WITHIN_VIEWPORT)) {
                return;
            }
            targetElement.style.width = maxWidth - (targetRectValues.left - containerLeft) + 'px';
        }
        if (calculateValue) {
            if (calculatedWidth >= minWidth && calculatedWidth <= maxWidth) {
                targetElement.style.width = calculatedWidth + 'px';
            }
        }
    }
    /* istanbul ignore next */
    function setMinHeight(minimumHeight) {
        minHeight = minimumHeight;
    }
    exports.setMinHeight = setMinHeight;
    function setMaxWidth(value) {
        maxWidth = value;
    }
    exports.setMaxWidth = setMaxWidth;
    function setMaxHeight(value) {
        maxHeight = value;
    }
    exports.setMaxHeight = setMaxHeight;
    function removeResize() {
        var handlers = targetElement.querySelectorAll('.' + RESIZE_HANDLER);
        for (var i = 0; i < handlers.length; i++) {
            ej2_base_1.detach(handlers[i]);
        }
        var borderResizers = targetElement.querySelectorAll('.e-dialog-border-resize');
        if (!ej2_base_1.isNullOrUndefined(borderResizers)) {
            for (var i = 0; i < borderResizers.length; i++) {
                ej2_base_1.detach(borderResizers[i]);
            }
        }
    }
    exports.removeResize = removeResize;
});
