(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      filters: {
        nama_barang: {
          value: "",
          keys: ["nama_barang"]
        }
      },
      pengguna: [{
        name: "",
        jabatan: ""
      }],
      lokasi_barang: "",
      nama_pengguna: {
        name: "",
        jabatan: ""
      },
      barang: [],
      lokasi: [],
      pageSize: 10,
      user: "",
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      DataDelete: {}
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/barang";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/lokasi").then(function (response) {
      _this.lokasi = response.data.lokasi;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna").then(function (response) {
      var _this$pengguna;

      (_this$pengguna = _this.pengguna).push.apply(_this$pengguna, _toConsumableArray(response.data.pengguna));
    });
  },
  computed: {
    filterBarang: function filterBarang() {
      return this.filterbarangByLokasi(this.filterbarangByPengguna(this.barang));
    }
  },
  methods: {
    penggunaNameWithLang: function penggunaNameWithLang(_ref) {
      var name = _ref.name,
          jabatan = _ref.jabatan;
      return "".concat(name, " - ").concat(jabatan);
    },
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
    destroy: function destroy(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/barang/".concat(id)).then(function (response) {
        _this2.barang = _this2.barang.filter(function (barang) {
          return barang.id != id;
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    filterbarangByLokasi: function filterbarangByLokasi(barang) {
      var _this3 = this;

      return barang.filter(function (barang) {
        return !barang.lokasi.lokasi.toString().indexOf(_this3.lokasi_barang);
      });
    },
    filterbarangByPengguna: function filterbarangByPengguna(barang) {
      var _this4 = this;

      return barang.filter(function (barang) {
        return !barang.pengguna.name.toString().indexOf(_this4.nama_pengguna.name);
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this5.user = response.data;
      _this5.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this5.$router.push("/login");
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.multiselect__single {\r\n  font-size: 12px;\r\n  width: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "container-fluid d-flex align-items-stretch flex-grow-1 p-0",
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex-shrink-1 flex-grow-1 container-p-x container-p-y",
        },
        [
          _c(
            "div",
            { staticClass: "layout-example-block layout-example-block-1" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card card-default" }, [
                _c("div", { staticClass: "card-header" }, [_vm._v("Barang")]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _vm.loginType == "admin"
                    ? _c(
                        "span",
                        { staticClass: "d-flex flex-row-reverse" },
                        [
                          _c(
                            "router-link",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover",
                                  modifiers: { hover: true },
                                },
                              ],
                              staticClass: "btn btn-md btn-primary mx-3",
                              attrs: {
                                to: { name: "create-barang" },
                                title: "Tambah Data Barang Baru",
                              },
                            },
                            [_vm._v("Tambah Data Barang")]
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-md btn-warning",
                              attrs: { to: { name: "relasiuserbarang" } },
                            },
                            [_vm._v("Ganti Pengguna Barang")]
                          ),
                          _vm._v(" "),
                          _c("hr"),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("table", [
                        _c("tr", [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-2" }, [_vm._v(":")]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("b-input", {
                                attrs: { placeholder: "Cari Nama Barang" },
                                model: {
                                  value: _vm.filters.nama_barang.value,
                                  callback: function ($$v) {
                                    _vm.$set(
                                      _vm.filters.nama_barang,
                                      "value",
                                      $$v
                                    )
                                  },
                                  expression: "filters.nama_barang.value",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-2" }, [_vm._v(":")]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c("Multiselect", {
                                attrs: {
                                  options: _vm.pengguna,
                                  "custom-label": _vm.penggunaNameWithLang,
                                  placeholder: "Select one",
                                },
                                model: {
                                  value: _vm.nama_pengguna,
                                  callback: function ($$v) {
                                    _vm.nama_pengguna = $$v
                                  },
                                  expression: "nama_pengguna",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-2" }, [_vm._v(":")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.lokasi_barang,
                                    expression: "lokasi_barang",
                                  },
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.lokasi_barang = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { attrs: { value: "" } }, [
                                  _vm._v("Semua Lokasi Barang"),
                                ]),
                                _vm._v(" "),
                                _vm._l(_vm.lokasi, function (lokasi) {
                                  return _c(
                                    "option",
                                    {
                                      key: lokasi.id,
                                      domProps: { value: lokasi.lokasi },
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(lokasi.lokasi) +
                                          "\n                    "
                                      ),
                                    ]
                                  )
                                }),
                              ],
                              2
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("td", { staticClass: "px-2" }, [_vm._v(":")]),
                          _vm._v(" "),
                          _c("td", [
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
                                      .call(
                                        $event.target.options,
                                        function (o) {
                                          return o.selected
                                        }
                                      )
                                      .map(function (o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.pageSize = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  },
                                },
                              },
                              [
                                _c("option", { domProps: { value: 10 } }, [
                                  _vm._v("10"),
                                ]),
                                _vm._v(" "),
                                _c("option", { domProps: { value: 25 } }, [
                                  _vm._v("25"),
                                ]),
                                _vm._v(" "),
                                _c("option", { domProps: { value: 50 } }, [
                                  _vm._v("50"),
                                ]),
                                _vm._v(" "),
                                _c("option", { domProps: { value: 100 } }, [
                                  _vm._v("100"),
                                ]),
                              ]
                            ),
                          ]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "v-table",
                        {
                          staticClass: "table table-striped table-bordered",
                          attrs: {
                            id: "table-barang",
                            data: _vm.filterBarang,
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
                                      _c("td", [
                                        _vm._v(_vm._s(data.nama_barang)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(data.detail_barang)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(data.kategori.nama_kategori)
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(data.fungsi))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("toCurrency")(
                                              data.harga_barang
                                            )
                                          )
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(data.lokasi.lokasi)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(data.detail_lokasi)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(data.pengguna.name)),
                                      ]),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(data.year))]),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(data.jumlah_barang)),
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "td",
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-info",
                                              attrs: {
                                                to: {
                                                  name: "detail-barang",
                                                  params: { id: data.id },
                                                },
                                              },
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "ion ion-ios-eye",
                                              }),
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _vm.loginType == "admin"
                                            ? _c(
                                                "span",
                                                [
                                                  _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-warning",
                                                      attrs: {
                                                        to: {
                                                          name: "edit-barang",
                                                          params: {
                                                            id: data.id,
                                                          },
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "ion ion-md-create",
                                                      }),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-sm btn-danger",
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.showModal(
                                                            data
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "ion ion-ios-trash",
                                                      }),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              )
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                    ])
                                  }),
                                  0
                                )
                              },
                            },
                          ]),
                        },
                        [
                          _c(
                            "thead",
                            { attrs: { slot: "head" }, slot: "head" },
                            [
                              _c(
                                "tr",
                                [
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("No"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-th",
                                    {
                                      attrs: {
                                        sortKey: "nama_barang",
                                        scope: "col",
                                      },
                                    },
                                    [_vm._v("Nama Barang")]
                                  ),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Detail Barang"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Kategori"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Fungsi"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-th",
                                    {
                                      attrs: {
                                        sortKey: "harga_barang",
                                        scope: "col",
                                      },
                                    },
                                    [_vm._v("Harga Barang")]
                                  ),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Lokasi"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Detail Lokasi"),
                                  ]),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Pemakai"),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-th",
                                    {
                                      attrs: { sortKey: "year", scope: "col" },
                                    },
                                    [_vm._v("Tahun")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-th",
                                    {
                                      attrs: {
                                        sortKey: "jumlah_barang",
                                        scope: "col",
                                      },
                                    },
                                    [_vm._v("Jumlah Barang")]
                                  ),
                                  _vm._v(" "),
                                  _c("th", { attrs: { scope: "col" } }, [
                                    _vm._v("Aksi"),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
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
                                "\n                  Apakah Anda Yakin Mau Menghapus Data Barang\n                  "
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
                              [
                                _vm._v(
                                  "\n                  Hapus\n                "
                                ),
                              ]
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
                              [
                                _vm._v(
                                  "\n                  Batal\n                "
                                ),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "\n      flex-shrink-1 flex-grow-0\n      w-25\n      pallet-light\n      container-p-x container-p-y\n      card card-default\n    ",
        staticStyle: { "min-width": "200px" },
      },
      [
        _c("div", [_vm._v("Export Barang")]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "btn btn-md btn-secondary mt-3 flex",
            attrs: { href: "/barang/barang_excel" },
          },
          [_vm._v("\n      Export Excel\n    ")]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card mb-3" }, [
      _c("div", { staticClass: "card-body pallet-darken font-lighten" }, [
        _vm._v(
          "\n          Ini adalah halaman Daftar Barang untuk meng list barang apa saja\n          yang ada di kantor, dipegang oleh siapa dan untuk mengetahui dimana\n          lokasi barang tersebut. Di halaman ini kita dapat meng export data\n          barang menjadi PDF dan Excel.\n        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v("Nama Barang")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v("Nama Pengguna")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v("Lokasi Barang")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("label", [_vm._v("Jumlah Baris")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/barang/index.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/src/components/barang/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=08c9c7f8& */ "./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=css& */ "./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/barang/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=08c9c7f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/barang/index.vue?vue&type=template&id=08c9c7f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_08c9c7f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);