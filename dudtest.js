(function (global) {
  var handler = {
    init: function (options) {
      const container = options.container;
      const props = options.props || {};
      const title = props.title || "Default Title"; // Fallback to 'Default Title' if no title is provided
      container.innerHTML = `<h1>${title}</h1>`;
    },
    clean: function (options) {
      const container = options.container;
      container.innerHTML = "";
    },
  };
  global.dmAPI.registerExternalWidget("chart", handler);
})(window);
