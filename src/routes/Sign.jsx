import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import { Link } from 'react-router';

import CommentBox from '../components/CommentBox';

import CommentStore from '../stores/CommentStore';
import CommentActions from '../actions/CommentActions';

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
    CommentActions.fetchComments();
  }
  render(){
    return (
      <div class='sign'>
        <CommentBox/>
          <Link to='/' >Home! :D</Link>
      </div>
    );
  }
}