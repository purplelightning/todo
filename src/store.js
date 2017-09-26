const STORATE_KEY = 'todos-vuejs';//用于在localstorage中存储数据
export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORATE_KEY) || '[]');
  },
  save(items) {
    window.localStorage.setItem(STORATE_KEY, JSON.stringify(items));
  }
}
