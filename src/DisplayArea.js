import React from "react";
import { marked } from "marked";
import './DisplayArea.css';
import "./prism.css";
import Prism  from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-css";
import "prismjs/components/prism-java";



marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code, lang) {
    if(Prism.languages[lang]){
      return Prism.highlight(code, Prism.languages[lang], lang)
    } else{
      return code;
    }
  },
  gfm: true,
  breaks: true
});

class DisplayArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      markdownText: ""
    };
  }
  render() {
    return(
      <div className='display-area'>
        {/* <div className="raw-markdown">{marked.parse(this.props.input)}</div> */}
        <h2 className="previewer-title"><i class="fa-brands fa-react"></i> Previewer</h2>
        <div id="preview" className="markdown-text" dangerouslySetInnerHTML={{__html: marked.parse(this.props.input)}}/>
      </div>
    )
  }
}



export default DisplayArea;