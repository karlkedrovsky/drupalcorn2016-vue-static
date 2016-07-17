var SpawnOfFoo = Vue.extend({
  template: '<p>The Spawn Of Foo Component</p>'
});

var Foo = Vue.extend({
  template: '<p>The Foo Component</p><p><spawn-of-foo></spawn-of-foo></p>',
  components: {
    'spawn-of-foo': SpawnOfFoo
  }
});
Vue.component('foo', Foo);

var Bar = Vue.extend({
  template: '<p>The Bar Component</p>'
});
Vue.component('bar', Bar);

new Vue({
  el: '#app'
});
