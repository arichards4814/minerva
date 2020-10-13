import { combineReducers } from 'redux';
import curriculumsReducer from './curriculumReducer';
import lessonsReducer from './lessonsReducer';
import notebooksReducer from './notebookReducer';

const rootReducer = combineReducers({
    curriculums: curriculumsReducer,
    lessons: lessonsReducer,
    notebooks: notebooksReducer
})