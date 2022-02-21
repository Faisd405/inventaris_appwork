(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Chart_InventarisPieChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chart/InventarisPieChart.vue */ "./resources/assets/src/components/Chart/InventarisPieChart.vue");
/* harmony import */ var _Chart_KategoriPieChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart/KategoriPieChart.vue */ "./resources/assets/src/components/Chart/KategoriPieChart.vue");
/* harmony import */ var _Chart_InventarisTidakTerpakai_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chart/InventarisTidakTerpakai.vue */ "./resources/assets/src/components/Chart/InventarisTidakTerpakai.vue");
/* harmony import */ var _Chart_JenisPieChart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chart/JenisPieChart.vue */ "./resources/assets/src/components/Chart/JenisPieChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "home",
  metaInfo: {
    title: "Home"
  },
  components: {
    InventarisPieChart: _Chart_InventarisPieChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    KategoriPieChart: _Chart_KategoriPieChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    InventarisTidakTerpakai: _Chart_InventarisTidakTerpakai_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    JenisPieChart: _Chart_JenisPieChart_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      i: 1,
      barang: [],
      buku: [],
      hargaPerPengguna: [],
      users: [],
      NoPengguna: [],
      kategori: [],
      total: [],
      totalbuku: [],
      user: "",
      loginType: "",
      pengguna: [],
      currentPage: 1,
      totalPages: 0,
      currentPage1: 1,
      totalPages1: 0,
      currentPage2: 1,
      totalPages2: 0,
      updateUser: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Content-Type"] = "application/json";
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this.user = response.data;
      _this.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401 || error.response.status === 500) {
        localStorage.clear();

        _this.$router.push("/login");
      }

      console.error(error);
    });
  },
  methods: {
    logout: function logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.setUser();
      this.$router.push("/");
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang").then(function (response) {
      _this2.barang = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/NoUser").then(function (response) {
      _this2.NoUser = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/barang/total").then(function (response) {
      _this2.total = response.data.total;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/buku").then(function (response) {
      _this2.buku = response.data.buku;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users").then(function (response) {
      _this2.users = response.data.user;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/kategori").then(function (response) {
      _this2.kategori = response.data.kategori;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna").then(function (response) {
      _this2.pengguna = response.data.pengguna;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/pengguna/nopengguna").then(function (response) {
      _this2.NoPengguna = response.data.barang;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/inventaris/hargaPerPengguna").then(function (response) {
      _this2.hargaPerPengguna = response.data.harga;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/buku/total").then(function (response) {
      _this2.totalbuku = response.data.total;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "d-flex flex-row" }, [
      _c("div", { staticClass: "d-flex flex-column bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "card text-white pallet-dark m-1 shadow-lg",
            staticStyle: { "min-width": "16rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/barang" },
                  },
                  [_c("strong", [_vm._v(" Total Inventaris ")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("router-link", { attrs: { to: "/laporan/barang" } }, [
                  _c("h2", { staticClass: "card-title text-white" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.barang.length + _vm.buku.length) +
                        "\n            "
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card text-white pallet-dark m-1 shadow-lg",
            staticStyle: { "min-width": "16rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/pengguna" },
                  },
                  [_c("strong", [_vm._v(" Total Pengguna")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("router-link", { attrs: { to: "/laporan/pengguna" } }, [
                  _c("h2", { staticClass: "card-title text-white" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.pengguna.length) +
                        "\n            "
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "card text-white pallet-dark m-1 shadow-lg",
            staticStyle: { "min-width": "16rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/LaporanTBarangTidakTerpakai" },
                  },
                  [_c("strong", [_vm._v("Inventaris Tidak digunakan")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/laporan/LaporanTBarangTidakTerpakai" } },
                  [
                    _c("h2", { staticClass: "card-title text-white" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.NoPengguna.length) +
                          "\n            "
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card text-white pallet-dark m-1 shadow-lg",
            staticStyle: { "min-width": "16rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/LaporanTBarangTerpakai" },
                  },
                  [_c("strong", [_vm._v("Inventaris digunakan")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/laporan/LaporanTBarangTerpakai" } },
                  [
                    _c("h2", { staticClass: "card-title text-white" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.barang.length - _vm.NoPengguna.length) +
                          "\n            "
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-row bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "flex-column card card-body",
            staticStyle: { "max-width": "18rem", "max-height": "24rem" },
          },
          [
            _c("label", [_vm._v("Kategori Inventaris :")]),
            _vm._v(" "),
            _c("InventarisPieChart", {
              staticStyle: { "max-height": "18rem", "margin-top": "20px" },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "card card-body",
            staticStyle: { "min-width": "20rem", "max-height": "24rem" },
          },
          [
            _c("div", { staticClass: "align-items-center" }, [
              _c("div", [
                _c("h3", [_vm._v("Name : " + _vm._s(_vm.user.name))]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("h3", [_vm._v("Roles : " + _vm._s(_vm.loginType))]),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex flex-row" }, [
      _c(
        "div",
        {
          staticClass: "flex-column bd-highlight mb-3 mx-1",
          staticStyle: { "min-width": "800px" },
        },
        [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Daftar Inventaris Barang"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                [
                  _c(
                    "v-table",
                    {
                      staticClass: "table table-striped table-bordered",
                      staticStyle: {
                        height: "300px",
                        overflow: "scroll",
                        width: "100%",
                      },
                      attrs: {
                        data: _vm.barang,
                        currentPage: _vm.currentPage,
                        pageSize: 10,
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
                                  _c("td", [_vm._v(_vm._s(data.year))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("toCurrency")(data.harga_barang)
                                      )
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
                                attrs: { sortKey: "nama_barang", scope: "col" },
                              },
                              [_vm._v("Nama Barang")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-th",
                              { attrs: { sortKey: "year", scope: "col" } },
                              [_vm._v("Tahun")]
                            ),
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
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Daftar Inventaris Buku"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c(
                "div",
                { staticClass: "table-responsive mt-2" },
                [
                  _c(
                    "v-table",
                    {
                      staticClass: "table table-striped table-bordere",
                      staticStyle: {
                        height: "500px",
                        overflow: "scroll",
                        width: "100%",
                      },
                      attrs: {
                        data: _vm.buku,
                        currentPage: _vm.currentPage1,
                        pageSize: 10,
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
                                        _vm._s(data.tanggal) +
                                        "\n                  "
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm._f("toCurrency")(data.harga)
                                        ) +
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
                        _c(
                          "tr",
                          [
                            _c("th", { attrs: { scope: "col" } }, [
                              _vm._v("No"),
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-th",
                              { attrs: { sortKey: "judul", scope: "col" } },
                              [_vm._v("Judul")]
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
                              "v-th",
                              { attrs: { sortKey: "harga", scope: "col" } },
                              [_vm._v("Harga")]
                            ),
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
                ],
                1
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex-column bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "card text-white pallet-dark col-md-6 m-1 shadow-lg",
            staticStyle: { "min-width": "18rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/LaporanTHargaBarang" },
                  },
                  [_c("strong", [_vm._v("Data Asset Barang")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "router-link",
                  { attrs: { to: "/laporan/LaporanTHargaBarang" } },
                  [
                    _c("h4", { staticClass: "card-title text-white" }, [
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm._f("toCurrency")(_vm.total)) +
                          "\n            "
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex-column card card-body m-1",
            staticStyle: { "max-width": "18rem", "max-height": "24rem" },
          },
          [
            _c("label", [_vm._v("Kategori Barang :")]),
            _vm._v(" "),
            _c("KategoriPieChart", {
              staticStyle: { "max-height": "18rem", "margin-top": "20px" },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "\n          card\n          text-white\n          pallet-dark\n          col-md-6\n          m-1\n          shadow-lg\n          table-responsive\n        ",
            staticStyle: { "min-width": "18rem", height: "12rem" },
          },
          [
            _c(
              "div",
              { staticClass: "card-header" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "text-primary",
                    attrs: { to: "/laporan/LaporanTHargaBarang" },
                  },
                  [_c("strong", [_vm._v("Data Asset Buku")])]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("router-link", { attrs: { to: "/laporan/buku" } }, [
                  _c("h4", { staticClass: "card-title text-white" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm._f("toCurrency")(_vm.totalbuku)) +
                        "\n            "
                    ),
                  ]),
                ]),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex-column card card-body m-1",
            staticStyle: { "max-width": "18rem", "max-height": "24rem" },
          },
          [
            _c("label", [_vm._v("Jenis Buku :")]),
            _vm._v(" "),
            _c("JenisPieChart", {
              staticStyle: { "max-height": "18rem", "margin-top": "20px" },
            }),
          ],
          1
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "d-flex flex-row" }, [
      _c("div", { staticClass: "d-flex flex-row bd-highlight mb-3 mx-1" }, [
        _c(
          "div",
          {
            staticClass: "flex-column card card-body",
            staticStyle: { "min-width": "800px", "min-height": "500px" },
          },
          [
            _c("label", [
              _vm._v("Data Inventaris tidak terpakai sepanjang tahun :"),
            ]),
            _vm._v(" "),
            _c("InventarisTidakTerpakai", {
              staticStyle: { "margin-top": "20px" },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-row bd-highlight mb-3 mx-1" }, [
        _c("div", { staticClass: "table-responsive mt-2" }, [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Daftar Pengguna"),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "v-table",
                  {
                    staticClass: "table table-striped table-bordered",
                    attrs: {
                      data: _vm.pengguna,
                      currentPage: _vm.currentPage2,
                      pageSize: 5,
                    },
                    on: {
                      "update:currentPage": function ($event) {
                        _vm.currentPage2 = $event
                      },
                      "update:current-page": function ($event) {
                        _vm.currentPage2 = $event
                      },
                      totalPagesChanged: function ($event) {
                        _vm.totalPages2 = $event
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
                            _vm._l(displayData, function (data, index) {
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
                                      _vm._s(data.name) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(data.jabatan) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(
                                        _vm._f("toCurrency")(
                                          _vm.hargaPerPengguna[index++]
                                        )
                                      ) +
                                      "\n                  "
                                  ),
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: "detail-pengguna",
                                            params: { id: data.id },
                                          },
                                        },
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary p-y",
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "ion ion-ios-eye",
                                            }),
                                          ]
                                        ),
                                      ]
                                    ),
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
                    _c("thead", { attrs: { slot: "head" }, slot: "head" }, [
                      _c(
                        "tr",
                        [
                          _c("th", { attrs: { scope: "col" } }, [_vm._v("No")]),
                          _vm._v(" "),
                          _c(
                            "v-th",
                            { attrs: { sortKey: "name", scope: "col" } },
                            [_vm._v("Nama Pengguna")]
                          ),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Jabatan"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Nilai Asset"),
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Detail"),
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
                    currentPage: _vm.currentPage2,
                    totalPages: _vm.totalPages2,
                  },
                  on: {
                    "update:currentPage": function ($event) {
                      _vm.currentPage2 = $event
                    },
                    "update:current-page": function ($event) {
                      _vm.currentPage2 = $event
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/Home.vue":
/*!**************************************************!*\
  !*** ./resources/assets/src/components/Home.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e45ba24e& */ "./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/assets/src/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e45ba24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/Home.vue?vue&type=template&id=e45ba24e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e45ba24e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);