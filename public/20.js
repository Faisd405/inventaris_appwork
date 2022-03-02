(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      barang_id: ["", ""],
      tanggal_awal: "",
      tanggal_akhir: "",
      historys: {
        barang: {
          nama_barang: ""
        }
      },
      barang: [],
      barangs: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/history").then(function (response) {
      _this.historys = response.data.history;
    });
    axios.get("/api/barang").then(function (response) {
      _this.barang = response.data.barang;
    });
  },
  computed: {
    filterhistorys: function filterhistorys() {
      return this.filterhistorysByIdBarang(this.filterhistorysByNamaBarang(this.filterhistorysBytanggalAwal(this.filterhistorysBytanggalAkhir(this.historys))));
    },
    // Remove Duplicate history.tanggal_awal_penggunaan
    FilterAwal: function FilterAwal() {
      return this.historys.filter(function (history, index, self) {
        return index === self.findIndex(function (t) {
          return t.tanggal_awal_penggunaan === history.tanggal_awal_penggunaan;
        });
      });
    },
    FilterAkhir: function FilterAkhir() {
      return this.historys.filter(function (history, index, self) {
        return index === self.findIndex(function (t) {
          return t.tanggal_akhir_penggunaan === history.tanggal_akhir_penggunaan;
        });
      });
    }
  },
  methods: {
    filterhistorysByIdBarang: function filterhistorysByIdBarang(historys) {
      var _this2 = this;

      return historys.filter(function (history) {
        return !history.barang.id.toString().indexOf(_this2.barang_id[0]);
      });
    },
    filterhistorysByNamaBarang: function filterhistorysByNamaBarang(historys) {
      var _this3 = this;

      return historys.filter(function (history) {
        return !history.barang.nama_barang.toString().indexOf(_this3.barang_id[1]);
      });
    },
    filterhistorysBytanggalAwal: function filterhistorysBytanggalAwal(historys) {
      var _this4 = this;

      return historys.filter(function (history) {
        return !history.tanggal_awal_penggunaan.indexOf(_this4.tanggal_awal);
      });
    },
    filterhistorysBytanggalAkhir: function filterhistorysBytanggalAkhir(historys) {
      var _this5 = this;

      return historys.filter(function (history) {
        return !history.tanggal_akhir_penggunaan.indexOf(_this5.tanggal_akhir);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "table-responsive mt-2" }, [
              _c(
                "div",
                [
                  _c(
                    "b-row",
                    [
                      _c("b-col", { staticClass: "my-1", attrs: { lg: "6" } }, [
                        _c(
                          "form",
                          [
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mt-1 mb-1",
                                attrs: {
                                  label: "Filter Barang",
                                  "label-for": "filter-input",
                                  "label-cols-sm": "3",
                                  "label-align-sm": "left",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-input-group", { attrs: { size: "sm" } }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.barang_id,
                                          expression: "barang_id",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: { id: "filter-input" },
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.barang_id = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    [
                                      _c(
                                        "option",
                                        { domProps: { value: ["", ""] } },
                                        [_vm._v("Semua Barang")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.barang, function (barang) {
                                        return _c(
                                          "option",
                                          {
                                            key: barang.id,
                                            domProps: {
                                              value: [
                                                barang.id,
                                                barang.nama_barang,
                                              ],
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(barang.nama_barang) +
                                                "\n                          "
                                            ),
                                          ]
                                        )
                                      }),
                                    ],
                                    2
                                  ),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mt-1 mb-1",
                                attrs: {
                                  label: "Filter Tanggal awal",
                                  "label-for": "filter-input",
                                  "label-cols-sm": "3",
                                  "label-align-sm": "left",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-input-group", { attrs: { size: "sm" } }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.tanggal_awal,
                                          expression: "tanggal_awal",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.tanggal_awal = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(
                                          "\n                            Semua Tanggal Awal Penggunaan\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.FilterAwal,
                                        function (history) {
                                          return _c(
                                            "option",
                                            {
                                              key: history.tanggal_awal_penggunaan,
                                              domProps: {
                                                value:
                                                  history.tanggal_awal_penggunaan,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    history.tanggal_awal_penggunaan
                                                  ) +
                                                  "\n                          "
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                ]),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                staticClass: "mt-1 mb-1",
                                attrs: {
                                  label: "Filter Tanggal akhir",
                                  "label-for": "filter-input",
                                  "label-cols-sm": "3",
                                  "label-align-sm": "left",
                                  "label-size": "sm",
                                },
                              },
                              [
                                _c("b-input-group", { attrs: { size: "sm" } }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.tanggal_akhir,
                                          expression: "tanggal_akhir",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function ($event) {
                                          var $$selectedVal =
                                            Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function (o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function (o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                          _vm.tanggal_akhir = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        },
                                      },
                                    },
                                    [
                                      _c("option", { attrs: { value: "" } }, [
                                        _vm._v(
                                          "\n                            Semua Tanggal Akhir Penggunaan\n                          "
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.FilterAkhir,
                                        function (history) {
                                          return _c(
                                            "option",
                                            {
                                              key: history.tanggal_akhir_penggunaan,
                                              domProps: {
                                                value:
                                                  history.tanggal_akhir_penggunaan,
                                              },
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    history.tanggal_akhir_penggunaan
                                                  ) +
                                                  "\n                          "
                                              ),
                                            ]
                                          )
                                        }
                                      ),
                                    ],
                                    2
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.barang_id[0] != ""
                          ? _c("span", [
                              _c("label", [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-primary btn-sm mt-1 mb-1",
                                    attrs: {
                                      href:
                                        "/history/history_pdf/detail/" +
                                        _vm.barang_id +
                                        "/" +
                                        _vm.tanggal_awal +
                                        "/" +
                                        _vm.tanggal_akhir,
                                    },
                                  },
                                  [_vm._v("Print Riwayat Barang PDF")]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("label", [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "btn btn-primary btn-sm mt-1 mb-1",
                                    attrs: {
                                      href:
                                        "/history/history_excel/detail/" +
                                        _vm.barang_id +
                                        "/" +
                                        _vm.tanggal_awal +
                                        "/" +
                                        _vm.tanggal_akhir,
                                    },
                                  },
                                  [_vm._v("Print Riwayat Barang Excel")]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
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
                        _c("option", { attrs: { value: "10" } }, [
                          _vm._v("10"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "25" } }, [
                          _vm._v("25"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "50" } }, [
                          _vm._v("50"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "100" } }, [
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
                        data: _vm.filterhistorys,
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
                              _vm._l(displayData, function (history) {
                                return _c("tr", { key: history.id }, [
                                  history.barang != null
                                    ? _c("td", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(history.barang.nama_barang) +
                                            "\n                    "
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(history.tanggal_awal_penggunaan)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(history.tanggal_akhir_penggunaan)
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  history.pengguna != null
                                    ? _c("td", [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(history.pengguna.name) +
                                            "\n                    "
                                        ),
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(history.keterangan)),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(history.status))]),
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
                          _c("th", [_vm._v("Nama Barang")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Tanggal Awal Penggunaan")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Tanggal Akhir Penggunaan")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Nama Pengguna")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Keterangan")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")]),
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
                ],
                1
              ),
            ]),
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
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-body pallet-darken font-lighten" }, [
        _vm._v(
          "\n          Halaman ini merupakan untuk mengetahui Riwayat penggunaan barang\n          yang pernah memakai barang dan yang sedang memakai barang\n        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [_c("div", [_vm._v("Cek History Per Barang")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/history/detail.vue":
/*!************************************************************!*\
  !*** ./resources/assets/src/components/history/detail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=de6a39f4& */ "./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/history/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=de6a39f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/detail.vue?vue&type=template&id=de6a39f4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_de6a39f4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);