module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+oBk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/reducers/layout.js
var layout = __webpack_require__("rWIw");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/mediaquery.ts
/* eslint-disable import/prefer-default-export */
const breakpoints = [500, 760, 1000, 1300];
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
// CONCATENATED MODULE: ./components/Layout/Logo.tsx

var __jsx = external_react_default.a.createElement;



const StyledLogo = styled_default.a.div`
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #ffff;
    border: 0.0625rem solid #c9cacb;
    border-top: 0;
    width: 6.75rem;
    height: 4.8125rem;
    padding: 0.3125rem 0.1875rem 0.5625rem 0.1875rem;
    margin: 0;
    display: inline-block;

    img { 
        width: 100%;
    }
    ${mq[0]} {
        width: 6.875rem;
        height: 5.25rem;
        padding: 0.5625rem 0.25rem 0.8125rem 0.25rem;
    }
    ${mq[1]} {
        width: 6.875rem;
        height: 5.25rem;
        padding: 0.375rem 0.3125rem 0.4375rem 0.3125rem;
    }
    ${mq[2]} {
        width: 8.3125rem;
        height: 8.3125rem;
        padding: 1.75rem 0.25rem 1.875rem 0.25rem;
    }
`;

const Logo = () => __jsx(link_default.a, {
  href: "/"
}, __jsx("a", {
  style: {
    zIndex: 400
  }
}, __jsx(StyledLogo, null, __jsx("img", {
  srcSet: " https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.b95854f1d63d3fde4498a56a79e94b52@1x.png 1x, https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.02fd4c5069964f0cc8b765140807406f@2x.png 2x, https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.4278429e2318f275eed1bea7217fa69d@3x.png 3x ",
  src: "https://cdn.ui.porsche.com/porsche-design-system/marque/porsche-marque-trademark.small.min.02fd4c5069964f0cc8b765140807406f@2x.png",
  alt: "logo"
}))));

/* harmony default export */ var Layout_Logo = (Logo);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./utils/menu-data.ts
const modelMenu = [{
  title: '718',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/718@2x.jpg',
  subMenu: [{
    title: '718 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/718-cayman@2x.jpg'
  }]
}, {
  title: '911',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
  subMenu: [{
    title: '911 Carrerra & Targa 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/911-carrera@2x.jpg'
  }, {
    title: '911 Turbo S 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/911-turbo-s@2x.jpg'
  }]
}, {
  title: 'Taycan',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/taycan@2x.jpg',
  subMenu: [{
    title: 'Taycan 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/taycan@2x.jpg'
  }]
}, {
  title: 'Panamera',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/panamera@2x.jpg',
  subMenu: [{
    title: 'Panamera 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/panamera@2x.jpg'
  }]
}, {
  title: 'Macan',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/macan@2x.jpg',
  subMenu: [{
    title: 'Macan 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/macan@2x.jpg'
  }]
}, {
  title: 'Cayenne',
  imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/cayenne@2x.jpg',
  subMenu: [{
    title: 'Cayenne 모델',
    imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/cayenne@2x.jpg'
  }]
}];
const shopMenu = [{
  title: '부품 및 액세서리',
  data: ['라이프스타일 - 패션 & 액세서리', '포르쉐 클래식 - 순정 부품']
}];
const moreMenu = [{
  title: '서비스',
  data: ['E-모빌리티 & E-퍼포먼스', '포르쉐 파이낸셜 서비스 - 리스 & 금융 서비스', '팩토리 컬렉션', '서비스 & 메인터넌스', '테큅먼트 - 순정 액세서리', 'Porsche Exclusive Manufaktur', '포르쉐클래식', 'Approved - 포르쉐 인증 중고차 및 워런티']
}, {
  title: '익스피리언스',
  data: ['모터스포츠', '포르쉐 익스피리언스 - 트레이닝 & 트래블', '포르쉐 클럽', '포르쉐 골프', '가상 현실(VR)', '포르쉐 소셜 미디어', '포르쉐 매거진', '포르쉐 뉴스레터', '포르쉐 박물관']
}, {
  title: '포르쉐에 대하여',
  data: ['포르쉐 브랜드 개요', '포르쉐 코리아 소개', '지속 가능성', '커리어', '포르쉐 딜러 지원', '포르쉐 계열사', '뉴스 룸 및 보도 자료', '문의하기']
}];
// CONCATENATED MODULE: ./components/Layout/ModelSubMenu.tsx

var ModelSubMenu_jsx = external_react_default.a.createElement;


const StyledSubMenu = styled_default.a.div`
  background-color : #fff;
  padding: 20px;
  position: absolute;
  top: 117px;left:0;right:0;

  ul { 
    li { 
      padding: 0;
      list-style: none;
      font-size: 1rem;
      font-weight: 500;
      &:hover {
        color : #d5001c;
      }
    }
  }
`;
const SubMenuItem = styled_default.a.ul`
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  width: 40vw;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  margin: 10px auto;
`;
const MidMenu = styled_default.a.ul`
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 0 auto;

  & > li {
    width: 246px;
    margin-right: 20px;
    img {
      width: 100%;
      height: 139px;
    }
    p {
      text-align: center;
      margin-top: -5px;s
    }
  }
`;

const ModelSubMenu = ({
  title,
  data
}) => ModelSubMenu_jsx(StyledSubMenu, {
  style: {
    zIndex: 100
  }
}, ModelSubMenu_jsx(SubMenuItem, null, ModelSubMenu_jsx("li", null, ModelSubMenu_jsx(icons_["SettingOutlined"], null), ' ', "\uB098\uB9CC\uC758 \uD3EC\uB974\uC250 \uB9CC\uB4E4\uAE30"), ModelSubMenu_jsx("li", null, ModelSubMenu_jsx(icons_["SwapOutlined"], null), ' ', "\uBE44\uAD50\uD558\uAE30"), ModelSubMenu_jsx("li", null, ModelSubMenu_jsx(icons_["SearchOutlined"], null), ' ', "\uD3EC\uB974\uC250 \uC2E0\uCC28 \uB610\uB294 \uC778\uC99D \uC911\uACE0\uCC28 \uCC3E\uAE30")), ModelSubMenu_jsx(MidMenu, null, data.map(item => ModelSubMenu_jsx("li", null, ModelSubMenu_jsx("img", {
  src: item.imgSrc,
  alt: item.title
}), ModelSubMenu_jsx("p", null, item.title)))), ModelSubMenu_jsx(SubMenuItem, {
  style: {
    width: '25vw'
  }
}, ModelSubMenu_jsx("li", null, ModelSubMenu_jsx(icons_["RightOutlined"], null), ` ${title} 개요`), ModelSubMenu_jsx("li", null, ModelSubMenu_jsx(icons_["RightOutlined"], null), ' 전체 개요')));

/* harmony default export */ var Layout_ModelSubMenu = (ModelSubMenu);
// CONCATENATED MODULE: ./components/Layout/ModelMenu.tsx

var ModelMenu_jsx = external_react_default.a.createElement;





const StyledModelMenu = styled_default.a.div`
    position: relative;
    height: 100%;
    padding: 40px 5px 20px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;

    img { 
      width: 89px;
      height: 55px;
    }
    span {
      text-align: center;
      margin-top: -5px;
    }
    &:hover {
      top: 3px;
      border-bottom: 5px solid #d5001c;
      
      span {
        color: #d5001c;
      }
    }
`;

const ModelMenu = ({
  title,
  img,
  submenu
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: hovered,
    1: setHovered
  } = Object(external_react_["useState"])(false);
  const onMouseAction = Object(external_react_["useCallback"])(() => {
    setHovered(prev => !prev);
    dispatch(layout["a" /* default */].actions.toggle(0));
  }, [hovered]);
  return ModelMenu_jsx("div", {
    onMouseEnter: onMouseAction,
    onMouseLeave: onMouseAction
  }, ModelMenu_jsx(StyledModelMenu, null, ModelMenu_jsx("img", {
    src: img,
    alt: title
  }), ModelMenu_jsx("span", null, title)), hovered && submenu && ModelMenu_jsx(Layout_ModelSubMenu, {
    title: title,
    data: submenu
  }));
};

/* harmony default export */ var Layout_ModelMenu = (ModelMenu);
// CONCATENATED MODULE: ./components/Layout/ModelMenuList.tsx

var ModelMenuList_jsx = external_react_default.a.createElement;


const Wrapper = styled_default.a.div`
    display: flex;
    margin: 0 15px;
`;

const ModelMenuList = ({
  data
}) => ModelMenuList_jsx(Wrapper, null, data.map(item => ModelMenuList_jsx(Layout_ModelMenu, {
  title: item.title,
  img: item.imgSrc,
  submenu: item.subMenu
})));

/* harmony default export */ var Layout_ModelMenuList = (ModelMenuList);
// CONCATENATED MODULE: ./components/Layout/TextSubMenu.tsx

var TextSubMenu_jsx = external_react_default.a.createElement;

const TextSubMenu_StyledSubMenu = styled_default.a.div`
  display: flex;
  background-color : #fff;
  justify-content: center;
  padding: 50px;
  position: absolute;
  top: 117px;left:0;right:0;

  ul { 
    width: 19vw;
    padding: 0;
    margin: 0 25px 0 0;
    h1 {
      font-weight: 400;
      border-bottom: 1px solid #4a4a4a;
      text-align: left;
      padding-left: 0.625rem;
    }
    li { 
      padding: 3px 0;
      margin: 10px 0 0 10px;
      list-style: none;
      font-size: 1rem;
      &:hover {
        color : #d5001c;
      }
    }

  }
`;

const TextSubMenu = ({
  data
}) => TextSubMenu_jsx(TextSubMenu_StyledSubMenu, {
  style: {
    zIndex: 100
  }
}, data.map(group => TextSubMenu_jsx("ul", null, TextSubMenu_jsx("h1", null, group.title), group.data.map(item => TextSubMenu_jsx("li", null, item)))));

/* harmony default export */ var Layout_TextSubMenu = (TextSubMenu);
// CONCATENATED MODULE: ./components/Layout/TextMenu.tsx

var TextMenu_jsx = external_react_default.a.createElement;





const StyledTextMenu = styled_default.a.div`
    position: relative;
    height: 100%;
    padding: 20px 10px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      top: 3px;
      border-bottom: 5px solid #d5001c;
      span { 
        color: #d5001c;
      }
    }
`;

const TextMenu = ({
  title,
  data
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: hovered,
    1: setHovered
  } = Object(external_react_["useState"])(false);
  const onMouseAction = Object(external_react_["useCallback"])(() => {
    setHovered(prev => !prev);
    dispatch(layout["a" /* default */].actions.toggle);
  }, []);
  return TextMenu_jsx("div", {
    onMouseEnter: onMouseAction,
    onMouseLeave: onMouseAction
  }, TextMenu_jsx(StyledTextMenu, null, TextMenu_jsx("span", null, title)), hovered && TextMenu_jsx(Layout_TextSubMenu, {
    data: data
  }));
};

/* harmony default export */ var Layout_TextMenu = (TextMenu);
// CONCATENATED MODULE: ./components/Layout/Menu.tsx

var Menu_jsx = external_react_default.a.createElement;






const StyledMenu = styled_default.a.div`
  display: flex;
  flex: 1;
`;
const FindCenter = styled_default.a.div`
    font-size: 16px;
    
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;

    margin-left: 30px;
    a {
      border-left: 1px solid lightgray; 
      padding: 20px 0 20px 40px;
      color: #000;
      text-align: right;
    }
    a:hover {
      color : #d5001c;
    }

`;

const Menu = () => Menu_jsx(StyledMenu, null, Menu_jsx(Layout_ModelMenuList, {
  data: modelMenu
}), Menu_jsx(Layout_TextMenu, {
  title: "shop",
  data: shopMenu
}), Menu_jsx(Layout_TextMenu, {
  title: "\uB354 \uBCF4\uAE30",
  data: moreMenu
}), Menu_jsx(FindCenter, null, Menu_jsx(link_default.a, {
  href: "/"
}, Menu_jsx("a", null, Menu_jsx(icons_["EnvironmentOutlined"], null), Menu_jsx("span", null, " \uD3EC\uB974\uC250 \uC13C\uD130 \uCC3E\uAE30\x1C")))));

/* harmony default export */ var Layout_Menu = (Menu);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/Layout/ModelSiderItem.tsx

var ModelSiderItem_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */





const ModelSiderItem_Wrapper = styled_default.a.div`
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        &:hover {
            cursor: pointer;
            span {
                color: #d5001c
            }
        }
        img {
            @media (max-width:760px) {
                width: 18.4vw;
                margin: 0 auto;
                margin-bottom: 10px;
            }
        }
        span {
            margin: 0 auto;
            position: relative;
            top: -20px;
            font-weight: 500;
        }
    }
`;
const StyledDrawer = styled_default()(external_antd_["Drawer"])`
    .ant-drawer-close {
        left: 0;
    }
    .container {
        h1 {
            font-size: 48px;
            font-weight: 300;
            margin-top: 50px;
            margin-bottom: 0;
            border-bottom: 1px solid black;
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                padding: 15px;
                padding-left: 0;
                margin: 0;
                border-bottom: 1px solid lightgray;
                list-style: none;
                font-size: 1rem;
                img {
                    width: 40%;
                }
                .imgTitle {
                    margin-left: 30px;
                    font-size: 1.25rem;
                }
                svg {
                    margin-right: 10px;
                }
                &:hover {
                    color: #d5001c;
                }
            }
        }
    }
`;

const ModelSiderItem = ({
  title,
  img,
  submenu,
  parentVisible
}) => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const showDrawer = Object(external_react_["useCallback"])(() => {
    setVisible(true);
    parentVisible(false);
  }, []);
  const onClose = Object(external_react_["useCallback"])(() => {
    setVisible(false);
    parentVisible(true);
  }, []);
  return ModelSiderItem_jsx(ModelSiderItem_Wrapper, null, ModelSiderItem_jsx("div", {
    className: "container",
    onClick: showDrawer
  }, ModelSiderItem_jsx("img", {
    src: img,
    alt: title
  }), ModelSiderItem_jsx("span", null, title)), ModelSiderItem_jsx(StyledDrawer, {
    width: windowWidth > 1000 ? 568 : windowWidth,
    onClose: onClose,
    visible: visible,
    bodyStyle: {
      padding: 40,
      paddingTop: 54
    },
    closeIcon: ModelSiderItem_jsx(icons_["LeftOutlined"], null)
  }, ModelSiderItem_jsx("div", {
    className: "container"
  }, ModelSiderItem_jsx("h1", null, title), ModelSiderItem_jsx("ul", null, ModelSiderItem_jsx("li", null, ModelSiderItem_jsx(icons_["SettingOutlined"], null), "\uB098\uB9CC\uC758 \uD3EC\uB974\uC250 \uB9CC\uB4E4\uAE30"), ModelSiderItem_jsx("li", null, ModelSiderItem_jsx(icons_["SwapOutlined"], null), "\uBE44\uAD50\uD558\uAE30"), ModelSiderItem_jsx("li", null, ModelSiderItem_jsx(icons_["SearchOutlined"], null), "\uD3EC\uB974\uC250 \uC2E0\uCC28 \uB610\uB294 \uC911\uACE0\uCC28 \uC778\uC99D\uD558\uAE30\x1D"), submenu && submenu.map(item => ModelSiderItem_jsx("li", null, ModelSiderItem_jsx("img", {
    src: item.imgSrc,
    alt: item.title
  }), ModelSiderItem_jsx("span", {
    className: "imgTitle"
  }, item.title))), ModelSiderItem_jsx("li", null, ModelSiderItem_jsx(icons_["RightOutlined"], null), title, '  ', "\uBAA8\uB378 \uAC1C\uC694"), ModelSiderItem_jsx("li", null, ModelSiderItem_jsx(icons_["RightOutlined"], null), "\uC804\uCCB4 \uBAA8\uB378 \uAC1C\uC694")))));
};

