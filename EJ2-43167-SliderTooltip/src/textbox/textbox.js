var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "../input/input"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, input_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ROOT = 'e-textbox';
    var CONTROL = 'e-control';
    var HIDE_CLEAR = 'e-clear-icon-hide';
    var TEXTBOX_FOCUS = 'e-input-focus';
    var containerAttr = ['title', 'style', 'class'];
    /**
     * Represents the TextBox component that allows the user to enter the values based on it's type.
     * ```html
     * <input name='images' id='textbox'/>
     * ```
     * ```typescript
     * <script>
     *   var textboxObj = new TextBox();
     *   textboxObj.appendTo('#textbox');
     * </script>
     * ```
     */
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox(options, element) {
            var _this = _super.call(this, options, element) || this;
            _this.previousValue = null;
            _this.isAngular = false;
            _this.isHiddenInput = false;
            _this.isForm = false;
            _this.inputPreviousValue = null;
            _this.isVue = false;
            _this.textboxOptions = options;
            return _this;
        }
        /**
         * Calls internally if any of the property value is changed.
         * @private
         */
        TextBox.prototype.onPropertyChanged = function (newProp, oldProp) {
            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
                var prop = _a[_i];
                switch (prop) {
                    case 'floatLabelType':
                        input_1.Input.removeFloating(this.textboxWrapper);
                        input_1.Input.addFloating(this.respectiveElement, this.floatLabelType, this.placeholder);
                        break;
                    case 'enabled':
                        input_1.Input.setEnabled(this.enabled, this.respectiveElement, this.floatLabelType, this.textboxWrapper.container);
                        this.bindClearEvent();
                        break;
                    case 'width':
                        input_1.Input.setWidth(newProp.width, this.textboxWrapper.container);
                        break;
                    case 'value':
                        var prevOnChange = this.isProtectedOnChange;
                        this.isProtectedOnChange = true;
                        if (!this.isBlank(this.value)) {
                            this.value = this.value.toString();
                        }
                        this.isProtectedOnChange = prevOnChange;
                        input_1.Input.setValue(this.value, this.respectiveElement, this.floatLabelType, this.showClearButton);
                        if (this.isHiddenInput) {
                            this.element.value = this.respectiveElement.value;
                        }
                        this.inputPreviousValue = this.respectiveElement.value;
                        /* istanbul ignore next */
                        if ((this.isAngular || this.isVue) && this.preventChange === true) {
                            this.previousValue = this.isAngular ? this.value : this.previousValue;
                            this.preventChange = false;
                        }
                        else if (ej2_base_1.isNullOrUndefined(this.isAngular) || !this.isAngular
                            || (this.isAngular && !this.preventChange) || (this.isAngular && ej2_base_1.isNullOrUndefined(this.preventChange))) {
                            this.raiseChangeEvent();
                        }
                        break;
                    case 'htmlAttributes':
                        this.updateHTMLAttrToElement();
                        this.updateHTMLAttrToWrapper();
                        var attributes = this.element.attributes;
                        this.checkAttributes(true);
                        break;
                    case 'readonly':
                        input_1.Input.setReadonly(this.readonly, this.respectiveElement);
                        break;
                    case 'type':
                        if (this.respectiveElement.tagName !== 'TEXTAREA') {
                            this.respectiveElement.setAttribute('type', this.type);
                            this.raiseChangeEvent();
                        }
                        break;
                    case 'showClearButton':
                        if (this.respectiveElement.tagName !== 'TEXTAREA') {
                            input_1.Input.setClearButton(this.showClearButton, this.respectiveElement, this.textboxWrapper);
                            this.bindClearEvent();
                        }
                        break;
                    case 'enableRtl':
                        input_1.Input.setEnableRtl(this.enableRtl, [this.textboxWrapper.container]);
                        break;
                    case 'placeholder':
                        input_1.Input.setPlaceholder(this.placeholder, this.respectiveElement);
                        break;
                    case 'autocomplete':
                        if (this.autocomplete !== 'on' && this.autocomplete !== '') {
                            this.respectiveElement.autocomplete = this.autocomplete;
                        }
                        else {
                            this.removeAttributes(['autocomplete']);
                        }
                        break;
                    case 'cssClass':
                        this.updateCssClass(newProp.cssClass, oldProp.cssClass);
                        break;
                    case 'locale':
                        this.globalize = new ej2_base_2.Internationalization(this.locale);
                        this.l10n.setLocale(this.locale);
                        this.setProperties({ placeholder: this.l10n.getConstant('placeholder') }, true);
                        input_1.Input.setPlaceholder(this.placeholder, this.respectiveElement);
                        break;
                }
            }
        };
        /**
         * Gets the component name
         * @private
         */
        TextBox.prototype.getModuleName = function () {
            return 'textbox';
        };
        TextBox.prototype.isBlank = function (str) {
            return (!str || /^\s*$/.test(str));
        };
        TextBox.prototype.preRender = function () {
            if (!(ej2_base_3.isBlazor() && this.isServerRendered)) {
                this.cloneElement = this.element.cloneNode(true);
                this.formElement = ej2_base_2.closest(this.element, 'form');
                if (!ej2_base_1.isNullOrUndefined(this.formElement)) {
                    this.isForm = true;
                }
                /* istanbul ignore next */
                if (this.element.tagName === 'EJS-TEXTBOX') {
                    var ejInstance = ej2_base_1.getValue('ej2_instances', this.element);
                    var inputElement = this.multiline ?
                        this.createElement('textarea') :
                        this.createElement('input');
                    var index = 0;
                    for (index; index < this.element.attributes.length; index++) {
                        var attributeName = this.element.attributes[index].nodeName;
                        if (attributeName !== 'id') {
                            inputElement.setAttribute(attributeName, this.element.attributes[index].nodeValue);
                            inputElement.innerHTML = this.element.innerHTML;
                            if (attributeName === 'name') {
                                this.element.removeAttribute('name');
                            }
                        }
                    }
                    this.element.appendChild(inputElement);
                    this.element = inputElement;
                    ej2_base_1.setValue('ej2_instances', ejInstance, this.element);
                }
                this.updateHTMLAttrToElement();
                this.checkAttributes(false);
                if (this.element.tagName !== 'TEXTAREA') {
                    this.element.setAttribute('type', this.type);
                }
                this.element.setAttribute('role', 'textbox');
                this.globalize = new ej2_base_2.Internationalization(this.locale);
                var localeText = { placeholder: this.placeholder };
                this.l10n = new ej2_base_1.L10n('textbox', localeText, this.locale);
                if (this.l10n.getConstant('placeholder') !== '') {
                    this.setProperties({ placeholder: this.placeholder || this.l10n.getConstant('placeholder') }, true);
                }
                if (!this.element.hasAttribute('id')) {
                    this.element.setAttribute('id', ej2_base_2.getUniqueID('textbox'));
                }
                if (!this.element.hasAttribute('name')) {
                    this.element.setAttribute('name', this.element.getAttribute('id'));
                }
                if (this.element.tagName === 'INPUT' && this.multiline) {
                    this.isHiddenInput = true;
                    this.textarea = this.createElement('textarea');
                    this.element.parentNode.insertBefore(this.textarea, this.element);
                    this.element.setAttribute('type', 'hidden');
                    this.textarea.setAttribute('name', this.element.getAttribute('name'));
                    this.element.removeAttribute('name');
                    this.textarea.setAttribute('role', this.element.getAttribute('role'));
                    this.element.removeAttribute('role');
                    var attribute = ['required', 'minlength', 'maxlength'];
                    for (var i = 0; i < attribute.length; i++) {
                        if (this.element.hasAttribute(attribute[i])) {
                            var attr = this.element.getAttribute(attribute[i]);
                            this.textarea.setAttribute(attribute[i], attr);
                            this.element.removeAttribute(attribute[i]);
                        }
                    }
                }
            }
        };
        TextBox.prototype.checkAttributes = function (isDynamic) {
            var attrs = isDynamic ? ej2_base_1.isNullOrUndefined(this.htmlAttributes) ? [] : Object.keys(this.htmlAttributes) :
                ['placeholder', 'disabled', 'value', 'readonly', 'type', 'autocomplete'];
            for (var _i = 0, attrs_1 = attrs; _i < attrs_1.length; _i++) {
                var key = attrs_1[_i];
                if (!ej2_base_1.isNullOrUndefined(this.element.getAttribute(key))) {
                    switch (key) {
                        case 'disabled':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['enabled'] === undefined)) || isDynamic) {
                                var enabled = this.element.getAttribute(key) === 'disabled' || this.element.getAttribute(key) === '' ||
                                    this.element.getAttribute(key) === 'true' ? false : true;
                                this.setProperties({ enabled: enabled }, !isDynamic);
                            }
                            break;
                        case 'readonly':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['readonly'] === undefined)) || isDynamic) {
                                var readonly = this.element.getAttribute(key) === 'readonly' || this.element.getAttribute(key) === ''
                                    || this.element.getAttribute(key) === 'true' ? true : false;
                                this.setProperties({ readonly: readonly }, !isDynamic);
                            }
                            break;
                        case 'placeholder':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['placeholder'] === undefined)) || isDynamic) {
                                this.setProperties({ placeholder: this.element.placeholder }, !isDynamic);
                            }
                            break;
                        case 'autocomplete':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['autocomplete'] === undefined)) || isDynamic) {
                                var autoCompleteTxt = this.element.autocomplete === 'off' ? 'off' : 'on';
                                this.setProperties({ autocomplete: autoCompleteTxt }, !isDynamic);
                            }
                            break;
                        case 'value':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['value'] === undefined)) || isDynamic) {
                                this.setProperties({ value: this.element.value }, !isDynamic);
                            }
                            break;
                        case 'type':
                            // tslint:disable-next-line
                            if ((ej2_base_1.isNullOrUndefined(this.textboxOptions) || (this.textboxOptions['type'] === undefined)) || isDynamic) {
                                this.setProperties({ type: this.element.type }, !isDynamic);
                            }
                            break;
                    }
                }
            }
        };
        /**
         * To Initialize the control rendering
         * @private
         */
        TextBox.prototype.render = function () {
            var updatedCssClassValue = this.cssClass;
            if (!ej2_base_1.isNullOrUndefined(this.cssClass) && this.cssClass !== '') {
                updatedCssClassValue = this.getInputValidClassList(this.cssClass);
            }
            if (!(ej2_base_3.isBlazor() && this.isServerRendered)) {
                this.respectiveElement = (this.isHiddenInput) ? this.textarea : this.element;
                this.textboxWrapper = input_1.Input.createInput({
                    element: this.respectiveElement,
                    floatLabelType: this.floatLabelType,
                    properties: {
                        enabled: this.enabled,
                        enableRtl: this.enableRtl,
                        cssClass: updatedCssClassValue,
                        readonly: this.readonly,
                        placeholder: this.placeholder,
                        showClearButton: this.showClearButton
                    }
                });
                this.updateHTMLAttrToWrapper();
                if (this.isHiddenInput) {
                    this.respectiveElement.parentNode.insertBefore(this.element, this.respectiveElement);
                }
            }
            else {
                this.respectiveElement = this.element;
                this.textboxWrapper = { container: this.element.parentElement };
                if (this.showClearButton && !this.multiline) {
                    this.textboxWrapper.clearButton = this.textboxWrapper.container.querySelector('.e-clear-icon');
                    input_1.Input.wireClearBtnEvents(this.respectiveElement, this.textboxWrapper.clearButton, this.textboxWrapper.container);
                }
                if (this.floatLabelType === 'Auto') {
                    input_1.Input.wireFloatingEvents(this.respectiveElement);
                }
                // tslint:disable-next-line
                input_1.Input.bindInitialEvent({ element: this.respectiveElement, buttons: null, customTag: null, floatLabelType: this.floatLabelType, properties: this.properties });
            }
            this.wireEvents();
            if (!ej2_base_1.isNullOrUndefined(this.value)) {
                input_1.Input.setValue(this.value, this.respectiveElement, this.floatLabelType, this.showClearButton);
                if (this.isHiddenInput) {
                    this.element.value = this.respectiveElement.value;
                }
            }
            if (!ej2_base_1.isNullOrUndefined(this.value)) {
                this.initialValue = this.value;
                this.setInitialValue();
            }
            if (this.autocomplete !== 'on' && this.autocomplete !== '') {
                this.respectiveElement.autocomplete = this.autocomplete;
                // tslint:disable-next-line
            }
            else if (!ej2_base_1.isNullOrUndefined(this.textboxOptions) && (this.textboxOptions['autocomplete'] !== undefined)) {
                this.removeAttributes(['autocomplete']);
            }
            this.previousValue = this.value;
            this.inputPreviousValue = this.value;
            this.respectiveElement.defaultValue = this.respectiveElement.value;
            input_1.Input.setWidth(this.width, this.textboxWrapper.container);
            this.renderComplete();
        };
        TextBox.prototype.updateHTMLAttrToWrapper = function () {
            if (!ej2_base_1.isNullOrUndefined(this.htmlAttributes)) {
                for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (containerAttr.indexOf(key) > -1) {
                        if (key === 'class') {
                            var updatedClassValues = this.getInputValidClassList(this.htmlAttributes[key]);
                            if (updatedClassValues !== '') {
                                ej2_base_3.addClass([this.textboxWrapper.container], updatedClassValues.split(' '));
                            }
                        }
                        else if (key === 'style') {
                            var setStyle = this.textboxWrapper.container.getAttribute(key);
                            setStyle = !ej2_base_1.isNullOrUndefined(setStyle) ? (setStyle + this.htmlAttributes[key]) :
                                this.htmlAttributes[key];
                            this.textboxWrapper.container.setAttribute(key, setStyle);
                        }
                        else {
                            this.textboxWrapper.container.setAttribute(key, this.htmlAttributes[key]);
                        }
                    }
                }
            }
        };
        TextBox.prototype.updateHTMLAttrToElement = function () {
            if (!ej2_base_1.isNullOrUndefined(this.htmlAttributes)) {
                for (var _i = 0, _a = Object.keys(this.htmlAttributes); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (containerAttr.indexOf(key) < 0) {
                        this.element.setAttribute(key, this.htmlAttributes[key]);
                    }
                }
            }
        };
        TextBox.prototype.updateCssClass = function (newClass, oldClass) {
            input_1.Input.setCssClass(this.getInputValidClassList(newClass), [this.textboxWrapper.container], this.getInputValidClassList(oldClass));
        };
        TextBox.prototype.getInputValidClassList = function (inputClassName) {
            var result = inputClassName;
            if (!ej2_base_1.isNullOrUndefined(inputClassName) && inputClassName !== '') {
                result = (inputClassName.replace(/\s+/g, ' ')).trim();
            }
            return result;
        };
        TextBox.prototype.setInitialValue = function () {
            if (!this.isAngular) {
                this.respectiveElement.setAttribute('value', this.initialValue);
            }
        };
        TextBox.prototype.wireEvents = function () {
            ej2_base_1.EventHandler.add(this.respectiveElement, 'focus', this.focusHandler, this);
            ej2_base_1.EventHandler.add(this.respectiveElement, 'blur', this.focusOutHandler, this);
            ej2_base_1.EventHandler.add(this.respectiveElement, 'input', this.inputHandler, this);
            ej2_base_1.EventHandler.add(this.respectiveElement, 'change', this.changeHandler, this);
            if (this.isForm) {
                ej2_base_1.EventHandler.add(this.formElement, 'reset', this.resetForm, this);
            }
            this.bindClearEvent();
        };
        TextBox.prototype.resetValue = function (value) {
            var prevOnChange = this.isProtectedOnChange;
            this.isProtectedOnChange = true;
            this.value = value;
            this.isProtectedOnChange = prevOnChange;
        };
        TextBox.prototype.resetForm = function () {
            if (this.isAngular) {
                this.resetValue('');
            }
            else {
                this.resetValue(this.initialValue);
            }
            if (!ej2_base_1.isNullOrUndefined(this.textboxWrapper)) {
                var label = this.textboxWrapper.container.querySelector('.e-float-text');
                if (!ej2_base_1.isNullOrUndefined(label)) {
                    if ((ej2_base_1.isNullOrUndefined(this.initialValue) || this.initialValue === '')) {
                        label.classList.add('e-label-bottom');
                        label.classList.remove('e-label-top');
                    }
                    else if (this.initialValue !== '') {
                        label.classList.add('e-label-top');
                        label.classList.remove('e-label-bottom');
                    }
                }
            }
        };
        TextBox.prototype.focusHandler = function (args) {
            var eventArgs = {
                container: this.textboxWrapper.container,
                event: args,
                value: this.value
            };
            this.trigger('focus', eventArgs);
        };
        TextBox.prototype.focusOutHandler = function (args) {
            if (!(this.previousValue === null && this.value === null && this.respectiveElement.value === '') &&
                (this.previousValue !== this.respectiveElement.value)) {
                this.raiseChangeEvent(args, true);
            }
            var eventArgs = {
                container: this.textboxWrapper.container,
                event: args,
                value: this.value
            };
            this.trigger('blur', eventArgs);
        };
        TextBox.prototype.inputHandler = function (args) {
            // tslint:disable-next-line
            var textboxObj = this;
            var eventArgs = {
                event: args,
                value: this.respectiveElement.value,
                previousValue: this.inputPreviousValue,
                container: this.textboxWrapper.container
            };
            this.inputPreviousValue = this.respectiveElement.value;
            /* istanbul ignore next */
            if (this.isAngular) {
                textboxObj.localChange({ value: this.respectiveElement.value });
                this.preventChange = true;
            }
            if (this.isVue) {
                this.preventChange = true;
            }
            this.trigger('input', eventArgs);
            args.stopPropagation();
        };
        TextBox.prototype.changeHandler = function (args) {
            this.setProperties({ value: this.respectiveElement.value }, true);
            this.raiseChangeEvent(args, true);
            args.stopPropagation();
        };
        TextBox.prototype.raiseChangeEvent = function (event, interaction) {
            var eventArgs = {
                event: event,
                value: this.value,
                previousValue: this.previousValue,
                container: this.textboxWrapper.container,
                isInteraction: interaction ? interaction : false,
                isInteracted: interaction ? interaction : false
            };
            this.preventChange = false;
            this.trigger('change', eventArgs);
            this.previousValue = this.value;
        };
        TextBox.prototype.bindClearEvent = function () {
            if (this.showClearButton && this.respectiveElement.tagName !== 'TEXTAREA') {
                if (this.enabled) {
                    ej2_base_1.EventHandler.add(this.textboxWrapper.clearButton, 'mousedown touchstart', this.resetInputHandler, this);
                }
                else {
                    ej2_base_1.EventHandler.remove(this.textboxWrapper.clearButton, 'mousedown touchstart', this.resetInputHandler);
                }
            }
        };
        TextBox.prototype.resetInputHandler = function (event) {
            event.preventDefault();
            if (!(this.textboxWrapper.clearButton.classList.contains(HIDE_CLEAR))) {
                var previousValue = this.value;
                input_1.Input.setValue('', this.respectiveElement, this.floatLabelType, this.showClearButton);
                if (this.isHiddenInput) {
                    this.element.value = this.respectiveElement.value;
                }
                this.setProperties({ value: this.respectiveElement.value }, true);
                var eventArgs = {
                    event: event,
                    value: this.respectiveElement.value,
                    previousValue: this.inputPreviousValue,
                    container: this.textboxWrapper.container
                };
                this.trigger('input', eventArgs);
                this.inputPreviousValue = this.respectiveElement.value;
                this.raiseChangeEvent(event, true);
            }
        };
        TextBox.prototype.unWireEvents = function () {
            ej2_base_1.EventHandler.remove(this.respectiveElement, 'focus', this.focusHandler);
            ej2_base_1.EventHandler.remove(this.respectiveElement, 'blur', this.focusOutHandler);
            ej2_base_1.EventHandler.remove(this.respectiveElement, 'input', this.inputHandler);
            ej2_base_1.EventHandler.remove(this.respectiveElement, 'change', this.changeHandler);
            if (this.isForm) {
                ej2_base_1.EventHandler.remove(this.formElement, 'reset', this.resetForm);
            }
        };
        /**
         * Removes the component from the DOM and detaches all its related event handlers.
         * Also, it maintains the initial TextBox element from the DOM.
         * @method destroy
         * @return {void}
         */
        TextBox.prototype.destroy = function () {
            this.unWireEvents();
            if (!(ej2_base_3.isBlazor() && this.isServerRendered)) {
                if (this.element.tagName === 'INPUT' && this.multiline) {
                    ej2_base_2.detach(this.textboxWrapper.container.getElementsByTagName('textarea')[0]);
                    this.respectiveElement = this.element;
                    this.element.removeAttribute('type');
                }
                this.respectiveElement.value = this.respectiveElement.defaultValue;
                this.respectiveElement.classList.remove('e-input');
                this.removeAttributes(['aria-placeholder', 'aria-disabled', 'aria-readonly', 'aria-labelledby']);
                if (!ej2_base_1.isNullOrUndefined(this.textboxWrapper)) {
                    this.textboxWrapper.container.insertAdjacentElement('afterend', this.respectiveElement);
                    ej2_base_2.detach(this.textboxWrapper.container);
                }
                this.textboxWrapper = null;
                _super.prototype.destroy.call(this);
            }
            else {
                this.textboxWrapper = null;
            }
        };
        /**
         * Adding the icons to the TextBox component.
         * @param { string } position - Specify the icon placement on the TextBox. Possible values are append and prepend.
         * @param { string | string[] } iconClass - Icon classes which are need to add to the span element which is going to created.
         * Span element acts as icon or button element for TextBox.
         * @return {void}
         */
        TextBox.prototype.addIcon = function (position, icons) {
            input_1.Input.addIcon(position, icons, this.textboxWrapper.container, this.respectiveElement, this.createElement);
        };
        /**
         * Gets the properties to be maintained in the persisted state.
         * @return {string}
         */
        TextBox.prototype.getPersistData = function () {
            var keyEntity = ['value'];
            return this.addOnPersist(keyEntity);
        };
        /**
         * Adding the multiple attributes as key-value pair to the TextBox element.
         * @param { { [key: string]: string } } attributes - Specifies the attributes to be add to TextBox element.
         * @return {void}
         */
        TextBox.prototype.addAttributes = function (attributes) {
            for (var _i = 0, _a = Object.keys(attributes); _i < _a.length; _i++) {
                var key = _a[_i];
                if (key === 'disabled') {
                    this.setProperties({ enabled: false }, true);
                    input_1.Input.setEnabled(this.enabled, this.respectiveElement, this.floatLabelType, this.textboxWrapper.container);
                }
                else if (key === 'readonly') {
                    this.setProperties({ readonly: true }, true);
                    input_1.Input.setReadonly(this.readonly, this.respectiveElement);
                }
                else if (key === 'class') {
                    this.respectiveElement.classList.add(attributes[key]);
                }
                else if (key === 'placeholder') {
                    this.setProperties({ placeholder: attributes[key] }, true);
                    input_1.Input.setPlaceholder(this.placeholder, this.respectiveElement);
                }
                else if (key === 'rows' && this.respectiveElement.tagName === 'TEXTAREA') {
                    this.respectiveElement.setAttribute(key, attributes[key]);
                }
                else {
                    this.respectiveElement.setAttribute(key, attributes[key]);
                }
            }
        };
        /**
         * Removing the multiple attributes as key-value pair to the TextBox element.
         * @param { string[] } attributes - Specifies the attributes name to be removed from TextBox element.
         * @return {void}
         */
        TextBox.prototype.removeAttributes = function (attributes) {
            for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
                var key = attributes_1[_i];
                if (key === 'disabled') {
                    this.setProperties({ enabled: true }, true);
                    input_1.Input.setEnabled(this.enabled, this.respectiveElement, this.floatLabelType, this.textboxWrapper.container);
                }
                else if (key === 'readonly') {
                    this.setProperties({ readonly: false }, true);
                    input_1.Input.setReadonly(this.readonly, this.respectiveElement);
                }
                else if (key === 'placeholder') {
                    this.setProperties({ placeholder: null }, true);
                    input_1.Input.setPlaceholder(this.placeholder, this.respectiveElement);
                }
                else {
                    this.respectiveElement.removeAttribute(key);
                }
            }
        };
        /**
         * Sets the focus to widget for interaction.
         * @returns void
         */
        TextBox.prototype.focusIn = function () {
            if (document.activeElement !== this.respectiveElement && this.enabled) {
                this.respectiveElement.focus();
                if (this.textboxWrapper.container.classList.contains('e-input-group')
                    || this.textboxWrapper.container.classList.contains('e-outline')
                    || this.textboxWrapper.container.classList.contains('e-filled')) {
                    ej2_base_3.addClass([this.textboxWrapper.container], [TEXTBOX_FOCUS]);
                }
            }
        };
        /**
         * Remove the focus from widget, if the widget is in focus state.
         * @returns void
         */
        TextBox.prototype.focusOut = function () {
            if (document.activeElement === this.respectiveElement && this.enabled) {
                this.respectiveElement.blur();
                if (this.textboxWrapper.container.classList.contains('e-input-group')
                    || this.textboxWrapper.container.classList.contains('e-outline')
                    || this.textboxWrapper.container.classList.contains('e-filled')) {
                    ej2_base_3.removeClass([this.textboxWrapper.container], [TEXTBOX_FOCUS]);
                }
            }
        };
        __decorate([
            ej2_base_1.Property('text')
        ], TextBox.prototype, "type", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], TextBox.prototype, "readonly", void 0);
        __decorate([
            ej2_base_1.Property(null)
        ], TextBox.prototype, "value", void 0);
        __decorate([
            ej2_base_1.Property('Never')
        ], TextBox.prototype, "floatLabelType", void 0);
        __decorate([
            ej2_base_1.Property('')
        ], TextBox.prototype, "cssClass", void 0);
        __decorate([
            ej2_base_1.Property(null)
        ], TextBox.prototype, "placeholder", void 0);
        __decorate([
            ej2_base_1.Property('on')
        ], TextBox.prototype, "autocomplete", void 0);
        __decorate([
            ej2_base_1.Property({})
        ], TextBox.prototype, "htmlAttributes", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], TextBox.prototype, "multiline", void 0);
        __decorate([
            ej2_base_1.Property(true)
        ], TextBox.prototype, "enabled", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], TextBox.prototype, "showClearButton", void 0);
        __decorate([
            ej2_base_1.Property(false)
        ], TextBox.prototype, "enablePersistence", void 0);
        __decorate([
            ej2_base_1.Property(null)
        ], TextBox.prototype, "width", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "created", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "destroyed", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "change", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "blur", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "focus", void 0);
        __decorate([
            ej2_base_1.Event()
        ], TextBox.prototype, "input", void 0);
        TextBox = __decorate([
            ej2_base_2.NotifyPropertyChanges
        ], TextBox);
        return TextBox;
    }(ej2_base_1.Component));
    exports.TextBox = TextBox;
});
