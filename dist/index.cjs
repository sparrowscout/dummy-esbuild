!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var o = t();
    for (var r in o) ("object" == typeof exports ? exports : e)[r] = o[r];
  }
})(self, () =>
  (() => {
    var e = {
        607: (e, t, o) => {
          var r, n, i;
          !(function (f) {
            if ("object" == typeof e.exports) {
              var u = f(o(875), t);
              void 0 !== u && (e.exports = u);
            } else
              (n = [o, t]),
                void 0 ===
                  (i = "function" == typeof (r = f) ? r.apply(t, n) : r) ||
                  (e.exports = i);
          })(function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.divide = t.multiply = t.subtract = t.add = void 0),
              (t.add = function (e, t) {
                return e + t;
              }),
              (t.subtract = function (e, t) {
                return e - t;
              }),
              (t.multiply = function (e, t) {
                return e * t;
              }),
              (t.divide = function (e, t) {
                return e / t;
              });
          });
        },
        875: (e) => {
          function t(e) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          (t.keys = () => []), (t.resolve = t), (t.id = 875), (e.exports = t);
        },
      },
      t = {};
    function o(r) {
      var n = t[r];
      if (void 0 !== n) return n.exports;
      var i = (t[r] = { exports: {} });
      return e[r](i, i.exports, o), i.exports;
    }
    return (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)), o(607);
  })()
);
