import $ from 'jquery';
const url = 'http://localhost:4000/api/page/'

function wikiError(resp, query) {
  if(JSON.parse(resp.responseText).message === "Page not found"){
    console.log('page not found yo');
    return {type: 'doesNotExit'}
  }
  let error = (resp && resp.responseJSON && resp.responseJSON.message)
  return { type: 'wiki_error', error: error };
}

function doneEditing(content){
  console.log('in done edit');
  return {type: 'doneEdit'}
}

function wikiInfo(data){
  return {type: 'wiki_info', payload: data};
}

export function changeBox(content) {
  return {type: 'changeBox', value: content};
}
export function previewEdit(content, query){
  return {type: 'doneEdit'}
}
export function doneEdit(content, query){
  console.log('content', content);
  console.log('query', query);
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/page/'+query,
      data: JSON.stringify({content:content}),
      method: 'put',
      dataType: 'JSON',
      contentType: 'application/json'

    })

    .then(data => dispatch(doneEditing(data)))
    .catch(resp => dispatch(wikiError(resp, query)))
  };
  return asyncAction;
}

export function startEdit(){


  return {
    type: "startEdit"
  };
}

export function getWiki(query){
  let asyncAction = function(dispatch){
    $.ajax({
      url: 'http://localhost:4000/api/page/'+query,
      method: 'get'

    })
    .then(data => dispatch(wikiInfo(data)))
    .catch(resp => dispatch(wikiError(resp, query)))
  };
  return asyncAction;
}
