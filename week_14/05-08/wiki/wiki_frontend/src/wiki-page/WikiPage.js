import React from 'react';
import * as ReactRedux from 'react-redux';
import * as action from './WikiPage.action.js'

class Wiki extends React.Component {
  componentDidMount(){
    this.props.getWiki(this.props.params.title)
  }

  componentWillReceiveProps(newProps){
    if (this.props.params.title !== newProps.params.title){
      this.props.getWiki(newProps.params.title);
    }
  }

  render(){
    function wikiLinkify(contents) {
      return contents.replace(/([A-Z][a-z]+){2,}/g, function(match) {
        return `<a href="#/page/${match}">${match}</a>`;
      });
    }
    let editCondition
    let wikiContent = this.props.content;
    let editContent = this.props.boxContent;
    console.log('in wiki render');
    console.log(wikiContent);
    if (wikiContent){
      let html = wikiLinkify(wikiContent);
      html = <p dangerouslySetInnerHTML={{__html: html}}></p>
      console.log('html',html);
      wikiContent = html;
    }else{
      wikiContent = undefined;
    }

    if(this.props.doesNotExist){
      editCondition =
      <div>
        Page Does Not Exist Yet!
        <br/><br/>
          <textarea className="editWikiBox" name="editbox" rows="4" cols="50" value={editContent} onChange={event => this.props.changeBox(event.target.value)}/>
          <br/>
          <button onClick={()=>this.props.doneEdit(editContent, this.props.params.title)}>Create Entry</button>
      </div>
    }else{
      if (this.props.edit){
        console.log('in props.edit true');
        console.log(this.props.params.title);
        editCondition =
        <div>
          <br/>
          <textarea className="editWikiBox" name="editbox" rows="4" cols="50" value={editContent} onChange={event => this.props.changeBox(event.target.value)}/>
          <br/>
          <button onClick={()=>this.props.doneEdit(editContent, this.props.params.title)}>Done Editing</button>
          <button onClick={()=>this.props.previewEdit(editContent, this.props.params.title)}>Preview</button>
        </div>


      } else{
        editCondition =
        <div>
          <br/>
          <button onClick={this.props.startEdit}>Edit</button>
        </div>
      }

    }


    return (
      <div>
        <br/>
        <h1>
        {this.props.params.title}
        </h1>
        {wikiContent}
        {editCondition}
      </div>
    );
  }
}

class WikiSearch extends React.Component {
  render(){
    return(
      <div>
      test
        searching~
      </div>
    )
  }
}

const WikiContainer = ReactRedux.connect(
  state => (
    state.wikiData
  ),
  action
)(Wiki);

const WikiSearchContainer = ReactRedux.connect(
  state => ({

  }),
  action
)(WikiSearch);
export { WikiContainer, WikiSearchContainer } ;
