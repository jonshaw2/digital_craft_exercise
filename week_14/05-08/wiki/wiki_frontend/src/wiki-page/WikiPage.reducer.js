export default function reducer(state = {content: undefined, edit: false, boxContent: undefined, doesNotExist: false, user: false}, action){
  if (action.type === 'wiki_info'){
    console.log('in the wiki_info');
    console.log(action.payload);

    return Object.assign({}, state, {
      content: action.payload.content,
      edit: state.edit,
      boxContent: action.payload.content,
      doesNotExist: false
    });
  }

  if (action.type ==='startEdit'){
    return Object.assign({}, state, {
      content: state.content,
      edit: true,
      boxContent: state.boxContent,
      doesNotExist: false
    });
  }

  if (action.type ==='doneEdit'){
    return Object.assign({}, state, {
      content: state.boxContent,
      edit: false,
      boxContent: state.boxContent,
      doesNotExist: false
    });
  }

  if (action.type ==='changeBox'){
    return Object.assign({}, state, {
      content: state.content,
      edit: state.edit,
      boxContent: action.value,
      doesNotExist: state.doesNotExist
    })
  }

  if (action.type ==='doesNotExit'){
    return Object.assign({}, state, {
      content: state.content,
      edit: false,
      boxContent: state.content,
      doesNotExist: true
    })
  }

  return state;
}
