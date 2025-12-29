<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="getGoalStars()" class="mr-1 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Yoshi Egg')  }"><img src="/img/smw/items/yoshi_egg.png" />x{{ getNumberItemsFromName('Yoshi Egg') }} </span> / {{ getGoalStars() }}</span>
            <span v-else class="mr-1 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Yoshi Egg')  }"><img src="/img/smw/items/yoshi_egg.png" />x{{ getNumberItemsFromName('Yoshi Egg') }} </span>

        </div>

        <div v-if="moveShuffled()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Moves</div>

            <img src="/img/smw/items/ysp_full.png" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Switch Palace')  }" />
            <img src="/img/smw/items/gsp_full.png" :class="{ 'opacity-25': !getNumberItemsFromName('Green Switch Palace')  }" />
            <img src="/img/smw/items/rsp_full.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Switch Palace')  }" />
            <img src="/img/smw/items/bsp_full.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Switch Palace')  }" />
            <span class="mr-2"></span>
            <img src="/img/smw/items/run.png" :class="{ 'opacity-25': !getNumberItemsFromName('Run')  }" />
            <img src="/img/smw/items/carry.png" :class="{ 'opacity-25': !getNumberItemsFromName('Carry')  }" />
            <img src="/img/smw/items/climb.png" :class="{ 'opacity-25': !getNumberItemsFromName('Climb')  }" />
            <img src="/img/smw/items/swim.png" :class="{ 'opacity-25': !getNumberItemsFromName('Swim')  }" />
            <img src="/img/smw/items/spin_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spin Jump')  }" />
            <img src="/img/smw/items/big_mario.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Powerup')  }" />
            <img src="/img/smw/items/fire_mario.png" :class="{ 'opacity-25': getNumberItemsFromName('Progressive Powerup') < 2  }" />
            <img src="/img/smw/items/cape_mario.png" :class="{ 'opacity-25': getNumberItemsFromName('Progressive Powerup') < 3 }" />
            <span class="mr-2"></span>
            <img src="/img/smw/items/p_switch.png" :class="{ 'opacity-25': !getNumberItemsFromName('P-Switch')  }" />
            <img src="/img/smw/items/p_balloon.png" :class="{ 'opacity-25': !getNumberItemsFromName('P-Balloon')  }" />
            <img src="/img/smw/items/star.png" :class="{ 'opacity-25': !getNumberItemsFromName('Super Star Activate')  }" />
        </div>
    </div>
</template>
    
<script>


    /**
    * Super Mario World
    *
    * Goal is to beat Bowser of get Yoshi's Eggs.
    * 
    */
export default {
  name: "gDataSuperMarioWorld",
        props: {
            data: Object,
            gamedata: Object,
            index: Number,
            checks_done: Number,
            total_checks: Number,
            player_name: String,
            player_game: String
  },
  data: function () {
    return {
    };
  },

        methods: {
            getImageClass: function () {
                if (this.$parent.$parent.$parent.OPTIONS.row_size) {
                    return 'iconbar-L my-1';
                }
                return 'iconbar-S';
            },
            getGoalStars: function () {
                if (this.data.slot_data.StarsToFinish) {
                    return this.data.slot_data.StarsToFinish;
                }
                return 0;
            },
            moveShuffled: function () {
                if (this.data.slot_data.MoveRandoVec) {
                    return this.data.slot_data.MoveRandoVec;
                }
                return 1;
            },
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (this.data.tracker_data.player_items_received[x][0] == id)
                            res++;
                    }
                }
                return res;
            }
        },
  components: {
  },
};
</script>
