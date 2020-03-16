webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RSVPForm/personal/index.js":
/*!***********************************************!*\
  !*** ./components/RSVPForm/personal/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RSVPPersonal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _overmind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../overmind */ "./overmind/index.js");
/* harmony import */ var _util_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/constants */ "./util/constants.js");
/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../util/index */ "./util/index.js");
var _jsxFileName = "/Users/jatinderbimra/work/xlbb/rsvp-next/components/RSVPForm/personal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function RSVPPersonal(props) {
  var _useOvermind = Object(_overmind__WEBPACK_IMPORTED_MODULE_2__["useOvermind"])(),
      state = _useOvermind.state,
      actions = _useOvermind.actions;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["useForm"])({
    mode: 'onChange',
    validateCriteriaMode: "all"
  }),
      register = _useForm.register,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      formState = _useForm.formState;

  var watchNoKtur = watch('numberKTUR');
  var watchNoSID = watch('numberSID');
  var watchHidCaptcha = watch('hidGRecaptchaElement');

  var _ref = state.rsvp.personal && state.rsvp.personal.data || {},
      numberKTUR = _ref.numberKTUR,
      numberSID = _ref.numberSID,
      name = _ref.name,
      numberKTPOrPassport = _ref.numberKTPOrPassport,
      address = _ref.address,
      numberOfShares = _ref.numberOfShares,
      phoneNumber = _ref.phoneNumber,
      email = _ref.email,
      uploadID = _ref.uploadID,
      captcha = _ref.captcha,
      submitButton = _ref.submitButton,
      successMsgTitle = _ref.successMsgTitle,
      successMsg = _ref.successMsg,
      failedMsgTitle = _ref.failedMsgTitle,
      failedMsg = _ref.failedMsg,
      redirectURL = _ref.redirectURL;

  var onSubmit = function onSubmit(data, e) {
    console.log("Form submitted ", data, e);
  }; // Similar to componentDidMount and componentDidUpdate:


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {// if(!window.grecaptcha) reCaptchaInitialize('v2');
    // console.log('watchHidCaptcha', watchHidCaptcha);
  }, [watchHidCaptcha]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (state.rsvp.isSIDKTPVerified) {
      // verifyCaptcha
      Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["verifyCaptcha"])('hidGRecaptchaElement');
    } // console.log('watchNoKtur', watchNoKtur);
    // console.log('watchNoSID', watchNoSID);


    if (watchNoKtur && watchNoKtur.length > 6 && watchNoSID && watchNoSID.length > 6) {
      console.log('trigger api call to verify use is having valid sid and ktp '); // actions.rsvp.verifyValidUser();

      actions.rsvp.updateSIDKTPVerifedStatus(); // if(window.grecaptcha) grecaptcha.reset('gRecaptchaElement');

      if (!window.grecaptcha) Object(_util_index__WEBPACK_IMPORTED_MODULE_4__["reCaptchaInitialize"])('v2');
    }
  });
  return __jsx("form", {
    className: "form",
    onSubmit: handleSubmit(onSubmit),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Personal"), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTUR.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "No KTUR ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("input", {
    id: numberKTUR.name,
    name: numberKTUR.name,
    ref: register({
      required: 'Ktur number is required',
      minLength: {
        value: 6,
        message: "Minimum 6 length is required"
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTUR.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "noSID",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "No SID/AKSes.KSEI ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("input", {
    id: "noSID",
    name: "noSID",
    ref: register({
      required: 'No SID/AKSes.KSEI is required',
      minLength: {
        value: 6,
        message: "Minimum 6 length is required"
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "noSID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }))), state.rsvp.isSIDKTPVerified === true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "name",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Name ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("input", {
    name: "name",
    ref: register({
      required: 'Name is required'
    }),
    type: "text",
    className: "form-control",
    id: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "passport",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "NIK (KTP)/Passport ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("input", {
    name: "passport",
    ref: register({
      required: 'NIK (KTP)/Passport is required'
    }),
    type: "text",
    className: "form-control",
    id: "passport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "passport",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "address",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Address ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("input", {
    name: "address",
    ref: register({
      required: 'Address is required'
    }),
    type: "text",
    className: "form-control",
    id: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "address",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "numberOfShares",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Jumlah Saham (sesuai KTUR) ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("input", {
    name: "numberOfShares",
    ref: register({
      required: 'Jumlah Saham (sesuai KTUR) is required'
    }),
    type: "text",
    className: "form-control",
    id: "numberOfShares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "numberOfShares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "phoneNumber",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Phone/Mobile ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("input", {
    name: "phoneNumber",
    ref: register({
      required: 'Phone number is required',
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["phonePattern1"],
        message: "Invalid phone number"
      }
    }),
    type: "text",
    className: "form-control",
    id: "phoneNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "phoneNumber",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Email ", __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "*")), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("input", {
    name: "email",
    ref: register({
      required: 'Email is required',
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["emailPattern"],
        message: "Invalid email"
      }
    }),
    type: "email",
    className: "form-control",
    id: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("label", {
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Upload ID"), "No file chosen", __jsx("input", {
    name: "uploadID",
    ref: register({
      required: 'Upload ID is required'
    }),
    type: "file",
    className: "input-file",
    id: "uploadID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }))), __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Ukuran berkas harus kurang dari 10 MB.s"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf")), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "uploadID",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "g-recaptcha",
    id: "gRecaptchaElement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: "hidGRecaptchaElement",
    defaultValue: state.rsvp.captchaValue,
    ref: register({
      required: 'Please validate captcha'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "hidGRecaptchaElement",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  })), __jsx("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("div", {
    className: "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("input", {
    name: "userAcceptance",
    id: "userAcceptance",
    ref: register({
      required: 'Please accept the terms and condition'
    }),
    type: "checkbox",
    className: "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "userAcceptance",
    className: "col-form-label pl-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, " Check to agree xl axiata terms and conditions.")), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "userAcceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), __jsx("div", {
    className: "form-group text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Submit")))) : __jsx("div", {
    className: "text-center text-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "Enter No KTUR & No SID/AKSes.KSEI to verify your status"));
}

/***/ })

})
//# sourceMappingURL=index.js.8ae2e83c75d376bfbead.hot-update.js.map