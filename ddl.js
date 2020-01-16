// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Applies DomDistillerJs to the content of the page and returns a
// DomDistillerResults (as a javascript object/dict).
function applyDistiller(options = {}, stringify_output = false) {
  try {
    function initialize() {
      // This include will be processed at build time by grit.
      // Note: this <include> is not behind a single-line comment because the
      // first line of the file is source code (so the first line would be
      // skipped) instead of a licence header.
      // clang-format off
      (function() {
        var $gwt_version = "2.7.0";
        var $wnd = window;
        var $doc = $wnd.document;
        var $moduleName, $moduleBase;
        var $stats = $wnd.__gwtStatsEvent
          ? function(a) {
              $wnd.__gwtStatsEvent(a);
            }
          : null;
        var $strongName = "336CA0E5CF8B6E3C9544731E2EBBB85D";
        var aa = 2147483647,
          ba = { 3: 1, 12: 1 },
          ca = { 3: 1, 15: 1, 12: 1 },
          da = { 3: 1, 4: 1 },
          ea = { 3: 1, 5: 1, 6: 1, 4: 1 },
          ga = { 10: 1, 18: 1, 3: 1, 11: 1, 9: 1 },
          h = { 3: 1, 5: 1, 14: 1, 6: 1, 4: 1, 13: 1 },
          ha = { 46: 1 },
          ka = { 25: 1 },
          la = { 3: 1, 31: 1 },
          ma = { 3: 1, 11: 1, 9: 1, 29: 1 },
          na = { 3: 1, 5: 1, 4: 1 },
          _,
          oa,
          pa = {};
        function qa() {}
        function ra(a) {
          function b() {}
          b.prototype = a || {};
          return new b();
        }
        function k() {}
        function n(a, b, c) {
          var d = pa[a],
            e = d instanceof Array ? d[0] : null;
          d && !e
            ? (_ = d)
            : ((_ = pa[a] = b ? ra(pa[b]) : {}),
              (_.cM = c),
              (_.constructor = _),
              !b && (_.tM = qa));
          for (d = 3; d < arguments.length; ++d) arguments[d].prototype = _;
          e && (_.cZ = e);
        }
        function sa() {}
        function ua(a, b) {
          return va(a) ? a === b : xa(a) ? a.eQ(b) : (ya(a), a === b);
        }
        function za(a) {
          return va(a) ? p : xa(a) ? a.cZ : ya(a) ? a.cZ : Fa;
        }
        function Ga(a) {
          if (va(a)) {
            Ha();
            var b = ":" + a,
              c = Ia[b];
            if (null != c) a = c;
            else {
              c = Oa[b];
              if (null == c) {
                var d, e, f;
                d = 0;
                e = a.length;
                f = e - 4;
                for (c = 0; c < f; )
                  (d =
                    a.charCodeAt(c + 3) +
                    31 *
                      (a.charCodeAt(c + 2) +
                        31 *
                          (a.charCodeAt(c + 1) +
                            31 * (a.charCodeAt(c) + 31 * d)))),
                    (d = ~~d),
                    (c += 4);
                for (; c < e; )
                  (d *= 31), (f = c++), (f = a.charCodeAt(f)), (d += f);
                c = ~~d;
              }
              256 == Ra && ((Oa = Ia), (Ia = {}), (Ra = 0));
              ++Ra;
              a = Ia[b] = c;
            }
          } else a = xa(a) ? a.hC() : (ya(a), a.$H || (a.$H = ++Sa));
          return a;
        }
        n(1, null, {}, sa);
        _.eQ = function(a) {
          return this === a;
        };
        _.gC = function() {
          return this.cZ;
        };
        _.hC = function() {
          return this.$H || (this.$H = ++Sa);
        };
        _.tS = function() {
          var a = Ta(za(this)) + "@",
            b;
          b = (Ga(this) >>> 0).toString(16);
          return a + b;
        };
        _.toString = function() {
          return this.tS();
        };
        Ua = { 3: 1, 220: 1, 11: 1, 2: 1 };
        !Array.isArray &&
          (Array.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
          });
        function Va(a) {
          return a.toString ? a.toString() : "[JavaScriptObject]";
        }
        function xa(a) {
          return !Array.isArray(a) && a.tM === qa;
        }
        function r(a, b) {
          return null != a && ((va(a) && !!Ua[b]) || (a.cM && !!a.cM[b]));
        }
        function ya(a) {
          return Array.isArray(a) && a.tM === qa;
        }
        function va(a) {
          return "string" === typeof a;
        }
        function s(a) {
          return null == a ? null : a;
        }
        function Wa(a) {
          return ~~Math.max(Math.min(a, aa), -2147483648);
        }
        var Ua;
        function Xa(a) {
          if (null == a.n)
            if (a.B()) {
              var b = a.c;
              b.C()
                ? (a.n = "[" + b.k)
                : b.B()
                ? (a.n = "[" + b.w())
                : (a.n = "[L" + b.w() + ";");
              a.b = b.v() + "[]";
              a.j = b.A() + "[]";
            } else {
              var b = a.g,
                c = a.d,
                c = c.split("/");
              a.n = Ya(".", [b, Ya("$", c)]);
              a.b = Ya(".", [b, Ya(".", c)]);
              a.j = c[c.length - 1];
            }
        }
        function Ta(a) {
          Xa(a);
          return a.n;
        }
        function Za(a) {
          Xa(a);
          return a.j;
        }
        function $a() {
          this.i = jb++;
          this.a = this.k = this.b = this.d = this.g = this.j = this.n = null;
        }
        function kb(a) {
          var b;
          b = new $a();
          b.n = "Class$" + (a ? "S" + a : "" + b.i);
          b.b = b.n;
          b.j = b.n;
          return b;
        }
        function t(a) {
          var b;
          b = kb(a);
          lb(a, b);
          return b;
        }
        function u(a, b) {
          var c;
          c = kb(a);
          lb(a, c);
          c.f = b ? 8 : 0;
          c.e = b;
          return c;
        }
        function mb() {
          var a;
          a = kb(null);
          a.f = 2;
          return a;
        }
        function w(a, b) {
          var c = (a.a = a.a || []);
          return c[b] || (c[b] = a.u(b));
        }
        function Ya(a, b) {
          for (var c = 0; !b[c] || "" == b[c]; ) c++;
          for (var d = b[c++]; c < b.length; c++)
            b[c] && "" != b[c] && (d += a + b[c]);
          return d;
        }
        function lb(a, b) {
          if (a) {
            b.k = a;
            var c = b.C() ? null : pa[b.k];
            c ? (c.cZ = b) : (pa[a] = [b]);
          }
        }
        n(76, 1, {}, $a);
        _.u = function(a) {
          var b;
          b = new $a();
          b.f = 4;
          1 < a ? (b.c = w(this, a - 1)) : (b.c = this);
          return b;
        };
        _.v = function() {
          Xa(this);
          return this.b;
        };
        _.w = function() {
          return Ta(this);
        };
        _.A = function() {
          return Za(this);
        };
        _.B = function() {
          return 0 != (this.f & 4);
        };
        _.C = function() {
          return 0 != (this.f & 1);
        };
        _.tS = function() {
          return (
            (0 != (this.f & 2)
              ? "interface "
              : 0 != (this.f & 1)
              ? ""
              : "class ") + (Xa(this), this.n)
          );
        };
        _.f = 0;
        _.i = 0;
        var jb = 1,
          nb = t(1),
          Fa = t(0);
        t(76);
        n(12, 1, ba);
        _.q = function() {
          return this.e;
        };
        _.tS = function() {
          var a, b;
          a = Ta(this.cZ);
          b = this.q();
          return null != b ? a + ": " + b : a;
        };
        t(12);
        function ob(a) {
          this.e = a;
          bc(this, this.e);
        }
        n(15, 12, ca, ob);
        t(15);
        n(19, 15, ca);
        t(19);
        n(101, 19, ca);
        t(101);
        function cc() {
          cc = k;
          dc = new sa();
        }
        function ec(a) {
          cc();
          this.e = null;
          this.a = "";
          this.b = a;
          this.a = "";
        }
        n(39, 101, { 39: 1, 3: 1, 15: 1, 12: 1 }, ec);
        _.q = function() {
          var a;
          null == this.c &&
            ((a = s(this.b) === s(dc) ? null : this.b),
            (this.d =
              null == a
                ? "null"
                : null == a || va(a) || a.tM === qa
                ? va(a)
                  ? "String"
                  : Ta(za(a))
                : null == a
                ? null
                : a.name),
            (this.a =
              this.a +
              ": " +
              (null == a || va(a) || a.tM === qa
                ? a + ""
                : null == a
                ? null
                : a.message)),
            (this.c = "(" + this.d + ") " + this.a));
          return this.c;
        };
        _.r = function() {
          return s(this.b) === s(dc) ? null : this.b;
        };
        var dc;
        t(39);
        n(196, 1, {});
        t(196);
        function fc(a) {
          $wnd.setTimeout(function() {
            throw a;
          }, 0);
        }
        function gc() {
          0 != hc && (hc = 0);
          ic = -1;
        }
        var hc = 0,
          Sa = 0,
          jc = 0,
          ic = -1;
        function kc() {
          kc = k;
          lc = new vc();
        }
        function vc() {}
        function Bc(a, b) {
          var c, d, e;
          d = 0;
          for (e = a.length; d < e; d++) {
            c = a[d];
            try {
              if (c[1]) {
                if (c[0].Ib()) {
                  var f = b;
                  !f && (f = []);
                  f[f.length] = c;
                  b = f;
                }
              } else c[0].Ib();
            } catch (g) {
              if (((g = Cc(g)), r(g, 12))) (c = g), fc(r(c, 39) ? c.r() : c);
              else throw Dc(g);
            }
          }
          return b;
        }
        n(145, 196, {}, vc);
        var lc;
        t(145);
        function Ec() {
          Ec = k;
          var a, b;
          b = !(Error.stackTraceLimit || "stack" in Error());
          a = new Fc();
          Gc = b ? new Hc() : a;
        }
        function bc(a, b) {
          Ec();
          Gc.s(a, b);
        }
        var Gc;
        n(208, 1, {});
        t(208);
        function Hc() {}
        n(111, 208, {}, Hc);
        _.s = function(a, b) {
          var c = {};
          a.fnStack = [];
          for (var d = arguments.callee.caller; d; ) {
            Ec();
            var e;
            if (!(e = d.name)) {
              e = d;
              var f = /function(?:\s+([\w$]+))?\s*\(/.exec(d.toString());
              e = e.name = (f && f[1]) || "anonymous";
            }
            a.fnStack.push(e);
            e = ":" + e;
            if ((f = c[e])) {
              var g, l;
              g = 0;
              for (l = f.length; g < l; g++) if (f[g] === d) return;
            }
            (f || (c[e] = [])).push(d);
            d = d.caller;
          }
        };
        t(111);
        function Ic() {
          Ic = k;
          Error.stackTraceLimit = 64;
        }
        n(209, 208, {});
        _.s = function(a, b) {
          function c(a) {
            if (!("stack" in a))
              try {
                throw a;
              } catch (b) {}
            return a;
          }
          var d;
          "string" == typeof b
            ? (d = c(Error(b)))
            : b instanceof Object && "stack" in b
            ? (d = b)
            : (d = c(Error()));
          a.__gwt$backingJsError = d;
        };
        t(209);
        function Fc() {
          Ic();
        }
        n(112, 209, {}, Fc);
        t(112);
        function Jc(a, b) {
          if (!a) throw new Kc("" + b);
        }
        function y(a) {
          if (!a) throw new Lc();
        }
        function z(a, b) {
          if (0 > a || a >= b) throw new Mc("Index: " + a + ", Size: " + b);
        }
        function Nc(a) {
          if (null == a) throw new Oc();
        }
        function Pc(a, b) {
          if (0 > a || a > b) throw new Mc("Index: " + a + ", Size: " + b);
        }
        function Qc(a, b) {
          var c, d, e, f;
          a = "" + a;
          c = new Rc();
          for (d = f = 0; d < b.length; ) {
            e = a.indexOf("%s", f);
            if (-1 == e) break;
            f = a.substr(f, e - f);
            c.a += f;
            f = b[d++];
            c.a += f;
            f = e + 2;
          }
          e = a.substr(f, a.length - f);
          c.a += e;
          if (d < b.length) {
            c.a += " [";
            e = b[d++];
            for (c.a += e; d < b.length; )
              (c.a += ", "), (e = b[d++]), (c.a += e);
            c.a += "]";
          }
          return c.a;
        }
        function Sc(a, b) {
          return null == a[b] ? null : String(a[b]);
        }
        function A(a, b) {
          return a.getAttribute(b) || "";
        }
        function B(a) {
          ((a = a.parentNode) && 1 == a.nodeType) || (a = null);
          return a;
        }
        function C(a, b) {
          this.a = a;
          this.b = b;
        }
        n(9, 1, { 3: 1, 11: 1, 9: 1 });
        _.t = function(a) {
          return this.b - a.b;
        };
        _.eQ = function(a) {
          return this === a;
        };
        _.hC = function() {
          return this.$H || (this.$H = ++Sa);
        };
        _.tS = function() {
          return null != this.a ? this.a : "" + this.b;
        };
        _.b = 0;
        t(9);
        function Tc() {
          Tc = k;
          Uc = new cd();
          fd = new nd();
          ud = new vd();
          wd = new xd();
          yd = new zd();
          Ad = new Bd();
          Cd = new Dd();
          Ed = new Fd();
          Gd = new Hd();
          Id = new Jd();
          Kd = new Ld();
          Md = new Nd();
          Od = new Pd();
          Qd = new Rd();
          Sd = new Td();
          Ud = new le();
          te = new Ae();
          De = new Ee();
        }
        function Fe() {
          Tc();
          return D(w(Ge, 1), ea, 10, 0, [
            Uc,
            fd,
            ud,
            wd,
            yd,
            Ad,
            Cd,
            Ed,
            Gd,
            Id,
            Kd,
            Md,
            Od,
            Qd,
            Sd,
            Ud,
            te,
            De
          ]);
        }
        n(10, 9, ga);
        var fd,
          te,
          ud,
          Uc,
          Ad,
          Ud,
          yd,
          Cd,
          Ed,
          Gd,
          wd,
          De,
          Id,
          Kd,
          Md,
          Qd,
          Sd,
          Od,
          Ge = u(10, Fe);
        function cd() {
          C.call(this, "DEFAULT", 0);
        }
        n(160, 10, ga, cd);
        u(160, null);
        function Jd() {
          C.call(this, "SE_RESIZE", 9);
        }
        n(169, 10, ga, Jd);
        u(169, null);
        function Ld() {
          C.call(this, "SW_RESIZE", 10);
        }
        n(170, 10, ga, Ld);
        u(170, null);
        function Nd() {
          C.call(this, "S_RESIZE", 11);
        }
        n(171, 10, ga, Nd);
        u(171, null);
        function Pd() {
          C.call(this, "W_RESIZE", 12);
        }
        n(172, 10, ga, Pd);
        u(172, null);
        function Rd() {
          C.call(this, "TEXT", 13);
        }
        n(173, 10, ga, Rd);
        u(173, null);
        function Td() {
          C.call(this, "WAIT", 14);
        }
        n(174, 10, ga, Td);
        u(174, null);
        function le() {
          C.call(this, "HELP", 15);
        }
        n(175, 10, ga, le);
        u(175, null);
        function Ae() {
          C.call(this, "COL_RESIZE", 16);
        }
        n(176, 10, ga, Ae);
        u(176, null);
        function Ee() {
          C.call(this, "ROW_RESIZE", 17);
        }
        n(177, 10, ga, Ee);
        u(177, null);
        function nd() {
          C.call(this, "AUTO", 1);
        }
        n(161, 10, ga, nd);
        u(161, null);
        function vd() {
          C.call(this, "CROSSHAIR", 2);
        }
        n(162, 10, ga, vd);
        u(162, null);
        function xd() {
          C.call(this, "POINTER", 3);
        }
        n(163, 10, ga, xd);
        u(163, null);
        function zd() {
          C.call(this, "MOVE", 4);
        }
        n(164, 10, ga, zd);
        u(164, null);
        function Bd() {
          C.call(this, "E_RESIZE", 5);
        }
        n(165, 10, ga, Bd);
        u(165, null);
        function Dd() {
          C.call(this, "NE_RESIZE", 6);
        }
        n(166, 10, ga, Dd);
        u(166, null);
        function Fd() {
          C.call(this, "NW_RESIZE", 7);
        }
        n(167, 10, ga, Fd);
        u(167, null);
        function Hd() {
          C.call(this, "N_RESIZE", 8);
        }
        n(168, 10, ga, Hd);
        u(168, null);
        function He() {
          He = k;
          var a = Fe(),
            b,
            c,
            d,
            e;
          b = {};
          d = 0;
          for (e = a.length; d < e; ++d)
            (c = a[d]), (b[":" + (null != c.a ? c.a : "" + c.b)] = c);
          Ie = b;
        }
        var Ie;
        function Je(a, b) {
          var c;
          c = a.slice(0, b);
          D(za(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function Ke(a, b) {
          var c;
          c = Le(0, b);
          D(za(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
          return c;
        }
        function E(a, b, c, d, e) {
          d = Le(e, d);
          D(w(a, 1), b, c, e, d);
          return d;
        }
        function Me(a) {
          return Ne(p, [na, h], [13, 2], 4, a, 0, 2);
        }
        function Ne(a, b, c, d, e, f, g) {
          var l, m, q, v;
          q = e[f];
          l = (m = f == g - 1) ? d : 0;
          v = Le(l, q);
          D(w(a, g - f), b[f], c[f], l, v);
          if (!m) for (++f, l = 0; l < q; ++l) v[l] = Ne(a, b, c, d, e, f, g);
          return v;
        }
        function D(a, b, c, d, e) {
          e.cZ = a;
          e.cM = b;
          e.tM = qa;
          e.__elementTypeId$ = c;
          e.__elementTypeCategory$ = d;
          return e;
        }
        function Le(a, b) {
          var c = Array(b),
            d;
          switch (a) {
            case 6:
              d = { l: 0, m: 0, h: 0 };
              break;
            case 7:
              d = 0;
              break;
            case 8:
              d = !1;
              break;
            default:
              return c;
          }
          for (var e = 0; e < b; ++e) c[e] = d;
          return c;
        }
        function Oe(a, b, c, d, e, f) {
          a === c && ((a = a.slice(b, b + e)), (b = 0));
          var g = b;
          for (b += e; g < b; ) {
            var l = Math.min(g + 1e4, b);
            e = l - g;
            Array.prototype.splice.apply(
              c,
              [d, f ? e : 0].concat(a.slice(g, l))
            );
            g = l;
            d += e;
          }
        }
        function Dc(a) {
          return r(a, 39) && s(a.b) !== s((cc(), dc))
            ? s(a.b) === s(dc)
              ? null
              : a.b
            : a;
        }
        function Cc(a) {
          var b;
          if (r(a, 12)) return a;
          b = a && a.__gwt$exception;
          if (!b && ((b = new ec(a)), bc(b, a), a && "object" == typeof a))
            try {
              a.__gwt$exception = b;
            } catch (c) {}
          return b;
        }
        function Pe() {
          var a;
          a = navigator.userAgent.toLowerCase();
          var b = $doc.documentMode;
          a =
            -1 != a.indexOf("webkit")
              ? "safari"
              : -1 != a.indexOf("msie") && 10 <= b && 11 > b
              ? "ie10"
              : -1 != a.indexOf("msie") && 9 <= b && 11 > b
              ? "ie9"
              : -1 != a.indexOf("msie") && 8 <= b && 11 > b
              ? "ie8"
              : -1 != a.indexOf("gecko") || 11 <= b
              ? "gecko1_8"
              : "unknown";
          if ("safari" !== a) throw new Qe(a);
        }
        n(59, 12, ba);
        t(59);
        n(22, 59, ba);
        t(22);
        function Qe(a) {
          this.e =
            "" +
            ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
              a +
              ").\nExpect more errors.");
          bc(this, this.e);
        }
        n(100, 22, ba, Qe);
        t(100);
        n(60, 1, {});
        _.tS = function() {
          return this.a;
        };
        t(60);
        function Re() {
          bc(this, this.e);
        }
        function Mc(a) {
          ob.call(this, a);
        }
        n(30, 19, ca, Re, Mc);
        t(30);
        function Se() {
          bc(this, this.e);
        }
        n(180, 30, ca, Se);
        t(180);
        function Kc(a) {
          ob.call(this, a);
        }
        n(36, 19, ca, Kc);
        t(36);
        function Te() {
          Te = k;
          Ue = new Ve(!1);
          We = new Ve(!0);
        }
        function Ve(a) {
          this.a = a;
        }
        n(47, 1, { 3: 1, 47: 1, 11: 1 }, Ve);
        _.t = function(a) {
          var b = this.a;
          return b == a.a ? 0 : b ? 1 : -1;
        };
        _.eQ = function(a) {
          return r(a, 47) && a.a == this.a;
        };
        _.hC = function() {
          return this.a ? 1231 : 1237;
        };
        _.tS = function() {
          return "" + this.a;
        };
        _.a = !1;
        var Ue, We;
        t(47);
        function Xe(a) {
          this.a = a;
        }
        n(37, 1, { 3: 1, 37: 1, 11: 1 }, Xe);
        _.t = function(a) {
          return this.a - a.a;
        };
        _.eQ = function(a) {
          return r(a, 37) && a.a == this.a;
        };
        _.hC = function() {
          return this.a;
        };
        _.tS = function() {
          return String.fromCharCode(this.a);
        };
        _.a = 0;
        var Ye = t(37);
        function Ze() {
          Ze = k;
          $e = E(Ye, ea, 37, 128, 0);
        }
        var $e;
        n(75, 1, { 3: 1, 75: 1 });
        t(75);
        function af(a) {
          ob.call(this, a);
        }
        n(23, 19, { 3: 1, 15: 1, 23: 1, 12: 1 }, af);
        t(23);
        function bf() {
          bc(this, this.e);
        }
        n(181, 19, ca, bf);
        t(181);
        function cf(a) {
          this.a = a;
        }
        function df(a) {
          var b, c;
          return -129 < a && 128 > a
            ? ((b = a + 128),
              (c = (ef(), ff)[b]),
              !c && (c = ff[b] = new cf(a)),
              c)
            : new cf(a);
        }
        n(38, 75, { 3: 1, 11: 1, 38: 1, 75: 1 }, cf);
        _.t = function(a) {
          var b = this.a;
          a = a.a;
          return b < a ? -1 : b > a ? 1 : 0;
        };
        _.eQ = function(a) {
          return r(a, 38) && a.a == this.a;
        };
        _.hC = function() {
          return this.a;
        };
        _.tS = function() {
          return "" + this.a;
        };
        _.a = 0;
        var gf = t(38);
        function ef() {
          ef = k;
          ff = E(gf, ea, 38, 256, 0);
        }
        var ff;
        function hf(a, b) {
          return a < b ? a : b;
        }
        function Oc() {
          bc(this, this.e);
        }
        function jf(a) {
          ob.call(this, a);
        }
        n(53, 19, ca, Oc, jf);
        t(53);
        function kf(a, b) {
          var c;
          c = b.length;
          return a.substr(a.length - c, c) === b;
        }
        function F(a, b) {
          return null == b
            ? !1
            : a == b
            ? !0
            : a.length == b.length && a.toLowerCase() == b.toLowerCase();
        }
        function lf(a) {
          return !a.length;
        }
        function qf(a, b, c) {
          var d;
          65536 <= b
            ? ((d = (56320 + ((b - 65536) & 1023)) & 65535),
              (b =
                String.fromCharCode(
                  (55296 + (((b - 65536) >> 10) & 1023)) & 65535
                ) + String.fromCharCode(d)))
            : (b = String.fromCharCode(b & 65535));
          return a.lastIndexOf(b, c);
        }
        function sf(a, b, c, d, e) {
          if (null == c) throw new Oc();
          if (0 > b || 0 > d || 0 >= e || b + e > a.length || d + e > c.length)
            return !1;
          a = a.substr(b, e);
          c = c.substr(d, e);
          return a === c;
        }
        function zf(a) {
          var b = (160).toString(16),
            b = "\\u" + "0000".substring(b.length) + b;
          return a.replace(RegExp(b, "g"), String.fromCharCode(32));
        }
        function Af(a, b) {
          var c;
          c = Xf("");
          return a.replace(RegExp(b, "g"), c);
        }
        function Yf(a, b) {
          var c;
          c = Xf("");
          return a.replace(RegExp(b), c);
        }
        function lg(a, b) {
          for (var c = RegExp(b, "g"), d = [], e = 0, f = a, g = null; ; ) {
            var l = c.exec(f);
            if (null == l || "" == f) {
              d[e] = f;
              break;
            } else
              (d[e] = f.substring(0, l.index)),
                (f = f.substring(l.index + l[0].length, f.length)),
                (c.lastIndex = 0),
                g == f && ((d[e] = f.substring(0, 1)), (f = f.substring(1))),
                (g = f),
                e++;
          }
          if (0 < a.length) {
            for (c = d.length; 0 < c && "" == d[c - 1]; ) --c;
            c < d.length && d.splice(c, d.length - c);
          }
          c = E(p, h, 2, d.length, 4);
          for (e = 0; e < d.length; ++e) c[e] = d[e];
          return c;
        }
        function og(a, b) {
          return a.substr(0, b.length) === b;
        }
        function pg(a, b) {
          return a.substr(b, a.length - b);
        }
        function tg(a, b, c) {
          return a.substr(b, c - b);
        }
        function ug(a) {
          return 0 == a.length || (" " < a[0] && " " < a[a.length - 1])
            ? a
            : a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "");
        }
        function Xf(a) {
          var b;
          for (b = 0; 0 <= (b = a.indexOf("\\", b)); )
            36 == a.charCodeAt(b + 1)
              ? (a = a.substr(0, b) + "$" + pg(a, ++b))
              : (a = a.substr(0, b) + pg(a, ++b));
          return a;
        }
        var p = t(2);
        function Ha() {
          Ha = k;
          Oa = {};
          Ia = {};
        }
        var Oa,
          Ra = 0,
          Ia;
        function Tg() {
          this.a = "";
        }
        function Rc() {
          this.a = "";
        }
        function Ug(a) {
          this.a = a;
        }
        n(40, 60, { 220: 1 }, Tg, Rc, Ug);
        t(40);
        function Vg(a) {
          ob.call(this, a);
        }
        n(54, 19, ca, Vg);
        t(54);
        function Wg(a, b) {
          var c, d, e;
          Nc(b);
          c = !1;
          for (e = b.D(); e.Q(); ) (d = e.R()), (c |= a.F(d));
          return c;
        }
        function Xg(a) {
          var b, c, d, e;
          e = new Ug("[");
          b = !1;
          for (d = a.D(); d.Q(); )
            (c = d.R()),
              b ? (e.a += ", ") : (b = !0),
              (e.a += c === a ? "(this Collection)" : "" + c);
          e.a += "]";
          return e.a;
        }
        n(211, 1, {});
        _.F = function() {
          throw new Vg("Add not supported on this collection");
        };
        _.G = function(a) {
          return Wg(this, a);
        };
        _.H = function(a) {
          a: {
            var b, c;
            for (c = this.D(); c.Q(); )
              if (((b = c.R()), s(a) === s(b) || (null != a && ua(a, b)))) {
                a = !0;
                break a;
              }
            a = !1;
          }
          return a;
        };
        _.I = function() {
          return 0 == this.J();
        };
        _.K = function() {
          return this.L(E(nb, da, 1, this.J(), 3));
        };
        _.L = function(a) {
          var b, c, d;
          d = this.J();
          a.length < d && (a = Ke(a, d));
          c = this.D();
          for (b = 0; b < d; ++b) a[b] = c.R();
          a.length > d && (a[d] = null);
          return a;
        };
        _.tS = function() {
          return Xg(this);
        };
        t(211);
        function Yg(a, b) {
          var c, d, e;
          c = b.W();
          e = b.X();
          d = a.P(c);
          return !(s(e) === s(d) || (null != e && ua(e, d))) ||
            (null == d && !a.N(c))
            ? !1
            : !0;
        }
        function Zg(a, b) {
          var c, d, e;
          for (d = a.O().D(); d.Q(); )
            if (
              ((c = d.R()),
              (e = c.W()),
              s(b) === s(e) || (null != b && ua(b, e)))
            )
              return c;
          return null;
        }
        function $g(a, b) {
          return b === a ? "(this Map)" : "" + b;
        }
        function ah(a) {
          return a ? a.X() : null;
        }
        n(210, 1, ha);
        _.M = function(a) {
          return Yg(this, a);
        };
        _.N = function(a) {
          return !!Zg(this, a);
        };
        _.eQ = function(a) {
          var b;
          if (a === this) return !0;
          if (!r(a, 46) || this.J() != a.J()) return !1;
          for (b = a.O().D(); b.Q(); ) if (((a = b.R()), !this.M(a))) return !1;
          return !0;
        };
        _.P = function(a) {
          return ah(Zg(this, a));
        };
        _.hC = function() {
          return bh(this.O());
        };
        _.J = function() {
          return this.O().J();
        };
        _.tS = function() {
          var a, b, c, d;
          d = new Ug("{");
          a = !1;
          for (c = this.O().D(); c.Q(); )
            (b = c.R()),
              a ? (d.a += ", ") : (a = !0),
              (d.a += $g(this, b.W())),
              (d.a += "\x3d"),
              (d.a += $g(this, b.X()));
          d.a += "}";
          return d.a;
        };
        t(210);
        function ch(a, b) {
          return va(b) ? G(a, b) : !!dh(a.a, b);
        }
        function eh(a, b) {
          return va(b) ? H(a, b) : ah(dh(a.a, b));
        }
        function H(a, b) {
          return null == b ? ah(dh(a.a, null)) : a.c.eb(b);
        }
        function G(a, b) {
          return null == b ? !!dh(a.a, null) : void 0 !== a.c.eb(b);
        }
        function fh(a, b, c) {
          return va(b) ? L(a, b, c) : gh(a.a, b, c);
        }
        function L(a, b, c) {
          return null == b ? gh(a.a, null, c) : a.c.hb(b, c);
        }
        function hh(a) {
          ih();
          a.a = jh.bb();
          a.a.b = a;
          a.c = jh.cb();
          a.c.b = a;
          a.b = 0;
          kh(a);
        }
        n(113, 210, ha);
        _.N = function(a) {
          return ch(this, a);
        };
        _.O = function() {
          return new lh(this);
        };
        _.P = function(a) {
          return eh(this, a);
        };
        _.J = function() {
          return this.b;
        };
        _.b = 0;
        t(113);
        n(212, 211, ka);
        _.eQ = function(a) {
          if (a === this) a = !0;
          else if (r(a, 25) && a.J() == this.J())
            a: {
              var b;
              Nc(a);
              for (b = a.D(); b.Q(); )
                if (((a = b.R()), !this.H(a))) {
                  a = !1;
                  break a;
                }
              a = !0;
            }
          else a = !1;
          return a;
        };
        _.hC = function() {
          return bh(this);
        };
        t(212);
        function lh(a) {
          this.a = a;
        }
        n(63, 212, ka, lh);
        _.H = function(a) {
          return r(a, 24) ? Yg(this.a, a) : !1;
        };
        _.D = function() {
          return new mh(this.a);
        };
        _.J = function() {
          return this.a.b;
        };
        t(63);
        function nh(a) {
          if (a.a.Q()) return !0;
          if (a.a != a.b) return !1;
          a.a = a.c.a._();
          return a.a.Q();
        }
        function oh(a) {
          if (a._gwt_modCount != a.c._gwt_modCount) throw new ph();
          return y(nh(a)), a.a.R();
        }
        function mh(a) {
          this.c = a;
          this.a = this.b = this.c.c._();
          this._gwt_modCount = a._gwt_modCount;
        }
        n(64, 1, {}, mh);
        _.Q = function() {
          return nh(this);
        };
        _.R = function() {
          return oh(this);
        };
        t(64);
        n(213, 211, { 31: 1 });
        _.S = function() {
          throw new Vg("Add not supported on this list");
        };
        _.F = function(a) {
          this.S(this.J(), a);
          return !0;
        };
        _.eQ = function(a) {
          var b, c, d;
          if (a === this) return !0;
          if (!r(a, 31) || this.J() != a.J()) return !1;
          d = a.D();
          for (b = this.D(); b.Q(); )
            if (
              ((a = b.R()),
              (c = d.R()),
              !(s(a) === s(c) || (null != a && ua(a, c))))
            )
              return !1;
          return !0;
        };
        _.hC = function() {
          var a, b, c;
          c = 1;
          for (b = this.D(); b.Q(); )
            (a = b.R()), (c = 31 * c + (null != a ? Ga(a) : 0)), (c = ~~c);
          return c;
        };
        _.D = function() {
          return new M(this);
        };
        _.U = function() {
          throw new Vg("Remove not supported on this list");
        };
        t(213);
        function qh(a) {
          if (-1 == a.c) throw new bf();
          a.d.U(a.c);
          a.b = a.c;
          a.c = -1;
        }
        function M(a) {
          this.d = a;
        }
        n(7, 1, {}, M);
        _.Q = function() {
          return this.b < this.d.J();
        };
        _.R = function() {
          return y(this.b < this.d.J()), this.d.T((this.c = this.b++));
        };
        _.V = function() {
          qh(this);
        };
        _.b = 0;
        _.c = -1;
        t(7);
        function rh(a, b) {
          this.d = this.a = a;
          Pc(b, a.b.length);
          this.b = b;
        }
        n(43, 7, {}, rh);
        t(43);
        function sh(a, b) {
          z(b, a.b);
          return N(a.c, a.a + b);
        }
        function th(a, b, c) {
          var d = a.b.length;
          if (0 > b) throw new Mc("fromIndex: " + b + " \x3c 0");
          if (c > d) throw new Mc("toIndex: " + c + " \x3e size " + d);
          if (b > c) throw new af("fromIndex: " + b + " \x3e toIndex: " + c);
          this.c = a;
          this.a = b;
          this.b = c - b;
        }
        n(50, 213, { 31: 1 }, th);
        _.S = function(a, b) {
          Pc(a, this.b);
          uh(this.c, this.a + a, b);
          ++this.b;
        };
        _.T = function(a) {
          return sh(this, a);
        };
        _.U = function(a) {
          z(a, this.b);
          a = this.c.U(this.a + a);
          --this.b;
          return a;
        };
        _.J = function() {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        t(50);
        function vh(a) {
          a = new mh(new lh(a.a).a);
          return new wh(a);
        }
        function xh(a) {
          this.a = a;
        }
        n(65, 212, ka, xh);
        _.H = function(a) {
          return ch(this.a, a);
        };
        _.D = function() {
          return vh(this);
        };
        _.J = function() {
          return this.a.b;
        };
        t(65);
        function wh(a) {
          this.a = a;
        }
        n(114, 1, {}, wh);
        _.Q = function() {
          return nh(this.a);
        };
        _.R = function() {
          return oh(this.a).W();
        };
        t(114);
        function yh(a, b) {
          var c;
          c = a.d;
          a.d = b;
          return c;
        }
        n(48, 1, { 48: 1, 24: 1 });
        _.eQ = function(a) {
          return r(a, 24) ? zh(this.c, a.W()) && zh(this.d, a.X()) : !1;
        };
        _.W = function() {
          return this.c;
        };
        _.X = function() {
          return this.d;
        };
        _.hC = function() {
          return Ah(this.c) ^ Ah(this.d);
        };
        _.Y = function(a) {
          return yh(this, a);
        };
        _.tS = function() {
          return this.c + "\x3d" + this.d;
        };
        t(48);
        function Bh(a, b) {
          this.c = a;
          this.d = b;
        }
        n(49, 48, { 48: 1, 49: 1, 24: 1 }, Bh);
        t(49);
        n(216, 1, { 24: 1 });
        _.eQ = function(a) {
          return r(a, 24) ? zh(this.W(), a.W()) && zh(this.X(), a.X()) : !1;
        };
        _.hC = function() {
          return Ah(this.W()) ^ Ah(this.X());
        };
        _.tS = function() {
          return this.W() + "\x3d" + this.X();
        };
        t(216);
        function Ch(a, b) {
          var c;
          c = Dh(a, b.W());
          return !!c && zh(c.d, b.X());
        }
        n(218, 210, ha);
        _.M = function(a) {
          return Ch(this, a);
        };
        _.N = function(a) {
          return !!Dh(this, a);
        };
        _.O = function() {
          return new Eh(this);
        };
        _.P = function(a) {
          return ah(Dh(this, a));
        };
        t(218);
        function Eh(a) {
          this.a = a;
        }
        n(97, 212, ka, Eh);
        _.H = function(a) {
          return r(a, 24) && Ch(this.a, a);
        };
        _.D = function() {
          return new Fh(this.a);
        };
        _.J = function() {
          return this.a.c;
        };
        t(97);
        function Gh(a) {
          a = new Fh(new Hh(a.a).a);
          return new Ih(a);
        }
        function Jh(a) {
          this.a = a;
        }
        n(192, 212, ka, Jh);
        _.H = function(a) {
          return !!Dh(this.a, a);
        };
        _.D = function() {
          return Gh(this);
        };
        _.J = function() {
          return this.a.c;
        };
        t(192);
        function Ih(a) {
          this.a = a;
        }
        n(193, 1, {}, Ih);
        _.Q = function() {
          return this.a.a.Q();
        };
        _.R = function() {
          return this.a.a.R().W();
        };
        t(193);
        function Kh(a, b) {
          var c;
          c = Lh(a, b);
          try {
            return y(c.b != c.d.c), (c.c = c.b), (c.b = c.b.a), ++c.a, c.c.c;
          } catch (d) {
            d = Cc(d);
            if (r(d, 55)) throw new Mc("Can't get element " + b);
            throw Dc(d);
          }
        }
        n(214, 213, { 31: 1 });
        _.S = function(a, b) {
          var c;
          c = Lh(this, a);
          Mh(c.d, b, c.b.b, c.b);
          ++c.a;
          c.c = null;
        };
        _.T = function(a) {
          return Kh(this, a);
        };
        _.D = function() {
          return Lh(this, 0);
        };
        _.U = function(a) {
          var b, c;
          b = Lh(this, a);
          try {
            return (
              (c = (y(b.b != b.d.c), (b.c = b.b), (b.b = b.b.a), ++b.a, b.c.c)),
              Nh(b),
              c
            );
          } catch (d) {
            d = Cc(d);
            if (r(d, 55)) throw new Mc("Can't remove element " + a);
            throw Dc(d);
          }
        };
        t(214);
        function Oh(a) {
          a.b = E(nb, da, 1, 0, 3);
        }
        function uh(a, b, c) {
          Pc(b, a.b.length);
          a.b.splice(b, 0, c);
        }
        function P(a, b) {
          a.b[a.b.length] = b;
          return !0;
        }
        function Ph(a, b) {
          var c;
          c = b.K();
          if (0 == c.length) return !1;
          Oe(c, 0, a.b, a.b.length, c.length, !1);
          return !0;
        }
        function N(a, b) {
          z(b, a.b.length);
          return a.b[b];
        }
        function Qh(a, b) {
          for (var c = 0; c < a.b.length; ++c) if (zh(b, a.b[c])) return c;
          return -1;
        }
        function Rh(a, b) {
          var c;
          c = (z(b, a.b.length), a.b[b]);
          a.b.splice(b, 1);
          return c;
        }
        function Sh(a, b, c) {
          z(b, a.b.length);
          a.b[b] = c;
        }
        function Th(a, b) {
          var c, d;
          d = a.b.length;
          b.length < d && (b = Ke(b, d));
          for (c = 0; c < d; ++c) b[c] = a.b[c];
          b.length > d && (b[d] = null);
          return b;
        }
        function Q() {
          Oh(this);
        }
        function Uh(a) {
          Oh(this);
          a = Je(a.b, a.b.length);
          Oe(a, 0, this.b, 0, a.length, !1);
        }
        n(8, 213, la, Q, Uh);
        _.S = function(a, b) {
          uh(this, a, b);
        };
        _.F = function(a) {
          return P(this, a);
        };
        _.G = function(a) {
          return Ph(this, a);
        };
        _.H = function(a) {
          return -1 != Qh(this, a);
        };
        _.T = function(a) {
          return N(this, a);
        };
        _.I = function() {
          return 0 == this.b.length;
        };
        _.U = function(a) {
          return Rh(this, a);
        };
        _.J = function() {
          return this.b.length;
        };
        _.K = function() {
          return Je(this.b, this.b.length);
        };
        _.L = function(a) {
          return Th(this, a);
        };
        t(8);
        function Vh(a, b, c, d, e, f) {
          var g, l, m;
          if (7 > d - c)
            for (a = c, g = a + 1; g < d; ++g)
              for (m = g; m > a && 0 < f.Z(b[m - 1], b[m]); --m)
                (c = b[m]), (b[m] = b[m - 1]), (b[m - 1] = c);
          else if (
            ((l = c + e),
            (g = d + e),
            (m = l + ((g - l) >> 1)),
            Vh(b, a, l, m, -e, f),
            Vh(b, a, m, g, -e, f),
            0 >= f.Z(a[m - 1], a[m]))
          )
            for (; c < d; ) b[c++] = a[l++];
          else
            for (e = l, l = m; c < d; )
              l >= g || (e < m && 0 >= f.Z(a[e], a[l]))
                ? (b[c++] = a[e++])
                : (b[c++] = a[l++]);
        }
        function bh(a) {
          var b, c;
          c = 0;
          for (b = a.D(); b.Q(); )
            (a = b.R()), (c += null != a ? Ga(a) : 0), (c = ~~c);
          return c;
        }
        function Wh() {
          Wh = k;
          Xh = new Yh();
        }
        var Xh;
        function Zh(a, b) {
          Nc(a);
          Nc(b);
          return va(a) ? (a == b ? 0 : a < b ? -1 : 1) : a.t(b);
        }
        function Yh() {}
        n(187, 1, {}, Yh);
        _.Z = function(a, b) {
          return Zh(a, b);
        };
        t(187);
        function kh(a) {
          a._gwt_modCount = (a._gwt_modCount | 0) + 1;
        }
        function ph() {
          bc(this, this.e);
        }
        n(194, 19, ca, ph);
        t(194);
        function $h() {
          bc(this, this.e);
        }
        n(88, 19, ca, $h);
        t(88);
        function ai(a, b) {
          return bi(a.a, b) ? a.b[b.b] : null;
        }
        function ci(a, b, c) {
          di(a.a, b);
          ei(a, b.b, c);
        }
        function ei(a, b, c) {
          var d;
          d = a.b[b];
          a.b[b] = c;
          return d;
        }
        function fi(a) {
          var b;
          this.a = ((b = a.e && a.e()), new gi(b, Ke(b, b.length)));
          this.b = E(nb, da, 1, this.a.a.length, 3);
        }
        n(185, 210, ha, fi);
        _.N = function(a) {
          return bi(this.a, a);
        };
        _.O = function() {
          return new hi(this);
        };
        _.P = function(a) {
          return ai(this, a);
        };
        _.J = function() {
          return this.a.c;
        };
        t(185);
        function hi(a) {
          this.a = a;
        }
        n(92, 212, ka, hi);
        _.H = function(a) {
          return r(a, 24) ? Yg(this.a, a) : !1;
        };
        _.D = function() {
          return new ii(this.a);
        };
        _.J = function() {
          return this.a.a.c;
        };
        t(92);
        function ii(a) {
          this.c = a;
          this.a = new ji(this.c.a);
        }
        n(93, 1, {}, ii);
        _.Q = function() {
          return ki(this.a);
        };
        _.R = function() {
          return (this.b = ni(this.a)), new ti(this.c, this.b);
        };
        t(93);
        function ti(a, b) {
          this.b = a;
          this.a = b;
        }
        n(94, 216, { 24: 1 }, ti);
        _.W = function() {
          return this.a;
        };
        _.X = function() {
          return this.b.b[this.a.b];
        };
        _.Y = function(a) {
          return ei(this.b, this.a.b, a);
        };
        t(94);
        n(219, 212, ka);
        t(219);
        function di(a, b) {
          var c;
          Nc(b);
          c = b.b;
          return a.b[c] ? !1 : ((a.b[c] = b), ++a.c, !0);
        }
        function bi(a, b) {
          return r(b, 9) && !!b && a.b[b.b] == b;
        }
        function gi(a, b) {
          this.a = a;
          this.b = b;
          this.c = 0;
        }
        n(195, 219, ka, gi);
        _.F = function(a) {
          return di(this, a);
        };
        _.H = function(a) {
          return bi(this, a);
        };
        _.D = function() {
          return new ji(this);
        };
        _.J = function() {
          return this.c;
        };
        _.c = 0;
        t(195);
        function vi(a) {
          var b;
          ++a.a;
          for (b = a.c.a.length; a.a < b && !a.c.b[a.a]; ++a.a);
        }
        function ki(a) {
          return a.a < a.c.a.length;
        }
        function ni(a) {
          return y(a.a < a.c.a.length), (a.b = a.a), vi(a), a.c.b[a.b];
        }
        function ji(a) {
          this.c = a;
          vi(this);
        }
        n(99, 1, {}, ji);
        _.Q = function() {
          return ki(this);
        };
        _.R = function() {
          return ni(this);
        };
        _.a = -1;
        _.b = -1;
        t(99);
        function Wi(a, b) {
          return s(a) === s(b) || (null != a && ua(a, b));
        }
        function Yi() {
          hh(this);
        }
        n(20, 113, { 3: 1, 46: 1 }, Yi);
        t(20);
        function R(a, b) {
          return null == fh(a.a, b, a);
        }
        function S(a, b) {
          return ch(a.a, b);
        }
        function Zi() {
          this.a = new Yi();
        }
        n(17, 212, { 3: 1, 25: 1 }, Zi);
        _.F = function(a) {
          return R(this, a);
        };
        _.H = function(a) {
          return S(this, a);
        };
        _.I = function() {
          return 0 == this.a.b;
        };
        _.D = function() {
          return vh(new xh(this.a));
        };
        _.J = function() {
          return this.a.b;
        };
        _.tS = function() {
          return Xg(new xh(this.a));
        };
        t(17);
        function dh(a, b) {
          var c, d, e, f;
          c = null == b ? "0" : "" + ~~Ga(b);
          d = a.a[c] || [];
          e = 0;
          for (f = d.length; e < f; ++e)
            if (((c = d[e]), Wi(b, c.W()))) return c;
          return null;
        }
        function gh(a, b, c) {
          var d, e, f, g;
          d = null == b ? "0" : "" + ~~Ga(b);
          e = a.a;
          d = e[d] || (e[d] = []);
          f = 0;
          for (g = d.length; f < g; ++f)
            if (((e = d[f]), Wi(b, e.W()))) return e.Y(c);
          d[d.length] = new Bh(b, c);
          a = a.b;
          ++a.b;
          kh(a);
          return null;
        }
        function ej() {
          this.a = this.$();
        }
        n(89, 1, {}, ej);
        _.$ = function() {
          return Object.create(null);
        };
        _._ = function() {
          return new fj(this);
        };
        t(89);
        function gj(a) {
          if (a.c < a.a.length) return !0;
          if (a.b < a.d.length - 1) {
            var b = a.d[++a.b];
            a.a = a.f.a[b];
            a.c = 0;
            return !0;
          }
          return !1;
        }
        function fj(a) {
          this.f = a;
          this.d = Object.getOwnPropertyNames(this.f.a);
          this.a = E(hj, da, 24, 0, 0);
        }
        n(144, 1, {}, fj);
        _.Q = function() {
          return gj(this);
        };
        _.R = function() {
          return y(gj(this)), (this.e = this.a[this.c++]), this.e;
        };
        _.b = -1;
        _.c = 0;
        _.e = null;
        t(144);
        function lj() {
          ej.call(this);
        }
        n(142, 89, {}, lj);
        _.$ = function() {
          return {};
        };
        _._ = function() {
          var a = this.ab(),
            b = this.a,
            c;
          for (c in b)
            if (c == parseInt(c, 10))
              for (var d = b[c], e = 0, f = d.length; e < f; ++e) a.F(d[e]);
          return a.D();
        };
        _.ab = function() {
          return new vj(this);
        };
        t(142);
        function vj(a) {
          this.a = a;
          Oh(this);
        }
        n(143, 8, la, vj);
        _.U = function(a) {
          a = Rh(this, a);
          a: {
            var b = this.a,
              c = a.W(),
              d,
              e,
              f,
              g;
            f = null == c ? "0" : "" + ~~Ga(c);
            d = b.a[f] || [];
            for (g = 0; g < d.length; g++)
              if (((e = d[g]), Wi(c, e.W()))) {
                1 == d.length ? delete b.a[f] : d.splice(g, 1);
                b = b.b;
                --b.b;
                kh(b);
                break a;
              }
          }
          return a;
        };
        t(143);
        function wj() {}
        n(139, 1, {}, wj);
        _.bb = function() {
          return new ej();
        };
        _.cb = function() {
          return new xj();
        };
        t(139);
        function ih() {
          ih = k;
          var a, b;
          if ((b = Object.create && Object.getOwnPropertyNames))
            (b = Object.create(null)),
              void 0 !== b.__proto__ ||
              0 != Object.getOwnPropertyNames(b).length
                ? (b = !1)
                : ((b.__proto__ = 42), (b = 42 !== b.__proto__ ? !1 : !0));
          jh = b
            ? ((a = Object.create(null)),
              (a.__proto__ = 42),
              0 == Object.getOwnPropertyNames(a).length)
              ? new Kj()
              : new wj()
            : new Lj();
        }
        var jh;
        function Kj() {}
        n(141, 139, {}, Kj);
        _.cb = function() {
          return new Wj();
        };
        t(141);
        function Lj() {}
        n(140, 139, {}, Lj);
        _.bb = function() {
          return new lj();
        };
        _.cb = function() {
          return new Xj();
        };
        t(140);
        function Yj(a, b, c) {
          var d;
          d = a.a[b];
          if (void 0 === d) {
            var e = a.b;
            ++e.b;
            kh(e);
          }
          a.a[b] = void 0 === c ? null : c;
          return d;
        }
        function Zj(a, b) {
          var c;
          c = a.a[b];
          if (void 0 !== c) {
            delete a.a[b];
            var d = a.b;
            --d.b;
            kh(d);
          }
          return c;
        }
        function xj() {
          this.a = this.db();
        }
        n(71, 1, {}, xj);
        _.db = function() {
          return Object.create(null);
        };
        _._ = function() {
          var a;
          a = this.fb();
          return new ak(this, a);
        };
        _.eb = function(a) {
          return this.a[a];
        };
        _.fb = function() {
          return Object.getOwnPropertyNames(this.a);
        };
        _.gb = function(a) {
          return new bk(this, a);
        };
        _.hb = function(a, b) {
          return Yj(this, a, b);
        };
        _.ib = function(a) {
          return Zj(this, a);
        };
        t(71);
        function ak(a, b) {
          this.b = a;
          this.c = b;
        }
        n(131, 1, {}, ak);
        _.Q = function() {
          return this.a < this.c.length;
        };
        _.R = function() {
          return y(this.a < this.c.length), new bk(this.b, this.c[this.a++]);
        };
        _.a = 0;
        t(131);
        function bk(a, b) {
          this.a = a;
          this.b = b;
        }
        n(83, 216, { 24: 1 }, bk);
        _.W = function() {
          return this.b;
        };
        _.X = function() {
          return this.a.eb(this.b);
        };
        _.Y = function(a) {
          return this.a.hb(this.b, a);
        };
        t(83);
        function Xj() {
          xj.call(this);
        }
        n(128, 71, {}, Xj);
        _.db = function() {
          return {};
        };
        _._ = function() {
          var a = this.jb(),
            b;
          for (b in this.a)
            if (58 == b.charCodeAt(0)) {
              var c = this.gb(b.substring(1));
              a.F(c);
            }
          return a.D();
        };
        _.eb = function(a) {
          return this.a[":" + a];
        };
        _.jb = function() {
          return new ck(this);
        };
        _.hb = function(a, b) {
          return Yj(this, ":" + a, b);
        };
        _.ib = function(a) {
          return Zj(this, ":" + a);
        };
        t(128);
        function ck(a) {
          this.a = a;
          Oh(this);
        }
        n(130, 8, la, ck);
        _.U = function(a) {
          var b;
          return (b = Rh(this, a)), Zj(this.a, ":" + b.W()), b;
        };
        t(130);
        function Wj() {
          xj.call(this);
        }
        n(129, 71, {}, Wj);
        _.fb = function() {
          var a;
          a = Object.getOwnPropertyNames(this.a);
          void 0 !== this.a.__proto__ && (a[a.length] = "__proto__");
          return a;
        };
        t(129);
        function dk(a, b) {
          Mh(a, b, a.c.b, a.c);
          return !0;
        }
        function Mh(a, b, c, d) {
          var e;
          e = new ek();
          e.c = b;
          e.b = c;
          e.a = d;
          d.b = c.a = e;
          ++a.b;
        }
        function Lh(a, b) {
          var c, d;
          Pc(b, a.b);
          if (b >= a.b >> 1) for (d = a.c, c = a.b; c > b; --c) d = d.b;
          else for (d = a.a.a, c = 0; c < b; ++c) d = d.a;
          return new fk(a, b, d);
        }
        function gk() {
          this.a = new ek();
          this.c = new ek();
          this.a.a = this.c;
          this.c.b = this.a;
          this.a.b = this.c.a = null;
          this.b = 0;
        }
        n(80, 214, la, gk);
        _.F = function(a) {
          return dk(this, a);
        };
        _.J = function() {
          return this.b;
        };
        _.b = 0;
        t(80);
        function Nh(a) {
          var b;
          if (!a.c) throw new bf();
          b = a.c.a;
          var c = a.d,
            d = a.c;
          d.a.b = d.b;
          d.b.a = d.a;
          d.a = d.b = null;
          d.c = null;
          --c.b;
          a.b == a.c ? (a.b = b) : --a.a;
          a.c = null;
        }
        function fk(a, b, c) {
          this.d = a;
          this.b = c;
          this.a = b;
        }
        n(115, 1, {}, fk);
        _.Q = function() {
          return this.b != this.d.c;
        };
        _.R = function() {
          return (
            y(this.b != this.d.c),
            (this.c = this.b),
            (this.b = this.b.a),
            ++this.a,
            this.c.c
          );
        };
        _.V = function() {
          Nh(this);
        };
        _.a = 0;
        _.c = null;
        t(115);
        function ek() {}
        n(66, 1, {}, ek);
        t(66);
        var hj = mb();
        function Lc() {
          bc(this, this.e);
        }
        n(55, 19, { 3: 1, 15: 1, 12: 1, 55: 1 }, Lc);
        t(55);
        function zh(a, b) {
          return s(a) === s(b) || (null != a && ua(a, b));
        }
        function Ah(a) {
          return null != a ? Ga(a) : 0;
        }
        function hk(a, b) {
          if (0 > a || a >= b) throw new Se();
        }
        n(124, 213, la);
        _.S = function(a, b) {
          hk(a, this.a.b.length + 1);
          uh(this.a, a, b);
        };
        _.F = function(a) {
          return P(this.a, a);
        };
        _.G = function(a) {
          return Ph(this.a, a);
        };
        _.H = function(a) {
          return -1 != Qh(this.a, a);
        };
        _.T = function(a) {
          return hk(a, this.a.b.length), N(this.a, a);
        };
        _.I = function() {
          return 0 == this.a.b.length;
        };
        _.D = function() {
          return new M(this.a);
        };
        _.U = function(a) {
          return hk(a, this.a.b.length), this.a.U(a);
        };
        _.J = function() {
          return this.a.b.length;
        };
        _.K = function() {
          var a = this.a;
          return Je(a.b, a.b.length);
        };
        _.L = function(a) {
          return Th(this.a, a);
        };
        _.tS = function() {
          return Xg(this.a);
        };
        t(124);
        function ik(a) {
          var b;
          b = a.a.b.length;
          if (0 < b) return hk(b - 1, a.a.b.length), a.a.U(b - 1);
          throw new $h();
        }
        function jk() {
          this.a = new Q();
        }
        n(67, 124, la, jk);
        t(67);
        function Dh(a, b) {
          var c, d;
          for (d = a.b; d; ) {
            c = Zh(b, d.c);
            if (0 == c) return d;
            c = 0 > c ? 0 : 1;
            d = d.a[c];
          }
          return null;
        }
        function kk(a, b, c, d, e, f, g, l) {
          var m;
          if (d) {
            (m = d.a[0]) && kk(a, b, c, m, e, f, g, l);
            m = d.c;
            var q, v;
            (c.kb() && ((q = Zh(m, e)), 0 > q || (!f && 0 == q))) ||
              (c.lb() && ((v = Zh(m, g)), 0 < v || (!l && 0 == v))) ||
              b.F(d);
            (d = d.a[1]) && kk(a, b, c, d, e, f, g, l);
          }
        }
        function lk(a, b, c, d) {
          var e, f;
          if (b) {
            e = Zh(c.c, b.c);
            if (0 == e) return (d.d = yh(b, c.d)), (d.b = !0), b;
            e = 0 > e ? 0 : 1;
            b.a[e] = lk(a, b.a[e], c, d);
            mk(b.a[e]) &&
              (mk(b.a[1 - e])
                ? ((b.b = !0), (b.a[0].b = !1), (b.a[1].b = !1))
                : mk(b.a[e].a[e])
                ? (b = nk(b, 1 - e))
                : mk(b.a[e].a[1 - e]) &&
                  (b =
                    ((f = 1 - (1 - e)),
                    (b.a[f] = nk(b.a[f], f)),
                    nk(b, 1 - e))));
          } else return c;
          return b;
        }
        function mk(a) {
          return !!a && a.b;
        }
        function nk(a, b) {
          var c, d;
          c = 1 - b;
          d = a.a[c];
          a.a[c] = d.a[b];
          d.a[b] = a;
          a.b = !0;
          d.b = !1;
          return d;
        }
        function ok() {
          var a = null;
          this.b = null;
          !a && (a = (Wh(), Wh(), Xh));
          this.a = a;
        }
        n(96, 218, { 3: 1, 46: 1 }, ok);
        _.O = function() {
          return new Hh(this);
        };
        _.J = function() {
          return this.c;
        };
        _.c = 0;
        t(96);
        function Fh(a) {
          var b = (pk(), qk),
            c;
          c = new Q();
          kk(a, c, b, a.b, null, !1, null, !1);
          this.a = new rh(c, 0);
        }
        n(74, 1, {}, Fh);
        _.Q = function() {
          return this.a.Q();
        };
        _.R = function() {
          return this.a.R();
        };
        t(74);
        function Hh(a) {
          this.a = a;
        }
        n(98, 97, ka, Hh);
        t(98);
        function rk(a, b) {
          Bh.call(this, a, b);
          this.a = E(sk, da, 58, 2, 0);
          this.b = !0;
        }
        n(58, 49, { 48: 1, 49: 1, 24: 1, 58: 1 }, rk);
        _.b = !1;
        var sk = t(58);
        function tk() {}
        n(188, 1, {}, tk);
        _.tS = function() {
          return (
            "State: mv\x3d" +
            this.c +
            " value\x3d" +
            this.d +
            " done\x3d" +
            this.a +
            " found\x3d" +
            this.b
          );
        };
        _.a = !1;
        _.b = !1;
        _.c = !1;
        t(188);
        function pk() {
          pk = k;
          qk = new uk("All", 0);
          vk = new wk();
          xk = new yk();
          zk = new Ak();
        }
        function uk(a, b) {
          C.call(this, a, b);
        }
        n(29, 9, ma, uk);
        _.kb = function() {
          return !1;
        };
        _.lb = function() {
          return !1;
        };
        var qk,
          vk,
          xk,
          zk,
          Bk = u(29, function() {
            pk();
            return D(w(Bk, 1), ea, 29, 0, [qk, vk, xk, zk]);
          });
        function wk() {
          C.call(this, "Head", 1);
        }
        n(189, 29, ma, wk);
        _.lb = function() {
          return !0;
        };
        u(189, null);
        function yk() {
          C.call(this, "Range", 2);
        }
        n(190, 29, ma, yk);
        _.kb = function() {
          return !0;
        };
        _.lb = function() {
          return !0;
        };
        u(190, null);
        function Ak() {
          C.call(this, "Tail", 3);
        }
        n(191, 29, ma, Ak);
        _.kb = function() {
          return !0;
        };
        u(191, null);
        function Ck(a) {
          this.a = new ok();
          Wg(this, a);
        }
        n(90, 212, { 3: 1, 25: 1 }, Ck);
        _.F = function(a) {
          var b = this.a,
            c = (Te(), Ue);
          a = new rk(a, c);
          c = new tk();
          b.b = lk(b, b.b, a, c);
          c.b || ++b.c;
          b.b.b = !1;
          return null == c.d;
        };
        _.H = function(a) {
          return !!Dh(this.a, a);
        };
        _.D = function() {
          return Gh(new Jh(this.a));
        };
        _.J = function() {
          return this.a.c;
        };
        t(90);
        function Dk(a) {
          var b;
          if (!(0 < a.a.b)) {
            b = Ek(a.f);
            !b.length || dk(a.a, b);
            b = a.a;
            var c;
            var d = $doc.title,
              e = $doc.documentElement,
              f;
            c = f = "";
            p == p
              ? (f = c = d)
              : e &&
                ((d = e.getElementsByTagName("TITLE")),
                0 < d.length && (f = c = d[0].textContent));
            if (f.length) {
              U();
              if (/ [\|\-] /i.test(f))
                (f = c.replace(RegExp("(.*)[\\|\\-] .*", "gi"), "$1")),
                  3 > Fk.Bb(f) &&
                    (f = c.replace(
                      RegExp("[^\\|\\-]*[\\|\\-](.*)", "gi"),
                      "$1"
                    ));
              else if (-1 != f.indexOf(": "))
                (f = c.replace(RegExp(".*:(.*)", "gi"), "$1")),
                  3 > Fk.Bb(f) &&
                    (f = c.replace(RegExp("[^:]*[:](.*)", "gi"), "$1"));
              else if (e && (150 < f.length || 15 > f.length)) {
                f = e.getElementsByTagName("H1");
                e = "";
                for (d = 0; d < f.length && !e.length; d++) e = f[d].innerText;
                f = e;
                !f.length && (f = c);
              }
              f = Gk(f);
              4 >= Fk.Bb(f) && (f = c);
              c = f;
            } else c = "";
            dk(b, c);
            p == p && dk(a.a, $doc.title);
          }
        }
        function Hk(a) {
          var b, c;
          this.b = a;
          this.a = new gk();
          this.e = ((b = {}), (b[6] = []), b);
          this.d = ((c = {}), c);
          b = V();
          this.f = new Ik(a, this.e);
          a = V() - b;
          if (void 0 == a) throw new TypeError();
          this.e[1] = a;
          this.g = "";
        }
        n(102, 1, {}, Hk);
        t(102);
        function Jk() {}
        n(103, 1, {}, Jk);
        t(103);
        function Kk(a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            l,
            m,
            q,
            v,
            I,
            pb,
            Aa,
            li,
            kn,
            mi,
            ia,
            mf,
            nf,
            ln,
            mn;
          v = V();
          var nn = $doc.documentElement.textContent,
            on,
            pn;
          U();
          Fk =
            ((on = RegExp("[\\u3040-\\uA4CF]", "g")),
            (pn = RegExp("[\\uAC00-\\uD7AF]", "g")),
            on.test(nn) ? new Lk() : pn.test(nn) ? new Mk() : new Nk());
          m = ((li = {}), (li[10] = []), li);
          c = new Hk($doc.documentElement);
          var sn = (Dk(c), Kh(c.a, 0));
          if (void 0 == sn) throw new TypeError();
          m[1] = sn;
          var oi;
          if (void 0 != a[2]) {
            if (void 0 === a[2]) throw new TypeError();
            oi = a[2];
          } else oi = 0;
          Ok = oi;
          W("DomDistiller debug level: " + Ok);
          b = ((kn = {}), kn);
          var pi;
          if ((pi = void 0 != a[1])) {
            if (void 0 === a[1]) throw new TypeError();
            pi = a[1];
          }
          var tn = pi,
            mc,
            Vd,
            qi,
            Wd,
            Vc,
            ri,
            Xd,
            un,
            of,
            Wc;
          Vc = V();
          ri = new Jk();
          Xd = new Pk();
          un = c.b.querySelectorAll(
            'meta[name\x3d"viewport"][content*\x3d"width\x3ddevice-width"]'
          );
          of = new Qk(Xd);
          of.i = 0 < un.length;
          var si;
          var xn = c.b,
            pf,
            nc;
          pf = xn.getElementsByTagName("ARTICLE");
          nc = Rk(pf);
          1 == nc.b.length
            ? (si = (z(0, nc.b.length), nc.b[0]))
            : ((pf = xn.querySelectorAll(
                '[itemscope][itemtype*\x3d"Article"],[itemscope][itemtype*\x3d"Posting"]'
              )),
              (nc = Rk(pf)),
              (si = 0 < nc.b.length ? Sk(nc) : null));
          mc =
            ((Wc = si),
            (of.d = !!Wc),
            Wc ? 1 <= Ok && W("Extracted article element: " + Wc) : (Wc = c.b),
            Tk(new Uk(of), Wc),
            (ri.a = (Vk(Xd, Xd.d), Xd.b)),
            Dk(c),
            ri);
          var An = V() - Vc;
          if (void 0 == An) throw new TypeError();
          c.e[2] = An;
          Vc = V();
          var Ba = mc.a,
            J;
          var Yd, rf, ta, ui, Xc;
          Xc = new Q();
          b: {
            var Zd;
            for (Zd = 0; Zd < Ba.a.b.length; Zd++)
              if (r(N(Ba.a, Zd), 35)) {
                ta = Zd;
                break b;
              }
            ta = Ba.a.b.length;
          }
          if (ta != Ba.a.b.length) {
            ui = rf = N(Ba.a, ta).d;
            Yd = new Wk(Ba.a, ta);
            for (++ta; ta < Ba.a.b.length; ta++)
              r(N(Ba.a, ta), 35) &&
                ((rf = N(Ba.a, ta).d),
                rf == ui
                  ? Xk(Yd, new Wk(Ba.a, ta))
                  : ((Xc.b[Xc.b.length] = Yd),
                    (ui = rf),
                    (Yd = new Wk(Ba.a, ta))));
            Xc.b[Xc.b.length] = Yd;
          }
          J = new Yk(Xc);
          var hr = c.a,
            O;
          Zk(J, !0, "Start");
          var ir = ($k(), J),
            wi,
            qb;
          for (qb = new M(ir.a); qb.b < qb.d.J(); ) {
            wi = (y(qb.b < qb.d.J()), qb.d.T((qb.c = qb.b++)));
            var xi;
            var yi = wi,
              $d = void 0;
            14 < yi.d
              ? (xi = !1)
              : (($d = Gk(yi.g)),
                (xi =
                  8 <= $d.length
                    ? al.test($d)
                    : 1 == yi.c
                    ? "Comment" === $d
                    : "Shares" === $d
                    ? !0
                    : !1));
            xi && R(wi.b, "STRICTLY_NOT_CONTENT");
          }
          var zi = new bl(hr),
            tf,
            rb,
            Ca;
          if (zi.a)
            for (rb = new M(J.a); rb.b < rb.d.J(); )
              (tf = (y(rb.b < rb.d.J()), rb.d.T((rb.c = rb.b++)))),
                (Ca = tf.g),
                (Ca = zf(Ca)),
                (Ca = Af(Ca, "'")),
                (Ca = ug(Ca).toLowerCase()),
                S(zi.a, Ca) && R(tf.b, "de.l3s.boilerpipe/TITLE"),
                (Ca = ug(Ca.replace(cl, ""))),
                S(zi.a, Ca) && R(tf.b, "de.l3s.boilerpipe/TITLE");
          var ae, uf, Da, be, ce, Ja, ab;
          Ja = J.a;
          if (0 == Ja.b.length) O = !1;
          else {
            uf = !1;
            for (Da = 0; Da < Ja.b.length; Da++)
              (ce = 0 == Da ? null : (z(Da - 1, Ja.b.length), Ja.b[Da - 1])),
                (ae = (z(Da, Ja.b.length), Ja.b[Da])),
                (be =
                  Da + 1 == Ja.b.length
                    ? null
                    : (z(Da + 1, Ja.b.length), Ja.b[Da + 1])),
                (uf |=
                  (0.333333 >= ae.c
                    ? !ce || 0.555556 >= ce.c
                      ? 16 >= ae.d
                        ? !be || 15 >= be.d
                          ? !ce || 4 >= ce.d
                            ? (ab = !1)
                            : (ab = !0)
                          : (ab = !0)
                        : (ab = !0)
                      : 40 >= ae.d
                      ? !be || 17 >= be.d
                        ? (ab = !1)
                        : (ab = !0)
                      : (ab = !0)
                    : (ab = !1),
                  dl(ae, ab)));
            O = uf;
          }
          Zk(J, O, "Classification Complete");
          var jr = (el(), fl),
            Ai,
            In,
            Bi,
            vf,
            Jn,
            wf,
            sb;
          Ai = !1;
          sb = new M(J.a);
          a: for (; sb.b < sb.d.J(); )
            if (((wf = (y(sb.b < sb.d.J()), sb.d.T((sb.c = sb.b++)))), wf.a))
              for (Bi = jr.a, vf = 0, Jn = Bi.length; vf < Jn; ++vf)
                if (((In = Bi[vf]), S(wf.b, In))) {
                  dl(wf, !1);
                  Ai = !0;
                  continue a;
                }
          O = Ai;
          Zk(J, O, "Ignore Strictly Not Content blocks");
          var Ci = gl();
          Ci.e = 0.5;
          Ci.d = 10;
          O = hl(il(Ci), J);
          Zk(J, O, "SimilarSiblingContentExpansion: Cross headings");
          var xf = gl();
          xf.c = !0;
          xf.e = 0;
          xf.d = 10;
          O = hl(il(xf), J);
          Zk(J, O, "SimilarSiblingContentExpansion: Mixed tags");
          var yf, tb, Nn, de, Ea, Di;
          Di = J.a;
          if (2 > Di.b.length) O = !1;
          else {
            yf = !1;
            de = new rh(Di, 0);
            for (tb = de.R(); de.Q(); )
              if (
                ((Ea = tb),
                (tb = de.R()),
                S(Ea.b, "de.l3s.boilerpipe/HEADING") &&
                  !(
                    S(Ea.b, "STRICTLY_NOT_CONTENT") ||
                    S(tb.b, "STRICTLY_NOT_CONTENT") ||
                    S(Ea.b, "de.l3s.boilerpipe/TITLE") ||
                    S(tb.b, "de.l3s.boilerpipe/TITLE")
                  ))
              )
                if (tb.a) {
                  yf = !0;
                  Nn = Ea.a;
                  Xk(Ea, tb);
                  tb = Ea;
                  de.V();
                  var On = Ea;
                  S(On.b, "de.l3s.boilerpipe/HEADING") &&
                    On.b.a.c.ib("de.l3s.boilerpipe/HEADING");
                  Nn || R(Ea.b, "BOILERPLATE_HEADING_FUSED");
                } else Ea.a && ((yf = !0), dl(Ea, !1));
            O = yf;
          }
          Zk(J, O, "HeadingFusion");
          O = jl((kl(), ll), J);
          Zk(J, O, "BlockProximityFusion: Distance 1");
          var kr = (ml(), nl),
            Ei,
            bb,
            Fi,
            Un;
          Un = J.a;
          Ei = !1;
          for (bb = new M(Un); bb.b < bb.d.J(); )
            (Fi = (y(bb.b < bb.d.J()), bb.d.T((bb.c = bb.b++)))),
              Fi.a ||
                (null != kr.a && S(Fi.b, "de.l3s.boilerpipe/TITLE")) ||
                (qh(bb), (Ei = !0));
          O = Ei;
          Zk(J, O, "BlockFilter");
          O = jl(ol, J);
          Zk(J, O, "BlockProximityFusion: Same level content-only");
          var lr = (pl(), ql),
            Gi,
            ub,
            ee,
            Hi,
            Ii,
            Ka,
            vb,
            wb,
            Yc;
          Yc = J.a;
          if (2 > Yc.b.length) O = !1;
          else {
            Hi = -1;
            ub = null;
            Gi = 0;
            ee = -1;
            for (wb = new M(Yc); wb.b < wb.d.J(); )
              (Ka = (y(wb.b < wb.d.J()), wb.d.T((wb.c = wb.b++)))),
                Ka.a &&
                  ((Ii = Ka.d), Ii > Hi && ((ub = Ka), (Hi = Ii), (ee = Gi))),
                ++Gi;
            for (vb = new M(Yc); vb.b < vb.d.J(); )
              (Ka = (y(vb.b < vb.d.J()), vb.d.T((vb.c = vb.b++)))),
                Ka == ub
                  ? (dl(Ka, !0),
                    R(Ka.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
                  : (dl(Ka, !1), R(Ka.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT"));
            if (lr.a && -1 != ee) {
              var mr = ee,
                xb,
                Yn,
                Ji,
                Ki;
              Ki = B(rl(N(ub.j, N(ub.i, ub.i.b.length - 1).a)));
              for (Ji = new rh(Yc, mr + 1); Ji.Q(); )
                (xb = Ji.R()),
                  (Yn = B(sl(N(xb.j, N(xb.i, 0).a)))),
                  B(Ki) == B(Yn) &&
                    (dl(xb, !0),
                    R(xb.b, "SIBLING_OF_MAIN_CONTENT"),
                    (Ki = B(rl(N(xb.j, N(xb.i, xb.i.b.length - 1).a)))));
              var nr = ee,
                yb,
                Zn,
                Li,
                Zc;
              Li = B(sl(N(ub.j, N(ub.i, 0).a)));
              for (Zc = new rh(Yc, nr); 0 < Zc.b; )
                (yb = (y(0 < Zc.b), N(Zc.a, (Zc.c = --Zc.b)))),
                  (Zn = B(rl(N(yb.j, N(yb.i, yb.i.b.length - 1).a)))),
                  B(Li) == B(Zn) &&
                    (dl(yb, !0),
                    R(yb.b, "SIBLING_OF_MAIN_CONTENT"),
                    (Li = B(sl(N(yb.j, N(yb.i, 0).a)))));
            }
            O = !0;
          }
          Zk(J, O, "Keep Largest Block");
          var Bf, oc, Cf, $c, zb, Ab, fe;
          Cf = 0;
          oc = fe = -1;
          for (Ab = new M(J.a); Ab.b < Ab.d.J(); )
            ($c = (y(Ab.b < Ab.d.J()), Ab.d.T((Ab.c = Ab.b++)))),
              -1 == oc &&
                S($c.b, "de.l3s.boilerpipe/TITLE") &&
                ((fe = Cf), (oc = -1)),
              -1 == oc && $c.a && (oc = Cf),
              ++Cf;
          if (oc <= fe || -1 == fe) O = !1;
          else {
            Bf = !1;
            for (zb = new M(new th(J.a, fe, oc)); zb.b < zb.d.J(); )
              ($c = (y(zb.b < zb.d.J()), zb.d.T((zb.c = zb.b++)))),
                S($c.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                  (Bf |= dl($c, !0));
            O = Bf;
          }
          Zk(J, O, "Expand Title to Content");
          var Mi, Df, cb, Bb, Cb;
          Mi = !1;
          Df = -1;
          for (Cb = new M(J.a); Cb.b < Cb.d.J(); )
            if (
              ((cb = (y(Cb.b < Cb.d.J()), Cb.d.T((Cb.c = Cb.b++)))),
              cb.a && S(cb.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
            ) {
              Df = cb.f;
              break;
            }
          if (-1 == Df) O = !1;
          else {
            for (Bb = new M(J.a); Bb.b < Bb.d.J(); )
              (cb = (y(Bb.b < Bb.d.J()), Bb.d.T((Bb.c = Bb.b++)))),
                !cb.a && 100 <= cb.d && cb.f == Df && (dl(cb, !0), (Mi = !0));
            O = Mi;
          }
          Zk(J, O, "Largest Block Same Tag Level -\x3e Content");
          var Ni, Ef, db, Db;
          Ni = !1;
          Ef = aa;
          for (Db = new M(J.a); Db.b < Db.d.J(); )
            (db = (y(Db.b < Db.d.J()), Db.d.T((Db.c = Db.b++)))),
              db.a && S(db.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")
                ? (Ef = db.f)
                : db.f > Ef &&
                  S(db.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") &&
                  S(db.b, "de.l3s.boilerpipe/LI") &&
                  0 == db.c
                ? (dl(db, !0), (Ni = !0))
                : (Ef = aa);
          O = Ni;
          Zk(J, O, "List at end filter");
          var or = c.d,
            Oi,
            Ff,
            Pi,
            Eb;
          Ff = 0;
          for (Eb = new M(J.a); Eb.b < Eb.d.J(); )
            (Pi = (y(Eb.b < Eb.d.J()), Eb.d.T((Eb.c = Eb.b++)))),
              Pi.a && (Ff += Pi.d);
          Oi = Ff;
          if (void 0 == Oi) throw new TypeError();
          or[1] = Oi;
          var pr, Fb;
          for (Fb = new M(J.a); Fb.b < Fb.d.J(); ) {
            var Gf = (pr = (y(Fb.b < Fb.d.J()), Fb.d.T((Fb.c = Fb.b++)))),
              $n = void 0,
              Gb = void 0,
              Qi = void 0;
            if (Gf.a)
              for (Gb = new M(Gf.i); Gb.b < Gb.d.J(); )
                ($n = (y(Gb.b < Gb.d.J()), Gb.d.T((Gb.c = Gb.b++)))),
                  (Qi = N(Gf.j, $n.a)),
                  (Qi.p = !0),
                  S(Gf.b, "de.l3s.boilerpipe/TITLE") &&
                    R(Qi.e, "de.l3s.boilerpipe/TITLE");
          }
          var Hf, Hb, If;
          If = !1;
          for (Hb = new M(mc.a.a); Hb.b < Hb.d.J(); )
            (Hf = (y(Hb.b < Hb.d.J()), Hb.d.T((Hb.c = Hb.b++)))),
              Hf.p ? (If = !0) : r(Hf, 35) ? (If = !1) : If && (Hf.p = !0);
          var ao = mc.a,
            Jf,
            La,
            Ib,
            Jb,
            ad,
            bo,
            Kf;
          Jf = new Q();
          Kf = ad = null;
          for (Jb = new M(ao.a); Jb.b < Jb.d.J(); )
            (La = (y(Jb.b < Jb.d.J()), Jb.d.T((Jb.c = Jb.b++)))),
              r(La, 35) && La.p && (!ad && (ad = La), (Kf = La));
          if (Kf) {
            for (
              Ib = new M(ao.a);
              Ib.b < Ib.d.J() &&
              !((La = (y(Ib.b < Ib.d.J()), Ib.d.T((Ib.c = Ib.b++)))),
              ((bo = r(La, 32)) && La.p) || La == Kf);

            )
              bo && P(Jf, La);
            var ge, Ri, Si, he, co, Lf, Kb, bd;
            if (0 != Jf.b.length) {
              Si = null;
              ad && (Si = N(ad.a, ad.c));
              co =
                ((bd = new Q()),
                P(bd, new tl()),
                P(bd, new ul()),
                P(bd, new vl(Si)),
                P(bd, new wl()),
                bd);
              ge = null;
              Ri = 0;
              for (Kb = new M(Jf); Kb.b < Kb.d.J(); ) {
                Lf = (y(Kb.b < Kb.d.J()), Kb.d.T((Kb.c = Kb.b++)));
                var Mf = void 0,
                  io = void 0,
                  Lb = void 0,
                  ie = void 0;
                if (Lf) {
                  ie = 0;
                  Mf = Lf.d;
                  for (Lb = new M(co); Lb.b < Lb.d.J(); )
                    (io = (y(Lb.b < Lb.d.J()), Lb.d.T((Lb.c = Lb.b++)))),
                      (ie += io.Gb(Mf));
                  2 > Ok ||
                    (Mf
                      ? W("FINAL SCORE: " + ie + " : " + A(Mf, "src"))
                      : W("Null image attempting to be scored!"));
                  he = ie;
                } else he = 0;
                26 <= he && (!ge || Ri < he) && ((ge = Lf), (Ri = he));
              }
              ge && (ge.p = !0);
            }
          }
          var qr = mc.a,
            Nf,
            Mb,
            Ma,
            je,
            Ti,
            Ui,
            jo,
            ke;
          Ma = !1;
          Ti = -1;
          je = new jk();
          for (Mb = new M(qr.a); Mb.b < Mb.d.J(); )
            (Nf = (y(Mb.b < Mb.d.J()), Mb.d.T((Mb.c = Mb.b++)))),
              r(Nf, 51)
                ? ((ke = Nf),
                  ke.b == (xl(), yl)
                    ? ((ke.p = Ma), P(je.a, ke), (Ma = !1))
                    : ((Ui = ik(je)),
                      (Ma |= Ti >= je.a.b.length) && (Ti = je.a.b.length - 1),
                      (jo = Ui.p),
                      (Ui.p = Ma),
                      (ke.p = Ma),
                      (Ma = jo)))
                : Ma || (Ma = Nf.p);
          var ko = V() - Vc;
          if (void 0 == ko) throw new TypeError();
          c.e[3] = ko;
          Vc = V();
          var Vi, Nb, dd;
          dd = new Tg();
          for (Nb = new M(mc.a.a); Nb.b < Nb.d.J(); )
            if (((Vi = (y(Nb.b < Nb.d.J()), Nb.d.T((Nb.c = Nb.b++)))), Vi.p)) {
              var rr = Vi.Eb(tn);
              dd.a += rr;
              tn && (dd.a += "\n");
            }
          qi = dd.a;
          var lo = V() - Vc;
          if (void 0 == lo) throw new TypeError();
          c.e[4] = lo;
          var sr = mc.a,
            Na,
            Ob,
            Of,
            Pf;
          Of = new Q();
          for (Ob = new M(sr.a); Ob.b < Ob.d.J(); )
            if (((Na = (y(Ob.b < Ob.d.J()), Ob.d.T((Ob.c = Ob.b++)))), Na.p))
              if (r(Na, 32))
                Ph(
                  Of,
                  (!Na.b && zl(Na),
                  (Pf = new Q()),
                  !Na.e.length || P(Pf, Na.e),
                  Ph(Pf, Al(Na.b)),
                  Pf)
                );
              else if (r(Na, 68)) {
                var tr = Of,
                  Qf = Na,
                  Rf = void 0,
                  Sf = void 0,
                  Tf = void 0,
                  Xi = void 0;
                !Qf.a && (Qf.a = Bl(Cl(Qf.b)));
                Tf = new Q();
                Xi = Qf.a.querySelectorAll("IMG, SOURCE");
                for (Rf = 0; Rf < Xi.length; Rf++)
                  (Sf = Xi[Rf]),
                    !Sf.src.length || P(Tf, Sf.src),
                    Ph(Tf, Al(Sf));
                Ph(tr, Tf);
              }
          c.c = Of;
          if (4 <= Ok) {
            for (Wd = 0; Wd < c.e[6].length; Wd++) {
              var no = c.e;
              if (Wd >= no[6].length) throw new RangeError();
              Vd = no[6][Wd];
              if (void 0 === Vd[1]) throw new TypeError();
              var ur = "Timing: " + Vd[1] + " \x3d ";
              if (void 0 === Vd[2]) throw new TypeError();
              W(ur + Vd[2]);
            }
            var oo = c.e;
            if (void 0 === oo[1]) throw new TypeError();
            var vr =
                "Timing: MarkupParsingTime \x3d " +
                oo[1] +
                "\nTiming: DocumentConstructionTime \x3d ",
              po = c.e;
            if (void 0 === po[2]) throw new TypeError();
            var wr = vr + po[2] + "\nTiming: ArticleProcessingTime \x3d ",
              qo = c.e;
            if (void 0 === qo[3]) throw new TypeError();
            var xr = wr + qo[3] + "\nTiming: FormattingTime \x3d ",
              ro = c.e;
            if (void 0 === ro[4]) throw new TypeError();
            W(xr + ro[4]);
          }
          if (void 0 == qi) throw new TypeError();
          b[1] = qi;
          if (void 0 == b) throw new TypeError();
          m[2] = b;
          var so = ((null == c.g || !c.g.length) && (c.g = "auto"), c.g);
          if (void 0 == so) throw new TypeError();
          m[9] = so;
          for (Aa = new M(c.c); Aa.b < Aa.d.J(); ) {
            pb = (y(Aa.b < Aa.d.J()), Aa.d.T((Aa.c = Aa.b++)));
            var yr = ((mi = {}), m[10].push(mi), mi);
            if (void 0 == pb) throw new TypeError();
            yr[1] = pb;
          }
          var $i;
          if (void 0 != a[3]) {
            if (void 0 === a[3]) throw new TypeError();
            $i = a[3];
          } else $i = $doc.URL;
          g = $i;
          I = c.e;
          q = V();
          var aj;
          if (void 0 != a[4]) {
            if (void 0 === a[4]) throw new TypeError();
            aj = a[4];
          } else aj = "next";
          if ("pagenum" === aj) {
            Dl();
            ia = new El(I);
            var bj;
            var vo = $doc.documentElement,
              cj,
              dj,
              ed,
              Uf,
              Vf,
              wo,
              Wf;
            Wf = V();
            ia.b = g.replace(Fl, "");
            ia.d = Gl(ia.b);
            if (ia.d) {
              dj = Hl(Il(vo, g));
              cj = vo.getElementsByTagName("A");
              for (ed = 0; ed < cj.length; )
                (Vf = cj[ed]),
                  (wo = Jl(ia, Vf, dj))
                    ? (Kl(ia.a),
                      Ll(ia, Vf, !1, !0, null),
                      Ml(ia.a, wo.a),
                      (ia.c = 0),
                      Ll(ia, Vf, !1, !1, dj),
                      (ed += 1 + ia.c))
                    : ++ed;
              var me = ia.a;
              0 != me.a.b.length &&
                0 == N(me.a, me.a.b.length - 1).b.b.length &&
                me.a.U(me.a.b.length - 1);
              Nl(Wf, ia.e, "PageParameterParser");
              Wf = V();
              var zr = ia.a,
                zo = ia.b,
                gd,
                pc,
                Zf,
                Pb,
                $f,
                ag;
              if (($f = Gl(zo))) {
                $f.d.username = "";
                $f.d.password = "";
                pc = new Ol();
                for (Pb = new M(zr.a); Pb.b < Pb.d.J(); )
                  if (
                    ((Zf = (y(Pb.b < Pb.d.J()), Pb.d.T((Pb.c = Pb.b++)))),
                    !(2 > Zf.b.b.length))
                  ) {
                    for (
                      var T = Zf.b,
                        Ar = 0 > Zf.a,
                        bg = $f,
                        Br = pc.a ? pc.a.d : "",
                        hd = void 0,
                        Ao = void 0,
                        Qb = void 0,
                        hd = 0,
                        Qb = new M(T);
                      Qb.b < Qb.d.J();

                    )
                      (Ao = (y(Qb.b < Qb.d.J()), Qb.d.T((Qb.c = Qb.b++)))),
                        !Ao.b.length || ++hd;
                    if (0 == hd) ag = null;
                    else {
                      if (Ar)
                        for (
                          var id = void 0,
                            jd = void 0,
                            Bo = void 0,
                            jd = 0,
                            id = T.b.length - 1;
                          jd < id;
                          ++jd, --id
                        )
                          (Bo = (z(jd, T.b.length), T.b[jd])),
                            Sh(T, jd, (z(id, T.b.length), T.b[id])),
                            Sh(T, id, Bo);
                      2 == T.b.length &&
                        1 == hd &&
                        1 == (z(0, T.b.length), T.b[0]).a &&
                        2 == (z(1, T.b.length), T.b[1]).a &&
                        (lf((z(0, T.b.length), T.b[0]).b)
                          ? Sh(T, 0, new Pl(1, Va(bg.d)))
                          : Sh(T, 1, new Pl(2, Va(bg.d))),
                        ++hd);
                      var cg = void 0;
                      if (2 <= hd) {
                        for (
                          var qc = void 0,
                            ij = void 0,
                            kd = void 0,
                            dg = void 0,
                            jj = void 0,
                            Rb = void 0,
                            rc = void 0,
                            ld = void 0,
                            Sb = void 0,
                            ne = void 0,
                            Pa = void 0,
                            eg = void 0,
                            Co = void 0,
                            fg = void 0,
                            oe = void 0,
                            Do = void 0,
                            Tb = void 0,
                            pe = void 0,
                            pe = 0,
                            Tb = new M(T);
                          Tb.b < Tb.d.J();

                        )
                          (Do = (y(Tb.b < Tb.d.J()), Tb.d.T((Tb.c = Tb.b++)))),
                            Do.a == pe + 1 && ++pe;
                        if (28 <= pe && 31 >= pe) cg = null;
                        else {
                          jj = "";
                          ne = new Ql();
                          eg = E(Rl, da, 69, T.b.length, 0);
                          for (rc = 0; rc < T.b.length; rc++)
                            if (
                              ((Sb = (z(rc, T.b.length), T.b[rc])),
                              Sb.b.length && ((oe = Gl(Sb.b)), (eg[rc] = oe)))
                            ) {
                              oe.d.username = "";
                              oe.d.password = "";
                              var Fo = oe,
                                Dr = Sb.a,
                                Er = rc,
                                Fr = ne,
                                qe = void 0,
                                kj = void 0,
                                re = void 0,
                                gg = void 0,
                                sc = Fo,
                                hg = void 0,
                                md = void 0,
                                ig = void 0,
                                jg = void 0;
                              if (null == sc.b)
                                if (((jg = sc.d.search), jg.length))
                                  for (
                                    hg =
                                      (U(),
                                      lg(
                                        jg.substr(1, jg.length - 1),
                                        "\\\x26"
                                      )),
                                      sc.b = Me([hg.length, 2]),
                                      md = 0;
                                    md < hg.length;
                                    md++
                                  )
                                    (ig = lg(hg[md], "\x3d")),
                                      (sc.b[md][0] = ig[0]),
                                      (sc.b[md][1] =
                                        1 < ig.length ? ig[1] : "");
                                else sc.b = Me([0, 2]);
                              gg = sc.b;
                              if (0 != gg.length)
                                for (qe = 0; qe < gg.length; qe++) {
                                  kj = gg[qe];
                                  try {
                                    re = new Sl(Fo, 0 == qe, kj[0], kj[1]);
                                  } catch (kg) {
                                    if (((kg = Cc(kg)), r(kg, 23))) re = null;
                                    else throw Dc(kg);
                                  }
                                  re && Tl(Fr, re, new Ul(Dr, re.a, Er));
                                }
                              1 == Sb.a && (jj = Sb.b);
                            }
                          if (0 == ne.a.b)
                            for (Rb = 0; Rb < T.b.length; Rb++)
                              if (
                                ((Sb = (z(Rb, T.b.length), T.b[Rb])), eg[Rb])
                              ) {
                                var tc = eg[Rb],
                                  Gr = Sb.a,
                                  Hr = Rb,
                                  Ir = ne,
                                  mj = void 0,
                                  nj = void 0,
                                  Io = void 0,
                                  oj = void 0,
                                  pj = void 0,
                                  se = void 0,
                                  Jo = void 0,
                                  oj =
                                    (null == tc.c && (tc.c = Vl(tc.d)), tc.c);
                                if (oj.length && Wl(oj))
                                  for (
                                    Jo = Va(tc.d),
                                      pj = tc.d.origin.length,
                                      !Xl && (Xl = RegExp("(\\d+)", "gi")),
                                      Xl.lastIndex = pj;
                                    ;

                                  ) {
                                    mj = Xl.exec(Jo);
                                    if (!mj) break;
                                    nj = Xl.lastIndex;
                                    Io = nj - mj[1].length;
                                    try {
                                      se = new Yl(tc, pj, Io, nj);
                                    } catch (mg) {
                                      if (((mg = Cc(mg)), r(mg, 23))) se = null;
                                      else throw Dc(mg);
                                    }
                                    se && Tl(Ir, se, new Ul(Gr, se.a, Hr));
                                  }
                              }
                          fg = new Ol();
                          for (kd = new mh(new lh(ne.a).a); nh(kd); ) {
                            if (kd._gwt_modCount != kd.c._gwt_modCount)
                              throw new ph();
                            ij = (y(nh(kd)), kd.a.R());
                            Co = ij.W();
                            ld = ij.X();
                            if (
                              !(Co === Br || 100 < ld.a.b.length) &&
                              ld.b.Ab(bg)
                            ) {
                              e: {
                                var qj = ld.b,
                                  uc = ld.a,
                                  Ub = T,
                                  rj = jj,
                                  eb = void 0,
                                  sj = void 0,
                                  ue = void 0,
                                  Mo = void 0,
                                  tj = void 0,
                                  Vb = void 0,
                                  Qa = void 0,
                                  No = void 0,
                                  ve = void 0,
                                  uj = void 0;
                                if (2 <= uc.b.length)
                                  if (
                                    ((ve = Zl(uc, Ub)),
                                    ve.a && ve.b && $l(Ub, ve))
                                  ) {
                                    Mo = am(uc);
                                    eb = new Q();
                                    for (Vb = new M(uc); Vb.b < Vb.d.J(); )
                                      (tj =
                                        (y(Vb.b < Vb.d.J()),
                                        Vb.d.T((Vb.c = Vb.b++)))),
                                        P(eb, new Pl(tj.a, N(Ub, tj.c).b));
                                    Pa = new bm(
                                      (cm(), dm),
                                      qj.tS(),
                                      eb,
                                      Mo,
                                      ve.c
                                    );
                                  } else Pa = null;
                                else {
                                  if (
                                    1 == uc.b.length &&
                                    rj.length &&
                                    ((Qa = (z(0, uc.b.length), uc.b[0])),
                                    (No = 2 == Qa.a && 1 == Qa.c),
                                    (uj =
                                      3 == Qa.a &&
                                      2 == Qa.c &&
                                      2 == (z(1, Ub.b.length), Ub.b[1]).a),
                                    1 == (z(0, Ub.b.length), Ub.b[0]).a &&
                                      (No || uj) &&
                                      qj.zb(rj))
                                  ) {
                                    ue = Qa.b - Qa.a;
                                    0 == ue || 1 == ue
                                      ? (sj = 1)
                                      : ((sj = Qa.b), (ue = 0));
                                    eb = new Q();
                                    P(eb, new Pl(1, rj));
                                    P(eb, new Pl(Qa.a, N(Ub, Qa.c).b));
                                    Pa = new bm(
                                      (cm(), dm),
                                      qj.tS(),
                                      eb,
                                      new em(sj, ue),
                                      uj ? (z(1, eb.b.length), eb.b[1]).b : ""
                                    );
                                    break e;
                                  }
                                  Pa = null;
                                }
                              }
                              if (Pa) {
                                var qc =
                                    (!fm && (fm = /\/$/),
                                    bg.d.href.replace(fm, "")),
                                  we;
                                e: {
                                  var od = Pa,
                                    yj = qc,
                                    Mr = T,
                                    pd = void 0,
                                    ng = void 0,
                                    Wb = void 0;
                                  if (
                                    2 > od.a.b.length ||
                                    1 == N(od.a, 0).a ||
                                    yj.length >= N(od.a, 0).b.length
                                  )
                                    we = !1;
                                  else {
                                    for (pd = 0; pd < od.a.b.length; pd++) {
                                      var zj;
                                      (zj = N(od.a, pd).a != pd + 2) ||
                                        (zj = N(od.a, pd).b === yj);
                                      if (zj) {
                                        we = !1;
                                        break e;
                                      }
                                    }
                                    for (Wb = new M(Mr); Wb.b < Wb.d.J(); )
                                      if (
                                        ((ng =
                                          (y(Wb.b < Wb.d.J()),
                                          Wb.d.T((Wb.c = Wb.b++)))),
                                        1 == ng.a && ng.b.length && ng.b !== yj)
                                      ) {
                                        we = !1;
                                        break e;
                                      }
                                    we = !0;
                                  }
                                }
                                we
                                  ? uh(Pa.a, 0, new Pl(1, qc))
                                  : ld.b.zb(qc) &&
                                    ((dg = N(Pa.a, 0)),
                                    2 == dg.a &&
                                      dg.b !== qc &&
                                      qc.length < dg.b.length &&
                                      uh(Pa.a, 0, new Pl(1, qc)));
                                gm(fg, new hm(Pa));
                              }
                            }
                          }
                          cg = fg.a ? fg : null;
                        }
                      } else cg = null;
                      ag = cg;
                    }
                    ag && gm(pc, ag);
                  }
                if (pc.a) {
                  pc.b && 3 <= Ok && W("Detected multiple page patterns");
                  gd = pc.a;
                  var Aj, Bj, Xb;
                  if (!gd.c.length && 0 != gd.a.b.length)
                    for (Aj = !1, Xb = new M(gd.a); Xb.b < Xb.d.J(); ) {
                      Bj = (y(Xb.b < Xb.d.J()), Xb.d.T((Xb.c = Xb.b++)));
                      if (Aj) {
                        gd.c = Bj.b;
                        break;
                      }
                      Bj.b === zo && (Aj = !0);
                    }
                  Uf = gd;
                } else Uf = new im();
              } else Uf = new im();
              Nl(Wf, ia.e, "PageParameterDetector");
              bj = Uf;
            } else bj = new im();
            l = bj;
            e = {};
            f = l.c;
            if (f.length) {
              if (void 0 == f) throw new TypeError();
              e[1] = f;
            }
            if (void 0 == e) throw new TypeError();
            m[3] = e;
            3 <= Ok && W("paging by pagenum: " + jm(l));
          } else {
            3 <= Ok && W("paging by next");
            km();
            mf = {};
            var Ro = $doc.documentElement,
              wc,
              Cj,
              Dj,
              Ej,
              Fj,
              fb,
              Gj,
              xe,
              K,
              Yb,
              ja,
              Hj,
              x,
              Zb,
              qd,
              qg,
              ye,
              Ij,
              rd,
              sd,
              td,
              rg,
              sg,
              So,
              gb,
              Jj,
              To,
              Uo;
            3 <= Ok && hh(lm);
            fb = (U(), g.replace(RegExp("\\/[^/]*$", "gi"), ""));
            To = g.replace(RegExp("\\/$", "gi"), "");
            wc = Ro.getElementsByTagName("A");
            sg = new Zi();
            Dj = new Zi();
            Ej = Hl(Il(Ro, g));
            var Nr = lg(g, ":\\/\\/")[0] + "://",
              Vo,
              ze = g,
              ze = (U(), lg(ze, ":\\/\\/"))[1];
            Vo = -1 == ze.indexOf("/") ? ze : lg(ze, "\\/")[0];
            Cj = Nr + Vo + "/";
            var Or =
              "^" +
              Cj.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26") +
              ".*\\d";
            So = RegExp(Or, "i");
            for (xe = 0; xe < wc.length; xe++)
              if (
                ((K = wc[xe]),
                (Uo = A(K, "href")),
                Ej.setAttribute("href", Uo),
                (ja = Ej.href),
                So.test(ja))
              )
                if (
                  ((Jj = (K.offsetWidth || 0) | 0),
                  (Gj = (K.offsetHeight || 0) | 0),
                  0 == Jj || 0 == Gj)
                )
                  X(K, "ignored: sz\x3d" + Jj + "x" + Gj);
                else if (mm(K))
                  if (
                    ((ja = ja.replace(nm, "")),
                    X(K, "-\x3e " + ja),
                    F(ja, To) || F(ja, fb))
                  )
                    X(K, "ignored: same as current or folder url " + fb);
                  else if (((Zb = K.innerText), 25 < Zb.length))
                    X(K, "ignored: link text too long");
                  else if (om.test(Zb))
                    X(K, "ignored: one of extra"), R(Dj, ja);
                  else if (
                    ((Hj = ja),
                    ja.substr(0, fb.length) === fb && (Hj = pg(ja, fb.length)),
                    pm.test(Hj))
                  ) {
                    x = new qm(xe, Zb, ja);
                    R(sg, x);
                    0 != ja.indexOf(fb) &&
                      ((x.d -= 25),
                      X(
                        K,
                        "score\x3d" + x.d + ": not part of folder url " + fb
                      ));
                    Yb = Zb + " " + A(K, "class") + " " + K.id;
                    X(K, "txt+class+id\x3d" + Yb);
                    rm.test(Yb) &&
                      ((x.d += 50), X(K, "score\x3d" + x.d + ": has next"));
                    sm.test(Yb) &&
                      ((x.d += 25),
                      X(K, "score\x3d" + x.d + ": has pag* word"));
                    tm.test(Yb) &&
                      !rm.test(x.c) &&
                      ((x.d -= 65),
                      X(
                        K,
                        "score\x3d" + x.d + ": has first|last but no next regex"
                      ));
                    if (um.test(Yb) || om.test(Yb))
                      (x.d -= 50),
                        X(K, "score\x3d" + x.d + ": has neg or extra regex");
                    vm.test(Yb) &&
                      ((x.d -= 200),
                      X(K, "score\x3d" + x.d + ": has opp of next regex"));
                    qg = rg = !1;
                    for (sd = B(K); sd && (!rg || !qg); )
                      (td = A(sd, "class") + " " + sd.id),
                        !rg &&
                          sm.test(td) &&
                          ((x.d += 25),
                          (rg = !0),
                          X(K, "score\x3d" + x.d + ": posParent - " + td)),
                        qg ||
                          !um.test(td) ||
                          wm.test(td) ||
                          ((x.d -= 25),
                          (qg = !0),
                          X(K, "score\x3d" + x.d + ": negParent - " + td)),
                        (sd = B(sd));
                    if (xm.test(ja) || sm.test(ja))
                      (x.d += 25),
                        X(K, "score\x3d" + x.d + ": has paging info");
                    om.test(ja) &&
                      ((x.d -= 15),
                      X(K, "score\x3d" + x.d + ": has extra regex"));
                    10 < Zb.length &&
                      ((x.d -= Zb.length),
                      X(K, "score\x3d" + x.d + ": text too long"));
                    qd = ym(Zb);
                    0 < qd &&
                      (1 == qd
                        ? (x.d -= 10)
                        : (x.d += 0 > 10 - qd ? 0 : 10 - qd),
                      X(
                        K,
                        "score\x3d" + x.d + ": linktxt is a num (" + qd + ")"
                      ));
                    for (
                      var hb = g,
                        ib = ja,
                        cp = K,
                        Pr = Cj.length,
                        xc = void 0,
                        vg = void 0,
                        wg = void 0,
                        hb = zm(hb),
                        ib = zm(ib),
                        xc = Pr;
                      xc < hf(hb.length, ib.length) &&
                      hb.charCodeAt(xc) == ib.charCodeAt(xc);
                      xc++
                    );
                    hb = tg(hb, xc, hb.length);
                    ib = tg(ib, xc, ib.length);
                    X(cp, "remains: " + hb + ", " + ib);
                    vg = ym(ib);
                    wg = ym(hb);
                    X(cp, "remains: " + wg + ", " + vg);
                    (Fj = 0 < wg && 0 < vg ? df(vg - wg) : null) &&
                      1 == Fj.a &&
                      ((x.d += 25),
                      X(K, "score\x3d" + x.d + ": diff \x3d " + Fj));
                  } else X(K, "ignored: no number beyond folder url " + fb);
                else X(K, "ignored: invisible");
              else X(K, "ignored: not prefix + num");
            gb = null;
            if (0 != sg.a.b)
              for (Ij = vh(new xh(sg.a)); nh(Ij.a); )
                (ye = oh(Ij.a).W()),
                  S(Dj, ye.a) ||
                    (50 <= ye.d && (!gb || gb.d < ye.d) && (gb = ye));
            rd = null;
            if (gb) {
              var Qr = gb.a;
              U();
              rd = Qr.replace(RegExp("\\/$", "gi"), "");
              X(
                wc[gb.b],
                "found: score\x3d" + gb.d + ", txt\x3d[" + gb.c + "], " + rd
              );
            }
            if (3 <= Ok) {
              var Be, xg, $b, Ce, yg;
              W(
                "numLinks\x3d" +
                  wc.length +
                  ", found next: " +
                  (null != rd ? rd : "null")
              );
              for (Be = 0; Be < wc.length; Be++) {
                xg = wc[Be];
                $b = xg.innerText;
                yg = (U(), lg($b, "\\s+"));
                $b = "";
                for (Ce = 0; Ce < yg.length; Ce++)
                  ($b += yg[Ce]), Ce < yg.length - 1 && ($b += " ");
                W(
                  Be +
                    ")" +
                    xg.href +
                    ", txt\x3d[" +
                    $b +
                    "], dbg\x3d[" +
                    eh(lm, xg) +
                    "]"
                );
              }
            }
            nf = rd;
            if (null != nf) {
              if (void 0 == nf) throw new TypeError();
              mf[1] = nf;
            }
            if (void 0 == mf) throw new TypeError();
            m[3] = mf;
          }
          Nl(q, I, "Pagination");
          var fa = c.f,
            yc,
            ac,
            zg,
            Ag,
            zc,
            Ac,
            Mj,
            wa,
            Nj,
            Oj,
            Pj;
          wa = ((Nj = {}), (Nj[9] = []), Nj);
          var Bg, Cg;
          Cg = !1;
          for (Bg = 0; Bg < fa.a.b.length && !Cg; Bg++) Cg = N(fa.a, Bg).xb();
          if (!Cg) {
            var ep = Ek(fa);
            if (void 0 == ep) throw new TypeError();
            wa[1] = ep;
            var Qj, Dg, Eg;
            Eg = "";
            for (Dg = 0; Dg < fa.a.b.length && !Eg.length; Dg++)
              Eg = N(fa.a, Dg).vb();
            Qj = Eg;
            if (void 0 == Qj) throw new TypeError();
            wa[2] = Qj;
            var Rj, Fg, Gg;
            Gg = "";
            for (Fg = 0; Fg < fa.a.b.length && !Gg.length; Fg++)
              Gg = N(fa.a, Fg).wb();
            Rj = Gg;
            if (void 0 == Rj) throw new TypeError();
            wa[3] = Rj;
            var Sj, Hg, Ig;
            Hg = "";
            for (Ig = 0; Ig < fa.a.b.length && !Hg.length; Ig++)
              Hg = N(fa.a, Ig).rb();
            Sj = Hg;
            if (void 0 == Sj) throw new TypeError();
            wa[4] = Sj;
            var Tj, Jg, Kg;
            Kg = "";
            for (Jg = 0; Jg < fa.a.b.length && !Kg.length; Jg++)
              Kg = N(fa.a, Jg).tb();
            Tj = Kg;
            if (void 0 == Tj) throw new TypeError();
            wa[5] = Tj;
            var Uj, Lg, Mg;
            Lg = "";
            for (Mg = 0; Mg < fa.a.b.length && !Lg.length; Mg++)
              Lg = N(fa.a, Mg).qb();
            Uj = Lg;
            if (void 0 == Uj) throw new TypeError();
            wa[6] = Uj;
            var Vj, Ng, Og;
            Ng = "";
            for (Og = 0; Og < fa.a.b.length && !Ng.length; Og++)
              Ng = N(fa.a, Og).pb();
            Vj = Ng;
            if (void 0 == Vj) throw new TypeError();
            wa[7] = Vj;
            var Pg, Qg;
            Pg = null;
            for (Qg = 0; Qg < fa.a.b.length && !Pg; Qg++) Pg = N(fa.a, Qg).ob();
            if ((yc = Pg)) {
              ac = ((Oj = {}), (Oj[5] = []), Oj);
              var fp = yc.d;
              if (void 0 == fp) throw new TypeError();
              ac[1] = fp;
              var gp = yc.c;
              if (void 0 == gp) throw new TypeError();
              ac[2] = gp;
              var hp = yc.b;
              if (void 0 == hp) throw new TypeError();
              ac[3] = hp;
              var ip = yc.e;
              if (void 0 == ip) throw new TypeError();
              ac[4] = ip;
              for (Ag = 0; Ag < yc.a.length; Ag++) ac[5].push(yc.a[Ag]);
              if (void 0 == ac) throw new TypeError();
              wa[8] = ac;
            }
            var Rg, Sg;
            Sg = null;
            for (
              Rg = 0;
              Rg < fa.a.b.length && !((Sg = N(fa.a, Rg).sb()), 0 < Sg.length);
              Rg++
            );
            Mj = Sg;
            for (zg = 0; zg < Mj.length; zg++) {
              zc = Mj[zg];
              Ac = ((Pj = {}), wa[9].push(Pj), Pj);
              var jp = zc.e;
              if (void 0 == jp) throw new TypeError();
              Ac[1] = jp;
              var kp = zc.c;
              if (void 0 == kp) throw new TypeError();
              Ac[2] = kp;
              var lp = zc.d;
              if (void 0 == lp) throw new TypeError();
              Ac[3] = lp;
              var mp = zc.a;
              if (void 0 == mp) throw new TypeError();
              Ac[4] = mp;
              var np = zc.f;
              if (void 0 == np) throw new TypeError();
              Ac[5] = np;
              var op = zc.b;
              if (void 0 == op) throw new TypeError();
              Ac[6] = op;
            }
          }
          if (void 0 == wa) throw new TypeError();
          m[5] = wa;
          var pp = V() - v;
          if (void 0 == pp) throw new TypeError();
          I[5] = pp;
          if (void 0 == I) throw new TypeError();
          m[6] = I;
          var qp = c.d;
          if (void 0 == qp) throw new TypeError();
          m[8] = qp;
          d = ((ln = {}), ln);
          var rp = ((mn = Am), (Am = ""), mn);
          if (void 0 == rp) throw new TypeError();
          d[1] = rp;
          if (void 0 == d) throw new TypeError();
          m[7] = d;
          return m;
        }
        n(207, 1, {}, function() {});
        t(207);
        function Bl(a) {
          var b;
          if (0 == a.b.length) return null;
          b = new Bm(a);
          var c = (z(0, a.b.length), a.b[0]),
            d;
          for (d = c.parentNode; d && 9 != d.nodeType; c = d, d = d.parentNode);
          Tk(new Uk(b), c);
          b = b.c;
          for (
            a = (z(0, a.b.length), a.b[0]);
            1 == b.a.b && b.b != a && 3 != Kh(b.a, 0).b.nodeType;

          )
            b = Kh(b.a, 0);
          a = Cm(b);
          if (1 != a.nodeType) return null;
          Dm(a, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          Em(a);
          Dm(a, "TARGET", D(w(p, 1), h, 2, 4, ["A"]));
          Dm(a, "COLOR", D(w(p, 1), h, 2, 4, ["FONT"]));
          Dm(a, "BGCOLOR", D(w(p, 1), h, 2, 4, ["TABLE", "TR", "TD", "TH"]));
          Dm(a, "STYLE", D(w(p, 1), h, 2, 4, ["*"]));
          1 == a.nodeType && "IMG" === a.tagName && Fm(a);
          c = a.querySelectorAll("IMG");
          for (b = 0; b < c.length; b++) Fm(c[b]);
          return a;
        }
        function Al(a) {
          var b, c;
          c = new Q();
          a.hasAttribute("srcset") && Ph(c, Gm(a));
          a = a.querySelectorAll("[SRCSET]");
          for (b = 0; b < a.length; b++) Ph(c, Gm(a[b]));
          return c;
        }
        function Hm(a) {
          return a
            ? ((a.offsetHeight || 0) | 0) * ((a.offsetWidth || 0) | 0)
            : 0;
        }
        function Im(a, b) {
          var c;
          c = a.getElementsByTagName(b);
          return 0 < c.length ? c[0] : null;
        }
        function Jm(a, b) {
          var c;
          for (c = a; c && !c.contains(b); ) c = c.parentNode;
          return c;
        }
        function Sk(a) {
          var b, c;
          if (0 == a.J()) return null;
          c = a.T(0);
          for (b = 1; b < a.J(); b++) c = Jm(c, a.T(b));
          return c;
        }
        function Cl(a) {
          var b;
          b = new Q();
          Tk(new Uk(new Km(b)), a);
          return b;
        }
        function Lm(a) {
          var b;
          for (b = new Q(); a; ) (b.b[b.b.length] = a), (a = a.parentNode);
          return b;
        }
        function Gm(a) {
          var b, c, d;
          c = new Q();
          a = A(a, "srcset");
          if (!a.length) return c;
          d = Mm(a);
          for (a = 0; a < d.length; a++)
            (b = Gk(d[a])), b.length && ((b = lg(b, " ")), P(c, b[0]));
          return c;
        }
        function V() {
          return ("undefined" !== typeof distiller_on_ios &&
            distiller_on_ios) ||
            !window.performance
            ? Date.now()
            : window.performance.now();
        }
        function Rk(a) {
          var b, c, d;
          d = new Q();
          for (c = 0; c < a.length; c++)
            (b = a[c]),
              mm(b) &&
                (b.offsetParent ||
                  0 != ((b.offsetHeight || 0) | 0) ||
                  0 != ((b.offsetWidth || 0) | 0)) &&
                0 < Hm(b) &&
                (d.b[d.b.length] = b);
          return d;
        }
        function Nm(a, b) {
          var c;
          if (null == a) return !1;
          c = $doc.createElement("a");
          c.href = a;
          return kf("." + Sc(c, "host"), "." + b);
        }
        function mm(a) {
          var b;
          b = getComputedStyle(a, null);
          a = parseFloat(b.opacity);
          return !("none" === b.display || "hidden" === b.visibility || 0 == a);
        }
        function Em(a) {
          var b, c, d;
          "A" === a.tagName && ((d = a), d.href.length && (d.href = d.href));
          b = a.getElementsByTagName("A");
          for (c = 0; c < b.length; c++)
            (d = b[c]), d.href.length && (d.href = d.href);
          "VIDEO" === a.tagName &&
            ((c = a), c.poster.length && (c.poster = c.poster));
          d = a.getElementsByTagName("VIDEO");
          for (b = 0; b < d.length; b++)
            (c = d[b]), c.poster.length && (c.poster = c.poster);
          Om(a);
          Pm(a);
        }
        function Om(a) {
          ("IMG" == a.tagName ||
            "SOURCE" == a.tagName ||
            "TRACK" == a.tagName ||
            "VIDEO" == a.tagName) &&
            a.src &&
            (a.src = a.src);
          a = a.querySelectorAll("img,source,track,video");
          for (var b in a) a[b].src && (a[b].src = a[b].src);
        }
        function Pm(a) {
          var b;
          a.hasAttribute("srcset") && Qm(a);
          a = a.querySelectorAll("[SRCSET]");
          for (b = 0; b < a.length; b++) Qm(a[b]);
        }
        function Qm(a) {
          var b, c, d, e;
          d = A(a, "srcset");
          if (d.length) {
            c = $doc.createElement("img");
            e = Mm(d);
            for (d = 0; d < e.length; d++)
              (b = Gk(e[d])),
                b.length &&
                  ((b = lg(b, " ")),
                  (c.src = b[0]),
                  (b[0] = c.src),
                  (e[d] = Rm(b, " ")));
            c = Rm(e, ", ");
            a.setAttribute("srcset", c);
          } else a.removeAttribute("srcset");
        }
        function Sm(a) {
          var b, c, d, e;
          if (null == a || !a.length) return new Yi();
          e = new Yi();
          a = lg(a, "\x26");
          for (c = 0; c < a.length; c++);
          c = 0;
          for (d = a.length; c < d; ++c)
            if (((b = a[c]), (b = lg(b, "\x3d")), 1 < b.length)) {
              var f = e,
                g = b[0];
              if (null == b[1]) throw new jf("encodedURL cannot be null");
              L(f, g, decodeURI(b[1]));
            }
          return e;
        }
        function Dm(a, b, c) {
          var d, e, f;
          e = 0;
          for (f = c.length; e < f; ++e)
            (d = c[e]), (a.tagName !== d && "*" !== d) || a.removeAttribute(b);
          d = 0;
          for (e = c.length; d < e; ++d);
          c = Rm(c, ", ");
          c = a.querySelectorAll(c);
          for (a = 0; a < c.length; a++) c[a].removeAttribute(b);
        }
        function Fm(a) {
          var b, c, d;
          b = a.attributes;
          for (c = 0; c < b.length; )
            (d = b[c].nodeName),
              "src" === d ||
              "alt" === d ||
              "srcset" === d ||
              "dir" === d ||
              "width" === d ||
              "height" === d ||
              "title" === d
                ? ++c
                : a.removeAttribute(d);
        }
        function Km(a) {
          this.a = a;
        }
        n(105, 1, {}, Km);
        _.mb = function() {};
        _.nb = function(a) {
          switch (a.nodeType) {
            case 3:
              return P(this.a, a), !1;
            case 1:
              if (!mm(a)) return !1;
              P(this.a, a);
              return !0;
            default:
              return !1;
          }
        };
        t(105);
        function Tk(a, b) {
          var c, d;
          if (a.a.nb(b)) {
            if ((d = b.firstChild))
              for (; d != b; ) {
                c = !1;
                if (a.a.nb(d)) {
                  if ((c = d.firstChild)) {
                    d = c;
                    continue;
                  }
                  c = !0;
                }
                for (; d != b; ) {
                  c && a.a.mb(d);
                  if ((c = d.nextSibling)) {
                    d = c;
                    break;
                  }
                  d = d.parentNode;
                  c = !0;
                }
              }
            a.a.mb(b);
          }
        }
        function Uk(a) {
          this.a = a;
        }
        n(61, 1, {}, Uk);
        t(61);
        function Tm(a) {
          var b;
          a.b = "";
          (b = a.j.querySelector(".byline-name")) && (a.b = b.textContent);
        }
        function Um(a) {
          this.j = a;
        }
        n(121, 1, {}, Um);
        _.ob = function() {
          var a, b;
          a = new Vm();
          if (null == this.d) {
            var c;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.d = "";
            if ((b = this.j.querySelector(".dateline"))) this.d = b.textContent;
            else
              for (b = 0; b < this.a.length; b++)
                if (((c = this.a[b]), F(c.name, "displaydate"))) {
                  this.d = c.content;
                  break;
                }
          }
          a.d = this.d;
          b = (null == this.b && Tm(this), this.b);
          a.a = b.length ? D(w(p, 1), h, 2, 4, [b]) : E(p, h, 2, 0, 4);
          return a;
        };
        _.pb = function() {
          return null == this.b && Tm(this), this.b;
        };
        _.qb = function() {
          if (null == this.c) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.c = "";
            for (a = 0; a < this.a.length; a++)
              if (((b = this.a[a]), F(b.name, "copyright"))) {
                this.c = b.content;
                break;
              }
          }
          return this.c;
        };
        _.rb = function() {
          return "";
        };
        _.sb = function() {
          if (!this.f) {
            var a, b, c, d, e;
            this.f = new Q();
            a = this.j.getElementsByTagName("IMG");
            for (c = 0; c < a.length; c++) {
              e = a[c];
              var f = (d = b = void 0),
                g = void 0;
              b = void 0;
              b = B(e);
              if (F("FIGURE", b.tagName)) {
                if (
                  ((d = b.getElementsByTagName("FIGCAPTION")),
                  (g = d.length),
                  (b = ""),
                  0 < g && 2 >= g)
                )
                  for (f = 0; f < g && !b.length; f++) b = d[f].innerText;
              } else b = "";
              (d = null != b && b.length) ||
                ((d = d = void 0),
                (d = e.width),
                400 > d
                  ? (d = !1)
                  : ((d /= e.height), (d = 1.3 <= d && 3 >= d)));
              d &&
                ((d = new Wm()),
                (d.e = e.src),
                (d.a = b),
                (d.f = e.width),
                (d.b = e.height),
                P(this.f, d));
            }
          }
          return Th(this.f, E(Xm, da, 27, this.f.b.length, 0));
        };
        _.tb = function() {
          if (null == this.i) {
            var a, b, c;
            this.i = "";
            a = this.j.getElementsByTagName("*");
            for (c = 0; c < a.length && !this.i.length; c++)
              (b = a[c]),
                (this.i = A(b, "publisher")),
                !this.i.length && (this.i = A(b, "source_organization"));
          }
          return this.i;
        };
        _.ub = function() {
          if (null == this.k) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.k = "";
            if (
              0 != this.a.length &&
              ((a = this.j.getElementsByTagName("TITLE")), 0 != a.length)
            )
              for (a = 0; a < this.a.length; a++)
                if (((b = this.a[a]), F(b.name, "title"))) {
                  this.k = b.content;
                  break;
                }
          }
          return this.k;
        };
        _.vb = function() {
          return "";
        };
        _.wb = function() {
          return "";
        };
        _.xb = function() {
          if (!this.e) {
            var a, b;
            !this.a && (this.a = this.j.getElementsByTagName("META"));
            this.e = !0;
            for (a = 0; a < this.a.length; a++)
              if (((b = this.a[a]), F(b.name, "IE_RM_OFF"))) {
                this.g = F(b.content, "true");
                break;
              }
          }
          return this.g;
        };
        _.a = null;
        _.b = null;
        _.c = null;
        _.d = null;
        _.e = !1;
        _.f = null;
        _.g = !1;
        _.i = null;
        _.j = null;
        _.k = null;
        t(121);
        function ym(a) {
          return parseInt(a, 10) | 0;
        }
        function Nl(a, b, c) {
          var d;
          if (b) {
            b = ((d = {}), b[6].push(d), d);
            if (void 0 == c) throw new TypeError();
            b[1] = c;
            a = V() - a;
            if (void 0 == a) throw new TypeError();
            b[2] = a;
          }
        }
        function W(a) {
          null == a && (a = "");
          (-1 == a.indexOf("[0;") && -1 == a.indexOf("[1;")) ||
            (a += "\u001b[0m");
          Ym ||
            null == $wnd.console ||
            ("function" != typeof $wnd.console.log &&
              "object" != typeof $wnd.console.log) ||
            $wnd.console.log(a);
          Am += a + "\n";
        }
        var Ok = 0,
          Am = "",
          Ym = !1;
        function Ek(a) {
          var b, c;
          c = "";
          for (b = 0; b < a.a.b.length && !c.length; b++) c = N(a.a, b).ub();
          return c;
        }
        function Ik(a, b) {
          var c;
          this.b = b;
          this.a = new Q();
          c = V();
          P(this.a, new Zm(a, this.b));
          Nl(c, this.b, "OpenGraphProtocolParser");
          c = V();
          P(this.a, new $m(a, this.b));
          Nl(c, this.b, "SchemaOrgParserAccessor");
          c = V();
          P(this.a, new Um(a));
          Nl(c, this.b, "IEReadingViewParser");
        }
        n(110, 1, {}, Ik);
        t(110);
        function Vm() {}
        n(62, 1, {}, Vm);
        _.a = null;
        _.b = "";
        _.c = "";
        _.d = "";
        _.e = "";
        t(62);
        function Wm() {}
        n(27, 1, { 27: 1 }, Wm);
        _.a = "";
        _.b = 0;
        _.c = "";
        _.d = "";
        _.e = "";
        _.f = 0;
        var Xm = t(27);
        function Kl(a) {
          if (0 == a.a.b.length || 0 != N(a.a, a.a.b.length - 1).b.b.length)
            P(a.a, new an()), (a.b = null);
        }
        function Ml(a, b) {
          var c, d, e;
          d = N(a.a, a.a.b.length - 1);
          0 == d.b.b.length
            ? (P(d.b, b), (a.b = b))
            : ((c = b.a - a.b.a),
              (c = 0 == c ? 0 : 0 > c ? -1 : 1),
              c != d.a
                ? 0 != d.a &&
                  ((d = ((e = new an()), P(a.a, e), e)), 0 != c && P(d.b, a.b))
                : 0 == c && (d.b.b = E(nb, da, 1, 0, 3)),
              P(d.b, b),
              (a.b = b),
              (d.a = c));
        }
        function bn() {
          this.a = new Q();
        }
        n(125, 1, {}, bn);
        _.b = null;
        t(125);
        function an() {
          this.b = new Q();
        }
        n(82, 1, {}, an);
        _.a = 0;
        t(82);
        function Bm(a) {
          this.b = new cn(a);
          this.a = new Q();
          this.d = new Q();
        }
        n(182, 1, {}, Bm);
        _.mb = function() {
          this.a.U(this.a.b.length - 1);
          this.d.U(this.d.b.length - 1);
        };
        _.nb = function(a) {
          if (!this.b.a) return !1;
          P(this.a, a);
          P(this.d, null);
          1 == this.d.b.length && ((this.c = new dn(a)), Sh(this.d, 0, this.c));
          if (en(this.b, a))
            for (a = 0; a < this.a.b.length; a++)
              if (null == N(this.d, a)) {
                Sh(this.d, a, new dn(N(this.a, a)));
                var b = N(this.d, a - 1),
                  c = N(this.d, a);
                dk(b.a, c);
              }
          return !0;
        };
        t(182);
        function fn(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          for (a = Lh(a.a, 0); a.b != a.d.c; )
            (b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = fn(b)),
              c.appendChild(b);
          return c;
        }
        function Cm(a) {
          var b, c;
          c = a.b.cloneNode(!1);
          1 == a.b.nodeType &&
            ((b = getComputedStyle(a.b, null).direction),
            !b.length && (b = "auto"),
            c.setAttribute("dir", b));
          for (a = Lh(a.a, 0); a.b != a.d.c; )
            (b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)),
              (b = Cm(b)),
              c.appendChild(b);
          return c;
        }
        function dn(a) {
          this.b = a;
          this.a = new gk();
        }
        n(73, 1, {}, dn);
        t(73);
        function gn() {
          gn = k;
          hn = RegExp(
            "((\\w+):\\s+(http:\\/\\/ogp.me\\/ns(\\/\\w+)*#))\\s*",
            "gi"
          );
          jn = /^xmlns:(\w+)/i;
          qn = /^http:\/\/ogp.me\/ns(\/\w+)*#/i;
        }
        function rn(a, b) {
          return G(a.f, b) ? H(a.f, b) : "";
        }
        function vn(a, b, c) {
          null != c && c.length
            ? ((c = c.substr(1, c.length - 1)),
              "profile" === c
                ? ci(a.c, (wn(), yn), b)
                : "article" === c && ci(a.c, (wn(), zn), b))
            : ci(a.c, (wn(), Bn), b);
        }
        function Cn(a, b) {
          var c, d;
          this.b = new Dn();
          this.d = new En();
          this.a = new Fn();
          this.e = D(w(Gn, 1), da, 21, 0, [
            new Hn("title", (wn(), Bn), null),
            new Hn("type", Bn, null),
            new Hn("url", Bn, null),
            new Hn("description", Bn, null),
            new Hn("site_name", Bn, null),
            new Hn("image", Bn, this.b),
            new Hn("image:", Bn, this.b),
            new Hn("first_name", yn, this.d),
            new Hn("last_name", yn, this.d),
            new Hn("section", zn, this.a),
            new Hn("published_time", zn, this.a),
            new Hn("modified_time", zn, this.a),
            new Hn("expiration_time", zn, this.a),
            new Hn("author", zn, this.a)
          ]);
          this.f = new Yi();
          this.c = new fi(Kn);
          this.g = b;
          d = V();
          var e, f, g;
          c = "";
          F("HTML", a.tagName) && (c = A(a, "prefix"));
          c.length ||
            ((g = a.getElementsByTagName("HEAD")),
            1 == g.length && (c = A(g[0], "prefix")));
          if (c.length)
            for (hn.lastIndex = 0; ; ) {
              g = hn.exec(c);
              if (!g) break;
              vn(this, g[2], g[4]);
            }
          else
            for (c = a.attributes, g = 0; g < c.length; g++)
              if (
                ((f = c[g]), (e = f.nodeName.toLowerCase()), (e = jn.exec(e)))
              )
                (f = f.nodeValue), (f = qn.exec(f)) && vn(this, e[1], f[1]);
          null == ai(this.c, (wn(), Bn)) && ci(this.c, Bn, "og");
          null == ai(this.c, yn) && ci(this.c, yn, "profile");
          null == ai(this.c, zn) && ci(this.c, zn, "article");
          Nl(d, this.g, "OpenGraphProtocolParser.findPrefixes");
          d = V();
          var l, m;
          e = "";
          for (g = new ii(new hi(this.c).a); ki(g.a); )
            (c = ((g.b = ni(g.a)), new ti(g.c, g.b))),
              (e += 'meta[property^\x3d"' + c.b.b[c.a.b] + '"],');
          e = tg(e, 0, e.length - 1);
          c = a.querySelectorAll(e);
          for (g = 0; g < c.length; g++)
            for (
              f = c[g], m = A(f, "property").toLowerCase(), e = 0;
              e < this.e.length;
              e++
            )
              (l = ai(this.c, this.e[e].c) + ":"),
                og(m, l + this.e[e].a) &&
                  ((m = pg(m, l.length)),
                  (l = !0),
                  this.e[e].b && (l = this.e[e].b.yb(m, f.content, this.f)),
                  l && L(this.f, this.e[e].a, f.content));
          Nl(d, this.g, "OpenGraphProtocolParser.parseMetaTags");
          d = V();
          c = this.b;
          if (0 != c.a.b.length)
            for (g = c.a.b.length - 1; 0 <= g; g--)
              (e = N(c.a, g)[0]), (null != e && e.length) || c.a.U(g);
          Nl(d, this.g, "OpenGraphProtocolParser.imageParser.verify");
          d = V();
          c = ai(this.c, Bn) + ":";
          if (!(G(this.f, "title") ? H(this.f, "title") : "").length)
            throw new ob('Required "' + c + 'title" property is missing.');
          if (!(G(this.f, "type") ? H(this.f, "type") : "").length)
            throw new ob('Required "' + c + 'type" property is missing.');
          if (!(G(this.f, "url") ? H(this.f, "url") : "").length)
            throw new ob('Required "' + c + 'url" property is missing.');
          if (0 == Ln(this.b).length)
            throw new ob('Required "' + c + 'image" property is missing.');
          Nl(d, this.g, "OpenGraphProtocolParser.checkRequired");
        }
        n(146, 1, {}, Cn);
        var jn, qn, hn;
        t(146);
        function Fn() {
          this.b = !1;
          this.a = new Q();
        }
        n(149, 1, {}, Fn);
        _.yb = function(a, b, c) {
          this.b ||
            ((c = c.c.eb("type")), (this.b = null != c && F(c, "article")));
          return this.b ? ("author" === a ? (P(this.a, b), !1) : !0) : !1;
        };
        _.b = !1;
        t(149);
        function Ln(a) {
          var b, c, d, e;
          e = E(Xm, da, 27, a.a.b.length, 0);
          for (b = 0; b < a.a.b.length; b++)
            (c = N(a.a, b)),
              (d = new Wm()),
              (e[b] = d),
              (d.e = null != c[1] && c[1].length ? c[1] : c[0]),
              null != c[2] && (d.c = c[2]),
              null != c[3] && (d.d = c[3]),
              null != c[4] && (d.f = ym(c[4])),
              null != c[5] && (d.b = ym(c[5]));
          return e;
        }
        function Dn() {
          this.b = D(
            w(p, 1),
            h,
            2,
            4,
            "image image:url image:secure_url image:type image:width image:height".split(
              " "
            )
          );
          this.a = new Q();
        }
        n(147, 1, {}, Dn);
        _.yb = function(a, b) {
          var c, d;
          if ("image" === a)
            (d = E(p, h, 2, this.b.length, 4)), (d[0] = b), P(this.a, d);
          else
            for (
              0 == this.a.b.length
                ? ((d = E(p, h, 2, this.b.length, 4)), P(this.a, d))
                : (d = N(this.a, this.a.b.length - 1)),
                c = 1;
              c < this.b.length;
              c++
            )
              if (a === this.b[c]) {
                d[c] = b;
                break;
              }
          return !1;
        };
        t(147);
        function wn() {
          wn = k;
          Bn = new Mn("OG", 0);
          yn = new Mn("PROFILE", 1);
          zn = new Mn("ARTICLE", 2);
        }
        function Mn(a, b) {
          C.call(this, a, b);
        }
        n(44, 9, { 3: 1, 11: 1, 9: 1, 44: 1 }, Mn);
        var zn,
          Bn,
          yn,
          Kn = u(44, function() {
            wn();
            return D(w(Kn, 1), ea, 44, 0, [Bn, yn, zn]);
          });
        function En() {
          this.b = this.a = !1;
        }
        n(148, 1, {}, En);
        _.yb = function(a, b, c) {
          this.a ||
            ((a = c.c.eb("type")),
            (this.b = null != a && F(a, "profile")),
            (this.a = !0));
          return this.b;
        };
        _.a = !1;
        _.b = !1;
        t(148);
        function Hn(a, b, c) {
          this.a = a;
          this.c = b;
          this.b = c;
        }
        n(21, 1, { 21: 1 }, Hn);
        _.a = null;
        _.b = null;
        var Gn = t(21);
        function Pn(a) {
          if (!a.a) {
            var b;
            var c = a.c,
              d = a.d;
            gn();
            var e, f;
            try {
              (f = V()),
                (e = new Cn(c, d)),
                Nl(f, d, "OpenGraphProtocolParser.parse"),
                (b = e);
            } catch (g) {
              if (((g = Cc(g)), r(g, 15))) b = null;
              else throw Dc(g);
            }
            a.b = b;
            a.a = !0;
          }
          return !!a.b;
        }
        function Zm(a, b) {
          this.c = a;
          this.d = b;
          this.a = !1;
        }
        n(118, 1, {}, Zm);
        _.ob = function() {
          var a;
          if (Pn(this)) {
            a = new Vm();
            a.d = rn(this.b, "published_time");
            a.c = rn(this.b, "modified_time");
            a.b = rn(this.b, "expiration_time");
            a.e = rn(this.b, "section");
            var b;
            b = this.b.a;
            b = Th(b.a, E(p, h, 2, b.a.b.length, 4));
            a.a = b;
            return a.e.length ||
              a.d.length ||
              a.c.length ||
              a.b.length ||
              0 != a.a.length
              ? a
              : null;
          }
          return null;
        };
        _.pb = function() {
          var a;
          if (Pn(this)) {
            var b = this.b;
            a = b.f;
            b.d.b
              ? ((b = a.c.eb("first_name")),
                null == b && (b = ""),
                (a = a.c.eb("last_name")),
                null != a && b.length && a.length && (b += " "),
                (a = b + a))
              : (a = "");
          } else a = "";
          return a;
        };
        _.qb = function() {
          return "";
        };
        _.rb = function() {
          return Pn(this) ? rn(this.b, "description") : "";
        };
        _.sb = function() {
          return Pn(this) ? Ln(this.b.b) : E(Xm, da, 27, 0, 0);
        };
        _.tb = function() {
          return Pn(this) ? rn(this.b, "site_name") : "";
        };
        _.ub = function() {
          return Pn(this) ? rn(this.b, "title") : "";
        };
        _.vb = function() {
          var a;
          a = Pn(this) ? rn(this.b, "type") : "";
          return F(a, "article") ? "Article" : "";
        };
        _.wb = function() {
          return Pn(this) ? rn(this.b, "url") : "";
        };
        _.xb = function() {
          return !1;
        };
        _.a = !1;
        t(118);
        function en(a, b) {
          if (b != a.a) return !1;
          a.a = a.b.Q() ? a.b.R() : null;
          return !0;
        }
        function cn(a) {
          this.b = a.D();
          a.I() || (this.a = this.b.R());
        }
        n(95, 1, {}, cn);
        t(95);
        function Ul(a, b, c) {
          this.a = a;
          this.b = b;
          this.c = c;
        }
        n(91, 1, {}, Ul);
        _.a = 0;
        _.b = 0;
        _.c = 0;
        t(91);
        function jm(a) {
          var b, c, d;
          d = "Type: " + a.e + "\nPageInfo: " + a.a.b.length;
          d += "\npattern: " + a.d;
          for (c = new M(a.a); c.b < c.d.J(); )
            (b = (y(c.b < c.d.J()), c.d.T((c.c = c.b++)))),
              (d += "\n  " + ("pg" + b.a + ": " + b.b));
          return (d +=
            "\nformula: " +
            (a.b ? Qn(a.b) : "null") +
            "\nnextPagingUrl: " +
            a.c);
        }
        function im() {
          this.e = (cm(), Rn);
          this.a = new Q();
        }
        function bm(a, b, c, d, e) {
          this.e = (cm(), Rn);
          this.e = a;
          this.d = b;
          this.a = c;
          this.b = d;
          this.c = e;
        }
        function am(a) {
          var b, c, d, e;
          if (2 > a.b.length) return null;
          c = (z(0, a.b.length), a.b[0]);
          b = (z(1, a.b.length), a.b[1]);
          if ((d = 2 == a.b.length))
            (d = c.a), (e = b.a), (d = 4 < (d > e ? d : e));
          if (d) return null;
          d = b.a - c.a;
          if (0 == d) return null;
          b = ~~((b.b - c.b) / d);
          if (0 == b) return null;
          c = c.b - b * c.a;
          if (0 != c && c != -b) return null;
          for (d = 2; d < a.b.length; d++)
            if (((e = (z(d, a.b.length), a.b[d])), e.b != b * e.a + c))
              return null;
          return new em(b, c);
        }
        function Zl(a, b) {
          var c, d, e, f, g, l, m, q;
          q = new Sn();
          f = c = e = -1;
          m = new Zi();
          for (l = new M(a); l.b < l.d.J(); ) {
            g = (y(l.b < l.d.J()), l.d.T((l.c = l.b++)));
            d = g.c;
            if (-1 == c) e = d;
            else if (d != c + 1) {
              if (d <= c || d != c + 2 || -1 != f) return q;
              f = d - 1;
            }
            if (!R(m, df(g.b))) return q;
            c = d;
          }
          q.a = !0;
          if (-1 != f) {
            if (0 >= f || f >= b.b.length - 1) return q;
            c = (z(f, b.b.length), b.b[f]).a;
            (z(f - 1, b.b.length), b.b[f - 1]).a == c - 1 &&
              (z(f + 1, b.b.length), b.b[f + 1]).a == c + 1 &&
              ((q.b = !0), (q.c = (z(f + 1, b.b.length), b.b[f + 1]).b));
            return q;
          }
          if (
            ((0 == e || 1 == e) &&
              1 == (z(0, b.b.length), b.b[0]).a &&
              2 == (z(1, b.b.length), b.b[1]).a) ||
            (2 == e &&
              3 == (z(2, b.b.length), b.b[2]).a &&
              lf((z(1, b.b.length), b.b[1]).b) &&
              !lf((z(0, b.b.length), b.b[0]).b))
          )
            return (q.b = !0), q;
          f = b.b.length;
          if (
            (c == f - 1 || c == f - 2) &&
            (z(f - 2, b.b.length), b.b[f - 2]).a + 1 ==
              (z(f - 1, b.b.length), b.b[f - 1]).a
          )
            return (q.b = !0), q;
          for (e += 1; e < c; e++)
            if (
              (z(e - 1, b.b.length), b.b[e - 1]).a + 2 ==
              (z(e + 1, b.b.length), b.b[e + 1]).a
            ) {
              q.b = !0;
              break;
            }
          return q;
        }
        function $l(a, b) {
          var c, d, e, f;
          if (1 >= a.b.length) return !1;
          c = (z(0, a.b.length), a.b[0]);
          if (1 != c.a && !c.b.length) return !1;
          d = !1;
          for (f = new M(a); f.b < f.d.J(); )
            if (((e = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))), e.b.length))
              d && !b.c.length && (b.c = e.b);
            else {
              if (d) return !1;
              d = !0;
            }
          if (2 == a.b.length) return c.a + 1 == (z(1, a.b.length), a.b[1]).a;
          for (d = 1; d < a.b.length; d++)
            if (
              ((c = (z(d, a.b.length), a.b[d])),
              (e = (z(d - 1, a.b.length), a.b[d - 1])),
              1 != c.a - e.a &&
                ((1 != d && d != a.b.length - 1) || !c.b.length || !e.b.length))
            )
              return !1;
          return !0;
        }
        n(41, 1, {}, im, bm);
        _.tS = function() {
          return jm(this);
        };
        _.b = null;
        _.c = "";
        _.d = "";
        t(41);
        function Qn(a) {
          return "coefficient\x3d" + a.a + ", delta\x3d" + a.b;
        }
        function em(a, b) {
          this.a = a;
          this.b = b;
        }
        n(77, 1, {}, em);
        _.tS = function() {
          return Qn(this);
        };
        _.a = 0;
        _.b = 0;
        t(77);
        function Pl(a, b) {
          this.a = a;
          this.b = b;
        }
        n(26, 1, {}, Pl);
        _.tS = function() {
          return "pg" + this.a + ": " + this.b;
        };
        _.a = 0;
        t(26);
        function Sn() {}
        n(104, 1, {}, Sn);
        _.a = !1;
        _.b = !1;
        _.c = "";
        t(104);
        function cm() {
          cm = k;
          Rn = new Tn("UNSET", 0);
          dm = new Tn("PAGE_NUMBER", 1);
          Vn = new Tn("UNKNOWN", 2);
        }
        function Tn(a, b) {
          C.call(this, a, b);
        }
        n(42, 9, { 3: 1, 11: 1, 9: 1, 42: 1 }, Tn);
        var dm,
          Vn,
          Rn,
          Wn = u(42, function() {
            cm();
            return D(w(Wn, 1), ea, 42, 0, [Rn, dm, Vn]);
          });
        function Xn() {
          Y ||
            ((Y = new Zi()),
            R(Y, "baixar-gratis"),
            R(Y, "category"),
            R(Y, "content"),
            R(Y, "day"),
            R(Y, "date"),
            R(Y, "definition"),
            R(Y, "etiket"),
            R(Y, "film-seyret"),
            R(Y, "key"),
            R(Y, "keys"),
            R(Y, "keyword"),
            R(Y, "label"),
            R(Y, "news"),
            R(Y, "q"),
            R(Y, "query"),
            R(Y, "rating"),
            R(Y, "s"),
            R(Y, "search"),
            R(Y, "seasons"),
            R(Y, "search_keyword"),
            R(Y, "search_query"),
            R(Y, "sortby"),
            R(Y, "subscriptions"),
            R(Y, "tag"),
            R(Y, "tags"),
            R(Y, "video"),
            R(Y, "videos"),
            R(Y, "w"),
            R(Y, "wiki"));
        }
        var Y = null,
          Xl = null;
        function gm(a, b) {
          var c;
          if (a.a) {
            c = a.a;
            var d = b.a;
            c =
              c.b && !d.b
                ? 1
                : !c.b && d.b
                ? -1
                : c.e == d.e
                ? 0
                : c.e == (cm(), dm)
                ? 1
                : d.e == dm
                ? -1
                : 0;
            -1 == c ? ((a.a = b.a), (a.b = b.b)) : 0 == c && (a.b = !0);
          } else (a.a = b.a), (a.b = b.b);
        }
        function Ol() {}
        function hm(a) {
          this.a = a;
        }
        n(70, 1, {}, Ol, hm);
        _.a = null;
        _.b = !1;
        t(70);
        function Tl(a, b, c) {
          var d;
          d = b.tS();
          G(a.a, d) ? P(H(a.a, d).a, c) : L(a.a, d, new eo(b, c));
        }
        function Ql() {
          this.a = new Yi();
        }
        n(126, 1, {}, Ql);
        t(126);
        function eo(a, b) {
          this.b = a;
          this.a = new Q();
          P(this.a, b);
        }
        n(127, 1, {}, eo);
        t(127);
        function Dl() {
          Dl = k;
          Fl = /\/$/;
        }
        function Ll(a, b, c, d, e) {
          var f;
          f = c ? b : d ? b.previousSibling : b.nextSibling;
          if (!f)
            return (
              (f = b.parentNode),
              !fo && (fo = /(BODY)|(HTML)/),
              fo.test(f.nodeName) ? !1 : Ll(a, f, !1, d, e)
            );
          c = !1;
          switch (f.nodeType) {
            case 3:
              b = f.nodeValue;
              if (!b.length || (U(), 0 == Fk.Bb(b))) break;
              b = f.nodeValue;
              var g, l, m;
              if (Wl(b)) {
                go
                  ? (go.lastIndex = 0)
                  : (go = RegExp(
                      "(\\S*[\\w\u00c0-\u1fff\u2c00-\ud7ff]\\S*)",
                      "gi"
                    ));
                !ho && (ho = /^[\W_]*(\d+)[\W_]*$/i);
                for (g = !1; ; ) {
                  l = go.exec(b);
                  if (!l) break;
                  1 >= l.length ||
                    ((l = l[1]),
                    (m = ho.exec(l)),
                    (l = -1),
                    m && 1 < m.length && (l = mo(m[1])),
                    0 <= l && 100 >= l
                      ? (Ml(a.a, new Pl(l, "")), (g = !0))
                      : Kl(a.a));
                }
                b = g;
              } else Kl(a.a), (b = !1);
              if (d || !b) return !1;
              break;
            case 1:
              if (((b = f), F("A", b.tagName))) {
                if (d) return !1;
                ++a.c;
                (b = Jl(a, b, e))
                  ? (Ml(a.a, b.a), (b = !0))
                  : (Kl(a.a), (b = !1));
                if (!b) return !1;
                break;
              }
            default:
              if (!f.hasChildNodes()) break;
              c = !0;
              d ? (f = f.lastChild) : (f = f.firstChild);
          }
          return Ll(a, f, c, d, e);
        }
        function Jl(a, b, c) {
          var d, e, f, g;
          if (!mm(b)) return null;
          g = Gk(b.innerText);
          g = Af(g, "[()\\[\\]{}]");
          g = ug(g);
          g = mo(g);
          if (!(0 <= g && 100 >= g)) return null;
          d = A(b, "href");
          d.length ? (c.setAttribute("href", d), (f = c.href)) : (f = "");
          d = !f.length;
          e = !1;
          c = null;
          if (!d) {
            e = "javascript:" === f.substr(0, 11);
            c = Gl(f);
            if (!c || (!e && !F(c.d.host, a.d.d.host))) return null;
            c.d.hash = "";
          }
          if (!(a = d || e)) {
            b = getComputedStyle(b, null);
            b = b.cursor.toUpperCase();
            Tc();
            a = (He(), Ie);
            Nc(b);
            a = a[":" + b];
            b = D(w(nb, 1), da, 1, 3, [b]);
            if (!a) throw new af(Qc("Enum constant undefined: %s", b));
            a = a == (Tc(), Qd);
          }
          return a ? new to(g, "") : new to(g, Va(c.d).replace(Fl, ""));
        }
        function El(a) {
          this.a = new bn();
          this.e = a;
        }
        n(108, 1, {}, El);
        _.b = "";
        _.c = 0;
        _.d = null;
        var Fl,
          fo = null,
          ho = null,
          go = null;
        t(108);
        function to(a, b) {
          this.a = new Pl(a, b);
        }
        n(79, 1, {}, to);
        t(79);
        function km() {
          km = k;
          rm = RegExp(
            "(next|weiter|continue|\x3e([^\\|]|$)|\u00bb([^\\|]|$))",
            "i"
          );
          vm = RegExp("(prev|early|old|new|\x3c|\u00ab)", "i");
          wm = /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i;
          um = RegExp(
            "combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|shoutbox|sidebar|sponsor|shopping|tags|tool|widget",
            "i"
          );
          om = RegExp(
            "print|archive|comment|discuss|e[\\-]?mail|share|reply|all|login|sign|single|as one|article|post|\u7bc7",
            "i"
          );
          sm = /pag(e|ing|inat)/i;
          xm = /p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}$/i;
          tm = /(first|last)/i;
          nm = /\/?(#.*)?$/;
          pm = /\d/;
          lm = new Yi();
        }
        function X(a, b) {
          var c;
          3 > Ok ||
            ((c = ""),
            ch(lm, a) && (c = eh(lm, a)),
            !c.length || (c += "; "),
            fh(lm, a, c + b));
        }
        function Hl(a) {
          km();
          var b, c;
          c = $doc.implementation.createHTMLDocument();
          b = c.createElement("base");
          b.href = a;
          (c.head || c.getElementsByTagName("head")[0]).appendChild(b);
          a = c.createElement("a");
          c.body.appendChild(a);
          return a;
        }
        function Il(a, b) {
          km();
          var c, d;
          d = a.getElementsByTagName("BASE");
          if (0 == d.length) return b;
          c = Hl(b);
          d = A(d[0], "href");
          c.setAttribute("href", d);
          return c.href;
        }
        var om, tm, nm, xm, um, rm, pm, sm, wm, vm, lm;
        function qm(a, b, c) {
          this.b = a;
          this.d = 0;
          this.c = b;
          this.a = c;
        }
        n(109, 1, {}, qm);
        _.b = -1;
        _.d = 0;
        t(109);
        function uo(a) {
          var b;
          null == a.a &&
            ((b = (null == a.c && (a.c = Vl(a.d)), a.c)),
            b.length ? (a.a = (U(), lg(b, "\\/"))) : (a.a = E(p, h, 2, 0, 4)));
          return a.a;
        }
        function xo(a) {
          this.d = a;
        }
        function Gl(a) {
          var b;
          try {
            b = new URL(a);
          } catch (c) {
            b = null;
          }
          return b ? new xo(b) : null;
        }
        n(69, 1, { 69: 1 }, xo);
        _.tS = function() {
          return Va(this.d);
        };
        _.a = null;
        _.b = null;
        var fm = (_.c = null),
          Rl = t(69);
        function Vl(a) {
          a = a.pathname.replace(/;.*$/, "");
          a = a.replace(/^\//, "");
          return a.replace(/\/$/, "");
        }
        function yo(a) {
          var b, c;
          if (2 > a.b) return !1;
          c = uo(a.g);
          if (4 != c[a.b].length) return !1;
          b = mo(c[a.b - 1]);
          return 0 < b && 12 >= b && ((a = mo(c[a.b - 2])), 1970 < a && 3e3 > a)
            ? !0
            : !1;
        }
        function Eo(a, b) {
          var c, d, e, f;
          f = b.length;
          e = f - a.f.length;
          if (!og(b, a.e)) return !1;
          c = a.c;
          for (
            d = hf(a.d, e);
            c < d && b.charCodeAt(c) == a.i.charCodeAt(c);
            c++
          );
          if (c == e) {
            if ((d = c + 1 == a.d))
              (d = a.i.charCodeAt(c)),
                128 > d
                  ? ((e = (Ze(), $e)[d]),
                    !e && (e = $e[d] = new Xe(d)),
                    (d = e))
                  : (d = new Xe(d)),
                (d = /[-_;,]/.test(d));
            if (d || c + a.f.length == f) return !0;
          } else if (c == a.d && 0 <= mo(b.substr(c, e - c))) return !0;
          return !1;
        }
        function Yl(a, b, c, d) {
          var e;
          a = Va(a.d);
          a: {
            if (
              47 == a.charCodeAt(c - 1) &&
              b < c - 1 &&
              ((e = a.substr(d, a.length - d).toLowerCase()),
              !Go && (Go = /(.s?html?)?$/i),
              Go.test(e) &&
                (!Ho && (Ho = /([^/]*)\/$/i),
                (b = a.substr(b + 1, c - (b + 1))),
                (b = Ho.exec(b)) &&
                  1 < b.length &&
                  (Xn(), S(Y, b[1].toLowerCase()))))
            ) {
              b = !0;
              break a;
            }
            b = !1;
          }
          if (b) throw new af("Bad last numeric path component");
          e = a.substr(c, d - c);
          b = mo(e);
          if (0 > b)
            throw new af("Value in path component is an invalid number: " + e);
          d = a.substr(0, c) + "[*!]" + a.substr(d, a.length - d);
          this.g = Gl(d);
          if (!this.g) throw new af("Invalid URL: " + d);
          this.i = d;
          this.a = b;
          this.d = c;
          this.c = qf(this.i, 47, this.d);
          c = uo(this.g);
          for (
            this.b = 0;
            this.b < c.length && -1 == c[this.b].indexOf("[*!]");
            this.b++
          );
          this.e = tg(this.i, 0, this.c);
          d = this.i.length;
          c = d - this.d - 4;
          0 != c && (this.f = pg(this.i, d - c));
        }
        n(184, 1, {}, Yl);
        _.zb = function(a) {
          if (this.f.length && !kf(a, this.f)) a = !1;
          else if (47 == this.i.charCodeAt(this.d - 1))
            a: {
              var b, c, d, e;
              e = a.length;
              c = this.f.length;
              d = a.length - c;
              b = qf(
                this.g.d.pathname,
                47,
                this.c - 1 - this.g.d.origin.length
              );
              if (-1 != b && ((b += this.g.d.origin.length), b + c == e)) {
                a = sf(a, 0, this.i, 0, b);
                break a;
              }
              og(a, this.e)
                ? ((b = this.c + c),
                  (a =
                    b == e
                      ? !0
                      : b > e || 47 != a.charCodeAt(this.c)
                      ? !1
                      : 0 <= mo(tg(a, this.c + 1, d))))
                : (a = !1);
            }
          else a = Eo(this, a);
          return a;
        };
        _.Ab = function(a) {
          var b, c;
          b = uo(a).length;
          c = uo(this.g).length;
          if (b > c) return !1;
          if (1 == b && 1 == c) {
            c = uo(a)[0];
            a = uo(this.g)[0];
            var d;
            if (c.length && a.length)
              for (
                d = hf(c.length, a.length), b = 0;
                b < d && c.charCodeAt(b) == a.charCodeAt(b);
                b++
              );
            else b = 0;
            d = b;
            var e, f, g;
            e = 0;
            f = c.length - 1;
            for (
              g = a.length - 1;
              f > d && g > d && c.charCodeAt(f) == a.charCodeAt(g);
              --f, --g, e++
            );
            return 2 * (e + b) >= c.length;
          }
          a: {
            e = uo(a);
            d = uo(this.g);
            b = !1;
            for (c = a = 0; a < e.length && c < d.length; ++a, c++)
              if (a == this.b && !b) (b = !0), e.length < d.length && --a;
              else if (!F(e[a], d[c])) {
                a = !1;
                break a;
              }
            a = !0;
          }
          return !a || yo(this) ? !1 : !0;
        };
        _.tS = function() {
          return this.i;
        };
        _.a = 0;
        _.b = -1;
        _.c = 0;
        _.d = 0;
        _.f = "";
        var Go = null,
          Ho = null;
        t(184);
        function Sl(a, b, c, d) {
          var e;
          if (!c.length) throw new af("Empty query name");
          if (!d.length) throw new af("Empty query value");
          if (!Ko(d)) throw new af("Query value has non-digits: " + d);
          Xn();
          if (S(Y, c.toLowerCase()))
            throw new af("Query name is bad page param name: " + c);
          e = mo(d);
          if (0 > e) throw new af("Query value is an invalid number: " + d);
          b = (b ? "?" : "\x26") + c + "\x3d";
          a = a.d.href.replace(b + d, b + "[*!]");
          this.i = Gl(a);
          if (!this.i) throw new af("Invalid URL: " + a);
          this.j = a;
          this.a = e;
          this.c = a.indexOf("[*!]");
          this.e = qf(this.j, 63, this.c - 1);
          this.b = qf(this.j, 38, this.c - 1);
          -1 == this.b && (this.b = this.e);
          !Lo && (Lo = /\/$/);
          this.d = tg(this.j, 0, this.b).replace(Lo, "");
          e = this.j.length;
          this.g = e - this.c - 4;
          0 != this.g && (this.f = pg(this.j, e - this.g + 1));
        }
        n(183, 1, {}, Sl);
        _.zb = function(a) {
          var b, c;
          if (0 != this.g && !kf(a, this.f)) return !1;
          c = a.length - this.g;
          if (!og(a, this.d)) return !1;
          if (this.b == c || (c == this.b - 1 && 47 == this.j.charCodeAt(c)))
            return !0;
          b = tg(a, this.b, c).toLowerCase();
          !Oo && (Oo = /^\/|(.html?)$/i);
          return Oo.test(b)
            ? !0
            : sf(a, this.b, this.j, this.b, this.c - this.b)
            ? 0 <= mo(tg(a, this.c, c))
            : !1;
        };
        _.Ab = function(a) {
          a = (null == a.c && (a.c = Vl(a.d)), a.c);
          var b = this.i;
          null == b.c && (b.c = Vl(b.d));
          return F(a, b.c);
        };
        _.tS = function() {
          return this.j;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        _.e = 0;
        _.f = "";
        _.g = 0;
        var Lo = null,
          Oo = null;
        t(183);
        function Po() {
          Po = k;
          Qo = new Yi();
          L(Qo, "http://schema.org/ImageObject", (Wo(), Xo));
          L(Qo, "http://schema.org/Article", Yo);
          L(Qo, "http://schema.org/BlogPosting", Yo);
          L(Qo, "http://schema.org/NewsArticle", Yo);
          L(Qo, "http://schema.org/ScholarlyArticle", Yo);
          L(Qo, "http://schema.org/TechArticle", Yo);
          L(Qo, "http://schema.org/Person", Zo);
          L(Qo, "http://schema.org/Organization", $o);
          L(Qo, "http://schema.org/Corporation", $o);
          L(Qo, "http://schema.org/EducationalOrganization", $o);
          L(Qo, "http://schema.org/GovernmentOrganization", $o);
          L(Qo, "http://schema.org/NGO", $o);
          ap = new Yi();
          L(ap, "IMG", "SRC");
          L(ap, "AUDIO", "SRC");
          L(ap, "EMBED", "SRC");
          L(ap, "IFRAME", "SRC");
          L(ap, "SOURCE", "SRC");
          L(ap, "TRACK", "SRC");
          L(ap, "VIDEO", "SRC");
          L(ap, "A", "HREF");
          L(ap, "LINK", "HREF");
          L(ap, "AREA", "HREF");
          L(ap, "META", "CONTENT");
          L(ap, "TIME", "DATETIME");
          L(ap, "OBJECT", "DATA");
          L(ap, "DATA", "VALUE");
          L(ap, "METER", "VALUE");
        }
        function bp(a) {
          var b, c, d;
          b = new Q();
          for (c = 0; c < a.c.b.length; c++)
            (d = N(a.c, c)), d.d == (Wo(), Yo) && P(b, d);
          return b;
        }
        function dp(a, b, c) {
          var d, e, f, g, l;
          e = null;
          d = b.hasAttribute("ITEMSCOPE") && b.hasAttribute("ITEMTYPE");
          if (c) {
            var m;
            f = A(b, "ITEMPROP");
            f.length
              ? ((m = (U(), lg(f, "\\s+"))),
                (f = 0 < m.length ? m : D(w(p, 1), h, 2, 4, [f])))
              : (f = E(p, h, 2, 0, 4));
          } else f = E(p, h, 2, 0, 4);
          if (d) {
            a: {
              var q;
              switch (
                ((q = A(b, "ITEMTYPE")), G(Qo, q) ? H(Qo, q) : (Wo(), sp)).b
              ) {
                case 0:
                  e = new tp(b);
                  break;
                case 1:
                  e = new up(b);
                  break;
                case 2:
                  e = new vp(b);
                  break;
                case 3:
                  e = new wp(b);
                  break;
                case 4:
                  e = new xp(b);
                  break;
                default:
                  e = null;
                  break a;
              }
            }
            !e ||
              e.d == (Wo(), sp) ||
              (c && c.d == (Wo(), sp) && 0 != f.length) ||
              (P(a.c, e), fh(a.b, b, e));
          }
          if (0 < f.length && c.d != (Wo(), sp) && (!e || e.d != (Wo(), sp)))
            for (a = 0; a < f.length; a++)
              e
                ? G(c.b, f[a]) && L(c.b, f[a], e)
                : ((d = c),
                  (q = f[a]),
                  (m =
                    ((g = ""),
                    (l = b.tagName),
                    G(ap, l) && (g = A(b, H(ap, l))),
                    !g.length && (g = b.textContent),
                    g)),
                  G(d.c, q) && !H(d.c, q).length && L(d.c, q, m));
        }
        function yp(a, b) {
          Po();
          var c;
          this.c = new Q();
          this.b = new Yi();
          this.d = b;
          c = V();
          var d, e, f, g, l;
          d = a.querySelectorAll("[ITEMPROP],[ITEMSCOPE]");
          dp(this, a, null);
          for (f = 0; f < d.length; f++) {
            for (
              var m = (e = d[f]), q = void 0, v = void 0, v = null, q = e;
              q;

            ) {
              q = B(q);
              if (!q) break;
              if (q.hasAttribute("ITEMSCOPE") && q.hasAttribute("ITEMTYPE")) {
                ch(this.b, q) && (v = eh(this.b, q));
                break;
              }
            }
            dp(this, m, v);
          }
          d = a.querySelectorAll("A[rel\x3dauthor],LINK[rel\x3dauthor]");
          for (f = 0; f < d.length; f++)
            (e = d[f]),
              !this.a.length &&
                (this.a =
                  ((g = ""),
                  (l = e.tagName),
                  (F(l, "A") || F(l, "LINK")) &&
                    F(A(e, "REL"), "author") &&
                    (g = e.textContent),
                  g));
          Nl(c, this.d, "SchemaOrgParser.parse");
        }
        function zp(a, b) {
          Po();
          var c;
          c = a;
          a.length && b.length && (c += " ");
          return c + b;
        }
        n(28, 1, {}, yp);
        _.a = "";
        var ap, Qo;
        t(28);
        function Ap(a, b) {
          return G(a.c, b) ? H(a.c, b) : "";
        }
        function Bp(a, b) {
          this.a = b;
          this.d = a;
          this.c = new Yi();
          this.b = new Yi();
          L(this.c, "name", "");
          L(this.c, "url", "");
          L(this.c, "description", "");
          L(this.c, "image", "");
        }
        n(45, 1, {});
        t(45);
        function Cp(a, b) {
          var c, d, e, f;
          c = G(a.c, b) ? H(a.c, b) : "";
          if (c.length) return c;
          (d = G(a.b, b) ? H(a.b, b) : null) &&
            (d.d == (Wo(), Zo)
              ? (c =
                  ((e = G(d.c, "name") ? H(d.c, "name") : ""),
                  e.length
                    ? e
                    : zp(
                        G(d.c, "givenName") ? H(d.c, "givenName") : "",
                        G(d.c, "familyName") ? H(d.c, "familyName") : ""
                      )))
              : d.d == $o &&
                (c =
                  ((f = G(d.c, "name") ? H(d.c, "name") : ""),
                  f.length
                    ? f
                    : G(d.c, "legalName")
                    ? H(d.c, "legalName")
                    : "")));
          return c;
        }
        function up(a) {
          Bp.call(this, (Wo(), Yo), a);
          L(this.c, "headline", "");
          L(this.c, "publisher", "");
          L(this.c, "copyrightHolder", "");
          L(this.c, "copyrightYear", "");
          L(this.c, "dateModified", "");
          L(this.c, "datePublished", "");
          L(this.c, "author", "");
          L(this.c, "creator", "");
          L(this.c, "articleSection", "");
          fh(this.b, "publisher", null);
          fh(this.b, "copyrightHolder", null);
          fh(this.b, "author", null);
          fh(this.b, "creator", null);
          fh(this.b, "associatedMedia", null);
          fh(this.b, "encoding", null);
        }
        n(151, 45, {}, up);
        t(151);
        function tp(a) {
          Bp.call(this, (Wo(), Xo), a);
          L(this.c, "contentUrl", "");
          L(this.c, "encodingFormat", "");
          L(this.c, "caption", "");
          L(this.c, "representativeOfPage", "");
          L(this.c, "width", "");
          L(this.c, "height", "");
        }
        n(150, 45, {}, tp);
        t(150);
        function wp(a) {
          Bp.call(this, (Wo(), $o), a);
          L(this.c, "legalName", "");
        }
        n(153, 45, {}, wp);
        t(153);
        function vp(a) {
          Bp.call(this, (Wo(), Zo), a);
          L(this.c, "familyName", "");
          L(this.c, "givenName", "");
        }
        n(152, 45, {}, vp);
        t(152);
        function Wo() {
          Wo = k;
          Xo = new Dp("IMAGE", 0);
          Yo = new Dp("ARTICLE", 1);
          Zo = new Dp("PERSON", 2);
          $o = new Dp("ORGANIZATION", 3);
          sp = new Dp("UNSUPPORTED", 4);
        }
        function Dp(a, b) {
          C.call(this, a, b);
        }
        n(33, 9, { 3: 1, 11: 1, 9: 1, 33: 1 }, Dp);
        var Yo,
          Xo,
          $o,
          Zo,
          sp,
          Ep = u(33, function() {
            Wo();
            return D(w(Ep, 1), ea, 33, 0, [Xo, Yo, Zo, $o, sp]);
          });
        function xp(a) {
          Bp.call(this, (Wo(), sp), a);
        }
        n(154, 45, {}, xp);
        t(154);
        function $m(a, b) {
          this.b = a;
          this.c = b;
        }
        n(119, 1, {}, $m);
        _.ob = function() {
          var a;
          !this.a && (this.a = new yp(this.b, this.c));
          a = bp(this.a);
          if (0 == a.b.length) a = null;
          else {
            a = (z(0, a.b.length), a.b[0]);
            var b, c;
            b = new Vm();
            b.d = G(a.c, "datePublished") ? H(a.c, "datePublished") : "";
            b.c = G(a.c, "dateModified") ? H(a.c, "dateModified") : "";
            b.e = G(a.c, "articleSection") ? H(a.c, "articleSection") : "";
            c = Cp(a, "author");
            !c.length && (c = Cp(a, "creator"));
            b.a = c.length ? D(w(p, 1), h, 2, 4, [c]) : E(p, h, 2, 0, 4);
            a = b;
          }
          return a;
        };
        _.pb = function() {
          var a, b;
          !this.a && (this.a = new yp(this.b, this.c));
          b = "";
          a = bp(this.a);
          0 != a.b.length &&
            ((a = (z(0, a.b.length), a.b[0])),
            (b = Cp(a, "author")),
            !b.length && (b = Cp(a, "creator")));
          return b.length ? b : this.a.a;
        };
        _.qb = function() {
          var a;
          !this.a && (this.a = new yp(this.b, this.c));
          a = bp(this.a);
          0 == a.b.length
            ? (a = "")
            : ((a = (z(0, a.b.length), a.b[0])),
              (a = zp(
                G(a.c, "copyrightYear") ? H(a.c, "copyrightYear") : "",
                Cp(a, "copyrightHolder")
              )),
              (a = a.length ? "Copyright " + a : a));
          return a;
        };
        _.rb = function() {
          var a;
          !this.a && (this.a = new yp(this.b, this.c));
          a = bp(this.a);
          return 0 == a.b.length
            ? ""
            : Ap((z(0, a.b.length), a.b[0]), "description");
        };
        _.sb = function() {
          var a, b, c, d, e, f, g, l;
          !this.a && (this.a = new yp(this.b, this.c));
          g = new Q();
          b = bp(this.a);
          c = null;
          for (d = 0; d < b.b.length; d++) {
            a = (z(d, b.b.length), b.b[d]);
            if (
              !c &&
              (c =
                ((e = G(a.b, "associatedMedia")
                  ? H(a.b, "associatedMedia")
                  : null),
                !e && (e = G(a.b, "encoding") ? H(a.b, "encoding") : null),
                e && e.d == (Wo(), Xo) ? e : null))
            )
              continue;
            var m = (f = void 0),
              m = G(a.c, "image") ? H(a.c, "image") : "";
            m.length ? ((f = new Wm()), (f.e = m), (a = f)) : (a = null);
            a && (g.b[g.b.length] = a);
          }
          d = this.a;
          b = new Q();
          for (a = 0; a < d.c.b.length; a++)
            (e = N(d.c, a)), e.d == (Wo(), Xo) && P(b, e);
          d = !1;
          for (e = 0; e < b.b.length; e++)
            (f = (z(e, b.b.length), b.b[e])),
              (a =
                ((l = new Wm()),
                (l.e = G(f.c, "contentUrl") ? H(f.c, "contentUrl") : ""),
                !l.e.length && (l.e = G(f.c, "url") ? H(f.c, "url") : ""),
                (l.d = G(f.c, "encodingFormat")
                  ? H(f.c, "encodingFormat")
                  : ""),
                (l.a = G(f.c, "caption") ? H(f.c, "caption") : ""),
                (l.f = ym(G(f.c, "width") ? H(f.c, "width") : "")),
                (l.b = ym(G(f.c, "height") ? H(f.c, "height") : "")),
                l)),
              f == c ||
              (!d &&
                F(
                  G(f.c, "representativeOfPage")
                    ? H(f.c, "representativeOfPage")
                    : "",
                  "true"
                ))
                ? ((d = !0), Pc(0, g.b.length), g.b.splice(0, 0, a))
                : (g.b[g.b.length] = a);
          return Th(g, E(Xm, da, 27, g.b.length, 0));
        };
        _.tb = function() {
          var a, b;
          !this.a && (this.a = new yp(this.b, this.c));
          b = "";
          a = bp(this.a);
          0 != a.b.length &&
            ((a = (z(0, a.b.length), a.b[0])),
            (b = Cp(a, "publisher")),
            !b.length && (b = Cp(a, "copyrightHolder")));
          return b;
        };
        _.ub = function() {
          var a, b, c;
          !this.a && (this.a = new yp(this.b, this.c));
          c = "";
          var d = bp(this.a),
            d = new Uh(d),
            e = new Fp();
          a = Je(d.b, d.b.length);
          b = a.length;
          var f, g;
          !e && (e = (Wh(), Wh(), Xh));
          f = b - 0;
          g = D(w(nb, 1), da, 1, 3, [df(0), df(b)]);
          if (!(0 <= f)) throw new af(Qc("%s \x3e %s", g));
          g = Ke(a, f);
          var l = hf(a.length - 0, f),
            m = (f = 0),
            q,
            v,
            I,
            pb,
            Aa;
          if (null == a) throw new jf("src");
          if (null == g) throw new jf("dest");
          pb = za(a);
          v = za(g);
          Jc(0 != (pb.f & 4), "srcType is not an array");
          Jc(0 != (v.f & 4), "destType is not an array");
          I = pb.c;
          q = v.c;
          Jc(
            0 != (I.f & 1) ? I == q : 0 == (q.f & 1),
            "Array types don't match"
          );
          Aa = a.length;
          q = g.length;
          if (0 > f || 0 > m || 0 > l || f + l > Aa || m + l > q)
            throw new Re();
          if ((0 != (I.f & 1) && 0 == (I.f & 4)) || pb == v)
            0 < l && Oe(a, f, g, m, l, !0);
          else if (s(a) === s(g) && f < m)
            for (f += l, l = m + l; l-- > m; ) g[l] = a[--f];
          else for (l = m + l; m < l; ) g[m++] = a[f++];
          Vh(g, a, 0, b, -0, e);
          e = d.b.length;
          for (b = 0; b < e; b++) Sh(d, b, a[b]);
          for (a = 0; a < d.b.length && !c.length; a++)
            (b = (z(a, d.b.length), d.b[a])),
              (c = G(b.c, "headline") ? H(b.c, "headline") : ""),
              !c.length && (c = G(b.c, "name") ? H(b.c, "name") : "");
          return c;
        };
        _.vb = function() {
          !this.a && (this.a = new yp(this.b, this.c));
          return 0 == bp(this.a).b.length ? "" : "Article";
        };
        _.wb = function() {
          var a;
          !this.a && (this.a = new yp(this.b, this.c));
          a = bp(this.a);
          return 0 == a.b.length ? "" : Ap((z(0, a.b.length), a.b[0]), "url");
        };
        _.xb = function() {
          return !1;
        };
        t(119);
        function Fp() {}
        n(120, 1, {}, Fp);
        _.Z = function(a, b) {
          var c, d;
          c = Hm(a.a);
          d = Hm(b.a);
          return c > d ? -1 : c < d ? 1 : 0;
        };
        t(120);
        function U() {
          U = k;
          Fk = new Lk();
        }
        function Wl(a) {
          U();
          return /\d/.test(a);
        }
        function zm(a) {
          U();
          return decodeURIComponent(a);
        }
        function Ko(a) {
          U();
          return /^\d+$/.test(a);
        }
        function Gp(a) {
          U();
          return !/\S/.test(a);
        }
        function Rm(a, b) {
          U();
          return a.join(b);
        }
        function Mm(a) {
          U();
          return a.split(",");
        }
        function Gk(a) {
          U();
          return a.trim();
        }
        function mo(a) {
          U();
          return a.length && Ko(a) ? ym(a) : -1;
        }
        var Fk;
        function Nk() {}
        n(107, 1, {}, Nk);
        _.Bb = function(a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF]\S*)/g)) ? a.length : 0;
        };
        t(107);
        function Lk() {}
        n(78, 1, {}, Lk);
        _.Bb = function(a) {
          var b = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g),
            c = b ? b.length : 0,
            b = a.match(/([\u3040-\uA4CF])/g);
          return (c += Math.ceil(0.55 * (b ? b.length : 0)));
        };
        t(78);
        function Mk() {}
        n(106, 1, {}, Mk);
        _.Bb = function(a) {
          return (a = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g))
            ? a.length
            : 0;
        };
        t(106);
        function Hp() {
          Hp = k;
          Ip = new Yi();
          L(Ip, "COLGROUP", (Te(), Ue));
          L(Ip, "COL", Ue);
          L(Ip, "TH", We);
          Jp = new Yi();
          L(Jp, "EMBED", Ue);
          L(Jp, "OBJECT", Ue);
          L(Jp, "APPLET", Ue);
          L(Jp, "IFRAME", Ue);
          Kp = new Zi();
          R(Kp, "grid");
          R(Kp, "treegrid");
          Lp = new Zi();
          R(Lp, "gridcell");
          R(Lp, "columnheader");
          R(Lp, "row");
          R(Lp, "rowgroup");
          R(Lp, "rowheader");
          Mp = new Zi();
          R(Mp, "application");
          R(Mp, "banner");
          R(Mp, "complementary");
          R(Mp, "contentinfo");
          R(Mp, "form");
          R(Mp, "main");
          R(Mp, "navigation");
          R(Mp, "search");
        }
        function Np(a, b) {
          var c, d, e;
          for (d = new M(a); d.b < d.d.J(); )
            if (
              ((c = (y(d.b < d.d.J()), d.d.T((d.c = d.b++)))),
              (e = c.tagName),
              null == e ? dh(b.a, null) : void 0 !== b.c.eb(e))
            )
              return !(null == e ? ah(dh(b.a, null)) : b.c.eb(e)).a || Op(c);
          return !1;
        }
        function Op(a) {
          a = a.innerText;
          return !!a.length && !Gp(a);
        }
        function Pp(a, b, c) {
          2 <= Ok && W(a + b + " -\x3e " + c);
          return c;
        }
        function Qp(a) {
          Hp();
          var b, c, d, e, f, g, l, m;
          Rp();
          for (f = B(a); f; ) {
            if (F("INPUT", f.tagName) || F(A(f, "contenteditable"), "true"))
              return Pp(Sp, "", (Z(), Tp));
            f = B(f);
          }
          f = A(a, "role").toLowerCase();
          if ("presentation" === f) return Pp(Up, "_" + f, (Z(), Tp));
          if (S(Kp, f) || S(Mp, f)) return Pp(Up, "_" + f, (Z(), Vp));
          f = new Q();
          g = a.getElementsByTagName("*");
          if (0 < a.getElementsByTagName("TABLE").length)
            for (e = 0; e < g.length; e++)
              for (c = g[e], d = B(c); d; ) {
                if (F("TABLE", d.tagName)) {
                  d == a && (f.b[f.b.length] = c);
                  break;
                }
                d = B(d);
              }
          else for (e = 0; e < g.length; e++) P(f, g[e]);
          for (g = new M(f); g.b < g.d.J(); )
            if (
              ((b = (y(g.b < g.d.J()), g.d.T((g.c = g.b++)))),
              (c = A(b, "role").toLowerCase()),
              S(Lp, c) || S(Mp, c))
            )
              return Pp(Wp, "_" + c, (Z(), Vp));
          if ("0" === A(a, "datatable")) return Pp(Xp, "", (Z(), Tp));
          if (0 < a.getElementsByTagName("TABLE").length)
            return Pp(Yp, "", (Z(), Tp));
          g = a.rows;
          if (1 >= g.length) return Pp(Zp, "", (Z(), Tp));
          c = null;
          for (d = b = 0; d < g.length; d++)
            (e = g[d].cells), e.length > b && ((b = e.length), (c = e));
          d = c;
          if (!d || 1 >= d.length) return Pp($p, "", (Z(), Tp));
          if (((c = a.caption) && Op(c)) || a.tHead || a.tFoot || Np(f, Ip))
            return Pp(aq, "", (Z(), Vp));
          c = new Q();
          for (e = new M(f); e.b < e.d.J(); )
            (b = (y(e.b < e.d.J()), e.d.T((e.c = e.b++)))),
              F("TD", b.tagName) && (c.b[c.b.length] = b);
          for (e = new M(c); e.b < e.d.J(); ) {
            b = (y(e.b < e.d.J()), e.d.T((e.c = e.b++)));
            if (
              b.hasAttribute("abbr") ||
              b.hasAttribute("headers") ||
              b.hasAttribute("scope")
            )
              return Pp(bq, "", (Z(), Vp));
            b = b.getElementsByTagName("*");
            if (1 == b.length && F("ABBR", b[0].tagName))
              return Pp(cq, "", (Z(), Vp));
          }
          e = a.ownerDocument.documentElement;
          b = (e.offsetWidth || 0) | 0;
          if (0 < b && ((a.offsetWidth || 0) | 0) > 0.95 * b) {
            m = !1;
            b = e.getElementsByTagName("META");
            for (l = 0; l < b.length && !m; l++)
              (m = b[l]), (m = F(m.name, "viewport"));
            if (!m) return Pp(dq, "", (Z(), Tp));
          }
          if (a.hasAttribute("summary")) return Pp(eq, "", (Z(), Vp));
          if (5 <= d.length) return Pp(fq, "", (Z(), Vp));
          for (d = new M(c); d.b < d.d.J(); )
            if (
              ((b = (y(d.b < d.d.J()), d.d.T((d.c = d.b++)))),
              (b = getComputedStyle(b, null).borderStyle),
              b.length && "none" !== b && "hidden" !== b)
            )
              return Pp(gq, "_" + b, (Z(), Vp));
          l = null;
          for (b = 0; b < g.length; b++)
            if (((d = getComputedStyle(g[b], null).backgroundColor), null == l))
              l = d;
            else if (!F(l, d)) return Pp(hq, "", (Z(), Vp));
          if (20 <= g.length) return Pp(iq, "", (Z(), Vp));
          if (10 >= c.b.length) return Pp(jq, "", (Z(), Tp));
          if (Np(f, Jp)) return Pp(kq, "", (Z(), Tp));
          f = (e.offsetHeight || 0) | 0;
          return 0 < f && ((a.offsetHeight || 0) | 0) > 0.9 * f
            ? Pp(lq, "", (Z(), Tp))
            : Pp(mq, "", (Z(), Vp));
        }
        var Mp, Lp, Kp, Ip, Jp;
        function Rp() {
          Rp = k;
          Sp = new nq("INSIDE_EDITABLE_AREA", 0);
          Up = new nq("ROLE_TABLE", 1);
          Wp = new nq("ROLE_DESCENDANT", 2);
          Xp = new nq("DATATABLE_0", 3);
          aq = new nq("CAPTION_THEAD_TFOOT_COLGROUP_COL_TH", 4);
          bq = new nq("ABBR_HEADERS_SCOPE", 5);
          cq = new nq("ONLY_HAS_ABBR", 6);
          dq = new nq("MORE_95_PERCENT_DOC_WIDTH", 7);
          eq = new nq("SUMMARY", 8);
          Yp = new nq("NESTED_TABLE", 9);
          Zp = new nq("LESS_EQ_1_ROW", 10);
          $p = new nq("LESS_EQ_1_COL", 11);
          fq = new nq("MORE_EQ_5_COLS", 12);
          gq = new nq("CELLS_HAVE_BORDER", 13);
          hq = new nq("DIFFERENTLY_COLORED_ROWS", 14);
          iq = new nq("MORE_EQ_20_ROWS", 15);
          jq = new nq("LESS_EQ_10_CELLS", 16);
          kq = new nq("EMBED_OBJECT_APPLET_IFRAME", 17);
          lq = new nq("MORE_90_PERCENT_DOC_HEIGHT", 18);
          mq = new nq("DEFAULT", 19);
          oq = new nq("UNKNOWN", 20);
        }
        function nq(a, b) {
          C.call(this, a, b);
        }
        n(16, 9, { 3: 1, 11: 1, 9: 1, 16: 1 }, nq);
        var bq,
          aq,
          gq,
          Xp,
          mq,
          hq,
          kq,
          Sp,
          jq,
          $p,
          Zp,
          lq,
          dq,
          iq,
          fq,
          Yp,
          cq,
          Wp,
          Up,
          eq,
          oq,
          pq = u(16, function() {
            Rp();
            return D(w(pq, 1), ea, 16, 0, [
              Sp,
              Up,
              Wp,
              Xp,
              aq,
              bq,
              cq,
              dq,
              eq,
              Yp,
              Zp,
              $p,
              fq,
              gq,
              hq,
              iq,
              jq,
              kq,
              lq,
              mq,
              oq
            ]);
          });
        function Z() {
          Z = k;
          Vp = new qq("DATA", 0);
          Tp = new qq("LAYOUT", 1);
        }
        function qq(a, b) {
          C.call(this, a, b);
        }
        n(56, 9, { 3: 1, 11: 1, 9: 1, 56: 1 }, qq);
        var Vp,
          Tp,
          rq = u(56, function() {
            Z();
            return D(w(rq, 1), ea, 56, 0, [Vp, Tp]);
          });
        function sq(a, b) {
          var c;
          c = tq(b);
          a.appendChild(c);
          return c;
        }
        function tq(a) {
          var b;
          b = a.cloneNode(!1);
          1 == a.nodeType &&
            ((a = getComputedStyle(a, null).direction),
            !a.length && (a = "auto"),
            b.setAttribute("dir", a));
          return b;
        }
        function uq(a, b) {
          var c;
          c = a.parentNode;
          c || ((c = tq(b)), c.appendChild(a));
          return c;
        }
        function vq(a) {
          return sl(N(a.j, N(a.i, 0).a));
        }
        function wq(a, b) {
          return S(a.b, b);
        }
        function Xk(a, b) {
          a.g += "\n";
          a.g += b.g;
          a.d += b.d;
          a.e += b.e;
          a.c = 0 == a.d ? 0 : a.e / a.d;
          a.a |= b.a;
          Ph(a.i, b.i);
          a.b.G(b.b);
          a.f = hf(a.f, b.f);
        }
        function dl(a, b) {
          if (b == a.a) return !1;
          a.a = b;
          return !0;
        }
        function xq(a) {
          var b;
          b =
            "[" +
            (N(a.j, N(a.i, 0).a).j +
              "-" +
              N(a.j, N(a.i, a.i.b.length - 1).a).j +
              ";");
          b += "tl\x3d" + a.f + ";";
          b += "nw\x3d" + a.d + ";";
          b += "ld\x3d" + a.c + ";";
          b =
            b +
            "]\t" +
            ((a.a ? "\u001b[0;32mCONTENT" : "\u001b[0;35mboilerplate") +
              "\u001b[0m,");
          b += "\u001b[1;30m" + Xg(new Ck(a.b)) + "\u001b[0m";
          return (b += "\n" + a.g);
        }
        function Wk(a, b) {
          var c, d;
          this.j = a;
          this.i = new Q();
          P(this.i, df(b));
          c = N(this.j, b);
          this.b = ((d = c.e), (c.e = new Zi()), d);
          this.d = c.i;
          this.e = c.g;
          this.f = c.n;
          this.g = c.o;
          this.c = 0 == this.d ? 0 : this.e / this.d;
        }
        n(72, 1, {}, Wk);
        _.tS = function() {
          return xq(this);
        };
        _.a = !1;
        _.c = 0;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        t(72);
        function Yk(a) {
          this.a = a;
        }
        n(81, 1, {}, Yk);
        t(81);
        function yq() {
          yq = k;
          zq = new Zi();
          R(zq, "IMG");
          R(zq, "PICTURE");
          R(zq, "FIGURE");
          R(zq, "SPAN");
          Aq = D(w(p, 1), h, 2, 4, [
            "data-src",
            "data-original",
            "datasrc",
            "data-url"
          ]);
        }
        function Bq(a) {
          var b;
          b = $doc.createElement("FIGCAPTION");
          b.textContent = a.innerText || "";
          return b;
        }
        function Cq(a, b) {
          var c, d, e;
          if (!S(zq, b.tagName)) return null;
          a.b = "";
          c = "IMG" == b.tagName ? b : Im(b, "IMG");
          if ("FIGURE" === b.tagName) {
            d = Im(b, "PICTURE");
            !d && (d = Im(b, "IMG"));
            if (!d) return null;
            Dq(a, c);
            (c = Im(b, "FIGCAPTION"))
              ? ((e = c.querySelectorAll("A[HREF]")),
                (c = 0 < e.length ? c : Bq(c)))
              : (c = Bq(b));
            return new Eq(d, a.c, a.a, a.b, c);
          }
          if ("SPAN" === b.tagName) {
            if (-1 == A(b, "class").indexOf("lazy-image-placeholder"))
              return null;
            c = $doc.createElement("img");
            a.b = A(b, "data-src");
            a.c = ym(A(b, "data-width"));
            a.a = ym(A(b, "data-height"));
            d = A(b, "data-srcset");
            c.setAttribute("srcset", d);
            return new Fq(c, a.c, a.a, a.b);
          }
          Dq(a, c);
          return new Fq(b, a.c, a.a, a.b);
        }
        function Dq(a, b) {
          var c, d, e, f;
          d = Aq;
          e = 0;
          for (
            f = d.length;
            e < f && ((c = d[e]), (a.b = A(b, c)), !a.b.length);
            ++e
          );
          a.b.length
            ? ((a.c = 0), (a.a = 0))
            : ((a.b = b.src), (a.c = b.width), (a.a = b.height));
          2 <= Ok && W("Extracted WebImage: " + a.b);
        }
        function Gq() {
          yq();
        }
        n(132, 1, {}, Gq);
        _.Cb = function(a) {
          return Cq(this, a);
        };
        _.Db = function() {
          return zq;
        };
        _.a = 0;
        _.c = 0;
        var Aq, zq;
        t(132);
        function Hq() {
          Hq = k;
          Iq = new Zi();
          R(Iq, "BLOCKQUOTE");
          R(Iq, "IFRAME");
        }
        function Jq(a) {
          var b;
          if (-1 == A(a, "class").indexOf("twitter-tweet")) return null;
          b = a.getElementsByTagName("a");
          if (0 == b.length) return null;
          b = b[b.length - 1];
          if (!Nm(b.href, "twitter.com")) return null;
          a: {
            var c;
            c = lg(Sc(b, "pathname"), "/");
            for (b = c.length - 1; 0 <= b; b--)
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            b = null;
          }
          return null == b ? null : new Kq(a, "twitter", b, null);
        }
        function Lq(a) {
          var b;
          if ("IFRAME" !== a.tagName || a.src.length) return null;
          b = a.contentWindow.document;
          if (!b) return null;
          b = b.getElementsByTagName("blockquote");
          if (1 > b.length) return null;
          b = A(b[0], "data-tweet-id");
          return b.length ? new Kq(a, "twitter", b, null) : null;
        }
        function Mq() {
          Hq();
        }
        n(133, 1, {}, Mq);
        _.Cb = function(a) {
          var b;
          a && S(Iq, a.tagName)
            ? ((b = null),
              "BLOCKQUOTE" === a.tagName
                ? (b = Jq(a))
                : "IFRAME" === a.tagName && (b = Lq(a)),
              b &&
                2 <= Ok &&
                (W("Twitter embed extracted:"), W("    ID: " + b.b)),
              (a = b))
            : (a = null);
          return a;
        };
        _.Db = function() {
          return Iq;
        };
        var Iq;
        t(133);
        function Nq() {
          Nq = k;
          Oq = new Zi();
          R(Oq, "IFRAME");
        }
        function Pq(a) {
          var b, c;
          if (!a || !S(Oq, a.tagName)) return null;
          c = a.src;
          if (!Nm(c, "player.vimeo.com")) return null;
          b = $doc.createElement("a");
          b.href = c;
          c = Sc(b, "pathname");
          b = Sm(pg(Sc(b, "search"), 1));
          a: {
            var d;
            d = lg(c, "/");
            for (c = d.length - 1; 0 <= c && "video" !== d[c]; c--)
              if (0 < d[c].length) {
                c = d[c];
                break a;
              }
            c = null;
          }
          if (null == c) return null;
          2 <= Ok && (W("Vimeo embed extracted:"), W("    ID:    " + c));
          return new Kq(a, "vimeo", c, b);
        }
        function Qq() {
          Nq();
        }
        n(134, 1, {}, Qq);
        _.Cb = function(a) {
          return Pq(a);
        };
        _.Db = function() {
          return Oq;
        };
        var Oq;
        t(134);
        function Rq() {
          Rq = k;
          Sq = new Zi();
          R(Sq, "IFRAME");
          R(Sq, "OBJECT");
        }
        function Tq(a) {
          var b, c, d;
          if (!a || !S(Sq, a.tagName)) return null;
          d = null;
          "IFRAME" === a.tagName
            ? (d = a.src)
            : "OBJECT" === a.tagName &&
              ("application/x-shockwave-flash" === A(a, "type")
                ? (d = A(a, "data"))
                : ((b = a.querySelectorAll('param[name\x3d"movie"]')),
                  1 == b.length && (d = A(b[0], "value"))));
          if (null == d || !Nm(d, "youtube.com")) return null;
          c = d.indexOf("?");
          0 > c && (c = d.indexOf("\x26"));
          0 > c && (c = d.length);
          b = d.substr(0, c);
          d = Sm(d.substr(c + 1, d.length - (c + 1)));
          a: {
            c = lg(b, "/");
            for (b = c.length - 1; 0 <= b && "embed" !== c[b]; b--)
              if (0 < c[b].length) {
                b = c[b];
                break a;
              }
            b = null;
          }
          if (null == b) return null;
          2 <= Ok && (W("YouTube embed extracted:"), W("    ID:    " + b));
          return new Kq(a, "youtube", b, d);
        }
        function Uq() {
          Rq();
        }
        n(135, 1, {}, Uq);
        _.Cb = function(a) {
          return Tq(a);
        };
        _.Db = function() {
          return Sq;
        };
        var Sq;
        t(135);
        function Zk(a, b, c) {
          if (!(1 > Ok))
            if (b) {
              W(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c " +
                  c +
                  " \x3e\x3e\x3e\x3e\x3e"
              );
              if (!(1 > Ok)) {
                b = "";
                for (c = new M(a.a); c.b < c.d.J(); )
                  (a = (y(c.b < c.d.J()), c.d.T((c.c = c.b++)))),
                    (b += xq(a) + "\n");
                W(b);
              }
              W(
                "\u001b[0;34m\x3c\x3c\x3c\x3c\x3c                \x3e\x3e\x3e\x3e\x3e"
              );
            } else W("\u001b[0;31m~~~~~ No Changes: " + c + " ~~~~~");
        }
        function $k() {
          $k = k;
          al = RegExp(
            "(^(comments|\u00a9 reuters|please rate this|post a comment|\\d+\\s+(comments|users responded in))|what you think\\.\\.\\.|add your comment|add comment|reader views|have your say|reader comments|r\u00e4tta artikeln|^thanks for your comments - this feedback is now closed$)",
            "i"
          );
        }
        var al;
        function kl() {
          kl = k;
          ll = new Vq(!1);
          ol = new Vq(!0);
        }
        function jl(a, b) {
          var c, d, e, f, g;
          c = b.a;
          if (2 > c.b.length) return !1;
          d = !1;
          g = (z(0, c.b.length), c.b[0]);
          for (f = new rh(c, 1); f.b < f.d.J(); )
            (c = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))),
              c.a && g.a
                ? ((e =
                    N(c.j, N(c.i, 0).a).j -
                    N(g.j, N(g.i, g.i.b.length - 1).a).j -
                    1),
                  1 >= e
                    ? ((e = !0),
                      a.a
                        ? g.f != c.f && (e = !1)
                        : S(c.b, "BOILERPLATE_HEADING_FUSED") && (e = !1),
                      S(g.b, "STRICTLY_NOT_CONTENT") !=
                        S(c.b, "STRICTLY_NOT_CONTENT") && (e = !1),
                      S(g.b, "de.l3s.boilerpipe/TITLE") !=
                        S(c.b, "de.l3s.boilerpipe/TITLE") && (e = !1),
                      !g.a &&
                        S(g.b, "de.l3s.boilerpipe/LI") &&
                        !S(c.b, "de.l3s.boilerpipe/LI") &&
                        (e = !1),
                      e ? (Xk(g, c), qh(f), (d = !0)) : (g = c))
                    : (g = c))
                : (g = c);
          return d;
        }
        function Vq(a) {
          this.a = a;
        }
        n(85, 1, {}, Vq);
        _.tS = function() {
          return Xa(Wq), Wq.n + ": postFiltering\x3d" + this.a;
        };
        _.a = !1;
        var ol,
          ll,
          Wq = t(85);
        function Xq() {
          Xq = k;
          cl = RegExp("[\\?\\!\\.\\-\\:]+", "g");
        }
        function Yq(a, b, c) {
          var d, e;
          e = lg(b, c);
          if (1 != e.length)
            for (b = 0; b < e.length; b++)
              (d = e[b]),
                -1 == d.indexOf(".com") &&
                  ((c = (U(), Fk.Bb(d))), 4 <= c && R(a, d));
        }
        function Zq(a, b) {
          var c, d, e, f, g, l;
          l = lg(a, b);
          if (1 == l.length) return null;
          d = 0;
          e = "";
          for (c = 0; c < l.length; c++)
            if (
              ((g = l[c]),
              -1 == g.indexOf(".com") &&
                ((f = (U(), Fk.Bb(g))), f > d || g.length > e.length))
            )
              (d = f), (e = g);
          return 0 == e.length ? null : ug(e);
        }
        function bl(a) {
          Xq();
          var b;
          if (a)
            for (this.a = new Zi(), a = Lh(a, 0); a.b != a.d.c; ) {
              b = (y(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c);
              var c = void 0;
              b = zf(b);
              b = Af(b, "'");
              b = ug(b).toLowerCase();
              0 != b.length &&
                R(this.a, b) &&
                ((c = Zq(b, "[ ]*[\\|\u00bb|-][ ]*")),
                null != c && R(this.a, c),
                (c = Zq(b, "[ ]*[\\|\u00bb|:][ ]*")),
                null != c && R(this.a, c),
                (c = Zq(b, "[ ]*[\\|\u00bb|:\\(\\)][ ]*")),
                null != c && R(this.a, c),
                (c = Zq(b, "[ ]*[\\|\u00bb|:\\(\\)\\-][ ]*")),
                null != c && R(this.a, c),
                (c = Zq(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-][ ]*")),
                null != c && R(this.a, c),
                (c = Zq(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-\u00a0][ ]*")),
                null != c && R(this.a, c),
                Yq(this.a, b, "[ ]+[\\|][ ]+"),
                Yq(this.a, b, "[ ]+[\\-][ ]+"),
                R(this.a, Yf(b, " - [^\\-]+$")),
                R(this.a, Yf(b, "^[^\\-]+ - ")));
            }
          else this.a = null;
        }
        n(136, 1, {}, bl);
        var cl;
        t(136);
        function pl() {
          pl = k;
          ql = new $q(!0);
        }
        function $q(a) {
          this.a = a;
        }
        n(87, 1, {}, $q);
        _.a = !1;
        var ql;
        t(87);
        function ar(a, b, c) {
          b = N(a.d, b);
          c = N(a.d, c);
          return a.c ||
            (b.nodeType != c.nodeType
              ? 0
              : 1 != b.nodeType || b.nodeName === c.nodeName)
            ? b.parentNode == c.parentNode
            : !1;
        }
        function hl(a, b) {
          var c, d, e, f, g, l, m, q, v, I;
          a.g = b.a;
          if (2 > a.g.b.length) return !1;
          d = a.g;
          e = $doc.documentElement;
          l = new Q();
          for (f = 0; f < d.b.length; ++f) {
            g =
              f + 1 == d.b.length ? e : vq((z(f + 1, d.b.length), d.b[f + 1]));
            0 == f
              ? (m = e)
              : ((m = (z(f - 1, d.b.length), d.b[f - 1])),
                (m = rl(N(m.j, N(m.i, m.i.b.length - 1).a))));
            v = m;
            m = vq((z(f, d.b.length), d.b[f]));
            for (q = m.parentNode; !q.contains(v) && !q.contains(g); )
              (m = q), (q = q.parentNode);
            l.b[l.b.length] = m;
          }
          a.d = l;
          l = E(br, { 3: 1 }, 0, a.g.b.length, 7);
          q = m = 0;
          d = E(br, { 3: 1 }, 0, a.g.b.length, 7);
          f = e = 0;
          g = !1;
          for (v = 0; v < a.g.b.length; v++)
            if (
              (!a.b && wq(N(a.g, v), "de.l3s.boilerpipe/TITLE")) ||
              (!a.a && wq(N(a.g, v), "de.l3s.boilerpipe/HEADING"))
            )
              (m = q), (e = f);
            else if (
              N(a.g, v).a &&
              !wq(N(a.g, v), "STRICTLY_NOT_CONTENT") &&
              !wq(N(a.g, v), "de.l3s.boilerpipe/TITLE")
            )
              for (l[q++] = v, I = e; I < f; I++)
                (c = d[I]),
                  v - c > a.e
                    ? I == e && ++e
                    : ar(a, v, c) &&
                      ((g = !0), dl(N(a.g, c), !0), (d[I] = d[e++]));
            else if (
              N(a.g, v).c <= a.f &&
              !N(a.g, v).a &&
              !wq(N(a.g, v), "STRICTLY_NOT_CONTENT") &&
              !wq(N(a.g, v), "de.l3s.boilerpipe/TITLE")
            ) {
              for (I = m; I < q; I++)
                if (((c = l[I]), v - c > a.e)) I == m && ++m;
                else if (ar(a, v, c)) {
                  g = !0;
                  dl(N(a.g, v), !0);
                  l[I] = l[m++];
                  break;
                }
              I == q ? (d[f++] = v) : (l[q++] = v);
            }
          return g;
        }
        function cr(a, b, c, d, e) {
          this.b = a;
          this.a = b;
          this.c = c;
          this.f = d;
          this.e = e;
        }
        n(138, 1, {}, cr);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.e = 0;
        _.f = 0;
        t(138);
        function gl() {
          var a = new dr();
          a.a = !0;
          return a;
        }
        function il(a) {
          return new cr(a.b, a.a, a.c, a.e, a.d);
        }
        function dr() {
          this.c = this.a = this.b = !1;
          this.d = this.e = 0;
        }
        n(84, 1, {}, dr);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        _.d = 0;
        _.e = 0;
        t(84);
        function ml() {
          ml = k;
          nl = new er("de.l3s.boilerpipe/TITLE");
        }
        function er(a) {
          this.a = a;
        }
        n(86, 1, {}, er);
        var nl;
        t(86);
        function el() {
          el = k;
          fl = new fr(D(w(p, 1), h, 2, 4, ["STRICTLY_NOT_CONTENT"]));
        }
        function fr(a) {
          this.a = a;
        }
        n(137, 1, {}, fr);
        var fl;
        t(137);
        function gr(a, b) {
          var c, d, e, f, g, l, m;
          m = mm(b);
          g = l = !1;
          m ||
            (a.i &&
              a.d &&
              (a.f || (g = b.classList.contains("hidden")),
              (a.f || g) && (l = !0)),
            a.i &&
              (-1 != A(b, "class").indexOf("continue") && (l = !0),
              "false" === A(b, "aria-expanded") && (l = !0)));
          var q = m || l,
            v;
          2 > Ok ||
            ((v = getComputedStyle(b, null)),
            W(
              (q ? "KEEP " : "SKIP ") +
                b.tagName +
                ": id\x3d" +
                b.id +
                ", dsp\x3d" +
                v.display +
                ", vis\x3d" +
                v.visibility +
                ", opaq\x3d" +
                v.opacity
            ));
          if (!m && !l) return R(a.e, b), !1;
          try {
            if (S(a.b, b.tagName))
              for (f = new M(a.c); f.b < f.d.J(); )
                if (
                  ((e = (y(f.b < f.d.J()), f.d.T((f.c = f.b++)))),
                  (d = e.Cb(b)))
                )
                  return (c = a.a), Vk(c, c.d), P(c.b.a, d), !1;
          } catch (I) {
            if (((I = Cc(I)), r(I, 15)))
              (c = I), W("Exception happened in EmbedExtractors: " + c.q());
            else throw Dc(I);
          }
          c = A(b, "class");
          d = A(b, "data-component");
          if ("sharing" === c || "socialArea" === c || "share" === d) return !1;
          Cr(b.tagName) &&
            ((d = a.a),
            (e = new Jr(b.tagName, (xl(), yl))),
            Vk(d, d.d),
            P(d.b.a, e));
          switch (b.tagName) {
            case "A":
              if ((c = -1 != b.href.indexOf("action\x3dedit\x26section\x3d")))
                return !1;
              break;
            case "SPAN":
              if ("mw-editsection" === c) return !1;
              break;
            case "BR":
              return (
                (g = a.a),
                g.c && (Vk(g, g.d), ++g.d, (g.c = !1)),
                (g = g.g),
                (g.j += "\n"),
                P(g.a, b),
                !1
              );
            case "TABLE":
              c = Qp(b);
              2 > Ok ||
                ((d = B(b)),
                W(
                  "TABLE: " +
                    c +
                    ", id\x3d" +
                    b.id +
                    ", class\x3d" +
                    A(b, "class") +
                    ", parent\x3d[" +
                    d.tagName +
                    ", id\x3d" +
                    d.id +
                    ", class\x3d" +
                    A(d, "class") +
                    "]"
                ));
              if (c == (Z(), Vp))
                return (g = a.a), Vk(g, g.d), P(g.b.a, new Kr(b)), !1;
              break;
            case "VIDEO":
              return (g = a.a), (c = new Lr(b)), Vk(g, g.d), P(g.b.a, c), !1;
            case "OPTION":
            case "OBJECT":
            case "EMBED":
            case "APPLET":
              return (a.a.c = !0), !1;
            case "HEAD":
            case "STYLE":
            case "SCRIPT":
            case "LINK":
            case "NOSCRIPT":
            case "IFRAME":
            case "svg":
              return !1;
          }
          c = a.a;
          Rr();
          f = getComputedStyle(b, null);
          d = new Sr();
          e = b.tagName;
          switch (f.display) {
            case "inline":
              break;
            case "inline-block":
            case "inline-flex":
              d.a = !0;
              break;
            case "block":
              if ("none" !== f["float"] && "SPAN" === e) break;
            default:
              (d.b = !0), (d.a = !0);
          }
          if ("HTML" !== e && "BODY" !== e && "ARTICLE" !== e)
            switch (
              ((l = A(b, "class")),
              (f = b.classList.length),
              (m = A(b, "id")),
              (Tr.test(l) || Tr.test(m)) &&
                2 >= f &&
                ((f = d.d), (f[f.length] = "STRICTLY_NOT_CONTENT")),
              e)
            ) {
              case "ASIDE":
              case "NAV":
                e = d.d;
                e[e.length] = "STRICTLY_NOT_CONTENT";
                break;
              case "LI":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/LI";
                break;
              case "H1":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H1";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H2":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H2";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H3":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/H3";
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "H4":
              case "H5":
              case "H6":
                e = d.d;
                e[e.length] = "de.l3s.boilerpipe/HEADING";
                break;
              case "A":
                (d.a = !0), b.hasAttribute("href") && (d.c = !0);
            }
          P(c.a.a, d);
          d.a && ++c.f;
          d.c && ((e = c.g), (e.e = !0), (e.j += " "));
          c.c |= d.b;
          c = (Te(), a.f ? We : Ue);
          P(a.g.a, c);
          a.f |= g;
          return !0;
        }
        function Qk(a) {
          var b;
          this.g = new jk();
          this.e = new Zi();
          this.a = a;
          this.c = new Q();
          P(this.c, new Gq());
          P(this.c, new Mq());
          P(this.c, new Qq());
          P(this.c, new Uq());
          this.b = new Zi();
          for (b = new M(this.c); b.b < b.d.J(); )
            (a = (y(b.b < b.d.J()), b.d.T((b.c = b.b++)))), Wg(this.b, a.Db());
        }
        n(123, 1, {}, Qk);
        _.mb = function(a) {
          if (1 == a.nodeType && Cr(a.tagName)) {
            var b = this.a;
            a = new Jr(a.tagName, (xl(), Ur));
            Vk(b, b.d);
            P(b.b.a, a);
          }
          b = this.a;
          a = b.a;
          var c;
          c = a.a.b.length;
          if (0 < c) a = (hk(c - 1, a.a.b.length), N(a.a, c - 1));
          else throw new $h();
          a.a && --b.f;
          if (b.c || a.b) Vk(b, b.d), ++b.d;
          a.c && ((a = b.g), (a.e = !1), (a.j += " "));
          ik(b.a);
          this.f = ik(this.g).a;
        };
        _.nb = function(a) {
          switch (a.nodeType) {
            case 3:
              var b = this.a;
              b.c && (Vk(b, b.d), ++b.d, (b.c = !1));
              var c = b.g,
                b = b.f,
                d;
              d = a.data;
              d.length &&
                ((c.j += d),
                P(c.a, a),
                Gp(d) ||
                  ((a = (U(), Fk.Bb(d))),
                  (c.i += a),
                  c.e && (c.g += a),
                  (c.f = c.a.b.length - 1),
                  c.d < c.c && (c.d = c.f),
                  -1 == c.b && (c.b = b)));
              return !1;
            case 1:
              return gr(this, a);
            default:
              return !1;
          }
        };
        _.d = !1;
        _.f = !1;
        _.i = !1;
        t(123);
        function Rr() {
          Rr = k;
          Tr = /\bcomments?\b/;
        }
        function Sr() {
          this.d = [];
        }
        n(179, 1, {}, Sr);
        _.a = !1;
        _.b = !1;
        _.c = !1;
        var Tr;
        t(179);
        function Vr() {
          this.a = new Q();
        }
        n(116, 1, {}, Vr);
        t(116);
        function Vk(a, b) {
          var c;
          c = a.g;
          var d = a.e;
          c.c == c.a.b.length
            ? (c = null)
            : c.d < c.c
            ? (Wr(c), (c = null))
            : ((d = new Xr(
                c.j,
                c.a,
                c.c,
                c.a.b.length,
                c.d,
                c.f,
                c.i,
                c.g,
                c.b,
                d
              )),
              Wr(c),
              (c = d));
          if (c) {
            c.d = b;
            ++a.e;
            var e, f;
            for (e = new M(a.a.a); e.b < e.d.J(); )
              for (
                d = (y(e.b < e.d.J()), e.d.T((e.c = e.b++))), f = 0;
                f < d.d.length;
                f++
              )
                R(c.e, d.d[f]);
            P(a.b.a, c);
          }
        }
        function Pk() {
          this.b = new Vr();
          this.a = new jk();
          this.g = new Yr();
          this.d = 0;
        }
        n(122, 1, {}, Pk);
        _.c = !1;
        _.d = 0;
        _.e = 0;
        _.f = 0;
        t(122);
        n(215, 1, {});
        _.p = !1;
        t(215);
        function Kq(a, b, c, d) {
          this.a = new Q();
          this.b = c;
          P(this.a, a);
          this.c = b;
          !d && new Yi();
        }
        n(57, 215, {}, Kq);
        _.Eb = function(a) {
          if (a) return "";
          a = $doc.createElement("div");
          a.className = "embed-placeholder";
          a.setAttribute("data-type", this.c);
          a.setAttribute("data-id", this.b);
          return a.outerHTML;
        };
        t(57);
        function Zr() {
          Zr = k;
          $r = D(w(p, 1), h, 2, 4, ["data-srcset"]);
        }
        function zl(a) {
          var b, c, d, e, f, g, l, m;
          f = a.d.cloneNode(!0);
          c = "IMG" == f.tagName ? f : Im(f, "IMG");
          a.e.length && ((c.src = a.e), (a.e = c.src));
          0 < a.f && 0 < a.c && ((c.width = a.f), (c.height = a.c));
          Fm(c);
          m = f.getElementsByTagName("SOURCE");
          for (g = 0; g < m.length; g++)
            for (l = m[g], c = $r, d = 0, e = c.length; d < e; ++d)
              if (((b = c[d]), (b = A(l, b)), b.length)) {
                l.setAttribute("srcset", b);
                break;
              }
          Om(f);
          Pm(f);
          a.b = f;
        }
        function Fq(a, b, c, d) {
          Zr();
          this.d = a;
          this.f = b;
          this.c = c;
          this.e = d;
          null == this.e && (this.e = "");
        }
        n(32, 215, { 32: 1 }, Fq);
        _.Eb = function(a) {
          if (a) return "";
          !this.b && zl(this);
          return this.b.outerHTML;
        };
        _.c = 0;
        _.f = 0;
        var $r;
        t(32);
        function Eq(a, b, c, d, e) {
          Zr();
          Fq.call(this, a, b, c, d);
          this.a = e;
        }
        n(186, 32, { 32: 1 }, Eq);
        _.Eb = function(a) {
          var b;
          b = Bl(Cl(this.a));
          if (a) return b.innerText;
          a = $doc.createElement("FIGURE");
          var c = (!this.b && zl(this), this.b);
          a.appendChild(c);
          !this.a.innerHTML.length || a.appendChild(b);
          return a.outerHTML;
        };
        t(186);
        function Kr(a) {
          this.b = a;
        }
        n(68, 215, { 68: 1 }, Kr);
        _.Eb = function(a) {
          !this.a && (this.a = Bl(Cl(this.b)));
          if (a) {
            a = this.a;
            var b;
            $doc.body.appendChild(a);
            b = a.innerText;
            $doc.body.removeChild(a);
            a = b;
          } else a = this.a.outerHTML;
          return a;
        };
        t(68);
        function as() {
          as = k;
          bs = new Zi();
          R(bs, "UL");
          R(bs, "OL");
          R(bs, "LI");
          R(bs, "BLOCKQUOTE");
          R(bs, "PRE");
        }
        function Jr(a, b) {
          as();
          this.a = a;
          this.b = b;
        }
        function Cr(a) {
          as();
          return S(bs, a);
        }
        n(51, 215, { 51: 1 }, Jr);
        _.Eb = function(a) {
          return a
            ? ""
            : "\x3c" + (this.b == (xl(), yl) ? "" : "/") + this.a + "\x3e";
        };
        var bs;
        t(51);
        function xl() {
          xl = k;
          yl = new cs("START", 0);
          Ur = new cs("END", 1);
        }
        function cs(a, b) {
          C.call(this, a, b);
        }
        n(52, 9, { 3: 1, 11: 1, 9: 1, 52: 1 }, cs);
        var Ur,
          yl,
          ds = u(52, function() {
            xl();
            return D(w(ds, 1), ea, 52, 0, [yl, Ur]);
          });
        function sl(a) {
          return N(a.a, a.c);
        }
        function es() {
          $ ||
            (($ = new Zi()),
            R($, "B"),
            R($, "BIG"),
            R($, "I"),
            R($, "SMALL"),
            R($, "TT"),
            R($, "ABBR"),
            R($, "ACRONYM"),
            R($, "CITE"),
            R($, "CODE"),
            R($, "DFN"),
            R($, "EM"),
            R($, "KBD"),
            R($, "STRONG"),
            R($, "SAMP"),
            R($, "TIME"),
            R($, "VAR"),
            R($, "A"),
            R($, "BDO"),
            R($, "IMG"),
            R($, "MAP"),
            R($, "Q"),
            R($, "SPAN"),
            R($, "SUB"),
            R($, "SUP"),
            R($, "BUTTON"),
            R($, "INPUT"),
            R($, "LABEL"),
            R($, "SELECT"),
            R($, "TEXTAREA"));
          return $;
        }
        function rl(a) {
          return N(a.a, a.f);
        }
        function Xr(a, b, c, d, e, f, g, l, m, q) {
          this.o = a;
          this.a = b;
          this.k = c;
          this.b = d;
          this.c = e;
          this.f = f;
          this.i = g;
          this.g = l;
          this.e = new Zi();
          this.n = m;
          this.j = q;
        }
        n(35, 215, { 35: 1 }, Xr);
        _.Eb = function(a) {
          var b, c, d;
          if (S(this.e, "de.l3s.boilerpipe/TITLE")) return "";
          d = new th(this.a, this.k, this.b);
          var e;
          if (1 == d.b) b = fn(new dn((z(0, d.b), N(d.c, d.a))));
          else {
            c = (z(0, d.b), N(d.c, d.a));
            b = c.cloneNode(!1);
            for (d = new cn(d); d.a; )
              if (en(d, c)) {
                if (!d.a) break;
                for (;;) {
                  for (e = c.nextSibling; e && !e.contains(d.a); )
                    e = e.nextSibling;
                  if (e) {
                    b = uq(b, c.parentNode);
                    b = sq(b, e);
                    c = e;
                    break;
                  }
                  c = c.parentNode;
                  b = uq(b, c);
                }
              } else {
                for (c = c.firstChild; !c.contains(d.a); ) c = c.nextSibling;
                b = sq(b, c);
              }
            for (; b.parentNode; ) b = b.parentNode;
          }
          1 != b.nodeType &&
            ((c = B(sh(new th(this.a, this.k, this.b), 0)).cloneNode(!1)),
            c.appendChild(b),
            (b = c));
          "BODY" === b.tagName &&
            ((c = $doc.createElement("div")),
            (c.innerHTML = b.innerHTML || ""),
            (b = c));
          for (d = null; S(es(), b.tagName); ) {
            d ||
              ((d = Sk(new th(this.a, this.k, this.b))),
              1 != d.nodeType && (d = B(d)));
            d = B(d);
            if ("BODY" === d.tagName) break;
            c = d.cloneNode(!1);
            c.appendChild(b);
            b = c;
          }
          Em(b);
          Dm(b, "TARGET", D(w(p, 1), h, 2, 4, ["A"]));
          Dm(b, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          c = b;
          1 == c.nodeType &&
            c.hasAttribute("class") &&
            (-1 != A(c, "class").indexOf("caption")
              ? (c.className = "caption")
              : c.removeAttribute("class"));
          c = c.querySelectorAll("[class]");
          for (d = 0; d < c.length; d++)
            -1 != A(c[d], "class").indexOf("caption")
              ? (c[d].className = "caption")
              : c[d].removeAttribute("class");
          Dm(b, "COLOR", D(w(p, 1), h, 2, 4, ["FONT"]));
          Dm(b, "STYLE", D(w(p, 1), h, 2, 4, ["*"]));
          return a ? b.innerText : Cr(b.tagName) ? b.innerHTML : b.outerHTML;
        };
        _.b = 0;
        _.c = 0;
        _.d = 0;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = 0;
        _.k = 0;
        _.n = 0;
        var $ = null;
        t(35);
        function Wr(a) {
          a.j = "";
          a.i = 0;
          a.g = 0;
          a.c = a.a.b.length;
          a.b = -1;
        }
        function Yr() {
          this.a = new Q();
        }
        n(155, 1, {}, Yr);
        _.b = -1;
        _.c = 0;
        _.d = -1;
        _.e = !1;
        _.f = 0;
        _.g = 0;
        _.i = 0;
        _.j = "";
        t(155);
        function Lr(a) {
          this.a = a;
        }
        n(178, 215, {}, Lr);
        _.Eb = function(a) {
          var b, c;
          if (a) return "";
          c = this.a.cloneNode(!1);
          for (a = 0; a < this.a.childNodes.length; a++)
            (b = this.a.childNodes[a]),
              1 != b.nodeType ||
                ("SOURCE" !== b.tagName && "TRACK" !== b.tagName) ||
                ((b = b.cloneNode(!1)), c.appendChild(b));
          c.poster.length && (c.poster = c.poster);
          Om(c);
          Dm(c, "ID", D(w(p, 1), h, 2, 4, ["*"]));
          return c.outerHTML;
        };
        t(178);
        n(217, 1, {});
        _.Gb = function(a) {
          var b;
          b = 0;
          a && (b = this.Fb(a));
          2 <= Ok && W(Za(this.cZ) + ": " + b + "/" + this.Hb());
          return hf(b, this.Hb());
        };
        t(217);
        function tl() {
          this.b = 25;
          this.c = 75e3;
          this.a = 2e5;
        }
        n(156, 217, {}, tl);
        _.Fb = function(a) {
          a = ((a.offsetWidth || 0) | 0) * ((a.offsetHeight || 0) | 0);
          if (a < this.c) return 0;
          a = Wa(((a - this.c) / (this.a - this.c)) * this.b);
          return hf(a, this.b);
        };
        _.Hb = function() {
          return this.b;
        };
        _.a = 0;
        _.b = 0;
        _.c = 0;
        t(156);
        function ul() {
          this.a = 25;
        }
        n(157, 217, {}, ul);
        _.Fb = function(a) {
          var b, c;
          b = (a.offsetHeight || 0) | 0;
          if (0 >= b) return 0;
          c = (a.offsetWidth || 0) | 0;
          a = 0;
          b = c / b;
          1.4500000476837158 < b && 1.7999999523162842 > b
            ? (a = 1)
            : 1.2999999523162842 < b &&
              2.200000047683716 > b &&
              (a = 0.4000000059604645);
          return Wa(this.a * a);
        };
        _.Hb = function() {
          return this.a;
        };
        _.a = 0;
        t(157);
        function vl(a) {
          this.b = 25;
          this.a = a;
        }
        n(158, 217, {}, vl);
        _.Fb = function(a) {
          var b;
          if (!this.a) return 0;
          a = Lm(this.a).b.length - 1 - (Lm(Jm(this.a, a)).b.length - 1);
          b = 0;
          4 > a
            ? (b = 1)
            : 6 > a
            ? (b = 0.6000000238418579)
            : 8 > a && (b = 0.20000000298023224);
          return Wa(this.b * b);
        };
        _.Hb = function() {
          return this.b;
        };
        _.b = 0;
        t(158);
        function wl() {
          this.a = 15;
        }
        n(159, 217, {}, wl);
        _.Fb = function(a) {
          var b;
          a = Lm(a);
          for (b = new M(a); b.b < b.d.J(); )
            if (
              ((a = (y(b.b < b.d.J()), b.d.T((b.c = b.b++)))),
              1 == a.nodeType && "FIGURE" === a.tagName)
            )
              return this.a;
          return 0;
        };
        _.Hb = function() {
          return this.a;
        };
        _.a = 0;
        t(159);
        var br, fs;
        fs = kb("I");
        fs.k = "I";
        fs.f = 1;
        br = fs;
        t(198);
        t(200);
        t(null);
        t(203);
        hj = mb();
        _ = (function(a) {
          var b = this;
          if ("$wnd" == a) return $wnd;
          if ("" === a) return b;
          "$wnd." == a.substring(0, 5) && ((b = $wnd), (a = a.substring(5)));
          a = a.split(".");
          a[0] in b || !b.execScript || b.execScript("var " + a[0]);
          for (var c; a.length && (c = a.shift()); )
            b[c] ? (b = b[c]) : (b = b[c] = {});
          return b;
        })("org.chromium.distiller.DomDistiller");
        _.apply = function() {
          var a;
          return Kk(((a = {}), a));
        };
        _.applyWithOptions = Kk;
        function gs(a) {
          return function() {
            var b;
            a: {
              var c = arguments,
                d;
              0 != hc &&
                ((d = Date.now ? Date.now() : new Date().getTime()),
                2e3 < d - jc && ((jc = d), (ic = $wnd.setTimeout(gc, 10))));
              if (0 == hc++) {
                d = (kc(), lc);
                var e, f;
                if (d.a) {
                  f = null;
                  do (e = d.a), (d.a = null), (f = Bc(e, f));
                  while (d.a);
                  d.a = f;
                }
                d = !0;
              } else d = !1;
              try {
                b = a.apply(this, c);
                break a;
              } finally {
                if ((c = d))
                  if (((d = (kc(), lc)), d.b)) {
                    f = null;
                    do (e = d.b), (d.b = null), (f = Bc(e, f));
                    while (d.b);
                    d.b = f;
                  }
                --hc;
                c && -1 != ic && ($wnd.clearTimeout(ic), (ic = -1));
              }
              b = void 0;
            }
            return b;
          };
        }
        var gwtOnLoad = (gwtOnLoad = function(a, b, c) {
          function d() {
            for (var a = 0; a < e.length; a++) e[a]();
          }
          null == oa && (oa = []);
          var e = oa;
          $moduleName = b;
          $moduleBase = c;
          if (a)
            try {
              gs(d)();
            } catch (f) {
              a(b, f);
            }
          else gs(d)();
        });
        (function() {
          null == oa && (oa = []);
          for (var a = oa, b = 0; b < arguments.length; b++)
            a.push(arguments[b]);
        })(function() {
          $wnd.setTimeout(gs(Pe));
          var a, b, c;
          b = $doc.compatMode;
          a = D(w(p, 1), h, 2, 4, ["CSS1Compat"]);
          for (c = 0; c < a.length && a[c] !== b; c++);
        });
        var hs = [
          [
            ["locale", "default"],
            ["user.agent", "safari"]
          ]
        ];
        "object" === typeof window &&
          "object" === typeof window.$gwt &&
          (window.$gwt.permProps = hs);
        window.gwtOnLoad = gwtOnLoad;
        gwtOnLoad(undefined, "domdistiller", "", 0);
      })();
      // clang-format on
    }
    // TODO: distill the page excluding cyxy-trs-target while calling initialize
    $(".cyxy-trs-target").hide();
    initialize();

    // The OPTIONS placeholder will be replaced with the DomDistillerOptions at
    // runtime.
    var distiller = window.org.chromium.distiller.DomDistiller;
    var res = distiller.applyWithOptions(options);
    $(".cyxy-trs-target").show();

    if (stringify_output) {
      return JSON.stringify(res);
    }
    return res;
  } catch (e) {
    window.console.error("Error during distillation: " + e);
    if (e.stack != undefined) window.console.error(e.stack);
  }
  return undefined;
}

if (!document.currentScript) {
  applyDistiller();
} else {
  chrome.runtime.sendMessage({
    type: "distill-result",
    result: applyDistiller()
  });
}
