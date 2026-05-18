import Swup from "swup"

const swup = new Swup({
  containers: ["#quartz-body"],
  animationSelector: {
    "[data-swup]": {
      in: (el: Element) => Promise.resolve(),
      out: (el: Element) => Promise.resolve(),
    },
    "#quartz-body": {
      in: "page-in",
      out: "page-out",
    },
  },
  cache: true,
  requestHeaders: {
    "X-Requested-With": "swup",
  },
})
