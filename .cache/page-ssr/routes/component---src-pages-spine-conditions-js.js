"use strict";
exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/about-hero-c8f5582e1b74155357f84d103148e1c9.webp");

/***/ }),

/***/ 2491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9383);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9722);
/* harmony import */ var _images_about_hero_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
// Condition Icon Component (Using SVG code from `svgCode`)
const ConditionIcon=({svgCode})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"condition-icon",dangerouslySetInnerHTML:{__html:svgCode}});};const SpineConditionsPage=({data})=>{// Sort conditions in descending order by menuOrder
const conditions=data.allWpSpineCondition.nodes.sort((a,b)=>{if(a.menuOrder<b.menuOrder){return-1;// a comes before b
}if(a.menuOrder>b.menuOrder){return 1;// b comes before a
}return 0;// no change
});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",{className:"spine-conditions-page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"conditions-hero-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:_images_about_hero_webp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,alt:"Understanding spine conditions",className:"conditions-hero-bg"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"conditions-hero-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"Understanding ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Spine Conditions"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Understanding the underlying cause of spine pain is the first step toward effective treatment and long-term recovery."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"conditions-list-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"Spine Conditions"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"conditions-section-intro"},"Comprehensive evaluation and treatment for a wide range of spinal disorders affecting the neck, back, and nerves."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"conditions-list-wrap"},conditions.map((condition,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"condition-row",key:index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"condition-left"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ConditionIcon,{svgCode:condition.spineConditionsPost.svgCode}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",null,condition.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"condition-content",dangerouslySetInnerHTML:{__html:condition.content// Using content here
}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"condition-right"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4",null,"Major Treatment Approaches"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"treatment-option-list"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"treatment-option"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,"Slip Disc / Disc Herniation Treatment"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"arrow"},"\u2192")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"treatment-option"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,"Endoscopic Surgery"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"arrow"},"\u2192")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"treatment-option"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,"Minimally Invasive Spine Surgery (MISS)"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"arrow"},"\u2192"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/spine-condition/${condition.slug}/`,className:"view-treatment-btn"},"View All Treatment Options")))))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpineConditionsPage);const query="3213598176";

/***/ }),

/***/ 9722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/leena/Documents/Leena/projects/manoj-gatsby/v1/v1/node_modules/react/index.js"
var index_js_ = __webpack_require__(9383);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs
var index_modern = __webpack_require__(6462);
;// ./src/images/Manoj-Website-Logo.svg
/* harmony default export */ const Manoj_Website_Logo = ("/static/Manoj-Website-Logo-5d9756e0dd52133ffa300c34cee2405f.svg");
;// ./src/components/header.js
const Header=()=>{const location=(0,index_modern.useLocation)();const isActive=path=>{return location.pathname===path||location.pathname.startsWith(path);};return/*#__PURE__*/index_js_default().createElement("header",{className:"site-header"},/*#__PURE__*/index_js_default().createElement("div",{className:"header-inner"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"logo-wrap"},/*#__PURE__*/index_js_default().createElement("img",{src:Manoj_Website_Logo,alt:"Dr. Manojkumar Gaddikeri"})),/*#__PURE__*/index_js_default().createElement("nav",{className:"main-nav"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about/",activeClassName:"active"},"About"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/spine-conditions/",className:isActive("/spine-conditions/")?"active":""},"Spine Conditions"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/treatments/",activeClassName:"active",partiallyActive:true},"Treatments"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/patient-journey/",activeClassName:"active"},"Patient Journey"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/insights/",className:isActive("/insights/")?"active":""},"Insights")),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/contact/",className:`header-btn ${isActive("/contact/")?"active":""}`},"Reach Out")));};/* harmony default export */ const header = (Header);
;// ./src/components/Footer.js
const Footer=()=>{return/*#__PURE__*/index_js_default().createElement("footer",{className:"site-footer",id:"contact"},/*#__PURE__*/index_js_default().createElement("div",{className:"footer-cta"},/*#__PURE__*/index_js_default().createElement("h2",null,"If spine symptoms are affecting your daily activities,",/*#__PURE__*/index_js_default().createElement("br",null),"a consultation can help identify the cause and explore treatment options."),/*#__PURE__*/index_js_default().createElement("a",{href:"#contact",className:"footer-btn"},"Learn More")),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-main"},/*#__PURE__*/index_js_default().createElement("div",{className:"footer-brand"},/*#__PURE__*/index_js_default().createElement("img",{src:Manoj_Website_Logo,alt:"Dr. Manojkumar Gaddikeri"}),/*#__PURE__*/index_js_default().createElement("p",null,"Orthopaedic spine surgeon specialising in",/*#__PURE__*/index_js_default().createElement("br",null),"personalised, patient-centred spine care"),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-social"},/*#__PURE__*/index_js_default().createElement("a",{href:"#","aria-label":"Instagram"},"\u25CE"),/*#__PURE__*/index_js_default().createElement("a",{href:"#","aria-label":"LinkedIn"},"in"))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-links-wrap"},/*#__PURE__*/index_js_default().createElement("div",{className:"footer-col"},/*#__PURE__*/index_js_default().createElement("h3",null,"Home"),/*#__PURE__*/index_js_default().createElement("a",{href:"/about"},"About"),/*#__PURE__*/index_js_default().createElement("a",{href:"/spine-conditions"},"Spine Conditions"),/*#__PURE__*/index_js_default().createElement("a",{href:"/treatments"},"Treatments"),/*#__PURE__*/index_js_default().createElement("a",{href:"/patient-journey"},"Patient Journey")),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-col"},/*#__PURE__*/index_js_default().createElement("h3",null,"Explore"),/*#__PURE__*/index_js_default().createElement("a",{href:"#faq"},"FAQ"),/*#__PURE__*/index_js_default().createElement("a",{href:"#blogs"},"Blogs")),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-col footer-contact"},/*#__PURE__*/index_js_default().createElement("h3",null,"Reach Out"),/*#__PURE__*/index_js_default().createElement("a",{href:"#",className:"footer-contact-item"},/*#__PURE__*/index_js_default().createElement("span",null,"\u25CF"),"Wockhardt Hospitals, Mira Road"),/*#__PURE__*/index_js_default().createElement("a",{href:"mailto:example@email.com",className:"footer-contact-item"},/*#__PURE__*/index_js_default().createElement("span",null,"\u2709"),"Email"),/*#__PURE__*/index_js_default().createElement("a",{href:"tel:+910000000000",className:"footer-contact-item"},/*#__PURE__*/index_js_default().createElement("span",null,"\u260E"),"Contact")))),/*#__PURE__*/index_js_default().createElement("div",{className:"footer-line"}));};/* harmony default export */ const components_Footer = (Footer);
;// ./src/components/layout.js
const Layout=({children})=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(header,null),/*#__PURE__*/index_js_default().createElement("main",null,children),/*#__PURE__*/index_js_default().createElement(components_Footer,null));};/* harmony default export */ const layout = (Layout);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-spine-conditions-js.js.map