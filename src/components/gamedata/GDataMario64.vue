<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="getGoalStars()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Power Star')  }"><img src="/img/sm64/star.png" />x{{ getNumberItemsFromName('Power Star') }} </span> / {{ getGoalStars() }}</span>
            <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Power Star')  }"><img src="/img/sm64/star.png" />x{{ getNumberItemsFromName('Power Star') }} </span>

            <img src="/img/sm64/keys/key_basement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Basement Key') && !getNumberItemsFromName('Progressive Key')  }" />
            <img src="/img/sm64/keys/key_upstairs.png" :class="{ 'opacity-25': !getNumberItemsFromName('Upstarirs Key') && getNumberItemsFromName('Progressive Key') < 2  }" />
            <!--
    <img v-if="getNumberItemsFromName('Progressive Key') > 1" src="/img/sm64/keys/key_both.png" class="inline-block mr-1 w-[16px] h-[16px]" />
    <img v-else-if="getNumberItemsFromName('Progressive Key') > 0" src="/img/sm64/keys/key_basement.png" class="inline-block mr-1 w-[16px] h-[16px]" />
    <img v-else-if="getNumberItemsFromName('Upstairs Key') && getNumberItemsFromName('Basement Key')" src="/img/sm64/keys/key_both.png" class="inline-block mr-1 w-[16px] h-[16px]" />
    <img v-else-if="getNumberItemsFromName('Upstairs Key')" src="/img/sm64/keys/key_upstairs.png" class="inline-block mr-1 w-[16px] h-[16px]" />
    <img v-else-if="getNumberItemsFromName('Basement Key')" src="/img/sm64/keys/key_basement.png" class="inline-block mr-1 w-[16px] h-[16px]" />
    <img v-else src="/img/sm64/keys/key.png" class="inline-block mr-1 w-[16px] h-[16px] opacity-25" />
    -->
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

            <img src="/img/sm64/blocks/block_red.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wing Cap')  }" />
            <img src="/img/sm64/blocks/block_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Vanish Cap')  }" />
            <img src="/img/sm64/blocks/block_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Metal Cap')  }" />

            <img v-if="moveShuffled()" src="/img/sm64/moves/climb.png" :class="{ 'opacity-25': !getNumberItemsFromName('Climb')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/ledge_grab.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ledge Grab')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/ground_pound.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ground Pound')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/triple_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Triple Jump')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/long_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Long Jump')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/wall_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wall Kick')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/sideflip.png" :class="{ 'opacity-25': !getNumberItemsFromName('Side Flip')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/backflip.png" :class="{ 'opacity-25': !getNumberItemsFromName('Backflip')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/kick.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kick')  }" />
            <img v-if="moveShuffled()" src="/img/sm64/moves/dive.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dive')  }" />
        </div>
    </div>
</template>
    
<script>

/**
* Super Mario 64
* 
* Goal is mainly determined by the Power Stars required to get through the infinite stairs.
* You also need at least the Upper Key (depending on Key settings).
* 
* By default, we always consider that move shuffle is on.
*/ 
export default {
  name: "gDataMario64",
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