/* harmony default export */ var Layout_ModelSiderItem = (ModelSiderItem);
// CONCATENATED MODULE: ./components/Layout/ModelSider.tsx

var ModelSider_jsx = external_react_default.a.createElement;



const ModelSider_Wrapper = styled_default.a.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3,1fr);
    
    ${mq[1]} {
        column-gap: 8vw;
    }
    ${mq[2]} {
        gap: 0;
    }
`;

const ModelSider = ({
  data,
  parentVisible
}) => ModelSider_jsx(ModelSider_Wrapper, null, data.map(item => ModelSider_jsx(Layout_ModelSiderItem, {
  key: item.title,
  title: item.title,
  img: item.imgSrc,
  submenu: item.subMenu,
  parentVisible: parentVisible
})));

/* harmony default export */ var Layout_ModelSider = (ModelSider);
// CONCATENATED MODULE: ./components/Layout/TextSider.tsx

var TextSider_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */





const StyledButton = styled_default()(external_antd_["Button"])`
    border-top: 1px solid lightgray;
    padding: 20px 30px;
    text-align: left;

    & span {
        position: relative;
        top: -10px;
        font-size: 1.125rem;
    }
    &:hover {
      span {
          color: #d5001c;
      }
  }
`;
const StyledText = styled_default.a.div`
    border-top: 1px solid lightgray;
    padding: 20px 30px;
    text-align: left;

    & span {
        position: relative;
        font-size: 1.125rem;
    }
    &:hover {
        span {
            color: #d5001c;
        }
    }
`;
const TextSider_StyledDrawer = styled_default()(external_antd_["Drawer"])`
    .ant-drawer-close {
        left: 0;
    }

    .container {
        h1 {
            font-size: 48px;
            font-weight: 300;
            margin-top: 70px;
            margin-bottom: 0;
            border-bottom: 1px solid black;
        }
    }
`;

const TextSider = ({
  title,
  data,
  parentVisible
}) => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const showDrawer = Object(external_react_["useCallback"])(() => {
    setVisible(true);
    parentVisible(false);
  }, []);
  const onClose = Object(external_react_["useCallback"])(() => {
    setVisible(false);
    parentVisible(true);
  }, []);
  return TextSider_jsx(external_react_default.a.Fragment, null, TextSider_jsx(StyledButton, {
    type: "text",
    block: true,
    onClick: showDrawer
  }, title), TextSider_jsx(TextSider_StyledDrawer, {
    width: windowWidth > 1000 ? 568 : windowWidth,
    onClose: onClose,
    visible: visible,
    bodyStyle: {
      padding: 40,
      paddingTop: 54
    },
    closeIcon: TextSider_jsx(icons_["LeftOutlined"], null)
  }, TextSider_jsx("div", {
    className: "container"
  }, TextSider_jsx("h1", null, title), data.map(v => {
    if (typeof v === 'object') {
      return TextSider_jsx(TextSider, {
        title: v.title,
        data: v.data,
        parentVisible: setVisible
      });
    }

    return TextSider_jsx(StyledText, null, TextSider_jsx("span", null, v));
  }))));
};

/* harmony default export */ var Layout_TextSider = (TextSider);
// CONCATENATED MODULE: ./components/Layout/Sider.tsx

var Sider_jsx = external_react_default.a.createElement;








const Sider_Wrapper = styled_default.a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
`;
const Sider_FindCenter = styled_default.a.div`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    padding: 20px 30px 10px 30px;
    text-align: left;

    & span {
        position: relative;
        top: -5px;
        font-size: 1.125rem;

        svg {
            position: relative;
            top: 5px;
        }
    }
    &:hover {
        span {
            color: #d5001c;
        }
    }
`;

const Sider = () => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const showDrawer = Object(external_react_["useCallback"])(() => {
    setVisible(true);
  }, []);
  const onClose = Object(external_react_["useCallback"])(() => {
    setVisible(false);
  }, []);
  return Sider_jsx(Sider_Wrapper, null, Sider_jsx("div", null, "\uBA54\uB274", ' ', Sider_jsx(external_antd_["Button"], {
    type: "text",
    icon: Sider_jsx(icons_["MenuOutlined"], null),
    onClick: showDrawer
  })), Sider_jsx(external_antd_["Drawer"], {
    width: windowWidth > 1000 ? 568 : windowWidth,
    onClose: onClose,
    visible: visible,
    bodyStyle: {
      padding: `${windowWidth > 1000 ? '40px' : '12vw'}`,
      paddingTop: 54
    }
  }, Sider_jsx(Layout_ModelSider, {
    data: modelMenu,
    parentVisible: setVisible
  }), Sider_jsx(Layout_TextSider, {
    title: "Shop",
    data: shopMenu,
    parentVisible: setVisible
  }), Sider_jsx(Layout_TextSider, {
    title: "\uB354 \uBCF4\uAE30",
    data: moreMenu,
    parentVisible: setVisible
  }), Sider_jsx(Sider_FindCenter, null, Sider_jsx("span", null, Sider_jsx(icons_["EnvironmentOutlined"], null), ' ', "\uD3EC\uB974\uC250 \uC13C\uD130 \uCC3E\uAE30"))));
};

/* harmony default export */ var Layout_Sider = (Sider);
// CONCATENATED MODULE: ./components/Layout/Nav.tsx

var Nav_jsx = external_react_default.a.createElement;








const StyledNav = styled_default.a.nav`
    border-bottom: 1px solid lightgray;
    height: 65px;
    .container {
        width: 86vw;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    ${mq[0]} {
        height: 72px;
    }
    ${mq[2]} {
        height: 117px;
    }
`;

const Nav = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: windowWidth,
    1: setWindowWidth
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    setWindowWidth(window.innerWidth);
    dispatch(layout["a" /* default */].actions.windowWidthChange(window.innerWidth));
  }, [windowWidth]);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      dispatch(layout["a" /* default */].actions.windowWidthChange(window.innerWidth));
    });
    return () => window.removeEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
      dispatch(layout["a" /* default */].actions.windowWidthChange(window.innerWidth));
    });
  }, []);
  return Nav_jsx(external_react_default.a.Fragment, null, Nav_jsx(StyledNav, null, Nav_jsx("div", {
    className: "container"
  }, Nav_jsx(Layout_Logo, null), windowWidth > 1300 ? Nav_jsx(Layout_Menu, null) : Nav_jsx(Layout_Sider, null))));
};

/* harmony default export */ var Layout_Nav = (Nav);
// CONCATENATED MODULE: ./components/Layout/FooterTop.tsx

var FooterTop_jsx = external_react_default.a.createElement;





const {
  Panel
} = external_antd_["Collapse"];
const FooterTop_Wrapper = styled_default.a.div`
    padding: 30px 7vw;
`;
const Container = styled_default.a.ul`
    padding: 0;
    margin: 0;
    h3, li {
        padding: 12px 0;
    }
    li { 
        list-style-type: none;
        font-size : 16px;
        span:hover {
            color: #d5001c;
        }
    }
    h3 { 
        font-size: 20px;
    }
`;
const StyledCollapse = styled_default()(external_antd_["Collapse"])`
    .custom-collapse-panel {
        padding: 5px 0 0 0;
        margin-top: -1px;
        font-size: 18px;
        font-weight: bold;
        background: white;
        border : 0;
        border-top : 1px solid lightgray;
        .ant-collapse-header {
            padding: 12px 40px 12px 0;
            border-bottom : 1px solid lightgray;
        }

        & .ant-collapse-content-box {
            padding: 0;
            ul {
                padding: 0;
                margin: 0;
                li {
                    font-size: 16px;
                    font-weight: 400;   
                    height: 66px;
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    span {
                         &:hover {
                            color: #d5001c;
                         }
                    }
                }
            }
        }
    }
`;
const PageRecomend = styled_default.a.div`
    padding: 50px 0;
    .container {
        .header {
            background-color: black;
            padding: 13px 21px;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: 600;
            color: white;
            span#text {
                margin-left: 14px;
            }
            &:hover {
                background-color: #d5001c;
            }
        }
        .buttons {
            ul {
                padding: 12px 0 28px;
                margin : 0;
                display: flex;
                justify-content: space-between;
                li {
                    width: 50px;
                    height: 50px;
                    background: black;
                    color: white;
                    font-size: 41px;
                    padding: 5px;
                    margin: 0;
                    list-style: none;
                    span {
                        display: block;
                    }
                    &:hover {
                        &:nth-of-type(1) {
                            background: #336189;
                        }
                        &:nth-of-type(2) {
                            background: #CD201F;
                        }
                        &:nth-of-type(3) {
                            background: #6A87C2;
                        }
                        &:nth-of-type(4) {
                            background: #0474B3;
                        }
                        &:nth-of-type(5) {
                            background: #54ACEE;
                        }
                    }
                }
            }
        }
    }
`;

const FooterTop = () => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  let collapseItemScrollPosition = [188, 246, 304, 361]; // x+ pageHeight

  const footerTop = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    // console.log(footerTop.current.offsetTop);
    collapseItemScrollPosition = collapseItemScrollPosition.map(v => {
      if (footerTop.current !== null) {
        return v + footerTop.current.offsetTop;
      }

      return v;
    });
  }, [windowWidth, footerTop]);
  const onChangePanel = Object(external_react_["useCallback"])(key => {
    // console.log(collapseItemScrollPosition);
    window.scroll({
      top: collapseItemScrollPosition[+key - 1] - 150,
      left: 0,
      behavior: 'smooth'
    });
  }, [windowWidth]);
  return FooterTop_jsx(FooterTop_Wrapper, {
    ref: footerTop
  }, windowWidth > 565 ? FooterTop_jsx(external_antd_["Row"], {
    gutter: [32, 32],
    style: {
      borderTop: '1px solid lightgray',
      paddingTop: 30
    }
  }, FooterTop_jsx(external_antd_["Col"], {
    xs: 12,
    md: 12,
    lg: 6
  }, FooterTop_jsx(Container, null, FooterTop_jsx("h3", null, "Build & Find"), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uB098\uB9CC\uC758 \uD3EC\uB974\uC250 \uB9CC\uB4E4\uAE30")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uD3EC\uB974\uC250 \uC778\uC99D \uC911\uACE0\uCC28 \uCC3E\uAE30")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uD3EC\uB974\uC250 \uC13C\uD130 \uCC3E\uAE30")))), FooterTop_jsx(external_antd_["Col"], {
    xs: 12,
    md: 12,
    lg: 6
  }, FooterTop_jsx(Container, null, FooterTop_jsx("h3", null, "\uC628\uB77C\uC778 \uC11C\uBE44\uC2A4"), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Porsche Financial Services")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uB274\uC2A4 \uAC00\uC785")))), FooterTop_jsx(external_antd_["Col"], {
    xs: 12,
    md: 12,
    lg: 6
  }, FooterTop_jsx(Container, null, FooterTop_jsx("h3", null, "Behind the Scenes"), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Passion Motorsports")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Porsche Classic")))), FooterTop_jsx(external_antd_["Col"], {
    xs: 12,
    md: 12,
    lg: 6
  }, FooterTop_jsx(Container, null, FooterTop_jsx("h3", null, "Porsche Company"), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "At a Glance")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Responsibility")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Contact & Information")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Christophorus - The Porsche Magazine"))))) : FooterTop_jsx(StyledCollapse, {
    accordion: true,
    bordered: false,
    expandIconPosition: "right",
    className: "custom-collapse",
    onChange: onChangePanel
  }, FooterTop_jsx(Panel, {
    header: "Build & Find",
    key: "1",
    className: "custom-collapse-panel"
  }, FooterTop_jsx("ul", null, FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uB098\uB9CC\uC758 \uD3EC\uB974\uC250 \uB9CC\uB4E4\uAE30")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uD3EC\uB974\uC250 \uC778\uC99D \uC911\uACE0\uCC28 \uCC3E\uAE30")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uD3EC\uB974\uC250 \uC13C\uD130 \uCC3E\uAE30")))), FooterTop_jsx(Panel, {
    header: "\uC628\uB77C\uC778 \uC11C\uBE44\uC2A4",
    key: "2",
    className: "custom-collapse-panel"
  }, FooterTop_jsx("ul", null, FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Porsche Financial Services")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "\uB274\uC2A4 \uAC00\uC785")))), FooterTop_jsx(Panel, {
    header: "Behind the Scenes",
    key: "3",
    className: "custom-collapse-panel"
  }, FooterTop_jsx("ul", null, FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Passion Motorsports")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Porsche Classic")))), FooterTop_jsx(Panel, {
    header: "Porsche Company",
    key: "4",
    className: "custom-collapse-panel"
  }, FooterTop_jsx("ul", null, FooterTop_jsx("li", null, FooterTop_jsx("span", null, "At a Glance")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Responsibility")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Contact & Information")), FooterTop_jsx("li", null, FooterTop_jsx("span", null, "Christophorus - The Porsche Magazine"))))), FooterTop_jsx(PageRecomend, null, FooterTop_jsx(external_antd_["Row"], {
    gutter: [32, 32]
  }, FooterTop_jsx(external_antd_["Col"], {
    span: windowWidth > 565 ? 12 : 24,
    offset: windowWidth > 565 ? 12 : 0
  }, FooterTop_jsx("div", {
    className: "container"
  }, FooterTop_jsx("div", {
    className: "header"
  }, FooterTop_jsx(icons_["SelectOutlined"], null), FooterTop_jsx("span", {
    id: "text"
  }, " \uD398\uC774\uC9C0 \uCD94\uCC9C")), FooterTop_jsx("div", {
    className: "buttons"
  }, FooterTop_jsx("ul", null, FooterTop_jsx("li", null, FooterTop_jsx(icons_["InstagramOutlined"], null)), FooterTop_jsx("li", null, FooterTop_jsx(icons_["YoutubeOutlined"], null)), FooterTop_jsx("li", null, FooterTop_jsx(icons_["FacebookOutlined"], null)), FooterTop_jsx("li", null, FooterTop_jsx(icons_["LinkedinOutlined"], null)), FooterTop_jsx("li", null, FooterTop_jsx(icons_["TwitterOutlined"], null)))))))));
};

