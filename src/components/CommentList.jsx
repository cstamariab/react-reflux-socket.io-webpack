import React from 'react';

import Comment from './Comment';
export default class CommentList extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div class='commentList'>
        <h2>Nombre Autor</h2>
        <Comment></Comment>
        <Comment></Comment>
        <Comment></Comment>
      </div>
    );
  }
}