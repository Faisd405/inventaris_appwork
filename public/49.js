(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Lampiran Pengguna"
  },
  data: function data() {
    return {
      pengguna: {},
      user: "",
      isLoggedIn: false,
      loginType: "",
      previewPDF: "",
      penggunas: []
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/pengguna/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barang = response.data.barang;
      _this.pengguna = response.data.pengguna;
      _this.buku = response.data.buku;
    });
  },
  methods: {
    onFileChangePDF: function onFileChangePDF(e) {
      this.penggunas.surat_komitmen = e.target.files[0];
      this.previewPDF = URL.createObjectURL(e.target.files[0]);
    },
    showModal: function showModal() {
      this.$refs.checkLampiran.open();
    },
    checkForm: function checkForm() {
      var _this2 = this;

      var formData = new FormData();
      formData.append("surat_komitmen", this.penggunas.surat_komitmen);
      var uri = "/api/pengguna/".concat(this.$route.params.id, "/lampiran");
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(uri, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (response) {
        _this2.pengguna = response.data.pengguna;
        _this2.previewPDF = "/surat_komitmen/" + response.data.pengguna.surat_komitmen + "#view=fit";
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
      if (error.response.status === 401) {
        localStorage.clear();

        _this3.$router.push("/login");
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card mt-5" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Lampiran Surat Komitmen Penggunaan Barang"),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "form",
            {
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.checkForm.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", [_vm._v("Upload Surat Terbaru")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "file",
                    name: "file",
                    accept: "application/pdf",
                  },
                  on: { change: _vm.onFileChangePDF },
                }),
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Update Surat")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.showModal()
                    },
                  },
                },
                [_vm._v("\n          Check Surat\n        ")]
              ),
            ]
          ),
          _vm._v(" "),
          _c("sweet-modal", { ref: "checkLampiran" }, [
            _c("p", [_vm._v("Preview PDF:")]),
            _vm._v(" "),
            _vm.previewPDF
              ? _c("div", { staticClass: "previewPDF" }, [
                  _c("iframe", {
                    staticClass: "pdf-thumbnail",
                    attrs: {
                      src: _vm.previewPDF,
                      type: "document.pdf",
                      width: "100%",
                      height: "500px",
                    },
                  }),
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.previewPDF
              ? _c("div", [_c("p", [_vm._v("Tidak ada lampiran surat")])])
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", [
            _vm._v("Surat Komitmen " + _vm._s(_vm.pengguna.name) + " :"),
          ]),
          _vm._v(" "),
          _c("iframe", {
            attrs: {
              src:
                "/surat_komitmen/" + _vm.pengguna.surat_komitmen + "#view=fit",
              type: "document.pdf",
              width: "100%",
              height: "1000px",
            },
          }),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/pengguna/lampiran.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/lampiran.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lampiran.vue?vue&type=template&id=698396f8& */ "./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8&");
/* harmony import */ var _lampiran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lampiran.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lampiran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/pengguna/lampiran.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lampiran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lampiran.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lampiran_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lampiran.vue?vue&type=template&id=698396f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/lampiran.vue?vue&type=template&id=698396f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_lampiran_vue_vue_type_template_id_698396f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);