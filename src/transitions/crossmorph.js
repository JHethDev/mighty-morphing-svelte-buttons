import { cubicOut } from "svelte/easing";
import { is_function, assign } from "svelte/internal";

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

export function crossmorph(_a) {
  var { fallback } = _a,
    defaults = __rest(_a, ["fallback"]);
  const to_receive = new Map();
  const to_send = new Map();

  function crossmorph(from, node, params) {
    const {
      delay = 0,
      duration = (d) => Math.sqrt(d) * 30,
      easing = cubicOut,
    } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${
        t + (1 - t) * dw
      }, ${t + (1 - t) * dh});
			`,
    };
  }

  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect(),
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossmorph(rect, node, params);
        }

        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true),
  ];
}
