// Copyright 2012 and onwards Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Externs for libraries used by this extension.
 * @author manas@google.com (Manas Tungare)
 */

/**
 * Externs for the Moment.js library.
 * @constructor
 */
function Moment() {};

/** @return {string} */
Moment.prototype.calendar = function() {};

/**
 * @param {string=} opt_formatString
 * @return {string}
 */
Moment.prototype.format = function(opt_formatString) {};

/** @return {string} */
Moment.prototype.fromNow = function() {};

/**
 * @param {string=} opt_locale
 */
Moment.lang = function(opt_locale) {};

/** @return {Date} */
Moment.prototype.toDate = function() {};

/**
 * @param {Date|string} date
 * @param {Array.<string>|string=} opt_formatString
 * return {Moment}
 */
function moment(date, opt_formatString) {};
