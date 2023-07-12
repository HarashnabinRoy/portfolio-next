"use strict";
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 5343:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(303);
/* harmony import */ var _Footer_colorDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7850);
/* harmony import */ var _Footer_colorContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5487);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__]);
([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Footer() {
    const { color  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Footer_colorContext__WEBPACK_IMPORTED_MODULE_7__/* .ColorContext */ .d);
    // const [selectedColor, setSelectedColor] = useState('weed');
    // const handleColorChange = (color) => {
    //   setSelectedColor(color);
    // };
    // onMouseEnter={(e) => (e.target.style.color = color)}
    // onMouseLeave={(e) => (e.target.style.color = "#5d5a5a99")}
    // #2bbc8a
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-[#5d5a5a99] flex flex-wrap justify-between mt-16 mb-4 text-xs md:mx-[200px] mx-6 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onMouseEnter: (e)=>e.target.style.color = color
                                ,
                                onMouseLeave: (e)=>e.target.style.color = "#5d5a5a99"
                                ,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "mailto:harashnabin2002@gmail.com",
                                    className: `transition duration-200 ease-in-out`,
                                    target: "_blank",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope
                                        }),
                                        " ",
                                        " ",
                                        "Contact"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://github.com/HarashnabinRoy",
                                className: `transition duration-200 ease-in-out`,
                                target: "_blank",
                                onMouseEnter: (e)=>e.target.style.color = color
                                ,
                                onMouseLeave: (e)=>e.target.style.color = "#5d5a5a99"
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCode
                                    }),
                                    " ",
                                    " ",
                                    "Github"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://discords.com/bio/p/exion",
                                className: `transition duration-200 ease-in-out`,
                                target: "_blank",
                                onMouseEnter: (e)=>e.target.style.color = color
                                ,
                                onMouseLeave: (e)=>e.target.style.color = "#5d5a5a99"
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faDiscord
                                    }),
                                    " ",
                                    " ",
                                    "Discord"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://www.linkedin.com/in/harashnabin-roy-8893731b9/",
                                className: ` transition duration-200 ease-in-out`,
                                target: "_blank",
                                onMouseEnter: (e)=>e.target.style.color = color
                                ,
                                onMouseOut: (e)=>e.target.style.color = "#5d5a5a99"
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLinkedinIn
                                    }),
                                    " ",
                                    " ",
                                    "LinkedIn"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "https://twitter.com/RoyHarashnabin",
                                className: `transition duration-200 ease-in-out`,
                                target: "_blank",
                                onMouseEnter: (e)=>e.target.style.color = color
                                ,
                                onMouseLeave: (e)=>e.target.style.color = "#5d5a5a99"
                                ,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter
                                    }),
                                    " ",
                                    " ",
                                    "Twitter"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4 md:my-0 my-4 ",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCodeBranch
                                    }),
                                    " v2.0.0"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hover:cursor-pointer",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPalette,
                                        style: {
                                            color: color
                                        }
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer_colorDropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center text-[#5d5a5a99] text-md mb-4 cursor-pointer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "mailto:harashnabin2002@gmail.com",
                    children: "@Harashnabin Roy 2022"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ ColorProvider),
/* harmony export */   "d": () => (/* binding */ ColorContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ColorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ColorProvider = ({ children  })=>{
    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("#2bbc8a"); // Initial color state
    const updateColor = (newColor)=>{
        setColor(newColor);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorContext.Provider, {
        value: {
            color,
            updateColor
        },
        children: children
    });
};


/***/ }),

/***/ 7850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ colorDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _colorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5487);



function colorDropdown() {
    // const [selectedColor, setSelectedColor] = useState('weed');
    // const handleColorChange = (e) => {
    //     const color = e.target.value;
    //     setSelectedColor(color);
    //     onColorChange(color)
    // }
    const { color  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_colorContext__WEBPACK_IMPORTED_MODULE_2__/* .ColorContext */ .d);
    const { updateColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_colorContext__WEBPACK_IMPORTED_MODULE_2__/* .ColorContext */ .d);
    const handleColorChange = (event)=>{
        const newColor = event.target.value;
        updateColor(newColor);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        onChange: handleColorChange,
        className: "hover:cursor-pointer appearance-none outline-none ring-transparent bg-[#1d1f21] ",
        style: {
            color: color
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "#2bbc8a",
                children: "weed"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "#17b8bd",
                children: "pulse"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "#e2b714",
                children: "Serika Yellow"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "#00e980",
                children: "aurora"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "#79a617",
                children: "terminal"
            })
        ]
    });
};


/***/ }),

/***/ 3221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer_colorContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5487);




function Navbar() {
    const { color  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Footer_colorContext__WEBPACK_IMPORTED_MODULE_3__/* .ColorContext */ .d);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-xs w-full flex items-center px-10 pt-8 justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-2xl font-bold logo",
                    children: [
                        "Exion",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            style: {
                                color: color
                            },
                            children: "."
                        }),
                        "dev"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex gap-12 p-[10px] text-lg`,
                    style: {
                        color: color
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "/",
                            className: "underlineEffect",
                            children: [
                                ".01 ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#c9cacc]",
                                    children: "Home"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "/projects",
                            className: "underlineEffect",
                            children: [
                                ".02 ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#c9cacc]",
                                    children: "Projects"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "/contact",
                            className: "underlineEffect",
                            children: [
                                ".03 ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#c9cacc]",
                                    children: "Contact Me"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
;


/***/ })

};
;