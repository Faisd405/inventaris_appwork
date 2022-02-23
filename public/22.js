(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/image/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/image/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Setting Image"
  },
  data: function data() {
    return {
      imageBackgroundLogin: "",
      imageDefaultImage: "",
      imageDefaultPDFInvoice: "",
      imageDefaultPDFSuratKomitmen: "",
      user: "",
      loginType: ""
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
    showModal1: function showModal1() {
      this.$refs.backgroundLogin.open();
    },
    showModal2: function showModal2() {
      this.$refs.defaultImage.open();
    },
    showModal3: function showModal3() {
      this.$refs.defaultPdfInvoice.open();
    },
    showModal4: function showModal4() {
      this.$refs.defaultPdfSuratKomitmen.open();
    },
    onFileChangeBackgroundLogin: function onFileChangeBackgroundLogin(e) {
      this.imageBackgroundLogin = e.target.files[0];
    },
    onFileChangeDefaultImage: function onFileChangeDefaultImage(e) {
      this.imageDefaultImage = e.target.files[0];
    },
    onFileChangeDefaultPDF: function onFileChangeDefaultPDF(e) {
      this.imageDefaultPDFInvoice = e.target.files[0];
    },
    onFileChangeDefaultSuratKomitmen: function onFileChangeDefaultSuratKomitmen(e) {
      this.imageDefaultPDFSuratKomitmen = e.target.files[0];
    },
    FormbackgroundLogin: function FormbackgroundLogin() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("file", this.imageBackgroundLogin);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/image/imageBackgroundLogin", formData).then(function (response) {
        _this2.$refs.backgroundLogin.close();

        _this2.$toast.success("Background Login Berhasil Diubah");
      })["catch"](function (error) {
        console.error(error);

        _this2.$toast.error("Background Login Gagal Diubah");
      });
    },
    FormDefaultImage: function FormDefaultImage() {
      var _this3 = this;

      var formData = new FormData();
      formData.append("file", this.imageDefaultImage);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/image/imageDefaultImage", formData).then(function (response) {
        _this3.$refs.defaultImage.close();

        _this3.$toast.success("Default Image Barang Berhasil Diubah");
      })["catch"](function (error) {
        console.error(error);

        _this3.$toast.error("Default Image Barang Gagal Diubah");
      });
    },
    FormDefaultInvoice: function FormDefaultInvoice() {
      var _this4 = this;

      var formData = new FormData();
      formData.append("file", this.imageDefaultPDFInvoice);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/image/imageDefaultPDF", formData).then(function (response) {
        _this4.$refs.defaultPdfInvoice.close();

        _this4.$toast.success("Default PDF Invoice Berhasil Diubah");
      })["catch"](function (error) {
        console.error(error);

        _this4.$toast.error("Default PDF Invoice Gagal Diubah");
      });
    },
    FormDefaultSuratKomitmen: function FormDefaultSuratKomitmen() {
      var _this5 = this;

      var formData = new FormData();
      formData.append("file", this.imageDefaultPDFSuratKomitmen);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/image/imageDefaultSuratKomitmen", formData).then(function (response) {
        _this5.$refs.defaultPdfSuratKomitmen.close();

        _this5.$toast.success("Default PDF Surat Komitmen Berhasil Diubah");
      })["catch"](function (error) {
        console.error(error);

        _this5.$toast.error("Default PDF Surat Komitmen Gagal Diubah");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4& ***!
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
  return _c("div", { staticClass: "container-fluid mt-3" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Setting Default Gambar dan Lampiran"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "div",
          { staticClass: "my-5" },
          [
            _c("label", [_vm._v(" Background Login :")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "images/background/background.jpg",
                width: "500px",
                height: "100%",
              },
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mt-3",
                on: {
                  click: function ($event) {
                    return _vm.showModal1()
                  },
                },
              },
              [_vm._v("\n          Ganti Background Login\n        ")]
            ),
            _vm._v(" "),
            _c("sweet-modal", { ref: "backgroundLogin" }, [
              _c("form", { on: { submit: _vm.FormbackgroundLogin } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Upload Background Login")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      name: "file",
                      accept: "image/jpeg, image/png",
                    },
                    on: { change: _vm.onFileChangeBackgroundLogin },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      "\n              Update Background Login\n            "
                    ),
                  ]
                ),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "my-5" },
          [
            _c("label", [_vm._v(" Default Image Barang")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: "images/default.jpg",
                width: "500px",
                height: "100%",
              },
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mt-3",
                on: {
                  click: function ($event) {
                    return _vm.showModal2()
                  },
                },
              },
              [_vm._v("\n          Ganti Default Image Barang\n        ")]
            ),
            _vm._v(" "),
            _c("sweet-modal", { ref: "defaultImage" }, [
              _c("form", { on: { click: _vm.FormDefaultImage } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Upload Default Image Barang")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      name: "file",
                      accept: "image/jpeg, image/png, image/jpg",
                    },
                    on: { change: _vm.onFileChangeDefaultImage },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      "\n              Update Default Image Barang\n            "
                    ),
                  ]
                ),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "my-5" },
          [
            _c("label", [_vm._v("Lampiran Default PDF Invoice")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("iframe", {
              attrs: {
                src: "lampiran/default.pdf",
                type: "document.pdf",
                width: "500px",
                height: "500px",
              },
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mt-3",
                on: {
                  click: function ($event) {
                    return _vm.showModal3()
                  },
                },
              },
              [_vm._v("\n          Ganti Default PDF Invoice\n        ")]
            ),
            _vm._v(" "),
            _c("sweet-modal", { ref: "defaultPdfInvoice" }, [
              _c("form", { on: { submit: _vm.FormDefaultInvoice } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Upload Default PDF Invoice")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      name: "file",
                      accept: "application/pdf",
                    },
                    on: { change: _vm.onFileChangeDefaultPDF },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      "\n              Update Default PDF Invoice\n            "
                    ),
                  ]
                ),
              ]),
            ]),
          ],
          1
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "my-5" },
          [
            _c("label", [_vm._v("Lampiran Default PDF Surat Komitmen")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("iframe", {
              attrs: {
                src: "surat_komitmen/default.pdf",
                type: "document.pdf",
                width: "500px",
                height: "500px",
              },
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-success mt-3",
                on: {
                  click: function ($event) {
                    return _vm.showModal4()
                  },
                },
              },
              [_vm._v("\n          Ganti Default PDF Surat Komitmen\n        ")]
            ),
            _vm._v(" "),
            _c("sweet-modal", { ref: "defaultPdfSuratKomitmen" }, [
              _c("form", { on: { click: _vm.FormDefaultSuratKomitmen } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Upload Default PDF Surat Komitmen")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      name: "file",
                      accept: "application/pdf",
                    },
                    on: { change: _vm.onFileChangeDefaultSuratKomitmen },
                  }),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [
                    _vm._v(
                      "\n              Update Default PDF Surat Komitmen\n            "
                    ),
                  ]
                ),
              ]),
            ]),
          ],
          1
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/image/index.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/src/components/image/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=261cf1b4& */ "./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/image/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/image/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/image/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/src/components/image/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/image/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=261cf1b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/image/index.vue?vue&type=template&id=261cf1b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_261cf1b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);