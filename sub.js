!(function(e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 9));
})([
  function(e, t, n) {
    var i;
    /*! layer mobile-v2.0 弹层组件移动版 License LGPL http://layer.layui.com/mobile By 贤心 */ !(function(
      r
    ) {
      "use strict";
      var o = document,
        s = "getElementsByClassName",
        l = function(e) {
          return o.querySelectorAll(e);
        },
        a = { type: 0, shade: !0, shadeClose: !0, fixed: !0, anim: "scale" },
        c = {
          extend: function(e) {
            var t = JSON.parse(JSON.stringify(a));
            for (var n in e) t[n] = e[n];
            return t;
          },
          timer: {},
          end: {},
          touch: function(e, t) {
            e.addEventListener(
              "click",
              function(e) {
                t.call(this, e);
              },
              !1
            );
          }
        },
        d = 0,
        u = ["layui-m-layer"],
        g = function(e) {
          (this.config = c.extend(e)), this.view();
        };
      (g.prototype.view = function() {
        var e = this,
          t = e.config,
          n = o.createElement("div");
        (e.id = n.id = u[0] + d),
          n.setAttribute("class", u[0] + " " + u[0] + (t.type || 0)),
          n.setAttribute("index", d);
        var i = (function() {
            var e = "object" == typeof t.title;
            return t.title
              ? '<h3 style="' +
                  (e ? t.title[1] : "") +
                  '">' +
                  (e ? t.title[0] : t.title) +
                  "</h3>"
              : "";
          })(),
          r = (function() {
            "string" == typeof t.btn && (t.btn = [t.btn]);
            var e,
              n = (t.btn || []).length;
            return 0 !== n && t.btn
              ? ((e = '<span yes type="1">' + t.btn[0] + "</span>"),
                2 === n &&
                  (e = '<span no type="0">' + t.btn[1] + "</span>" + e),
                '<div class="layui-m-layerbtn">' + e + "</div>")
              : "";
          })();
        if (
          (t.fixed ||
            ((t.top = t.hasOwnProperty("top") ? t.top : 100),
            (t.style = t.style || ""),
            (t.style += " top:" + (o.body.scrollTop + t.top) + "px")),
          2 === t.type &&
            (t.content =
              '<i></i><i class="layui-m-layerload"></i><i></i><p>' +
              (t.content || "") +
              "</p>"),
          t.skin && (t.anim = "up"),
          "msg" === t.skin && (t.shade = !1),
          (n.innerHTML =
            (t.shade
              ? "<div " +
                ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") +
                ' class="layui-m-layershade"></div>'
              : "") +
            '<div class="layui-m-layermain" ' +
            (t.fixed ? "" : 'style="position:static;"') +
            '><div class="layui-m-layersection"><div class="layui-m-layerchild ' +
            (t.skin ? "layui-m-layer-" + t.skin + " " : "") +
            (t.className ? t.className : "") +
            " " +
            (t.anim ? "layui-m-anim-" + t.anim : "") +
            '" ' +
            (t.style ? 'style="' + t.style + '"' : "") +
            ">" +
            i +
            '<div class="layui-m-layercont">' +
            t.content +
            "</div>" +
            r +
            "</div></div></div>"),
          !t.type || 2 === t.type)
        ) {
          var a = o[s](u[0] + t.type);
          a.length >= 1 && layer.close(a[0].getAttribute("index"));
        }
        document.body.appendChild(n);
        var c = (e.elem = l("#" + e.id)[0]);
        t.success && t.success(c), (e.index = d++), e.action(t, c);
      }),
        (g.prototype.action = function(e, t) {
          var n = this;
          e.time &&
            (c.timer[n.index] = setTimeout(function() {
              layer.close(n.index);
            }, 1e3 * e.time));
          var i = function() {
            0 == this.getAttribute("type")
              ? (e.no && e.no(), layer.close(n.index))
              : e.yes
              ? e.yes(n.index)
              : layer.close(n.index);
          };
          if (e.btn)
            for (
              var r = t[s]("layui-m-layerbtn")[0].children, o = r.length, l = 0;
              o > l;
              l++
            )
              c.touch(r[l], i);
          if (e.shade && e.shadeClose) {
            var a = t[s]("layui-m-layershade")[0];
            c.touch(a, function() {
              layer.close(n.index, e.end);
            });
          }
          e.end && (c.end[n.index] = e.end);
        }),
        (r.layer = {
          v: "2.0",
          index: d,
          open: function(e) {
            return new g(e || {}).index;
          },
          close: function(e) {
            var t = l("#" + u[0] + e)[0];
            t &&
              ((t.innerHTML = ""),
              o.body.removeChild(t),
              clearTimeout(c.timer[e]),
              delete c.timer[e],
              "function" == typeof c.end[e] && c.end[e](),
              delete c.end[e]);
          },
          closeAll: function() {
            for (var e = o[s](u[0]), t = 0, n = e.length; n > t; t++)
              layer.close(0 | e[0].getAttribute("index"));
          }
        }),
        void 0 ===
          (i = function() {
            return layer;
          }.call(t, n, t, e)) || (e.exports = i);
    })(window);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.INTERPRETER_API = t.DISTILLER_WHITE_LIST = t.TRS_TOKEN = t.PUBLIC_SENTRY_URL = t.SUB_TYPE_l = t.DEFAULT_SUB_TYPE = t.SUB_TYPE_TGT = t.SUB_TYPE_ORG = t.SUB_TYPE_BIL = t.LANG_L = t.DEFAULT_LANG = t.JA = t.EN = t.ZH = void 0);
    (t.INTERPRETER_API = "https://api.interpreter.caiyunai.com/"),
      (t.DISTILLER_WHITE_LIST = [
        "popsci.com",
        "sciencealert.com",
        "livescience.com",
        "sciencedaily.com",
        "aeon.co",
        "thoughtco.com",
        "pixiv",
        "verywellmind.com",
        "wired.com",
        "buzzfeed.com",
        "brightside.me",
        "boredpanda.com",
        "iflscience.com",
        "archiveofourown.org"
      ]),
      (t.TRS_TOKEN = "lqkr1tfixq1wa9kmj9po"),
      (t.PUBLIC_SENTRY_URL =
        "http://c49231b0334e4624b8941767b8f6bfa4@sentry.in.caiyunapp.com/22"),
      (t.SUB_TYPE_l = ["bilingual", "original", "target"]),
      (t.DEFAULT_SUB_TYPE = "bilingual"),
      (t.SUB_TYPE_TGT = "target"),
      (t.SUB_TYPE_ORG = "original"),
      (t.SUB_TYPE_BIL = "bilingual"),
      (t.LANG_L = ["zh", "en", "ja-JP"]),
      (t.DEFAULT_LANG = "en"),
      (t.JA = "ja-JP"),
      (t.EN = "en"),
      (t.ZH = "zh");
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    var i = n(10),
      r = n(11),
      o = n(1),
      s = (n(14), n(0)),
      l = document.createElement("div"),
      a = 0.25;
    (l.id = "substr"), l.classList.add(`cyxy-${l.id}`);
    var c = document.createElement("div");
    c.style.cssText = "\n    margin-top: 12px;\n    width: 100%;\n";
    var d = document.createElement("img");
    (d.id = "logo"),
      (d.src = chrome.extension.getURL("images/logo.png")),
      (d.style.cssText =
        "\n    width: 21px !important;\n    height: 21px !important;\n    border-radius: 50%;\n    float: left;\n    min-width: unset !important;\n"),
      c.appendChild(d);
    var u = document.createElement("a");
    (u.id = "cy_link"),
      u.classList.add("menu_ele"),
      (u.style.cssText =
        "\n    font-family: PingFangSC-Regular;\n    font-size: 14px;\n    float: left;\n    margin-left: 10px;\n    color: white;\n"),
      (u.innerHTML = chrome.i18n.getMessage("appNameAbbr")),
      c.appendChild(u);
    var g = document.createElement("div");
    (g.id = "vh_div"),
      g.classList.add("menu_ele"),
      (g.style.cssText =
        "\n    margin: 10px;\n    display: inline;\n    margin-top: 4px !important;\n");
    var p = document.createElement("hr");
    (p.style.cssText =
      "\n    border: none;\n    border-left: 2px solid #FFFFFF;\n    height: 13px;\n    width: 2px;\n    color: #FFFFFF;\n    float: left;\n    margin-left: 14px;\n    margin-top: 4px;\n    display: inline;\n    margin-bottom:-10px;\n"),
      g.appendChild(p),
      c.appendChild(g);
    var f = document.createElement("div");
    (f.id = "lang_menu"),
      (f.style.cssText = "\n    margin-left: -5px;\n    display: inline;\n");
    var m = document.createElement("div");
    (m.id = "lang_radio"),
      (m.style.display = "inline"),
      (document.head.appendChild(document.createElement("style")).innerHTML =
        "\n    .lang_radio {\n        display: none;\n    }\n    .lang_radio_img {\n        vertical-align: unset !important;\n        width: 13px !important;\n        height: 13px !important;\n        margin-top: 0px !important;\n        cursor: pointer;\n        margin-right: 3px !important;\n        margin-top: 4px !important;\n        display: inline;\n        min-height: unset !important;\n        min-width: unset !important;\n    }\n");
    var h = chrome.extension.getURL("images/grey_radio.png"),
      y = chrome.extension.getURL("images/green_radio.png");
    function b(e, t, n) {
      var i = document.createElement("input");
      (i.id = `${e}_radio`),
        (i.type = "radio"),
        (i.name = "lang"),
        (i.value = e),
        i.classList.add("lang_radio"),
        t && (i.checked = "true"),
        m.appendChild(i);
      let r = document.createElement("img");
      r.classList.add("menu_ele"),
        r.classList.add("lang_radio_img"),
        (r.id = `${e}_radio_img`),
        (r.style.filter = "brightness(0) invert(1)"),
        (r.src = h),
        r.addEventListener("click", function(e) {
          let t = document.getElementsByClassName("lang_radio_img");
          for (let e of t)
            (e.style.filter = "brightness(0) invert(1)"), (e.src = h);
          (r.style.filter = "none"),
            (r.src = y),
            (i.checked = !0),
            (function() {
              if (!K || (K.currentTime > 0 && !K.ended && K.readyState > 2)) {
                Q = $("input[name='lang']:checked")[0].value;
                let e = document.getElementById("toggle_btn");
                chrome.runtime.sendMessage(
                  { type: "recopen", lang: Q },
                  function(e) {
                    se("requestingAudioMsg");
                  }
                ),
                  (e.innerHTML = chrome.i18n.getMessage("stopVideoTransBtn")),
                  K && K.paused && K.play();
              }
            })();
        }),
        m.appendChild(r);
      let o = document.createElement("label");
      (o.for = i.id),
        (o.id = `${e}_label`),
        o.classList.add("menu_ele"),
        (o.innerHTML = ` ${n}`),
        (o.style.cssText =
          "\n        font-family: PingFangSC-Regular;\n        font-size: 14px;\n        color: #FFFFFF;\n        text-align: right;\n        maigin-left: 12px;\n        margin-right: 12px\n    "),
        m.appendChild(o);
    }
    var v = chrome.i18n.getMessage("transZh2En"),
      _ = chrome.i18n.getMessage("transEn2Zh"),
      x = chrome.i18n.getMessage("transJp2Zh"),
      w = chrome.i18n.getMessage("transZh2EnAbbr"),
      T = chrome.i18n.getMessage("transEn2ZhAbbr"),
      E = chrome.i18n.getMessage("transJp2ZhAbbr"),
      L = chrome.i18n.getMessage("showOrg"),
      S = chrome.i18n.getMessage("showTgt"),
      M = chrome.i18n.getMessage("showBil"),
      k = chrome.i18n.getMessage("showOrgAbbr"),
      B = chrome.i18n.getMessage("showTgtAbbr"),
      I = chrome.i18n.getMessage("showBilAbbr"),
      A = {};
    (A[o.SUB_TYPE_ORG] = { text: L, textAbbr: k }),
      (A[o.SUB_TYPE_TGT] = { text: S, textAbbr: B }),
      (A[o.SUB_TYPE_BIL] = { text: M, textAbbr: I });
    var F = 885;
    window.innerWidth < F
      ? (b(o.ZH, !1, w), b(o.EN, !1, T), b(o.JA, !1, E))
      : (b(o.ZH, !1, v), b(o.EN, !1, _), b(o.JA, !1, x)),
      f.appendChild(m);
    var C = document.createElement("button");
    C.classList.add("Btn"),
      C.classList.add("menu_ele"),
      (C.id = "toggle_btn"),
      (C.innerHTML = chrome.i18n.getMessage("startVideoTransBtn")),
      (C.style.cssText =
        "\n    background-color: rgba(0, 0, 0, 0);\n    color: #FFFFFF;\n    border: 1px solid #FFFFFF;\n    border-radius: 3px;\n    display: inline-block;\n    height: 1.6rem !important;\n    margin-left: 4px;\n    padding: 0rem 0.3rem !important;\n    font-size: 0.8rem;\n    cursor: pointer;\n"),
      f.appendChild(C);
    var P = C.cloneNode(!0);
    (P.classList = "menu_ele"),
      (P.style.marginLeft = "12px"),
      (P.id = "switch_track_btn"),
      Fe(P, optionSubType),
      P.addEventListener("click", function() {
        let e = document.getElementById(P.id);
        e.value == o.SUB_TYPE_BIL
          ? Fe(e, o.SUB_TYPE_ORG)
          : e.value == o.SUB_TYPE_ORG
          ? Fe(e, o.SUB_TYPE_TGT)
          : Fe(e, o.SUB_TYPE_BIL);
        let t = e.value;
        chrome.runtime.sendMessage({ type: "switchTrack", newTrack: t });
      }),
      (P.onclick = function() {
        Te();
      }),
      f.appendChild(P),
      c.appendChild(f);
    var H = document.createElement("button"),
      N = "&#9776;",
      O = "◃";
    (H.style.cssText =
      "\n    color: white;\n    display: inline;\n    margin-right: -3px;\n    background-color: rgba(0, 0, 0, 0);\n    color: #FFFFFF;\n    border: none;\n    height: 2rem;\n    margin-left: 4px;\n    margin-top: -4px;\n    padding: 4px;\n    cursor: pointer;\n    box-shadow: none;\n"),
      (H.innerHTML = O),
      (H.id = "rwd_btn"),
      (H.title = chrome.i18n.getMessage("hideRwdBtn")),
      c.appendChild(H),
      l.appendChild(c);
    var U = document.createElement("div"),
      R = "2",
      W = 480,
      Y = 30;
    window.innerHTML < 480 && ((R = "1.5"), (Y = 20)),
      (U.style.cssText = `\n    font-size: ${R}rem;\n    display: block;\n    line-height: 34px;\n`);
    var z = U.cloneNode(!0);
    U.classList.add("reclogOrg"),
      (U.innerHTML = chrome.i18n.getMessage("clickToStartTrans"));
    var j = document.createElement("div");
    j.classList.add("reclog"),
      j.append(U),
      z.classList.add("reclogTgt"),
      j.append(z),
      l.appendChild(j),
      (l.title = chrome.i18n.getMessage("minimizeTransTip"));
    var Z = "90",
      J = `\n    position: fixed;\n    left: ${0.025 *
        window.innerWidth}px;\n    top: '';\n    bottom: 10px;\n    height: 11rem;\n    width: ${Z}%;\n    padding-left: 20px;\n    padding-right: 20px;\n    cursor: grab;\n    z-index: 300000;;\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    transform: scale(1);\n`,
      D =
        "\n    position: fixed;\n    width: 800px;\n    height: 250px;\n    left: '';\n    top: '';\n    right: -300px;\n    bottom: -80px;\n    cursor: pointer;\n    padding-left: 20px;\n    padding-right: 20px;\n    cursor: grab;\n    zIndex: 300000;;\n    background: rgba(0, 0, 0, 0.8);\n    color: white;\n    border: 10px solid white;\n";
    function G() {
      let e = document.querySelectorAll(".menu_ele"),
        t = document.getElementById("rwd_btn");
      (t.innerHTML = N),
        (t.style.height = "29px"),
        (t.title = chrome.i18n.getMessage("showRwdBtn"));
      for (let t of e) t.style.display = "none";
    }
    function q() {
      let e = document.querySelectorAll(".menu_ele"),
        t = document.getElementById("rwd_btn");
      (t.innerHTML = O),
        (t.style.height = "24px"),
        (t.title = chrome.i18n.getMessage("hideRwdBtn"));
      for (let t of e) t.style.display = "inline";
      window.innerWidth < F &&
        $("#cy_link")[0].style &&
        ($("#cy_link")[0].style.display = "none");
    }
    (l.style.cssText = J),
      l.classList.add("cyxy-no-trs"),
      l.addEventListener("dblclick", Ye);
    var V = null,
      X = null,
      K = document.querySelector("video:not(#rewardvideo)"),
      Q = optionLang,
      ee = De(Q),
      te = !1;
    function ne() {
      $("input[name='lang']:checked")[0] && (te ? Re() : We());
    }
    function ie() {
      return (
        chrome.runtime.sendMessage({ type: "recclose" }),
        (document.getElementById(
          "toggle_btn"
        ).innerHTML = chrome.i18n.getMessage("startVideoTransBtn")),
        (te = !1),
        se("closingAudioMsg"),
        (0, r.initialize_process)(),
        !0
      );
    }
    var re = !1;
    function oe(e, t, n) {
      if ("checkInserted" == e.type && "sub" == e.script) n({ exist: !0 });
      else if ("showSubtitle" == e.type)
        (re = e.showLangMenu),
          (i = e.lang),
          K
            ? Ue(i)
            : Ce < Pe
            ? (s.open({ content: Ne, skin: "msg", time: 5 }),
              window.setTimeout(Oe(i), 200))
            : (s.open({ content: He, skin: "msg", time: 5 }), Ue(i), (Ce = 0)),
          n({ type: "showSubtitle", status: "accept" });
      else if ("closeSubtitle" == e.type) je();
      else if ("reset" == e.type)
        (te = !1),
          (toggle_btn.innerHTML = chrome.i18n.getMessage("startVideoTransBtn")),
          se("closingAudioMsg");
      else if ("show_msg" == e.type) se(e.msg_str, !0);
      else if ("is_logout" == e.type) je();
      else if ("stopSubtitle" == e.type) Re();
      else if ((e.type = e.subtitle))
        if (Q == o.JA) {
          let t = (0, r.process_ja_result)(e.subtitle, Y);
          if ("ok" == t.status) Le(t.text), Me(t.trans);
          else {
            let e = document.querySelector(".reclogOrg");
            e && "" == e.innerHTML && se("openRecorder");
          }
        } else if (Q == o.EN) {
          let t = (0, r.process_en_result)(e.subtitle, Y);
          if ("ok" == t.status) Le(t.text), Me(t.trans);
          else {
            let e = document.querySelector(".reclogOrg");
            e && "" == e.innerHTML && se("openRecorder");
          }
        } else if ((Q = o.ZH)) {
          let t = (0, r.process_zh_result)(e.subtitle, Y);
          if ("ok" == t.status) Le(t.text), Me(t.trans);
          else {
            let e = document.querySelector(".reclogOrg");
            e && "" == e.innerHTML && se("openRecorder");
          }
        }
      var i;
    }
    function se(e, t) {
      document.getElementById(P.id);
      let n = t ? e : chrome.i18n.getMessage(e);
      P.value == o.SUB_TYPE_TGT ? Me(n) : Le(n);
    }
    chrome.runtime.onMessage.hasListener(oe) ||
      chrome.runtime.onMessage.addListener(oe);
    var le = "",
      ae = "",
      ce = null,
      de = null,
      ue = 5e3,
      ge = [],
      pe = [],
      fe = null,
      me = null,
      he = -1,
      ye = -1,
      be = null;
    function ve() {
      (ge = []),
        (pe = []),
        (fe = null),
        (me = null),
        (he = -1),
        (ye = -1),
        (be = window.setInterval(function() {
          ([fe, he] = xe("org", fe, he, function(e) {
            ke(e, le, ce, Q, ".reclogOrg");
          })),
            ([me, ye] = xe("tgt", me, ye, function(e) {
              ke(e, ae, de, ee, ".reclogTgt");
            }));
        }, 200));
    }
    function _e() {
      be && window.clearTimeout(be);
    }
    function xe(e, t, n, i) {
      let r = [];
      ("org" == e ? ge : pe).forEach(e => {
        r.push(e);
      });
      let o = r.length;
      if (0 == o) return [t, n];
      if (-1 == n) return i(r[(n = 0)]), [t, n];
      if (1 == o && 0 == n) return [t, n];
      {
        let s = ue / o;
        t || (t = new Date());
        let l = new Date() - t,
          a = l / s,
          c = r[n].length / Y;
        if (
          !(
            (a = a - Math.floor(a) > c + 0.2 ? Math.ceil(a) : Math.floor(a)) > n
          )
        )
          return [t, n];
        if ((n += 1) > o - 1) {
          let r = we(e, o);
          r ? ((n = 0), i(r)) : (n = -1), (t = new Date());
        } else if (l > ue) {
          let o = r[n];
          we(e, n), (n = 0), i(o), (t = new Date());
        } else i(r[n]);
        return [t, n];
      }
    }
    function we(e, t) {
      let n = [];
      return (
        "org" == e ? (ge.splice(0, t), (n = ge)) : (pe.splice(0, t), (n = pe)),
        n[0]
      );
    }
    function Te() {
      let e = document.getElementById(P.id),
        t = document.getElementsByClassName("reclogOrg")[0],
        n = document.getElementsByClassName("reclogTgt")[0];
      e.value == o.SUB_TYPE_BIL
        ? ((t.style.display = "block"), (n.style.display = "block"))
        : e.value == o.SUB_TYPE_ORG
        ? ((t.style.display = "block"), (n.style.display = "none"))
        : ((t.style.display = "none"), (n.style.display = "block"));
    }
    var Ee = "";
    function Le(e) {
      0 != e.length && Ee != e && (ge.push(e), (Ee = e));
    }
    var Se = "";
    function Me(e) {
      0 != e.length && Se != e && (pe.push(e), (Se = e));
    }
    function ke(e, t, n, i, r) {
      if (e == t) return;
      t = e;
      let o = document.querySelector(r);
      if (
        (o &&
          ((o.innerHTML = e),
          ".reclogOrg" == r ? (V = $e(V, o)) : (X = $e(X, o))),
        !document.fullscreenElement)
      )
        return;
      if (!K || K != document.fullscreenElement) return;
      let s = K.currentTime,
        l = s + 5;
      "showing" == n.mode &&
        t &&
        (function(e, t, n, i) {
          let r = de;
          if ((i == Q && (r = ce), r.activeCues))
            for (let e of r.activeCues) r.removeCue(e);
          let o = new VTTCue(e, t, n);
          i == Q
            ? "showing" != de.mode
              ? (o.line = 12)
              : (o.line = 10)
            : (o.line = 12),
            r.addCue(o);
        })(s, l, t, i);
    }
    function $e(e, t) {
      return (
        e && window.clearTimeout(e),
        window.setTimeout(() => {
          t && (t.innerHTML = "");
        }, 2e4)
      );
    }
    var Be = $(".reclog").clientWidth;
    window.onresize = function() {
      if (document.fullscreenElement)
        (Y =
          (0.45 * window.innerWidth) /
          (parseFloat(getComputedStyle(document.documentElement).fontSize) *
            R)),
          (function() {
            if (!K) return;
            let e = document.getElementById(P.id);
            e.value == o.SUB_TYPE_ORG
              ? ((ce.mode = "showing"), (de.mode = "hidden"))
              : e.value == o.SUB_TYPE_TGT
              ? ((de.mode = "showing"), (ce.mode = "hidden"))
              : ((de.mode = "showing"), (ce.mode = "showing")),
              (Ie = ce.mode),
              (Ae = de.mode),
              (K.textTracks.onchange = function() {
                "showing" == ce.mode &&
                  ce.mode != Ie &&
                  "showing" == Ae &&
                  "showing" != de.mode &&
                  (de.mode = "showing"),
                  "showing" == de.mode &&
                    de.mode != Ae &&
                    "showing" == Ie &&
                    "showing" != ce.mode &&
                    (ce.mode = "showing"),
                  (Ie = ce.mode),
                  (Ae = de.mode);
              });
          })(),
          (0, i.hideCyxyIcon)();
      else {
        !(function() {
          if (!K || !K.textTracks) return;
          let e = document.getElementById(P.id);
          if (e) {
            if ("showing" == ce.mode && "showing" != de.mode) {
              let t = L;
              window.innerWidth < F && (t = k),
                (e.innerHTML = t),
                (e.value = o.SUB_TYPE_ORG);
            } else if ("showing" != ce.mode && "showing" == de.mode) {
              let t = S;
              window.innerWidth < F && (t = B),
                (e.innerHTML = t),
                (e.value = o.SUB_TYPE_TGT);
            } else {
              let t = M;
              window.innerWidth < F && (t = I),
                (e.innerHTML = t),
                (e.value = o.SUB_TYPE_BIL);
            }
            for (let e of K.textTracks) e.mode = "disabled";
          }
        })(),
          (0, i.showCyxyIcon)();
        let e = document.querySelector("#substr");
        e &&
          ((e.style.left = `${0.025 * window.innerWidth}px`),
          (e.style.top = ""));
        let t = $(".reclog");
        if ((t[0] && (t = t[0]), t && e && "scale(1)" == e.style.transform)) {
          (Y =
            t.clientWidth /
            (parseFloat(getComputedStyle(document.documentElement).fontSize) *
              R)),
            (R = (t.clientWidth / Be) * R),
            (Be = t.clientWidth),
            R > "2" ? (R = "2") : R < "1.5" && (R = "1.5"),
            (t.style.fontSize = `${R}rem`);
          let e = `#${o.ZH}_label`,
            n = `#${o.EN}_label`,
            i = `#${o.JA}_label`,
            r = $(e),
            s = $(n),
            l = $(i);
          if (
            ($(e)[0] && ((r = $(e)[0]), (s = $(n)[0]), (l = $(i)[0])),
            window.innerWidth < F)
          ) {
            (r.innerHTML = ` ${w}`),
              (s.innerHTML = ` ${T}`),
              (l.innerHTML = ` ${E}`),
              $("#cy_link")[0].style &&
                ($("#cy_link")[0].style.display = "none");
            let e = document.querySelector("#substr");
            (e.style.left = `${0.003 * window.innerWidth}px`),
              (e.style.top = "");
          } else
            (r.innerHTML = ` ${v}`),
              (s.innerHTML = ` ${_}`),
              (l.innerHTML = ` ${x}`);
        }
      }
    };
    var Ie = "disable",
      Ae = "disable";
    function Fe(e, t) {
      let n = A[t].text,
        i = A[t].textAbbr;
      window.innerWidth < F && (n = i), (e.innerHTML = n), (e.value = t);
    }
    (w = chrome.i18n.getMessage("transZh2EnAbbr")),
      (T = chrome.i18n.getMessage("transEn2ZhAbbr")),
      (E = chrome.i18n.getMessage("transJp2ZhAbbr"));
    var Ce = 0,
      Pe = 0,
      He = chrome.i18n.getMessage("videoNotFound"),
      Ne = chrome.i18n.getMessage("searchingVideo");
    function Oe(e) {
      (K = document.querySelector("video:not(#rewardvideo)")) || Ce >= Pe
        ? (K && (K[0] && (K = K[0]), Ue(e)), window.clearTimeout(Oe))
        : (Ce += 1);
    }
    function Ue(e) {
      $("#habitlab_video_overlay").length > 0 &&
        $("#habitlab_video_overlay").remove(),
        je(() => {
          !(function(e) {
            document.body.appendChild(l),
              (te = !1),
              ($(`input[value=${e}]`)[0].checked = "true"),
              $(`#${e}_radio_img`).click(),
              (function() {
                let e = document.getElementById("substr"),
                  t = 0,
                  n = 0,
                  i = 0,
                  r = 0;
                function o(e) {
                  (e = e || window.event).preventDefault(),
                    (i = e.clientX),
                    (r = e.clientY),
                    (document.onmouseup = l),
                    (document.onmousemove = s);
                }
                function s(o) {
                  let s = e.getBoundingClientRect(),
                    l = 0.8 * -s.height,
                    a = window.innerHeight - 0.21 * s.height,
                    c = 0.9 * -s.width,
                    d = window.innerWidth - 0.1 * s.width;
                  (o = o || window.event).preventDefault(),
                    (t = i - o.clientX),
                    (n = r - o.clientY),
                    (i = o.clientX),
                    (r = o.clientY),
                    a > s.top - n &&
                      s.top - n > l &&
                      (e.style.top = e.offsetTop - n + "px"),
                    d > s.left - t &&
                      s.left - t > c &&
                      (e.style.left = e.offsetLeft - t + "px"),
                    (e.style.cursor = "grabbing");
                }
                function l() {
                  (document.onmouseup = null),
                    (document.onmousemove = null),
                    (e.style.cursor = "grab");
                }
                document.getElementById(e.id + "header")
                  ? (document.getElementById(e.id + "header").onmousedown = o)
                  : (e.onmousedown = o);
              })(),
              document
                .getElementById("toggle_btn")
                .addEventListener("click", ne),
              (function() {
                let e = document.getElementById("rwd_btn"),
                  t = document.getElementById("toggle_btn");
                e.addEventListener("click", e => {
                  "none" != t.style.display ? G() : q();
                });
              })();
            let t = $(".reclog");
            t[0] && (t = t[0]),
              (W = t.clientWidth),
              (Be = t.clientWidth),
              !W && t && (W = window.innerHTML * Z),
              (Y =
                W /
                (parseFloat(
                  getComputedStyle(document.documentElement).fontSize
                ) *
                  R)),
              K
                ? ((function(e) {
                    (ee = De(e)), e == o.JA && (e = "ja");
                    let t = chrome.i18n.getMessage("appNameAbbr");
                    if (!ce) {
                      let n = L;
                      window.innerWidth < F && (n = k);
                      let i = `${n}(${t})`;
                      ce = K.addTextTrack("subtitles", i, e);
                    }
                    if (!de) {
                      let e = S;
                      window.innerWidth < F && (e = B);
                      let n = `${e}(${t})`;
                      de = K.addTextTrack("subtitles", n, ee);
                    }
                  })(e),
                  K.addEventListener("pause", e => {
                    Re(), _e();
                  }),
                  K.addEventListener("play", e => {
                    We(), ve();
                  }),
                  K.addEventListener("ended", e => {
                    Ze();
                  }),
                  K.addEventListener("volumechange", e => {
                    K.muted &&
                      s.open({
                        content: videoAlertMuted,
                        skin: "msg",
                        time: 5
                      });
                  }),
                  K.paused && K.play())
                : (Je(300), Re()),
              ($(".cyxy-video-trans")[0].style.filter = "none"),
              ve(),
              Te();
          })(e);
        });
    }
    function Re() {
      ie(), q();
    }
    function We() {
      !(function() {
        Q = $("input[name='lang']:checked")[0].value;
        let e = document.getElementById("toggle_btn");
        chrome.runtime.sendMessage({ type: "recopen", lang: Q }, function(e) {
          se("requestingAudioMsg");
        }),
          (te = !0),
          (e.innerHTML = chrome.i18n.getMessage("stopVideoTransBtn"));
      })(),
        re ? (re = !1) : G();
    }
    function Ye() {
      let e = document.getElementById(l.id);
      if (e) {
        let t = 1,
          n = 0,
          i = setInterval(function() {
            t <= 0.3
              ? (clearInterval(i),
                (e.style.cssText = D),
                (e.style.transform = `scale(${a})`),
                (e.title = chrome.i18n.getMessage("maximizeTransTip")),
                e.removeEventListener("dblclick", Ye),
                e.addEventListener("dblclick", ze))
              : ((t = (n += 5) >= 100 ? 0.3 : t - n / 100),
                (e.style.transform = `scale(${t})`),
                e.offsetLeft + n <= window.innerWidth &&
                  (e.style.left = 10 * n + "px"));
          }, 30);
      }
    }
    function ze() {
      let e = document.getElementById(l.id);
      if (((e.style.border = ""), e)) {
        let t = 0,
          n = 0,
          i = setInterval(function() {
            1 == t
              ? (clearInterval(i),
                (e.title = chrome.i18n.getMessage("minimizeTransTip")),
                (e.style.cssText = J),
                (e.style.top = ""),
                e.removeEventListener("dblclick", ze),
                e.addEventListener("dblclick", Ye))
              : ((t = (n += 5) >= 100 ? 1 : n / 100),
                (e.style.transform = `scale(${t})`),
                e.offsetLeft + n <= window.innerWidth &&
                  (e.style.left -= 5 * n + "px"));
          }, 5);
      }
    }
    function je(e) {
      document.getElementById(l.id)
        ? Promise.resolve(ie()).then(t => {
            $(`.cyxy-${l.id}`).remove(),
              ($(".cyxy-video-trans")[0].style.filter = "grayscale(100%)"),
              K &&
                (K.removeEventListener(Ze),
                K.removeEventListener(Re),
                K.removeEventListener(We)),
              _e(),
              e && e();
          })
        : e && e();
    }
    function Ze() {
      Je(300), je();
    }
    function Je(e) {
      for (var t = new Date().getTime(); new Date().getTime() < t + e; );
    }
    function De(e) {
      return e == o.ZH ? o.EN : o.ZH;
    }
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.showCyxyIcon = function() {
        $(".cyxy-personal").show(),
          $(".cyxy-function").show(),
          $(".cyxy-favorite").show(),
          $(".cyxy-video-trans").show(),
          $(".cyxy-video-trans")[0] &&
            ($("#substr")
              ? ($(".cyxy-video-trans")[0].style.filter = "none")
              : ($(".cyxy-video-trans")[0].style.filter = "grayscale(100%)"));
      }),
      (t.hideCyxyIcon = function() {
        $(".cyxy-personal").hide(),
          $(".cyxy-function").hide(),
          $(".cyxy-favorite").hide(),
          $(".cyxy-video-trans").hide();
      });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.process_en_result = function(e, t) {
        let n = e.target[0],
          d = n.text.replace(c, ""),
          u = n.trans.replace(c, "");
        if (!n.is_final) {
          if (n.stability < 0.5) return { status: "failed" };
          if (d.length < 30) return { status: "failed" };
        }
        let g = Date.now(),
          p = (0, i.chopSentenceEN)(d, l, o, t);
        g = Date.now();
        let f = (0, i.chopSentenceZH)(u, a, s, t);
        return (
          (o = (0, r.string_filter_en)(d)),
          (s = (0, r.string_filter_zh)(u)),
          (l = p),
          (a = f),
          { text: p, trans: f, status: "ok" }
        );
      }),
      (t.process_zh_result = function(e, t) {
        let n = e.target[0],
          d = n.text.replace(c, ""),
          u = n.trans.replace(c, "");
        if (!n.is_final && n.stability < 0.2) return { status: "failed" };
        if ("。" == d || "." == u) return { status: "failed" };
        let g = Date.now(),
          p = (0, i.chopSentenceZH)(d, l, o, t);
        g = Date.now();
        let f = (0, i.chopSentenceEN)(u, a, s, t);
        return (
          (o = (0, r.string_filter_zh)(d)),
          (s = (0, r.string_filter_en)(u)),
          (l = p),
          (a = f),
          { text: p, trans: f, status: "ok" }
        );
      }),
      (t.process_ja_result = function(e, t) {
        let n = e.target[0],
          r = n.text.replace(c, ""),
          d = n.trans.replace(c, "");
        if (!n.is_final && n.stability < 0.6) return { status: "failed" };
        let u = Date.now(),
          g = (0, i.chopSentenceJA)(r, l, o, t);
        u = Date.now();
        let p = (0, i.chopSentenceZH)(d, a, s, t);
        return (
          (o = r),
          (s = d),
          (l = g),
          (a = p),
          { text: g, trans: p, status: "ok" }
        );
      }),
      (t.initialize_process = function() {
        (o = ""), (s = ""), (l = ""), (a = "");
      });
    var i = n(12),
      r = n(13),
      o = "",
      s = "",
      l = "",
      a = "",
      c = /^\s+|\s+$/g;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.chopSentenceZH = function(e, t, n, s) {
        return f(
          i.ZH,
          (s = 0.9 * parseFloat(s)),
          { punc: o, startWords: c, whiteSpace: r },
          e,
          t,
          n
        );
      }),
      (t.chopSentenceJA = function(e, t, n, o) {
        return f(
          i.JA,
          (o = 0.9 * parseFloat(o)),
          { punc: a, pauseWords: d, endWords: u, whiteSpace: r },
          e,
          t,
          n
        );
      }),
      (t.chopSentenceEN = function(e, t, n, o) {
        return f(
          i.EN,
          (o *= 2),
          { punc: s, startWords: g, whiteSpace: r },
          e,
          t,
          n
        );
      });
    var i = n(1);
    let r = /\s+/g,
      o = /[，。？！]/g,
      s = /[.,?!](\s|$)/g,
      l = "、",
      a = /[。、？]/g,
      c = /(就像|假设|如果|假如|尽管|即使|一旦|但是)/g,
      d = /(のは|例えば|しかし|そして|けれども|ところが|けども|けど|だが|から(?![\d|は]))/g,
      u = /(なければならないんだ[ろうな|ろう|よ|か|が|ね]|なければならないんだ|でしょう|ましょう|ありません[よ|か|が|ね]|ありません|あります[よ|か|が|ね]|あります|できます[よ|か|が|ね]|できます|なりません[よ|か|が|ね]|なりません|なります[よ|か|が|ね]|なります|ます[よ|か|が|ね]|ます|ません[よ|か|が|ね]|ません|です[ね|が]|ですか(?!ら)|です(?!から)|でした[ね|か|が]|でした|だけで|ました[ら|ろうな|ろう|よ|か|が|ね]|ました)(?!(けれども|けども|けど|だが)、)/g,
      g = /\b(what|when|why|where|who|how|that|if|but|and)(\s|$)/gi,
      p = "startWords";
    function f(e, t, n, r, o, s) {
      let l = r,
        a = y(n.punc, l);
      if (
        (a[0] && 0 == a[0].index && (l = l.substring(a[0].length, l.length)),
        r == s)
      )
        return o;
      e == i.JA && ((s = m(s, n)), (l = m(l, n)));
      let c = l,
        d = s;
      if (e == i.EN && (c = l.toLowerCase()) == (d = s.toLowerCase())) return o;
      if ("" == s)
        return (function(e, t, n, r) {
          for (var o in (e == i.JA && (r = { punc: r.punc }), r))
            if ((t = b(t, n, r, o)).length <= n) break;
          return t.length > n && (t = t.substring(0, n)), t;
        })(e, l, t, n);
      let u = 0;
      if (l.length > s.length && d == c.substring(0, s.length)) {
        let r = l.indexOf(o);
        return (
          (l = h(e, (l = l.substring(r, l.length)), t, n, c)),
          e == i.EN ? _(l, o) : l
        );
      }
      a = y(n.punc, l);
      let g = 0;
      for (let e = u; e < l.length; e++) {
        if (!s[e] || s[e] != l[e]) {
          g = e;
          break;
        }
        if (g > 0) {
          let e = 0;
          for (let t = a.length - 1; t > 0; t--)
            a[t].index < g && (u = (e = a[t].index) + a[t][0].length);
        }
      }
      return (
        (l = l.substring(u, l.length)).length > t && (l = h(e, l, t, n, c)),
        e == i.EN ? _(l, o) : l
      );
    }
    function m(e, t) {
      return (
        (e = (function(e, t, n) {
          let i = y(e, n),
            r = "",
            o = 0,
            s = 0;
          for (let e = 0; e < i.length; e++)
            (s = i[e].index + i[e][0].length),
              (r = n.substring(o, s) + t),
              (o = s);
          return r + n.substring(o);
        })(t.pauseWords, l, e)),
        (function(e, t) {
          let n = y(e, t),
            i = 0,
            r = "",
            o = 0;
          for (let e = 0; e < n.length; e++)
            "か" == t[(o = n[e].index + n[e][0].length) - 1]
              ? (r += t.substring(i, o) + "？")
              : (r += t.substring(i, o) + "。"),
              (i = o);
          return o < t.length - 1 && (t = r + t.substring(o, t.length)), t;
        })(t.endWords, e)
      );
    }
    function h(e, t, n, r, o) {
      for (var s in (e == i.JA && (r = { punc: r.punc }), r))
        if ((t = v(e, t, n, r, s, o)).length <= n) break;
      return t.length > n && (t = t.substring(0, n)), t;
    }
    function y(e, t) {
      let n = [];
      for (let i of t.matchAll(e)) n.push(i);
      return n;
    }
    function b(e, t, n, i) {
      let o = y(n[i], e),
        s = e.length;
      if (e.length > t) {
        for (let e = o.length - 1; e >= 0; e--) {
          let n = o[e].index + o[e][0].length;
          if (
            (i == p && (n = o[e].index) - 1 >= 0 && r.test(o[n]) && (n -= 1),
            n < t)
          ) {
            s = n;
            break;
          }
        }
        return e.substring(0, s);
      }
      return e;
    }
    function v(e, t, n, r, o, s) {
      let l = y(r[o], t),
        a = 0;
      if (t.length > n) {
        if (e == i.EN) {
          let e = t.toLowerCase();
          for (let i = 0; i < l.length; i++) {
            let r = l[i].index + l[i][0].length;
            if (
              r != t.length &&
              (o == p && (r = l[i].index), r > t.length - n)
            ) {
              if (((a = r), i < l.length - 1)) {
                let t = l[i + 1].index;
                s.indexOf(e.substring(a, t)) > 0 &&
                  (a = o != p ? t + l[i + 1][0].length : t);
              }
              break;
            }
          }
        } else
          for (let e = 0; e < l.length; e++) {
            let i = l[e].index + l[e][0].length;
            if (
              i != t.length &&
              (o == p && (i = l[e].index), (a = i), i > t.length - n)
            )
              break;
          }
        return t.substring(a, t.length);
      }
      return t;
    }
    function _(e, t) {
      if (!e || !t) return e;
      let n = e[0],
        i = t[0];
      return n.toLowerCase() == i.toLowerCase() &&
        i[0] &&
        i[0] == i[0].toUpperCase()
        ? e[0].toUpperCase() + e.slice(1)
        : e;
    }
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.string_filter_zh = function(e) {
        return o(e, i);
      }),
      (t.string_filter_en = function(e) {
        return o(e, r);
      });
    var i = [
        [/^[，|,|。|.|？]/, ""],
        [
          /尿|屎|阴茎|阴道|妓|婊|我操|鸡鸡/g,
          function(e) {
            for (var t = e.length, n = 0, i = ""; n < t; ) n++, (i += "*");
            return i;
          }
        ],
        [/诚信|陈星|陈鑫/g, "晨兴"],
        [/小鄙视/g, "小米是"]
      ],
      r = [
        [/^[，|,|。|.|?]/, ""],
        [
          /\b(fuck|penis|fucking)\b/gi,
          function(e) {
            for (var t = e.length, n = 0, i = ""; n < t; ) n++, (i += "*");
            return i;
          }
        ]
      ];
    function o(e, t) {
      var n = e;
      return (
        t.forEach(function(e) {
          var t = e[0],
            i = e[1];
          n = n.replace(t, i);
        }),
        n
      );
    }
  },
  function(e, t, n) {
    var i;
    !(function() {
      "use strict";
      var r = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
      };
      function o(e) {
        return (function(e, t) {
          var n,
            i,
            s,
            l,
            a,
            c,
            d,
            u,
            g,
            p = 1,
            f = e.length,
            m = "";
          for (i = 0; i < f; i++)
            if ("string" == typeof e[i]) m += e[i];
            else if (Array.isArray(e[i])) {
              if ((l = e[i])[2])
                for (n = t[p], s = 0; s < l[2].length; s++) {
                  if (!n.hasOwnProperty(l[2][s]))
                    throw new Error(
                      o('[sprintf] property "%s" does not exist', l[2][s])
                    );
                  n = n[l[2][s]];
                }
              else n = l[1] ? t[l[1]] : t[p++];
              if (
                (r.not_type.test(l[8]) &&
                  r.not_primitive.test(l[8]) &&
                  n instanceof Function &&
                  (n = n()),
                r.numeric_arg.test(l[8]) && "number" != typeof n && isNaN(n))
              )
                throw new TypeError(
                  o("[sprintf] expecting number but found %T", n)
                );
              switch ((r.number.test(l[8]) && (u = n >= 0), l[8])) {
                case "b":
                  n = parseInt(n, 10).toString(2);
                  break;
                case "c":
                  n = String.fromCharCode(parseInt(n, 10));
                  break;
                case "d":
                case "i":
                  n = parseInt(n, 10);
                  break;
                case "j":
                  n = JSON.stringify(n, null, l[6] ? parseInt(l[6]) : 0);
                  break;
                case "e":
                  n = l[7]
                    ? parseFloat(n).toExponential(l[7])
                    : parseFloat(n).toExponential();
                  break;
                case "f":
                  n = l[7] ? parseFloat(n).toFixed(l[7]) : parseFloat(n);
                  break;
                case "g":
                  n = l[7]
                    ? String(Number(n.toPrecision(l[7])))
                    : parseFloat(n);
                  break;
                case "o":
                  n = (parseInt(n, 10) >>> 0).toString(8);
                  break;
                case "s":
                  (n = String(n)), (n = l[7] ? n.substring(0, l[7]) : n);
                  break;
                case "t":
                  (n = String(!!n)), (n = l[7] ? n.substring(0, l[7]) : n);
                  break;
                case "T":
                  (n = Object.prototype.toString
                    .call(n)
                    .slice(8, -1)
                    .toLowerCase()),
                    (n = l[7] ? n.substring(0, l[7]) : n);
                  break;
                case "u":
                  n = parseInt(n, 10) >>> 0;
                  break;
                case "v":
                  (n = n.valueOf()), (n = l[7] ? n.substring(0, l[7]) : n);
                  break;
                case "x":
                  n = (parseInt(n, 10) >>> 0).toString(16);
                  break;
                case "X":
                  n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
              }
              r.json.test(l[8])
                ? (m += n)
                : (!r.number.test(l[8]) || (u && !l[3])
                    ? (g = "")
                    : ((g = u ? "+" : "-"),
                      (n = n.toString().replace(r.sign, ""))),
                  (c = l[4] ? ("0" === l[4] ? "0" : l[4].charAt(1)) : " "),
                  (d = l[6] - (g + n).length),
                  (a = l[6] && d > 0 ? c.repeat(d) : ""),
                  (m += l[5] ? g + n + a : "0" === c ? g + a + n : a + g + n));
            }
          return m;
        })(
          (function(e) {
            if (l[e]) return l[e];
            for (var t, n = e, i = [], o = 0; n; ) {
              if (null !== (t = r.text.exec(n))) i.push(t[0]);
              else if (null !== (t = r.modulo.exec(n))) i.push("%");
              else {
                if (null === (t = r.placeholder.exec(n)))
                  throw new SyntaxError("[sprintf] unexpected placeholder");
                if (t[2]) {
                  o |= 1;
                  var s = [],
                    a = t[2],
                    c = [];
                  if (null === (c = r.key.exec(a)))
                    throw new SyntaxError(
                      "[sprintf] failed to parse named argument key"
                    );
                  for (s.push(c[1]); "" !== (a = a.substring(c[0].length)); )
                    if (null !== (c = r.key_access.exec(a))) s.push(c[1]);
                    else {
                      if (null === (c = r.index_access.exec(a)))
                        throw new SyntaxError(
                          "[sprintf] failed to parse named argument key"
                        );
                      s.push(c[1]);
                    }
                  t[2] = s;
                } else o |= 2;
                if (3 === o)
                  throw new Error(
                    "[sprintf] mixing positional and named placeholders is not (yet) supported"
                  );
                i.push(t);
              }
              n = n.substring(t[0].length);
            }
            return (l[e] = i);
          })(e),
          arguments
        );
      }
      function s(e, t) {
        return o.apply(null, [e].concat(t || []));
      }
      var l = Object.create(null);
      (t.sprintf = o),
        (t.vsprintf = s),
        "undefined" != typeof window &&
          ((window.sprintf = o),
          (window.vsprintf = s),
          void 0 ===
            (i = function() {
              return { sprintf: o, vsprintf: s };
            }.call(t, n, t, e)) || (e.exports = i));
    })();
  }
]);
