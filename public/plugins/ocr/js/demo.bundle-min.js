!(function () {
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var u = "function" == typeof require && require;
                    if (!s && u) return u(a, !0);
                    if (o) return o(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw ((l.code = "MODULE_NOT_FOUND"), l);
                }
                var c = (n[a] = { exports: {} });
                t[a][0].call(
                    c.exports,
                    function (e) {
                        return i(t[a][1][e] || e);
                    },
                    c,
                    c.exports,
                    e,
                    t,
                    n,
                    r
                );
            }
            return n[a].exports;
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i;
    };
})()(
    {
        1: [
            function (e, t, n) {
                !(function (e, n) {
                    "use strict";
                    "object" == typeof t && "object" == typeof t.exports
                        ? (t.exports = e.document
                              ? n(e, !0)
                              : function (e) {
                                    if (!e.document) throw new Error("jQuery requires a window with a document");
                                    return n(e);
                                })
                        : n(e);
                })("undefined" != typeof window ? window : this, function (e, t) {
                    "use strict";
                    var n = [],
                        r = e.document,
                        i = Object.getPrototypeOf,
                        o = n.slice,
                        a = n.concat,
                        s = n.push,
                        u = n.indexOf,
                        l = {},
                        c = l.toString,
                        f = l.hasOwnProperty,
                        p = f.toString,
                        d = p.call(Object),
                        h = {},
                        g = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType;
                        },
                        v = function (e) {
                            return null != e && e === e.window;
                        },
                        m = { type: !0, src: !0, nonce: !0, noModule: !0 };
                    function y(e, t, n) {
                        var i,
                            o,
                            a = (n = n || r).createElement("script");
                        if (((a.text = e), t)) for (i in m) (o = t[i] || (t.getAttribute && t.getAttribute(i))) && a.setAttribute(i, o);
                        n.head.appendChild(a).parentNode.removeChild(a);
                    }
                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
                    }
                    var b = function (e, t) {
                            return new b.fn.init(e, t);
                        },
                        w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    function T(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !g(e) && !v(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                    }
                    (b.fn = b.prototype = {
                        jquery: "3.4.1",
                        constructor: b,
                        length: 0,
                        toArray: function () {
                            return o.call(this);
                        },
                        get: function (e) {
                            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
                        },
                        pushStack: function (e) {
                            var t = b.merge(this.constructor(), e);
                            return (t.prevObject = this), t;
                        },
                        each: function (e) {
                            return b.each(this, e);
                        },
                        map: function (e) {
                            return this.pushStack(
                                b.map(this, function (t, n) {
                                    return e.call(t, n, t);
                                })
                            );
                        },
                        slice: function () {
                            return this.pushStack(o.apply(this, arguments));
                        },
                        first: function () {
                            return this.eq(0);
                        },
                        last: function () {
                            return this.eq(-1);
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                        },
                        end: function () {
                            return this.prevObject || this.constructor();
                        },
                        push: s,
                        sort: n.sort,
                        splice: n.splice,
                    }),
                        (b.extend = b.fn.extend = function () {
                            var e,
                                t,
                                n,
                                r,
                                i,
                                o,
                                a = arguments[0] || {},
                                s = 1,
                                u = arguments.length,
                                l = !1;
                            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                                if (null != (e = arguments[s]))
                                    for (t in e)
                                        (r = e[t]),
                                            "__proto__" !== t &&
                                                a !== r &&
                                                (l && r && (b.isPlainObject(r) || (i = Array.isArray(r)))
                                                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {}), (i = !1), (a[t] = b.extend(l, o, r)))
                                                    : void 0 !== r && (a[t] = r));
                            return a;
                        }),
                        b.extend({
                            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function (e) {
                                throw new Error(e);
                            },
                            noop: function () {},
                            isPlainObject: function (e) {
                                var t, n;
                                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
                            },
                            isEmptyObject: function (e) {
                                var t;
                                for (t in e) return !1;
                                return !0;
                            },
                            globalEval: function (e, t) {
                                y(e, { nonce: t && t.nonce });
                            },
                            each: function (e, t) {
                                var n,
                                    r = 0;
                                if (T(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                                return e;
                            },
                            trim: function (e) {
                                return null == e ? "" : (e + "").replace(w, "");
                            },
                            makeArray: function (e, t) {
                                var n = t || [];
                                return null != e && (T(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
                            },
                            inArray: function (e, t, n) {
                                return null == t ? -1 : u.call(t, e, n);
                            },
                            merge: function (e, t) {
                                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                                return (e.length = i), e;
                            },
                            grep: function (e, t, n) {
                                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                                return r;
                            },
                            map: function (e, t, n) {
                                var r,
                                    i,
                                    o = 0,
                                    s = [];
                                if (T(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                                return a.apply([], s);
                            },
                            guid: 1,
                            support: h,
                        }),
                        "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
                        b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                            l["[object " + t + "]"] = t.toLowerCase();
                        });
                    var C = (function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            g,
                            v,
                            m,
                            y,
                            x,
                            b = "sizzle" + 1 * new Date(),
                            w = e.document,
                            T = 0,
                            C = 0,
                            E = ue(),
                            k = ue(),
                            S = ue(),
                            N = ue(),
                            D = function (e, t) {
                                return e === t && (f = !0), 0;
                            },
                            j = {}.hasOwnProperty,
                            A = [],
                            L = A.pop,
                            q = A.push,
                            H = A.push,
                            O = A.slice,
                            R = function (e, t) {
                                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            M = "[\\x20\\t\\r\\n\\f]",
                            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                            $ = new RegExp(M + "+", "g"),
                            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                            _ = new RegExp("^" + M + "*," + M + "*"),
                            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                            U = new RegExp(M + "|>"),
                            X = new RegExp(F),
                            V = new RegExp("^" + I + "$"),
                            G = {
                                ID: new RegExp("^#(" + I + ")"),
                                CLASS: new RegExp("^\\.(" + I + ")"),
                                TAG: new RegExp("^(" + I + "|[*])"),
                                ATTR: new RegExp("^" + W),
                                PSEUDO: new RegExp("^" + F),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + P + ")$", "i"),
                                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
                            },
                            Y = /HTML$/i,
                            J = /^(?:input|select|textarea|button)$/i,
                            Q = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                            ne = function (e, t, n) {
                                var r = "0x" + t - 65536;
                                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            ie = function (e, t) {
                                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            oe = function () {
                                p();
                            },
                            ae = be(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            H.apply((A = O.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
                        } catch (e) {
                            H = {
                                apply: A.length
                                    ? function (e, t) {
                                          q.apply(e, O.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function se(e, t, r, i) {
                            var o,
                                s,
                                l,
                                c,
                                f,
                                h,
                                m,
                                y = t && t.ownerDocument,
                                T = t ? t.nodeType : 9;
                            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
                            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                                if (11 !== T && (f = Z.exec(e)))
                                    if ((o = f[1])) {
                                        if (9 === T) {
                                            if (!(l = t.getElementById(o))) return r;
                                            if (l.id === o) return r.push(l), r;
                                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                                    } else {
                                        if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r;
                                    }
                                if (n.qsa && !N[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
                                    if (((m = e), (y = t), 1 === T && U.test(e))) {
                                        for ((c = t.getAttribute("id")) ? (c = c.replace(re, ie)) : t.setAttribute("id", (c = b)), s = (h = a(e)).length; s--; ) h[s] = "#" + c + " " + xe(h[s]);
                                        (m = h.join(",")), (y = (ee.test(e) && me(t.parentNode)) || t);
                                    }
                                    try {
                                        return H.apply(r, y.querySelectorAll(m)), r;
                                    } catch (t) {
                                        N(e, !0);
                                    } finally {
                                        c === b && t.removeAttribute("id");
                                    }
                                }
                            }
                            return u(e.replace(B, "$1"), t, r, i);
                        }
                        function ue() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                            };
                        }
                        function le(e) {
                            return (e[b] = !0), e;
                        }
                        function ce(e) {
                            var t = d.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function fe(e, t) {
                            for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function de(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function he(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function ve(e) {
                            return le(function (t) {
                                return (
                                    (t = +t),
                                    le(function (n, r) {
                                        for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                                    })
                                );
                            });
                        }
                        function me(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (o = se.isXML = function (e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !Y.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (p = se.setDocument = function (e) {
                            var t,
                                i,
                                a = e ? e.ownerDocument || e : w;
                            return a !== d && 9 === a.nodeType && a.documentElement
                                ? ((h = (d = a).documentElement),
                                  (g = !o(d)),
                                  w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                                  (n.attributes = ce(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ce(function (e) {
                                      return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                                  (n.getById = ce(function (e) {
                                      return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                                  })),
                                  n.getById
                                      ? ((r.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (r.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((r.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (r.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n,
                                                    r,
                                                    i,
                                                    o = t.getElementById(e);
                                                if (o) {
                                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                                }
                                                return [];
                                            }
                                        })),
                                  (r.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                r = [],
                                                i = 0,
                                                o = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                                return r;
                                            }
                                            return o;
                                        }),
                                  (r.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                  (m = []),
                                  (v = []),
                                  (n.qsa = K.test(d.querySelectorAll)) &&
                                      (ce(function (e) {
                                          (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"),
                                              e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                                              e.querySelectorAll(":checked").length || v.push(":checked"),
                                              e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
                                      }),
                                      ce(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = d.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                              (h.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              v.push(",.*:");
                                      })),
                                  (n.matchesSelector = K.test((y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                      ce(function (e) {
                                          (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), m.push("!=", F);
                                      }),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (t = K.test(h.compareDocumentPosition)),
                                  (x =
                                      t || K.test(h.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    r = t && t.parentNode;
                                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (D = t
                                      ? function (e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                r ||
                                                (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                                    ? e === d || (e.ownerDocument === w && x(w, e))
                                                        ? -1
                                                        : t === d || (t.ownerDocument === w && x(w, t))
                                                        ? 1
                                                        : c
                                                        ? R(c, e) - R(c, t)
                                                        : 0
                                                    : 4 & r
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var n,
                                                r = 0,
                                                i = e.parentNode,
                                                o = t.parentNode,
                                                a = [e],
                                                s = [t];
                                            if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? R(c, e) - R(c, t) : 0;
                                            if (i === o) return pe(e, t);
                                            for (n = e; (n = n.parentNode); ) a.unshift(n);
                                            for (n = t; (n = n.parentNode); ) s.unshift(n);
                                            for (; a[r] === s[r]; ) r++;
                                            return r ? pe(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                                        }),
                                  d)
                                : d;
                        }),
                        (se.matches = function (e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function (e, t) {
                            if (((e.ownerDocument || e) !== d && p(e), n.matchesSelector && g && !N[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t))))
                                try {
                                    var r = y.call(e, t);
                                    if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                } catch (e) {
                                    N(t, !0);
                                }
                            return se(t, d, null, [e]).length > 0;
                        }),
                        (se.contains = function (e, t) {
                            return (e.ownerDocument || e) !== d && p(e), x(e, t);
                        }),
                        (se.attr = function (e, t) {
                            (e.ownerDocument || e) !== d && p(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                        }),
                        (se.escape = function (e) {
                            return (e + "").replace(re, ie);
                        }),
                        (se.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (se.uniqueSort = function (e) {
                            var t,
                                r = [],
                                i = 0,
                                o = 0;
                            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                                for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                                for (; i--; ) e.splice(r[i], 1);
                            }
                            return (c = null), e;
                        }),
                        (i = se.getText = function (e) {
                            var t,
                                n = "",
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                                } else if (3 === o || 4 === o) return e.nodeValue;
                            } else for (; (t = e[r++]); ) n += i(t);
                            return n;
                        }),
                        ((r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return G.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = E[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                            E(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (r) {
                                        var i = se.attr(r, e);
                                        return null == i
                                            ? "!=" === t
                                            : !t ||
                                                  ((i += ""),
                                                  "=" === t
                                                      ? i === n
                                                      : "!=" === t
                                                      ? i !== n
                                                      : "^=" === t
                                                      ? n && 0 === i.indexOf(n)
                                                      : "*=" === t
                                                      ? n && i.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && i.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, u) {
                                              var l,
                                                  c,
                                                  f,
                                                  p,
                                                  d,
                                                  h,
                                                  g = o !== a ? "nextSibling" : "previousSibling",
                                                  v = t.parentNode,
                                                  m = s && t.nodeName.toLowerCase(),
                                                  y = !u && !s,
                                                  x = !1;
                                              if (v) {
                                                  if (o) {
                                                      for (; g; ) {
                                                          for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                          h = g = "only" === e && !h && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((h = [a ? v.firstChild : v.lastChild]), a && y)) {
                                                      for (
                                                          x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d];
                                                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                                                      )
                                                          if (1 === p.nodeType && ++x && p === t) {
                                                              c[e] = [T, d, x];
                                                              break;
                                                          }
                                                  } else if ((y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                                      for (
                                                          ;
                                                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                                                          ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));

                                                      );
                                                  return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return i[b]
                                        ? i(t)
                                        : i.length > 1
                                        ? ((n = [e, e, "", t]),
                                          r.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? le(function (e, n) {
                                                    for (var r, o = i(e, t), a = o.length; a--; ) e[(r = R(e, o[a]))] = !(n[r] = o[a]);
                                                })
                                              : function (e) {
                                                    return i(e, 0, n);
                                                })
                                        : i;
                                },
                            },
                            pseudos: {
                                not: le(function (e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace(B, "$1"));
                                    return r[b]
                                        ? le(function (e, t, n, i) {
                                              for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                                          })
                                        : function (e, i, o) {
                                              return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: le(function (e) {
                                    return function (t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: le(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || i(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: le(function (e) {
                                    return (
                                        V.test(e || "") || se.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === h;
                                },
                                focus: function (e) {
                                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !r.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return Q.test(e.nodeName);
                                },
                                input: function (e) {
                                    return J.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: ve(function () {
                                    return [0];
                                }),
                                last: ve(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: ve(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: ve(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: ve(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: ve(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r);
                                    return e;
                                }),
                                gt: ve(function (e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = r.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            r.pseudos[t] = de(t);
                        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
                        function ye() {}
                        function xe(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r;
                        }
                        function be(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = C++;
                            return t.first
                                ? function (t, n, i) {
                                      for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
                                      return !1;
                                  }
                                : function (t, n, u) {
                                      var l,
                                          c,
                                          f,
                                          p = [T, s];
                                      if (u) {
                                          for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                                      } else
                                          for (; (t = t[r]); )
                                              if (1 === t.nodeType || a)
                                                  if (((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                                  else {
                                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function we(e) {
                            return e.length > 1
                                ? function (t, n, r) {
                                      for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function Te(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
                            return a;
                        }
                        function Ce(e, t, n, r, i, o) {
                            return (
                                r && !r[b] && (r = Ce(r)),
                                i && !i[b] && (i = Ce(i, o)),
                                le(function (o, a, s, u) {
                                    var l,
                                        c,
                                        f,
                                        p = [],
                                        d = [],
                                        h = a.length,
                                        g =
                                            o ||
                                            (function (e, t, n) {
                                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                                return n;
                                            })(t || "*", s.nodeType ? [s] : s, []),
                                        v = !e || (!o && t) ? g : Te(g, p, e, s, u),
                                        m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                                    if ((n && n(v, m, s, u), r)) for (l = Te(m, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                                    if (o) {
                                        if (i || e) {
                                            if (i) {
                                                for (l = [], c = m.length; c--; ) (f = m[c]) && l.push((v[c] = f));
                                                i(null, (m = []), l, u);
                                            }
                                            for (c = m.length; c--; ) (f = m[c]) && (l = i ? R(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                                        }
                                    } else (m = Te(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, u) : H.apply(a, m);
                                })
                            );
                        }
                        function Ee(e) {
                            for (
                                var t,
                                    n,
                                    i,
                                    o = e.length,
                                    a = r.relative[e[0].type],
                                    s = a || r.relative[" "],
                                    u = a ? 1 : 0,
                                    c = be(
                                        function (e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = be(
                                        function (e) {
                                            return R(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    p = [
                                        function (e, n, r) {
                                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                            return (t = null), i;
                                        },
                                    ];
                                u < o;
                                u++
                            )
                                if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                                else {
                                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                        return Ce(
                                            u > 1 && we(p),
                                            u > 1 && xe(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"),
                                            n,
                                            u < i && Ee(e.slice(u, i)),
                                            i < o && Ee((e = e.slice(i))),
                                            i < o && xe(e)
                                        );
                                    }
                                    p.push(n);
                                }
                            return we(p);
                        }
                        return (
                            (ye.prototype = r.filters = r.pseudos),
                            (r.setFilters = new ye()),
                            (a = se.tokenize = function (e, t) {
                                var n,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c = k[e + " "];
                                if (c) return t ? 0 : c.slice(0);
                                for (s = e, u = [], l = r.preFilter; s; ) {
                                    for (a in ((n && !(i = _.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                                    (n = !1),
                                    (i = z.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length))),
                                    r.filter))
                                        !(i = G[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? s.length : s ? se.error(e) : k(e, u).slice(0);
                            }),
                            (s = se.compile = function (e, t) {
                                var n,
                                    i = [],
                                    o = [],
                                    s = S[e + " "];
                                if (!s) {
                                    for (t || (t = a(e)), n = t.length; n--; ) (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                                    (s = S(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                i = e.length > 0,
                                                o = function (o, a, s, u, c) {
                                                    var f,
                                                        h,
                                                        v,
                                                        m = 0,
                                                        y = "0",
                                                        x = o && [],
                                                        b = [],
                                                        w = l,
                                                        C = o || (i && r.find.TAG("*", c)),
                                                        E = (T += null == w ? 1 : Math.random() || 0.1),
                                                        k = C.length;
                                                    for (c && (l = a === d || a || c); y !== k && null != (f = C[y]); y++) {
                                                        if (i && f) {
                                                            for (h = 0, a || f.ownerDocument === d || (p(f), (s = !g)); (v = e[h++]); )
                                                                if (v(f, a || d, s)) {
                                                                    u.push(f);
                                                                    break;
                                                                }
                                                            c && (T = E);
                                                        }
                                                        n && ((f = !v && f) && m--, o && x.push(f));
                                                    }
                                                    if (((m += y), n && y !== m)) {
                                                        for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                                                        if (o) {
                                                            if (m > 0) for (; y--; ) x[y] || b[y] || (b[y] = L.call(u));
                                                            b = Te(b);
                                                        }
                                                        H.apply(u, b), c && !o && b.length > 0 && m + t.length > 1 && se.uniqueSort(u);
                                                    }
                                                    return c && ((T = E), (l = w)), x;
                                                };
                                            return n ? le(o) : o;
                                        })(o, i)
                                    )).selector = e;
                                }
                                return s;
                            }),
                            (u = se.select = function (e, t, n, i) {
                                var o,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p = "function" == typeof e && e,
                                    d = !i && a((e = p.selector || e));
                                if (((n = n || []), 1 === d.length)) {
                                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                                    }
                                    for (o = G.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
                                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), (ee.test(u[0].type) && me(t.parentNode)) || t))) {
                                            if ((u.splice(o, 1), !(e = i.length && xe(u)))) return H.apply(n, i), n;
                                            break;
                                        }
                                }
                                return (p || s(e, d))(i, t, !g, n, !t || (ee.test(e) && me(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = b.split("").sort(D).join("") === b),
                            (n.detectDuplicates = !!f),
                            p(),
                            (n.sortDetached = ce(function (e) {
                                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
                            })),
                            ce(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                fe("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ce(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                fe("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ce(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                fe(P, function (e, t, n) {
                                    var r;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                                }),
                            se
                        );
                    })(e);
                    (b.find = C), (b.expr = C.selectors), (b.expr[":"] = b.expr.pseudos), (b.uniqueSort = b.unique = C.uniqueSort), (b.text = C.getText), (b.isXMLDoc = C.isXML), (b.contains = C.contains), (b.escapeSelector = C.escape);
                    var E = function (e, t, n) {
                            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                                if (1 === e.nodeType) {
                                    if (i && b(e).is(n)) break;
                                    r.push(e);
                                }
                            return r;
                        },
                        k = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n;
                        },
                        S = b.expr.match.needsContext;
                    function N(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function j(e, t, n) {
                        return g(t)
                            ? b.grep(e, function (e, r) {
                                  return !!t.call(e, r, e) !== n;
                              })
                            : t.nodeType
                            ? b.grep(e, function (e) {
                                  return (e === t) !== n;
                              })
                            : "string" != typeof t
                            ? b.grep(e, function (e) {
                                  return u.call(t, e) > -1 !== n;
                              })
                            : b.filter(t, e, n);
                    }
                    (b.filter = function (e, t, n) {
                        var r = t[0];
                        return (
                            n && (e = ":not(" + e + ")"),
                            1 === t.length && 1 === r.nodeType
                                ? b.find.matchesSelector(r, e)
                                    ? [r]
                                    : []
                                : b.find.matches(
                                      e,
                                      b.grep(t, function (e) {
                                          return 1 === e.nodeType;
                                      })
                                  )
                        );
                    }),
                        b.fn.extend({
                            find: function (e) {
                                var t,
                                    n,
                                    r = this.length,
                                    i = this;
                                if ("string" != typeof e)
                                    return this.pushStack(
                                        b(e).filter(function () {
                                            for (t = 0; t < r; t++) if (b.contains(i[t], this)) return !0;
                                        })
                                    );
                                for (n = this.pushStack([]), t = 0; t < r; t++) b.find(e, i[t], n);
                                return r > 1 ? b.uniqueSort(n) : n;
                            },
                            filter: function (e) {
                                return this.pushStack(j(this, e || [], !1));
                            },
                            not: function (e) {
                                return this.pushStack(j(this, e || [], !0));
                            },
                            is: function (e) {
                                return !!j(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length;
                            },
                        });
                    var A,
                        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    ((b.fn.init = function (e, t, n) {
                        var i, o;
                        if (!e) return this;
                        if (((n = n || A), "string" == typeof e)) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (((t = t instanceof b ? t[0] : t), b.merge(this, b.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), D.test(i[1]) && b.isPlainObject(t)))
                                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this;
                            }
                            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
                        }
                        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(b)) : b.makeArray(e, this);
                    }).prototype = b.fn),
                        (A = b(r));
                    var q = /^(?:parents|prev(?:Until|All))/,
                        H = { children: !0, contents: !0, next: !0, prev: !0 };
                    function O(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e;
                    }
                    b.fn.extend({
                        has: function (e) {
                            var t = b(e, this),
                                n = t.length;
                            return this.filter(function () {
                                for (var e = 0; e < n; e++) if (b.contains(this, t[e])) return !0;
                            });
                        },
                        closest: function (e, t) {
                            var n,
                                r = 0,
                                i = this.length,
                                o = [],
                                a = "string" != typeof e && b(e);
                            if (!S.test(e))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break;
                                        }
                            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o);
                        },
                        index: function (e) {
                            return e ? ("string" == typeof e ? u.call(b(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        },
                        add: function (e, t) {
                            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))));
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                        },
                    }),
                        b.each(
                            {
                                parent: function (e) {
                                    var t = e.parentNode;
                                    return t && 11 !== t.nodeType ? t : null;
                                },
                                parents: function (e) {
                                    return E(e, "parentNode");
                                },
                                parentsUntil: function (e, t, n) {
                                    return E(e, "parentNode", n);
                                },
                                next: function (e) {
                                    return O(e, "nextSibling");
                                },
                                prev: function (e) {
                                    return O(e, "previousSibling");
                                },
                                nextAll: function (e) {
                                    return E(e, "nextSibling");
                                },
                                prevAll: function (e) {
                                    return E(e, "previousSibling");
                                },
                                nextUntil: function (e, t, n) {
                                    return E(e, "nextSibling", n);
                                },
                                prevUntil: function (e, t, n) {
                                    return E(e, "previousSibling", n);
                                },
                                siblings: function (e) {
                                    return k((e.parentNode || {}).firstChild, e);
                                },
                                children: function (e) {
                                    return k(e.firstChild);
                                },
                                contents: function (e) {
                                    return void 0 !== e.contentDocument ? e.contentDocument : (N(e, "template") && (e = e.content || e), b.merge([], e.childNodes));
                                },
                            },
                            function (e, t) {
                                b.fn[e] = function (n, r) {
                                    var i = b.map(this, t, n);
                                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = b.filter(r, i)), this.length > 1 && (H[e] || b.uniqueSort(i), q.test(e) && i.reverse()), this.pushStack(i);
                                };
                            }
                        );
                    var R = /[^\x20\t\r\n\f]+/g;
                    function P(e) {
                        return e;
                    }
                    function M(e) {
                        throw e;
                    }
                    function I(e, t, n, r) {
                        var i;
                        try {
                            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
                        } catch (e) {
                            n.apply(void 0, [e]);
                        }
                    }
                    (b.Callbacks = function (e) {
                        e =
                            "string" == typeof e
                                ? (function (e) {
                                      var t = {};
                                      return (
                                          b.each(e.match(R) || [], function (e, n) {
                                              t[n] = !0;
                                          }),
                                          t
                                      );
                                  })(e)
                                : b.extend({}, e);
                        var t,
                            n,
                            r,
                            i,
                            o = [],
                            a = [],
                            s = -1,
                            u = function () {
                                for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
                            },
                            l = {
                                add: function () {
                                    return (
                                        o &&
                                            (n && !t && ((s = o.length - 1), a.push(n)),
                                            (function t(n) {
                                                b.each(n, function (n, r) {
                                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                                });
                                            })(arguments),
                                            n && !t && u()),
                                        this
                                    );
                                },
                                remove: function () {
                                    return (
                                        b.each(arguments, function (e, t) {
                                            for (var n; (n = b.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--;
                                        }),
                                        this
                                    );
                                },
                                has: function (e) {
                                    return e ? b.inArray(e, o) > -1 : o.length > 0;
                                },
                                empty: function () {
                                    return o && (o = []), this;
                                },
                                disable: function () {
                                    return (i = a = []), (o = n = ""), this;
                                },
                                disabled: function () {
                                    return !o;
                                },
                                lock: function () {
                                    return (i = a = []), n || t || (o = n = ""), this;
                                },
                                locked: function () {
                                    return !!i;
                                },
                                fireWith: function (e, n) {
                                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                                },
                                fire: function () {
                                    return l.fireWith(this, arguments), this;
                                },
                                fired: function () {
                                    return !!r;
                                },
                            };
                        return l;
                    }),
                        b.extend({
                            Deferred: function (t) {
                                var n = [
                                        ["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2],
                                        ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"],
                                        ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"],
                                    ],
                                    r = "pending",
                                    i = {
                                        state: function () {
                                            return r;
                                        },
                                        always: function () {
                                            return o.done(arguments).fail(arguments), this;
                                        },
                                        catch: function (e) {
                                            return i.then(null, e);
                                        },
                                        pipe: function () {
                                            var e = arguments;
                                            return b
                                                .Deferred(function (t) {
                                                    b.each(n, function (n, r) {
                                                        var i = g(e[r[4]]) && e[r[4]];
                                                        o[r[1]](function () {
                                                            var e = i && i.apply(this, arguments);
                                                            e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                                        });
                                                    }),
                                                        (e = null);
                                                })
                                                .promise();
                                        },
                                        then: function (t, r, i) {
                                            var o = 0;
                                            function a(t, n, r, i) {
                                                return function () {
                                                    var s = this,
                                                        u = arguments,
                                                        l = function () {
                                                            var e, l;
                                                            if (!(t < o)) {
                                                                if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                                (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                                    g(l)
                                                                        ? i
                                                                            ? l.call(e, a(o, n, P, i), a(o, n, M, i))
                                                                            : (o++, l.call(e, a(o, n, P, i), a(o, n, M, i), a(o, n, P, n.notifyWith)))
                                                                        : (r !== P && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                                            }
                                                        },
                                                        c = i
                                                            ? l
                                                            : function () {
                                                                  try {
                                                                      l();
                                                                  } catch (e) {
                                                                      b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== M && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                                                  }
                                                              };
                                                    t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()), e.setTimeout(c));
                                                };
                                            }
                                            return b
                                                .Deferred(function (e) {
                                                    n[0][3].add(a(0, e, g(i) ? i : P, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : P)), n[2][3].add(a(0, e, g(r) ? r : M));
                                                })
                                                .promise();
                                        },
                                        promise: function (e) {
                                            return null != e ? b.extend(e, i) : i;
                                        },
                                    },
                                    o = {};
                                return (
                                    b.each(n, function (e, t) {
                                        var a = t[2],
                                            s = t[5];
                                        (i[t[1]] = a.add),
                                            s &&
                                                a.add(
                                                    function () {
                                                        r = s;
                                                    },
                                                    n[3 - e][2].disable,
                                                    n[3 - e][3].disable,
                                                    n[0][2].lock,
                                                    n[0][3].lock
                                                ),
                                            a.add(t[3].fire),
                                            (o[t[0]] = function () {
                                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                                            }),
                                            (o[t[0] + "With"] = a.fireWith);
                                    }),
                                    i.promise(o),
                                    t && t.call(o, o),
                                    o
                                );
                            },
                            when: function (e) {
                                var t = arguments.length,
                                    n = t,
                                    r = Array(n),
                                    i = o.call(arguments),
                                    a = b.Deferred(),
                                    s = function (e) {
                                        return function (n) {
                                            (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                                        };
                                    };
                                if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
                                for (; n--; ) I(i[n], s(n), a.reject);
                                return a.promise();
                            },
                        });
                    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    (b.Deferred.exceptionHook = function (t, n) {
                        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
                    }),
                        (b.readyException = function (t) {
                            e.setTimeout(function () {
                                throw t;
                            });
                        });
                    var F = b.Deferred();
                    function $() {
                        r.removeEventListener("DOMContentLoaded", $), e.removeEventListener("load", $), b.ready();
                    }
                    (b.fn.ready = function (e) {
                        return (
                            F.then(e).catch(function (e) {
                                b.readyException(e);
                            }),
                            this
                        );
                    }),
                        b.extend({
                            isReady: !1,
                            readyWait: 1,
                            ready: function (e) {
                                (!0 === e ? --b.readyWait : b.isReady) || ((b.isReady = !0), (!0 !== e && --b.readyWait > 0) || F.resolveWith(r, [b]));
                            },
                        }),
                        (b.ready.then = F.then),
                        "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(b.ready) : (r.addEventListener("DOMContentLoaded", $), e.addEventListener("load", $));
                    var B = function (e, t, n, r, i, o, a) {
                            var s = 0,
                                u = e.length,
                                l = null == n;
                            if ("object" === x(n)) for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
                            else if (
                                void 0 !== r &&
                                ((i = !0),
                                g(r) || (a = !0),
                                l &&
                                    (a
                                        ? (t.call(e, r), (t = null))
                                        : ((l = t),
                                          (t = function (e, t, n) {
                                              return l.call(b(e), n);
                                          }))),
                                t)
                            )
                                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
                        },
                        _ = /^-ms-/,
                        z = /-([a-z])/g;
                    function U(e, t) {
                        return t.toUpperCase();
                    }
                    function X(e) {
                        return e.replace(_, "ms-").replace(z, U);
                    }
                    var V = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                    };
                    function G() {
                        this.expando = b.expando + G.uid++;
                    }
                    (G.uid = 1),
                        (G.prototype = {
                            cache: function (e) {
                                var t = e[this.expando];
                                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                            },
                            set: function (e, t, n) {
                                var r,
                                    i = this.cache(e);
                                if ("string" == typeof t) i[X(t)] = n;
                                else for (r in t) i[X(r)] = t[r];
                                return i;
                            },
                            get: function (e, t) {
                                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
                            },
                            access: function (e, t, n) {
                                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                            },
                            remove: function (e, t) {
                                var n,
                                    r = e[this.expando];
                                if (void 0 !== r) {
                                    if (void 0 !== t) {
                                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(R) || []).length;
                                        for (; n--; ) delete r[t[n]];
                                    }
                                    (void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                                }
                            },
                            hasData: function (e) {
                                var t = e[this.expando];
                                return void 0 !== t && !b.isEmptyObject(t);
                            },
                        });
                    var Y = new G(),
                        J = new G(),
                        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        K = /[A-Z]/g;
                    function Z(e, t, n) {
                        var r;
                        if (void 0 === n && 1 === e.nodeType)
                            if (((r = "data-" + t.replace(K, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                                try {
                                    n = (function (e) {
                                        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e));
                                    })(n);
                                } catch (e) {}
                                J.set(e, t, n);
                            } else n = void 0;
                        return n;
                    }
                    b.extend({
                        hasData: function (e) {
                            return J.hasData(e) || Y.hasData(e);
                        },
                        data: function (e, t, n) {
                            return J.access(e, t, n);
                        },
                        removeData: function (e, t) {
                            J.remove(e, t);
                        },
                        _data: function (e, t, n) {
                            return Y.access(e, t, n);
                        },
                        _removeData: function (e, t) {
                            Y.remove(e, t);
                        },
                    }),
                        b.fn.extend({
                            data: function (e, t) {
                                var n,
                                    r,
                                    i,
                                    o = this[0],
                                    a = o && o.attributes;
                                if (void 0 === e) {
                                    if (this.length && ((i = J.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                                        for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = X(r.slice(5))), Z(o, r, i[r]));
                                        Y.set(o, "hasDataAttrs", !0);
                                    }
                                    return i;
                                }
                                return "object" == typeof e
                                    ? this.each(function () {
                                          J.set(this, e);
                                      })
                                    : B(
                                          this,
                                          function (t) {
                                              var n;
                                              if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                                              this.each(function () {
                                                  J.set(this, e, t);
                                              });
                                          },
                                          null,
                                          t,
                                          arguments.length > 1,
                                          null,
                                          !0
                                      );
                            },
                            removeData: function (e) {
                                return this.each(function () {
                                    J.remove(this, e);
                                });
                            },
                        }),
                        b.extend({
                            queue: function (e, t, n) {
                                var r;
                                if (e) return (t = (t || "fx") + "queue"), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, b.makeArray(n))) : r.push(n)), r || [];
                            },
                            dequeue: function (e, t) {
                                t = t || "fx";
                                var n = b.queue(e, t),
                                    r = n.length,
                                    i = n.shift(),
                                    o = b._queueHooks(e, t);
                                "inprogress" === i && ((i = n.shift()), r--),
                                    i &&
                                        ("fx" === t && n.unshift("inprogress"),
                                        delete o.stop,
                                        i.call(
                                            e,
                                            function () {
                                                b.dequeue(e, t);
                                            },
                                            o
                                        )),
                                    !r && o && o.empty.fire();
                            },
                            _queueHooks: function (e, t) {
                                var n = t + "queueHooks";
                                return (
                                    Y.get(e, n) ||
                                    Y.access(e, n, {
                                        empty: b.Callbacks("once memory").add(function () {
                                            Y.remove(e, [t + "queue", n]);
                                        }),
                                    })
                                );
                            },
                        }),
                        b.fn.extend({
                            queue: function (e, t) {
                                var n = 2;
                                return (
                                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                                    arguments.length < n
                                        ? b.queue(this[0], e)
                                        : void 0 === t
                                        ? this
                                        : this.each(function () {
                                              var n = b.queue(this, e, t);
                                              b._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e);
                                          })
                                );
                            },
                            dequeue: function (e) {
                                return this.each(function () {
                                    b.dequeue(this, e);
                                });
                            },
                            clearQueue: function (e) {
                                return this.queue(e || "fx", []);
                            },
                            promise: function (e, t) {
                                var n,
                                    r = 1,
                                    i = b.Deferred(),
                                    o = this,
                                    a = this.length,
                                    s = function () {
                                        --r || i.resolveWith(o, [o]);
                                    };
                                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                                return s(), i.promise(t);
                            },
                        });
                    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                        ne = ["Top", "Right", "Bottom", "Left"],
                        re = r.documentElement,
                        ie = function (e) {
                            return b.contains(e.ownerDocument, e);
                        },
                        oe = { composed: !0 };
                    re.getRootNode &&
                        (ie = function (e) {
                            return b.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
                        });
                    var ae = function (e, t) {
                            return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === b.css(e, "display"));
                        },
                        se = function (e, t, n, r) {
                            var i,
                                o,
                                a = {};
                            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
                            for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
                            return i;
                        };
                    function ue(e, t, n, r) {
                        var i,
                            o,
                            a = 20,
                            s = r
                                ? function () {
                                      return r.cur();
                                  }
                                : function () {
                                      return b.css(e, t, "");
                                  },
                            u = s(),
                            l = (n && n[3]) || (b.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (b.cssNumber[t] || ("px" !== l && +u)) && te.exec(b.css(e, t));
                        if (c && c[3] !== l) {
                            for (u /= 2, l = l || c[3], c = +u || 1; a--; ) b.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
                            (c *= 2), b.style(e, t, c + l), (n = n || []);
                        }
                        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
                    }
                    var le = {};
                    function ce(e) {
                        var t,
                            n = e.ownerDocument,
                            r = e.nodeName,
                            i = le[r];
                        return i || ((t = n.body.appendChild(n.createElement(r))), (i = b.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
                    }
                    function fe(e, t) {
                        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
                            (r = e[o]).style &&
                                ((n = r.style.display),
                                t ? ("none" === n && ((i[o] = Y.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), Y.set(r, "display", n)));
                        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                        return e;
                    }
                    b.fn.extend({
                        show: function () {
                            return fe(this, !0);
                        },
                        hide: function () {
                            return fe(this);
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e
                                ? e
                                    ? this.show()
                                    : this.hide()
                                : this.each(function () {
                                      ae(this) ? b(this).show() : b(this).hide();
                                  });
                        },
                    });
                    var pe = /^(?:checkbox|radio)$/i,
                        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        he = /^$|^module$|\/(?:java|ecma)script/i,
                        ge = {
                            option: [1, "<select multiple='multiple'>", "</select>"],
                            thead: [1, "<table>", "</table>"],
                            col: [2, "<table><colgroup>", "</colgroup></table>"],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            _default: [0, "", ""],
                        };
                    function ve(e, t) {
                        var n;
                        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? b.merge([e], n) : n;
                    }
                    function me(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
                    }
                    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
                    var ye,
                        xe,
                        be = /<|&#?\w+;/;
                    function we(e, t, n, r, i) {
                        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                            if ((o = e[d]) || 0 === o)
                                if ("object" === x(o)) b.merge(p, o.nodeType ? [o] : o);
                                else if (be.test(o)) {
                                    for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2], c = u[0]; c--; )
                                        a = a.lastChild;
                                    b.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                                } else p.push(t.createTextNode(o));
                        for (f.textContent = "", d = 0; (o = p[d++]); )
                            if (r && b.inArray(o, r) > -1) i && i.push(o);
                            else if (((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && me(a), n)) for (c = 0; (o = a[c++]); ) he.test(o.type || "") && n.push(o);
                        return f;
                    }
                    (ye = r.createDocumentFragment().appendChild(r.createElement("div"))),
                        (xe = r.createElement("input")).setAttribute("type", "radio"),
                        xe.setAttribute("checked", "checked"),
                        xe.setAttribute("name", "t"),
                        ye.appendChild(xe),
                        (h.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
                        (ye.innerHTML = "<textarea>x</textarea>"),
                        (h.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
                    var Te = /^key/,
                        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        Ee = /^([^.]*)(?:\.(.+)|)/;
                    function ke() {
                        return !0;
                    }
                    function Se() {
                        return !1;
                    }
                    function Ne(e, t) {
                        return (
                            (e ===
                                (function () {
                                    try {
                                        return r.activeElement;
                                    } catch (e) {}
                                })()) ==
                            ("focus" === t)
                        );
                    }
                    function De(e, t, n, r, i, o) {
                        var a, s;
                        if ("object" == typeof t) {
                            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) De(e, s, n, r, t[s], o);
                            return e;
                        }
                        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Se;
                        else if (!i) return e;
                        return (
                            1 === o &&
                                ((a = i),
                                ((i = function (e) {
                                    return b().off(e), a.apply(this, arguments);
                                }).guid = a.guid || (a.guid = b.guid++))),
                            e.each(function () {
                                b.event.add(this, t, i, r, n);
                            })
                        );
                    }
                    function je(e, t, n) {
                        n
                            ? (Y.set(e, t, !1),
                              b.event.add(e, t, {
                                  namespace: !1,
                                  handler: function (e) {
                                      var r,
                                          i,
                                          a = Y.get(this, t);
                                      if (1 & e.isTrigger && this[t]) {
                                          if (a.length) (b.event.special[t] || {}).delegateType && e.stopPropagation();
                                          else if (((a = o.call(arguments)), Y.set(this, t, a), (r = n(this, t)), this[t](), a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : (i = {}), a !== i))
                                              return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                                      } else a.length && (Y.set(this, t, { value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                                  },
                              }))
                            : void 0 === Y.get(e, t) && b.event.add(e, t, ke);
                    }
                    (b.event = {
                        global: {},
                        add: function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u,
                                l,
                                c,
                                f,
                                p,
                                d,
                                h,
                                g,
                                v = Y.get(e);
                            if (v)
                                for (
                                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                                        i && b.find.matchesSelector(re, i),
                                        n.guid || (n.guid = b.guid++),
                                        (u = v.events) || (u = v.events = {}),
                                        (a = v.handle) ||
                                            (a = v.handle = function (t) {
                                                return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0;
                                            }),
                                        l = (t = (t || "").match(R) || [""]).length;
                                    l--;

                                )
                                    (d = g = (s = Ee.exec(t[l]) || [])[1]),
                                        (h = (s[2] || "").split(".").sort()),
                                        d &&
                                            ((f = b.event.special[d] || {}),
                                            (d = (i ? f.delegateType : f.bindType) || d),
                                            (f = b.event.special[d] || {}),
                                            (c = b.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && b.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                            (b.event.global[d] = !0));
                        },
                        remove: function (e, t, n, r, i) {
                            var o,
                                a,
                                s,
                                u,
                                l,
                                c,
                                f,
                                p,
                                d,
                                h,
                                g,
                                v = Y.hasData(e) && Y.get(e);
                            if (v && (u = v.events)) {
                                for (l = (t = (t || "").match(R) || [""]).length; l--; )
                                    if (((d = g = (s = Ee.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                                        for (f = b.event.special[d] || {}, p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                                            (c = p[o]),
                                                (!i && g !== c.origType) ||
                                                    (n && n.guid !== c.guid) ||
                                                    (s && !s.test(c.namespace)) ||
                                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || b.removeEvent(e, d, v.handle), delete u[d]);
                                    } else for (d in u) b.event.remove(e, d + t[l], n, r, !0);
                                b.isEmptyObject(u) && Y.remove(e, "handle events");
                            }
                        },
                        dispatch: function (e) {
                            var t,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s = b.event.fix(e),
                                u = new Array(arguments.length),
                                l = (Y.get(this, "events") || {})[s.type] || [],
                                c = b.event.special[s.type] || {};
                            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
                            if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                                for (a = b.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                                    for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                        (s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace)) ||
                                            ((s.handleObj = o),
                                            (s.data = o.data),
                                            void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, s), s.result;
                            }
                        },
                        handlers: function (e, t) {
                            var n,
                                r,
                                i,
                                o,
                                a,
                                s = [],
                                u = t.delegateCount,
                                l = e.target;
                            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                                for (; l !== this; l = l.parentNode || this)
                                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length), a[i] && o.push(r);
                                        o.length && s.push({ elem: l, handlers: o });
                                    }
                            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(b.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: g(t)
                                    ? function () {
                                          if (this.originalEvent) return t(this.originalEvent);
                                      }
                                    : function () {
                                          if (this.originalEvent) return this.originalEvent[e];
                                      },
                                set: function (t) {
                                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                                },
                            });
                        },
                        fix: function (e) {
                            return e[b.expando] ? e : new b.Event(e);
                        },
                        special: {
                            load: { noBubble: !0 },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return pe.test(t.type) && t.click && N(t, "input") && je(t, "click", ke), !1;
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return pe.test(t.type) && t.click && N(t, "input") && je(t, "click"), !0;
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return (pe.test(t.type) && t.click && N(t, "input") && Y.get(t, "click")) || N(t, "a");
                                },
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                                },
                            },
                        },
                    }),
                        (b.removeEvent = function (e, t, n) {
                            e.removeEventListener && e.removeEventListener(t, n);
                        }),
                        (b.Event = function (e, t) {
                            if (!(this instanceof b.Event)) return new b.Event(e, t);
                            e && e.type
                                ? ((this.originalEvent = e),
                                  (this.type = e.type),
                                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? ke : Se),
                                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                                  (this.currentTarget = e.currentTarget),
                                  (this.relatedTarget = e.relatedTarget))
                                : (this.type = e),
                                t && b.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                                (this[b.expando] = !0);
                        }),
                        (b.Event.prototype = {
                            constructor: b.Event,
                            isDefaultPrevented: Se,
                            isPropagationStopped: Se,
                            isImmediatePropagationStopped: Se,
                            isSimulated: !1,
                            preventDefault: function () {
                                var e = this.originalEvent;
                                (this.isDefaultPrevented = ke), e && !this.isSimulated && e.preventDefault();
                            },
                            stopPropagation: function () {
                                var e = this.originalEvent;
                                (this.isPropagationStopped = ke), e && !this.isSimulated && e.stopPropagation();
                            },
                            stopImmediatePropagation: function () {
                                var e = this.originalEvent;
                                (this.isImmediatePropagationStopped = ke), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                            },
                        }),
                        b.each(
                            {
                                altKey: !0,
                                bubbles: !0,
                                cancelable: !0,
                                changedTouches: !0,
                                ctrlKey: !0,
                                detail: !0,
                                eventPhase: !0,
                                metaKey: !0,
                                pageX: !0,
                                pageY: !0,
                                shiftKey: !0,
                                view: !0,
                                char: !0,
                                code: !0,
                                charCode: !0,
                                key: !0,
                                keyCode: !0,
                                button: !0,
                                buttons: !0,
                                clientX: !0,
                                clientY: !0,
                                offsetX: !0,
                                offsetY: !0,
                                pointerId: !0,
                                pointerType: !0,
                                screenX: !0,
                                screenY: !0,
                                targetTouches: !0,
                                toElement: !0,
                                touches: !0,
                                which: function (e) {
                                    var t = e.button;
                                    return null == e.which && Te.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ce.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                                },
                            },
                            b.event.addProp
                        ),
                        b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            b.event.special[e] = {
                                setup: function () {
                                    return je(this, e, Ne), !1;
                                },
                                trigger: function () {
                                    return je(this, e), !0;
                                },
                                delegateType: t,
                            };
                        }),
                        b.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                            b.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var n,
                                        r = e.relatedTarget,
                                        i = e.handleObj;
                                    return (r && (r === this || b.contains(this, r))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                                },
                            };
                        }),
                        b.fn.extend({
                            on: function (e, t, n, r) {
                                return De(this, e, t, n, r);
                            },
                            one: function (e, t, n, r) {
                                return De(this, e, t, n, r, 1);
                            },
                            off: function (e, t, n) {
                                var r, i;
                                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                                if ("object" == typeof e) {
                                    for (i in e) this.off(i, t, e[i]);
                                    return this;
                                }
                                return (
                                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                    !1 === n && (n = Se),
                                    this.each(function () {
                                        b.event.remove(this, e, n, t);
                                    })
                                );
                            },
                        });
                    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                        Le = /<script|<style|<link/i,
                        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Oe(e, t) {
                        return (N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0]) || e;
                    }
                    function Re(e) {
                        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                    }
                    function Pe(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                    }
                    function Me(e, t) {
                        var n, r, i, o, a, s, u, l;
                        if (1 === t.nodeType) {
                            if (Y.hasData(e) && ((o = Y.access(e)), (a = Y.set(t, o)), (l = o.events))) for (i in (delete a.handle, (a.events = {}), l)) for (n = 0, r = l[i].length; n < r; n++) b.event.add(t, i, l[i][n]);
                            J.hasData(e) && ((s = J.access(e)), (u = b.extend({}, s)), J.set(t, u));
                        }
                    }
                    function Ie(e, t, n, r) {
                        t = a.apply([], t);
                        var i,
                            o,
                            s,
                            u,
                            l,
                            c,
                            f = 0,
                            p = e.length,
                            d = p - 1,
                            v = t[0],
                            m = g(v);
                        if (m || (p > 1 && "string" == typeof v && !h.checkClone && qe.test(v)))
                            return e.each(function (i) {
                                var o = e.eq(i);
                                m && (t[0] = v.call(this, i, o.html())), Ie(o, t, n, r);
                            });
                        if (p && ((o = (i = we(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                            for (u = (s = b.map(ve(i, "script"), Re)).length; f < p; f++) (l = i), f !== d && ((l = b.clone(l, !0, !0)), u && b.merge(s, ve(l, "script"))), n.call(e[f], l, f);
                            if (u)
                                for (c = s[s.length - 1].ownerDocument, b.map(s, Pe), f = 0; f < u; f++)
                                    (l = s[f]),
                                        he.test(l.type || "") &&
                                            !Y.access(l, "globalEval") &&
                                            b.contains(c, l) &&
                                            (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : y(l.textContent.replace(He, ""), l, c));
                        }
                        return e;
                    }
                    function We(e, t, n) {
                        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || b.cleanData(ve(r)), r.parentNode && (n && ie(r) && me(ve(r, "script")), r.parentNode.removeChild(r));
                        return e;
                    }
                    b.extend({
                        htmlPrefilter: function (e) {
                            return e.replace(Ae, "<$1></$2>");
                        },
                        clone: function (e, t, n) {
                            var r,
                                i,
                                o,
                                a,
                                s,
                                u,
                                l,
                                c = e.cloneNode(!0),
                                f = ie(e);
                            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || b.isXMLDoc(e)))
                                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                                    (s = o[r]), (u = a[r]), void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
                            if (t)
                                if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                                else Me(e, c);
                            return (a = ve(c, "script")).length > 0 && me(a, !f && ve(e, "script")), c;
                        },
                        cleanData: function (e) {
                            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (V(n)) {
                                    if ((t = n[Y.expando])) {
                                        if (t.events) for (r in t.events) i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                                        n[Y.expando] = void 0;
                                    }
                                    n[J.expando] && (n[J.expando] = void 0);
                                }
                        },
                    }),
                        b.fn.extend({
                            detach: function (e) {
                                return We(this, e, !0);
                            },
                            remove: function (e) {
                                return We(this, e);
                            },
                            text: function (e) {
                                return B(
                                    this,
                                    function (e) {
                                        return void 0 === e
                                            ? b.text(this)
                                            : this.empty().each(function () {
                                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                              });
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            append: function () {
                                return Ie(this, arguments, function (e) {
                                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Oe(this, e).appendChild(e);
                                });
                            },
                            prepend: function () {
                                return Ie(this, arguments, function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Oe(this, e);
                                        t.insertBefore(e, t.firstChild);
                                    }
                                });
                            },
                            before: function () {
                                return Ie(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this);
                                });
                            },
                            after: function () {
                                return Ie(this, arguments, function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                                });
                            },
                            empty: function () {
                                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (b.cleanData(ve(e, !1)), (e.textContent = ""));
                                return this;
                            },
                            clone: function (e, t) {
                                return (
                                    (e = null != e && e),
                                    (t = null == t ? e : t),
                                    this.map(function () {
                                        return b.clone(this, e, t);
                                    })
                                );
                            },
                            html: function (e) {
                                return B(
                                    this,
                                    function (e) {
                                        var t = this[0] || {},
                                            n = 0,
                                            r = this.length;
                                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                        if ("string" == typeof e && !Le.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                                            e = b.htmlPrefilter(e);
                                            try {
                                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (b.cleanData(ve(t, !1)), (t.innerHTML = e));
                                                t = 0;
                                            } catch (e) {}
                                        }
                                        t && this.empty().append(e);
                                    },
                                    null,
                                    e,
                                    arguments.length
                                );
                            },
                            replaceWith: function () {
                                var e = [];
                                return Ie(
                                    this,
                                    arguments,
                                    function (t) {
                                        var n = this.parentNode;
                                        b.inArray(this, e) < 0 && (b.cleanData(ve(this)), n && n.replaceChild(t, this));
                                    },
                                    e
                                );
                            },
                        }),
                        b.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                            b.fn[e] = function (e) {
                                for (var n, r = [], i = b(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), b(i[a])[t](n), s.apply(r, n.get());
                                return this.pushStack(r);
                            };
                        });
                    var Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                        $e = function (t) {
                            var n = t.ownerDocument.defaultView;
                            return (n && n.opener) || (n = e), n.getComputedStyle(t);
                        },
                        Be = new RegExp(ne.join("|"), "i");
                    function _e(e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s = e.style;
                        return (
                            (n = n || $e(e)) &&
                                ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = b.style(e, t)),
                                !h.pixelBoxStyles() &&
                                    Fe.test(a) &&
                                    Be.test(t) &&
                                    ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
                            void 0 !== a ? a + "" : a
                        );
                    }
                    function ze(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get;
                            },
                        };
                    }
                    !(function () {
                        function t() {
                            if (c) {
                                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                    re.appendChild(l).appendChild(c);
                                var t = e.getComputedStyle(c);
                                (i = "1%" !== t.top),
                                    (u = 12 === n(t.marginLeft)),
                                    (c.style.right = "60%"),
                                    (s = 36 === n(t.right)),
                                    (o = 36 === n(t.width)),
                                    (c.style.position = "absolute"),
                                    (a = 12 === n(c.offsetWidth / 3)),
                                    re.removeChild(l),
                                    (c = null);
                            }
                        }
                        function n(e) {
                            return Math.round(parseFloat(e));
                        }
                        var i,
                            o,
                            a,
                            s,
                            u,
                            l = r.createElement("div"),
                            c = r.createElement("div");
                        c.style &&
                            ((c.style.backgroundClip = "content-box"),
                            (c.cloneNode(!0).style.backgroundClip = ""),
                            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
                            b.extend(h, {
                                boxSizingReliable: function () {
                                    return t(), o;
                                },
                                pixelBoxStyles: function () {
                                    return t(), s;
                                },
                                pixelPosition: function () {
                                    return t(), i;
                                },
                                reliableMarginLeft: function () {
                                    return t(), u;
                                },
                                scrollboxSize: function () {
                                    return t(), a;
                                },
                            }));
                    })();
                    var Ue = ["Webkit", "Moz", "ms"],
                        Xe = r.createElement("div").style,
                        Ve = {};
                    function Ge(e) {
                        var t = b.cssProps[e] || Ve[e];
                        return (
                            t ||
                            (e in Xe
                                ? e
                                : (Ve[e] =
                                      (function (e) {
                                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Xe) return e;
                                      })(e) || e))
                        );
                    }
                    var Ye = /^(none|table(?!-c[ea]).+)/,
                        Je = /^--/,
                        Qe = { position: "absolute", visibility: "hidden", display: "block" },
                        Ke = { letterSpacing: "0", fontWeight: "400" };
                    function Ze(e, t, n) {
                        var r = te.exec(t);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                    }
                    function et(e, t, n, r, i, o) {
                        var a = "width" === t ? 1 : 0,
                            s = 0,
                            u = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; a < 4; a += 2)
                            "margin" === n && (u += b.css(e, n + ne[a], !0, i)),
                                r
                                    ? ("content" === n && (u -= b.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= b.css(e, "border" + ne[a] + "Width", !0, i)))
                                    : ((u += b.css(e, "padding" + ne[a], !0, i)), "padding" !== n ? (u += b.css(e, "border" + ne[a] + "Width", !0, i)) : (s += b.css(e, "border" + ne[a] + "Width", !0, i)));
                        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
                    }
                    function tt(e, t, n) {
                        var r = $e(e),
                            i = (!h.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, r),
                            o = i,
                            a = _e(e, t, r),
                            s = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Fe.test(a)) {
                            if (!n) return a;
                            a = "auto";
                        }
                        return (
                            ((!h.boxSizingReliable() && i) || "auto" === a || (!parseFloat(a) && "inline" === b.css(e, "display", !1, r))) &&
                                e.getClientRects().length &&
                                ((i = "border-box" === b.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
                            (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                        );
                    }
                    function nt(e, t, n, r, i) {
                        return new nt.prototype.init(e, t, n, r, i);
                    }
                    b.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = _e(e, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                },
                            },
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0,
                        },
                        cssProps: {},
                        style: function (e, t, n, r) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var i,
                                    o,
                                    a,
                                    s = X(t),
                                    u = Je.test(t),
                                    l = e.style;
                                if ((u || (t = Ge(s)), (a = b.cssHooks[t] || b.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                                    null != n &&
                                        n == n &&
                                        ("number" !== o || u || (n += (i && i[3]) || (b.cssNumber[s] ? "" : "px")),
                                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
                            }
                        },
                        css: function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s = X(t);
                            return (
                                Je.test(t) || (t = Ge(s)),
                                (a = b.cssHooks[t] || b.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                                void 0 === i && (i = _e(e, t, r)),
                                "normal" === i && t in Ke && (i = Ke[t]),
                                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
                            );
                        },
                    }),
                        b.each(["height", "width"], function (e, t) {
                            b.cssHooks[t] = {
                                get: function (e, n, r) {
                                    if (n)
                                        return !Ye.test(b.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                            ? tt(e, t, r)
                                            : se(e, Qe, function () {
                                                  return tt(e, t, r);
                                              });
                                },
                                set: function (e, n, r) {
                                    var i,
                                        o = $e(e),
                                        a = !h.scrollboxSize() && "absolute" === o.position,
                                        s = (a || r) && "border-box" === b.css(e, "boxSizing", !1, o),
                                        u = r ? et(e, t, r, s, o) : 0;
                                    return (
                                        s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - 0.5)),
                                        u && (i = te.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = b.css(e, t))),
                                        Ze(0, n, u)
                                    );
                                },
                            };
                        }),
                        (b.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
                            if (t)
                                return (
                                    (parseFloat(_e(e, "marginLeft")) ||
                                        e.getBoundingClientRect().left -
                                            se(e, { marginLeft: 0 }, function () {
                                                return e.getBoundingClientRect().left;
                                            })) + "px"
                                );
                        })),
                        b.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                            (b.cssHooks[e + t] = {
                                expand: function (n) {
                                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
                                    return i;
                                },
                            }),
                                "margin" !== e && (b.cssHooks[e + t].set = Ze);
                        }),
                        b.fn.extend({
                            css: function (e, t) {
                                return B(
                                    this,
                                    function (e, t, n) {
                                        var r,
                                            i,
                                            o = {},
                                            a = 0;
                                        if (Array.isArray(t)) {
                                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = b.css(e, t[a], !1, r);
                                            return o;
                                        }
                                        return void 0 !== n ? b.style(e, t, n) : b.css(e, t);
                                    },
                                    e,
                                    t,
                                    arguments.length > 1
                                );
                            },
                        }),
                        (b.Tween = nt),
                        (nt.prototype = {
                            constructor: nt,
                            init: function (e, t, n, r, i, o) {
                                (this.elem = e), (this.prop = n), (this.easing = i || b.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (b.cssNumber[n] ? "" : "px"));
                            },
                            cur: function () {
                                var e = nt.propHooks[this.prop];
                                return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
                            },
                            run: function (e) {
                                var t,
                                    n = nt.propHooks[this.prop];
                                return (
                                    this.options.duration ? (this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                    (this.now = (this.end - this.start) * t + this.start),
                                    this.options.step && this.options.step.call(this.elem, this.now, this),
                                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                                    this
                                );
                            },
                        }),
                        (nt.prototype.init.prototype = nt.prototype),
                        (nt.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                                },
                                set: function (e) {
                                    b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!b.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)]) ? (e.elem[e.prop] = e.now) : b.style(e.elem, e.prop, e.now + e.unit);
                                },
                            },
                        }),
                        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                            set: function (e) {
                                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                            },
                        }),
                        (b.easing = {
                            linear: function (e) {
                                return e;
                            },
                            swing: function (e) {
                                return 0.5 - Math.cos(e * Math.PI) / 2;
                            },
                            _default: "swing",
                        }),
                        (b.fx = nt.prototype.init),
                        (b.fx.step = {});
                    var rt,
                        it,
                        ot = /^(?:toggle|show|hide)$/,
                        at = /queueHooks$/;
                    function st() {
                        it && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, b.fx.interval), b.fx.tick());
                    }
                    function ut() {
                        return (
                            e.setTimeout(function () {
                                rt = void 0;
                            }),
                            (rt = Date.now())
                        );
                    }
                    function lt(e, t) {
                        var n,
                            r = 0,
                            i = { height: e };
                        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
                        return t && (i.opacity = i.width = e), i;
                    }
                    function ct(e, t, n) {
                        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
                    }
                    function ft(e, t, n) {
                        var r,
                            i,
                            o = 0,
                            a = ft.prefilters.length,
                            s = b.Deferred().always(function () {
                                delete u.elem;
                            }),
                            u = function () {
                                if (i) return !1;
                                for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
                            },
                            l = s.promise({
                                elem: e,
                                props: b.extend({}, t),
                                opts: b.extend(!0, { specialEasing: {}, easing: b.easing._default }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: rt || ut(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                    return l.tweens.push(r), r;
                                },
                                stop: function (t) {
                                    var n = 0,
                                        r = t ? l.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                                },
                            }),
                            c = l.props;
                        for (
                            !(function (e, t) {
                                var n, r, i, o, a;
                                for (n in e)
                                    if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = b.cssHooks[r]) && ("expand" in a)))
                                        for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
                                    else t[r] = i;
                            })(c, l.opts.specialEasing);
                            o < a;
                            o++
                        )
                            if ((r = ft.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                        return (
                            b.map(c, ct, l),
                            g(l.opts.start) && l.opts.start.call(e, l),
                            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                            b.fx.timer(b.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                            l
                        );
                    }
                    (b.Animation = b.extend(ft, {
                        tweeners: {
                            "*": [
                                function (e, t) {
                                    var n = this.createTween(e, t);
                                    return ue(n.elem, e, te.exec(t), n), n;
                                },
                            ],
                        },
                        tweener: function (e, t) {
                            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(R));
                            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
                        },
                        prefilters: [
                            function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    f = "width" in t || "height" in t,
                                    p = this,
                                    d = {},
                                    h = e.style,
                                    g = e.nodeType && ae(e),
                                    v = Y.get(e, "fxshow");
                                for (r in (n.queue ||
                                    (null == (a = b._queueHooks(e, "fx")).unqueued &&
                                        ((a.unqueued = 0),
                                        (s = a.empty.fire),
                                        (a.empty.fire = function () {
                                            a.unqueued || s();
                                        })),
                                    a.unqueued++,
                                    p.always(function () {
                                        p.always(function () {
                                            a.unqueued--, b.queue(e, "fx").length || a.empty.fire();
                                        });
                                    })),
                                t))
                                    if (((i = t[r]), ot.test(i))) {
                                        if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                                            if ("show" !== i || !v || void 0 === v[r]) continue;
                                            g = !0;
                                        }
                                        d[r] = (v && v[r]) || b.style(e, r);
                                    }
                                if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                                    for (r in (f &&
                                        1 === e.nodeType &&
                                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                        null == (l = v && v.display) && (l = Y.get(e, "display")),
                                        "none" === (c = b.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = b.css(e, "display")), fe([e]))),
                                        ("inline" === c || ("inline-block" === c && null != l)) &&
                                            "none" === b.css(e, "float") &&
                                            (u ||
                                                (p.done(function () {
                                                    h.display = l;
                                                }),
                                                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                                            (h.display = "inline-block"))),
                                    n.overflow &&
                                        ((h.overflow = "hidden"),
                                        p.always(function () {
                                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                        })),
                                    (u = !1),
                                    d))
                                        u ||
                                            (v ? "hidden" in v && (g = v.hidden) : (v = Y.access(e, "fxshow", { display: l })),
                                            o && (v.hidden = !g),
                                            g && fe([e], !0),
                                            p.done(function () {
                                                for (r in (g || fe([e]), Y.remove(e, "fxshow"), d)) b.style(e, r, d[r]);
                                            })),
                                            (u = ct(g ? v[r] : 0, r, p)),
                                            r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
                            },
                        ],
                        prefilter: function (e, t) {
                            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
                        },
                    })),
                        (b.speed = function (e, t, n) {
                            var r = e && "object" == typeof e ? b.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
                            return (
                                b.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in b.fx.speeds ? (r.duration = b.fx.speeds[r.duration]) : (r.duration = b.fx.speeds._default)),
                                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                                (r.old = r.complete),
                                (r.complete = function () {
                                    g(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue);
                                }),
                                r
                            );
                        }),
                        b.fn.extend({
                            fadeTo: function (e, t, n, r) {
                                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                            },
                            animate: function (e, t, n, r) {
                                var i = b.isEmptyObject(e),
                                    o = b.speed(t, n, r),
                                    a = function () {
                                        var t = ft(this, b.extend({}, e), o);
                                        (i || Y.get(this, "finish")) && t.stop(!0);
                                    };
                                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
                            },
                            stop: function (e, t, n) {
                                var r = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n);
                                };
                                return (
                                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                    t && !1 !== e && this.queue(e || "fx", []),
                                    this.each(function () {
                                        var t = !0,
                                            i = null != e && e + "queueHooks",
                                            o = b.timers,
                                            a = Y.get(this);
                                        if (i) a[i] && a[i].stop && r(a[i]);
                                        else for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                        (!t && n) || b.dequeue(this, e);
                                    })
                                );
                            },
                            finish: function (e) {
                                return (
                                    !1 !== e && (e = e || "fx"),
                                    this.each(function () {
                                        var t,
                                            n = Y.get(this),
                                            r = n[e + "queue"],
                                            i = n[e + "queueHooks"],
                                            o = b.timers,
                                            a = r ? r.length : 0;
                                        for (n.finish = !0, b.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                        delete n.finish;
                                    })
                                );
                            },
                        }),
                        b.each(["toggle", "show", "hide"], function (e, t) {
                            var n = b.fn[t];
                            b.fn[t] = function (e, r, i) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i);
                            };
                        }),
                        b.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                            b.fn[e] = function (e, n, r) {
                                return this.animate(t, e, n, r);
                            };
                        }),
                        (b.timers = []),
                        (b.fx.tick = function () {
                            var e,
                                t = 0,
                                n = b.timers;
                            for (rt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || b.fx.stop(), (rt = void 0);
                        }),
                        (b.fx.timer = function (e) {
                            b.timers.push(e), b.fx.start();
                        }),
                        (b.fx.interval = 13),
                        (b.fx.start = function () {
                            it || ((it = !0), st());
                        }),
                        (b.fx.stop = function () {
                            it = null;
                        }),
                        (b.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                        (b.fn.delay = function (t, n) {
                            return (
                                (t = (b.fx && b.fx.speeds[t]) || t),
                                (n = n || "fx"),
                                this.queue(n, function (n, r) {
                                    var i = e.setTimeout(n, t);
                                    r.stop = function () {
                                        e.clearTimeout(i);
                                    };
                                })
                            );
                        }),
                        (function () {
                            var e = r.createElement("input"),
                                t = r.createElement("select").appendChild(r.createElement("option"));
                            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
                        })();
                    var pt,
                        dt = b.expr.attrHandle;
                    b.fn.extend({
                        attr: function (e, t) {
                            return B(this, b.attr, e, t, arguments.length > 1);
                        },
                        removeAttr: function (e) {
                            return this.each(function () {
                                b.removeAttr(this, e);
                            });
                        },
                    }),
                        b.extend({
                            attr: function (e, t, n) {
                                var r,
                                    i,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return void 0 === e.getAttribute
                                        ? b.prop(e, t, n)
                                        : ((1 === o && b.isXMLDoc(e)) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? pt : void 0)),
                                          void 0 !== n
                                              ? null === n
                                                  ? void b.removeAttr(e, t)
                                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                  ? r
                                                  : (e.setAttribute(t, n + ""), n)
                                              : i && "get" in i && null !== (r = i.get(e, t))
                                              ? r
                                              : null == (r = b.find.attr(e, t))
                                              ? void 0
                                              : r);
                            },
                            attrHooks: {
                                type: {
                                    set: function (e, t) {
                                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                                            var n = e.value;
                                            return e.setAttribute("type", t), n && (e.value = n), t;
                                        }
                                    },
                                },
                            },
                            removeAttr: function (e, t) {
                                var n,
                                    r = 0,
                                    i = t && t.match(R);
                                if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                            },
                        }),
                        (pt = {
                            set: function (e, t, n) {
                                return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n), n;
                            },
                        }),
                        b.each(b.expr.match.bool.source.match(/\w+/g), function (e, t) {
                            var n = dt[t] || b.find.attr;
                            dt[t] = function (e, t, r) {
                                var i,
                                    o,
                                    a = t.toLowerCase();
                                return r || ((o = dt[a]), (dt[a] = i), (i = null != n(e, t, r) ? a : null), (dt[a] = o)), i;
                            };
                        });
                    var ht = /^(?:input|select|textarea|button)$/i,
                        gt = /^(?:a|area)$/i;
                    function vt(e) {
                        return (e.match(R) || []).join(" ");
                    }
                    function mt(e) {
                        return (e.getAttribute && e.getAttribute("class")) || "";
                    }
                    function yt(e) {
                        return Array.isArray(e) ? e : ("string" == typeof e && e.match(R)) || [];
                    }
                    b.fn.extend({
                        prop: function (e, t) {
                            return B(this, b.prop, e, t, arguments.length > 1);
                        },
                        removeProp: function (e) {
                            return this.each(function () {
                                delete this[b.propFix[e] || e];
                            });
                        },
                    }),
                        b.extend({
                            prop: function (e, t, n) {
                                var r,
                                    i,
                                    o = e.nodeType;
                                if (3 !== o && 8 !== o && 2 !== o)
                                    return (
                                        (1 === o && b.isXMLDoc(e)) || ((t = b.propFix[t] || t), (i = b.propHooks[t])),
                                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                    );
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function (e) {
                                        var t = b.find.attr(e, "tabindex");
                                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href) ? 0 : -1;
                                    },
                                },
                            },
                            propFix: { for: "htmlFor", class: "className" },
                        }),
                        h.optSelected ||
                            (b.propHooks.selected = {
                                get: function (e) {
                                    var t = e.parentNode;
                                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                                },
                                set: function (e) {
                                    var t = e.parentNode;
                                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                                },
                            }),
                        b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                            b.propFix[this.toLowerCase()] = this;
                        }),
                        b.fn.extend({
                            addClass: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        b(this).addClass(e.call(this, t, mt(this)));
                                    });
                                if ((t = yt(e)).length)
                                    for (; (n = this[u++]); )
                                        if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                                            for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                            i !== (s = vt(r)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            removeClass: function (e) {
                                var t,
                                    n,
                                    r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u = 0;
                                if (g(e))
                                    return this.each(function (t) {
                                        b(this).removeClass(e.call(this, t, mt(this)));
                                    });
                                if (!arguments.length) return this.attr("class", "");
                                if ((t = yt(e)).length)
                                    for (; (n = this[u++]); )
                                        if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                                            for (a = 0; (o = t[a++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                                            i !== (s = vt(r)) && n.setAttribute("class", s);
                                        }
                                return this;
                            },
                            toggleClass: function (e, t) {
                                var n = typeof e,
                                    r = "string" === n || Array.isArray(e);
                                return "boolean" == typeof t && r
                                    ? t
                                        ? this.addClass(e)
                                        : this.removeClass(e)
                                    : g(e)
                                    ? this.each(function (n) {
                                          b(this).toggleClass(e.call(this, n, mt(this), t), t);
                                      })
                                    : this.each(function () {
                                          var t, i, o, a;
                                          if (r) for (i = 0, o = b(this), a = yt(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                          else
                                              (void 0 !== e && "boolean" !== n) ||
                                                  ((t = mt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
                                      });
                            },
                            hasClass: function (e) {
                                var t,
                                    n,
                                    r = 0;
                                for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
                                return !1;
                            },
                        });
                    var xt = /\r/g;
                    b.fn.extend({
                        val: function (e) {
                            var t,
                                n,
                                r,
                                i = this[0];
                            return arguments.length
                                ? ((r = g(e)),
                                  this.each(function (n) {
                                      var i;
                                      1 === this.nodeType &&
                                          (null == (i = r ? e.call(this, n, b(this).val()) : e)
                                              ? (i = "")
                                              : "number" == typeof i
                                              ? (i += "")
                                              : Array.isArray(i) &&
                                                (i = b.map(i, function (e) {
                                                    return null == e ? "" : e + "";
                                                })),
                                          ((t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                                  }))
                                : i
                                ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                                    ? n
                                    : "string" == typeof (n = i.value)
                                    ? n.replace(xt, "")
                                    : null == n
                                    ? ""
                                    : n
                                : void 0;
                        },
                    }),
                        b.extend({
                            valHooks: {
                                option: {
                                    get: function (e) {
                                        var t = b.find.attr(e, "value");
                                        return null != t ? t : vt(b.text(e));
                                    },
                                },
                                select: {
                                    get: function (e) {
                                        var t,
                                            n,
                                            r,
                                            i = e.options,
                                            o = e.selectedIndex,
                                            a = "select-one" === e.type,
                                            s = a ? null : [],
                                            u = a ? o + 1 : i.length;
                                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                                if (((t = b(n).val()), a)) return t;
                                                s.push(t);
                                            }
                                        return s;
                                    },
                                    set: function (e, t) {
                                        for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                                        return n || (e.selectedIndex = -1), o;
                                    },
                                },
                            },
                        }),
                        b.each(["radio", "checkbox"], function () {
                            (b.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t)) return (e.checked = b.inArray(b(e).val(), t) > -1);
                                },
                            }),
                                h.checkOn ||
                                    (b.valHooks[this].get = function (e) {
                                        return null === e.getAttribute("value") ? "on" : e.value;
                                    });
                        }),
                        (h.focusin = "onfocusin" in e);
                    var bt = /^(?:focusinfocus|focusoutblur)$/,
                        wt = function (e) {
                            e.stopPropagation();
                        };
                    b.extend(b.event, {
                        trigger: function (t, n, i, o) {
                            var a,
                                s,
                                u,
                                l,
                                c,
                                p,
                                d,
                                h,
                                m = [i || r],
                                y = f.call(t, "type") ? t.type : t,
                                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (
                                ((s = h = u = i = i || r),
                                3 !== i.nodeType &&
                                    8 !== i.nodeType &&
                                    !bt.test(y + b.event.triggered) &&
                                    (y.indexOf(".") > -1 && ((x = y.split(".")), (y = x.shift()), x.sort()),
                                    (c = y.indexOf(":") < 0 && "on" + y),
                                    ((t = t[b.expando] ? t : new b.Event(y, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                                    (t.namespace = x.join(".")),
                                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                    (t.result = void 0),
                                    t.target || (t.target = i),
                                    (n = null == n ? [t] : b.makeArray(n, [t])),
                                    (d = b.event.special[y] || {}),
                                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
                            ) {
                                if (!o && !d.noBubble && !v(i)) {
                                    for (l = d.delegateType || y, bt.test(l + y) || (s = s.parentNode); s; s = s.parentNode) m.push(s), (u = s);
                                    u === (i.ownerDocument || r) && m.push(u.defaultView || u.parentWindow || e);
                                }
                                for (a = 0; (s = m[a++]) && !t.isPropagationStopped(); )
                                    (h = s),
                                        (t.type = a > 1 ? l : d.bindType || y),
                                        (p = (Y.get(s, "events") || {})[t.type] && Y.get(s, "handle")) && p.apply(s, n),
                                        (p = c && s[c]) && p.apply && V(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                                return (
                                    (t.type = y),
                                    o ||
                                        t.isDefaultPrevented() ||
                                        (d._default && !1 !== d._default.apply(m.pop(), n)) ||
                                        !V(i) ||
                                        (c &&
                                            g(i[y]) &&
                                            !v(i) &&
                                            ((u = i[c]) && (i[c] = null),
                                            (b.event.triggered = y),
                                            t.isPropagationStopped() && h.addEventListener(y, wt),
                                            i[y](),
                                            t.isPropagationStopped() && h.removeEventListener(y, wt),
                                            (b.event.triggered = void 0),
                                            u && (i[c] = u))),
                                    t.result
                                );
                            }
                        },
                        simulate: function (e, t, n) {
                            var r = b.extend(new b.Event(), n, { type: e, isSimulated: !0 });
                            b.event.trigger(r, null, t);
                        },
                    }),
                        b.fn.extend({
                            trigger: function (e, t) {
                                return this.each(function () {
                                    b.event.trigger(e, t, this);
                                });
                            },
                            triggerHandler: function (e, t) {
                                var n = this[0];
                                if (n) return b.event.trigger(e, t, n, !0);
                            },
                        }),
                        h.focusin ||
                            b.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                                var n = function (e) {
                                    b.event.simulate(t, e.target, b.event.fix(e));
                                };
                                b.event.special[t] = {
                                    setup: function () {
                                        var r = this.ownerDocument || this,
                                            i = Y.access(r, t);
                                        i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1);
                                    },
                                    teardown: function () {
                                        var r = this.ownerDocument || this,
                                            i = Y.access(r, t) - 1;
                                        i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t));
                                    },
                                };
                            });
                    var Tt = e.location,
                        Ct = Date.now(),
                        Et = /\?/;
                    b.parseXML = function (t) {
                        var n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            n = new e.DOMParser().parseFromString(t, "text/xml");
                        } catch (e) {
                            n = void 0;
                        }
                        return (n && !n.getElementsByTagName("parsererror").length) || b.error("Invalid XML: " + t), n;
                    };
                    var kt = /\[\]$/,
                        St = /\r?\n/g,
                        Nt = /^(?:submit|button|image|reset|file)$/i,
                        Dt = /^(?:input|select|textarea|keygen)/i;
                    function jt(e, t, n, r) {
                        var i;
                        if (Array.isArray(t))
                            b.each(t, function (t, i) {
                                n || kt.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                            });
                        else if (n || "object" !== x(t)) r(e, t);
                        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
                    }
                    (b.param = function (e, t) {
                        var n,
                            r = [],
                            i = function (e, t) {
                                var n = g(t) ? t() : t;
                                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || (e.jquery && !b.isPlainObject(e)))
                            b.each(e, function () {
                                i(this.name, this.value);
                            });
                        else for (n in e) jt(n, e[n], t, i);
                        return r.join("&");
                    }),
                        b.fn.extend({
                            serialize: function () {
                                return b.param(this.serializeArray());
                            },
                            serializeArray: function () {
                                return this.map(function () {
                                    var e = b.prop(this, "elements");
                                    return e ? b.makeArray(e) : this;
                                })
                                    .filter(function () {
                                        var e = this.type;
                                        return this.name && !b(this).is(":disabled") && Dt.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                                    })
                                    .map(function (e, t) {
                                        var n = b(this).val();
                                        return null == n
                                            ? null
                                            : Array.isArray(n)
                                            ? b.map(n, function (e) {
                                                  return { name: t.name, value: e.replace(St, "\r\n") };
                                              })
                                            : { name: t.name, value: n.replace(St, "\r\n") };
                                    })
                                    .get();
                            },
                        });
                    var At = /%20/g,
                        Lt = /#.*$/,
                        qt = /([?&])_=[^&]*/,
                        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        Ot = /^(?:GET|HEAD)$/,
                        Rt = /^\/\//,
                        Pt = {},
                        Mt = {},
                        It = "*/".concat("*"),
                        Wt = r.createElement("a");
                    function Ft(e) {
                        return function (t, n) {
                            "string" != typeof t && ((n = t), (t = "*"));
                            var r,
                                i = 0,
                                o = t.toLowerCase().match(R) || [];
                            if (g(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                        };
                    }
                    function $t(e, t, n, r) {
                        var i = {},
                            o = e === Mt;
                        function a(s) {
                            var u;
                            return (
                                (i[s] = !0),
                                b.each(e[s] || [], function (e, s) {
                                    var l = s(t, n, r);
                                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                                }),
                                u
                            );
                        }
                        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
                    }
                    function Bt(e, t) {
                        var n,
                            r,
                            i = b.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                        return r && b.extend(!0, e, r), e;
                    }
                    (Wt.href = Tt.href),
                        b.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: Tt.href,
                                type: "GET",
                                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": b.parseXML },
                                flatOptions: { url: !0, context: !0 },
                            },
                            ajaxSetup: function (e, t) {
                                return t ? Bt(Bt(e, b.ajaxSettings), t) : Bt(b.ajaxSettings, e);
                            },
                            ajaxPrefilter: Ft(Pt),
                            ajaxTransport: Ft(Mt),
                            ajax: function (t, n) {
                                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                                var i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p,
                                    d,
                                    h = b.ajaxSetup({}, n),
                                    g = h.context || h,
                                    v = h.context && (g.nodeType || g.jquery) ? b(g) : b.event,
                                    m = b.Deferred(),
                                    y = b.Callbacks("once memory"),
                                    x = h.statusCode || {},
                                    w = {},
                                    T = {},
                                    C = "canceled",
                                    E = {
                                        readyState: 0,
                                        getResponseHeader: function (e) {
                                            var t;
                                            if (c) {
                                                if (!s) for (s = {}; (t = Ht.exec(a)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                                t = s[e.toLowerCase() + " "];
                                            }
                                            return null == t ? null : t.join(", ");
                                        },
                                        getAllResponseHeaders: function () {
                                            return c ? a : null;
                                        },
                                        setRequestHeader: function (e, t) {
                                            return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (w[e] = t)), this;
                                        },
                                        overrideMimeType: function (e) {
                                            return null == c && (h.mimeType = e), this;
                                        },
                                        statusCode: function (e) {
                                            var t;
                                            if (e)
                                                if (c) E.always(e[E.status]);
                                                else for (t in e) x[t] = [x[t], e[t]];
                                            return this;
                                        },
                                        abort: function (e) {
                                            var t = e || C;
                                            return i && i.abort(t), k(0, t), this;
                                        },
                                    };
                                if (
                                    (m.promise(E),
                                    (h.url = ((t || h.url || Tt.href) + "").replace(Rt, Tt.protocol + "//")),
                                    (h.type = n.method || n.type || h.method || h.type),
                                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""]),
                                    null == h.crossDomain)
                                ) {
                                    l = r.createElement("a");
                                    try {
                                        (l.href = h.url), (l.href = l.href), (h.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host);
                                    } catch (e) {
                                        h.crossDomain = !0;
                                    }
                                }
                                if ((h.data && h.processData && "string" != typeof h.data && (h.data = b.param(h.data, h.traditional)), $t(Pt, h, n, E), c)) return E;
                                for (p in ((f = b.event && h.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
                                (h.type = h.type.toUpperCase()),
                                (h.hasContent = !Ot.test(h.type)),
                                (o = h.url.replace(Lt, "")),
                                h.hasContent
                                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(At, "+"))
                                    : ((d = h.url.slice(o.length)),
                                      h.data && (h.processData || "string" == typeof h.data) && ((o += (Et.test(o) ? "&" : "?") + h.data), delete h.data),
                                      !1 === h.cache && ((o = o.replace(qt, "$1")), (d = (Et.test(o) ? "&" : "?") + "_=" + Ct++ + d)),
                                      (h.url = o + d)),
                                h.ifModified && (b.lastModified[o] && E.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && E.setRequestHeader("If-None-Match", b.etag[o])),
                                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]),
                                h.headers))
                                    E.setRequestHeader(p, h.headers[p]);
                                if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
                                if (((C = "abort"), y.add(h.complete), E.done(h.success), E.fail(h.error), (i = $t(Mt, h, n, E)))) {
                                    if (((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), c)) return E;
                                    h.async &&
                                        h.timeout > 0 &&
                                        (u = e.setTimeout(function () {
                                            E.abort("timeout");
                                        }, h.timeout));
                                    try {
                                        (c = !1), i.send(w, k);
                                    } catch (e) {
                                        if (c) throw e;
                                        k(-1, e);
                                    }
                                } else k(-1, "No Transport");
                                function k(t, n, r, s) {
                                    var l,
                                        p,
                                        d,
                                        w,
                                        T,
                                        C = n;
                                    c ||
                                        ((c = !0),
                                        u && e.clearTimeout(u),
                                        (i = void 0),
                                        (a = s || ""),
                                        (E.readyState = t > 0 ? 4 : 0),
                                        (l = (t >= 200 && t < 300) || 304 === t),
                                        r &&
                                            (w = (function (e, t, n) {
                                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                                if (r)
                                                    for (i in s)
                                                        if (s[i] && s[i].test(r)) {
                                                            u.unshift(i);
                                                            break;
                                                        }
                                                if (u[0] in n) o = u[0];
                                                else {
                                                    for (i in n) {
                                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                                            o = i;
                                                            break;
                                                        }
                                                        a || (a = i);
                                                    }
                                                    o = o || a;
                                                }
                                                if (o) return o !== u[0] && u.unshift(o), n[o];
                                            })(h, E, r)),
                                        (w = (function (e, t, n, r) {
                                            var i,
                                                o,
                                                a,
                                                s,
                                                u,
                                                l = {},
                                                c = e.dataTypes.slice();
                                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                            for (o = c.shift(); o; )
                                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                                    if ("*" === o) o = u;
                                                    else if ("*" !== u && u !== o) {
                                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                                            for (i in l)
                                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                                    break;
                                                                }
                                                        if (!0 !== a)
                                                            if (a && e.throws) t = a(t);
                                                            else
                                                                try {
                                                                    t = a(t);
                                                                } catch (e) {
                                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                                }
                                                    }
                                            return { state: "success", data: t };
                                        })(h, w, E, l)),
                                        l
                                            ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (b.etag[o] = T)),
                                              204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = w.state), (p = w.data), (l = !(d = w.error))))
                                            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                                        (E.status = t),
                                        (E.statusText = (n || C) + ""),
                                        l ? m.resolveWith(g, [p, C, E]) : m.rejectWith(g, [E, C, d]),
                                        E.statusCode(x),
                                        (x = void 0),
                                        f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                                        y.fireWith(g, [E, C]),
                                        f && (v.trigger("ajaxComplete", [E, h]), --b.active || b.event.trigger("ajaxStop")));
                                }
                                return E;
                            },
                            getJSON: function (e, t, n) {
                                return b.get(e, t, n, "json");
                            },
                            getScript: function (e, t) {
                                return b.get(e, void 0, t, "script");
                            },
                        }),
                        b.each(["get", "post"], function (e, t) {
                            b[t] = function (e, n, r, i) {
                                return g(n) && ((i = i || r), (r = n), (n = void 0)), b.ajax(b.extend({ url: e, type: t, dataType: i, data: n, success: r }, b.isPlainObject(e) && e));
                            };
                        }),
                        (b._evalUrl = function (e, t) {
                            return b.ajax({
                                url: e,
                                type: "GET",
                                dataType: "script",
                                cache: !0,
                                async: !1,
                                global: !1,
                                converters: { "text script": function () {} },
                                dataFilter: function (e) {
                                    b.globalEval(e, t);
                                },
                            });
                        }),
                        b.fn.extend({
                            wrapAll: function (e) {
                                var t;
                                return (
                                    this[0] &&
                                        (g(e) && (e = e.call(this[0])),
                                        (t = b(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this
                                );
                            },
                            wrapInner: function (e) {
                                return g(e)
                                    ? this.each(function (t) {
                                          b(this).wrapInner(e.call(this, t));
                                      })
                                    : this.each(function () {
                                          var t = b(this),
                                              n = t.contents();
                                          n.length ? n.wrapAll(e) : t.append(e);
                                      });
                            },
                            wrap: function (e) {
                                var t = g(e);
                                return this.each(function (n) {
                                    b(this).wrapAll(t ? e.call(this, n) : e);
                                });
                            },
                            unwrap: function (e) {
                                return (
                                    this.parent(e)
                                        .not("body")
                                        .each(function () {
                                            b(this).replaceWith(this.childNodes);
                                        }),
                                    this
                                );
                            },
                        }),
                        (b.expr.pseudos.hidden = function (e) {
                            return !b.expr.pseudos.visible(e);
                        }),
                        (b.expr.pseudos.visible = function (e) {
                            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                        }),
                        (b.ajaxSettings.xhr = function () {
                            try {
                                return new e.XMLHttpRequest();
                            } catch (e) {}
                        });
                    var _t = { 0: 200, 1223: 204 },
                        zt = b.ajaxSettings.xhr();
                    (h.cors = !!zt && "withCredentials" in zt),
                        (h.ajax = zt = !!zt),
                        b.ajaxTransport(function (t) {
                            var n, r;
                            if (h.cors || (zt && !t.crossDomain))
                                return {
                                    send: function (i, o) {
                                        var a,
                                            s = t.xhr();
                                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                                        for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i)) s.setRequestHeader(a, i[a]);
                                        (n = function (e) {
                                            return function () {
                                                n &&
                                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                    "abort" === e
                                                        ? s.abort()
                                                        : "error" === e
                                                        ? "number" != typeof s.status
                                                            ? o(0, "error")
                                                            : o(s.status, s.statusText)
                                                        : o(
                                                              _t[s.status] || s.status,
                                                              s.statusText,
                                                              "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText },
                                                              s.getAllResponseHeaders()
                                                          ));
                                            };
                                        }),
                                            (s.onload = n()),
                                            (r = s.onerror = s.ontimeout = n("error")),
                                            void 0 !== s.onabort
                                                ? (s.onabort = r)
                                                : (s.onreadystatechange = function () {
                                                      4 === s.readyState &&
                                                          e.setTimeout(function () {
                                                              n && r();
                                                          });
                                                  }),
                                            (n = n("abort"));
                                        try {
                                            s.send((t.hasContent && t.data) || null);
                                        } catch (e) {
                                            if (n) throw e;
                                        }
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        }),
                        b.ajaxPrefilter(function (e) {
                            e.crossDomain && (e.contents.script = !1);
                        }),
                        b.ajaxSetup({
                            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                            contents: { script: /\b(?:java|ecma)script\b/ },
                            converters: {
                                "text script": function (e) {
                                    return b.globalEval(e), e;
                                },
                            },
                        }),
                        b.ajaxPrefilter("script", function (e) {
                            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                        }),
                        b.ajaxTransport("script", function (e) {
                            var t, n;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (i, o) {
                                        (t = b("<script>")
                                            .attr(e.scriptAttrs || {})
                                            .prop({ charset: e.scriptCharset, src: e.url })
                                            .on(
                                                "load error",
                                                (n = function (e) {
                                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                                })
                                            )),
                                            r.head.appendChild(t[0]);
                                    },
                                    abort: function () {
                                        n && n();
                                    },
                                };
                        });
                    var Ut,
                        Xt = [],
                        Vt = /(=)\?(?=&|$)|\?\?/;
                    b.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Xt.pop() || b.expando + "_" + Ct++;
                            return (this[e] = !0), e;
                        },
                    }),
                        b.ajaxPrefilter("json jsonp", function (t, n, r) {
                            var i,
                                o,
                                a,
                                s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
                            if (s || "jsonp" === t.dataTypes[0])
                                return (
                                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                    s ? (t[s] = t[s].replace(Vt, "$1" + i)) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                                    (t.converters["script json"] = function () {
                                        return a || b.error(i + " was not called"), a[0];
                                    }),
                                    (t.dataTypes[0] = "json"),
                                    (o = e[i]),
                                    (e[i] = function () {
                                        a = arguments;
                                    }),
                                    r.always(function () {
                                        void 0 === o ? b(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Xt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                                    }),
                                    "script"
                                );
                        }),
                        (h.createHTMLDocument = (((Ut = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
                        (b.parseHTML = function (e, t, n) {
                            return "string" != typeof e
                                ? []
                                : ("boolean" == typeof t && ((n = t), (t = !1)),
                                  t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                                  (a = !n && []),
                                  (o = D.exec(e)) ? [t.createElement(o[1])] : ((o = we([e], t, a)), a && a.length && b(a).remove(), b.merge([], o.childNodes)));
                            var i, o, a;
                        }),
                        (b.fn.load = function (e, t, n) {
                            var r,
                                i,
                                o,
                                a = this,
                                s = e.indexOf(" ");
                            return (
                                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                                a.length > 0 &&
                                    b
                                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                        .done(function (e) {
                                            (o = arguments), a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e);
                                        })
                                        .always(
                                            n &&
                                                function (e, t) {
                                                    a.each(function () {
                                                        n.apply(this, o || [e.responseText, t, e]);
                                                    });
                                                }
                                        ),
                                this
                            );
                        }),
                        b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                            b.fn[t] = function (e) {
                                return this.on(t, e);
                            };
                        }),
                        (b.expr.pseudos.animated = function (e) {
                            return b.grep(b.timers, function (t) {
                                return e === t.elem;
                            }).length;
                        }),
                        (b.offset = {
                            setOffset: function (e, t, n) {
                                var r,
                                    i,
                                    o,
                                    a,
                                    s,
                                    u,
                                    l = b.css(e, "position"),
                                    c = b(e),
                                    f = {};
                                "static" === l && (e.style.position = "relative"),
                                    (s = c.offset()),
                                    (o = b.css(e, "top")),
                                    (u = b.css(e, "left")),
                                    ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                                    g(t) && (t = t.call(e, n, b.extend({}, s))),
                                    null != t.top && (f.top = t.top - s.top + a),
                                    null != t.left && (f.left = t.left - s.left + i),
                                    "using" in t ? t.using.call(e, f) : c.css(f);
                            },
                        }),
                        b.fn.extend({
                            offset: function (e) {
                                if (arguments.length)
                                    return void 0 === e
                                        ? this
                                        : this.each(function (t) {
                                              b.offset.setOffset(this, e, t);
                                          });
                                var t,
                                    n,
                                    r = this[0];
                                return r ? (r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                            },
                            position: function () {
                                if (this[0]) {
                                    var e,
                                        t,
                                        n,
                                        r = this[0],
                                        i = { top: 0, left: 0 };
                                    if ("fixed" === b.css(r, "position")) t = r.getBoundingClientRect();
                                    else {
                                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position"); ) e = e.parentNode;
                                        e && e !== r && 1 === e.nodeType && (((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0)), (i.left += b.css(e, "borderLeftWidth", !0)));
                                    }
                                    return { top: t.top - i.top - b.css(r, "marginTop", !0), left: t.left - i.left - b.css(r, "marginLeft", !0) };
                                }
                            },
                            offsetParent: function () {
                                return this.map(function () {
                                    for (var e = this.offsetParent; e && "static" === b.css(e, "position"); ) e = e.offsetParent;
                                    return e || re;
                                });
                            },
                        }),
                        b.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                            var n = "pageYOffset" === t;
                            b.fn[e] = function (r) {
                                return B(
                                    this,
                                    function (e, r, i) {
                                        var o;
                                        if ((v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                                    },
                                    e,
                                    r,
                                    arguments.length
                                );
                            };
                        }),
                        b.each(["top", "left"], function (e, t) {
                            b.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
                                if (n) return (n = _e(e, t)), Fe.test(n) ? b(e).position()[t] + "px" : n;
                            });
                        }),
                        b.each({ Height: "height", Width: "width" }, function (e, t) {
                            b.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                                b.fn[r] = function (i, o) {
                                    var a = arguments.length && (n || "boolean" != typeof i),
                                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                                    return B(
                                        this,
                                        function (t, n, i) {
                                            var o;
                                            return v(t)
                                                ? 0 === r.indexOf("outer")
                                                    ? t["inner" + e]
                                                    : t.document.documentElement["client" + e]
                                                : 9 === t.nodeType
                                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                                : void 0 === i
                                                ? b.css(t, n, s)
                                                : b.style(t, n, i, s);
                                        },
                                        t,
                                        a ? i : void 0,
                                        a
                                    );
                                };
                            });
                        }),
                        b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (
                            e,
                            t
                        ) {
                            b.fn[t] = function (e, n) {
                                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                            };
                        }),
                        b.fn.extend({
                            hover: function (e, t) {
                                return this.mouseenter(e).mouseleave(t || e);
                            },
                        }),
                        b.fn.extend({
                            bind: function (e, t, n) {
                                return this.on(e, null, t, n);
                            },
                            unbind: function (e, t) {
                                return this.off(e, null, t);
                            },
                            delegate: function (e, t, n, r) {
                                return this.on(t, e, n, r);
                            },
                            undelegate: function (e, t, n) {
                                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                            },
                        }),
                        (b.proxy = function (e, t) {
                            var n, r, i;
                            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                                return (
                                    (r = o.call(arguments, 2)),
                                    ((i = function () {
                                        return e.apply(t || this, r.concat(o.call(arguments)));
                                    }).guid = e.guid = e.guid || b.guid++),
                                    i
                                );
                        }),
                        (b.holdReady = function (e) {
                            e ? b.readyWait++ : b.ready(!0);
                        }),
                        (b.isArray = Array.isArray),
                        (b.parseJSON = JSON.parse),
                        (b.nodeName = N),
                        (b.isFunction = g),
                        (b.isWindow = v),
                        (b.camelCase = X),
                        (b.type = x),
                        (b.now = Date.now),
                        (b.isNumeric = function (e) {
                            var t = b.type(e);
                            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                        }),
                        "function" == typeof define &&
                            define.amd &&
                            define("jquery", [], function () {
                                return b;
                            });
                    var Gt = e.jQuery,
                        Yt = e.$;
                    return (
                        (b.noConflict = function (t) {
                            return e.$ === b && (e.$ = Yt), t && e.jQuery === b && (e.jQuery = Gt), b;
                        }),
                        t || (e.jQuery = e.$ = b),
                        b
                    );
                });
            },
            {},
        ],
        2: [
            function (e, t, n) {
                "use strict";
                var r,
                    i = e("jquery");
                function o() {
                    var e = new Blob([mrz_worker.toString().replace(/^function .+\{?|\}$/g, "")], { type: "text/javascript" }),
                        t = URL.createObjectURL(e),
                        n = new Worker(t);
                    n.addEventListener(
                        "error",
                        function (e) {
                            
                            console.log(e), i("html").html(["<pre>", e.message, " (", e.filename, ":", e.lineno, ":", e.colno, ")</pre>"].join(""));
                        },
                        !1
                    ),
                        n.addEventListener(
                            "message",
                            function (e) {
                                var t = e.data;
                                switch (t.type) {
                                    case "progress":
                                        i(".progress-text").text(t.msg.substr(0, 1).toUpperCase() + t.msg.substr(1));
                                        break;
                                    case "error":
                                        i(".progress").removeClass("visible"),
                                            console.log(t),
                                            setTimeout(function () {
                                                window.alert(t.error);
                                            }, 100);
                                        break;
                                    case "result":
                                        i(".progress").removeClass("visible"),
                                            (function (e) {
                                                var t, r;
                                                function o(e) {
                                                    return e.replace(/</g, "&lt;");
                                                }
                                                r = e.parsed && e.parsed.modified ? e.parsed.modified : e.ocrized ? e.ocrized : [];
                                                if (((r = r.join("\n")), e.error))
                                                 t = ['<div class="error">', o(e.error), "</div>", "<pre>", o(r), "</pre>"];
                                                else if(e.parsed.valid)
                                                {
                                                    t = ["<div class='form-group'><label>Document Code</label><input name='documentCode' class='form-control' type='text' value='"+e.parsed.fields['documentCode']+"'></div><div class='form-group'><label>Issuing State</label><input name='issuingState' class='form-control' type='text' value='"+e.parsed.fields['firstName']+"'></div><div class='form-group'><label>First Name</label><input name='firstName' class='form-control' type='text' value='"+e.parsed.fields['firstName']+"'></div><div class='form-group'><label>Last Name</label><input name='lastName' class='form-control' type='text' value='"+e.parsed.fields['lastName']+"'></div><div class='form-group'><label>Document Number</label><input name='documentNumber' class='form-control' type='text' value='"+e.parsed.fields['documentNumber']+"'></div><div class='form-group'><label>Document Number Check Digit</label><input name='documentNumberCheckDigit' class='form-control' type='text' value='"+e.parsed.fields['documentNumberCheckDigit']+"'></div><div class='form-group'><label>Nationality</label><input name='nationality' class='form-control' type='text' value='"+e.parsed.fields['nationality']+"'></div><div class='form-group'><label>Birth Date</label><input name='birthDate' class='form-control' type='text' value='"+e.parsed.fields['birthDate']+"'></div><div class='form-group'><label>Birth Check Digit</label><input name='birthDateCheckDigit' class='form-control' type='text' value='"+e.parsed.fields['birthDateCheckDigit']+"'></div><div class='form-group'><label>Sex</label><input name='sex' class='form-control' type='text' value='"+e.parsed.fields['sex']+"'></div><div class='form-group'><label>Expiration Date</label><input name='expirationDate' class='form-control' type='text' value='"+e.parsed.fields['expirationDate']+"'></div><div class='form-group'><label>Document Code</label><input name='passportDetails' class='form-control' type='text' value='"+o(r)+"'></div>"];    
                                                }                                                 
                                                else {
                                                    if (e.parsed.details) {
                                                        var a = [];
                                                        e.parsed.details.forEach(function (e) {
                                                            e.valid || a.push(e);
                                                        }),
                                                            (r = [r, "", JSON.parse(a, !1, 4)].join("\n"));
                                                    }
                                                    t = ["<pre>", "Could not parse ocrized text:", "<pre>", "</pre>", o(r), "</pre>"];
                                                
                                                }
                                                i("#parsed").html(t.join("\n")),
                                                    (function e(t, r, o) {
                                                        o || (o = 0);
                                                        if (o >= t.length) return void (r && r());
                                                        var a = Math.random();
                                                        n.addEventListener(
                                                            "message",
                                                            function s(u) {
                                                                var l = u.data;
                                                                if ("image" == l.type && l.random == a) {
                                                                    n.removeEventListener("message", s);
                                                                    var c = new ImageData(l.rgba, l.width, l.height),
                                                                        f = document.createElement("canvas");
                                                                    (f.width = l.width), (f.height = l.height);
                                                                    var p = f.getContext("2d");
                                                                    p.putImageData(c, 0, 0),
                                                                        i(f).attr("title", l.name),
                                                                        i("#detected").append(f),
                                                                        setTimeout(function () {
                                                                            e(t, r, o + 1);
                                                                        });
                                                                }
                                                            },
                                                            !1
                                                        );
                                                        n.postMessage({ cmd: "get-image", image: t[o], random: a });
                                                    })(["painted"]);
                                            })(t.result);
                                        break;
                                    default:
                                        console.log(t);
                                }
                            },
                            !1
                        );
                    var r = document.location.pathname.split("/");
                    return r.pop(), (r = r.join("/")), n.postMessage({ cmd: "config", config: { fsRootUrl: document.location.origin + r } }), n;
                }
                i(document).ready(function () {
                    try {
                        r = o();
                    } catch (e) {
                        i("html").text(e.message);
                    }
                    i("#photo").on("change", function (e) {
                        i("#detected, #parsed").empty();
                        var t = new FileReader();
                        (t.onload = function (e) {
                            i(".progress").addClass("visible"), i(".progress-text").text("Processing..."), r.postMessage({ cmd: "process", image: e.target.result });
                        }),
                            e.target.files.length && t.readAsDataURL(e.target.files[0]);
                    });
                });
            },
            { jquery: 1 },
        ],
    },
    {},
    [2]
);
//# sourceMappingURL=demo.bundle-min.js.map
