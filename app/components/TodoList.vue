<template>
    <div id="ui_rmenu_news_list" data-sublist-id="news" class="_ui_rmenu_sublist _ui_rmenu_news_list" >
       <todo-list-element 
       v-for="todo in todos" 
       v-bind:content="todo.content"
       v-bind:key="todo.id">

       </todo-list-element>
    </div>
</template>
<style lang="sass" scoped>

</style>
<script>
    import { mapGetters } from 'vuex';
    import TodoListElement from './TodoListElement.vue';
    export default {
        components: {
            TodoListElement,
        },
        computed: {
            ...mapGetters([
                'todos'
            ])
        }
    }
</script>