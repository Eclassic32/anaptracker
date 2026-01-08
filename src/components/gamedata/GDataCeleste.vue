<template>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

        <span v-if="getGoalStrawberries()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img title="Strawberry" src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span> / {{ getGoalStrawberries() }}</span>
        <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img title="Strawberry" src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span>

    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

        <img title="Dash Refills" src="/img/celeste/misc/dash_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Refills')  }" />
        <img title="Double Dash Refills" src="/img/celeste/misc/double_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Double Dash Refills')  }" />
        <img title="Spings" src="/img/celeste/misc/spring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Springs')  }" />
        <img title="Blue Boosters" src="/img/celeste/misc/blue_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Boosters')  }" />
        <img title="Red Boosters" src="/img/celeste/misc/red_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Boosters')  }" />
        <img title="Badeline Boosters" src="/img/celeste/misc/badeline_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Badeline Boosters')  }" />
        <img title="Bumpers" src="/img/celeste/misc/bumper.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bumpers')  }" />
        <img title="Dash Switches" src="/img/celeste/misc/dash_switch.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Switches')  }" />
        <img title="Coins" src="/img/celeste/misc/coin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coins')  }" />
        <img title="Feathers" src="/img/celeste/misc/feather.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feathers')  }" />
        <img title="Seekers" src="/img/celeste/misc/seeker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Seekers')  }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Blocks</div>
        <img title="Blue Cassette Blocks" src="/img/celeste/misc/cassette_b_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Cassette Blocks')  }" />
        <img title="Pink Cassette Blocks" src="/img/celeste/misc/cassette_b_pink.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Cassette Blocks')  }" />
        <img title="Green Cassette Blocks" src="/img/celeste/misc/cassette_b_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Green Cassette Blocks')  }" />
        <img title="Yellow Cassette Blocks" src="/img/celeste/misc/cassette_b_yellow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Cassette Blocks')  }" />
        <span class="mr-2"></span>
        <img title="Traffic Blocks" src="/img/celeste/misc/traffic_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Traffic Blocks')  }" />
        <img title="Kevins Blocks" src="/img/celeste/misc/blue_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kevins')  }" />
        <img title="Move Blocks" src="/img/celeste/misc/move_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Move Blocks')  }" />
        <img title="Swap Blocks" src="/img/celeste/misc/swap_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Swap Blocks')  }" />
        <img title="Pink Clouds" src="/img/celeste/misc/pink_clouds.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Clouds')  }" />
        <img title="Dream Blocks" src="/img/celeste/misc/dream_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream Blocks')  }" />
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
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            getGoalStrawberries: function () {
                if (this.data.slot_data.strawberries_required) {
                    return this.data.slot_data.strawberries_required;
                }
                return 0;
            }
        },
  components: {
  },
};
</script>
