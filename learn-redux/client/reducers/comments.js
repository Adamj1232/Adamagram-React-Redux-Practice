
function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    //return the new state with the comment
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        //from the start to the comment we want to delete
        ...state.slice(0, action.i),
        //after the deleted comment to the end of comments array
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      //takes the current state
      ...state,
      //overwrite this post with the new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
export default comments
