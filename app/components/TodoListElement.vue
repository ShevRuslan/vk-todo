<template>
   <a id="ui_rmenu_photos" href="#" class="_ui_item_videos _ui_rmenu_subitem feed_section_videos   ui_rmenu_subitem">
        <span>{{ content }}</span>
    </a>
</template>

<script>
export default {
    props: {
        content: String
    }
}
</script>

<style lang="css" scoped>
body .ui_rmenu_subitem, body .ui_rmenu_subitem:hover {
    padding-left: 10px;
    text-align: left;   
    
}
</style>