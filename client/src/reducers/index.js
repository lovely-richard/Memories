import { combineReducers } from 'redux';

import posts from './posts';
import profile from './profile';

export const reducers = combineReducers(
    { posts: posts, 
      profile: profile
     });
