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
goog.provide('i18n.input.chrome.inputview.SizeSpec');



goog.scope(function() {

var SizeSpec = i18n.input.chrome.inputview.SizeSpec;


/**
 * The height of the keyboard in a11y mode.
 *
 * @type {number}
 */
SizeSpec.A11Y_HEIGHT = 280;


/**
 * The height of the keyboard in non-a11y mode.
 *
 * @type {number}
 */
SizeSpec.NON_A11Y_HEIGHT = 372;


/** @type {number} */
SizeSpec.A11Y_CANDIDATE_VIEW_HEIGHT = 32;


/** @type {number} */
SizeSpec.NON_A11Y_CANDIDATE_VIEW_HEIGHT = 48;


/**
 * The width percent of a11y keyboard in horizontal mode or vertical mode.
 *
 * @enum {number}
 */
SizeSpec.A11Y_WIDTH_PERCENT = {
  HORIZONTAL: 0.74,
  VERTICAL: 0.88
};


/**
 * The width percent of non-a11y keyboard in horizontal mode or vertical mode.
 *
 * @enum {number}
 */
SizeSpec.NON_A11Y_WIDTH_PERCENT = {
  HORIZONTAL: 0.84,
  HORIZONTAL_WIDE_SCREEN: 0.8,
  VERTICAL: 0.88
};

});  // goog.scope

