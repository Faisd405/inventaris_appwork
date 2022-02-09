(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "home",
  metaInfo: {
    title: "Home"
  },
  data: function data() {
    return {
      barang: [],
      buku: [],
      users: [],
      NoPengguna: [],
      kategori: [],
      total: [],
      user: "",
      loginType: "",
      pengguna: []
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
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this.$router.push("/login");
      }

      console.error(error);
    });
  },
  methods: {
    logout: function logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setUser();
      this.$router.push('/');
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang").then(function (response) {
      _this2.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/NoUser").then(function (response) {
      _this2.NoUser = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/total").then(function (response) {
      _this2.total = response.data.total;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/buku").then(function (response) {
      _this2.buku = response.data.buku;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users").then(function (response) {
      _this2.users = response.data.user;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/kategori").then(function (response) {
      _this2.kategori = response.data.kategori;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna").then(function (response) {
      _this2.pengguna = response.data.pengguna;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna/nopengguna").then(function (response) {
      _this2.NoPengguna = response.data.barang;
    });
  }
});
vue__WEBPACK_IMPORTED_MODULE_1___default.a.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    return value;
  }

  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  });
  return formatter.format(value);
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Home")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body mx-auto " }, [
            _c(
              "div",
              { staticClass: "h-100 p-5 text-white rounded-3 pallet-darken" },
              [
                _c("h1", [
                  _vm._v(
                    "Halo " +
                      _vm._s(_vm.user.name) +
                      ", Di Web Inventaris Barang"
                  ),
                ]),
                _vm._v(" "),
                _vm.user
                  ? _c("div", [
                      _c("label", [_vm._v("Login sebagai:")]),
                      _vm._v(" "),
                      _c("h2", [_vm._v(_vm._s(_vm.loginType))]),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.user
                  ? _c("div", [_c("h2", [_vm._v("Anda Belum Login")])])
                  : _vm._e(),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row d-flex justify-content-center" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/barang" },
                        },
                        [_c("strong", [_vm._v(" Total Barang ")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("router-link", { attrs: { to: "/laporan/barang" } }, [
                        _c("h2", { staticClass: "card-title text-white" }, [
                          _vm._v(_vm._s(_vm.barang.length)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/pengguna" },
                        },
                        [_c("strong", [_vm._v(" Total Pengguna")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/laporan/pengguna" } },
                        [
                          _c("h2", { staticClass: "card-title text-white" }, [
                            _vm._v(_vm._s(_vm.pengguna.length)),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/buku" },
                        },
                        [_c("strong", [_vm._v(" Total Buku")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c("router-link", { attrs: { to: "/laporan/buku" } }, [
                        _c("h2", { staticClass: "card-title text-white" }, [
                          _vm._v(_vm._s(_vm.buku.length)),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/LaporanTBarangTerpakai" },
                        },
                        [_c("strong", [_vm._v("Total Barang Yang Terpakai")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/laporan/LaporanTBarangTerpakai" } },
                        [
                          _c("h2", { staticClass: "card-title text-white" }, [
                            _vm._v(
                              "\n                  " +
                                _vm._s(
                                  _vm.barang.length - _vm.NoPengguna.length
                                ) +
                                "\n                "
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/LaporanTBarangTidakTerpakai" },
                        },
                        [
                          _c("strong", [
                            _vm._v("Total Barang Yang Tidak Terpakai"),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: { to: "/laporan/LaporanTBarangTidakTerpakai" },
                        },
                        [
                          _c("h2", { staticClass: "card-title text-white" }, [
                            _vm._v(_vm._s(_vm.NoPengguna.length)),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card text-white pallet-dark col-md-6 m-1 shadow-lg",
                  staticStyle: { "max-width": "18rem" },
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-header" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "text-primary",
                          attrs: { to: "/laporan/LaporanTHargaBarang" },
                        },
                        [_c("strong", [_vm._v("Total Harga Barang")])]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/laporan/LaporanTHargaBarang" } },
                        [
                          _c("h4", { staticClass: "card-title text-white" }, [
                            _vm._v(_vm._s(_vm._f("toCurrency")(_vm.total))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/Home.vue":
/*!**************************************************!*\
  !*** ./resources/assets/src/components/Home.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e45ba24e& */ "./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/src/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e45ba24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);