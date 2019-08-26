<template>
   <div>
        <a id="ui_rmenu_photos" href="#" class="_ui_item_videos _ui_rmenu_subitem feed_section_videos ui_rmenu_subitem" 
        v-bind:class="{ui_rmenu_item_sel: important }">
            <span>{{ content }}</span>
        </a>
        <div class="more_div l_main"></div>
   </div>
</template>

<script>
export default {
    props: {
        content: String,
        important: Boolean
    },
}
</script>

<style lang="css" scoped>
body .ui_rmenu_subitem, body .ui_rmenu_subitem:hover {
    padding-left: 10px;
    text-align: left;   
}
.more_div {
    padding: 0px !important;
    margin: 0px !important;
}
</style>