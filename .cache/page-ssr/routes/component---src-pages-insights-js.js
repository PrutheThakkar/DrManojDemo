"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 1850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9383);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9722);
const placeholderImage="https://placehold.co/600x400?text=No+Image";const BlogPage=({data})=>{const posts=data.allWpPost.edges;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",{className:"blog-listing-page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"about-hero-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"about-hero-bg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:placeholderImage,alt:"Blogs"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"about-hero-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"Insights"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Expert perspectives on spine health, treatments, and recovery."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"blog-listing-section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"blog-grid"},posts.map(({node:post})=>{var _post$featuredImage,_post$featuredImage$n,_post$featuredImage2,_post$featuredImage2$;const image=((_post$featuredImage=post.featuredImage)===null||_post$featuredImage===void 0?void 0:(_post$featuredImage$n=_post$featuredImage.node)===null||_post$featuredImage$n===void 0?void 0:_post$featuredImage$n.mediaItemUrl)||placeholderImage;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/insights/${post.slug}/`,className:"blog-card",key:post.slug},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"blog-card-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:image,alt:((_post$featuredImage2=post.featuredImage)===null||_post$featuredImage2===void 0?void 0:(_post$featuredImage2$=_post$featuredImage2.node)===null||_post$featuredImage2$===void 0?void 0:_post$featuredImage2$.altText)||post.title})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"blog-card-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{dangerouslySetInnerHTML:{__html:post.title}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"read-more"},"Read More \u2192")));}))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPage);const query="562739725";

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
//# sourceMappingURL=component---src-pages-insights-js.js.map