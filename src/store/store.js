import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { controlReducer } from './controlReducer.js';
import { englishGameReducer } from './englishGameReducer.js';
import { learnEnglishReducer } from './learnEnglishReducer.js';
import { navigationReducer } from './navigationReducer.js';
import { userNameReducer } from './userNameReducer.js';

// объединяем reducers в rootReducer с помощью combineReducers
const rootReducer = combineReducers({
  userName: userNameReducer,
  learnEnglish: learnEnglishReducer,
  englishGame: englishGameReducer,
  elements: navigationReducer,
  control: controlReducer,
});

// создаем стор
export const store = createStore(rootReducer, applyMiddleware(thunk));
