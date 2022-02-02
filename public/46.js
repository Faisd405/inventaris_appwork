(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/history/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "history"
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      filters: {
        tanggal_awal_penggunaan: {
          value: {
            min: "",
            max: ""
          },
          custom: this.dateFilter
        }
      },
      history: [],
      user: "",
      isLoggedIn: false,
      loginType: null
    };
  },
  methods: {
    dateFilter: function dateFilter(filterValue, row) {
      var min = filterValue.min;
      var max = filterValue.max;
      var rowValue = row.tanggal_awal_penggunaan;

      if (min && max) {
        return rowValue >= min && rowValue <= max;
      }

      if (min) {
        return rowValue >= min;
      }

      if (max) {
        return rowValue <= max;
      }

      return true;
    }
  },
  created: function created() {
    var _this = this;

    var uri = "/api/history";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.history = response.data.history;
    });
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
  return _c("div", { staticClass: "container mt-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "card card-default" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("history")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "div",
            { staticClass: "table-responsive mt-2" },
            [
              _c("label", [_vm._v("Minimal Tanggal Awal:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.tanggal_awal_penggunaan.value.min,
                    expression: "filters.tanggal_awal_penggunaan.value.min",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  min: "1997-01-01",
                  max: _vm.filters.tanggal_awal_penggunaan.value.max,
                },
                domProps: {
                  value: _vm.filters.tanggal_awal_penggunaan.value.min,
                },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.filters.tanggal_awal_penggunaan.value,
                      "min",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _c("label", [_vm._v("Maksimal Tanggal Awal:")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.filters.tanggal_awal_penggunaan.value.max,
                    expression: "filters.tanggal_awal_penggunaan.value.max",
                  },
                ],
                staticClass: "form-control",
                attrs: {
                  max: "2030-12-31",
                  min: _vm.filters.tanggal_awal_penggunaan.value.min,
                },
                domProps: {
                  value: _vm.filters.tanggal_awal_penggunaan.value.max,
                },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.filters.tanggal_awal_penggunaan.value,
                      "max",
                      $event.target.value
                    )
                  },
                },
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("datepicker", { attrs: { placeholder: "Select Date" } }),
              _vm._v(" "),
              _c(
                "v-table",
                {
                  staticClass: "table table-striped table-bordered",
                  attrs: { data: _vm.history, filters: _vm.filters },
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
                              _c("td", { attrs: { scope: "data" } }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(data.barang.nama_barang) +
                                    "\n                  "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(data.tanggal_awal_penggunaan) +
                                    "\n                  "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(data.tanggal_akhir_penggunaan) +
                                    "\n                  "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(data.keterangan) +
                                    "\n                  "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(data.pengguna.name) +
                                    "\n                  "
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
                    _c("th", [_vm._v("Nama Barang")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Tanggal Awal Penggunaan")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Tanggal Akhir Penggunaan")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Keterangan")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Nama Pengguna")]),
                  ]),
                ]
              ),
            ],
            1
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
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