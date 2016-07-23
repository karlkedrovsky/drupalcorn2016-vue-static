var Foo = Vue.extend({
  template: '<p>The Foo Component</p>'
});
Vue.component('foo', Foo);

var Bar = Vue.extend({
  template: '<p>The Bar Component</p>'
});
Vue.component('bar', Bar);

new Vue({
  el: '#app'
});
