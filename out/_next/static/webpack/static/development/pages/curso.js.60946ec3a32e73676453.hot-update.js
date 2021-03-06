webpackHotUpdate("static\\development\\pages\\curso.js",{

/***/ "./components/CurseScene/Header.js":
/*!*****************************************!*\
  !*** ./components/CurseScene/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/curso.js":
/*!************************!*\
  !*** ./pages/curso.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/common/Menu */ "./components/common/Menu.js");
/* harmony import */ var _components_common_MainWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/common/MainWrapper */ "./components/common/MainWrapper.js");
/* harmony import */ var _components_CurseScene_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CurseScene/Header */ "./components/CurseScene/Header.js");
/* harmony import */ var _components_CurseScene_Header__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_CurseScene_Header__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_CurseScene_ContentPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CurseScene/ContentPage */ "./components/CurseScene/ContentPage.js");
/* harmony import */ var _components_common_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/common/Footer */ "./components/common/Footer.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ducks_sanarflix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ducks/sanarflix */ "./ducks/sanarflix.js");







var _jsxFileName = "C:\\Git Clones\\Desafio-Sanar\\pages\\curso.js";










var curso =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(curso, _Component);

  function curso(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, curso);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(curso).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchCursesData", function () {
      !_this.props.moduleList ? fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this.setState({
          res: data
        }, function () {
          return _this.props.updateModulesList(_this.state.res);
        });
      }) : fetch('https://5b7570f8deca780014ec9f86.mockapi.io/v1/modulos').then(function (response) {
        return response.json();
      }).then(function (data) {
        return data !== _this.props.moduleList && _this.setState({
          res: data
        }, function () {
          return _this.props.updateModulesList(_this.state.res);
        });
      });
    });

    _this.state = {
      res: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(curso, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.fetchCursesData();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_MainWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_Menu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CurseScene_Header__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_CurseScene_ContentPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: this.props.moduleList,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_common_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }));
    }
  }]);

  return curso;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function mapStateToProps(state) {
  return {
    moduleList: state.sanarflixReducer.moduleList
  };
}

var mapDispatchToProps = {
  updateModulesList: _ducks_sanarflix__WEBPACK_IMPORTED_MODULE_15__["updateModulesList"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps)(curso));

/***/ })

})
//# sourceMappingURL=curso.js.60946ec3a32e73676453.hot-update.js.map