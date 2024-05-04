import { watchSearch } from './search/searchSaga.js';

export default function* rootSaga() {
  yield watchSearch();
}