/* harmony default export */ var Layout_FooterTop = (FooterTop);
// CONCATENATED MODULE: ./utils/footer-data.ts
const footer_data_select = [{
  region: 'North America',
  countries: ['Canada (english)', 'Canada (french)', 'USA']
}, {
  region: 'Latin America',
  countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Costa Rica', 'Dominical Republic', 'Ecuador', 'El Salvador', 'Guadeloupe', 'Guatemala', 'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Panama', 'Paraguay', 'Peru', 'Puerto Rico', 'Trinidad and Tobago', 'Uruguay', 'Venezuela', 'Others']
}, {
  region: 'Europe',
  countries: ['Austria', 'Belarus', 'Belgium', 'Bosnia', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greate Britain', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Lithuania', 'Lavita', 'Luxemburg', 'Macedonia', 'Malta', 'Moldova', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Russia', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Ulkraine', 'Others']
}, {
  region: 'Middle East',
  countries: ['Abu Dhabi', 'Bahrain', 'Dubai', 'Fujairah', 'Israel', 'Jordan', 'Kuwait', 'Lebanon', 'Oman', 'Qatar', 'Saudi Arabia', 'Sharjah', 'Middle East']
}, {
  region: 'Africa',
  countries: ['Alegria', 'Egypt', 'Ghana', 'La Reunion', 'Morocco', 'Mauritius', 'Nigeria', 'South Africa', 'Tunisia']
}, {
  region: 'Asia',
  countries: ['Armenia', 'Azerbaijan', 'Turkey', 'India', 'Brunei', 'Bangladesh', 'Cambodia', 'Indonesia', 'Malaysia', 'Mongolia', 'Philippines', 'Singapore', 'Sri Lanka', 'Thailand', 'Vietnam', 'China', 'Hong kong', 'Japan', 'Kazakhstan', 'South Korea', 'Taiwan', 'Others']
}, {
  region: 'Australia / Oceania',
  countries: ['Australia', 'French Polynesia', 'New Caledonia', 'New Zealand', 'Others']
}];
// CONCATENATED MODULE: ./components/Layout/FooterBottom.tsx

var FooterBottom_jsx = external_react_default.a.createElement;

/* eslint-disable no-unused-vars */





const {
  Option
} = external_antd_["Select"];
const FooterBottom_Wrapper = styled_default.a.div`
    background : #191F22;
    padding: 30px 7vw;
    color: white;
    font-size: 16px;
`;
const ChangeCountry = styled_default.a.div`
    padding-bottom: 20px;
    span {
        font-size: 22px;
    }
`;
const StyledSelect = styled_default()(external_antd_["Select"])`
    width: 100%;
    background-color: #191f22;
`;
const StyledOption = styled_default()(Option)`
    color: #d5001c;
`;
const Copyright = styled_default.a.div`
    padding: 5px 0 20px;
    font-weight: bold;
`;
const LegalNotice = styled_default.a.div`
    padding: 20px 0 60px 0;
`;

const FooterBottom = () => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  const {
    0: region,
    1: setRegion
  } = Object(external_react_["useState"])(footer_data_select[0].region);
  const {
    0: countries,
    1: setCountries
  } = Object(external_react_["useState"])([]);
  const {
    0: country,
    1: setCountry
  } = Object(external_react_["useState"])('');
  const {
    0: countrySelectAble,
    1: setCountrySelectAble
  } = Object(external_react_["useState"])(false);
  const onSelectRegion = Object(external_react_["useCallback"])(item => {
    var _filtered$;

    setRegion(item);
    const filtered = footer_data_select.filter(v => v.region === item);
    setCountries((_filtered$ = filtered[0]) === null || _filtered$ === void 0 ? void 0 : _filtered$.countries);
    setCountrySelectAble(true);
  }, []);
  const onSelectCountry = Object(external_react_["useCallback"])(item => {
    setCountry(item);
  }, []);
  return FooterBottom_jsx(FooterBottom_Wrapper, null, region && country, FooterBottom_jsx(ChangeCountry, null, FooterBottom_jsx("span", null, "\uAD6D\uAC00 / \uC9C0\uC5ED \uBCC0\uACBD :")), FooterBottom_jsx(external_antd_["Row"], {
    gutter: [16, 24]
  }, FooterBottom_jsx(external_antd_["Col"], {
    span: windowWidth > 565 ? 12 : 24
  }, FooterBottom_jsx(StyledSelect, {
    size: "large",
    placeholder: "\uC9C0\uC5ED\uC744 \uC120\uD0DD\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624",
    onChange: onSelectRegion
  }, footer_data_select.map(v => FooterBottom_jsx(StyledOption, {
    value: v.region,
    key: v.region
  }, v.region)))), FooterBottom_jsx(external_antd_["Col"], {
    span: windowWidth > 565 ? 12 : 24
  }, countrySelectAble ? FooterBottom_jsx(StyledSelect, {
    size: "large",
    placeholder: "\uAD6D\uAC00 / \uC9C0\uC5ED\uC744 \uC120\uD0DD\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624",
    onChange: onSelectCountry
  }, countries.map(v => FooterBottom_jsx(Option, {
    value: v,
    key: v
  }, v))) : FooterBottom_jsx(StyledSelect, {
    size: "large",
    placeholder: "\uAD6D\uAC00 / \uC9C0\uC5ED\uC744 \uC120\uD0DD\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624",
    disabled: true
  }))), FooterBottom_jsx("hr", {
    style: {
      margin: '40px 0',
      border: '1px solid gray'
    }
  }), FooterBottom_jsx(Copyright, null, "\xA9 2021 Porsche Korea Ltd. Legal notice \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68", FooterBottom_jsx("br", null), FooterBottom_jsx("br", null), "\uD3EC\uB974\uC250 \uACE0\uAC1D\uC13C\uD130 080-8100-911"), FooterBottom_jsx(LegalNotice, null, "\u203B \uD45C\uAE30\uB41C \uC5F0\uBE44\uB294 \uD45C\uC900 \uBAA8\uB4DC\uC5D0 \uC758\uD55C \uAC83\uC73C\uB85C \uB3C4\uB85C\uC0C1\uD0DC, \uC6B4\uC804\uBC29\uBC95, \uCC28\uB7C9\uC801\uC7AC, \uC815\uBE44\uC0C1\uD0DC \uBC0F \uC678\uAE30\uC628\uB3C4\uC5D0 \uB530\uB77C \uC2E4\uC8FC\uD589\uC5F0\uBE44\uC640 \uCC28\uC774\uAC00 \uC788\uC2B5\uB2C8\uB2E4.", FooterBottom_jsx("br", null), "\u203B \uBCF8 \uC6F9\uC0AC\uC774\uD2B8\uC5D0 \uAE30\uC7AC\uB41C \uB0B4\uC6A9\uC740 \uC0AC\uC804\uC5D0 \uC608\uACE0 \uC5C6\uC774 \uBCC0\uACBD\uB420 \uC218 \uC788\uC73C\uBBC0\uB85C \uC2E4\uC81C \uCC28\uB7C9\uACFC \uB2E4\uB97C \uC218 \uC788\uC2B5\uB2C8\uB2E4.", FooterBottom_jsx("br", null), "\u203B \uCC28\uB7C9 \uC774\uBBF8\uC9C0\uB294 \uC2E4\uC81C \uBAA8\uB378\uACFC \uB2E4\uB97C \uC218 \uC788\uC73C\uBA70, \uAD6D\uB0B4 \uC801\uC6A9 \uC0AC\uC591 \uBC0F \uAD6C\uC131\uC5D0 \uB530\uB77C \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", FooterBottom_jsx("br", null), "\u203B \uAD6D\uB0B4 \uCD9C\uC2DC \uC774\uC804 \uCC28\uB7C9\uC758 \uACBD\uC6B0 \uAD6D\uB0B4 \uACF5\uC778 \uC5F0\uBE44 \uC815\uBCF4 \uBC0F \uD0C0\uC774\uC5B4 \uC5D0\uB108\uC9C0\uC18C\uBE44\uD6A8\uC728 \uC815\uBCF4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", FooterBottom_jsx("br", null), "\u203B \uAC1C\uBCC4\uC18C\uBE44\uC138 \uC778\uD558 \uAD00\uB828 \uACF5\uC9C0\uC0AC\uD56D", FooterBottom_jsx("br", null), "\uD3EC\uB974\uC250 \uCF54\uB9AC\uC544\uB294 \uC815\uBD80\uC758 \uC77C\uC2DC\uC801 \uAC1C\uBCC4\uC18C\uBE44\uC138 \uC778\uD558 \uC815\uCC45\uC5D0 \uB530\uB77C 2020\uB144 3\uC6D4\uBD80\uD130 6\uC6D430\uC77C\uAE4C\uC9C0 \uAD00\uB828 \uCC28\uB7C9\uC5D0 \uB300\uD574 \uAC1C\uBCC4\uC18C\uBE44\uC138 \uAC10\uBA74 \uD61C\uD0DD\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uC790\uC138\uD55C \uC0AC\uD56D\uC740 \uD3EC\uB974\uC250 \uC13C\uD130\uB97C \uD1B5\uD558\uC5EC \uBB38\uC758\uD558\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4."));
};

/* harmony default export */ var Layout_FooterBottom = (FooterBottom);
// CONCATENATED MODULE: ./components/Layout/Footers.tsx

var Footers_jsx = external_react_default.a.createElement;



const Footers = () => Footers_jsx(external_react_default.a.Fragment, null, Footers_jsx(Layout_FooterTop, null), Footers_jsx(Layout_FooterBottom, null));

/* harmony default export */ var Layout_Footers = (Footers);
// CONCATENATED MODULE: ./components/Layout/index.tsx

var Layout_jsx = external_react_default.a.createElement;





const Dimmed = styled_default.a.div`
  background-color: #000;
  opacity: 0.7;
  position: absolute;
  top:117px;left:0;right:0;bottom:0;
  z-index: 90;
`;

const Layout = ({
  children,
  title = 'Porsche Korea'
}) => {
  const menuOpend = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.menuOpend;
  });
  return Layout_jsx("div", null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, title), Layout_jsx("meta", {
    charSet: "utf-8"
  }), Layout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), Layout_jsx("header", null, Layout_jsx(Layout_Nav, null)), menuOpend && Layout_jsx(Dimmed, null), children, Layout_jsx("footer", null, Layout_jsx(Layout_Footers, null)));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "+wlD":
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wS6K");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "K6dp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const StyledHeadline = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.h2`
    font-size: 32px;
    font-weight: 600;

    @media (min-width: 1140px ) {
        font-size: 36px;
    }
`;

const Headline = ({
  text
}) => __jsx(StyledHeadline, null, text);

/* harmony default export */ __webpack_exports__["a"] = (Headline);

/***/ }),

