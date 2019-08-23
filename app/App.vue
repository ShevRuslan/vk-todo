<template>
  <div :id="APP_NAME" class="appVue">
    <div
      class="page_block ui_rmenu ui_rmenu_pr _ui_rmenu_auto_expand"
      id="feed_rmenu"
      role="list"
      style="
  border-radius: 5px;
  padding-top: 0;
  width: 160px;
  box-shadow: none !important;
"
    >
      <a
        id="ui_rmenu_news"
        href="/feed"
        class="ui_rmenu_item _ui_item_news feed_section_news"
        onclick="return nav.go(this, event);"
        style="
  padding-left: 10px;
  position: relative;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px 5px 0 0;
"
      >
        <span>
          <div
            class="ui_actions_menu_wrap _ui_menu_wrap feed_lists_icon ui_actions_menu_sublist"
            id="feed_add_list_icon"
            onmousedown="Feed.toggleTabsMenu(event);"
            onclick="return cancelEvent(event)"
          >
            <div
              class="ui_actions_menu_icons"
              tabindex="0"
              aria-label="Действия"
              role="button"
              onclick="uiActionsMenu.keyToggle(this, event);"
            >
              <span class="blind_label">Действия</span>
            </div>
            <div class="ui_actions_menu _ui_menu" onmousedown="event.cancelBubble = true;">
              <div
                class="ui_actions_menu_item checked"
                onclick="feed.checkTabsFilter(this, 'photos');"
              >Фотографии</div>
              <div
                class="ui_actions_menu_item checked"
                onclick="feed.checkTabsFilter(this, 'videos');"
              >Видеозаписи</div>
              <div
                class="ui_actions_menu_item"
                onclick="feed.checkTabsFilter(this, 'friends');"
              >Друзья</div>
              <div
                class="ui_actions_menu_item"
                onclick="feed.checkTabsFilter(this, 'groups');"
              >Сообщества</div>
              <div
                class="ui_actions_menu_item checked"
                onclick="feed.checkTabsFilter(this, 'podcasts');"
              >Подкасты</div>
              <div
                class="ui_actions_menu_item _feed_custom_ti2019"
                onclick="feed.checkTabsFilter(this, 'ti2019');"
              >
                The
                International 2019
              </div>
              <div
                class="ui_actions_menu_item feed_custom_list feed_filter_list1"
                onclick="feed.checkTabsFilter(this, 'list1');"
              >
                <div
                  class="ui_actions_menu_hide"
                  onclick="feed.deleteList(1, 'Аз', false, event);"
                  onmouseover="showTitle(this, 'Удалить вкладку')"
                ></div>
                <div class="ui_actions_menu_item_label">Аз</div>
              </div>
              <div class="ui_actions_menu_sep"></div>
              <div
                class="ui_actions_menu_item feed_new_list"
                onclick="feed.checkTabsFilter(this, 'newlist');"
              >
                Добавить
                вкладку
              </div>
            </div>
          </div>
          <div class="feed_filter_icon" onclick="cancelEvent(event); return feed.editHidden();"></div>

          <span style="
  display: flex;
  align-items: center;
">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enable-background="new 0 0 24 24"
              style="
  width: 16px;
  height: 16px;
  padding-right: 10px;
"
            >
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
      <div
        id="ui_rmenu_news_list"
        data-sublist-id="news"
        class="_ui_rmenu_sublist _ui_rmenu_news_list"
        style="
"
      >
        <a
          id="ui_rmenu_photos"
          href="/feed?section=photos"
          class="ui_rmenu_subitem _ui_rmenu_subitem _ui_item_photos feed_section_photos"
          onclick="return nav.go(this, event);"
        >
          <span>Выучить Vuex</span>
        </a>
        <a
          id="ui_rmenu_videos"
          href="/feed?section=videos"
          class="_ui_item_videos _ui_rmenu_subitem feed_section_videos ui_rmenu_item_sel ui_rmenu_subitem"
          onclick="return nav.go(this, event);"
        >
          <span>Написать список дел</span>
        </a>
        <a
          id="ui_rmenu_friends"
          href="/feed?section=friends"
          class="ui_rmenu_subitem _ui_rmenu_subitem _ui_item_friends feed_section_friends"
          onclick="return nav.go(this, event);"
        >
          <span>Встроить список в вк</span>
        </a>
        <a
          id="ui_rmenu_groups"
          href="/feed?section=groups"
          class="ui_rmenu_subitem _ui_rmenu_subitem _ui_item_groups feed_section_groups"
          onclick="return nav.go(this, event);"
        >
          <span>Прокачать список дел</span>
        </a>
      </div>
      <div class="ui_rmenu_slider _ui_rmenu_slider"></div>
    </div>
  </div>
</template>

<script>
import SStorage from "./scripts/sstorage";
import { mapMutations } from "vuex";

export default {
  name: "app",
  data() {
    return {
      defaultRouteName: "HelloWorld"
    };
  }
};
</script>

<style lang="scss" scoped>
.appVue {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  cursor: pointer;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

a.router-link-active {
  color: #ffc000 !important;
}
</style>