(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    title: "Detail Pengguna"
  },
  data: function data() {
    return {
      barang: [],
      pengguna: {},
      buku: [],
      user: {
        roles: [{
          name: ""
        }]
      },
      isLoggedIn: false,
      loginType: "",
      currentPage: 1,
      totalPages: 0,
      pageSize: 10,
      pageSize1: 10,
      currentPage1: 1,
      totalPages1: 0,
      kode_lampiran: "",
      DataDelete: {}
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
    showModal: function showModal(data) {
      this.DataDelete = data;
      this.$refs.modalDelete.open();
    },
    closeModal: function closeModal() {
      this.$refs.modalDelete.close();
    },
    deleteData: function deleteData(id) {
      this.closeModal();

      if (this.DataDelete.nama_barang) {
        this.destroy(id);
      }

      if (this.DataDelete.judul) {
        this.destroy1(id);
      }
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
    destroy1: function destroy1(id) {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/api/buku/".concat(id)).then(function (response) {
        _this3.buku = _this3.buku.filter(function (buku) {
          return buku.id != id;
        });
      })["catch"](function (error) {
        console.log(error);
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
      if (error.response.status === 401) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "card card-default" }, [
          _c(
            "div",
            { staticClass: "card-header" },
            [
              _vm._v("\n          Detail Pengguna\n          "),
              _c("b-badge", { attrs: { variant: "primary" } }, [
                _vm._v(_vm._s(_vm.pengguna.name)),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
                _c("h2", [_vm._v("Inventaris Barang")]),
                _vm._v(" "),
                _vm.user.roles[0].name == "admin"
                  ? _c("div", { staticClass: "card bg-light m-2 w-50" }, [
                      _c("div", { staticClass: "card-header" }, [
                        _vm._v(
                          "\n                Lampiran Surat Komitmen Penggunaan Barang\n              "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _c("div", [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-success btn-sm text-white",
                              attrs: {
                                href:
                                  "/pengguna/detail/" +
                                  _vm.pengguna.id +
                                  "/lampiran",
                              },
                            },
                            [_vm._v("Lihat Surat Komitmen")]
                          ),
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c("div", [
                          _c("p", [
                            _vm._v(
                              "Generator Surat Komitmen Penggunaan Barang :"
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              attrs: {
                                action:
                                  "/pengguna/surat_komitmen/" + _vm.pengguna.id,
                              },
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "form-group" },
                                [
                                  _c("label", [_vm._v("Kode Lampiran : ")]),
                                  _vm._v(" "),
                                  _c("b-input", {
                                    staticClass: "form-control form-control-sm",
                                    staticStyle: { width: "200px" },
                                    attrs: {
                                      type: "text",
                                      name: "kode_lampiran",
                                      required: "",
                                    },
                                    model: {
                                      value: _vm.kode_lampiran,
                                      callback: function ($$v) {
                                        _vm.kode_lampiran = $$v
                                      },
                                      expression: "kode_lampiran",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _vm._m(0),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary btn-sm",
                                  attrs: { type: "submit" },
                                },
                                [
                                  _vm._v(
                                    "\n                      Generate Surat Komitmen\n                    "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ])
                  : _vm._e(),
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
                                _c("td", [_vm._v(_vm._s(data.fungsi))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(data.lokasi.lokasi))]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("toCurrency")(data.harga_barang)
                                    )
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
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
                                                  params: { id: data.id },
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
                                                click: function ($event) {
                                                  return _vm.showModal(data)
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
                                  _vm._v(" "),
                                  _vm.loginType != "admin"
                                    ? _c("span", [_vm._v(" Tidak ada Akses ")])
                                    : _vm._e(),
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
                          _vm._v("Fungsi"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Lokasi"),
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Harga Barang"),
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
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-responsive mt-2" },
              [
                _c("h2", [_vm._v("Inventaris Buku")]),
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
                          value: _vm.pageSize1,
                          expression: "pageSize1",
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
                          _vm.pageSize1 = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
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
                      data: _vm.buku,
                      currentPage: _vm.currentPage1,
                      pageSize: _vm.pageSize1,
                    },
                    on: {
                      "update:currentPage": function ($event) {
                        _vm.currentPage1 = $event
                      },
                      "update:current-page": function ($event) {
                        _vm.currentPage1 = $event
                      },
                      totalPagesChanged: function ($event) {
                        _vm.totalPages1 = $event
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
                                _c("td", { attrs: { scope: "data" } }, [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.id) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.judul) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.penulis) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.penerbit) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.tanggal) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.kondisi) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.jumlah) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.jenis.jenis_buku) +
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
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.lokasi.lokasi) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
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
                                                  name: "edit-buku",
                                                  params: { id: data.id },
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
                                                click: function ($event) {
                                                  return _vm.showModal(data)
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
                                  _vm._v(" "),
                                  _vm.loginType != "admin"
                                    ? _c("span", [_vm._v(" Tidak ada Akses ")])
                                    : _vm._e(),
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
                      _c(
                        "tr",
                        [
                          _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "judul", scope: "col" } },
                            [_vm._v("Judul")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "penulis", scope: "col" } },
                            [_vm._v("Penulis")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "penerbit", scope: "col" } },
                            [_vm._v("Penerbit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            {
                              attrs: {
                                sortKey: "tanggal_terbit",
                                scope: "col",
                              },
                            },
                            [_vm._v("Tanggal Terbit")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "kondisi", scope: "col" } },
                            [_vm._v("Kondisi")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "jumlah", scope: "col" } },
                            [_vm._v("Jumlah")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "jenis", scope: "col" } },
                            [_vm._v("Jenis")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "pengguna", scope: "col" } },
                            [_vm._v("Pengguna")]
                          ),
                          _vm._v(" "),
                          _c(
                            "th",
                            { attrs: { sortKey: "lokasi", scope: "col" } },
                            [_vm._v("Lokasi")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Aksi"),
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
                    currentPage: _vm.currentPage1,
                    totalPages: _vm.totalPages1,
                  },
                  on: {
                    "update:currentPage": function ($event) {
                      _vm.currentPage1 = $event
                    },
                    "update:current-page": function ($event) {
                      _vm.currentPage1 = $event
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
                        _vm.DataDelete.nama_barang
                          ? _c("div", [
                              _vm._v(
                                "\n                    Apakah Anda Yakin Mau Menghapus Data Barang\n                    " +
                                  _vm._s(_vm.DataDelete.nama_barang) +
                                  "\n                  "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.DataDelete.judul
                          ? _c("div", [
                              _vm._v(
                                "\n                    Apakah Anda Yakin Mau Menghapus Data Buku\n                    " +
                                  _vm._s(_vm.DataDelete.judul) +
                                  "\n                  "
                              ),
                            ])
                          : _vm._e(),
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-lg",
                          on: {
                            click: function ($event) {
                              return _vm.deleteData(_vm.DataDelete.id)
                            },
                          },
                        },
                        [_vm._v("\n                  Hapus\n                ")]
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
    return _c("div", [
      _c("span", { staticClass: "text-muted" }, [
        _c("small", [
          _vm._v(
            "\n                            Contoh : NO. 008 / BIK / 4VM / XI / 2021"
          ),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=ee871c32& */ "./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/pengguna/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=ee871c32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/pengguna/detail.vue?vue&type=template&id=ee871c32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_ee871c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);