/***/ "Kps4":
/***/ (function(module, exports) {

module.exports = require("@emotion/react");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Okwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    display: block;
    width: fit-content;
    position: relative;
    cursor: pointer;
    margin: 10px 0;
    margin-right: 20px;
    padding: 12px 21px;
    span {
        margin-right: 10px;
        letter-spacing: -1px;
        color: ${props => props.fontColor && props.fontColor};
    }
    font-size: ${props => props.size && `${props.size}px`};
    background: ${props => props.backColor && props.backColor};
    border: 1px solid ${props => props.borderColor && props.borderColor};

    &:hover {
      ${props => props.hoverBackColor && `background-color: ${props.hoverBackColor};`}
      span {
        color: ${props => props.hoverFontColor && props.hoverFontColor};
      }
      border: 1px solid ${props => props.hoverBorderColor && props.hoverBorderColor};
    }
`;

const Button = ({
  src = '',
  text = '',
  children,
  color,
  size = 16,
  style,
  onClick
}) => __jsx(Wrapper, {
  fontColor: color.fontColor,
  hoverFontColor: color.hoverFontColor,
  backColor: color.backColor,
  hoverBackColor: color.hoverBackColor,
  borderColor: color.borderColor,
  hoverBorderColor: color.hoverBorderColor,
  size: size,
  style: style,
  onClick: onClick
}, onClick ? __jsx("div", null, children, __jsx("span", null, text)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: src
}, __jsx("a", null, children, __jsx("span", null, text))));

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "jTIQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const modelspecSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'modelspec',
  initialState: {
    type: 0,
    custom: {
      exterior: '#000000',
      wheel: '',
      interior: '#2C2220'
    }
  },
  reducers: {
    typeChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      type: action.payload
    }),
    exteriorColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      custom: _objectSpread(_objectSpread({}, state.custom), {}, {
        exterior: action.payload
      })
    }),
    interiorColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      custom: _objectSpread(_objectSpread({}, state.custom), {}, {
        interior: action.payload
      })
    }),
    wheelColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {
      custom: _objectSpread(_objectSpread({}, state.custom), {}, {
        wheel: action.payload
      })
    })
  }
});
/* harmony default export */ __webpack_exports__["a"] = (modelspecSlice);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rWIw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+wlD");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const layoutSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'layout',
  initialState: {
    menuOpend: false,
    windowWidth: 100
  },
  reducers: {
    toggle: state => ({
      menuOpend: !state.menuOpend
    }),
    windowWidthChange: (state, action) => ({
      windowWidth: action.payload
    })
  }
});
/* harmony default export */ __webpack_exports__["a"] = (layoutSlice);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wS6K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Layout/index.tsx + 18 modules
var Layout = __webpack_require__("+oBk");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__("Kps4");

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// CONCATENATED MODULE: ./components/ModelSpecific/ModelBoard/styles.ts



const Wrapper = styled_default.a.section`
  position: relative;
  height: 95vh;
  padding: 30px 0;
  background-color: #000;
  color: white;
`;
const Background = styled_default.a.div`
  background: url("https://files.porsche.com/filestore/image/multimedia/none/modelseries-modelexplorer-backplate/normal/f2242816-9100-11ea-80c9-005056bbdc38;sM;twebp/porsche-normal.webp") no-repeat;
  background-size: 100% 100%;
  position: relative;
  height: 30%;
  
  @media (min-width: 768px) {
    height: 70%;
    top: 2%;    
  }

  @media (min-width: 1200px) {
    
  }
`;
const StyledCarousel = styled_default()(external_react_multi_carousel_default.a)`
    position: relative;
    top: -30%;
    
    @media (min-width: 768px) {
        top: -70%;
    }
`;
const SpecContainer = styled_default.a.div`
  position: relative;
  width: 86vw;
  margin: 0 auto;

  @media (min-width: 768px) {
   
  }

  @media (min-width: 1200px) {
    
  }
`;
const SpecHeadline = styled_default.a.div`
  position: relative;
  top: 150px;
  .headline-flag {
    color: #00b0f4;
    font-size: 16px;
  }
  .headline-title {
    font-size: 40px;
    font-weight: 600;
  }
  .healdline-copy {

  }

  @media (min-width: 768px) {
    top: 0;
    padding-bottom: 35px;
    text-align: center;
  }

  @media (min-width: 1200px) {
  
  }
`;
const ImageContainer = styled_default.a.div`
  position: relative;
  top: -110px;
  height: 204px;
  position: relative;
  img {
      height: 100%;
      position: relative;
      left: 50%;
      margin-left: -181px;
  }
 
  @media (min-width: 768px) {
    top: 0;
    height: 351px;
    img {
        top: -12%;
        margin-left: -312px;
    }
  }

  @media (min-width: 1200px) {
    height: 455px;
    img {
        top: -20%;
        margin-left: -404px;
    }
  }

`;
const SpecDesc = styled_default.a.div`
  position: relative;
  width: 100%;
  ul {
      padding: 0;
      margin: 0;
      display: flex;

      li {
        width: 50%;
        list-style: none;
        padding: 0;
        margin: 0 10px;
        .data-title {
            font-size: 16px;
            font-weight: bold;
        }
        .data-desc {
            font-size: 10px;
        }
        &:nth-of-type(3) {
            display: none;
        }
      }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    margin-top: -10%;
    ul {
        display: flex;
        justify-content: space-between;
  
        li {
          width: 33.33%;
          text-align: center;
          .data-title {
              font-size: 20px;
          }
          .data-desc {
          }
          &:nth-of-type(3) {
            display: block;
          }
        }
    }
  }
  @media (min-width: 1200px) {
      margin-top: -150px;
  }
`;
const ButtonContainer = styled_default.a.div`
  padding: 30px 0;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {

  }
`;
const buttonColor = {
  fontColor: 'white',
  backColor: 'transparent',
  borderColor: 'white',
  hoverFontColor: '#00b0f4',
  hoverBackColor: 'transparent',
  hoverBorderColor: '#00b0f4'
};
const Disclaimer = styled_default.a.div`
  font-size: 10px;
  text-align: center;
  position: relative;
  
  top: -200px;

  @media (min-width: 768px) {
    top: -475px;
  }

  @media (min-width: 1200px) {
  
  }
`;
// EXTERNAL MODULE: ./components/common/Button.tsx
var Button = __webpack_require__("Okwz");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// CONCATENATED MODULE: ./components/ModelSpecific/ModelBoard/StyledModal.tsx

var __jsx = external_react_default.a.createElement;
// import Image from 'next/image';




const {
  Panel
} = external_antd_["Collapse"];
const ModalCloseButton = styled_default.a.button`
    background: #00B0F4;
    border: none;
    color: white;
    padding: 0 20px 5px;
    font-size: 30px;
    box-shadow: 5px 5px 15px gray;
    position: absolute;
    top: 20px;
    right: 20px;
`;
const Header = styled_default.a.div`
  background-color: #EFF0F1;
  padding: 30px 0;

  .modalheader-container {
    width: 86vw;
    margin: 0 auto;

    h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }
    .data-content-container {
      display: flex;
      flex-wrap: wrap;
      .data-content {
        margin: 10px;
        padding: 0 25px 0 0;
        border-right: 1px solid lightgray;
        h2 {
            font-size: 24px;
            margin: 0;
        }
        p {
            margin: 0;
            font-size: 16px;
        }
      }
    }
  }
`;
const Content = styled_default.a.div`
  .modalcontent-container {
    width: 86vw;
    margin: 50px auto;
    .disclaimer {
        font-size: 5px;
    }
    .modalcontent-img-container {
        display: flex;
        width: 100%;
        padding: 30px 60px;
        .img-wrapper {
            width: 45%;
        }
        .model-sizes {
            padding: 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .model-size-content {
                padding: 10px;
                .model-size-title {
                    font-size: 16px;
                }
                .model-size-value {
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
    }
  }
`;
const Collapses = styled_default.a.div`
    width: 86vw;
    margin: 50px auto;
    .ant-collapse {
        border-top: 1px solid lightgray;
        background: white;
    }
    .ant-collapse-item {
        border-bottom: 1px solid lightgray;
        .ant-collapse-header {
            font-size: 22px;
            font-weight: bold;
            padding: 16px 0;
            .anticon {
                padding: 18px 0;
                font-size: 18px;
            }
            &:hover {
                color: #00b0f4;
            }
        }
        .ant-collapse-content-box {
            padding: 0;
            ul {
                padding: 0;
                margin: 0;
                li {
                    list-style:  none;
                    margin: 0;
                    padding: 13px 0;
                    border-bottom: 1px solid lightgray;
                    display: flex;
                    .collapse-key, .collapse-value {
                        width: 50%;
                        padding-right:20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    .collapse-key {
                        font-size: 16px;
                    }
                    .collapse-value {
                        font-size: 18px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
`;

const StyledModal = ({
  isOpen,
  setState,
  data
}) => {
  const {
    0: modalIsOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  function afterOpenModal() {}

  const closeModal = () => {
    setIsOpen(false);
    setState(false);
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_modal_default.a, {
    isOpen: modalIsOpen,
    onAfterOpen: afterOpenModal,
    onRequestClose: closeModal,
    shouldCloseOnOverlayClick: false,
    style: {
      overlay: {
        zIndex: 1000
      },
      content: {
        padding: 0,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    }
  }, __jsx(Header, null, __jsx(ModalCloseButton, {
    type: "button",
    onClick: closeModal
  }, "x"), __jsx("div", {
    className: "modalheader-container"
  }, __jsx("h1", null, data.name), __jsx("div", {
    className: "data-content-container"
  }, __jsx("div", {
    className: "data-content"
  }, __jsx("h2", null, data.price), __jsx("p", null, "\uAC00\uACA9")), __jsx("div", {
    className: "data-content"
  }, __jsx("h2", null, `${data.powerunit['Power (kW)']} / ${data.powerunit['Power (PS)']}`), __jsx("p", null, "Power (kW)/Power (PS)")), __jsx("div", {
    className: "data-content"
  }, __jsx("h2", null, data.performance['Acceleration 0 - 100 km/h']), __jsx("p", null, "Acceleration 0 - 100 km/h")), __jsx("div", {
    className: "data-content"
  }, __jsx("h2", null, data.performance.Topspeed), __jsx("p", null, "Top Speed"))))), __jsx(Content, null, __jsx("div", {
    className: "modalcontent-container"
  }, __jsx("div", {
    className: "disclaimer"
  }, "* \uAD6D\uB0B4 \uCD9C\uC2DC \uC774\uC804 \uCC28\uB7C9\uC758 \uACBD\uC6B0 \uAD6D\uB0B4 \uACF5\uC778 \uC5F0\uBE44 \uC815\uBCF4 \uBC0F \uD0C0\uC774\uC5B4 \uC5D0\uB108\uC9C0\uC18C\uBE44\uD6A8\uC728 \uC815\uBCF4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", __jsx("br", null), "\xB9 \uD45C\uAE30\uB41C EU/WLTP technical data\uB294 2021 Model Year\uC81C\uD488\uC744 \uAE30\uC900\uC73C\uB85C \uC791\uC131\uB41C \uC790\uB8CC\uB85C \uD310\uB9E4\uB418\uB294 \uAD6D\uAC00\uBCC4\uB85C \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4."), __jsx("div", {
    className: "modalcontent-img-container"
  }, __jsx("div", {
    className: "img-wrapper"
  }, __jsx("img", {
    src: "/modal.png",
    alt: "modalcar",
    height: "auto",
    width: "100%",
    className: "car-img"
  })), __jsx("div", {
    className: "model-sizes"
  }, __jsx("div", {
    className: "model-size-content"
  }, __jsx("div", {
    className: "model-size-title"
  }, "Height"), __jsx("div", {
    className: "model-size-value"
  }, data.body.Height)), __jsx("div", {
    className: "model-size-content"
  }, __jsx("div", {
    className: "model-size-title"
  }, "Width"), __jsx("div", {
    className: "model-size-value"
  }, data.body.Width)), __jsx("div", {
    className: "model-size-content"
  }, __jsx("div", {
    className: "model-size-title"
  }, "Length"), __jsx("div", {
    className: "model-size-value"
  }, data.body.Length)), __jsx("div", {
    className: "model-size-content"
  }, __jsx("div", {
    className: "model-size-title"
  }, "Wheelbase"), __jsx("div", {
    className: "model-size-value"
  }, data.body.Wheelbase)))))), __jsx(Collapses, null, __jsx(external_antd_["Collapse"], {
    bordered: false,
    expandIconPosition: "right"
  }, __jsx(Panel, {
    header: "Power Unit",
    key: "1"
  }, __jsx("ul", null, Object.keys(data.powerunit).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.powerunit[key]))))), __jsx(Panel, {
    header: "Performance",
    key: "2"
  }, __jsx("ul", null, Object.keys(data.performance).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.performance[key]))))), __jsx(Panel, {
    header: "Body",
    key: "3"
  }, __jsx("ul", null, Object.keys(data.body).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.body[key]))))), __jsx(Panel, {
    header: "Capacities",
    key: "4"
  }, __jsx("ul", null, Object.keys(data.capacity).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.capacity[key]))))), __jsx(Panel, {
    header: "Service and Warranty",
    key: "5"
  }, __jsx("ul", null, Object.keys(data.warranty).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.warranty[key]))))), __jsx(Panel, {
    header: "Consumption / Emissions",
    key: "6"
  }, __jsx("ul", null, data.consumEmit && Object.keys(data.consumEmit).map(key => __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, key), __jsx("div", {
    className: "collapse-value"
  }, data.consumEmit[key]))))), __jsx(Panel, {
    header: "\uAC00\uACA9",
    key: "7"
  }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
    className: "collapse-key"
  }, "\uD3EC\uB974\uC250 \uB354\uBE14 \uD074\uB7EC\uCE58(PDK)"), __jsx("div", {
    className: "collapse-value"
  }, data.price))))))));
};

/* harmony default export */ var ModelBoard_StyledModal = (StyledModal);
// EXTERNAL MODULE: ./redux/reducers/modelspec.js
var modelspec = __webpack_require__("jTIQ");

// CONCATENATED MODULE: ./components/ModelSpecific/ModelBoard/index.tsx

var ModelBoard_jsx = external_react_default.a.createElement;

/** @jsx jsx */








const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const ModelBoard = ({
  data
}) => {
  const windowWidth = Object(external_react_redux_["useSelector"])(state => {
    var _state$layout;

    return (_state$layout = state.layout) === null || _state$layout === void 0 ? void 0 : _state$layout.windowWidth;
  });
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: modalState,
    1: setModal
  } = Object(external_react_["useState"])(false);
  const {
    0: modelType,
    1: setModelType
  } = Object(external_react_["useState"])(0);
  const openModal = Object(external_react_["useCallback"])(() => {
    setModal(true);
  }, []);
  return Object(react_["jsx"])(Wrapper, {
    id: "modelboard"
  }, Object(react_["jsx"])(Background, null), Object(react_["jsx"])(StyledCarousel, {
    swipeable: true,
    draggable: true,
    showDots: true,
    responsive: responsive,
    afterChange: (_previousSlide, {
      currentSlide
    }) => {
      setModelType(currentSlide);
      dispatch(modelspec["a" /* default */].actions.typeChange(currentSlide));
    },
    ssr: true
  }, data.map(item => Object(react_["jsx"])(SpecContainer, null, Object(react_["jsx"])(SpecHeadline, null, Object(react_["jsx"])("div", {
    className: "headline-flag"
  }, "new"), Object(react_["jsx"])("div", {
    className: "headline-title"
  }, item.name), Object(react_["jsx"])("div", {
    className: "headline-copy"
  }, item.price)), Object(react_["jsx"])(ImageContainer, null, Object(react_["jsx"])("img", {
    src: item.img,
    alt: ""
  })), Object(react_["jsx"])(SpecDesc, null, Object(react_["jsx"])("ul", null, Object(react_["jsx"])("li", null, Object(react_["jsx"])("div", {
    className: "data-title"
  }, `${item.powerunit['Power (kW)']} / ${item.powerunit['Power (PS)']}`), Object(react_["jsx"])("div", {
    className: "data-desc"
  }, "Power(kW) / Power(PS)")), Object(react_["jsx"])("li", null, Object(react_["jsx"])("div", {
    className: "data-title"
  }, item.performance['Acceleration 0 - 100 km/h']), Object(react_["jsx"])("div", {
    className: "data-desc"
  }, "Acceleration 0 - 100km/h")), Object(react_["jsx"])("li", null, Object(react_["jsx"])("div", {
    className: "data-title"
  }, item.performance.Topspeed), Object(react_["jsx"])("div", {
    className: "data-desc"
  }, "Top speed")))), Object(react_["jsx"])(ButtonContainer, null, Object(react_["jsx"])(Button["a" /* default */], {
    src: "/",
    text: "\uAE30\uC220\uC0AC\uC591",
    color: buttonColor,
    style: windowWidth < 768 ? {
      width: '100%'
    } : {},
    onClick: openModal
  }, Object(react_["jsx"])(icons_["RightOutlined"], null)), Object(react_["jsx"])(Button["a" /* default */], {
    src: "/",
    text: "\uB098\uB9CC\uC758 \uD3EC\uB974\uC250 \uB9CC\uB4E4\uAE30",
    color: buttonColor,
    style: windowWidth < 768 ? {
      width: '100%'
    } : {}
  }, Object(react_["jsx"])(icons_["RightOutlined"], null)), Object(react_["jsx"])(Button["a" /* default */], {
    src: "/",
    text: "\uBE44\uAD50\uD558\uAE30",
    color: buttonColor,
    style: windowWidth < 768 ? {
      width: '100%'
    } : {}
  }, Object(react_["jsx"])(icons_["RightOutlined"], null)))))), Object(react_["jsx"])(ModelBoard_StyledModal, {
    isOpen: modalState,
    setState: setModal,
    data: data[modelType]
  }), Object(react_["jsx"])(Disclaimer, null, "* \uAD6D\uB0B4 \uCD9C\uC2DC \uC774\uC804 \uCC28\uB7C9\uC758 \uACBD\uC6B0 \uAD6D\uB0B4 \uACF5\uC778 \uC5F0\uBE44 \uC815\uBCF4 \uBC0F \uD0C0\uC774\uC5B4 \uC5D0\uB108\uC9C0\uC18C\uBE44\uD6A8\uC728 \uC815\uBCF4\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.", Object(react_["jsx"])("br", null), "\xB9 \uD45C\uAE30\uB41C EU/WLTP technical data\uB294 2021 Model Year\uC81C\uD488\uC744 \uAE30\uC900\uC73C\uB85C \uC791\uC131\uB41C \uC790\uB8CC\uB85C \uD310\uB9E4\uB418\uB294 \uAD6D\uAC00\uBCC4\uB85C \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", Object(react_["jsx"])("br", null), "\xB2 \uD45C\uAE30\uB41C EU/WLTP technical data\uB294 2020 Model Year\uC81C\uD488\uC744 \uAE30\uC900\uC73C\uB85C \uC791\uC131\uB41C \uC790\uB8CC\uB85C \uD310\uB9E4\uB418\uB294 \uAD6D\uAC00\uBCC4\uB85C \uCC28\uC774\uAC00 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.", Object(react_["jsx"])("br", null)));
};

/* harmony default export */ var ModelSpecific_ModelBoard = (ModelBoard);
// CONCATENATED MODULE: ./components/ModelSpecific/StickyNav.tsx

var StickyNav_jsx = external_react_default.a.createElement;


const StickyNav_Wrapper = styled_default.a.div`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: white;
  z-index: 20;
  box-shadow: 0px 1px 5px lightgray;
  & > div {
    width: 86vw;
    margin: 0 auto;
    overflow: scroll;
    ul {
      width: 1000px;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      li {
        height: 48px;
        margin: 0 10px;
        padding: 15px 0 5px;
        list-style: none;
        font-size: 16px;
        color: black;
  
        a {
          color: black;
          &:hover {
            color: #d5011c;
          }
        }
        ${props => props.active && `&:nth-of-type(${props.active}) { border-bottom: 3px solid #d5011c; }`}
      }
    }
  }
`;

const StickyNav = ({
  navList
}) => {
  const {
    0: activeNav,
    1: setActiveNav
  } = Object(external_react_["useState"])(1);
  const {
    0: scrollPos,
    1: setScrollPos
  } = Object(external_react_["useState"])(0);
  const {
    0: sectionPosition,
    1: setSectionPosition
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    function onScroll() {
      setScrollPos(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  Object(external_react_["useEffect"])(() => {
    setSectionPosition([...document.querySelectorAll('.sticky-nav-section')].map(item => parseInt(`${item.getBoundingClientRect().top + window.scrollY - 60}`, 10)));
  }, [scrollPos]);
  Object(external_react_["useEffect"])(() => {
    sectionPosition.forEach((section, i) => {
      if (section <= window.scrollY) {
        setActiveNav(+i + 1);
      }
    });
  }, [scrollPos]);
  const onClick = Object(external_react_["useCallback"])(e => {
    const targetSectionId = e.target.getAttribute('href');
    e.preventDefault();
    setActiveNav(+e.target.id);
    window.scrollTo({
      top: document.querySelector(targetSectionId).getBoundingClientRect().top + window.scrollY - 60,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return StickyNav_jsx(StickyNav_Wrapper, {
    active: activeNav
  }, StickyNav_jsx("div", null, StickyNav_jsx("ul", null, navList === null || navList === void 0 ? void 0 : navList.map((v, i) => StickyNav_jsx("li", null, StickyNav_jsx("a", {
    href: `#nav${i + 1}`,
    id: `${i + 1}`,
    onClick: onClick
  }, v))))));
};

/* harmony default export */ var ModelSpecific_StickyNav = (StickyNav);
// EXTERNAL MODULE: ./components/common/Headline.tsx
var Headline = __webpack_require__("K6dp");

// CONCATENATED MODULE: ./components/ModelSpecific/Gallery/ZoomedImages.tsx

var ZoomedImages_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable no-unused-vars */





const ZoomedImages_Wrapper = styled_default.a.div`
    position: fixed;
    top:0;right:0;left:0;bottom:0;
    background: black;
    z-index: 2000;
`;
const Top = styled_default.a.div`
    position: fixed;
    top: 0; right: 0;left: 0;
    display: flex;
    color: white;
    height: 50px;
    font-size: 16px;
    z-index: 10;

    .zoomedImages-title {
        background: black;
        opacity: 0.7;
        flex: 1;
        padding: 12px 20px;
    }
    .zoomedImages-close {
        background: black;
        opacity: 0.7;
        width: 50px;
        padding: 12px 13px;
        & span {
            font-size: 25px;
        }
        &:hover {
            background: #d5001c;
            opacity: 1;
        }
    }
`;
const Container = styled_default.a.div`
    width: 100%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`;
const ImageWrapper = styled_default.a.div`
    & img {
        width: 100%;
        height: auto;
    }
`;
const ZoomedImages_responsive = {
  all: {
    breakpoint: {
      max: 3000,
      min: 0
    },
    items: 1
  }
};

const ZoomedImages = ({
  setZoomed,
  data,
  model
}) => {
  const onClose = Object(external_react_["useCallback"])(() => {
    setZoomed(false);
  }, []);
  return ZoomedImages_jsx(ZoomedImages_Wrapper, null, ZoomedImages_jsx(Top, null, ZoomedImages_jsx("div", {
    className: "zoomedImages-title"
  }, model), ZoomedImages_jsx("div", {
    className: "zoomedImages-close",
    onClick: onClose
  }, ZoomedImages_jsx(icons_["CloseOutlined"], null))), ZoomedImages_jsx(Container, null, ZoomedImages_jsx(external_react_multi_carousel_default.a, {
    responsive: ZoomedImages_responsive
  }, data.map(item => ZoomedImages_jsx(ImageWrapper, null, ZoomedImages_jsx("img", {
    src: item.src,
    alt: ""
  }))))));
};

/* harmony default export */ var Gallery_ZoomedImages = (ZoomedImages);
// CONCATENATED MODULE: ./components/ModelSpecific/Gallery/index.tsx

var Gallery_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */







const {
  Option
} = external_antd_["Select"];
const GalleryHeader = styled_default.a.div`
    width: 86vw;
    margin: 0 auto;
    padding: 40px 0;
`;
const StyledSelect = styled_default()(external_antd_["Select"])`
    width: 66%;

    .ant-select-selector {
        background-color: #313639 !important;
        color: white;
        .ant-select-arrow {
            color: white;
        }        
    }
`;
const Gallery_responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 768
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 768,
      min: 0
    },
    items: 1
  }
};

