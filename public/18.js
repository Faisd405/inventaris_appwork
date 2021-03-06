(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Detail Buku"
  },
  data: function data() {
    return {
      buku: {
        pengguna: {},
        jenis: {},
        lokasi: {}
      },
      user: [],
      loginType: "guest",
      sortBy: "id",
      sortDesc: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this.user = response.data;
      _this.loginType = response.data.roles[0].name;
    });
  },
  methods: {
    deleteLampiran: function deleteLampiran() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/buku/Lampiran/" + this.$route.params.id).then(function (response) {
        _this2.buku.lampiran = "default.pdf";
      })["catch"](function (error) {
        console.log(error);
      });
    },
    deleteImage: function deleteImage() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/buku/Image/" + this.$route.params.id).then(function (response) {
        _this3.buku.image = "default.jpg";
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this4 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/buku/" + this.$route.params.id).then(function (response) {
      _this4.buku = response.data.buku;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9& ***!
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
  return _c("div", { staticClass: "container-fluid p-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Detail Buku")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", [
              _c("img", {
                staticClass: "img-thumbnail rounded mx-auto d-block",
                attrs: { src: "/gambarBuku/" + _vm.buku.image, width: "400px" },
              }),
              _vm._v(" "),
              _vm.loginType == "admin"
                ? _c("div", [
                    _vm.buku.image != "default.jpg"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.deleteImage()
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n                Hapus Gambar\n              "
                            ),
                          ]
                        )
                      : _vm._e(),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c("label", [_vm._v("Judul buku : ")]),
                _vm._v(" "),
                _c("h3", { domProps: { textContent: _vm._s(_vm.buku.judul) } }),
                _vm._v(" "),
                _c("label", [_vm._v("Jenis :")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.buku.jenis.jenis_buku) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Penulis buku : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.buku.penulis) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Kondisi : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.buku.kondisi) },
                }),
                _vm._v(" "),
                _c("label", [_vm._v("Harga : ")]),
                _vm._v(" "),
                _c("h3", [
                  _vm._v(_vm._s(_vm._f("toCurrency")(_vm.buku.harga))),
                ]),
                _vm._v(" "),
                _c("label", [_vm._v("Lokasi : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.buku.lokasi.lokasi) },
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
                        params: { id: _vm.buku.pengguna.id },
                      },
                    },
                  },
                  [
                    _c("h3", {
                      domProps: { textContent: _vm._s(_vm.buku.pengguna.name) },
                    }),
                  ]
                ),
                _vm._v(" "),
                _c("label", [_vm._v("Tahun : ")]),
                _vm._v(" "),
                _c("h3", {
                  domProps: { textContent: _vm._s(_vm.buku.tanggal) },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("label", [
              _c(
                "a",
                {
                  staticClass: "btn btn-primary",
                  attrs: { href: "/buku/detailbuku_pdf/" + _vm.buku.id },
                },
                [_vm._v("Print Detail Buku")]
              ),
            ]),
            _vm._v(" "),
            _vm.buku.lampiran
              ? _c("div", [
                  _c("hr"),
                  _vm._v(" "),
                  _c("h2", { staticClass: "text-center" }, [
                    _vm._v("Lampiran Invoice"),
                  ]),
                  _vm._v(" "),
                  _c("iframe", {
                    attrs: {
                      src: "/lampiranBuku/" + _vm.buku.lampiran,
                      type: "document.pdf",
                      width: "100%",
                      height: "500px",
                    },
                  }),
                  _vm._v(" "),
                  _vm.loginType == "admin"
                    ? _c("div", [
                        _vm.buku.lampiran != "default.pdf"
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault()
                                    return _vm.deleteLampiran()
                                  },
                                },
                              },
                              [
                                _c("i", { staticClass: "fas fa-trash-alt" }),
                                _vm._v(" Delete Lampiran\n              "),
                              ]
                            )
                          : _vm._e(),
                      ])
                    : _vm._e(),
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr"),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/buku/detail.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/src/components/buku/detail.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=2d8441b9& */ "./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/buku/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=2d8441b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/detail.vue?vue&type=template&id=2d8441b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_2d8441b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);