window.addEventListener("load", function (e) {
  createObserver("slide-in", ["pakket-1", "pakket-2", "pakket-3", "pakket-4"]);
  createObserver("wobble", ["title-img"]);
  createHeaderScrollObserver();
});

function createObserver(className, idsToObserve = []) {
  const handler = observerHandler(className);
  const options = getObserverOptions(className);
  const observer = new IntersectionObserver(handler, options);
  idsToObserve.forEach((id) => startObserve(id, observer));
  return observer;
}

function observerHandler(className) {
  return (entries, observer) =>
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, index) => {
        entry.target.classList.add(className, `${className}-${index}`);
        observer.unobserve(entry.target);
      });
}

function startObserve(id, observer) {
  const el = this.document.getElementById(id);
  if (!el) return;

  observer.observe(el);
}

function getObserverOptions(className) {
  const optionsDict = {
    "slide-in": { root: null, rootMargin: "50px", threshold: 0 },
    wobble: { root: null, rootMargin: "0px", threshold: 1 },
    default: { root: null, rootMargin: "0px", threshold: 1 },
  };

  return optionsDict[className] || optionsDict["default"];
}

function createHeaderScrollObserver() {
  const scrollMarker = this.document.getElementById("scroll-marker");
  const header = this.document.getElementById("header");

  const headerTop = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry);
      header.setAttribute("scroll-top", entry.isIntersecting.toString());
    });
  };

  const options = { root: null, rootMargin: "0px", threshold: [0, 1] };

  const headerObserver = new IntersectionObserver(headerTop, options);
  headerObserver.observe(scrollMarker);
}