const Gallery = ({
  data,
  model
}) => {
  const {
    0: category,
    1: setCategory
  } = Object(external_react_["useState"])('all');
  const {
    0: isZoomed,
    1: setZoomed
  } = Object(external_react_["useState"])(false);
  const onChange = Object(external_react_["useCallback"])(value => {
    setCategory(value);
  }, []);
  const onClick = Object(external_react_["useCallback"])(() => {
    setZoomed(true);
  }, []);
  return Gallery_jsx("div", null, Gallery_jsx(GalleryHeader, null, Gallery_jsx(Headline["a" /* default */], {
    text: "\uAC24\uB7EC\uB9AC."
  }), Gallery_jsx(StyledSelect, {
    defaultValue: "all",
    size: "large",
    onChange: onChange
  }, Gallery_jsx(Option, {
    value: "all"
  }, "All Media"), Gallery_jsx(Option, {
    value: "image"
  }, "Images"), Gallery_jsx(Option, {
    value: "sound"
  }, "Sounds"), Gallery_jsx(Option, {
    value: "wallpaper"
  }, "WallPaper"))), isZoomed && Gallery_jsx(Gallery_ZoomedImages, {
    setZoomed: setZoomed,
    data: data,
    model: model
  }), Gallery_jsx("div", null, category === 'all' && Gallery_jsx(external_react_multi_carousel_default.a, {
    responsive: Gallery_responsive,
    ssr: true
  }, Gallery_jsx("div", null, Gallery_jsx("img", {
    src: data[0].src,
    alt: "",
    style: {
      width: '100%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[1].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[2].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  })), Gallery_jsx("div", null, Gallery_jsx("img", {
    src: data[3].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[4].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[5].src,
    alt: "",
    style: {
      width: '100%'
    },
    onClick: onClick
  })), Gallery_jsx("div", null, Gallery_jsx("img", {
    src: data[6].src,
    alt: "",
    style: {
      width: '100%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[7].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  }), Gallery_jsx("img", {
    src: data[8].src,
    alt: "",
    style: {
      width: '50%'
    },
    onClick: onClick
  })))));
};

/* harmony default export */ var ModelSpecific_Gallery = (Gallery);
// CONCATENATED MODULE: ./components/ModelSpecific/NextPhase.tsx

var NextPhase_jsx = external_react_default.a.createElement;



const NextPhase_Wrapper = styled_default.a.div`
    width: 86vw;
    margin: 30px auto;

    .content-container {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
    }
`;
const NextLink = styled_default.a.div`
    font-size: 16px;
    font-weight: 600;
    margin-right: 50px;
    padding: 10px 0 10px;
    span { 
        margin-right: 15px;
    }
    &:hover {
        color: #d5001c;
    }
`;

const NextPhase = () => NextPhase_jsx(NextPhase_Wrapper, null, NextPhase_jsx(Headline["a" /* default */], {
  text: "\uB2E4\uC74C \uB2E8\uACC4"
}), NextPhase_jsx("div", {
  className: "content-container"
}, NextPhase_jsx(NextLink, null, NextPhase_jsx(icons_["EnvironmentOutlined"], null), NextPhase_jsx("span", {
  className: "content-text"
}, "\uD3EC\uB974\uC250 \uC13C\uD130 \uCC3E\uAE30")), Array(3).fill(0).map(() => NextPhase_jsx(NextLink, null, NextPhase_jsx(icons_["DownloadOutlined"], null), NextPhase_jsx("span", {
  className: "content-text"
}, "Porsche \uBAA8\uB378 \uAD00\uB828 \uB370\uC774\uD130 pdf")))));

/* harmony default export */ var ModelSpecific_NextPhase = (NextPhase);
// CONCATENATED MODULE: ./components/ModelSpecific/VideoOveraly.tsx

var VideoOveraly_jsx = external_react_default.a.createElement;

/* eslint-disable jsx-a11y/media-has-caption */




const VideoOveraly_Wrapper = styled_default.a.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    position: sticky;
    top: 60px;
`;
const VideoOveraly_Background = styled_default.a.div`
    width: 100%;
    height: 100%;
    video {
        height: 100vh;
        object-fit: cover;
    }
`;
const Overlay = styled_default.a.div`
    position: relative;
    top: -100%;
    height: 100vh;

    ${props => props.onTop ? 'overflow: scroll;' : 'overflow: hidden;'}
    // overflow: scroll;
    
    .overlay-top {
        height: 100vh;
    }
    .overlay-bottom {
        background: linear-gradient(transparent,black);
        height: 100vh;
        z-index: 10;

        .overlay-bottom-container {
            color: white;
            width: 86vw;
            margin: 0 auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            h1 {
                color: white;
                font-size: 40px;
            }
            p {
                width: 60%;
                font-size: 16px;
                margin: 60px 0;
            }
        }
    }
`;
const VideoOveraly_buttonColor = {
  fontColor: 'black',
  backColor: 'white',
  borderColor: 'transparent',
  hoverBackColor: '#d5001c',
  hoverFontColor: 'white',
  hoverBorderColor: 'transparent'
};

const VideoOveraly = ({
  data
}) => {
  const wrapper = Object(external_react_["useRef"])(null);
  const video = Object(external_react_["useRef"])(null);
  const {
    0: elTop,
    1: setElTop
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    function onScroll() {
      // window.scrollY : 얼마나 내렸는지
      // document.documentElement.clientHeight : 화면에 보이는 길이
      // document.documentElement.scrollHeight : 총길이
      // console.log(
      //   window.scrollY,
      //   wrapper.current?.getBoundingClientRect().top,
      // );
      if (wrapper.current !== null) {
        const elTopPos = wrapper.current.getBoundingClientRect().top;

        if (elTopPos <= 100) {
          var _video$current;

          // console.log('on top');
          setElTop(true);
          (_video$current = video.current) === null || _video$current === void 0 ? void 0 : _video$current.play();
        } else {
          setElTop(false);
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return VideoOveraly_jsx(VideoOveraly_Wrapper, {
    ref: wrapper,
    onTop: elTop
  }, VideoOveraly_jsx(VideoOveraly_Background, null, VideoOveraly_jsx("video", {
    ref: video,
    crossOrigin: "",
    width: "100%",
    height: "100vh",
    poster: data.poster,
    loop: true,
    muted: true,
    preload: "none"
  }, VideoOveraly_jsx("source", {
    src: data.src,
    type: "video/mp4"
  }))), VideoOveraly_jsx(Overlay, {
    onTop: elTop
  }, VideoOveraly_jsx("div", {
    className: "overlay-top"
  }), VideoOveraly_jsx("div", {
    className: "overlay-bottom"
  }, VideoOveraly_jsx("div", {
    className: "overlay-bottom-container"
  }, VideoOveraly_jsx("h1", null, data.title), VideoOveraly_jsx("p", null, data.content), VideoOveraly_jsx(Button["a" /* default */], {
    src: "",
    text: "\uC790\uC138\uD788 \uBCF4\uAE30",
    color: VideoOveraly_buttonColor
  }, VideoOveraly_jsx(icons_["PlusOutlined"], null))))));
};

/* harmony default export */ var ModelSpecific_VideoOveraly = (VideoOveraly);
// CONCATENATED MODULE: ./components/ModelSpecific/Concept.tsx

var Concept_jsx = external_react_default.a.createElement;



const Concept_Wrapper = styled_default.a.div`
    width: 86%;
    margin: 25px auto;
`;
const Text = styled_default.a.div`
    padding: 5px 0;
`;

const Concept = () => Concept_jsx(external_react_default.a.Fragment, null, Concept_jsx(external_antd_["Row"], null, Concept_jsx(external_antd_["Col"], {
  lg: 12,
  xl: 24
}, Concept_jsx(Concept_Wrapper, null, Concept_jsx(Headline["a" /* default */], {
  text: "The 718 Concept"
}), Concept_jsx(Text, null, Concept_jsx("p", null, "718 \uBAA8\uB378\uC740 \uC2A4\uD3EC\uCE20\uCE74\uC758 \uD575\uC2EC\uC744 \uC720\uC9C0\uD558\uBA74\uC11C \uBBF8\uB4DC\uC2ED \uC5D4\uC9C4\uC744 \uD0D1\uC7AC\uD55C \uB85C\uB4DC\uC2A4\uD130\uB85C, \uC804\uC124\uC801\uC778 \uD3EC\uB974\uC250 718\uC758 \uC2A4\uD3EC\uCE20 \uC815\uC2E0\uC5D0 \uBBF8\uB798\uD615 \uC2A4\uD3EC\uCE20\uCE74\uB97C \uC811\uBAA9\uD558\uC5EC \uC624\uB298\uB0A0\uC758 \uB3C4\uB85C\uC5D0 \uC801\uD569\uD558\uAC8C \uBCC0\uC2E0\uC2DC\uCF30\uC2B5\uB2C8\uB2E4. \uBAA9\uD45C\uB294 \uB2E8 \uD558\uB098, \uC77C\uC0C1\uC758 \uC8FC\uD589\uC744 \uCD5C\uACE0\uC758 \uC990\uAC70\uC6C0\uC73C\uB85C \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.")))), Concept_jsx(external_antd_["Col"], {
  lg: 12,
  xl: 24
}, Concept_jsx("video", {
  crossOrigin: "",
  width: "100%",
  poster: "data:image/gif;base64,R0lGODlhEAAJAPAAAAAAAP///yH5BAUAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7",
  autoPlay: true,
  loop: true,
  muted: true
}, Concept_jsx("source", {
  src: "https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-intro/video-mp4/c4b0fabe-0edb-11eb-80ce-005056bbdc38/porsche-video.mp4",
  type: "video/mp4"
})))));

/* harmony default export */ var ModelSpecific_Concept = (Concept);
// CONCATENATED MODULE: ./components/ModelSpecific/CustomCar/ColorBox.tsx

var ColorBox_jsx = external_react_default.a.createElement;

/* eslint-disable no-nested-ternary */





const ColorBox_Wrapper = styled_default.a.div`
    padding: 8px;
`;
const Title = styled_default.a.div`
    font-size: 16px;
    font-weight: 200;
`;
const Colors = styled_default.a.div`
    display: flex;
    flex-wrap: wrap;
`;
const Color = styled_default.a.span`
    width: ${props => props.isSelected ? '65px' : '60px'};
    height: ${props => props.isSelected ? '65px' : '60px'};
    background-color: ${props => props.color && `${props.color}`};
    
    position: relative;
    
    ${props => props.isSelected ? 'box-shadow: 1px 1px 5px 1px gray; border: none; z-index: 5' : 'border: 1px solid lightgray;'};

    .anticon {
        font-size: 20px;
        border-radius: 50%;
        position: relative;
        top: 60%;
        left: 60%;
    }
    .check {
        border: 1px solid white;
        background: red;
        color: white;
    }
    .loading {
        border: 3px solid lightgray;
        background: lightgray;
        font-size: 16px;
        color: gray;
    }
`;

const ColorBox = ({
  text,
  colors
}) => {
  const imgLoaded = true;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const selectedColor = Object(external_react_redux_["useSelector"])(state => {
    if (text !== '') {
      return state.modelspec.custom.exterior;
    }

    return state.modelspec.custom.interior;
  });
  const onSelect = Object(external_react_["useCallback"])(e => {
    console.log(e.target.id);

    if (text !== '') {
      dispatch(modelspec["a" /* default */].actions.exteriorColorChange(e.target.id));
    } else {
      dispatch(modelspec["a" /* default */].actions.interiorColorChange(e.target.id));
    }
  }, []);
  return ColorBox_jsx(ColorBox_Wrapper, null, ColorBox_jsx(Title, null, text), ColorBox_jsx(Colors, null, colors.map(color => {
    if (color === selectedColor) {
      return ColorBox_jsx(Color, {
        color: color,
        isSelected: true,
        id: color,
        onClick: onSelect
      }, true ? imgLoaded ? ColorBox_jsx(icons_["CheckCircleOutlined"], {
        className: "check"
      }) : ColorBox_jsx(icons_["SyncOutlined"], {
        spin: true,
        className: "loading"
      }) : undefined);
    }

    return ColorBox_jsx(Color, {
      color: color,
      isSelected: false,
      id: color,
      onClick: onSelect
    }, false ? undefined : '');
  })));
};

/* harmony default export */ var CustomCar_ColorBox = (ColorBox);
// CONCATENATED MODULE: ./components/ModelSpecific/CustomCar/WheelBox.tsx

var WheelBox_jsx = external_react_default.a.createElement;

/* eslint-disable no-nested-ternary */
 // import Image from 'next/image';



const WheelBox_Wrapper = styled_default.a.div`
    padding: 8px;
`;
const Wheels = styled_default.a.div`
    display: flex;
    flex-wrap: wrap;
`;
const Wheel = styled_default.a.span`
    width: ${props => props.isSelected ? '65px' : '60px'};
    height: ${props => props.isSelected ? '65px' : '60px'};
    
    position: relative;
    
    ${props => props.isSelected ? 'box-shadow: 1px 1px 5px 1px gray; border: none; z-index: 5' : 'border: 1px solid white;'};

    .anticon {
        font-size: 20px;
        border-radius: 50%;
        position: relative;
        top: -50%;
        left: 60%;
    }
    .check {
        border: 1px solid white;
        background: red;
        color: white;
    }
    .loading {
        border: 3px solid lightgray;
        background: lightgray;
        font-size: 16px;
        color: gray;
    }
`;

const WheelBox = () => {
  const wheels = ['/tire/tire_00.png', '/tire/tire_01.png', '/tire/tire_02.png', '/tire/tire_03.png', '/tire/tire_04.png', '/tire/tire_05.png', '/tire/tire_06.png', '/tire/tire_07.png'];
  const imgLoaded = false;
  const {
    0: selectColor,
    1: setSelectColor
  } = Object(external_react_["useState"])('');
  const onSelect = Object(external_react_["useCallback"])(e => {
    setSelectColor(e.target.alt);
  }, []);
  return WheelBox_jsx(WheelBox_Wrapper, null, WheelBox_jsx(Wheels, null, wheels.map(wheel => {
    if (wheel === selectColor) {
      return WheelBox_jsx(Wheel, {
        imgSrc: wheel,
        isSelected: true,
        id: wheel,
        onClick: onSelect
      }, WheelBox_jsx("img", {
        src: `${wheel}`,
        alt: `${wheel}`,
        height: 66,
        width: 66,
        className: "tire-img"
      }), true ? imgLoaded ? WheelBox_jsx(icons_["CheckCircleOutlined"], {
        className: "check"
      }) : WheelBox_jsx(icons_["SyncOutlined"], {
        spin: true,
        className: "loading"
      }) : undefined);
    }

    return WheelBox_jsx(Wheel, {
      imgSrc: wheel,
      isSelected: false,
      id: wheel,
      onClick: onSelect
    }, WheelBox_jsx("img", {
      src: `${wheel}`,
      alt: `${wheel}`,
      height: 60,
      width: 60,
      className: "tire-img"
    }), false ? undefined : '');
  })));
};

/* harmony default export */ var CustomCar_WheelBox = (WheelBox);
// CONCATENATED MODULE: ./components/ModelSpecific/CustomCar/index.tsx

var CustomCar_jsx = external_react_default.a.createElement;

/* eslint-disable max-len */







const {
  Panel: CustomCar_Panel
} = external_antd_["Collapse"];
const CustomCar_responsive = {
  all: {
    breakpoint: {
      max: 3000,
      min: 0
    },
    items: 1
  }
};
const CustomCar_Wrapper = styled_default.a.div`
  width: 86vw;
  margin: 50px auto;
  @media (min-width: 992px) {
      width: 100%;
  }
`;
const CustomCar_ImageWrapper = styled_default.a.div`
  img {
      width: 100%;
      height: 100%;
  }
`;
const Selector = styled_default.a.div`
  margin: 20px 0;
  .ant-collapse {
      .ant-collapse-item {
          border-bottom: 1px solid lightgray;
          .ant-collapse-header {
            font-size: 18px;
            font-weight: bold;
            padding-left: 5px;
          }
          .ant-collapse-content {
            .ant-collapse-content-box {
                padding: 0 0 10px 0;
                display: flex;
                flex-wrap: wrap;
            }    
          }
      }
  }

  @media (min-width: 992px) {
      margin: 0 20px;
  }
`;
const CustomCar_colors = {
  exterior: {
    standard: ['#FFFFFF', '#000000', '#CC0133', '#FFCC02'],
    metalic: ['#EFF5FA', '#000001', '#333333', '#C3CDD3', '#CCCCCC', '#01194B', '#1D2738', '#3C3C32'],
    special: ['#990033', '#C7C7BF']
  },
  interior: ['#2C2220', '#333333', '#CC9965', '#782E2F', '#CFD1CF']
};

const CustomCar = ({
  data
}) => {
  const exteriorColor = Object(external_react_redux_["useSelector"])(state => state.modelspec.custom.exterior);
  const interiorColor = Object(external_react_redux_["useSelector"])(state => state.modelspec.custom.interior);
  const modelType = Object(external_react_redux_["useSelector"])(state => state.modelspec.type);
  const totalImages = data[modelType].customImages;
  const exColorType = Object.keys(CustomCar_colors.exterior).filter(item => CustomCar_colors.exterior[item].includes(exteriorColor))[0];
  const filteredExImages = totalImages && totalImages[exColorType][CustomCar_colors.exterior[exColorType].indexOf(exteriorColor)];
  const filteredInImages = totalImages && totalImages.interior[CustomCar_colors.interior.indexOf(interiorColor)];
  return CustomCar_jsx(CustomCar_Wrapper, null, totalImages ? CustomCar_jsx(external_antd_["Row"], null, CustomCar_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 15
  }, CustomCar_jsx(external_react_multi_carousel_default.a, {
    responsive: CustomCar_responsive,
    ssr: true
  }, filteredExImages === null || filteredExImages === void 0 ? void 0 : filteredExImages.map(item => CustomCar_jsx(CustomCar_ImageWrapper, null, CustomCar_jsx("img", {
    src: item,
    alt: ""
  }))), filteredInImages === null || filteredInImages === void 0 ? void 0 : filteredInImages.map(item => CustomCar_jsx(CustomCar_ImageWrapper, null, CustomCar_jsx("img", {
    src: item,
    alt: ""
  }))))), CustomCar_jsx(external_antd_["Col"], {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 9
  }, CustomCar_jsx(Selector, null, CustomCar_jsx(external_antd_["Collapse"], {
    accordion: true,
    bordered: false,
    defaultActiveKey: ['1'],
    expandIconPosition: "right",
    ghost: true
  }, CustomCar_jsx(CustomCar_Panel, {
    header: "Exterior Color",
    key: "1"
  }, CustomCar_jsx(CustomCar_ColorBox, {
    text: "Standard Color",
    colors: CustomCar_colors.exterior.standard
  }), CustomCar_jsx(CustomCar_ColorBox, {
    text: "Metalic Color",
    colors: CustomCar_colors.exterior.metalic
  }), CustomCar_jsx(CustomCar_ColorBox, {
    text: "Special Color",
    colors: CustomCar_colors.exterior.special
  })), CustomCar_jsx(CustomCar_Panel, {
    header: "Wheels",
    key: "2"
  }, CustomCar_jsx(CustomCar_WheelBox, null)), CustomCar_jsx(CustomCar_Panel, {
    header: "Interior Colors and Material",
    key: "3"
  }, CustomCar_jsx(CustomCar_ColorBox, {
    text: "",
    colors: CustomCar_colors.interior
  })))))) : CustomCar_jsx(external_antd_["Empty"], null));
};

/* harmony default export */ var ModelSpecific_CustomCar = (CustomCar);
// CONCATENATED MODULE: ./components/ModelSpecific/index.tsx

var ModelSpecific_jsx = external_react_default.a.createElement;








const ModelSpecific = ({
  model,
  page,
  spec
}) => ModelSpecific_jsx(external_react_default.a.Fragment, null, ModelSpecific_jsx(ModelSpecific_ModelBoard, {
  data: spec
}), ModelSpecific_jsx(ModelSpecific_StickyNav, {
  navList: page === null || page === void 0 ? void 0 : page.navlist
}), ModelSpecific_jsx("div", {
  id: "nav1",
  className: "sticky-nav-section"
}, (page === null || page === void 0 ? void 0 : page.concept) && ModelSpecific_jsx(ModelSpecific_Concept, null)), ModelSpecific_jsx("div", {
  id: "nav2",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_VideoOveraly, {
  data: page === null || page === void 0 ? void 0 : page.videooverlay[0]
})), ModelSpecific_jsx("div", {
  id: "nav3",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_VideoOveraly, {
  data: page === null || page === void 0 ? void 0 : page.videooverlay[1]
})), ModelSpecific_jsx("div", {
  id: "nav4",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_VideoOveraly, {
  data: page === null || page === void 0 ? void 0 : page.videooverlay[2]
})), ModelSpecific_jsx("div", {
  id: "nav5",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_CustomCar, {
  data: spec
})), ModelSpecific_jsx("div", {
  id: "nav6",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_Gallery, {
  data: page === null || page === void 0 ? void 0 : page.gallery,
  model: model
})), ModelSpecific_jsx("div", {
  id: "nav7",
  className: "sticky-nav-section"
}, ModelSpecific_jsx(ModelSpecific_NextPhase, null)));

/* harmony default export */ var components_ModelSpecific = (ModelSpecific);
// CONCATENATED MODULE: ./utils/modelspecific/page-data.ts
const pageData = {
  718: {
    concept: {
      title: 'The 718 Concept',
      content: `718 모델은 스포츠카의 핵심을 유지하면서 미드십 엔진을 탑재한 로드스터로,
      전설적인 포르쉐 718의 스포츠 정신에 미래형 스포츠카를 접목하여 오늘날의 도로에 적합하게 변신시켰습니다.
      목표는 단 하나, 일상의 주행을 최고의 즐거움으로 만드는 것입니다.`,
      poster: 'data:image/gif;base64,R0lGODlhEAAJAPAAAAAAAP///yH5BAUAAAAALAAAAAAQAAkAAAIKhI+py+0Po5yUFQA7',
      video: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-intro/video-mp4/c4b0fabe-0edb-11eb-80ce-005056bbdc38/porsche-video.mp4'
    },
    videooverlay: [{
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-design-loop/zoom/d5cda61c-095d-11eb-80ce-005056bbdc38/porsche-image.jpg',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-design-loop/video-mp4/92fb8d17-1205-11eb-80ce-005056bbdc38/porsche-video.mp4',
      title: '디자인.',
      content: '정교하며, 과하지 않습니다. 자신감 넘치며, 구속받지 않습니다. 낮고, 와이드하며, 매끈합니다. 718 모델의 익스 테리어 디자인은 스포티하면서도 독특한 에지와 함께 뚜렷하게 정의된 전통적인 윤곽으로 차별화된 특징을 선보입니다.'
    }, {
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-performance-loop/zoom/e94cabe6-0861-11eb-80ce-005056bbdc38/porsche-image.jpg',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-performance-loop/video-mp4/d894f0af-0861-11eb-80ce-005056bbdc38/porsche-video.mp4',
      title: '퍼포먼스.',
      content: '718 모델의 특별함은 그 성능과 핸들링, 디자인에 있으며 트렁크 두 개의 넓은 적재 공간도 그 중 하나입니다. 무엇보다 특별한 것은 처음부터 이 모든 것을 가능하게 해준 미드십 엔진 컨셉트입니다.'
    }, {
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-comfort-loop/zoom/104f8481-095e-11eb-80ce-005056bbdc38/porsche-image.jpg',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/modelseries-718-models-overview-comfort-loop/video-mp4/c45f3cbd-1205-11eb-80ce-005056bbdc38/porsche-video.mp4',
      title: '편의 사양.',
      content: '어댑티브 댐퍼는 일상의 주행에서 더욱 편안함을 제공합니다. 또한 다양한 수납 솔루션, 여유로운 레그룸, 넉넉한 수납을 위해 마련된 앞뒤의 적재 공간으로 실용성을 더합니다.'
    }],
    gallery: [{
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-28/zoom2/3deeeb7a-96d0-11e6-9f1b-0019999cd470;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-c7-gallery-interior-14/zoom2/3f44f62e-5419-11eb-80d1-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-25/zoom2/9a6faf2c-e870-11ea-80cd-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'wallpaper',
      src: 'https://files.porsche.com/filestore/wallpaper/multimedia/none/jdp-2016-982-718-c7-gallery-wallpaper-01/wallpaper/8c279810-e874-11ea-80cd-005056bbdc38;sE;twebp;l63738108268;w1920;h1080/porsche-wallpaper.webp'
    }, {
      type: 'wallpaper',
      src: 'https://files.porsche.com/filestore/wallpaper/multimedia/none/jdp-2016-982-718-bo-gallery-wallpaper-02/wallpaper/312f6d49-e871-11ea-80cd-005056bbdc38;sE;twebp;l63738108267;w1920;h1080/porsche-wallpaper.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-c7-gallery-interior-10/zoom2/000f0bd2-5419-11eb-80d1-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-c7-gallery-interior-01/zoom2/25f22e85-5419-11eb-80d1-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-bo-gallery-exterior-08/zoom2/f5d184e9-54a2-11eb-80d1-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/jdp-2016-982-718-c7-gallery-exterior-28/zoom2/4d59533b-e869-11ea-80cd-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }],
    navlist: ['718 소개', '디자인', '퍼포먼스', '편의사양', '나만의 포르쉐 만들기', '갤러리', '다음단계']
  },
  911: {
    concept: null,
    videooverlay: [{
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-design-intro-loop/zoom/5d4a5e63-80a8-11ea-80c9-005056bbdc38/porsche-image.jpg',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-design-intro-loop/video-mp4/74e6764d-80a1-11ea-80c9-005056bbdc38/porsche-video.mp4',
      title: '시대를 초월한 다자인',
      content: '시대를 초월한 디자인의 현대적인 해석. 911의 실루엣을 잊혀지지 않게 만드는 것은 상징적인 플라이라인입니다. 1963년부터 거의 변하지 않은 이 플라이라인은 모든 포르쉐 모델의 DNA를 형성했습니다. 물론 911 카브리올레 및 타르가 모델도 마찬가지입니다.'
    }, {
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-performance-intro-loop/zoom/9d929448-80a8-11ea-80c9-005056bbdc38/porsche-image.jpg',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-performance-intro-loop/video-mp4/94180f3e-80a3-11ea-80c9-005056bbdc38/porsche-video.mp4',
      title: '스포츠카 퍼포먼스',
      content: '모든 911의 근본적인 목표는 동일합니다. 바로, 드라이빙입니다. 물론 최대한 스포티한 드라이빙입니다. 트윈 터보 수평 대향 엔진, 변속기, 섀시, 브레이크, 모든 제어 시스템의 설계 목표는 단 하나, 최고의 성능입니다.'
    }, {
      poster: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-heritage-loop/zoom/052ccd93-7fe0-11ea-80c9-005056bbdc38/porsche-image.jpgs',
      src: 'https://files.porsche.com/filestore/video/multimedia/none/992-carrera-heritage-loop/video-mp4/f25a331e-7fdf-11ea-80c9-005056bbdc38/porsche-video.mp4',
      title: `911 Targa 4S
        헤리티지 디자인 에디션`,
      content: '최첨단 스포츠카 기술이 역사적인 디자인을 만났습니다. 992대만 한정 판매되는 911 타르가 4S 헤리티지 디자인 에디션은 포르쉐 356과 첫 번째 911 타르가의 디자인 요소 및 색상, 소재를 사용해 완벽하게 새로우면서 시대를 초월한 스타일 아이콘을 완성합니다.'
    }],
    gallery: [{
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-carrera-gallery-01/zoom2/e0a5e722-7ee9-11ea-80c9-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-carrera-gallery-02/zoom2/0ad981e1-734f-11ea-80c9-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-32/zoom2/092f2c17-ce2b-11e9-80c5-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-07/zoom2/a3f1236f-e75d-11e8-bec8-0019999cd470;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-22/zoom2/637a33d7-c4a9-11e9-80c5-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-interieur-13/zoom2/7cc1e889-c4ac-11e9-80c5-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-carrera-gallery-03/zoom2/2f9e19dc-7eea-11ea-80c9-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-carrera-gallery-04/zoom2/41d357aa-7eea-11ea-80c9-005056bbdc38;sK;twebp/porsche-zoom2.webp'
    }, {
      type: 'image',
      src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/modelseries-911carrera992-outdoor-02/zoom2/8afc23f7-e75d-11e8-bec8-0019999cd470;sK;twebp/porsche-zoom2.webp'
    }],
    navlist: ['', '디자인', '퍼포먼스', '헤리티지 디자인 에디션', '나만의 포르쉐 만들기', '갤러리', '다음 단계']
  } // '911TurboS': {
  //   concept: {
  //     title: '911 터보 S:',
  //     content: '포르쉐 엔지니어들은 역사상 가장 완벽한 스포츠카에 대해 이야기하기를 좋아합니다. 매우 스포티한 동시에 편안하며 일상적인 용도에 적합한 스포츠카입니다. 새로운 911 터보 모델도 계속해서 이 길을 따라갑니다.',
  //     poster: 'https://files.porsche.com/filestore/video/multimedia/none/model-series-911-turbo-design-video/preview/274c60cd-6209-11ea-80c8-005056bbdc38;sK;twebp/porsche-image.webp',
  //     video: 'https://player.vimeo.com/video/389427754?loop=false&autoplay=false&background=true&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media',
  //   },
  //   videooverlay: [
  //     {
  //       poster: 'https://files.porsche.com/filestore/video/multimedia/none/992-turbo-performance-intro-loop/zoom/aed562fe-68ee-11ea-80c8-005056bbdc38/porsche-image.jpg',
  //       src: 'https://files.porsche.com/filestore/video/multimedia/none/992-turbo-performance-intro-loop/video-mp4/690bf638-68ee-11ea-80c8-005056bbdc38/porsche-video.mp4',
  //       title: '퍼포먼스',
  //       content: `포르쉐 엔지니어에게 결승선은 끝이 아닙니다. 개선이 필요한 부분을 찾아 끊임없이 탐구해나가는 긴 여정에서 잠시 머무는 곳일 뿐입니다.
  //       새로운 세대의 엔진: VTG를 탑재한 6 기통 트윈 터보 수평대향 엔진
  //       강력한 엔진 사운드를 위한 스포츠 배기 시스템
  //       새로워진 8단 포르쉐 더블 클러치 (PDK: Porsche Doppelkupplung) 
  //       `,
  //     },
  //     {
  //       src: 'https://files.porsche.com/filestore/video/china/none/992-turbo-design-intro-loop/video-mp4/55f9b458-4cd6-11ea-80c8-005056bbdc38/porsche-video.mp4',
  //       poster: 'https://files.porsche.com/filestore/video/china/none/992-turbo-design-intro-loop/zoom/329bd9ca-a1b8-11ea-80ca-005056bbdc38/porsche-image.jpg',
  //       title: '디자인',
  //       content: `후면과 전면을 거쳐 911 터보 S 특유의 탄탄한 차체를 이루는 측면에 이르기까지, 시대를 초월한 디자인과 디테일은 앞으로 나아갈 미래의 길을 제시합니다.
  //       라이트 스트립
  //       가변 프론트 스포일러`,
  //     },
  //     {
  //       poster: 'https://files.porsche.com/filestore/video/multimedia/none/992-turbo-comfort-intro-loop/zoom/cede7429-68f0-11ea-80c8-005056bbdc38/porsche-image.jpg',
  //       src: 'https://files.porsche.com/filestore/video/multimedia/none/992-turbo-comfort-intro-loop/video-mp4/5ac19bf6-68f0-11ea-80c8-005056bbdc38/porsche-video.mp4',
  //       title: '편의사항',
  //       content: `모든 것이 새롭다거나 모든 것이 똑같지도 않습니다. 새로운 911 터보 S의 인테리어에는 45년이 넘는 포르쉐 특징과 현재의 가능성이 함께 녹아 있습니다. <br/>
  //       10.9인치 터치 스크린. 
  //       Porsche Connect
  //       'WET' 모드`,
  //     },
  //   ],
  //   gallery: [
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-exterior-01/zoom2/7b615e83-6212-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-exterior-11/zoom2/35b4643a-467d-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-interior-05/zoom2/6638dff9-4452-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-interior-10/zoom2/ab3a2ebd-4436-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-exterior-04/zoom2/813356bf-6218-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-interior-09/zoom2/760bef75-6213-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-exterior-14/zoom2/6f416d02-4684-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-exterior-10/zoom2/346386d1-6214-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //     {
  //       type: 'image', src: 'https://files.porsche.com/filestore/galleryimagerwd/multimedia/none/992-tu-gallery-interior-06/zoom2/a5f6e5ba-4452-11ea-80c8-005056bbdc38;sK;twebp/porsche-zoom2.webp',
  //     },
  //   ],
  //   navlist: [
  //     '911 Turbo S 소개', '퍼포먼스', '디자인', '편의사양', '갤러리', '다음 단계',
  //   ],
  // },

};
/* harmony default export */ var page_data = (pageData);
// CONCATENATED MODULE: ./utils/modelspecific/spec-data.ts
const specData = {
  718: [{
    name: '718 Cayman',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-cayman-modelexplorer/normal/21f297c3-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 4,
      'Fuel grade': 5,
      Bore: '91.0 mm',
      Stroke: '76.4 mm',
      Displacement: '1,988 cc',
      'Power (kW)': '220 kW',
      'Power (PS)': '300 PS',
      'RPM point max Power': '6,500 r/min',
      'Max. Torque': '38.8 kg·m',
      'RPM range max Torque': '1,950 - 4,500 r/min'
    },
    performance: {
      Topspeed: '275 km/h',
      'Acceleration 0 - 100 km/h': '4.9 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.7 s',
      'Acceleration 0 - 160 km/h': '11.1 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '10.8 s',
      'Acceleration 0 - 200 km/h': '18.1 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '17.8 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '3.2 s'
    },
    body: {
      Length: '4,380 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,295 mm',
      DragCoefficient: '0.30 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,515 mm',
      RearTrack: '1,530 mm',
      UnladenWeight: '1,415 kg',
      PermissibleGrossWeight: '1,545 kg',
      MaximumLoad: '320 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Largest luggage compartment volume (behind front seats, up to roof)': '272 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '8.3 km/ℓ',
      'Fuel Consumption NonUrban': '10.9 km/ℓ',
      'Fuel Consumption Combined': '9.3 km/ℓ',
      'CO2 Emissions Combined': '186 g/km'
    },
    price: '86,400,000 KRW 부터',
    customImages: {
      standard: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmQeBSZ9nugT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3XDx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3XDx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3XDx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzogT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zgLUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zgLUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zgLUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT0B%252dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zptUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zptUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zptUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT0Dy2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M']],
      metalic: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVBpgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVBbgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT0FV2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zf3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zf3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zf3UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT0CV2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zuxUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zuxUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zuxUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT01g2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmT3BSZ9nugT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn0UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn0UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zn0UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT0FZ2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zudUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zudUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3Xwx7zudUlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVzmgT01N2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M']],
      special: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPKx7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmQmBSZ9nugT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKA4w3y5x7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3y5x7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKA4w3y5x7za7UlSRvyZnAYP51ZYSK%25D0PcfBDNEEjzs1Ssq4kdJ%25OuUSPvKQOubMbdk6gyx7Jh557CCLHnI8PXbsdgPi60ciSh0QsmHwANVnc49aqONKFrUR3sh1NzFMudIkDr75%25x6Xu2', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVuIgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M']],
      interior: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuIgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuIgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuIgT0CT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuIgT0CT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuIgT0Di2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuIgT0Di2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuIgT0D62dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuIgT0D62dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuIgT0D92dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhM%254x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuIgT0D92dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5YEiZkQJtmcrsF5R6AHKr8xa2OVQilr0x91NW4oaTI7gqz1M']]
    }
  }, {
    name: '718 Boxter',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-boxster-modelexplorer/normal/cb7b33ba-2d56-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 4,
      'Fuel grade': 5,
      Bore: '91.0 mm',
      Stroke: '76.4 mm',
      Displacement: '1,988 cc',
      'Power (kW)': '220 kW',
      'Power (PS)': '300 PS',
      'RPM point max Power': '6,500 r/min',
      'Max. Torque': '38.8 kg·m',
      'RPM range max Torque': '1,950 - 4,500 r/min'
    },
    performance: {
      Topspeed: '275 km/h',
      'Acceleration 0 - 100 km/h': '4.9 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.7 s',
      'Acceleration 0 - 160 km/h': '11.1 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '10.8 s',
      'AccelAcceleration 0 - 200 km/h0200': '18.1 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '17.8 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '3.2 s'
    },
    body: {
      Length: '4,380 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,280 mm',
      DragCoefficient: '0.31 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,515 mm',
      RearTrack: '1,530 mm',
      UnladenWeight: '1,410 kg',
      PermissibleGrossWeight: '1,540 kg',
      MaximumLoad: '320 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '8.3 km/ℓ',
      'Fuel Consumption NonUrban': '10.9 km/ℓ',
      'Fuel Consumption Combined': '9.3 km/ℓ',
      'CO2 Emissions Combined': '186 g/km'
    },
    price: '91,100,000 KRW 부터',
    customImages: {
      standard: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmQeBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmQeBSZ9nugT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7zaLUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7zaLUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7zaLUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0A%252dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlA2upQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlA2upQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlA2upQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcM1DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAYCpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAYCpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAYCpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcL3DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb']],
      metalic: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBpgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVBpgT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcW0DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAEzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAEzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAEzpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcX0DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcs2DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmT3BSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmT3BSZ9nugT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIcpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIcpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAIcpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcW5DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVkpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVkpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAVkpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dcs4DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb']],
      special: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmQmBSZ9nugT0VPVx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmQmBSZ9nugT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3y5x7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3y5x7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3y5x7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVuIgT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAHUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAHUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3N0x7za7UlAHUpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVrZgT0AT2dct2DkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVuKu4w3yIx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9RCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3yIx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVuKu4w3yIx7z4cUlAOlpQNgj35IKy9vs5yNP1Lc98EML4rrqAZsNZJxFkS1BVpN9jPnBVioikFm23UlSHvvlXXufIeG9aiZk29tmc89CvWdpIf4ExXmJ%25OaTD49rzXLwY4sEARZpkoFsxcQvnSX9CsNcbfVK0hQyOt5Ddfe', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5EiSRlW9eCv8cOdzj8iaqiTyOFmPQLRmVuWgT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb']],
      interior: [['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5GyIxS2FtrCR3qHwAzJMrGXV3o6DrlC0aQ2N94lRZdIkf3GylEZUt1csbdLAYnMStW', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcKdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0AT2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5GyIxS2FtrCR3qHwAzJMrGXV3o6DrlC0aQ2N94lRZdIkf3GylEZUt1csbdLAYnMStW', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcXdDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0Di2dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5GyIxS2FtrCR3qHwAzJMrGXV3o6DrlC0aQ2N94lRZdIkf3GylEZUt1csbdLAYnMStW', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcLtDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0D62dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5GyIxS2FtrCR3qHwAzJMrGXV3o6DrlC0aQ2N94lRZdIkf3GylEZUt1csbdLAYnMStW', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcLmDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb'], ['https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9ACv8cOdzj8iaqiTyOFmPQLRmVBbgT0D92dEOeunFcLGIlnLE87oZG5CPorXXh0QlEQHR4Nf7K12EGe8kK1p9pN4qBugTfiIIT33%25tFWvGzpQNBGYqZ5GyIxS2FtrCR3qHwAzJMrGXV3o6DrlC0aQ2N94lRZdIkf3GylEZUt1csbdLAYnMStW', 'https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EhMy4x7Jm8Uv1TwFH1ZuWgds6yJ5ajSRlW9tCv8cOdzj8iaqiTyOFmPQLRmVBbgT0R52dcLwDkrBhVIW8u6eQIurGl%2556vX9%25RaaHcnQrnfgx4ElPsDr6hGFPsYwY4xJMV2dEteedzz1CWbj6AYn4M6yJ5v63eUNDWCRXgzJf7KASoR6a0z%25mLRQXcOnD4wxQg5keFEz63Qr5pCs8ZikuKyIoNCb']]
    }
  }, {
    name: '718 Cayman S',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-cayman-s-modelexplorer/normal/3cc79f24-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 4,
      'Fuel grade': 5,
      Bore: '102.0 mm',
      Stroke: '76.4 mm',
      Displacement: '2,497 cc',
      'Power (kW)': '257 kW',
      'Power (PS)': '350 PS',
      'RPM point max Power': '6,500 r/min',
      'Max. Torque': '42.9 kg·m',
      'RPM range max Torque': '1,900 - 4,500 r/min'
    },
    performance: {
      Topspeed: '285 km/h',
      'Acceleration 0 - 100 km/h': '4.4 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.2 s',
      'Acceleration 0 - 160 km/h': '9.5 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '9.2 s',
      'AccelAcceleration 0 - 200 km/h0200': '15.0 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '14.7 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.8 s'
    },
    body: {
      Length: '4,380 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,295 mm',
      DragCoefficient: '0.31 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,515 mm',
      RearTrack: '1,540 mm',
      UnladenWeight: '1,450 kg',
      PermissibleGrossWeight: '1,580 kg',
      MaximumLoad: '310 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Largest luggage compartment volume (behind front seats, up to roof)': '272 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.8 km/ℓ',
      'Fuel Consumption NonUrban': '10.2 km/ℓ',
      'Fuel Consumption Combined': '8.7 km/ℓ',
      'CO2 Emissions Combined': '198 g/km'
    },
    price: '98,300,000 KRW 부터'
  }, {
    name: '718 Boxter S',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-boxster-s-modelexplorer/normal/0e424903-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 4,
      'Fuel grade': 5,
      Bore: '102.0 mm',
      Stroke: '76.4 mm',
      Displacement: '2,497 cc',
      'Power (kW)': '257 kW',
      'Power (PS)': '350 PS',
      'RPM point max Power': '6,500 r/min',
      'Max. Torque': '42.9 kg·m',
      'RPM range max Torque': '1,900 - 4,500 r/min'
    },
    performance: {
      Topspeed: '285 km/h',
      'Acceleration 0 - 100 km/h': '4.4 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.2 s',
      'Acceleration 0 - 160 km/h': '9.5 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '9.2 s',
      'AccelAcceleration 0 - 200 km/h0200': '15.0 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '14.7 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.8 s'
    },
    body: {
      Length: '4,380 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,280 mm',
      DragCoefficient: '0.32 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,515 mm',
      RearTrack: '1,540 mm',
      UnladenWeight: '1,435 kg',
      PermissibleGrossWeight: '1,565 kg',
      MaximumLoad: '310 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.8 km/ℓ',
      'Fuel Consumption NonUrban': '10.3 km/ℓ',
      'Fuel Consumption Combined': '8.7 km/ℓ',
      'CO2 Emissions Combined': '198 g/km'
    },
    price: '103,000,000 KRW 부터'
  }, {
    name: '718 Cayman GTS 4.0',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-cayman-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/2efc8b8a-2d57-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      'Fuel grade': 5,
      Bore: '102.0 mm',
      Stroke: '81.5 mm',
      Displacement: '3,995 cc',
      'Power (kW)': '299 kW',
      'Power (PS)': '407 PS',
      'RPM point max Power': '7,000 r/min',
      'Max. Torque': '43.9 kg·m',
      'RPM range max Torque': '5,500 r/min'
    },
    performance: {
      Topspeed: '288 km/h',
      'Acceleration 0 - 100 km/h': '4.0 s',
      'Acceleration 0 - 160 km/h': '8.7 s',
      'Acceleration 0 - 200 km/h': '13.7 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.6 s'
    },
    body: {
      Length: '4,405 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,285 mm',
      DragCoefficient: '0.31 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,525 mm',
      RearTrack: '1,535 mm',
      UnladenWeight: '1,465 kg',
      PermissibleGrossWeight: '1,595 kg',
      MaximumLoad: '295 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Largest luggage compartment volume (behind front seats, up to roof)': '270 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.5 km/ℓ',
      'Fuel Consumption NonUrban': '9.7 km/ℓ',
      'Fuel Consumption Combined': '8.4 km/ℓ',
      'CO2 Emissions Combined': '208 g/km'
    },
    price: '116,700,000 KRW 부터'
  }, {
    name: '718 Boxter GTS 4.0',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-boxster-gts4%C2%B5c2%C2%B5b5z0-modelexplorer/normal/ff41417e-2d56-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      'Fuel grade': 5,
      Bore: '102.0 mm',
      Stroke: '81.5 mm',
      Displacement: '3,995 cc',
      'Power (kW)': '299 kW',
      'Power (PS)': '407 PS',
      'RPM point max Power': '7,000 r/min',
      'Max. Torque': '43.9 kg·m',
      'RPM range max Torque': '5,500 r/min'
    },
    performance: {
      Topspeed: '288 km/h',
      'Acceleration 0 - 100 km/h': '4.0 s',
      'Acceleration 0 - 160 km/h': '8.7 s',
      'Acceleration 0 - 200 km/h': '13.7 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.6 s'
    },
    body: {
      Length: '4,390 mm',
      Width: '1,800 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,275 mm',
      DragCoefficient: '0.32 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,525 mm',
      RearTrack: '1,535 mm',
      UnladenWeight: '1,460 kg',
      PermissibleGrossWeight: '1,590 kg',
      MaximumLoad: '295 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.5 km/ℓ',
      'Fuel Consumption NonUrban': '9.7 km/ℓ',
      'Fuel Consumption Combined': '8.4 km/ℓ',
      'CO2 Emissions Combined': '208 g/km'
    },
    price: '121,400,000 KRW 부터'
  }, {
    name: 'Boxter 25 Years',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/718-boxster-25y-modelexplorer/normal/b8b5c814-3ad5-11eb-80d0-005056bbdc38;sP;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      Bore: '102.0 mm',
      Stroke: '81.5 mm',
      Displacement: '3,995 cc',
      'Power (kW)': '299 kW',
      'Power (PS)': '407 PS',
      'RPM point max Power': '7,000 r/min',
      'Max. Torque': '43.9 kg·m',
      'RPM range max Torque': '5,500 r/min'
    },
    performance: {
      Topspeed: '288 km/h',
      'Acceleration 0 - 100 km/h': '4.0 s',
      'Acceleration 0 - 160 km/h': '8.7 s',
      'Acceleration 0 - 200 km/h': '13.7 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.6 s'
    },
    body: {
      Length: '4,391 mm',
      Width: '1,801 mm',
      WidthWithMirror: '1,994 mm',
      Height: '1,273 mm',
      DragCoefficient: '0.32 Cd',
      Wheelbase: '2,475 mm',
      FrontTrack: '1,527 mm',
      RearTrack: '1,535 mm',
      MaximumLoad: '295 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '150 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    price: '131,800,000 KRW 부터'
  }],
  911: [{
    name: '911 Carrera',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelexplorer-04/normal/c7803ecf-7251-11ea-80c9-005056bbdc38;sO;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      'Fuel grade': 5,
      Bore: '91.0 mm',
      Stroke: '76.4 mm',
      Displacement: '2,981 cc',
      'Power (kW)': '288 kW',
      'Power (PS)': '392 PS',
      'RPM point max Power': '6,500 r/min',
      'Max Engine Speed': '7,500 r/min',
      'Max. Torque': '45.9 kg·m',
      'RPM range max Torque': '1,950 - 5,500 r/min'
    },
    performance: {
      Topspeed: '293 km/h',
      'Acceleration 0 - 100 km/h': '4.2 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.0 s',
      'Acceleration 0 - 160 km/h': '9.3 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '9.0 s',
      'AccelAcceleration 0 - 200 km/h0200': '14.5 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '14.2 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.6 s'
    },
    body: {
      Length: '4,520 mm',
      Width: '1,850 mm',
      WidthWithMirror: '2,024 mm',
      Height: '1,300 mm',
      DragCoefficient: '0.29 Cd',
      Wheelbase: '2,450 mm',
      FrontTrack: '1,590 mm',
      RearTrack: '1,555 mm',
      UnladenWeight: '1,520 kg',
      PermissibleGrossWeight: '1,780 kg',
      MaximumLoad: '455 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '132 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.6 km/ℓ',
      'Fuel Consumption NonUrban': '10.0 km/ℓ',
      'Fuel Consumption Combined': '8.5 km/ℓ',
      'CO2 Emissions Combined': '204 g/km'
    },
    price: '147,900,000 KRW 부터'
  }, {
    name: '911 Carrera 4',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c4-modelexplorer-04/normal/f9fdb35d-7252-11ea-80c9-005056bbdc38;sO;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      'Fuel grade': 5,
      Bore: '91.0 mm',
      Stroke: '76.4 mm',
      Displacement: '2,981 cc',
      'Power (kW)': '288 kW',
      'Power (PS)': '392 PS',
      'RPM point max Power': '6,500 r/min',
      'Max Engine Speed': '7,500 r/min',
      'Max. Torque': '45.9 kg·m',
      'RPM range max Torque': '1,950 - 5,000 r/min'
    },
    performance: {
      Topspeed: '291 km/h',
      'Acceleration 0 - 100 km/h': '4.2 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '4.0 s',
      'Acceleration 0 - 160 km/h': '9.6 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '9.3 s',
      'AccelAcceleration 0 - 200 km/h0200': '14.9 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '14.6 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.7 s'
    },
    body: {
      Length: '4,520 mm',
      Width: '1,850 mm',
      WidthWithMirror: '2,024 mm',
      Height: '1,300 mm',
      DragCoefficient: '0.29 Cd',
      Wheelbase: '2,450 mm',
      FrontTrack: '1,590 mm',
      RearTrack: '1,555 mm',
      UnladenWeight: '1,570 kg',
      PermissibleGrossWeight: '1,830 kg',
      MaximumLoad: '430 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '132 ℓ',
      'Fuel Tank': '67 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.3 km/ℓ',
      'Fuel Consumption NonUrban': '9.6 km/ℓ',
      'Fuel Consumption Combined': '8.2 km/ℓ',
      'CO2 Emissions Combined': '213 g/km'
    },
    price: '157,100,000 KRW 부터'
  }, {
    name: '911 Carrera S',
    img: 'https://files.porsche.com/filestore/image/multimedia/none/992-c2s-modelexplorer-04/normal/6d2df801-7252-11ea-80c9-005056bbdc38;sO;twebp/porsche-normal.webp',
    powerunit: {
      'Number of cylinders': 6,
      'Fuel grade': 5,
      Bore: '91.0 mm',
      Stroke: '76.4 mm',
      Displacement: '2,981 cc',
      'Power (kW)': '337 kW',
      'Power (PS)': '458 PS',
      'RPM point max Power': '6,500 r/min',
      'Max Engine Speed': '7,500 r/min',
      'Max. Torque': '54.1 kg·m',
      'RPM range max Torque': '2,300 - 5,000 r/min'
    },
    performance: {
      Topspeed: '308 km/h',
      'Acceleration 0 - 100 km/h': '3.7 s',
      'Acceleration 0 - 100 km/h with Sport Chrono Package': '3.5 s',
      'Acceleration 0 - 160 km/h': '8.1 s',
      'Acceleration 0 - 160 km/h with Sport Chrono Package': '7.8 s',
      'AccelAcceleration 0 - 200 km/h0200': '12.4 s',
      'Acceleration 0 - 200 km/h with Sport Chrono Package': '12.1 s',
      'In-gear acceleration (80-120km/h) (50-75 mph)': '2.2 s'
    },
    body: {
      Length: '4,520 mm',
      Width: '1,850 mm',
      WidthWithMirror: '2,024 mm',
      Height: '1,300 mm',
      DragCoefficient: '0.29 Cd',
      Wheelbase: '2,450 mm',
      FrontTrack: '1,590 mm',
      RearTrack: '1,555 mm',
      UnladenWeight: '1,535 kg',
      PermissibleGrossWeight: '1,795 kg',
      MaximumLoad: '470 kg'
    },
    capacity: {
      'Luggage compartment volume, front': '132 ℓ',
      'Fuel Tank': '64 ℓ'
    },
    warranty: {
      WarrantyPeriod: '4 years without mileage limit',
      MainServiceInterval: 'every 60,000 km',
      PaintWarranty: '3 years',
      RustWarranty: '12 years'
    },
    consumEmit: {
      'Fuel Consumption Urban': '7.4 km/ℓ',
      'Fuel Consumption NonUrban': '9.8 km/ℓ',
      'Fuel Consumption Combined': '8.3 km/ℓ',
      'CO2 Emissions Combined': '210 g/km'
    },
    price: '164,800,000 KRW 부터'
  }]
};
/* harmony default export */ var spec_data = (specData);
// CONCATENATED MODULE: ./pages/models/[model].tsx

