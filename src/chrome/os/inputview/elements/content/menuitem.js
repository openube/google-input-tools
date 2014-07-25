// Copyright 2014 The ChromeOS IME Authors. All Rights Reserved.
// limitations under the License.
// See the License for the specific language governing permissions and
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// distributed under the License is distributed on an "AS-IS" BASIS,
// Unless required by applicable law or agreed to in writing, software
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// You may obtain a copy of the License at
// you may not use this file except in compliance with the License.
// Licensed under the Apache License, Version 2.0 (the "License");
//
goog.provide('i18n.input.chrome.inputview.elements.content.MenuItem');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('i18n.input.chrome.inputview.Css');
goog.require('i18n.input.chrome.inputview.elements.Element');


goog.scope(function() {
var Css = i18n.input.chrome.inputview.Css;
var TagName = goog.dom.TagName;
var ElementType = i18n.input.chrome.inputview.elements.ElementType;

/**
 * The menu item in the menu.
 *
 * @param {string} id .
 * @param {Object} item The list time to be added.
 * @param {i18n.input.chrome.inputview.elements.content.MenuItem.Type}
 *     menuItemType .
 * @param {goog.events.EventTarget=} opt_eventTarget The parent event target.
 * @constructor
 * @extends {i18n.input.chrome.inputview.elements.Element}
 */
i18n.input.chrome.inputview.elements.content.MenuItem = function(id, item,
    menuItemType, opt_eventTarget) {
  goog.base(this, id, ElementType.MENU_ITEM, opt_eventTarget);

  /**
   * @type {Object}
   * @private
   * */
  this.item_ = item;

  /**
   * @type {i18n.input.chrome.inputview.elements.content.MenuItem.Type}
   * @private
   */
  this.menuItemType_ = menuItemType;
};
var MenuItem = i18n.input.chrome.inputview.elements.content.MenuItem;
goog.inherits(MenuItem, i18n.input.chrome.inputview.elements.Element);


/**
 * The type of this MenuItem.
 *
 * @enum {number}
 */
MenuItem.Type = {
  LIST_ITEM: 0,
  FOOTER_ITEM: 1
};


/** @override */
MenuItem.prototype.createDom = function() {
  goog.base(this, 'createDom');

  var dom = this.getDomHelper();
  var elem = this.getElement();
  switch (this.menuItemType_) {
    case MenuItem.Type.LIST_ITEM:
      goog.dom.classlist.add(elem,
          i18n.input.chrome.inputview.Css.MENU_LIST_ITEM);
      var indicatorDiv = dom.createDom(goog.dom.TagName.DIV,
          i18n.input.chrome.inputview.Css.MENU_LIST_INDICATOR);
      if (this.item_['iconURL']) {
        indicatorDiv.style.backgroundImage =
            'url(' + this.item_['iconURL'] + ')';
      } else {
        var indicatorTextDiv = dom.createDom(goog.dom.TagName.DIV,
            i18n.input.chrome.inputview.Css.MENU_LIST_INDICATOR_NAME);
        indicatorTextDiv.textContent = this.item_['indicator'];
        dom.appendChild(indicatorDiv, indicatorTextDiv);
      }
      dom.appendChild(elem, indicatorDiv);

      var nameDiv = dom.createDom(goog.dom.TagName.DIV,
          i18n.input.chrome.inputview.Css.MENU_LIST_NAME);
      var nameText = dom.createDom(goog.dom.TagName.DIV);
      nameText.innerText = this.item_['name'];
      dom.appendChild(nameDiv, nameText);
      dom.appendChild(elem, nameDiv);
      break;
    case MenuItem.Type.FOOTER_ITEM:
      goog.dom.classlist.add(elem,
          i18n.input.chrome.inputview.Css.MENU_FOOTER_ITEM);
      goog.dom.classlist.add(elem, this.item_['iconCssClass']);
  }
};


/**
 * Gets the command of this menu item.
 */
MenuItem.prototype.getCommand = function() {
  return this.item_['command'];
};


/** @override */
MenuItem.prototype.setHighlighted = function(highlight) {
  if (highlight) {
    goog.dom.classlist.add(this.getElement(), Css.ELEMENT_HIGHLIGHT);
  } else {
    goog.dom.classlist.remove(this.getElement(), Css.ELEMENT_HIGHLIGHT);
  }
};

});  // goog.scope
