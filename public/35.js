(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Sifat"
  },
  data: function data() {
    return {
      fields: [{
        key: "id",
        label: "Id"
      }, {
        key: "sifat_kategori",
        label: "Jenis Sifat Barang"
      }, {
        key: "action",
        label: "Action",
        sortable: false
      }],
      filter: null,
      filterOn: [],
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, {
        value: 100,
        text: "Show a lot"
      }],
      sifat: [],
      sortBy: "id",
      user: null,
      isLoggedIn: false,
      loginType: null
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/sifat";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.sifat = response.data.sifat;
    });
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy: function destroy(id) {
      var _this2 = this;

      var uri = "/api/sifat/".concat(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](uri).then(function (response) {
        _this2.sifat = _this2.sifat.filter(function (sifat) {
          return sifat.id != id;
        });
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this3.user = response.data;
      _this3.loginType = response.data.roles[0].name;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Sifat Barang")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.loginType == "admin"
              ? _c(
                  "span",
                  { staticClass: "d-flex flex-row-reverse mx-3" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-md btn-primary",
                        attrs: { to: { name: "create-sifat" } },
                      },
                      [_vm._v("Tambah Data sifat")]
                    ),
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { staticClass: "my-1", attrs: { lg: "6" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            staticClass: "mb-0",
                            attrs: {
                              label: "Filter",
                              "label-for": "filter-input",
                              "label-cols-sm": "3",
                              "label-align-sm": "right",
                              "label-size": "sm",
                            },
                          },
                          [
                            _c(
                              "b-input-group",
                              { attrs: { size: "sm" } },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "filter-input",
                                    type: "search",
                                    placeholder: "Type to Search",
                                  },
                                  model: {
                                    value: _vm.filter,
                                    callback: function ($$v) {
                                      _vm.filter = $$v
                                    },
                                    expression: "filter",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-input-group-append",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { disabled: !_vm.filter },
                                        on: {
                                          click: function ($event) {
                                            _vm.filter = ""
                                          },
                                        },
                                      },
                                      [_vm._v("Clear")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            staticClass: "mb-0",
                            attrs: {
                              label: "Per page",
                              "label-for": "per-page-select",
                              "label-cols-sm": "6",
                              "label-cols-md": "4",
                              "label-cols-lg": "3",
                              "label-align-sm": "right",
                              "label-size": "sm",
                            },
                          },
                          [
                            _c("b-form-select", {
                              attrs: {
                                id: "per-page-select",
                                options: _vm.pageOptions,
                                size: "sm",
                              },
                              model: {
                                value: _vm.perPage,
                                callback: function ($$v) {
                                  _vm.perPage = $$v
                                },
                                expression: "perPage",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-table", {
                  attrs: {
                    items: _vm.sifat,
                    fields: _vm.fields,
                    "sort-by": _vm.sortBy,
                    striped: "",
                    responsive: "",
                    "sort-icon-left": "",
                    filter: _vm.filter,
                    "filter-included-fields": _vm.filterOn,
                    "current-page": _vm.currentPage,
                    "per-page": _vm.perPage,
                  },
                  on: {
                    "update:sortBy": function ($event) {
                      _vm.sortBy = $event
                    },
                    "update:sort-by": function ($event) {
                      _vm.sortBy = $event
                    },
                    filtered: _vm.onFiltered,
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "action",
                      fn: function (data) {
                        return [
                          _vm.loginType == "admin"
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-sm btn-warning",
                                      attrs: {
                                        to: {
                                          name: "edit-sifat",
                                          params: { id: data.item.id },
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "ion ion-md-create",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger",
                                      on: {
                                        click: function ($event) {
                                          return _vm.destroy(data.item.id)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "ion ion-ios-trash",
                                      }),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loginType != "admin"
                            ? _c("span", [_vm._v(" Tidak ada Akses ")])
                            : _vm._e(),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-body bg-dark text-white" }, [
        _vm._v(
          "\n          Ini adalah halaman DataMaster Sifat Barang. Contoh Sifat Barang\n          seperti Elektronik, dan Furniture\n        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/sifat/index.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/src/components/sifat/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5503ab5c& */ "./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/sifat/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/sifat/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5503ab5c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/sifat/index.vue?vue&type=template&id=5503ab5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5503ab5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);