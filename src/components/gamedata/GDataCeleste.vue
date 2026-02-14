<template>
    <div v-if="strawberriesRequired()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

        <span v-if="getGoalStrawberries()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img title="Strawberry" src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span> / {{ getGoalStrawberries() }}</span>
        <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Strawberry')  }"><img title="Strawberry" src="/img/celeste/items/berry.png" />x{{ getNumberItemsFromName('Strawberry') }} </span>

    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Abilities</div>

        <img title="Dash Refills" src="/img/celeste/misc/dash_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Refills')  }" />
        <img v-if="includeFarewell()" title="Double Dash Refills" src="/img/celeste/misc/double_refill.png" :class="{ 'opacity-25': !getNumberItemsFromName('Double Dash Refills')  }" />
        <img title="Spings" src="/img/celeste/misc/spring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Springs')  }" />
        <img title="Moving Platforms" src="/img/celeste/misc/moving_platform.png" :class="{ 'opacity-25': !getNumberItemsFromName('Moving Platforms')  }" />
        <img title="Sinking Platforms" src="/img/celeste/misc/sinking_platform.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sinking Platforms')  }" />
        <img title="Blue Boosters" src="/img/celeste/misc/blue_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Boosters')  }" />
        <img title="Red Boosters" src="/img/celeste/misc/red_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Red Boosters')  }" />
        <img title="Badeline Boosters" src="/img/celeste/misc/badeline_booster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Badeline Boosters')  }" />
        <img title="Bumpers" src="/img/celeste/misc/bumper.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bumpers')  }" />
        <img title="Dash Switches" src="/img/celeste/misc/dash_switch.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Switches')  }" />
        <img title="Coins" src="/img/celeste/misc/coin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coins')  }" />
        <img title="Feathers" src="/img/celeste/misc/feather.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feathers')  }" />
        <img title="Seekers" src="/img/celeste/misc/seeker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Seekers')  }" />
        <img v-if="includeFarewell()" title="Jellyfish" src="/img/celeste/misc/jellyfish.png" :class="{ 'opacity-25': !getNumberItemsFromName('Jellyfish')  }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Blocks</div>
        <img title="Blue Cassette Blocks" src="/img/celeste/misc/cassette_b_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Cassette Blocks')  }" />
        <img title="Pink Cassette Blocks" src="/img/celeste/misc/cassette_b_pink.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pink Cassette Blocks')  }" />
        <img v-if="includeFarewell() == 2" title="Green Cassette Blocks" src="/img/celeste/misc/cassette_b_green.png" :class="{ 'opacity-25': !getNumberItemsFromName('Green Cassette Blocks')  }" />
        <img v-if="includeFarewell() == 2" title="Yellow Cassette Blocks" src="/img/celeste/misc/cassette_b_yellow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Yellow Cassette Blocks')  }" />
        <span class="mr-2"></span>
        <img title="Traffic Blocks" src="/img/celeste/misc/traffic_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Traffic Blocks')  }" />
        <img title="Kevins Blocks" src="/img/celeste/misc/blue_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kevins')  }" />
        <img title="Move Blocks" src="/img/celeste/misc/move_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Move Blocks')  }" />
        <img title="Swap Blocks" src="/img/celeste/misc/swap_block.png" :class="{ 'opacity-25': !getNumberItemsFromName('Swap Blocks')  }" />
        <img title="Blue Clouds" src="/img/celeste/misc/blue_clouds.png" :class="{ 'opacity-25': !getNumberItemsFromName('Blue Clouds')  }" />
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
    * GOAL AREA :
    * 0: "7a"
    * 1: "7b"
    * 2: "7c"
    * 3: "9a"
    * 4: "9b"
    * 5: "9c"
    * 6: "10a"
    * 7: "10b"
    * 8: "10c"
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
            getGoalDetails: function () {
                if (!this.$parent.hasSlotData())
                    return [];
                var res = [];
                var row_goal = { title: 'Goal area', value: null, details: null };

                if (this.data.slot_data.goal_area == '7a') {
                    row_goal.value = 'The Summit A';
                }
                else if (this.data.slot_data.goal_area == '7b') {
                    row_goal.value = 'The Summit B';
                }
                else if (this.data.slot_data.goal_area == '7c') {
                    row_goal.value = 'The Summit C';
                }
                else if (this.data.slot_data.goal_area == '9a') {
                    row_goal.value = 'Core A';
                }
                else if (this.data.slot_data.goal_area == '9b') {
                    row_goal.value = 'Core B';
                }
                else if (this.data.slot_data.goal_area == '9c') {
                    row_goal.value = 'Core C';
                }
                else if (this.data.slot_data.goal_area == '10a') {
                    row_goal.value = 'Empty Space';
                }
                else if (this.data.slot_data.goal_area == '10b') {
                    row_goal.value = 'Faerwell';
                }
                else if (this.data.slot_data.goal_area == '10c') {
                    row_goal.value = 'Farewell Golden';
                }
                res.push(row_goal);

                var dlcs = [];
                if (this.data.slot_data.include_b_sides)
                    dlcs.push('B Sides');
                if (this.data.slot_data.include_c_sides)
                    dlcs.push('C Sides');
                if (this.data.slot_data.include_core)
                    dlcs.push('Core');
                if (this.data.slot_data.include_farewell)
                    dlcs.push('Empty Space');
                if (this.data.slot_data.include_farewell == 2)
                    dlcs.push('Farewell');
                if (this.data.slot_data.include_golden)
                    dlcs.push('Golden Strawberries');


                var row_dlc = { title: 'Included', value: null, details: null };
                if (dlcs.length) {
                    row_dlc.value = dlcs.join(', ');
                    res.push(row_dlc);
                }




                return res;
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            goalLocked: function() {
                if (this.data.slot_data.hasOwnProperty('lock_goal_area')) {
                    return this.data.slot_data.lock_goal_area;
                }
                return 1;
                  
            },
            strawberriesRequired: function () {
                if (this.data.slot_data.hasOwnProperty('strawberries_required')) {
                    return this.data.slot_data.strawberries_required;
                }
                return 1;
            },
            getGoalStrawberries: function () {
                if (this.data.slot_data.hasOwnProperty('strawberries_required')) {
                    return this.data.slot_data.strawberries_required;
                }
                return 0;
            },
            includeFarewell: function () {
                if (this.data.slot_data.hasOwnProperty('include_farewell')) {
                    return this.data.slot_data.include_farewell;
                }
                return 2;
            },
            includeFarewellCSide: function () {
                if (this.data.slot_data.hasOwnProperty('include_farewell')) {
                    return this.data.slot_data.include_farewell && this.data.slot_data.include_c_sides;
                }
                return 1;
            }
        },
  components: {
  },
};
</script>
