<template>
    <div id="ui_rmenu_news_list" data-sublist-id="news" class="_ui_rmenu_sublist _ui_rmenu_news_list">
       <todo-list-element></todo-list-element>
    </div>
</template>
<style lang="sass" scoped>

</style>
<script>
    import TodoListElement from './TodoListElement.vue';
    export default {
        components: {
            TodoListElement,
        }
    }
</script>