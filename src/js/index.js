import Search from './models/Search';
import { elements } from './views/base';
import * as searchViews from './views/searchView';

/**Global state of an app
 * Search object
 * current receipe object
 * shopping list object
 * Liked recipes
 */

const state = {};

const controlSearch = async () => {
  // 1.get query from view
  const query = searchViews.getInput();

  // 2. new search object and add to the state
  state.search = new Search(query);

  // 3.prepare UiI for result
  searchViews.clearInput();
  searchViews.clearFields();

  // 4.Search for receipe
  await state.search.getResults();

  // 5. Render results on UI
  searchViews.renderResults(state.search.results);
};

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});
