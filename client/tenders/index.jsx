function tick() {
    ReactDOM.render(
      <div>
        <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
      </div>,
      document.getElementById("header")
    );
  }
  setInterval(tick, 1000);
ReactDOM.render(
    <div id="items">
        <h2>Список телефонов</h2>
        <ul>
            <li>Apple iPhone 12 Pro</li>
            <li>Samsung Galaxy S20</li>
            <li>Huawei P40 Pro</li>
            <li>Google Pixel 5</li>
        </ul>
    </div>,
    document.getElementById("container"),
    function(){ console.log("рендеринг элемента React");}
)