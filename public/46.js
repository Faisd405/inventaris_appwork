(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Permintaan Admin"
  },
  data: function data() {
    return {
      permintaan: [],
      user: "",
      isLoggedIn: false,
      loginType: null,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      DataDelete: {},
      DataSetuju: {
        barang: {},
        pengguna: {}
      }
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/permintaan";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.permintaan = response.data.permintaan;
    });
  },
  methods: {
    showModal: function showModal(data) {
      this.DataDelete = data;
      this.$refs.modalDelete.open();
    },
    closeModal: function closeModal() {
      this.$refs.modalDelete.close();
    },
    deleteData: function deleteData(id) {
      this.closeModal();
      this.destroy(id);
    },
    setujuModal: function setujuModal(data) {
      this.DataSetuju = data;
      this.$refs.modalSetuju.open();
    },
    closeModalSetuju: function closeModalSetuju() {
      this.$refs.modalSetuju.close();
    },
    setujuData: function setujuData(data) {
      this.closeModalSetuju();
      this.setuju(data);
    },
    setuju: function setuju(id) {
      var _this2 = this;

      var uri = "/api/permintaan/setuju";
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(uri, {
        id: id
      }).then(function (response) {
        _this2.permintaan = _this2.permintaan.filter(function (permintaan) {
          return permintaan.barang_id != response.data.permintaan.id;
        });
      });
    },
    destroy: function destroy(id) {
      var _this3 = this;

      var uri = "/api/permintaan/".concat(id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"](uri).then(function (response) {
        _this3.permintaan = _this3.permintaan.filter(function (permintaan) {
          return permintaan.id != id;
        });
      });
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this4.user = response.data;
      _this4.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this4.$router.push("/login");
      }

      console.error(error);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Permintaan")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
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
                      data: _vm.permintaan,
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
                                _c("td", [_vm._v(_vm._s(data.id))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(data.barang.nama_barang)),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(data.barang.detail_barang)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.barang.fungsi))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toCurrency")(
                                        data.barang.harga_barang
                                      )
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(data.barang.jumlah_barang)),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.pengguna.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.keterangan))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-sm btn-danger mt-1",
                                      on: {
                                        click: function ($event) {
                                          return _vm.showModal(data)
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                      Tolak\n                    "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-sm btn-success mt-1",
                                      on: {
                                        click: function ($event) {
                                          return _vm.setujuModal(data)
                                        },
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                      Setuju\n                    "
                                      ),
                                    ]
                                  ),
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
                      _c("tr", [
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Nama Barang"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Detail Barang"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Fungsi"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Harga Barang"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Jumlah Barang"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Nama User"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Keterangan"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("Aksi")]),
                      ]),
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
                _vm._v(" "),
                _c(
                  "sweet-modal",
                  { ref: "modalDelete", attrs: { icon: "warning" } },
                  [
                    _c("div", { staticClass: "d-block text-center" }, [
                      _c("h3", [
                        _vm._v(
                          "\n                  Apakah Anda Yakin Mau Menolak Permintaan Ini?\n                  "
                        ),
                        _vm.DataDelete
                          ? _c("div", [
                              _vm._v(_vm._s(_vm.DataDelete.nama_barang)),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success btn-lg",
                          on: {
                            click: function ($event) {
                              return _vm.deleteData(_vm.DataDelete.id)
                            },
                          },
                        },
                        [_vm._v("\n                  Tolak\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-lg",
                          on: {
                            click: function ($event) {
                              return _vm.closeModal()
                            },
                          },
                        },
                        [_vm._v("\n                  Batal\n                ")]
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("sweet-modal", { ref: "modalSetuju" }, [
                  _c("div", { staticClass: "d-block text-center" }, [
                    _c("h3", [
                      _vm._v(
                        "\n                  Apakah Anda Yakin Setuju dengan Permintaan Ini?\n                  "
                      ),
                      _vm.DataSetuju
                        ? _c("div", [
                            _c("br"),
                            _vm._v(
                              "\n                    barang yang di inginkan :\n                    " +
                                _vm._s(_vm.DataSetuju.barang.nama_barang) +
                                "\n                    "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(
                              "\n                    pengguna yang ingin memakai :\n                    " +
                                _vm._s(_vm.DataSetuju.pengguna.name) +
                                "\n                  "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success btn-lg",
                        on: {
                          click: function ($event) {
                            return _vm.setujuData(_vm.DataSetuju.id)
                          },
                        },
                      },
                      [_vm._v("\n                  Setuju\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-lg",
                        on: {
                          click: function ($event) {
                            return _vm.closeModalSetuju()
                          },
                        },
                      },
                      [_vm._v("\n                  Batal\n                ")]
                    ),
                  ]),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3 mt-3" }, [
      _c("div", { staticClass: "card-body pallet-darken font-lighten" }, [
        _vm._v(
          "\n          Halaman Permintaan Admin merupakan halaman untuk menerima apa yang\n          telah di ajukan oleh user dan memasukan ke daftar barang.\n        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/permintaan/admin/index.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/src/components/permintaan/admin/index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=79bb34cc& */ "./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/permintaan/admin/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=79bb34cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/permintaan/admin/index.vue?vue&type=template&id=79bb34cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_79bb34cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);