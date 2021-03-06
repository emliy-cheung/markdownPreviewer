class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: placeholder
      }
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.setState({
        input: e.target.value
      });
    }
  
    render() {
      return (
      <div>
          <Editor onChange={this.handleChange} input={this.state.input} />
          <Preview input={this.state.input}/>
      </div>
      )
    }
  }
  
  const Editor = (props) => {
    return (
      <div>
      <h1>Editor</h1>
      <textarea id="editor" onChange= {props.onChange} value={props.input} type='text'/>
      </div>
    );
    
  };
  
  const Preview = (props) => {
    return (
      <div>
        <h1>Preview</h1>
        <div dangerouslySetInnerHTML={{__html: marked(props.input)}} id="preview"></div>
      </div>
    );
  };
  
  const placeholder = `# Welcome to my React Markdown Previewer!
  
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:
  
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!`;
  
 
  ReactDOM.render(<App />, document.getElementById('wrapper'));