var r = {
    d: (t, e) => {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    },
    o: (r, t) => Object.prototype.hasOwnProperty.call(r, t),
  },
  t = {};
function e(r, t) {
  return r + t;
}
function n(r, t) {
  return r - t;
}
function o(r, t) {
  return r * t;
}
function a(r, t) {
  return r / t;
}
r.d(t, { $X: () => n, IH: () => e, Jp: () => o, cs: () => a });
var u = t.IH,
  c = t.cs,
  i = t.Jp,
  p = t.$X;
export { u as add, c as divide, i as multiply, p as subtract };
