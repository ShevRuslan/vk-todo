<template>
    <div class="wrapper-create" 
        v-bind:style="wrapperCreateStyle"
    >
       <div class="wrapper-input-create">
            <input type="text"  class="text ts_input" id="ts_input" autocomplete="off" name="disable-autofill" >
       </div>
        <div class="line_cell clear_fix ui_rmenu_item_sel">
            <div class="option_name">Создать задачу!</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['isOpen']),
        wrapperCreateStyle() {
            console.log(this.isOpen);
            return {
                'max-height': this.isOpen ? '100%' : 0,
                'height': 'calc(100% - 32px)'
            }
        }
    },
    
}
</script>
<style lang="css" scoped>
    input.text.ts_input {
        width: 100%;
    }
    div.wrapper-create {
        position: absolute;
        top: 33px;
        background-color: white;
        max-height: 100%;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
        display: flex;
        flex-direction: column;
    }
    div.wrapper-input-create {
        padding: 5px;
    }
    input.text.ts_input:focus {
        background-color: #224b7a;
        color: #fff;
    }
    div.line_cell {
        display: flex;
        align-items: center;
        height: 100%;
    }
</style>