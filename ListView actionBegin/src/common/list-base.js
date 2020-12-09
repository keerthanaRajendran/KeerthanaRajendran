define(["require", "exports", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-base", "@syncfusion/ej2-data"], function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssClass = {
        li: 'e-list-item',
        ul: 'e-list-parent e-ul',
        group: 'e-list-group-item',
        icon: 'e-list-icon',
        text: 'e-list-text',
        check: 'e-list-check',
        checked: 'e-checked',
        selected: 'e-selected',
        expanded: 'e-expanded',
        textContent: 'e-text-content',
        hasChild: 'e-has-child',
        level: 'e-level',
        url: 'e-list-url',
        collapsible: 'e-icon-collapsible',
        disabled: 'e-disabled',
        image: 'e-list-img',
        iconWrapper: 'e-icon-wrapper',
        anchorWrap: 'e-anchor-wrap',
        navigable: 'e-navigable'
    };
    var ListBase;
    (function (ListBase) {
        ListBase.defaultMappedFields = {
            id: 'id',
            text: 'text',
            url: 'url',
            value: 'value',
            isChecked: 'isChecked',
            enabled: 'enabled',
            expanded: 'expanded',
            selected: 'selected',
            iconCss: 'iconCss',
            child: 'child',
            isVisible: 'isVisible',
            hasChildren: 'hasChildren',
            tooltip: 'tooltip',
            htmlAttributes: 'htmlAttributes',
            urlAttributes: 'urlAttributes',
            imageAttributes: 'imageAttributes',
            imageUrl: 'imageUrl',
            groupBy: null
        };
        var defaultAriaAttributes = {
            level: 1,
            listRole: 'presentation',
            itemRole: 'presentation',
            groupItemRole: 'group',
            itemText: 'list-item',
            wrapperRole: 'presentation'
        };
        var defaultListBaseOptions = {
            showCheckBox: false,
            showIcon: false,
            enableHtmlSanitizer: false,
            expandCollapse: false,
            fields: ListBase.defaultMappedFields,
            ariaAttributes: defaultAriaAttributes,
            listClass: '',
            itemClass: '',
            processSubChild: false,
            sortOrder: 'None',
            template: null,
            groupTemplate: null,
            headerTemplate: null,
            expandIconClass: 'e-icon-collapsible',
            moduleName: 'list',
            expandIconPosition: 'Right',
            itemNavigable: false
        };
        function createList(createElement, dataSource, options, isSingleLevel, componentInstance) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var type = typeofData(dataSource).typeof;
            if (type === 'string' || type === 'number') {
                return createListFromArray(createElement, dataSource, isSingleLevel, options, componentInstance);
            }
            else {
                return createListFromJson(createElement, dataSource, options, ariaAttributes.level, isSingleLevel, componentInstance);
            }
        }
        ListBase.createList = createList;
        function createListFromArray(createElement, dataSource, isSingleLevel, options, componentInstance) {
            var subChild = createListItemFromArray(createElement, dataSource, isSingleLevel, options, componentInstance);
            return generateUL(createElement, subChild, null, options);
        }
        ListBase.createListFromArray = createListFromArray;
        function createListItemFromArray(createElement, dataSource, isSingleLevel, options, componentInstance) {
            var subChild = [];
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var id = generateId();
            for (var i = 0; i < dataSource.length; i++) {
                if (ej2_base_1.isNullOrUndefined(dataSource[i])) {
                    continue;
                }
                var li = void 0;
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i],
                        options: curOpt
                    };
                    curOpt.itemCreating(curData);
                }
                if (isSingleLevel) {
                    li = generateSingleLevelLI(createElement, dataSource[i], undefined, null, null, [], null, id, i, options);
                }
                else {
                    li = generateLI(createElement, dataSource[i], undefined, null, null, options, componentInstance);
                }
                if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: dataSource[i],
                        item: li,
                        options: curOpt
                    };
                    curOpt.itemCreated(curData);
                }
                subChild.push(li);
            }
            return subChild;
        }
        ListBase.createListItemFromArray = createListItemFromArray;
        function createListItemFromJson(createElement, dataSource, options, level, isSingleLevel, componentInstance) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var fields = ej2_base_1.extend({}, ListBase.defaultMappedFields, curOpt.fields);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var id;
            var checkboxElement = [];
            if (level) {
                ariaAttributes.level = level;
            }
            var child = [];
            var li;
            var anchorElement;
            if (dataSource && dataSource.length && !ej2_base_1.isNullOrUndefined(typeofData(dataSource).item) &&
                !typeofData(dataSource).item.hasOwnProperty(fields.id)) {
                id = generateId();
            }
            for (var i = 0; i < dataSource.length; i++) {
                var fieldData = getFieldValues(dataSource[i], fields);
                if (ej2_base_1.isNullOrUndefined(dataSource[i])) {
                    continue;
                }
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: fieldData[fields.text],
                        options: curOpt,
                        fields: fields
                    };
                    curOpt.itemCreating(curData);
                }
                var curItem = dataSource[i];
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    fieldData = getFieldValues(dataSource[i], fields);
                }
                if (fieldData.hasOwnProperty(fields.id) && !ej2_base_1.isNullOrUndefined(fieldData[fields.id])) {
                    id = fieldData[fields.id];
                }
                var innerEle = [];
                if (curOpt.showCheckBox) {
                    if (curOpt.itemNavigable && (fieldData[fields.url] || fieldData[fields.urlAttributes])) {
                        checkboxElement.push(createElement('input', { className: exports.cssClass.check, attrs: { type: 'checkbox' } }));
                    }
                    else {
                        innerEle.push(createElement('input', { className: exports.cssClass.check, attrs: { type: 'checkbox' } }));
                    }
                }
                if (isSingleLevel === true) {
                    if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss) && !ej2_base_1.isNullOrUndefined(fieldData[fields.iconCss])) {
                        innerEle.push(createElement('span', { className: exports.cssClass.icon + ' ' + fieldData[fields.iconCss] }));
                    }
                    li = generateSingleLevelLI(createElement, curItem, fieldData, fields, curOpt.itemClass, innerEle, (curItem.hasOwnProperty('isHeader') &&
                        curItem.isHeader) ? true : false, id, i, options);
                    anchorElement = li.querySelector('.' + exports.cssClass.anchorWrap);
                    if (curOpt.itemNavigable && checkboxElement.length) {
                        ej2_base_2.prepend(checkboxElement, li.firstElementChild);
                    }
                }
                else {
                    li = generateLI(createElement, curItem, fieldData, fields, curOpt.itemClass, options, componentInstance);
                    li.classList.add(exports.cssClass.level + '-' + ariaAttributes.level);
                    li.setAttribute('aria-level', ariaAttributes.level.toString());
                    anchorElement = li.querySelector('.' + exports.cssClass.anchorWrap);
                    if (fieldData.hasOwnProperty(fields.tooltip)) {
                        li.setAttribute('title', fieldData[fields.tooltip]);
                    }
                    if (fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                        setAttribute(li, fieldData[fields.htmlAttributes]);
                    }
                    if (fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled] === false) {
                        li.classList.add(exports.cssClass.disabled);
                    }
                    if (fieldData.hasOwnProperty(fields.isVisible) && fieldData[fields.isVisible] === false) {
                        li.style.display = 'none';
                    }
                    if (fieldData.hasOwnProperty(fields.imageUrl) && !ej2_base_1.isNullOrUndefined(fieldData[fields.imageUrl])
                        && !curOpt.template) {
                        var attr = { src: fieldData[fields.imageUrl] };
                        ej2_base_1.merge(attr, fieldData[fields.imageAttributes]);
                        var imageElemnt = createElement('img', { className: exports.cssClass.image, attrs: attr });
                        if (anchorElement) {
                            anchorElement.insertAdjacentElement('afterbegin', imageElemnt);
                        }
                        else {
                            ej2_base_2.prepend([imageElemnt], li.firstElementChild);
                        }
                    }
                    if (curOpt.showIcon && fieldData.hasOwnProperty(fields.iconCss) &&
                        !ej2_base_1.isNullOrUndefined(fieldData[fields.iconCss]) && !curOpt.template) {
                        var iconElement = void 0;
                        iconElement = createElement('div', { className: exports.cssClass.icon + ' ' + fieldData[fields.iconCss] });
                        if (anchorElement) {
                            anchorElement.insertAdjacentElement('afterbegin', iconElement);
                        }
                        else {
                            ej2_base_2.prepend([iconElement], li.firstElementChild);
                        }
                    }
                    if (innerEle.length) {
                        ej2_base_2.prepend(innerEle, li.firstElementChild);
                    }
                    if (curOpt.itemNavigable && checkboxElement.length) {
                        ej2_base_2.prepend(checkboxElement, li.firstElementChild);
                    }
                    processSubChild(createElement, fieldData, fields, dataSource, curOpt, li, ariaAttributes.level);
                }
                if (anchorElement) {
                    ej2_base_2.addClass([li], [exports.cssClass.navigable]);
                }
                if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: dataSource[i],
                        text: fieldData[fields.text],
                        item: li,
                        options: curOpt,
                        fields: fields
                    };
                    curOpt.itemCreated(curData);
                }
                checkboxElement = [];
                child.push(li);
            }
            return child;
        }
        ListBase.createListItemFromJson = createListItemFromJson;
        function createListFromJson(createElement, dataSource, options, level, isSingleLevel, componentInstance) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var li = createListItemFromJson(createElement, dataSource, options, level, isSingleLevel, componentInstance);
            return generateUL(createElement, li, curOpt.listClass, options);
        }
        ListBase.createListFromJson = createListFromJson;
        function getSiblingLI(elementArray, element, isPrevious) {
            exports.cssClass = getModuleClass(defaultListBaseOptions.moduleName);
            if (!elementArray || !elementArray.length) {
                return void 0;
            }
            var siblingLI;
            var liIndex;
            var liCollections = Array.prototype.slice.call(elementArray);
            if (element) {
                liIndex = indexOf(element, liCollections);
            }
            else {
                liIndex = (isPrevious === true ? liCollections.length : -1);
            }
            siblingLI = liCollections[liIndex + (isPrevious === true ? -1 : 1)];
            while (siblingLI && (!ej2_base_2.isVisible(siblingLI) || siblingLI.classList.contains(exports.cssClass.disabled))) {
                liIndex = liIndex + (isPrevious === true ? -1 : 1);
                siblingLI = liCollections[liIndex];
            }
            return siblingLI;
        }
        ListBase.getSiblingLI = getSiblingLI;
        function indexOf(item, elementArray) {
            if (!elementArray || !item) {
                return void 0;
            }
            else {
                var liCollections = elementArray;
                liCollections = Array.prototype.slice.call(elementArray);
                return liCollections.indexOf(item);
            }
        }
        ListBase.indexOf = indexOf;
        function groupDataSource(dataSource, fields, sortOrder) {
            if (sortOrder === void 0) { sortOrder = 'None'; }
            var curFields = ej2_base_1.extend({}, ListBase.defaultMappedFields, fields);
            var cusQuery = new ej2_data_1.Query().group(curFields.groupBy);
            cusQuery = addSorting(sortOrder, 'key', cusQuery);
            var ds = getDataSource(dataSource, cusQuery);
            dataSource = [];
            for (var j = 0; j < ds.length; j++) {
                var itemObj = ds[j].items;
                var grpItem = {};
                var hdr = 'isHeader';
                grpItem[curFields.text] = ds[j].key;
                grpItem[hdr] = true;
                var newtext = curFields.text;
                if (newtext === 'id') {
                    newtext = 'text';
                    grpItem[newtext] = ds[j].key;
                }
                grpItem._id = 'group-list-item-' + (ds[j].key ?
                    ds[j].key.toString().trim() : 'undefined');
                grpItem.items = itemObj;
                dataSource.push(grpItem);
                for (var k = 0; k < itemObj.length; k++) {
                    dataSource.push(itemObj[k]);
                }
            }
            return dataSource;
        }
        ListBase.groupDataSource = groupDataSource;
        function addSorting(sortOrder, sortBy, query) {
            if (query === void 0) { query = new ej2_data_1.Query(); }
            if (sortOrder === 'Ascending') {
                query.sortBy(sortBy, 'ascending', true);
            }
            else if (sortOrder === 'Descending') {
                query.sortBy(sortBy, 'descending', true);
            }
            else {
                for (var i = 0; i < query.queries.length; i++) {
                    if (query.queries[i].fn === 'onSortBy') {
                        query.queries.splice(i, 1);
                    }
                }
            }
            return query;
        }
        ListBase.addSorting = addSorting;
        function getDataSource(dataSource, query) {
            return new ej2_data_1.DataManager(dataSource)
                .executeLocal(query);
        }
        ListBase.getDataSource = getDataSource;
        function createJsonFromElement(element, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var fields = ej2_base_1.extend({}, ListBase.defaultMappedFields, curOpt.fields);
            var curEle = element.cloneNode(true);
            var jsonAr = [];
            curEle.classList.add('json-parent');
            var childs = curEle.querySelectorAll('.json-parent>li');
            curEle.classList.remove('json-parent');
            for (var i = 0; i < childs.length; i++) {
                var li = childs[i];
                var anchor = li.querySelector('a');
                var ul = li.querySelector('ul');
                var json = {};
                var childNodes = anchor ? anchor.childNodes : li.childNodes;
                var keys = Object.keys(childNodes);
                for (var i_1 = 0; i_1 < childNodes.length; i_1++) {
                    if (!(childNodes[Number(keys[i_1])]).hasChildNodes()) {
                        json[fields.text] = childNodes[Number(keys[i_1])].textContent;
                    }
                }
                var attributes_1 = getAllAttributes(li);
                if (attributes_1.id) {
                    json[fields.id] = attributes_1.id;
                    delete attributes_1.id;
                }
                else {
                    json[fields.id] = generateId();
                }
                if (Object.keys(attributes_1).length) {
                    json[fields.htmlAttributes] = attributes_1;
                }
                if (anchor) {
                    attributes_1 = getAllAttributes(anchor);
                    if (Object.keys(attributes_1).length) {
                        json[fields.urlAttributes] = attributes_1;
                    }
                }
                if (ul) {
                    json[fields.child] = createJsonFromElement(ul, options);
                }
                jsonAr.push(json);
            }
            return jsonAr;
        }
        ListBase.createJsonFromElement = createJsonFromElement;
        function typeofData(data) {
            var match = { typeof: null, item: null };
            for (var i = 0; i < data.length; i++) {
                if (!ej2_base_1.isNullOrUndefined(data[i])) {
                    return match = { typeof: typeof data[i], item: data[i] };
                }
            }
            return match;
        }
        function setAttribute(element, elementAttributes) {
            var attr = {};
            ej2_base_1.merge(attr, elementAttributes);
            if (attr.class) {
                ej2_base_2.addClass([element], attr.class.split(' '));
                delete attr.class;
            }
            ej2_base_2.attributes(element, attr);
        }
        function getAllAttributes(element) {
            var attributes = {};
            var attr = element.attributes;
            for (var index = 0; index < attr.length; index++) {
                attributes[attr[index].nodeName] = attr[index].nodeValue;
            }
            return attributes;
        }
        function renderContentTemplate(createElement, template, dataSource, fields, options, componentInstance) {
            exports.cssClass = getModuleClass(defaultListBaseOptions.moduleName);
            var ulElement = createElement('ul', { className: exports.cssClass.ul, attrs: { role: 'presentation' } });
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var curFields = ej2_base_1.extend({}, ListBase.defaultMappedFields, fields);
            var compiledString = ej2_base_3.compile(template);
            var liCollection = [];
            var value;
            var id = generateId();
            for (var i = 0; i < dataSource.length; i++) {
                var fieldData = getFieldValues(dataSource[i], curFields);
                var curItem = dataSource[i];
                var isHeader = curItem.isHeader;
                if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                    value = curItem;
                }
                else {
                    value = fieldData[curFields.value];
                }
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: curItem,
                        text: value,
                        options: curOpt,
                        fields: curFields
                    };
                    curOpt.itemCreating(curData);
                }
                if (curOpt.itemCreating && typeof curOpt.itemCreating === 'function') {
                    fieldData = getFieldValues(dataSource[i], curFields);
                    if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                        value = curItem;
                    }
                    else {
                        value = fieldData[curFields.value];
                    }
                }
                var li = createElement('li', {
                    id: id + '-' + i,
                    className: isHeader ? exports.cssClass.group : exports.cssClass.li, attrs: { role: 'presentation' }
                });
                if (isHeader) {
                    if (typeof dataSource[i] === 'string' || typeof dataSource[i] === 'number') {
                        li.innerText = curItem;
                    }
                    else {
                        li.innerText = fieldData[curFields.text];
                    }
                }
                else {
                    var currentID = isHeader ? curOpt.groupTemplateID : curOpt.templateID;
                    if (isHeader) {
                        ej2_base_2.append(compiledString(curItem, componentInstance, 'headerTemplate', currentID, !!curOpt.isStringTemplate), li);
                    }
                    else {
                        ej2_base_2.append(compiledString(curItem, componentInstance, 'template', currentID, !!curOpt.isStringTemplate), li);
                    }
                    li.setAttribute('data-value', ej2_base_1.isNullOrUndefined(value) ? 'null' : value);
                    li.setAttribute('role', 'option');
                }
                if (curOpt.itemCreated && typeof curOpt.itemCreated === 'function') {
                    var curData = {
                        dataSource: dataSource,
                        curData: curItem,
                        text: value,
                        item: li,
                        options: curOpt,
                        fields: curFields
                    };
                    curOpt.itemCreated(curData);
                }
                liCollection.push(li);
            }
            ej2_base_2.append(liCollection, ulElement);
            return ulElement;
        }
        ListBase.renderContentTemplate = renderContentTemplate;
        function renderGroupTemplate(groupTemplate, groupDataSource, fields, headerItems, options, componentInstance) {
            var compiledString = ej2_base_3.compile(groupTemplate);
            var curFields = ej2_base_1.extend({}, ListBase.defaultMappedFields, fields);
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var category = curFields.groupBy;
            for (var _i = 0, headerItems_1 = headerItems; _i < headerItems_1.length; _i++) {
                var header = headerItems_1[_i];
                var headerData = {};
                headerData[category] = header.textContent;
                header.innerHTML = '';
                ej2_base_2.append(compiledString(headerData, componentInstance, 'groupTemplate', curOpt.groupTemplateID, !!curOpt.isStringTemplate), header);
            }
            return headerItems;
        }
        ListBase.renderGroupTemplate = renderGroupTemplate;
        function generateId() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        ListBase.generateId = generateId;
        function processSubChild(createElement, fieldData, fields, ds, options, element, level) {
            var subDS = fieldData[fields.child] || [];
            var hasChildren = fieldData[fields.hasChildren];
            if (subDS.length) {
                hasChildren = true;
                element.classList.add(exports.cssClass.hasChild);
                if (options.processSubChild) {
                    var subLi = createListFromJson(createElement, subDS, options, ++level);
                    element.appendChild(subLi);
                }
            }
            if (!!options.expandCollapse && hasChildren && !options.template) {
                element.firstElementChild.classList.add(exports.cssClass.iconWrapper);
                var expandElement = options.expandIconPosition === 'Left' ? ej2_base_2.prepend : ej2_base_2.append;
                expandElement([createElement('div', { className: 'e-icons ' + options.expandIconClass })], element.querySelector('.' + exports.cssClass.textContent));
            }
        }
        function generateSingleLevelLI(createElement, item, fieldData, fields, className, innerElements, grpLI, id, index, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var text = item;
            var value = item;
            var dataSource;
            if (typeof item !== 'string' && typeof item !== 'number' && typeof item !== 'boolean') {
                dataSource = item;
                text = (typeof fieldData[fields.text] === 'boolean' || typeof fieldData[fields.text] === 'number') ?
                    fieldData[fields.text] : (fieldData[fields.text] || '');
                value = fieldData[fields.value];
            }
            var elementID;
            if (!ej2_base_1.isNullOrUndefined(dataSource) && !ej2_base_1.isNullOrUndefined(fieldData[fields.id])
                && fieldData[fields.id] !== '') {
                elementID = id;
            }
            else {
                elementID = id + '-' + index;
            }
            var li = createElement('li', {
                className: (grpLI === true ? exports.cssClass.group : exports.cssClass.li) + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                id: elementID, attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                    { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
            });
            if (dataSource && fieldData.hasOwnProperty(fields.enabled) && fieldData[fields.enabled].toString() === 'false') {
                li.classList.add(exports.cssClass.disabled);
            }
            if (grpLI) {
                li.innerText = text;
            }
            else {
                li.setAttribute('data-value', ej2_base_1.isNullOrUndefined(value) ? 'null' : value);
                li.setAttribute('role', 'option');
                if (dataSource && fieldData.hasOwnProperty(fields.htmlAttributes) && fieldData[fields.htmlAttributes]) {
                    setAttribute(li, fieldData[fields.htmlAttributes]);
                }
                if (innerElements.length && !curOpt.itemNavigable) {
                    ej2_base_2.append(innerElements, li);
                }
                if (dataSource && (fieldData[fields.url] || (fieldData[fields.urlAttributes] &&
                    fieldData[fields.urlAttributes].href))) {
                    li.appendChild(anchorTag(createElement, dataSource, fields, text, innerElements, curOpt.itemNavigable));
                }
                else {
                    if (innerElements.length && curOpt.itemNavigable) {
                        ej2_base_2.append(innerElements, li);
                    }
                    li.appendChild(document.createTextNode(text));
                }
            }
            return li;
        }
        function getModuleClass(moduleName) {
            var moduleClass;
            return moduleClass = {
                li: "e-" + moduleName + "-item",
                ul: "e-" + moduleName + "-parent e-ul",
                group: "e-" + moduleName + "-group-item",
                icon: "e-" + moduleName + "-icon",
                text: "e-" + moduleName + "-text",
                check: "e-" + moduleName + "-check",
                checked: 'e-checked',
                selected: 'e-selected',
                expanded: 'e-expanded',
                textContent: 'e-text-content',
                hasChild: 'e-has-child',
                level: 'e-level',
                url: "e-" + moduleName + "-url",
                collapsible: 'e-icon-collapsible',
                disabled: 'e-disabled',
                image: "e-" + moduleName + "-img",
                iconWrapper: 'e-icon-wrapper',
                anchorWrap: 'e-anchor-wrap',
                navigable: 'e-navigable',
            };
        }
        function anchorTag(createElement, dataSource, fields, text, innerElements, isFullNavigation) {
            var fieldData = getFieldValues(dataSource, fields);
            var attr = { href: fieldData[fields.url] };
            if (fieldData.hasOwnProperty(fields.urlAttributes) && fieldData[fields.urlAttributes]) {
                ej2_base_1.merge(attr, fieldData[fields.urlAttributes]);
                attr.href = fieldData[fields.url] ? fieldData[fields.url] :
                    fieldData[fields.urlAttributes].href;
            }
            var anchorTag;
            if (!isFullNavigation) {
                anchorTag = createElement('a', { className: exports.cssClass.text + ' ' + exports.cssClass.url, innerHTML: text });
            }
            else {
                anchorTag = createElement('a', { className: exports.cssClass.text + ' ' + exports.cssClass.url });
                var anchorWrapper = createElement('div', { className: exports.cssClass.anchorWrap });
                if (innerElements && innerElements.length) {
                    ej2_base_2.append(innerElements, anchorWrapper);
                }
                anchorWrapper.appendChild(document.createTextNode(text));
                ej2_base_2.append([anchorWrapper], anchorTag);
            }
            setAttribute(anchorTag, attr);
            return anchorTag;
        }
        function generateLI(createElement, item, fieldData, fields, className, options, componentInstance) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            var text = item;
            var uID;
            var grpLI;
            var dataSource;
            if (typeof item !== 'string' && typeof item !== 'number') {
                dataSource = item;
                text = fieldData[fields.text] || '';
                uID = (ej2_base_1.isNullOrUndefined(fieldData['_id'])) ? fieldData[fields.id] : fieldData['_id'];
                grpLI = (item.hasOwnProperty('isHeader') && item.isHeader)
                    ? true : false;
            }
            if (options && options.enableHtmlSanitizer) {
                text = text;
            }
            var li = createElement('li', {
                className: (grpLI === true ? exports.cssClass.group : exports.cssClass.li) + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                attrs: (ariaAttributes.groupItemRole !== '' && ariaAttributes.itemRole !== '' ?
                    { role: (grpLI === true ? ariaAttributes.groupItemRole : ariaAttributes.itemRole) } : {})
            });
            !ej2_base_1.isNullOrUndefined(uID) ? li.setAttribute('data-uid', uID) : li.setAttribute('data-uid', generateId());
            var blazId = 'BlazId';
            if (options && !!options.removeBlazorID
                && typeof item === 'object'
                && item.hasOwnProperty(blazId)) {
                delete item[blazId];
            }
            if (grpLI && options && options.groupTemplate) {
                var compiledString = ej2_base_3.compile(options.groupTemplate);
                ej2_base_2.append(compiledString(item, componentInstance, 'groupTemplate', curOpt.groupTemplateID, !!curOpt.isStringTemplate), li);
            }
            else if (!grpLI && options && options.template) {
                var compiledString = ej2_base_3.compile(options.template);
                ej2_base_2.append(compiledString(item, componentInstance, 'template', curOpt.templateID, !!curOpt.isStringTemplate), li);
            }
            else {
                var innerDiv = createElement('div', {
                    className: exports.cssClass.textContent,
                    attrs: (ariaAttributes.wrapperRole !== '' ? { role: ariaAttributes.wrapperRole } : {})
                });
                if (dataSource && (fieldData[fields.url] || (fieldData[fields.urlAttributes] &&
                    fieldData[fields.urlAttributes].href))) {
                    innerDiv.appendChild(anchorTag(createElement, dataSource, fields, text, null, curOpt.itemNavigable));
                }
                else {
                    var element = createElement('span', {
                        className: exports.cssClass.text,
                        attrs: (ariaAttributes.itemText !== '' ? { role: ariaAttributes.itemText } : {})
                    });
                    if (options && options.enableHtmlSanitizer) {
                        element.innerText = text;
                    }
                    else {
                        element.innerHTML = text;
                    }
                    innerDiv.appendChild(element);
                }
                li.appendChild(innerDiv);
            }
            return li;
        }
        function generateUL(createElement, liElement, className, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            var ariaAttributes = ej2_base_1.extend({}, defaultAriaAttributes, curOpt.ariaAttributes);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var ulElement = createElement('ul', {
                className: exports.cssClass.ul + ' ' + (ej2_base_1.isNullOrUndefined(className) ? '' : className),
                attrs: (ariaAttributes.listRole !== '' ? { role: ariaAttributes.listRole } : {})
            });
            ej2_base_2.append(liElement, ulElement);
            return ulElement;
        }
        ListBase.generateUL = generateUL;
        function generateIcon(createElement, liElement, className, options) {
            var curOpt = ej2_base_1.extend({}, defaultListBaseOptions, options);
            exports.cssClass = getModuleClass(curOpt.moduleName);
            var expandElement = curOpt.expandIconPosition === 'Left' ? ej2_base_2.prepend : ej2_base_2.append;
            expandElement([createElement('div', {
                    className: 'e-icons ' + curOpt.expandIconClass + ' ' +
                        (ej2_base_1.isNullOrUndefined(className) ? '' : className)
                })], liElement.querySelector('.' + exports.cssClass.textContent));
            return liElement;
        }
        ListBase.generateIcon = generateIcon;
    })(ListBase = exports.ListBase || (exports.ListBase = {}));
    function getFieldValues(dataItem, fields) {
        var fieldData = {};
        if (ej2_base_1.isNullOrUndefined(dataItem) || typeof (dataItem) === 'string' || typeof (dataItem) === 'number'
            || !ej2_base_1.isNullOrUndefined(dataItem.isHeader)) {
            return dataItem;
        }
        else {
            for (var _i = 0, _a = Object.keys(fields); _i < _a.length; _i++) {
                var field = _a[_i];
                var dataField = fields[field];
                var value = !ej2_base_1.isNullOrUndefined(dataField) &&
                    typeof (dataField) === 'string' ? ej2_base_1.getValue(dataField, dataItem) : undefined;
                if (!ej2_base_1.isNullOrUndefined(value)) {
                    fieldData[dataField] = value;
                }
            }
        }
        return fieldData;
    }
    exports.getFieldValues = getFieldValues;
});
