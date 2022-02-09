(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
    title: "buku"
  },
  data: function data() {
    return {
      filters: {
        judul: {
          value: "",
          keys: ["judul"]
        }
      },
      buku: [],
      user: null,
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/buku";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.buku = response.data.buku;
    });
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy: function destroy(id) {
      var _this2 = this;

      var uri = "/api/buku/".concat(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](uri).then(function (response) {
        _this2.buku = _this2.buku.filter(function (buku) {
          return buku.id != id;
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
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this3.$router.push("/login");
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-header" }, [_vm._v("Buku")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.loginType == "admin"
              ? _c(
                  "div",
                  { staticClass: "d-flex flex-row-reverse mx-3" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-md btn-primary",
                        attrs: { to: { name: "create-buku" } },
                      },
                      [_vm._v("Tambah Data buku")]
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
                _c("label", [_vm._v("Filter berdasarkan Judul Buku:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filters.judul.value,
                      expression: "filters.judul.value",
                    },
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.filters.judul.value },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.filters.judul, "value", $event.target.value)
                    },
                  },
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", [
                  _c("label", [_vm._v("Jumlah Baris:")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.pageSize,
                          expression: "pageSize",
                        },
                      ],
                      staticClass: "form-control",
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.pageSize = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { domProps: { value: 10 } }, [_vm._v("10")]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 25 } }, [_vm._v("25")]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 50 } }, [_vm._v("50")]),
                      _vm._v(" "),
                      _c("option", { domProps: { value: 100 } }, [
                        _vm._v("100"),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "v-table",
                  {
                    staticClass: "table table-striped table-bordered",
                    attrs: {
                      data: _vm.buku,
                      filters: _vm.filters,
                      currentPage: _vm.currentPage,
                      pageSize: _vm.pageSize,
                    },
                    on: {
                      "update:currentPage": function ($event) {
                        _vm.currentPage = $event
                      },
                      "update:current-page": function ($event) {
                        _vm.currentPage = $event
                      },
                      totalPagesChanged: function ($event) {
                        _vm.totalPages = $event
                      },
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "body",
                        fn: function (ref) {
                          var displayData = ref.displayData
                          return _c(
                            "tbody",
                            {},
                            _vm._l(displayData, function (data) {
                              return _c("tr", { key: data.guid }, [
                                _c("td", { attrs: { scope: "data" } }, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.id) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.judul) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.penulis) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.penerbit) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.tanggal) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.kondisi) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.jumlah) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.jenis.jenis_buku) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.pengguna.name) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.lokasi.lokasi) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm.loginType == "admin"
                                    ? _c(
                                        "span",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning",
                                              attrs: {
                                                to: {
                                                  name: "edit-buku",
                                                  params: { id: data.id },
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "ion ion-md-create",
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-danger",
                                              on: {
                                                click: function ($event) {
                                                  return _vm.destroy(data.id)
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "ion ion-ios-trash",
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
                                ]),
                              ])
                            }),
                            0
                          )
                        },
                      },
                    ]),
                  },
                  [
                    _c("thead", { attrs: { slot: "head" }, slot: "head" }, [
                      _c(
                        "tr",
                        [
                          _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "judul", scope: "col" } },
                            [_vm._v("Judul")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "penulis", scope: "col" } },
                            [_vm._v("Penulis")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "penerbit", scope: "col" } },
                            [_vm._v("Penerbit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            {
                              attrs: {
                                sortKey: "tanggal_terbit",
                                scope: "col",
                              },
                            },
                            [_vm._v("Tanggal Terbit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "kondisi", scope: "col" } },
                            [_vm._v("Kondisi")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "jumlah", scope: "col" } },
                            [_vm._v("Jumlah")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "jenis", scope: "col" } },
                            [_vm._v("Jenis")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "pengguna", scope: "col" } },
                            [_vm._v("Pengguna")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "lokasi", scope: "col" } },
                            [_vm._v("Lokasi")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Aksi"),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("smart-pagination", {
                  attrs: {
                    currentPage: _vm.currentPage,
                    totalPages: _vm.totalPages,
                  },
                  on: {
                    "update:currentPage": function ($event) {
                      _vm.currentPage = $event
                    },
                    "update:current-page": function ($event) {
                      _vm.currentPage = $event
                    },
                  },
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
      _c("div", { staticClass: "card-body pallet-darken font-lighten" }, [
        _vm._v(
          "\n          Ini adalah halaman Daftar Buku untuk meng list buku apa saja yang\n          ada di kantor, dipegang oleh siapa dan untuk mengetahui dimana\n          lokasi buku tersebut.\n        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/buku/index.vue":
/*!********************************************************!*\
  !*** ./resources/assets/src/components/buku/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=786cf11a& */ "./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/buku/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=786cf11a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/index.vue?vue&type=template&id=786cf11a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_786cf11a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);