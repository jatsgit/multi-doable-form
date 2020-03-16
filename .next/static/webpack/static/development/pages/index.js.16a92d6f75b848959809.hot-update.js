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

  var _ref = state.rsvp.personal && state.rsvp.personal.data || {},
      numberKTUR = _ref.numberKTUR,
      numberSID = _ref.numberSID,
      name = _ref.name,
      passport = _ref.passport,
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

  var watchNoKtur = watch("numberKTUR");
  var watchNoSID = watch("numberSID");
  var watchHidCaptcha = watch('hidGRecaptchaElement');

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
    }

    console.log('watchNoKtur', watchNoKtur);
    console.log('watchNoSID', watchNoSID);

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
      lineNumber: 68
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Personal"), __jsx("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " ", state.rsvp.personal.data && JSON.stringify(state.rsvp.personal.data, null, 2)), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberKTUR.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, numberKTUR.label, " ", numberKTUR.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("input", {
    id: numberKTUR.name,
    name: numberKTUR.name,
    placeholder: numberKTUR.placeholder,
    ref: register({
      required: numberKTUR.validation.required_msg,
      minLength: {
        value: 6,
        message: numberKTUR.validation.minlength_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberKTUR.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberSID.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, numberSID.label, " ", numberSID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("input", {
    id: numberSID.name,
    name: numberSID.name,
    placeholder: numberSID.placeholder,
    ref: register({
      required: numberSID.validation.required_msg,
      minLength: {
        value: 6,
        message: numberSID.validation.minlength_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberSID.name,
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
    htmlFor: name.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, name.label, " ", name.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("input", {
    id: name.name,
    name: name.name,
    ref: register({
      required: name.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: name.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("label", {
    htmlFor: passport.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, passport.label, " ", passport.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("input", {
    id: passport.name,
    name: passport.name,
    placeholder: passport.placeholder,
    ref: register({
      required: passport.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: passport.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("label", {
    htmlFor: address.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, address.label, " ", address.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("input", {
    id: address.name,
    name: address.name,
    placeholder: address.placeholder,
    ref: register({
      required: address.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: address.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("label", {
    htmlFor: numberOfShares.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, numberOfShares.label, " ", numberOfShares.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("input", {
    id: numberOfShares.name,
    name: numberOfShares.name,
    placeholder: numberOfShares.placeholder,
    ref: register({
      required: numberOfShares.validation.required_msg
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: numberOfShares.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("label", {
    htmlFor: phoneNumber.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, phoneNumber.label, " ", phoneNumber.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("input", {
    id: phoneNumber.name,
    name: phoneNumber.name,
    placeholder: phoneNumber.name,
    ref: register({
      required: phoneNumber.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["phonePattern1"],
        message: phoneNumber.validation.pattern_msg
      }
    }),
    type: "text",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: phoneNumber.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("label", {
    htmlFor: email.name,
    className: "col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, email.label, " ", email.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, "*") : ''), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("input", {
    id: email.name,
    name: email.name,
    placeholder: email.placeholder,
    ref: register({
      required: email.validation.required_msg,
      pattern: {
        value: _util_constants__WEBPACK_IMPORTED_MODULE_3__["emailPattern"],
        message: email.validation.pattern_msg
      }
    }),
    type: "email",
    className: "form-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: email.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }))), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("div", {
    className: "file-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("label", {
    htmlFor: uploadID.name,
    className: "input-file-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("a", {
    className: "button button--2 button--axiata",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, uploadID.label), uploadID.placeholder, " ", uploadID.required ? __jsx("span", {
    className: "required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "*") : '', __jsx("input", {
    id: uploadID.name,
    name: uploadID.name,
    ref: register({
      required: uploadID.validation.required_msg
    }),
    type: "file",
    className: "input-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }))), uploadID.fileInfoLine1 || uploadID.fileInfoLine2 ? __jsx("div", {
    className: "file-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, uploadID.fileInfoLine1 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, uploadID.fileInfoLine1) : '', uploadID.fileInfoLine2 ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, uploadID.fileInfoLine2) : '') : '', __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: uploadID.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), __jsx("div", {
    className: "form-group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx("div", {
    className: "g-recaptcha",
    id: captcha.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx("input", {
    type: "hidden",
    name: captcha.hiddenField.name,
    defaultValue: state.rsvp.captchaValue,
    ref: register({
      required: captcha.validation.required_msg
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: captcha.hiddenField.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  })), __jsx("div", {
    className: "clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("div", {
    className: "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
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
      lineNumber: 236
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "userAcceptance",
    className: "col-form-label pl-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, " Check to agree xl axiata terms and conditions.")), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    as: "p",
    errors: errors,
    name: "userAcceptance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    className: "form-group text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "Submit")))) : __jsx("div", {
    className: "text-center text-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Enter No KTUR & No SID/AKSes.KSEI to verify your status"));
}

/***/ }),

/***/ "./overmind/rsvp/state.js":
/*!********************************!*\
  !*** ./overmind/rsvp/state.js ***!
  \********************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
var state = {
  title: "Online Registration / RSVP Online",
  formNotValid: true,
  selectedType: 'personal',
  captchaValue: "",
  isSIDKTPVerified: false,
  types: [{
    text: "Personal",
    value: "personal"
  }, {
    text: "Entity",
    value: "entity"
  }, {
    text: "Proxy Holder",
    value: "proxyholder"
  }],
  personal: {
    title: "Personal",
    data: {
      numberKTUR: {
        label: "No KTUR - Test from Parent personal",
        name: 'numberKTUR',
        value: "",
        placeholder: "Input your KTUR number",
        required: true,
        validation: {
          required_msg: "KTUR number is required",
          minlength_msg: "Minimum 6 length is required"
        }
      },
      numberSID: {
        label: "No SID/AKSes.KSEI",
        name: 'numberSID',
        value: "",
        placeholder: "Input your SID/AKSes.KSEI number",
        required: true,
        validation: {
          required_msg: "SID/AKSes.KSEI number is required",
          minlength_msg: "Minimum 6 length is required"
        }
      },
      name: {
        label: 'Nama',
        name: 'name',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      passport: {
        label: 'NIK (KTP)/Passport',
        name: 'numberKTPOrPassport',
        value: "",
        required: true,
        placeholder: 'Input your KTP or Passport number',
        validation: {
          required_msg: "NIK (KTP)/Passport is required"
        }
      },
      address: {
        label: 'Address',
        name: 'address',
        value: "",
        required: true,
        placeholder: 'Input your address',
        validation: {
          required_msg: "Address is required"
        }
      },
      numberOfShares: {
        label: 'Jumlah Saham (sesuai KTUR)',
        name: 'numberOfShares',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      phoneNumber: {
        label: "Phone/Mobile",
        value: "",
        placeholder: "Input your phone number here",
        hint: "",
        required: true,
        validation: {
          required_msg: "Phone number is required",
          pattern_msg: "Invalid phone number"
        }
      },
      email: {
        label: "Email",
        name: 'email',
        value: "",
        placeholder: "Input your email",
        required: true,
        validation: {
          required_msg: "Email is required",
          pattern_msg: "Invalid email"
        }
      },
      uploadID: {
        label: "Upload ID",
        name: 'uploadID',
        value: "",
        placeholder: "No file chosen",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload your ID is required"
        }
      },
      captcha: {
        label: "",
        id: 'gRecaptchaElement',
        hiddenField: {
          name: "hidGRecaptchaElement"
        },
        validation: {
          required_msg: "Required captcha validation"
        }
      },
      submitButton: {
        label: "Submit",
        name: "btnSubmit",
        type: "submit",
        value: ""
      },
      successMsgTitle: "RSVP Entity Form Success",
      failedMsgTitle: "Error",
      successMsg: "RSVP Entity Form submitted successfully",
      failedMsg: "RSVP Entity Form Error",
      redirectURL: 'http://localhost:4200/en/'
    }
  },
  entity: {
    title: "Entity",
    data: {
      numberKTUR: {
        label: "No KTUR - Test from parent Entity",
        name: 'numberKTUR',
        value: "",
        placeholder: "Input your KTUR number",
        required: true,
        validation: {
          required_msg: "KTUR number is required"
        }
      },
      numberSID: {
        label: "No SID/AKSes.KSEI",
        name: 'numberSID',
        value: "",
        placeholder: "Input your SID/AKSes.KSEI number",
        required: true,
        validation: {
          required_msg: "SID/AKSes.KSEI number is required"
        }
      },
      name: {
        label: 'Nama',
        name: 'name',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      numberKTPOrPassport: {
        label: 'NIK (KTP)/Passport',
        name: 'numberKTPOrPassport',
        value: "",
        required: true,
        placeholder: 'Input your KTP or Passport number',
        validation: {
          required_msg: "KTP or Passport number is required"
        }
      },
      address: {
        label: 'Address',
        name: 'address',
        value: "",
        required: true,
        placeholder: 'Input your address',
        validation: {
          required_msg: "Address is required"
        }
      },
      numberOfShares: {
        label: 'Jumlah Saham (sesuai KTUR)',
        name: 'numberOfShares',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      phoneNumber: {
        label: "Phone/Mobile",
        value: "",
        placeholder: "Input your phone number here",
        hint: "",
        required: true,
        validation: {
          required_msg: "Phone number is required",
          pattern_msg: "Invalid phone number"
        }
      },
      email: {
        label: "Email",
        name: 'email',
        value: "",
        placeholder: "Input your email",
        required: true,
        validation: {
          required_msg: "Email is required",
          pattern_msg: "Invalid email"
        }
      },
      uploadID: {
        label: "Upload ID",
        name: 'uploadID',
        value: "",
        placeholder: "Upload your ID",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload your ID is required"
        }
      },
      uploadArticleOfAssociation: {
        label: "Upload Article of Association",
        name: 'uploadArticleOfAssociation',
        value: "",
        placeholder: "Upload article of association",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload article of association is required"
        }
      },
      uploadProxy: {
        label: "Upload Proxy",
        name: 'uploadProxy',
        value: "",
        placeholder: "Upload proxy",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload proxy is required"
        }
      },
      captcha: {
        label: "",
        name: 'captcha',
        validation: {
          required_msg: "Required captcha validation"
        }
      },
      submitButton: {
        label: "Submit",
        name: "btnSubmit",
        type: "submit",
        value: ""
      },
      successMsgTitle: "RSVP Entity Form Success",
      failedMsgTitle: "Error",
      successMsg: "RSVP Entity Form submitted successfully",
      failedMsg: "RSVP Entity Form Error",
      redirectURL: 'http://localhost:4200/en/'
    }
  },
  proxyHolder: {
    title: "Proxy Holder",
    data: {
      name: {
        label: 'Nama',
        name: 'name',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      numberKTPOrPassport: {
        label: 'NIK (KTP)/Passport',
        name: 'numberKTPOrPassport',
        value: "",
        required: true,
        placeholder: 'Input your KTP or Passport number',
        validation: {
          required_msg: "KTP or Passport number is required"
        }
      },
      address: {
        label: 'Address',
        name: 'address',
        value: "",
        required: true,
        placeholder: 'Input your address',
        validation: {
          required_msg: "Address is required"
        }
      },
      numberOfShares: {
        label: 'Jumlah Saham (sesuai KTUR)',
        name: 'numberOfShares',
        value: "",
        required: true,
        placeholder: 'Input your name here',
        validation: {
          required_msg: "Name is required"
        }
      },
      phoneNumber: {
        label: "Phone/Mobile",
        value: "",
        placeholder: "Input your phone number here",
        hint: "",
        required: true,
        validation: {
          required_msg: "Phone number is required",
          pattern_msg: "Invalid phone number"
        }
      },
      email: {
        label: "Email",
        name: 'email',
        value: "",
        placeholder: "Input your email",
        required: true,
        validation: {
          required_msg: "Email is required",
          pattern_msg: "Invalid email"
        }
      },
      uploadID: {
        label: "Upload ID",
        name: 'uploadID',
        value: "",
        placeholder: "Upload your ID",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload your ID is required"
        }
      },
      uploadArticleOfAssociation: {
        label: "Upload Article of Association",
        name: 'uploadArticleOfAssociation',
        value: "",
        placeholder: "Upload article of association",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload article of association is required"
        }
      },
      uploadProxy: {
        label: "Upload Proxy",
        name: 'uploadProxy',
        value: "",
        placeholder: "Upload proxy",
        required: true,
        fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
        fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
        validation: {
          required_msg: "Upload proxy is required"
        }
      },
      proxyOfShareHolderIdentity: {
        label: "Proxy of (Shareholder Identity)",
        name: 'proxyOfShareHolderIdentity',
        subFields: {
          numberKTUR: {
            label: "No KTUR - Test from Parent personal",
            name: 'numberKTUR',
            value: "",
            placeholder: "Input your KTUR number",
            required: true,
            validation: {
              required_msg: "KTUR number is required"
            }
          },
          numberSID: {
            label: "No SID/AKSes.KSEI",
            name: 'numberSID',
            value: "",
            placeholder: "Input your SID/AKSes.KSEI number",
            required: true,
            validation: {
              required_msg: "SID/AKSes.KSEI number is required"
            }
          },
          name: {
            label: 'Nama',
            name: 'name',
            value: "",
            required: true,
            placeholder: 'Input your name here',
            validation: {
              required_msg: "Name is required"
            }
          },
          numberKTPOrPassport: {
            label: 'NIK (KTP)/Passport',
            name: 'numberKTPOrPassport',
            value: "",
            required: true,
            placeholder: 'Input your KTP or Passport number',
            validation: {
              required_msg: "KTP or Passport number is required"
            }
          },
          address: {
            label: 'Address',
            name: 'address',
            value: "",
            required: true,
            placeholder: 'Input your address',
            validation: {
              required_msg: "Address is required"
            }
          },
          numberOfShares: {
            label: 'Jumlah Saham (sesuai KTUR)',
            name: 'numberOfShares',
            value: "",
            required: true,
            placeholder: 'Input your name here',
            validation: {
              required_msg: "Name is required"
            }
          },
          phoneNumber: {
            label: "Phone/Mobile",
            value: "",
            placeholder: "Input your phone number here",
            hint: "",
            required: true,
            validation: {
              required_msg: "Phone number is required",
              pattern_msg: "Invalid phone number"
            }
          },
          email: {
            label: "Email",
            name: 'email',
            value: "",
            placeholder: "Input your email",
            required: true,
            validation: {
              required_msg: "Email is required",
              pattern_msg: "Invalid email"
            }
          },
          uploadID: {
            label: "Upload ID",
            name: 'uploadID',
            value: "",
            placeholder: "Upload your ID",
            required: true,
            fileInfoLine1: "Ukuran berkas harus kurang dari 10 MB. jat",
            fileInfoLine2: "Jenis file yang diperbolehkan: .jpg , .jpeg, .png, .pdf jat",
            validation: {
              required_msg: "Upload your ID is required"
            }
          },
          captcha: {
            label: "",
            name: 'captcha',
            validation: {
              required_msg: "Required captcha validation"
            }
          },
          submitButton: {
            label: "Submit",
            name: "btnSubmit",
            type: "submit",
            value: ""
          },
          successMsgTitle: "RSVP Proxy holder Form Success",
          failedMsgTitle: "Error",
          successMsg: "RSVP Proxy holder Form submitted successfully",
          failedMsg: "RSVP Proxy holder Form Error",
          redirectURL: 'http://localhost:4200/en/'
        }
      },
      captcha: {
        label: "",
        name: 'captcha',
        validation: {
          required_msg: "Required captcha validation"
        }
      },
      submitButton: {
        label: "Submit",
        name: "btnSubmit",
        type: "submit",
        value: ""
      },
      successMsgTitle: "RSVP Proxy Holder Form Success",
      failedMsgTitle: "Error",
      successMsg: "RSVP Proxy Holder Form submitted successfully",
      failedMsg: "RSVP Proxy Holder Form Error",
      redirectURL: 'http://localhost:4200/en/'
    }
  }
};

/***/ })

})
//# sourceMappingURL=index.js.16a92d6f75b848959809.hot-update.js.map