<template>
  <div :id="APP_NAME" class="appVue">
    <div class="page_block ui_rmenu ui_rmenu_pr _ui_rmenu_auto_expand" id="feed_rmenu" role="list" style=" border-radius: 5px;padding-top: 0;width: 150px;box-shadow: none !important;">
      <TodoHeader></TodoHeader>
      <TodoList> </TodoList>
      <TodoCreateElement></TodoCreateElement>
    </div>
  </div>
</template>

<script>
import  TodoHeader from './TodoHeader.vue';
import  TodoList from './TodoList.vue';
import TodoCreateElement from './TodoCreateElement.vue';
import { mapMutations } from "vuex";
import store from '../store.js';
export default {
  name: "app",
  store,
  components: {
    TodoHeader,
    TodoList,
    TodoCreateElement,
  },

};
</script>

<style lang="scss" scoped>
.feed_filter_icon:hover{
  opacity: 1 !important;
}
.ui_rmenu_subitem.ui_rmenu_item_sel, .ui_rmenu_subitem.ui_rmenu_item_sel:hover {
  padding: 0px;
}
.appVue {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page_block {
  padding-bottom: 0px;
  position: relative;
}

</style>