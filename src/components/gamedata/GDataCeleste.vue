<template>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

        <span v-if="getGoalStrawberries()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span> / {{ getGoalStrawberries() }}</span>
        <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span>

    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Switches')  }">DSwiches</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Refills')  }">DRefills</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Double Dash Refills')  }">DDRefills</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Springs')  }">Springs</span>
        <img src="/img/celeste/misc/blue_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Boosters')  }" />
        <img src="/img/celeste/misc/red_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Boosters')  }" />
        <img src="/img/celeste/misc/badeline_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Badeline Boosters')  }" />
        <img src="/img/celeste/misc/bumper.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bumpers')  }" />
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Coins')  }">Coins</span>
        <img src="/img/celeste/misc/feather.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feathers')  }" />
        <img src="/img/celeste/misc/seeker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Seekers')  }" />
        <span class="mr-2"></span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Cassette Blocks')  }">BlueCB</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Green Cassette Blocks')  }">GreenCB</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Cassette Blocks')  }">PinkCB</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Cassette Blocks')  }">YellowCB</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Clouds')  }">PinkClds</span>
        <span class="mr-2"></span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Blocks')  }">BlueBlks</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Move Blocks')  }">MoveBlks</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Traffic Blocks')  }">TrafficBlks</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Swap Blocks')  }">SwapBlks</span>
        <span class="font-medium text-[9px] mr-2" :class="{ 'opacity-25': !getNumberItemsFromName('Dream Blocks')  }">DreamBlks</span>
    </div>
</template>
    
<script>

    /**
    * Celeste (Open World)
    *
    * Goal is to complete the goal area
    * It can be :
    *   - The Summit (A, B or C)
    *   - Core (A, B or C)
    *   - Empty Space
    *   - Farewell (Vanilla or Golden)
    * Strawberries are usually required to beat that area.
    * 
    */
export default {
  name: "gDataCeleste",
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
                if (this.$parent.$parent.$parent.OPTIONS.row_size == 2) {
                    return 'iconbar-L my-1';
                }
                else if (this.$parent.$parent.$parent.OPTIONS.row_size == 1) {
                    return 'iconbar-M';
                }
                return 'iconbar-S';
            },
            getGoalStrawberries: function () {
                if (this.data.slot_data.strawberries_required) {
                    return this.data.slot_data.strawberries_required;
                }
                return 0;
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
