<template>
    <a id="ui_rmenu_news" href="#" class="ui_rmenu_item _ui_item_news feed_section_news" style="padding-left: 10px;position: relative;box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);border-radius: 5px 5px 0 0;">
        <span>
          <div class="ui_actions_menu_wrap _ui_menu_wrap feed_lists_icon ui_actions_menu_sublist" id="feed_add_list_icon" onmousedown="Feed.toggleTabsMenu(event);" onclick="return cancelEvent(event)">
             <div class="feed_filter_icon" style="background: url(/images/icons/edit_newsfeed.png) no-repeat 4px 4px; position: static;top: auto; bottom: auto;left: auto;right: auto;float: right;width: 20px;height: 20px;margin: 6px 1px 0 0;opacity: 0.7;"></div>
            <div class="feed_filter_icon" style="background: url(/images/icons/edit_newsfeed.png) no-repeat 3px -12px; float: right;margin: 6px 4px 0 0;width: 20px;height: 20px;opacity: 0.75;"></div>
          </div>
          <span style="display: flex;align-items: center;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24" style="width: 16px;height: 16px;padding-right: 10px;">
              <path
                style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Bitstream Vera Sans"
                fill="#ffc000"
                d="M 8.53125 2.0625 L 5.03125 5.21875 L 3.5 3.6875 L 2.09375 5.09375 L 4.28125 7.3125 L 4.96875 7.96875 L 5.65625 7.34375 L 9.875 3.53125 L 8.53125 2.0625 z M 12 5 L 12 7 L 22 7 L 22 5 L 12 5 z M 8.53125 9.0625 L 5.03125 12.21875 L 3.5 10.6875 L 2.09375 12.09375 L 4.28125 14.3125 L 4.96875 14.96875 L 5.65625 14.34375 L 9.875 10.53125 L 8.53125 9.0625 z M 12 12 L 12 14 L 22 14 L 22 12 L 12 12 z M 8.53125 16.0625 L 5.03125 19.21875 L 3.5 17.6875 L 2.09375 19.09375 L 4.28125 21.3125 L 4.96875 21.96875 L 5.65625 21.34375 L 9.875 17.53125 L 8.53125 16.0625 z M 12 19 L 12 21 L 22 21 L 22 19 L 12 19 z"
              />
            </svg>
            <span>Список дел</span>
          </span>
        </span>
      </a>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
    
}
</script>