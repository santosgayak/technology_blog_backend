import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@editorjs/image/dist/image.mjs
(function() {
  "use strict";
  try {
    if (typeof document < "u") {
      var o = document.createElement("style");
      o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{display:none!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{display:block}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')), document.head.appendChild(o);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>';
var I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>';
var L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>';
var x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
var B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function M(C, i = null, a = {}) {
  const s = document.createElement(C);
  Array.isArray(i) ? s.classList.add(...i) : i !== null && s.classList.add(i);
  for (const r in a) a.hasOwnProperty(r) && (s[r] = a[r]);
  return s;
}
var S = ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(S || {});
var U = class {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({
    api: i,
    config: a,
    onSelectFile: s,
    readOnly: r
  }) {
    this.api = i, this.config = a, this.onSelectFile = s, this.readOnly = r, this.nodes = {
      wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: M("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: M("div", this.CSS.imagePreloader),
      caption: M("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(i, a) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${i}`, a);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(i) {
    return i.file === void 0 || Object.keys(i.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(i) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${i})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(i) {
    const a = /\.mp4$/.test(i) ? "VIDEO" : "IMG", s = {
      src: i
    };
    let r = "load";
    a === "VIDEO" && (s.autoplay = true, s.loop = true, s.muted = true, s.playsinline = true, r = "loadeddata"), this.nodes.imageEl = M(a, this.CSS.imageEl, s), this.nodes.imageEl.addEventListener(r, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(i) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = i);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const i = M("div", [this.CSS.button]);
    return i.innerHTML = this.config.buttonContent ?? `${L} ${this.api.i18n.t("Select an Image")}`, i.addEventListener("click", () => {
      this.onSelectFile();
    }), i;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(i) {
    for (const a in S) Object.prototype.hasOwnProperty.call(S, a) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${S[a]}`, i === S[a]);
  }
};
function D(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var H = {
  exports: {}
};
(function(C, i) {
  (function(a, s) {
    C.exports = s();
  })(window, function() {
    return function(a) {
      var s = {};
      function r(e) {
        if (s[e]) return s[e].exports;
        var o = s[e] = {
          i: e,
          l: false,
          exports: {}
        };
        return a[e].call(o.exports, o, o.exports, r), o.l = true, o.exports;
      }
      return r.m = a, r.c = s, r.d = function(e, o, d) {
        r.o(e, o) || Object.defineProperty(e, o, {
          enumerable: true,
          get: d
        });
      }, r.r = function(e) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(e, "__esModule", {
          value: true
        });
      }, r.t = function(e, o) {
        if (1 & o && (e = r(e)), 8 & o || 4 & o && typeof e == "object" && e && e.__esModule) return e;
        var d = /* @__PURE__ */ Object.create(null);
        if (r.r(d), Object.defineProperty(d, "default", {
          enumerable: true,
          value: e
        }), 2 & o && typeof e != "string") for (var v in e) r.d(d, v, function(l) {
          return e[l];
        }.bind(null, v));
        return d;
      }, r.n = function(e) {
        var o = e && e.__esModule ? function() {
          return e.default;
        } : function() {
          return e;
        };
        return r.d(o, "a", o), o;
      }, r.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o);
      }, r.p = "", r(r.s = 3);
    }([function(a, s) {
      var r;
      r = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch {
        typeof window == "object" && (r = window);
      }
      a.exports = r;
    }, function(a, s, r) {
      (function(e) {
        var o = r(2), d = setTimeout;
        function v() {
        }
        function l(n) {
          if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
          if (typeof n != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], t(n, this);
        }
        function f(n, c) {
          for (; n._state === 3; ) n = n._value;
          n._state !== 0 ? (n._handled = true, l._immediateFn(function() {
            var u = n._state === 1 ? c.onFulfilled : c.onRejected;
            if (u !== null) {
              var g;
              try {
                g = u(n._value);
              } catch (m) {
                return void y(c.promise, m);
              }
              p(c.promise, g);
            } else (n._state === 1 ? p : y)(c.promise, n._value);
          })) : n._deferreds.push(c);
        }
        function p(n, c) {
          try {
            if (c === n) throw new TypeError("A promise cannot be resolved with itself.");
            if (c && (typeof c == "object" || typeof c == "function")) {
              var u = c.then;
              if (c instanceof l) return n._state = 3, n._value = c, void w(n);
              if (typeof u == "function") return void t((g = u, m = c, function() {
                g.apply(m, arguments);
              }), n);
            }
            n._state = 1, n._value = c, w(n);
          } catch (h) {
            y(n, h);
          }
          var g, m;
        }
        function y(n, c) {
          n._state = 2, n._value = c, w(n);
        }
        function w(n) {
          n._state === 2 && n._deferreds.length === 0 && l._immediateFn(function() {
            n._handled || l._unhandledRejectionFn(n._value);
          });
          for (var c = 0, u = n._deferreds.length; c < u; c++) f(n, n._deferreds[c]);
          n._deferreds = null;
        }
        function b(n, c, u) {
          this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof c == "function" ? c : null, this.promise = u;
        }
        function t(n, c) {
          var u = false;
          try {
            n(function(g) {
              u || (u = true, p(c, g));
            }, function(g) {
              u || (u = true, y(c, g));
            });
          } catch (g) {
            if (u) return;
            u = true, y(c, g);
          }
        }
        l.prototype.catch = function(n) {
          return this.then(null, n);
        }, l.prototype.then = function(n, c) {
          var u = new this.constructor(v);
          return f(this, new b(n, c, u)), u;
        }, l.prototype.finally = o.a, l.all = function(n) {
          return new l(function(c, u) {
            if (!n || n.length === void 0) throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(n);
            if (g.length === 0) return c([]);
            var m = g.length;
            function h(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var j = E.then;
                  if (typeof j == "function") return void j.call(E, function(F) {
                    h(T, F);
                  }, u);
                }
                g[T] = E, --m == 0 && c(g);
              } catch (F) {
                u(F);
              }
            }
            for (var k = 0; k < g.length; k++) h(k, g[k]);
          });
        }, l.resolve = function(n) {
          return n && typeof n == "object" && n.constructor === l ? n : new l(function(c) {
            c(n);
          });
        }, l.reject = function(n) {
          return new l(function(c, u) {
            u(n);
          });
        }, l.race = function(n) {
          return new l(function(c, u) {
            for (var g = 0, m = n.length; g < m; g++) n[g].then(c, u);
          });
        }, l._immediateFn = typeof e == "function" && function(n) {
          e(n);
        } || function(n) {
          d(n, 0);
        }, l._unhandledRejectionFn = function(n) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", n);
        }, s.a = l;
      }).call(this, r(5).setImmediate);
    }, function(a, s, r) {
      s.a = function(e) {
        var o = this.constructor;
        return this.then(function(d) {
          return o.resolve(e()).then(function() {
            return d;
          });
        }, function(d) {
          return o.resolve(e()).then(function() {
            return o.reject(d);
          });
        });
      };
    }, function(a, s, r) {
      function e(t) {
        return (e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        })(t);
      }
      r(4);
      var o, d, v, l, f, p, y, w = r(8), b = (d = function(t) {
        return new Promise(function(n, c) {
          t = l(t), (t = f(t)).beforeSend && t.beforeSend();
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            u.setRequestHeader(m, h);
          });
          var g = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, false), u.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, false), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(u.getAllResponseHeaders()), k = {
                body: m,
                code: u.status,
                headers: h
              };
              y(u.status) ? n(k) : c(k);
            }
          }, u.send(t.data);
        });
      }, v = function(t) {
        return t.method = "POST", d(t);
      }, l = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && e(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(o).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(n) {
        }, t.beforeSend = t.beforeSend || function(n) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || false, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var n = p(t.data, o.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + n : t.url + "?" + n;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var c = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || o.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (c = o.FORM), t.data = p(t.data, c), c !== b.contentType.FORM && (t.headers["content-type"] = c);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case o.URLENCODED:
            return w.urlEncode(t);
          case o.JSON:
            return w.jsonEncode(t);
          case o.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, {
        contentType: o = {
          URLENCODED: "application/x-www-form-urlencoded; charset=utf-8",
          FORM: "multipart/form-data",
          JSON: "application/json; charset=utf-8"
        },
        request: d,
        get: function(t) {
          return t.method = "GET", d(t);
        },
        post: v,
        transport: function(t) {
          return t = l(t), w.selectFiles(t).then(function(n) {
            for (var c = new FormData(), u = 0; u < n.length; u++) c.append(t.fieldName, n[u], n[u].name);
            w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
              var h = t.data[m];
              c.append(m, h);
            });
            var g = t.beforeSend;
            return t.beforeSend = function() {
              return g(n);
            }, t.data = c, v(t);
          });
        },
        selectFiles: function(t) {
          return delete (t = l(t)).beforeSend, w.selectFiles(t);
        }
      });
      a.exports = b;
    }, function(a, s, r) {
      r.r(s);
      var e = r(1);
      window.Promise = window.Promise || e.a;
    }, function(a, s, r) {
      (function(e) {
        var o = e !== void 0 && e || typeof self < "u" && self || window, d = Function.prototype.apply;
        function v(l, f) {
          this._id = l, this._clearFn = f;
        }
        s.setTimeout = function() {
          return new v(d.call(setTimeout, o, arguments), clearTimeout);
        }, s.setInterval = function() {
          return new v(d.call(setInterval, o, arguments), clearInterval);
        }, s.clearTimeout = s.clearInterval = function(l) {
          l && l.close();
        }, v.prototype.unref = v.prototype.ref = function() {
        }, v.prototype.close = function() {
          this._clearFn.call(o, this._id);
        }, s.enroll = function(l, f) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = f;
        }, s.unenroll = function(l) {
          clearTimeout(l._idleTimeoutId), l._idleTimeout = -1;
        }, s._unrefActive = s.active = function(l) {
          clearTimeout(l._idleTimeoutId);
          var f = l._idleTimeout;
          f >= 0 && (l._idleTimeoutId = setTimeout(function() {
            l._onTimeout && l._onTimeout();
          }, f));
        }, r(6), s.setImmediate = typeof self < "u" && self.setImmediate || e !== void 0 && e.setImmediate || this && this.setImmediate, s.clearImmediate = typeof self < "u" && self.clearImmediate || e !== void 0 && e.clearImmediate || this && this.clearImmediate;
      }).call(this, r(0));
    }, function(a, s, r) {
      (function(e, o) {
        (function(d, v) {
          if (!d.setImmediate) {
            var l, f, p, y, w, b = 1, t = {}, n = false, c = d.document, u = Object.getPrototypeOf && Object.getPrototypeOf(d);
            u = u && u.setTimeout ? u : d, {}.toString.call(d.process) === "[object process]" ? l = function(h) {
              o.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = true, k = d.onmessage;
                return d.onmessage = function() {
                  h = false;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, false) : d.attachEvent("onmessage", w), l = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, l = function(h) {
              p.port2.postMessage(h);
            }) : c && "onreadystatechange" in c.createElement("script") ? (f = c.documentElement, l = function(h) {
              var k = c.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : l = function(h) {
              setTimeout(m, 0, h);
            }, u.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++) k[T] = arguments[T + 1];
              var E = {
                callback: h,
                args: k
              };
              return t[b] = E, l(b), b++;
            }, u.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (n) setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                n = true;
                try {
                  (function(T) {
                    var E = T.callback, j = T.args;
                    switch (j.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(j[0]);
                        break;
                      case 2:
                        E(j[0], j[1]);
                        break;
                      case 3:
                        E(j[0], j[1], j[2]);
                        break;
                      default:
                        E.apply(v, j);
                    }
                  })(k);
                } finally {
                  g(h), n = false;
                }
              }
            }
          }
        })(typeof self > "u" ? e === void 0 ? this : e : self);
      }).call(this, r(0), r(7));
    }, function(a, s) {
      var r, e, o = a.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function v() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(u) {
        if (r === setTimeout) return setTimeout(u, 0);
        if ((r === d || !r) && setTimeout) return r = setTimeout, setTimeout(u, 0);
        try {
          return r(u, 0);
        } catch {
          try {
            return r.call(null, u, 0);
          } catch {
            return r.call(this, u, 0);
          }
        }
      }
      (function() {
        try {
          r = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          r = d;
        }
        try {
          e = typeof clearTimeout == "function" ? clearTimeout : v;
        } catch {
          e = v;
        }
      })();
      var f, p = [], y = false, w = -1;
      function b() {
        y && f && (y = false, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var u = l(b);
          y = true;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; ) f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = false, function(m) {
            if (e === clearTimeout) return clearTimeout(m);
            if ((e === v || !e) && clearTimeout) return e = clearTimeout, clearTimeout(m);
            try {
              e(m);
            } catch {
              try {
                return e.call(null, m);
              } catch {
                return e.call(this, m);
              }
            }
          }(u);
        }
      }
      function n(u, g) {
        this.fun = u, this.array = g;
      }
      function c() {
      }
      o.nextTick = function(u) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
        p.push(new n(u, g)), p.length !== 1 || y || l(t);
      }, n.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, o.title = "browser", o.browser = true, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = c, o.addListener = c, o.once = c, o.off = c, o.removeListener = c, o.removeAllListeners = c, o.emit = c, o.prependListener = c, o.prependOnceListener = c, o.listeners = function(u) {
        return [];
      }, o.binding = function(u) {
        throw new Error("process.binding is not supported");
      }, o.cwd = function() {
        return "/";
      }, o.chdir = function(u) {
        throw new Error("process.chdir is not supported");
      }, o.umask = function() {
        return 0;
      };
    }, function(a, s, r) {
      function e(d, v) {
        for (var l = 0; l < v.length; l++) {
          var f = v[l];
          f.enumerable = f.enumerable || false, f.configurable = true, "value" in f && (f.writable = true), Object.defineProperty(d, f.key, f);
        }
      }
      var o = r(9);
      a.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var v, l, f;
        return v = d, f = [{
          key: "urlEncode",
          value: function(p) {
            return o(p);
          }
        }, {
          key: "jsonEncode",
          value: function(p) {
            return JSON.stringify(p);
          }
        }, {
          key: "formEncode",
          value: function(p) {
            if (this.isFormData(p)) return p;
            if (this.isFormElement(p)) return new FormData(p);
            if (this.isObject(p)) {
              var y = new FormData();
              return Object.keys(p).forEach(function(w) {
                var b = p[w];
                y.append(w, b);
              }), y;
            }
            throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
          }
        }, {
          key: "isObject",
          value: function(p) {
            return Object.prototype.toString.call(p) === "[object Object]";
          }
        }, {
          key: "isFormData",
          value: function(p) {
            return p instanceof FormData;
          }
        }, {
          key: "isFormElement",
          value: function(p) {
            return p instanceof HTMLFormElement;
          }
        }, {
          key: "selectFiles",
          value: function() {
            var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return new Promise(function(y, w) {
              var b = document.createElement("INPUT");
              b.type = "file", p.multiple && b.setAttribute("multiple", "multiple"), p.accept && b.setAttribute("accept", p.accept), b.style.display = "none", document.body.appendChild(b), b.addEventListener("change", function(t) {
                var n = t.target.files;
                y(n), document.body.removeChild(b);
              }, false), b.click();
            });
          }
        }, {
          key: "parseHeaders",
          value: function(p) {
            var y = p.trim().split(/[\r\n]+/), w = {};
            return y.forEach(function(b) {
              var t = b.split(": "), n = t.shift(), c = t.join(": ");
              n && (w[n] = c);
            }), w;
          }
        }], (l = null) && e(v.prototype, l), f && e(v, f), d;
      }();
    }, function(a, s) {
      var r = function(o) {
        return encodeURIComponent(o).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, e = function(o, d, v, l) {
        return d = d || null, v = v || "&", l = l || null, o ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++) f[y] && p.push(f[y]);
          return p;
        }(Object.keys(o).map(function(f) {
          var p, y, w = f;
          if (l && (w = l + "[" + w + "]"), typeof o[f] == "object" && o[f] !== null) p = e(o[f], null, v, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var b = o[f];
            b = (b = (b = (b = b === true ? "1" : b) === false ? "0" : b) === 0 ? "0" : b) || "", p = r(w) + "=" + r(b);
          }
          return p;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      a.exports = e;
    }]);
  });
})(H);
var q = H.exports;
var _ = D(q);
function O(C) {
  return C !== void 0 && typeof C.then == "function";
}
var A = class {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({
    config: i,
    onUpload: a,
    onError: s
  }) {
    this.config = i, this.onUpload = a, this.onError = s;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({
    onPreview: i
  }) {
    const a = function(r) {
      const e = new FileReader();
      e.readAsDataURL(r), e.onload = (o) => {
        i(o.target.result);
      };
    };
    let s;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const r = this.config.uploader.uploadByFile;
      s = _.selectFiles({
        accept: this.config.types ?? "image/*"
      }).then((e) => {
        a(e[0]);
        const o = r(e[0]);
        return O(o) || console.warn("Custom uploader method uploadByFile should return a Promise"), o;
      });
    } else s = _.transport({
      url: this.config.endpoints.byFile,
      data: this.config.additionalRequestData,
      accept: this.config.types ?? "image/*",
      headers: this.config.additionalRequestHeaders,
      beforeSend: (r) => {
        a(r[0]);
      },
      fieldName: this.config.field ?? "image"
    }).then((r) => r.body);
    s.then((r) => {
      this.onUpload(r);
    }).catch((r) => {
      this.onError(r);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(i) {
    let a;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (a = this.config.uploader.uploadByUrl(i), O(a) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : a = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: i
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((s) => s.body), a.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(i, {
    onPreview: a
  }) {
    const s = new FileReader();
    s.readAsDataURL(i), s.onload = (e) => {
      a(e.target.result);
    };
    let r;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") r = this.config.uploader.uploadByFile(i), O(r) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const e = new FormData();
      e.append(this.config.field ?? "image", i), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([o, d]) => {
        e.append(o, d);
      }), r = _.post({
        url: this.config.endpoints.byFile,
        data: e,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((o) => o.body);
    }
    r.then((e) => {
      this.onUpload(e);
    }).catch((e) => {
      this.onError(e);
    });
  }
};
var P = class _P {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({
    data: i,
    config: a,
    api: s,
    readOnly: r,
    block: e
  }) {
    this.api = s, this.block = e, this.config = {
      endpoints: a.endpoints,
      additionalRequestData: a.additionalRequestData,
      additionalRequestHeaders: a.additionalRequestHeaders,
      field: a.field,
      types: a.types,
      captionPlaceholder: this.api.i18n.t(a.captionPlaceholder ?? "Caption"),
      buttonContent: a.buttonContent,
      uploader: a.uploader,
      actions: a.actions,
      features: a.features || {}
    }, this.uploader = new A({
      config: this.config,
      onUpload: (o) => this.onUpload(o),
      onError: (o) => this.uploadingFailed(o)
    }), this.ui = new U({
      api: s,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (o) => {
            this.ui.showPreloader(o);
          }
        });
      },
      readOnly: r
    }), this._data = {
      caption: "",
      withBorder: false,
      withBackground: false,
      stretched: false,
      file: {
        url: ""
      }
    }, this.data = i;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return true;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [{
      name: "withBorder",
      icon: I,
      title: "With border",
      toggle: true
    }, {
      name: "stretched",
      icon: x,
      title: "Stretch image",
      toggle: true
    }, {
      name: "withBackground",
      icon: R,
      title: "With background",
      toggle: true
    }];
  }
  /**
   * Renders Block content
   */
  render() {
    var i, a, s;
    return (((i = this.config.features) == null ? void 0 : i.caption) === true || ((a = this.config.features) == null ? void 0 : a.caption) === void 0 || ((s = this.config.features) == null ? void 0 : s.caption) === "optional" && this.data.caption) && this.ui.applyTune("caption", true), this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(i) {
    return !!i.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const i = this.ui.nodes.caption;
    return this._data.caption = i.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    var r;
    const i = _P.tunes.concat(this.config.actions || []), a = {
      border: "withBorder",
      background: "withBackground",
      stretch: "stretched",
      caption: "caption"
    };
    return ((r = this.config.features) == null ? void 0 : r.caption) === "optional" && i.push({
      name: "caption",
      icon: B,
      title: "With caption",
      toggle: true
    }), i.filter((e) => {
      var d, v;
      const o = Object.keys(a).find((l) => a[l] === e.name);
      return o === "caption" ? ((d = this.config.features) == null ? void 0 : d.caption) !== false : o == null || ((v = this.config.features) == null ? void 0 : v[o]) !== false;
    }).map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(e.title),
      name: e.name,
      toggle: e.toggle,
      isActive: this.data[e.name],
      onActivate: () => {
        if (typeof e.action == "function") {
          e.action(e.name);
          return;
        }
        this.tuneToggled(e.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [{
        img: {
          src: true
        }
      }],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  onPaste(i) {
    return __async(this, null, function* () {
      switch (i.type) {
        case "tag": {
          const a = i.detail.data;
          if (/^blob:/.test(a.src)) {
            const r = yield (yield fetch(a.src)).blob();
            this.uploadFile(r);
            break;
          }
          this.uploadUrl(a.src);
          break;
        }
        case "pattern": {
          const a = i.detail.data;
          this.uploadUrl(a);
          break;
        }
        case "file": {
          const a = i.detail.file;
          this.uploadFile(a);
          break;
        }
      }
    });
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(i) {
    this.image = i.file, this._data.caption = i.caption || "", this.ui.fillCaption(this._data.caption), _P.tunes.forEach(({
      name: a
    }) => {
      const s = typeof i[a] < "u" ? i[a] === true || i[a] === "true" : false;
      this.setTune(a, s);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(i) {
    this._data.file = i || {
      url: ""
    }, i && i.url && this.ui.fillImage(i.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(i) {
    i.success && i.file ? this.image = i.file : this.uploadingFailed("incorrect response: " + JSON.stringify(i));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(i) {
    console.log("Image Tool: uploading failed because of", i), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(i) {
    this.setTune(i, !this._data[i]), i === "caption" && !this._data[i] && (this._data.caption = "", this.ui.fillCaption(""));
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(i, a) {
    this._data[i] = a, this.ui.applyTune(i, a), i === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = a;
    }).catch((s) => {
      console.error(s);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(i) {
    this.uploader.uploadByFile(i, {
      onPreview: (a) => {
        this.ui.showPreloader(a);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(i) {
    this.ui.showPreloader(i), this.uploader.uploadByUrl(i);
  }
};
export {
  P as default
};
/*! Bundled license information:

@editorjs/image/dist/image.mjs:
  (**
   * Image Tool for the Editor.js
   * @author CodeX <team@codex.so>
   * @license MIT
   * @see {@link https://github.com/editor-js/image}
   *
   * To developers.
   * To simplify Tool structure, we split it to 4 parts:
   *  1) index.ts — main Tool's interface, public API and methods for working with data
   *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
   *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
   *
   * For debug purposes there is a testing server
   * that can save uploaded files and return a Response {@link UploadResponseFormat}
   *
   *       $ node dev/server.js
   *
   * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
   *
   * image: {
   *   class: ImageTool,
   *   config: {
   *     endpoints: {
   *       byFile: 'http://localhost:8008/uploadFile',
   *       byUrl: 'http://localhost:8008/fetchUrl',
   *     }
   *   },
   * },
   *)
*/
//# sourceMappingURL=@editorjs_image.js.map
