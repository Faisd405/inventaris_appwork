(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: "Login"
  },
  data: function data() {
    return {
      name: "",
      id_api: "",
      email: "",
      password: "",
      error: null,
      message: "",
      token: "",
      background: {
        "background-image": "url(images/background/background.jpg)",
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        "background-attachment": "fixed"
      }
    };
  },
  created: function created() {
    if (this.$route.params.error !== undefined) {
      this.error = this.$route.params.error + " Please login!";
    }
  },
  methods: {
    loginForm: function loginForm() {
      var _this = this;

      this.message = "";
      this.error = "";
      axios.post("https://laporan.4visionmedia.com/api/data/login", {
        email: this.email,
        password: this.password
      }).then(function (Response) {
        _this.name = Response.data.user.username;
        _this.id_api = Response.data.user.id;
        _this.jabatan = Response.data.user.jabatan_id;
        _this.token = Response.data.token.token;

        if (Response.data.success === true) {
          axios.post("/api/loginapi", {
            id_api: _this.id_api,
            name: _this.name,
            email: _this.email,
            password: _this.password,
            success: Response.data.success,
            jabatan: _this.jabatan
          }).then(function (response) {
            if (response.data.login === true) {
              localStorage.setItem("user", JSON.stringify(response.data.user));
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("token_api", _this.token);
              var loginType = response.data.user.roles[0].name;

              if (loginType === "user") {
                _this.$router.push("/homePengguna");
              } else if (loginType === "admin") {
                _this.$router.push("/");
              } else {
                _this.$router.push("login");
              }

              _this.$emit("IsloggedIn");
            } else {
              _this.error = response.data.error;
              _this.message = response.data.message;
            }
          });
        }
      })["catch"](function (error) {
        _this.error = error.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82& ***!
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
  return _c("div", { staticClass: "container-fluid", style: _vm.background }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        {
          staticClass: "layout-example-block layout-example-block-1 mt-5 mx-5",
        },
        [
          _c("div", { staticClass: "card border-success card-default" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Login With My E-Task Account"),
              ]),
              _vm._v(" "),
              _c("h6", { staticClass: "card-subtitle mb-2 text-muted" }, [
                _vm._v("Login to your account"),
              ]),
              _vm._v(" "),
              _c("hr", { staticStyle: { border: "0.5px solid lightgreen" } }),
              _vm._v(" "),
              _vm.error
                ? _c("div", { staticClass: "alert bg-danger text-white" }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.error) + "\n          "
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.message
                ? _c("div", { staticClass: "alert bg-success text-white" }, [
                    _vm._v(
                      "\n            " + _vm._s(_vm.message) + "\n          "
                    ),
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.loginForm.apply(null, arguments)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "email" } },
                      [_vm._v("Email address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "email", id: "email", required: "" },
                      domProps: { value: _vm.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      { staticClass: "form-label", attrs: { for: "password" } },
                      [_vm._v("Password")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.password,
                          expression: "password",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "password", id: "password", required: "" },
                      domProps: { value: _vm.password },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.password = $event.target.value
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Login")]
                  ),
                ]
              ),
            ]),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/src/components/authapi/Login.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/src/components/authapi/Login.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4c3eae82& */ "./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/src/components/authapi/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/authapi/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=4c3eae82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/src/components/authapi/Login.vue?vue&type=template&id=4c3eae82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4c3eae82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);