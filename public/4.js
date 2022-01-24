(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Barang"
  },
  data: function data() {
    return {
      filters: {
        nama_barang: {
          value: "",
          keys: ["nama_barang"]
        }
      },
      barang: [],
      sortBy: "id",
      user: "",
      isLoggedIn: false,
      loginType: ""
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/pengguna/pengguna";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barang = response.data.barang;
    });
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this2.user = response.data;
      _this2.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this2.$router.push("/login");
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12 justify-content-center" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [
            _vm._v("Barang Terpakai"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              [
                _c(
                  "v-table",
                  {
                    staticClass: "table table-striped table-bordered",
                    attrs: { data: _vm.barang, filters: _vm.filters },
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
                                _c("td", [_vm._v(_vm._s(data.id))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.nama_barang))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.detail_barang))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(data.kategori.nama_kategori)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.fungsi))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.harga_barang))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.lokasi.lokasi))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.detail_lokasi))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.pengguna.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.year))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.jumlah_barang))]),
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
                            { attrs: { sortKey: "nama_barang", scope: "col" } },
                            [_vm._v("Nama Barang")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Detail Barang"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Kategori"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Fungsi"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            {
                              attrs: { sortKey: "harga_barang", scope: "col" },
                            },
                            [_vm._v("Harga Barang")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Lokasi"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Detail Lokasi"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Pemakai"),
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "year", scope: "col" } },
                            [_vm._v("Tahun")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            {
                              attrs: { sortKey: "jumlah_barang", scope: "col" },
                            },
                            [_vm._v("Jumlah Barang")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]
                ),
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

/***/ "./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f& */ "./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f&");
/* harmony import */ var _LaporanTBarangTerpakai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaporanTBarangTerpakai.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LaporanTBarangTerpakai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTBarangTerpakai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LaporanTBarangTerpakai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTBarangTerpakai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTBarangTerpakai.vue?vue&type=template&id=5c0d1b2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTBarangTerpakai_vue_vue_type_template_id_5c0d1b2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);