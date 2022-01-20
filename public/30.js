(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Pengguna"
  },
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'kode_barang',
        label: 'Kode Barang',
        sortable: true
      }, {
        key: 'nama_barang',
        label: 'Nama Barang'
      }, {
        key: 'fungsi',
        label: 'Fungsi'
      }, {
        key: 'lokasi.lokasi',
        label: 'Lokasi'
      }, {
        key: 'harga_barang',
        label: 'Harga Barang'
      }, {
        key: 'action',
        label: 'Action'
      }],
      fieldsbuku: [{
        key: 'id',
        label: 'ID'
      }, {
        key: 'judul',
        label: 'Judul Buku'
      }, {
        key: 'penulis',
        label: 'Penulis'
      }, {
        key: 'penerbit',
        label: 'Penerbit'
      }, {
        key: 'tanggal',
        label: 'tanggal'
      }, {
        key: 'kondisi',
        label: 'Kondisi'
      }, {
        key: 'jumlah',
        label: 'Jumlah'
      }, {
        key: 'jenis.jenis_buku',
        label: 'Jenis Buku'
      }, {
        key: 'lokasi.lokasi',
        label: 'Lokasi'
      }, {
        key: 'action',
        label: 'Action'
      }],
      barangs: [],
      pengguna: {},
      buku: [],
      barang: {
        pengguna_id: 1
      },
      user: null,
      isLoggedIn: false,
      loginType: ''
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/pengguna/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barangs = response.data.barang;
      _this.pengguna = response.data.pengguna;
      _this.buku = response.data.buku;
    });
  },
  methods: {
    update: function update(id) {
      var _this2 = this;

      var uri = "/api/barang/" + id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.barang).then(function (response) {
        _this2.barangs = _this2.barangs.filter(function (barangs) {
          return barangs.id != id;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    destroy: function destroy(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/barang/".concat(id)).then(function (response) {
        _this3.barangs = _this3.barangs.filter(function (barangs) {
          return barangs.id != id;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Content-Type'] = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this4.user = response.data;
      _this4.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401) {
        localStorage.clear();

        _this4.$router.push('/login');
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("User")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
                _c("h2", [
                  _vm._v(
                    "Ini adalah barang yang dipakai " +
                      _vm._s(_vm.pengguna.name)
                  ),
                ]),
                _vm._v(" "),
                _c("b-table", {
                  attrs: {
                    items: _vm.barangs,
                    fields: _vm.fields,
                    responsive: "",
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
                                          name: "edit-barang",
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
                                  data.item.pengguna_id != 1
                                    ? _c(
                                        "Button",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          on: {
                                            click: function ($event) {
                                              return _vm.update(data.item.id)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                      Hapus Kepemilikan\n                    "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
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
                                      _vm._v(
                                        "\n                    Hapus Data Barang\n                  "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loginType != "admin"
                            ? _c("span", [
                                _vm._v(
                                  "\n                      Tidak ada Akses\n                  "
                                ),
                              ])
                            : _vm._e(),
                        ]
                      },
                    },
                  ]),
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
                _c("h2", [
                  _vm._v(
                    "Ini adalah buku yang dipakai " + _vm._s(_vm.pengguna.name)
                  ),
                ]),
                _vm._v(" "),
                _c("b-table", {
                  attrs: {
                    items: _vm.buku,
                    fields: _vm.fieldsbuku,
                    responsive: "",
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
                                          name: "edit-buku",
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
                                  data.item.pengguna_id != 1
                                    ? _c(
                                        "Button",
                                        {
                                          staticClass: "btn btn-sm btn-danger",
                                          on: {
                                            click: function ($event) {
                                              return _vm.update(data.item.id)
                                            },
                                          },
                                        },
                                        [
                                          _vm._v(
                                            "\n                          Hapus Kepemilikan\n                        "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
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
                                      _vm._v(
                                        "\n                        Hapus Data Buku\n                      "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loginType != "admin"
                            ? _c("span", [
                                _vm._v(
                                  "\n                          Tidak ada Akses\n                      "
                                ),
                              ])
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=ee871c32& */ "./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/pengguna/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=ee871c32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);