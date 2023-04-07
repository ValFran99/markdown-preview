import React from "react";
import DisplayArea  from "./DisplayArea";

const initialInput = "# This is a markdown editor\n\n## Type in this box and the box on the right will render your markdown.\n\n### Some examples of stuff to do\n\n### You can put links like this:\n\n[freeCodeCamp](https://www.freecodecamp.org)\n\n### Type code inline or in blocks\n\n\`<p>This is some inline code</p>(Don't know why, but Prism doesn't highlight inline code, so :())`\n\n### For blocks of code you'll need to specify the language after the ticks\n\n(This editor supports java, javascript, c, c++, csharp, html, css, typescript)\n\n```javascript\n// this is multi-line code:\nfunction example(firstLine, lastLine) {\n  return multiLineCode;\n}\n```\n\n### You can make block quotes:\n\n> This is a block quote\n\n### Different styles of text:\n\n**bold**, _italic_., ~~crossing~~, and **_mix them together_**.\n\n### Also lists:\n\n- Example list.\n  - With.\n     - Different.\n        - Indentation.\n            - Levels.\n1. Also numbered.\n1. Like.\n1. This.\n\n### And also images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"


class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: initialInput
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return(
      <div className='input-area'>
        <div className="text-area">
          <h2 className="textarea-title"><i class="fa-brands fa-react"></i> Editor</h2>
          <textarea id="editor" value={this.state.input} onChange={this.handleChange} cols={70} rows={42}/>
        </div>
        <DisplayArea input = {this.state.input}/>
      </div>
    )
  }
}

export default TextInput;