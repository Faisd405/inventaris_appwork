(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/history/index.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      historys: {
        pengguna_id: "",
        keterangan: ""
      },
      pengguna: [],
      fields: [{
        key: "id",
        label: "Id"
      }, {
        key: "barang.nama_barang",
        label: "Nama Barang",
        sortable: true,
        filterByFormatted: true
      }, {
        key: "tanggal_awal_penggunaan",
        label: "Tanggal Awal Penggunaan",
        sortable: true
      }, {
        key: "tanggal_akhir_penggunaan",
        label: "Tanggal Akhir Penggunaan",
        sortable: true
      }, {
        key: "pengguna.name",
        label: "Nama Pengguna",
        sortable: true
      }, {
        key: "keterangan",
        label: "Keterangan",
        sortable: true
      }, {
        key: "status",
        label: "Status",
        sortable: true
      }, {
        key: "action",
        label: "Action",
        sortable: false
      }],
      filter: null,
      filterOn: [],
      sortDesc: true,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 15, 25, 50, {
        value: 100,
        text: "Show a lot"
      }],
      history: [],
      barang: [],
      sortBy: "id",
      user: "",
      isLoggedIn: false,
      loginType: null,
      errors: []
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/history").then(function (response) {
      _this.history = response.data.history;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/").then(function (response) {
      _this.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna/").then(function (response) {
      _this.pengguna = response.data.pengguna;
    });
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    destroy: function destroy(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/history/".concat(id)).then(function (response) {
        _this2.history = _this2.history.filter(function (history) {
          return history.id != id;
        });
      });
    },
    RelasiUserBarangUpdate: function RelasiUserBarangUpdate(id, id_history) {
      var _this3 = this;

      this.historys.id_history = id_history;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/history/".concat(id), this.historys).then(function (response) {
        _this3.historys = {};
        _this3.barang = response.data.barang;
        location.reload();
      })["catch"](function (error) {
        console.log(error);
        console.log(_this3.historys);
      });
    },
    showModal: function showModal(id) {
      this.$refs["modal-".concat(id)].show();
    },
    checkForm: function checkForm(e) {
      this.errors = [];

      if (this.historys.pengguna_id == "") {
        this.errors.push("Pengguna Harus Diisi");
      }

      if (this.historys.pengguna_id == this.barang[0].pengguna.id) {
        this.errors.push("Pengguna Tidak Boleh Sama");
      }

      if (this.errors.length) {
        e.preventDefault();
      }
    }
  },
  computed: {
    rows: function rows() {
      return this.history.length;
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

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d& ***!
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
  return _c("div", { staticClass: "container mt-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-xl-12" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card card-default" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _c("div", [_vm._v("History")]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-outline-primary",
                      attrs: { to: "/history/detail" },
                    },
                    [_vm._v("Cek Riwayat PerBarang")]
                  ),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "mt-2" },
              [
                _c(
                  "b-row",
                  [
                    _c(
                      "b-col",
                      { staticClass: "my-1", attrs: { lg: "6" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            staticClass: "mb-0",
                            attrs: {
                              label: "Filter",
                              "label-for": "filter-input",
                              "label-cols-sm": "3",
                              "label-align-sm": "right",
                              "label-size": "sm",
                            },
                          },
                          [
                            _c(
                              "b-input-group",
                              { attrs: { size: "sm" } },
                              [
                                _c("b-form-input", {
                                  attrs: {
                                    id: "filter-input",
                                    type: "search",
                                    placeholder: "Type to Search",
                                  },
                                  model: {
                                    value: _vm.filter,
                                    callback: function ($$v) {
                                      _vm.filter = $$v
                                    },
                                    expression: "filter",
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-input-group-append",
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { disabled: !_vm.filter },
                                        on: {
                                          click: function ($event) {
                                            _vm.filter = ""
                                          },
                                        },
                                      },
                                      [_vm._v("Clear")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-col",
                      { staticClass: "my-1", attrs: { sm: "5", md: "6" } },
                      [
                        _c(
                          "b-form-group",
                          {
                            staticClass: "mb-0",
                            attrs: {
                              label: "Per page",
                              "label-for": "per-page-select",
                              "label-cols-sm": "6",
                              "label-cols-md": "4",
                              "label-cols-lg": "3",
                              "label-align-sm": "right",
                              "label-size": "sm",
                            },
                          },
                          [
                            _c("b-form-select", {
                              attrs: {
                                id: "per-page-select",
                                options: _vm.pageOptions,
                                size: "sm",
                              },
                              model: {
                                value: _vm.perPage,
                                callback: function ($$v) {
                                  _vm.perPage = $$v
                                },
                                expression: "perPage",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-table", {
                  attrs: {
                    items: _vm.history,
                    fields: _vm.fields,
                    "sort-by": _vm.sortBy,
                    "sort-desc": _vm.sortDesc,
                    striped: "",
                    responsive: "",
                    "sort-icon-left": "",
                    filter: _vm.filter,
                    "filter-included-fields": _vm.filterOn,
                    "current-page": _vm.currentPage,
                    "per-page": _vm.perPage,
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
                    filtered: _vm.onFiltered,
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "status",
                      fn: function (data) {
                        return [
                          _vm._v(
                            "\n                " +
                              _vm._s(data.item.status) +
                              "\n                "
                          ),
                          _vm.loginType == "admin"
                            ? _c("span", [
                                data.item.status == "Masih Digunakan"
                                  ? _c(
                                      "span",
                                      [
                                        _vm._v("\n                    /"),
                                        _c(
                                          "b-button",
                                          {
                                            attrs: { id: "show-btn" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.showModal(
                                                  data.item.id
                                                )
                                              },
                                            },
                                          },
                                          [_vm._v("Ganti Pengguna")]
                                        ),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "b-modal",
                            {
                              ref: "modal-" + data.item.id,
                              attrs: {
                                title: "Ganti Pengguna",
                                "hide-footer": "",
                              },
                            },
                            [
                              _c(
                                "form",
                                {
                                  on: {
                                    submit: [
                                      function ($event) {
                                        $event.preventDefault()
                                        return _vm.RelasiUserBarangUpdate(
                                          data.item.barang.id,
                                          data.item.id
                                        )
                                      },
                                      _vm.checkForm,
                                    ],
                                  },
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "pengguna_id" } },
                                      [_vm._v("Pengguna")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.historys.pengguna_id,
                                            expression: "historys.pengguna_id",
                                          },
                                        ],
                                        staticClass: "form-control",
                                        attrs: { name: "pengguna_id" },
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
                                            _vm.$set(
                                              _vm.historys,
                                              "pengguna_id",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { value: "", disabled: "" },
                                          },
                                          [_vm._v("Pilih Pengguna")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.pengguna,
                                          function (pengguna) {
                                            return _c(
                                              "option",
                                              {
                                                key: pengguna.id,
                                                domProps: {
                                                  value: pengguna.id,
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                          " +
                                                    _vm._s(pengguna.name) +
                                                    "\n                        "
                                                ),
                                              ]
                                            )
                                          }
                                        ),
                                      ],
                                      2
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "form-group" },
                                    [
                                      _c("label", [_vm._v("Keterangan")]),
                                      _vm._v(" "),
                                      _c("b-textarea", {
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Masukan Keterangan",
                                        },
                                        model: {
                                          value: _vm.historys.keterangan,
                                          callback: function ($$v) {
                                            _vm.$set(
                                              _vm.historys,
                                              "keterangan",
                                              $$v
                                            )
                                          },
                                          expression: "historys.keterangan",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-md btn-success",
                                        attrs: { type: "submit" },
                                      },
                                      [
                                        _vm._v(
                                          "\n                        SIMPAN\n                      "
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _vm.errors.length
                                    ? _c("div", [
                                        _c(
                                          "div",
                                          { staticClass: "alert alert-danger" },
                                          [
                                            _c("b", [
                                              _vm._v(
                                                "Perhatikan hal berikut :"
                                              ),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              _vm._l(
                                                _vm.errors,
                                                function (error) {
                                                  return _c(
                                                    "li",
                                                    { key: error },
                                                    [
                                                      _vm._v(
                                                        "\n                            " +
                                                          _vm._s(error) +
                                                          "\n                          "
                                                      ),
                                                    ]
                                                  )
                                                }
                                              ),
                                              0
                                            ),
                                          ]
                                        ),
                                      ])
                                    : _vm._e(),
                                ]
                              ),
                            ]
                          ),
                        ]
                      },
                    },
                    {
                      key: "action",
                      fn: function (data) {
                        return [
                          _vm.loginType == "admin"
                            ? _c("span", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-sm btn-danger",
                                    on: {
                                      click: function ($event) {
                                        return _vm.destroy(data.item.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "ion ion-ios-trash",
                                    }),
                                  ]
                                ),
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.loginType != "admin"
                            ? _c("span", [_vm._v(" Tidak ada Akses ")])
                            : _vm._e(),
                        ]
                      },
                    },
                  ]),
                }),
                _vm._v(" "),
                _c("b-pagination", {
                  attrs: { "total-rows": _vm.rows, "per-page": _vm.perPage },
                  model: {
                    value: _vm.currentPage,
                    callback: function ($$v) {
                      _vm.currentPage = $$v
                    },
                    expression: "currentPage",
                  },
                }),
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
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-body pallet-darken font-lighten" }, [
        _vm._v(
          "\n          Halaman ini merupakan untuk mengetahui Riwayat penggunaan barang\n          yang pernah memakai barang dan yang sedang memakai barang\n        "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/history/index.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/components/history/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5256722d& */ "./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/history/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/history/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/history/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/history/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5256722d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/history/index.vue?vue&type=template&id=5256722d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5256722d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);