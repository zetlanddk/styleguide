"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _catalog = require("catalog");

var _glamor = require("glamor");

var _catalogTheme = _interopRequireDefault(require("./catalogTheme"));

require("./global.css");

require("./catalogTheme.css");

var fontStyles = _interopRequireWildcard(require("./components/Typography/styles"));

require("core-js/fn/array/from");

require("core-js/fn/array/find");

require("core-js/es6");

var _fonts = require("./theme/fonts");

var _translate = require("./lib/translate");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _glamor.simulations)(true); // prevent speedy in catalog
// - iframe rendering (e.g. responsive preview)
//   does not support insertRule

(0, _glamor.speedy)(false); // we want react code by default :)

_catalog.ReactSpecimen.defaultProps = _objectSpread({}, _catalog.ReactSpecimen.defaultProps, {
  showSource: true
});

require('glamor/reset');

var styleTag = document.createElement('style');
styleTag.innerHTML = (0, _fonts.fontFaces)();
document.body.appendChild(styleTag);
var t = (0, _translate.createFormatter)(require('./lib/translations.json').data);

_reactDom.default.render(_react.default.createElement(_catalog.Catalog, {
  title: "Style Guide",
  theme: _catalogTheme.default,
  useBrowserHistory: true,
  responsiveSizes: [{
    name: 'Desktop large',
    width: 1095,
    height: 800
  }, {
    name: 'Desktop small',
    width: 800,
    height: 600
  }, {
    name: 'Mobile',
    width: 320,
    height: 480
  }],
  pages: [{
    path: '/',
    title: 'Overview',
    src: require('./README.md')
  }, {
    title: 'Base',
    pages: [{
      path: '/logo',
      title: 'Logo',
      imports: {
        Logo: require('./components/Logo'),
        BrandMark: require('./components/Logo/BrandMark')
      },
      src: require('./components/Logo/docs.md')
    }, {
      path: '/typography',
      title: 'Typography',
      imports: _objectSpread({}, require('./components/Typography'), {
        css: _glamor.css,
        styles: JSON.parse(JSON.stringify(fontStyles)),
        fontFamilies: require('./theme/fonts').fontFamilies
      }),
      src: require('./components/Typography/docs.md')
    }, {
      path: '/colors',
      title: 'Colors',
      component: require('./theme/colors.docs.js')
    }, {
      path: '/grid',
      title: 'Grid',
      imports: require('./components/Grid'),
      src: require('./components/Grid/docs.md')
    }]
  }, {
    title: 'Components',
    pages: [{
      path: '/components/spinner',
      title: 'Spinner',
      imports: {
        Spinner: require('./components/Spinner'),
        InlineSpinner: require('./components/Spinner').InlineSpinner
      },
      src: require('./components/Spinner/docs.md')
    }, {
      path: '/components/loader',
      title: 'Loader',
      imports: _objectSpread({}, require('./components/Typography'), {
        Loader: require('./components/Loader'),
        Spinner: require('./components/Spinner'),
        NarrowContainer: require('./components/Grid').NarrowContainer
      }),
      src: require('./components/Loader/docs.md')
    }, {
      path: '/components/button',
      title: 'Button',
      imports: {
        Button: require('./components/Button')
      },
      src: require('./components/Button/docs.md')
    }, {
      path: '/format',
      title: 'FormatTag',
      imports: _objectSpread({}, require('./components/Format')),
      src: require('./components/Format/docs.md')
    }, {
      path: '/forms',
      title: 'Forms',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), {
        Button: require('./components/Button'),
        Checkbox: require('./components/Form/Checkbox.js'),
        Radio: require('./components/Form/Radio.js'),
        Field: require('./components/Form/Field.js'),
        FieldSet: require('./components/Form/FieldSet.js'),
        Autocomplete: require('./components/Form/Autocomplete.js'),
        MaskedInput: require('react-maskedinput'),
        AutosizeInput: require('react-textarea-autosize'),
        Dropdown: require('./components/Form/Dropdown.js'),
        VirtualDropdown: require('./components/Form/VirtualDropdown.js'),
        NativeDropdown: require('./components/Form/NativeDropdown.js'),
        dropdownItems: [{
          value: '1',
          text: 'Redaktorin'
        }, {
          value: '2',
          text: 'Fussballerin'
        }, {
          value: '3',
          text: 'Pizzaliebhaberin'
        }],
        VirtualDropdownInternal: {
          Items: require('./components/Form/VirtualDropdown.js').Items,
          ItemsContainer: require('./components/Form/VirtualDropdown.js').ItemsContainer,
          Inner: require('./components/Form/VirtualDropdown.js').Inner
        },
        SearchIcon: require('react-icons/lib/md/search')
      }),
      src: require('./components/Form/docs.md')
    }, {
      path: '/components/overlay',
      title: 'Overlay',
      imports: _objectSpread({
        t: t
      }, require('./components/Overlay/docs.imports')),
      src: require('./components/Overlay/docs.md')
    }, {
      path: '/components/raw-html',
      title: 'RawHtml',
      imports: _objectSpread({}, require('./components/Typography'), {
        RawHtml: require('./components/RawHtml')
      }),
      src: require('./components/RawHtml/docs.md')
    }, {
      path: '/videoplayer',
      title: 'VideoPlayer',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/VideoPlayer'), {
        Center: require('./components/Center')
      }),
      src: require('./components/VideoPlayer/docs.md')
    }, {
      path: '/audioplayer',
      title: 'AudioPlayer',
      imports: _objectSpread({
        t: t,
        css: _glamor.css
      }, require('./components/Typography'), require('./components/AudioPlayer'), {
        Center: require('./components/Center')
      }),
      src: require('./components/AudioPlayer/docs.md')
    }, {
      path: '/lazyload',
      title: 'LazyLoad',
      imports: _objectSpread({}, require('./components/Typography').Interaction, {
        LazyLoad: require('./components/LazyLoad'),
        LazyImage: require('./components/LazyLoad/Image')
      }),
      src: require('./components/LazyLoad/docs.md')
    }, {
      path: '/gallery',
      title: 'Gallery',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Gallery'), require('./components/Figure')),
      src: require('./components/Gallery/docs.md')
    }]
  }, {
    title: 'Comments',
    pages: [{
      path: '/components/comment',
      title: 'Comment',
      imports: _objectSpread({
        t: t
      }, require('./components/Typography'), {
        exampleMdast: require('./components/Comment/exampleMdast').exampleMdast,
        isoString: new Date().toString(),
        Comment: require('./components/Comment/Comment'),
        CommentHeader: require('./components/Comment/CommentHeader'),
        CommentContext: require('./components/Comment/CommentContext'),
        CommentActions: require('./components/Comment/CommentActions')
      }),
      src: require('./components/Comment/docs.md')
    }, {
      path: '/components/commentcomposer',
      title: 'Composer',
      imports: {
        t: t,
        CommentComposer: require('./components/CommentComposer/CommentComposer'),
        CommentComposerHeader: require('./components/CommentComposer/CommentComposerHeader'),
        CommentComposerPlaceholder: require('./components/CommentComposer/CommentComposerPlaceholder'),
        CommentComposerError: require('./components/CommentComposer/CommentComposerError')
      },
      src: require('./components/CommentComposer/docs.md')
    }, {
      path: '/components/commentteaser',
      title: 'Teaser',
      imports: _objectSpread({
        t: t
      }, require('./components/CommentTeaser/docs.imports')),
      src: require('./components/CommentTeaser/docs.md')
    }, {
      path: '/components/commenttree',
      title: 'Tree',
      imports: _objectSpread({
        t: t
      }, require('./components/CommentTree/docs.imports')),
      src: require('./components/CommentTree/docs.md')
    }]
  }, {
    title: 'Article Elements',
    pages: [{
      path: '/center',
      title: 'Center',
      imports: {
        Center: require('./components/Center'),
        Breakout: require('./components/Center').Breakout
      },
      src: require('./components/Center/docs.md')
    }, {
      path: '/titleblock',
      title: 'TitleBlock',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), {
        TitleBlock: require('./components/TitleBlock')
      }),
      src: require('./components/TitleBlock/docs.md')
    }, {
      path: '/blockquote',
      title: 'BlockQuote',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/BlockQuote'), require('./components/Typography'), require('./components/Figure')),
      src: require('./components/BlockQuote/docs.md')
    }, {
      path: '/pullquote',
      title: 'PullQuote',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/PullQuote'), require('./components/Figure'), {
        Center: require('./components/Center')
      }),
      src: require('./components/PullQuote/docs.md')
    }, {
      path: '/infobox',
      title: 'InfoBox',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/InfoBox'), require('./components/Figure'), {
        Center: require('./components/Center')
      }),
      src: require('./components/InfoBox/docs.md')
    }, {
      path: '/tweet',
      title: 'Tweet',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), {
        Tweet: require('./components/Social/Tweet'),
        Center: require('./components/Center')
      }),
      src: require('./components/Social/docs.md')
    }, {
      path: '/video',
      title: 'Video',
      imports: _objectSpread({
        t: t,
        css: _glamor.css
      }, require('./components/Typography'), require('./components/Video'), {
        Center: require('./components/Center')
      }),
      src: require('./components/Video/docs.md')
    }, {
      path: '/figure',
      title: 'Figure',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/Figure'), {
        Center: require('./components/Center')
      }),
      src: require('./components/Figure/docs.md')
    }, {
      path: '/list',
      title: 'List',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/List'), {
        Center: require('./components/Center')
      }),
      src: require('./components/List/docs.md')
    }, {
      path: '/dossier',
      title: 'Dossier',
      imports: _objectSpread({
        css: _glamor.css,
        t: t
      }, require('./components/Typography'), require('./components/Dossier'), require('./components/TeaserFront'), require('./components/Figure')),
      src: require('./components/Dossier/docs.md')
    }, {
      path: '/illustration-html',
      title: 'IllustrationHtml',
      imports: {
        IllustrationHtml: require('./components/IllustrationHtml')
      },
      src: require('./components/IllustrationHtml/docs.md')
    }, {
      path: '/dynamic-component',
      title: 'DynamicComponent',
      imports: {
        DynamicComponent: require('./components/DynamicComponent')
      },
      src: require('./components/DynamicComponent/docs.md')
    }]
  }, {
    title: 'Teasers',
    pages: [{
      path: '/teaserfeed',
      title: 'Feed',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/TeaserFeed'), {
        Center: require('./components/Center')
      }),
      src: require('./components/TeaserFeed/docs.md')
    }, {
      path: '/teaserfrontimage',
      title: 'FrontImage',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/TeaserFront'), {
        Image: require('./components/Figure/Image')
      }),
      src: require('./components/TeaserFront/Image.md')
    }, {
      path: '/teaserfronttypo',
      title: 'FrontTypo',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/TeaserFront')),
      src: require('./components/TeaserFront/Typo.md')
    }, {
      path: '/teaserfrontsplit',
      title: 'FrontSplit',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/TeaserFront'), {
        Image: require('./components/Figure/Image')
      }),
      src: require('./components/TeaserFront/Split.md')
    }, {
      path: '/teaserfronttile',
      title: 'FrontTile',
      imports: _objectSpread({
        css: _glamor.css
      }, require('./components/Typography'), require('./components/TeaserFront'), {
        Image: require('./components/Figure/Image')
      }),
      src: require('./components/TeaserFront/Tile.md')
    }, {
      path: '/teaserfrontdossier',
      title: 'FrontDossier',
      imports: _objectSpread({
        css: _glamor.css,
        t: t
      }, require('./components/Typography'), require('./components/Dossier'), require('./components/TeaserFront'), require('./components/Figure')),
      src: require('./components/Dossier/Teaser.md')
    }]
  }, {
    title: 'Templates',
    pages: [{
      path: '/templates/article',
      title: 'Article',
      imports: _objectSpread({
        schema: require('./templates/Article').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/Article/docs.md')
    }, {
      path: '/templates/discussion',
      title: 'Discussion',
      imports: _objectSpread({
        schema: require('./templates/Discussion').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/Discussion/docs.md')
    }, {
      path: '/templates/comment',
      title: 'Comment',
      imports: _objectSpread({
        webSchema: require('./templates/Comment/web').default(),
        emailSchema: require('./templates/Comment/email').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast,
        CommentBody: require('./components/Comment/Comment').CommentBody
      }),
      src: require('./templates/Comment/docs.md')
    }, {
      path: '/templates/format',
      title: 'Format',
      imports: _objectSpread({
        schema: require('./templates/Format').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/Format/docs.md')
    }, {
      path: '/templates/dossier',
      title: 'Dossier',
      imports: _objectSpread({
        schema: require('./templates/Dossier').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/Dossier/docs.md')
    }, {
      path: '/templates/front',
      title: 'Front',
      imports: _objectSpread({
        schema: require('./templates/Front').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/Front/docs.md')
    }, {
      path: '/templates/editorialnewsletter',
      title: 'Newsletter',
      imports: _objectSpread({
        webSchema: require('./templates/EditorialNewsletter/web').default(),
        emailSchema: require('./templates/EditorialNewsletter/email').default()
      }, require('./templates/docs'), {
        renderMdast: require('mdast-react-render').renderMdast
      }),
      src: require('./templates/EditorialNewsletter/docs.md')
    }]
  }, {
    title: 'Charts',
    pages: [{
      path: '/charts',
      title: 'Overview',
      component: require('./components/Chart/docs.js').default
    }, {
      path: '/charts/bars',
      title: 'Bars',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/Bars.docs.md')
    }, {
      path: '/charts/timebars',
      title: 'Time Bars',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/TimeBars.docs.md')
    }, {
      path: '/charts/lollipops',
      title: 'Lollipops',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/Lollipops.docs.md')
    }, {
      path: '/charts/lines',
      title: 'Lines',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/Lines.docs.md')
    }, {
      path: '/charts/slopes',
      title: 'Slopes',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/Slopes.docs.md')
    }, {
      path: '/charts/scatterplots',
      title: 'Scatter Plots',
      imports: _objectSpread({}, require('./components/Typography'), {
        ChartTitle: require('./components/Chart').ChartTitle,
        ChartLead: require('./components/Chart').ChartLead,
        CsvChart: require('./components/Chart/Csv'),
        t: t
      }),
      src: require('./components/Chart/ScatterPlots.docs.md')
    }]
  }, {
    title: 'Development',
    pages: [{
      path: '/dev/process',
      title: 'Process',
      src: require('./development/process.docs.md')
    }, {
      path: '/dev/translate',
      title: 'Translate',
      src: require('./lib/translate.docs.md'),
      imports: _objectSpread({
        Field: require('./components/Form/Field.js')
      }, require('./components/Typography'), {
        t: (0, _translate.createFormatter)([{
          key: 'styleguide/Hello/generic',
          value: 'Hallo!'
        }, {
          key: 'styleguide/Hello/greetings',
          value: 'Hallo {name}'
        }, {
          key: 'styleguide/Hello/greetings/Thomas',
          value: 'Hoi Thomas'
        }, {
          key: 'styleguide/Hello/message/0',
          value: 'Sie waren noch nie hier'
        }, {
          key: 'styleguide/Hello/message/1',
          value: 'Willkommen an Bord {name}!'
        }, {
          key: 'styleguide/Hello/message/2',
          value: 'Schön Sie wieder zu sehen!'
        }, {
          key: 'styleguide/Hello/message/other',
          value: 'Willkommen zum {count}. Mal {name}!'
        }, {
          key: 'styleguide/Hello/label/visits',
          value: 'Anzahl Besuche'
        }, {
          key: 'styleguide/Hello/label/name',
          value: 'Name'
        }, {
          key: 'styleguide/Hello/html',
          value: 'Hallo<br />{link}'
        }]),
        RawHtml: require('./components/RawHtml')
      })
    }, {
      path: '/dev/slug',
      title: 'Slug',
      src: require('./lib/slug.docs.md')
    }, {
      path: '/z-index',
      title: 'z-index',
      src: require('./theme/zIndex.docs.md')
    }, {
      path: '/dev/inQuotes',
      title: 'inQuotes',
      src: require('./lib/inQuotes.docs.md'),
      imports: _objectSpread({}, require('./components/Typography'), require('./lib/inQuotes'))
    }]
  }]
}), document.getElementById('root'));