function tick() {
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F ", new Date().toLocaleTimeString(), ".")), document.getElementById("header"));
}

setInterval(tick, 1000);
ReactDOM.render( /*#__PURE__*/React.createElement("div", {
  id: "items"
}, /*#__PURE__*/React.createElement("h2", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u0432"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Apple iPhone 12 Pro"), /*#__PURE__*/React.createElement("li", null, "Samsung Galaxy S20"), /*#__PURE__*/React.createElement("li", null, "Huawei P40 Pro"), /*#__PURE__*/React.createElement("li", null, "Google Pixel 5"))), document.getElementById("container"), function () {
  console.log("рендеринг элемента React");
});
