window.addEventListener("load", () => insertSvgs(), {
  once: true,
});

function insertSvgs() {
  const svgObjs = document.querySelectorAll('[type = "image/svg+xml"]');
  svgObjs.forEach((obj) => setTimeout(insertSvg(obj)));
}

function insertSvg(svgObj) {
  if (!svgObj.contentDocument) return setTimeout(insertSvg(svgObj));
  const svg = svgObj.contentDocument.firstChild;

  svg.classList = svgObj.classList;

  insertAfter(svg, svgObj);
  svgObj.remove();
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