var _model_jsx = external_react_default.a.createElement;







const Model = ({
  data,
  errors
}) => {
  var _router$query;

  const router = Object(router_["useRouter"])();
  const model = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.model;

  if (errors) {
    return _model_jsx(Layout["a" /* default */], null, _model_jsx("p", null, _model_jsx("span", {
      style: {
        color: 'red'
      }
    }, "Error:"), errors));
  }

  return _model_jsx(Layout["a" /* default */], null, _model_jsx(head_default.a, null, _model_jsx("title", null, `포르쉐 모델 | ${model}`)), _model_jsx("main", null, model === '718' || model === '911' ? _model_jsx(components_ModelSpecific, {
    model: model,
    page: data === null || data === void 0 ? void 0 : data.page,
    spec: data === null || data === void 0 ? void 0 : data.spec
  }) : _model_jsx("h1", {
    style: {
      padding: 50
    }
  }, "not developed")));
};

const getStaticPaths = async () => {
  const models = Object.keys(page_data);
  const paths = models.map(model => ({
    params: {
      model
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async ({
  params
}) => {
  try {
    const model = String(params === null || params === void 0 ? void 0 : params.model);
    const page = page_data[model];
    const spec = spec_data[model];
    const data = {
      page,
      spec
    };
    return {
      props: {
        data
      }
    };
  } catch (err) {
    return {
      props: {
        errors: err.message
      }
    };
  }
};
/* harmony default export */ var _model_ = __webpack_exports__["default"] = (Model);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });