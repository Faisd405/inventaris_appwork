(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
      barang: {},
      kategori: [],
      jenis: [],
      lokasi: [],
      user: [],
      preview: null
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/kategori").then(function (response) {
      _this.kategori = response.data.kategori;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users").then(function (response) {
      _this.user = response.data.user;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/jenis").then(function (response) {
      _this.jenis = response.data.jenis;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/lokasi").then(function (response) {
      _this.lokasi = response.data.lokasi;
    });
  },
  methods: {
    BarangStore: function BarangStore() {
      var _this2 = this;

      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      var formData = new FormData();
      formData.append("nama_barang", this.barang.nama_barang);
      formData.append("kode_barang", this.barang.kode_barang);
      formData.append("detail_barang", this.barang.detail_barang);
      formData.append("kategori_id", this.barang.kategori_id);
      formData.append("fungsi", this.barang.fungsi);
      formData.append("harga_barang", this.barang.harga_barang);
      formData.append("jenis_id", this.barang.jenis_id);
      formData.append("lokasi_id", this.barang.lokasi);
      formData.append("user_id", this.barang.user_id);
      formData.append("image", this.barang.image);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/barang", formData, config).then(function (response) {
        _this2.$router.push("/barang");
      })["catch"](function (errors) {
        console.log(errors);
        console.log(formData.append);
      });
    },
    onFileChange: function onFileChange(e) {
      this.barang.image = e.target.files[0];
      this.preview = URL.createObjectURL(e.target.files[0]);
    },
    createImage: function createImage(file) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = function (e) {
        vm.barang.image = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c& ***!
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
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Create Barang")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.BarangStore.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "nama_barang" } }, [
                    _vm._v("Nama Barang"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.nama_barang,
                        expression: "barang.nama_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "nama_barang",
                      placeholder: "Masukan Nama Barang",
                    },
                    domProps: { value: _vm.barang.nama_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.barang, "nama_barang", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "kode_barang" } }, [
                    _vm._v("Kode Barang"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.kode_barang,
                        expression: "barang.kode_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "kode_barang",
                      placeholder: "Masukan Kode Barang",
                    },
                    domProps: { value: _vm.barang.kode_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.barang, "kode_barang", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "detail_barang" } }, [
                    _vm._v("Detail Barang"),
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.detail_barang,
                        expression: "barang.detail_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "detail_barang",
                      placeholder: "Masukan Detail Barang",
                    },
                    domProps: { value: _vm.barang.detail_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.barang,
                          "detail_barang",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "kategori_id" } }, [
                    _vm._v("Kategori"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.barang.kategori_id,
                          expression: "barang.kategori_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "kategori_id" },
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
                            _vm.barang,
                            "kategori_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih Kategori"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.kategori, function (kategori) {
                        return _c(
                          "option",
                          {
                            key: kategori.id,
                            domProps: { value: kategori.id },
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(kategori.nama_kategori) +
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
                  _c("label", { attrs: { for: "fungsi" } }, [_vm._v("Fungsi")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.fungsi,
                        expression: "barang.fungsi",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "fungsi",
                      placeholder: "Masukan Fungsi",
                    },
                    domProps: { value: _vm.barang.fungsi },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.barang, "fungsi", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "harga_barang" } }, [
                    _vm._v("Harga Barang"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.barang.harga_barang,
                        expression: "barang.harga_barang",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "number",
                      name: "harga_barang",
                      placeholder: "Masukan Harga Barang",
                    },
                    domProps: { value: _vm.barang.harga_barang },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.barang,
                          "harga_barang",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form=group" }, [
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
                          value: _vm.barang.lokasi_id,
                          expression: "barang.lokasi_id",
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
                            _vm.barang,
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
                  _c("label", { attrs: { for: "jenis_id" } }, [
                    _vm._v("Jenis"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.barang.jenis_id,
                          expression: "barang.jenis_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "jenis_id" },
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
                            _vm.barang,
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
                                _vm._s(jenis.jenis_barang) +
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
                  _c("label", { attrs: { for: "user_id" } }, [_vm._v("User")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.barang.user_id,
                          expression: "barang.user_id",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "user_id" },
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
                            _vm.barang,
                            "user_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "", disabled: "" } }, [
                        _vm._v("Pilih User"),
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.user, function (user) {
                        return _c(
                          "option",
                          { key: user.id, domProps: { value: user.id } },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(user.name) +
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
                  _c("label", { attrs: { for: "image" } }, [_vm._v("image")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "file", name: "image" },
                    on: { change: _vm.onFileChange },
                  }),
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm.preview
                  ? _c("div", { staticClass: "preview" }, [
                      _c("p", [_vm._v("Preview:")]),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-thumbnail",
                        attrs: { src: _vm.preview },
                      }),
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(0),
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

/***/ "./resources/assets/src/components/barang/create.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/components/barang/create.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=c106a18c& */ "./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/barang/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=c106a18c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/create.vue?vue&type=template&id=c106a18c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_c106a18c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);