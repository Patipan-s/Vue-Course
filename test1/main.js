Vue.component("alert-box", {
  template: `
    <div class="alert alert-danger">
      <span>Error!</span>
      <slot></slot>
    </div>
  `
});

new Vue({
  el: "#blog-posts-events-demo",
  data: {
    currentTabComponent: { content: "aaa" },
  }
});
