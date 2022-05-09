const MyReact = (() => {
  const hooks = [];
  let lastIndex = 0;

  const useState = (initState) => {
    const storedIndex = lastIndex;
    const state = hooks[lastIndex] || initState;

    const setState = (newVal) => {
      hooks[storedIndex] = newVal;
    };
    lastIndex++;
    return [state, setState];
  };

  const render = (Component) => {
    lastIndex = 0;
    const _component = Component();
    _component.render();
    return C;
  };

  return { useState, render };
})();

const Component = () => {
  const [count, setCount] = MyReact.useState(1);
  const [text, setText] = MyReact.useState("Hello, world!");

  return {
    render: () => {
      const countElement = document.getElementById("count");
      const textElement = document.getElementById("text");
      countElement.textContent = count;
      textElement.textContent = text;
      console.log("render!", count, text);
    },
    click: () => setCount(count + 1),
    text: (word) => setText(word),
  };
};

let App;
setTimeout(() => {
  App = MyReact.render(Component);
  App.click();

  setTimeout(() => {
    App = MyReact.render(Component);
    App.text("Bye, world!");

    setTimeout(() => {
      App = MyReact.render(Component);
    }, 2000);
  }, 2000);
}, 2000);
