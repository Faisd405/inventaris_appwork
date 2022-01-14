(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Barang"
  },
  data: function data() {
    return {
      barang: {
        pengguna: {},
        kategori: {},
        jenis: {},
        lokasi: {}
      },
      kategori: [],
      history: [],
      fields: [, {
        key: "id",
        label: "Id"
      }, {
        key: "pengguna.name",
        label: "Nama Pengguna"
      }, {
        key: "tanggal_awal_penggunaan",
        label: "Tanggal Awal Penggunaan"
      }, {
        key: "tanggal_akhir_penggunaan",
        label: "Tanggal Akhir Penggunaan"
      }, {
        key: "keterangan",
        label: "Keterangan"
      }],
      sortBy: "id",
      sortDesc: true
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/kategori").then(function (response) {
      _this.kategori = response.data.kategori;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/" + this.$route.params.id).then(function (response) {
      _this.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/history/" + this.$route.params.id).then(function (response) {
      _this.history = response.data.history;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container p-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Detail Barang")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", [
              _c("img", {
                staticClass: "img-thumbnail rounded mx-auto d-block",
                attrs: { src: "/images/" + _vm.barang.image, width: "400px" },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", [_vm._v("Nama Barang : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.nama_barang) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Details Barang : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.detail_barang) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Kategori : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: {
                    textContent: _vm._s(_vm.barang.kategori.nama_kategori),
                  },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Fungsi : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.fungsi) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Jenis : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: {
                    textContent: _vm._s(_vm.barang.jenis.jenis_barang),
                  },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Harga : ")]),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(_vm._s(_vm._f("toCurrency")(_vm.barang.harga_barang))),
                ]),
                _vm._v(" "),
                _c("label", [_vm._v("Lokasi : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.lokasi.lokasi) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Pengguna : ")]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "detail-pengguna",
                        params: { id: _vm.barang.pengguna.id },
                      },
                    },
                  },
                  [
                    _c("h3", {
                      domProps: {
                        textContent: _vm._s(_vm.barang.pengguna.name),
                      },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("label", [_vm._v("Tahun : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.year) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Jumlah :")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.barang.jumlah_barang) },
                }),
                _vm._v(" "),
                _c("label", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        href: "/barang/detailbarang_pdf/" + _vm.barang.id,
                      },
                    },
                    [_vm._v("Print Detail Barang")]
                  ),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _vm.barang.lampiran
              ? _c("div", [
                  _c("hr"),
                  _vm._v(" "),
                  _c("h2", { staticClass: "text-center" }, [
                    _vm._v(
                      "\n              Lampiran Surat Komitmen Peggunaan Barang Inventaris Kantor\n            "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("iframe", {
                    attrs: {
                      src: "/lampiran/" + _vm.barang.lampiran,
                      type: "document.pdf",
                      width: "100%",
                      height: "500px",
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v("Daftar Riwayat Pengguna"),
                ]),
                _vm._v(" "),
                _c("b-table", {
                  attrs: {
                    fields: _vm.fields,
                    items: _vm.history,
                    "sort-by": _vm.sortBy,
                    "sort-desc": _vm.sortDesc,
                  },
                  on: {
                    "update:sortBy": function ($event) {
                      _vm.sortBy = $event
                    },
                    "update:sort-by": function ($event) {
                      _vm.sortBy = $event
                    },
                    "update:sortDesc": function ($event) {
                      _vm.sortDesc = $event
                    },
                    "update:sort-desc": function ($event) {
                      _vm.sortDesc = $event
                    },
                  },
                }),
                _vm._v(" "),
                _c("label", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        href: "/barang/HistoryPDFDetail/" + _vm.barang.id,
                      },
                    },
                    [_vm._v("Print Riwayat Barang")]
                  ),
                ]),
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

/***/ "./resources/assets/src/components/barang/detail.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/components/barang/detail.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=101b740f& */ "./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/barang/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=101b740f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/detail.vue?vue&type=template&id=101b740f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_101b740f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);