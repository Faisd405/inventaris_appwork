(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
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
    title: "Edit Buku"
  },
  data: function data() {
    return {
      buku: {},
      errors: [],
      lokasi: [],
      jenis: [],
      pengguna: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/buku/".concat(this.$route.params.id)).then(function (response) {
      _this.buku = response.data.buku;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/lokasi").then(function (response) {
      _this.lokasi = response.data.lokasi;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/jenis").then(function (response) {
      _this.jenis = response.data.jenis;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna").then(function (response) {
      _this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    BookUpdate: function BookUpdate() {
      var _this2 = this;

      var uri = "/api/buku/" + this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.buku).then(function (response) {
        _this2.$router.push("/buku");
      });
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (!this.buku.judul) {
        this.errors.push("Judul harus diisi");
      }

      if (!this.buku.penulis) {
        this.errors.push("Penulis harus diisi");
      }

      if (!this.buku.penerbit) {
        this.errors.push("Penerbit harus diisi");
      }

      if (this.buku.tanggal == "") {
        this.errors.push("Tahun harus diisi");
      }

      if (this.barang.tanggal != "") {
        if (this.barang.tanggal < 1901) {
          this.errors.push("Tahun tidak boleh kurang dari 1901");
        }

        if (this.barang.tanggal.length > 4) {
          this.errors.push("Tahun tidak boleh lebih dari 4 digit");
        }
      }

      if (!this.buku.kondisi) {
        this.errors.push("Kondisi harus diisi");
      }

      if (!this.buku.jumlah) {
        this.errors.push("Jumlah harus diisi");
      }

      if (!this.buku.jenis_id) {
        this.errors.push("Jenis harus diisi");
      }

      if (!this.buku.pengguna_id) {
        this.errors.push("Pengguna harus diisi");
      }

      if (!this.buku.lokasi_id) {
        this.errors.push("Lokasi harus diisi");
      }

      if (this.errors.length > 0) {
        e.preventDefault();
      }

      if (this.errors.length == 0) {
        this.BookUpdate();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "card-header" }, [_vm._v("Edit Buku")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: [
                    function ($event) {
                      $event.preventDefault()
                      return _vm.BookUpdate.apply(null, arguments)
                    },
                    _vm.checkForm,
                  ],
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Judul Buku")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.judul,
                        expression: "buku.judul",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan judul" },
                    domProps: { value: _vm.buku.judul },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "judul", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Penulis")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.penulis,
                        expression: "buku.penulis",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan Penulis" },
                    domProps: { value: _vm.buku.penulis },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "penulis", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Penerbit")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.penerbit,
                        expression: "buku.penerbit",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan Penerbit" },
                    domProps: { value: _vm.buku.penerbit },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "penerbit", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Tahun")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.tanggal,
                        expression: "buku.tanggal",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      min: "1901",
                      max: "2099",
                      placeholder: "Masukan Tahun",
                    },
                    domProps: { value: _vm.buku.tanggal },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "tanggal", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Kondisi")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.kondisi,
                        expression: "buku.kondisi",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", placeholder: "Masukan Kondisi" },
                    domProps: { value: _vm.buku.kondisi },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "kondisi", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Jumlah")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.jumlah,
                        expression: "buku.jumlah",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Masukan Jumlah" },
                    domProps: { value: _vm.buku.jumlah },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "jumlah", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Jenis")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buku.jenis_id,
                          expression: "buku.jenis_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "jenis" },
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
                          _vm.$set(
                            _vm.buku,
                            "jenis_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Jenis"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.jenis, function (jenis) {
                        return _c(
                          "option",
                          { key: jenis.id, domProps: { value: jenis.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(jenis.jenis_buku) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Pengguna")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buku.pengguna_id,
                          expression: "buku.pengguna_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "pengguna" },
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
                          _vm.$set(
                            _vm.buku,
                            "pengguna_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Pengguna"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.pengguna, function (pengguna) {
                        return _c(
                          "option",
                          {
                            key: pengguna.id,
                            domProps: { value: pengguna.id },
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(pengguna.name) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "lokasi_id" } }, [
                    _vm._v("Lokasi"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.buku.lokasi_id,
                          expression: "buku.lokasi_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "lokasi_id" },
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
                          _vm.$set(
                            _vm.buku,
                            "lokasi_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Lokasi"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.lokasi, function (lokasi) {
                        return _c(
                          "option",
                          { key: lokasi.id, domProps: { value: lokasi.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(lokasi.lokasi) +
                                "\n                "
                            ),
                          ]
                        )
                      }),
                    ],
                    2
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Harga")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.buku.harga,
                        expression: "buku.harga",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { type: "number", placeholder: "Masukan Harga" },
                    domProps: { value: _vm.buku.harga },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.buku, "harga", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm.errors.length
                  ? _c("div", [
                      _c("div", { staticClass: "alert alert-danger" }, [
                        _c("b", [_vm._v("Perhatikan hal berikut :")]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          _vm._l(_vm.errors, function (error) {
                            return _c("li", { key: error }, [
                              _vm._v(_vm._s(error)),
                            ])
                          }),
                          0
                        ),
                      ]),
                    ])
                  : _vm._e(),
              ]
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
    return _c("div", { staticClass: "form-group" }, [
      _c(
        "button",
        { staticClass: "btn btn-md btn-success", attrs: { type: "submit" } },
        [_vm._v("\n                SIMPAN\n              ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/buku/edit.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/src/components/buku/edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=1d80b21c& */ "./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/buku/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=1d80b21c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/buku/edit.vue?vue&type=template&id=1d80b21c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_1d80b21c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);