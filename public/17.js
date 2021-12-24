(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: [{
        key: "id",
        label: "Id"
      }, {
        key: "nama_kategori",
        label: "Nama Kategori"
      }, {
        key: "fungsi",
        label: "Fungsi"
      }, {
        key: "sifat.sifat_kategori",
        label: "sifat"
      }, {
        key: "jumlah",
        label: "jumlah"
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
      kategori: [],
      sortBy: "id",
      barang: [],
      user: null,
      isLoggedIn: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this.user = response.data;
      _this.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401) {
        localStorage.clear();

        _this.$router.push("/login");
      }

      console.error(error);
    });
  },
  created: function created() {
    var _this2 = this;

    var uri = "/api/kategori";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this2.kategori = response.data.kategori;
    });
  },
  computed: {
    filterOn: function filterOn() {
      return this.fields.filter(function (field) {
        return field.filterable;
      }).map(function (field) {
        return field.key;
      });
    }
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy: function destroy(id) {
      var _this3 = this;

      var uri = "/api/kategori/".concat(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](uri).then(function (response) {
        _this3.kategori = _this3.kategori.filter(function (kategori) {
          return kategori.id != id;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "card card-default" },
          [
            _c("div", { staticClass: "card-header" }, [_vm._v("kategori")]),
            _vm._v(" "),
            _vm._l(_vm.user.roles, function (roles) {
              return _c("div", { key: roles.id, staticClass: "card-body" }, [
                roles.name == "admin"
                  ? _c(
                      "span",
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-md btn-primary",
                            attrs: { to: { name: "create-kategori" } },
                          },
                          [_vm._v("TAMBAH Data kategori")]
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
                        items: _vm.kategori,
                        fields: _vm.fields,
                        "sort-by": _vm.sortBy,
                        striped: "",
                        responsive: "sm",
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
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "action",
                            fn: function (data) {
                              return [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "btn btn-sm btn-primary",
                                    attrs: {
                                      to: {
                                        name: "detail-kategori",
                                        params: { id: data.item.id },
                                      },
                                    },
                                  },
                                  [_vm._v("Detail")]
                                ),
                                _vm._v(" "),
                                roles.name == "admin"
                                  ? _c(
                                      "span",
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary",
                                            attrs: {
                                              to: {
                                                name: "edit-kategori",
                                                params: { id: data.item.id },
                                              },
                                            },
                                          },
                                          [_vm._v("Edit")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-danger",
                                            on: {
                                              click: function ($event) {
                                                return _vm.destroy(data.item.id)
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                    Hapus\n                  "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ]
                            },
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                  ],
                  1
                ),
              ])
            }),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/kategori/index.vue":
/*!************************************************************!*\
  !*** ./resources/assets/src/components/kategori/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ecf6f87a& */ "./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/kategori/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/kategori/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ecf6f87a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/kategori/index.vue?vue&type=template&id=ecf6f87a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ecf6f87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);