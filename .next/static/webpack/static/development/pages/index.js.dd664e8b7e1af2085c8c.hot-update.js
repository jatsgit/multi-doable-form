webpackHotUpdate("static/development/pages/index.js",{

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
//# sourceMappingURL=index.js.dd664e8b7e1af2085c8c.hot-update.js.map