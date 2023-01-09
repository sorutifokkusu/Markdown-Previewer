class App extends React.Component {
  // Setting state to temp and setting marked options for #7 Optional test
  constructor(props) {
    super(props);
    this.state = {
      text: `# Welcome to MarkDown Preview
## Small Header
[MarkDown Preview](https://codepen.io/sorutifokkusu/pen/NWBrPEb)
> Block Quote!
**Bold**
- List
\`\`\`
// Code lines
function sum(a,b){
if(true){
return a+b
}
}
\`\`\` 
\`<h1>Hello World!</h1>\`

![Image by naobim from Pixabay](https://pixabay.com/images/download/music-1813100_640.png)
Image by naobim from Pixabay 
`
    };
    this.updateTxt = this.updateTxt.bind(this);
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  //Update state with input and parse
  // The editor should stay the same input
  updateTxt(i) {
    this.setState({
      text: i.target.value
    });
    const markd = marked.parse(i.target.value);
    const p = document.getElementById("preview");
    p.innerHTML = markd;
  }

  //For creating a first Preview when visiting
  componentDidMount() {
    const markd = marked.parse(this.state.text);
    const p = document.getElementById("preview");
    p.innerHTML = markd;
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images.item(i).className = "img-fluid";
    }
  }
  componentDidUpdate() {
    const images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images.item(i).className = "img-fluid";
    }
  }
  render() {
    const text = this.state.text;
    return /*#__PURE__*/React.createElement("div", {
      id: "main",
      class: "container my-5 pt-3 pb-3 ps-5 pe-5 rounded "
    }, /*#__PURE__*/React.createElement("h1", {
      id: "headerr",
      class: "text-center my-1 mb-3 py-4 shadow-lg rounded"
    }, /*#__PURE__*/React.createElement("svg", {
      class: "my-1 mb-3",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "36",
      height: "36"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 8v12h4V8H5zM3 7l4-5 4 5v15H3V7zm16 9v-2h-3v-2h3v-2h-2V8h2V6h-4v14h4v-2h-2v-2h2zM14 4h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
    })), " Markdown Preview"), /*#__PURE__*/React.createElement("div", {
      id: "edit"
    }, /*#__PURE__*/React.createElement("h3", {
      class: "h3s text-center shadow-lg rounded mt-5 mb-3 py-1"
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16.757 3l-2 2H5v14h14V9.243l2-2V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"
    })), " Edit "), /*#__PURE__*/React.createElement("textarea", {
      id: "editor",
      class: "form-control rounded mb-5 pb-5 shadow-lg",
      onChange: this.updateTxt,
      value: text
    })), /*#__PURE__*/React.createElement("h3", {
      class: "h3s text-center shadow-lg rounded mb-3 py-1"
    }, /*#__PURE__*/React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
    })), " Preview"), /*#__PURE__*/React.createElement("div", {
      id: "preview",
      class: "container text-break mb-4 py-2 rounded shadow-lg"
    }));
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));

/*

This is for freecodecamp project

// Stuff I've used //

React, Bootstrap , ReactDOM
Icon (Remix Icon) =>  https://remixicon.com/
Marked JS => https://marked.js.org/
Image by naobim from Pixabay  => https://pixabay.com/illustrations/music-relax-headphone-1813100/

*/