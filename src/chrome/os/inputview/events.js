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

goog.provide('i18n.input.chrome.inputview.events.ConfigLoadedEvent');
goog.provide('i18n.input.chrome.inputview.events.ContextFocusEvent');
goog.provide('i18n.input.chrome.inputview.events.ContextUpdateEvent');
goog.provide('i18n.input.chrome.inputview.events.EventType');
goog.provide('i18n.input.chrome.inputview.events.KeyClickEvent');
goog.provide('i18n.input.chrome.inputview.events.LayoutLoadedEvent');
goog.provide('i18n.input.chrome.inputview.events.PointerEvent');
goog.provide('i18n.input.chrome.inputview.events.SurroundingTextChangedEvent');
goog.provide('i18n.input.chrome.inputview.events.SwipeEvent');

goog.require('goog.events');
goog.require('goog.events.Event');


goog.scope(function() {
var events = i18n.input.chrome.inputview.events;


/**
 * Event types in input view keyboard.
 *
 * @enum {string}
 */
events.EventType = {
  CONFIG_LOADED: goog.events.getUniqueId('cl'),
  DOUBLE_CLICK: goog.events.getUniqueId('dc'),
  LAYOUT_LOADED: goog.events.getUniqueId('ll'),
  LONG_PRESS: goog.events.getUniqueId('lp'),
  LONG_PRESS_END: goog.events.getUniqueId('lpe'),
  POINTER_DOWN: goog.events.getUniqueId('pd'),
  POINTER_UP: goog.events.getUniqueId('pu'),
  POINTER_OVER: goog.events.getUniqueId('po'),
  POINTER_OUT: goog.events.getUniqueId('po'),
  SETTINGS_READY: goog.events.getUniqueId('sr'),
  SURROUNDING_TEXT_CHANGED: goog.events.getUniqueId('stc'),
  SWIPE: goog.events.getUniqueId('s'),
  CONTEXT_UPDATE: goog.events.getUniqueId('cu'),
  CONTEXT_FOCUS: goog.events.getUniqueId('cf'),
  CONTEXT_BLUR: goog.events.getUniqueId('cb'),
  VISIBILITY_CHANGE: goog.events.getUniqueId('vc'),
  MODEL_UPDATE: goog.events.getUniqueId('mu')
};



/**
 * The event when the data is loaded complete.
 *
 * @param {!Object} data The layout data.
 * @constructor
 * @extends {goog.events.Event}
 */
events.LayoutLoadedEvent = function(data) {
  goog.base(this, events.EventType.LAYOUT_LOADED);

  /**
   * The layout data.
   *
   * @type {!Object}
   */
  this.data = data;
};
goog.inherits(events.LayoutLoadedEvent, goog.events.Event);



/**
 * The event when the configuration is loaded complete.
 *
 * @param {!Object} data The configuration data.
 * @constructor
 * @extends {goog.events.Event}
 */
events.ConfigLoadedEvent = function(data) {
  goog.base(this, events.EventType.CONFIG_LOADED);

  /**
   * The configuration data.
   *
   * @type {!Object}
   */
  this.data = data;
};
goog.inherits(events.ConfigLoadedEvent, goog.events.Event);



/**
 * The pointer event.
 *
 * @param {i18n.input.chrome.inputview.elements.Element} view .
 * @param {events.EventType} type .
 * @param {Node} target The event target.
 * @param {number} x .
 * @param {number} y .
 * @constructor
 * @extends {goog.events.Event}
 */
events.PointerEvent = function(view, type, target, x, y) {
  goog.base(this, type, target);

  /**
   * The view.
   *
   * @type {i18n.input.chrome.inputview.elements.Element}
   */
  this.view = view;

  /**
   * The x-coordinate.
   *
   * @type {number}
   */
  this.x = x;

  /**
   * The y-coordinate.
   *
   * @type {number}
   */
  this.y = y;
};
goog.inherits(events.PointerEvent, goog.events.Event);



/**
 * The swipe event.
 *
 * @param {i18n.input.chrome.inputview.elements.Element} view .
 * @param {number} direction See SwipeDirection in pointer handler.
 * @param {Node} target The event target.
 * @param {number} x .
 * @param {number} y .
 * @constructor
 * @extends {events.PointerEvent}
 */
events.SwipeEvent = function(view, direction, target, x, y) {
  goog.base(this, view, events.EventType.SWIPE,
      target, x, y);

  /**
   * The direction.
   *
   * @type {number}
   */
  this.direction = direction;
};
goog.inherits(events.SwipeEvent, events.PointerEvent);



/**
 * The event when the surrounding text is changed.
 *
 * @param {string} text The surrounding text.
 * @constructor
 * @extends {goog.events.Event}
 */
events.SurroundingTextChangedEvent = function(text) {
  goog.base(this, events.EventType.SURROUNDING_TEXT_CHANGED);

  /** @type {string} */
  this.text = text;
};
goog.inherits(events.SurroundingTextChangedEvent, goog.events.Event);



/**
 * The event when context is updated.
 *
 * @param {string} compositionText .
 * @param {string} committedText .
 * @constructor
 * @extends {goog.events.Event}
 */
events.ContextUpdateEvent = function(compositionText, committedText) {
  goog.base(this, events.EventType.CONTEXT_UPDATE);

  /** @type {string} */
  this.compositionText = compositionText;

  /** @type {string} */
  this.committedText = committedText;
};
goog.inherits(events.ContextUpdateEvent, goog.events.Event);



/**
 * The event when context is focus on.
 *
 * @param {string} contextType .
 * @constructor
 * @extends {goog.events.Event}
 */
events.ContextFocusEvent = function(contextType) {
  goog.base(this, events.EventType.CONTEXT_FOCUS);

  /** @type {string} */
  this.contextType = contextType;
};
goog.inherits(events.ContextFocusEvent, goog.events.Event);


});  // goog.scope
