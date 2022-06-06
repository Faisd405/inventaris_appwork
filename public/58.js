(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  data: function data() {
    return {
      chartData: {
        // Labels for the bars
        labels: [],
        //year
        datasets: [{
          label: "Total Aset Pertahun",
          borderWidth: 1,
          // Colors for the bars
          // lightblue
          backgroundColor: "rgba(185, 215, 234, 0.5)",
          borderColor: "rgba(118, 159, 205, 1)",
          pointBorderColor: "#2554FF",
          // length of the bar
          data: []
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/barang/year").then(function (response) {
      _this.chartData.labels = response.data.year;
      _this.chartData.datasets[0].data = response.data.harga_barang;

      _this.renderChart(_this.chartData, _this.options);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chart_TotalChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chart/TotalChart.vue */ "./resources/assets/src/components/Chart/TotalChart.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    TotalChart: _Chart_TotalChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      user: "",
      isLoggedIn: false,
      loginType: "",
      total: 0,
      currentPage: 1,
      totalPages: 0,
      pageSize: 10
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/barang";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/total").then(function (response) {
      _this.total = response.data.total;
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

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\xampp\\htdocs\\inventaris_appwork\\node_modules\\vue-chartjs\\es\\index.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-12 justify-content-center" }, [
        _c("div", { staticClass: "card card-default" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Harga Barang")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              [
                _c("label", [_vm._v("Filter berdasarkan Nama Barang:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filters.nama_barang.value,
                      expression: "filters.nama_barang.value",
                    },
                  ],
                  staticClass: "form-control",
                  domProps: { value: _vm.filters.nama_barang.value },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.filters.nama_barang,
                        "value",
                        $event.target.value
                      )
                    },
                  },
                }),
                _vm._v(" "),
                _c("br"),
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
                      data: _vm.barang,
                      filters: _vm.filters,
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
                                _c("td", [_vm._v(_vm._s(data.nama_barang))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toCurrency")(data.harga_barang)
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.pengguna.name))]),
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
                          _c(
                            "v-th",
                            {
                              attrs: { sortKey: "harga_barang", scope: "col" },
                            },
                            [_vm._v("Harga Barang")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Pemakai"),
                          ]),
                        ],
                        1
                      ),
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
        _vm._v(" "),
        _c("div", { staticClass: "card mt-3" }, [
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c("label", [_vm._v("Chart Total :")]),
              _vm._v(" "),
              _c("TotalChart"),
            ],
            1
          ),
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
          "\n      Halaman laporan yang memberikan informasi data harga barang.\n    "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/Chart/TotalChart.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/src/components/Chart/TotalChart.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TotalChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TotalChart.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _TotalChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Chart/TotalChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TotalChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Chart/TotalChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TotalChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba& */ "./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba&");
/* harmony import */ var _LaporanTHargaBarang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaporanTHargaBarang.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LaporanTHargaBarang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Laporan/LaporanTHargaBarang.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTHargaBarang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LaporanTHargaBarang.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTHargaBarang_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Laporan/LaporanTHargaBarang.vue?vue&type=template&id=3c58d7ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LaporanTHargaBarang_vue_vue_type_template_id_3c58d7ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);