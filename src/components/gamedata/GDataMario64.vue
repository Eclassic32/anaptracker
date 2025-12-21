<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <span class="mr-2 text-xs" :class="{ 'opacity-25': !getNumberItemsFromName('Power Star')  }"><img src="/img/sm64/star.png" class="inline-block w-[16px] h-[16px]" />x{{ getNumberItemsFromName('Power Star') }} </span>

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
            <img src="/img/sm64/blocks/block_red.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wing Cap')  }" />
            <img src="/img/sm64/blocks/block_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Vanish Cap')  }" />
            <img src="/img/sm64/blocks/block_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Metal Cap')  }" />

            <img src="/img/sm64/moves/climb.png" :class="{ 'opacity-25': !getNumberItemsFromName('Climb')  }" />
            <img src="/img/sm64/moves/ledge_grab.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ledge Grab')  }" />
            <img src="/img/sm64/moves/ground_pound.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ground Pound')  }" />
            <img src="/img/sm64/moves/triple_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Triple Jump')  }" />
            <img src="/img/sm64/moves/long_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Long Jump')  }" />
            <img src="/img/sm64/moves/wall_jump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wall Kick')  }" />
            <img src="/img/sm64/moves/sideflip.png" :class="{ 'opacity-25': !getNumberItemsFromName('Side Flip')  }" />
            <img src="/img/sm64/moves/backflip.png" :class="{ 'opacity-25': !getNumberItemsFromName('Backflip')  }" />
            <img src="/img/sm64/moves/kick.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kick')  }" />
            <img src="/img/sm64/moves/dive.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dive')  }" />
        </div>
    </div>
</template>
    
<script>

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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (this.data.player_items_received[this.index].items[x][0] == id)
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
