const DOMHandler = (function(content) {
  return {
    render: (element) => {
      const container = document.querySelector(content);
      container.innerHTML = element.render();
      element.addEventListener();
    }
  }
})("#root");

export default DOMHandler;
