(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: [{
        key: 'id',
        label: 'ID',
        sortable: true
      }, {
        key: 'kode_barang',
        label: 'Kode Barang',
        sortable: true
      }, {
        key: 'nama_barang',
        label: 'Nama Barang',
        sortable: true
      }, {
        key: 'fungsi',
        label: 'Fungsi',
        sortable: true
      }, {
        key: 'lokasi.lokasi',
        label: 'Lokasi',
        sortable: true
      }, {
        key: 'harga_barang',
        label: 'Harga Barang',
        sortable: true
      }, {
        key: 'action',
        label: 'Action',
        sortable: false
      }],
      barangs: [],
      users: {},
      barang: {
        user_id: 1
      },
      user: null,
      isLoggedIn: false
    };
  },
  created: function created() {
    var _this = this;

    var uri = "/api/users/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.barangs = response.data.barang;
      _this.users = response.data.user;
    });
  },
  methods: {
    update: function update(id) {
      var uri = "/api/barang/" + id;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.barang).then(function (response) {
        console.log(response.data);
        console.log(response.data.barangs.user_id);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Content-Type'] = 'application/json';
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/user").then(function (response) {
      _this2.user = response.data;
      _this2.loginType = response.data.roles[0].name;
    })["catch"](function (error) {
      if (error.response.status === 401) {
        localStorage.clear();

        _this2.$router.push('/login');
      }

      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192& ***!
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
  return _c("div", { staticClass: "container mt-3" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c(
          "div",
          { staticClass: "card card-default" },
          [
            _c("div", { staticClass: "card-header" }, [_vm._v("User")]),
            _vm._v(" "),
            _vm._l(_vm.user.roles, function (roles) {
              return _c("div", { key: roles.id, staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "table-responsive mt-2" },
                  [
                    _c("h2", [
                      _vm._v(
                        "Ini adalah barang yang dipakai " +
                          _vm._s(_vm.users.name)
                      ),
                    ]),
                    _vm._v(" "),
                    _c("b-table", {
                      attrs: { items: _vm.barangs, fields: _vm.fields },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "action",
                            fn: function (data) {
                              return [
                                roles.name == "admin"
                                  ? _c(
                                      "span",
                                      [
                                        data.item.user_id != 1
                                          ? _c(
                                              "Button",
                                              {
                                                staticClass:
                                                  "btn btn-sm btn-danger",
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.update(
                                                      data.item.id
                                                    )
                                                  },
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      Hapus Kepemilikan\n                    "
                                                ),
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        data.item.user_id == "1"
                                          ? _c("span", [
                                              _vm._v(
                                                "\n                        Barang ini adalah barang milik admin\n                    "
                                              ),
                                            ])
                                          : _vm._e(),
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                roles.name != "admin"
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                      Kamu Bukan Admin\n                  "
                                      ),
                                    ])
                                  : _vm._e(),
                              ]
                            },
                          },
                        ],
                        null,
                        true
                      ),
                    }),
                  ],
                  1
                ),
              ])
            }),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/users/detail.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/src/components/users/detail.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=169eb192& */ "./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192&");
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/users/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./detail.vue?vue&type=template&id=169eb192& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/users/detail.vue?vue&type=template&id=169eb192&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_detail_vue_vue_type_template_id_169eb192___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);