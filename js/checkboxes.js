/*!
 * Bootstrap-checkbox v1.5.0 (https://vsn4ik.github.io/bootstrap-checkbox/)
 * Copyright 2013-2018 Vasilii A. (https://github.com/vsn4ik)
 * Licensed under the MIT license
 */

"use strict";!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(o){function i(){return o(o.map(arguments,o.proxy(document,"createElement")))}function e(t,s){this.element=t,this.$element=o(t);var e=this.$element.data();""===e.reverse&&(e.reverse=!0),""===e.switchAlways&&(e.switchAlways=!0),""===e.html&&(e.html=!0),this.options=o.extend({},o.fn.checkboxpicker.defaults,s,e),this.$element.closest("label").length?console.warn(this.options.warningMessage):(this.$group=i("div"),this.$buttons=i("a","a"),this.$off=this.$buttons.eq(this.options.reverse?1:0),this.$on=this.$buttons.eq(this.options.reverse?0:1),this.init())}e.prototype={init:function(){var t=this.options.html?"html":"text";this.element.hidden=!0,this.$group.addClass(this.options.baseGroupCls).addClass(this.options.groupCls),this.$buttons.addClass(this.options.baseCls).addClass(this.options.cls),this.options.offLabel&&this.$off[t](this.options.offLabel),this.options.onLabel&&this.$on[t](this.options.onLabel),this.options.offIconCls&&(this.options.offLabel&&this.$off.prepend("&nbsp;"),i("span").addClass(this.options.iconCls).addClass(this.options.offIconCls).prependTo(this.$off)),this.options.onIconCls&&(this.options.onLabel&&this.$on.prepend("&nbsp;"),i("span").addClass(this.options.iconCls).addClass(this.options.onIconCls).prependTo(this.$on)),this.element.checked?(this.$on.addClass("active"),this.$on.addClass(this.options.onActiveCls),this.$off.addClass(this.options.offCls)):(this.$off.addClass("active"),this.$off.addClass(this.options.offActiveCls),this.$on.addClass(this.options.onCls)),this.element.title?this.$group.attr("title",this.element.title):(this.options.offTitle&&this.$off.attr("title",this.options.offTitle),this.options.onTitle&&this.$on.attr("title",this.options.onTitle)),this.$group.on("keydown",o.proxy(this,"keydown")),this.$buttons.on("click",o.proxy(this,"click")),this.$element.on("change",o.proxy(this,"toggleChecked")),o(this.element.labels).on("click",o.proxy(this,"focus")),o(this.element.form).on("reset",o.proxy(this,"reset")),this.$group.append(this.$buttons).insertAfter(this.element),this.element.readOnly||this.element.disabled?(this.$buttons.addClass("disabled"),this.options.disabledCursor&&this.$group.css("cursor",this.options.disabledCursor)):(this.$group.attr("tabindex",this.element.tabIndex),this.element.autofocus&&this.focus())},toggleChecked:function(){this.$buttons.toggleClass("active"),this.$off.toggleClass(this.options.offCls),this.$off.toggleClass(this.options.offActiveCls),this.$on.toggleClass(this.options.onCls),this.$on.toggleClass(this.options.onActiveCls)},toggleDisabled:function(){this.$buttons.toggleClass("disabled"),this.element.disabled?(this.$group.attr("tabindex",this.element.tabIndex),this.$group.css("cursor","")):(this.$group.removeAttr("tabindex"),this.options.disabledCursor&&this.$group.css("cursor",this.options.disabledCursor))},focus:function(){this.$group.trigger("focus")},click:function(t){o(t.currentTarget).hasClass("active")&&!this.options.switchAlways||this.change()},change:function(){this.set(!this.element.checked)},set:function(t){this.element.checked=t,this.$element.trigger("change")},keydown:function(t){-1!==o.inArray(t.keyCode,this.options.toggleKeyCodes)?(t.preventDefault(),this.change()):13===t.keyCode&&o(this.element.form).trigger("submit")},reset:function(){(this.element.defaultChecked&&this.$off.hasClass("active")||!this.element.defaultChecked&&this.$on.hasClass("active"))&&this.set(this.element.defaultChecked)}};var n=o.extend({},o.propHooks);o.extend(o.propHooks,{checked:{set:function(t,s){var e=o.data(t,"bs.checkbox");e&&t.checked!==s&&e.change(s),n.checked&&n.checked.set&&n.checked.set(t,s)}},disabled:{set:function(t,s){var e=o.data(t,"bs.checkbox");e&&t.disabled!==s&&e.toggleDisabled(),n.disabled&&n.disabled.set&&n.disabled.set(t,s)}}});var t=o.fn.checkboxpicker;return o.fn.checkboxpicker=function(s,t){return(this instanceof o?this:o("string"==typeof s?s:t)).each(function(){var t=o.data(this,"bs.checkbox");t||(t=new e(this,s),o.data(this,"bs.checkbox",t))})},o.fn.checkboxpicker.defaults={baseGroupCls:"btn-group",baseCls:"btn",groupCls:null,cls:null,offCls:"btn-default",onCls:"btn-default",offActiveCls:"btn-danger",onActiveCls:"btn-success",offLabel:"No",onLabel:"Yes",offTitle:!1,onTitle:!1,iconCls:"glyphicon",disabledCursor:"not-allowed",toggleKeyCodes:[13,32],warningMessage:"Please do not use Bootstrap-checkbox element in label element."},o.fn.checkboxpicker.Constructor=e,o.fn.checkboxpicker.noConflict=function(){return o.fn.checkboxpicker=t,this},o.fn.checkboxpicker});