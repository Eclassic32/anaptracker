<template>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

    </div>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Hitman 1</div>
        <!-- ICA Facility, Paris, Sapienza, Marrakesh, Bangkok, Colorado, Hokkaido -->

        <img title="ICA Facility" src="/img/hitman_woa/hitman_1/ica.webp" :class="{ 'opacity-25': !getNumberItemsFromName('Level - ICA Facility')  }" />
        <img title="Paris" src="/img/hitman_woa/hitman_1/paris.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Paris')  }" />
        <img title="Sapienza" src="/img/hitman_woa/hitman_1/sapienza.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Sapienza')  }" />
        <img title="Marrakesh" src="/img/hitman_woa/hitman_1/marrakesh.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Marrakesh')  }" />
        <img title="Bangkok" src="/img/hitman_woa/hitman_1/bangkok.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Bangkok')  }" />
        <img title="Colorado" src="/img/hitman_woa/hitman_1/colorado.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Colorado')  }" />
        <img title="Hokkaido" src="/img/hitman_woa/hitman_1/hokkaido.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Hokkaido')  }" />
    </div>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Hitman 2</div>
        <!-- Hawke's Bay, Miami, Santa Fortuna, Mumbai, Whittleton Creek, Isle of Sgàil, New York, Haven Island -->

        <img title="Hawke's Bay" src="/img/hitman_woa/hitman_2/hawkes_bay.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Hawke\'s Bay')  }" />
        <img title="Miami" src="/img/hitman_woa/hitman_2/miami.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Miami')  }" />
        <img title="Santa Fortuna" src="/img/hitman_woa/hitman_2/santa_fortuna.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Santa Fortuna')  }" />
        <img title="Mumbai" src="/img/hitman_woa/hitman_2/mumbai.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Mumbai')  }" />
        <img title="Whittleton Creek" src="/img/hitman_woa/hitman_2/whittleton_creek.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Whittleton Creek')  }" />
        <img title="Isle of Sgàil" src="/img/hitman_woa/hitman_2/isle_of_sgail.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Isle of Sgàil')  }" />
        <img title="New York" src="/img/hitman_woa/hitman_2/new_york.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - New York')  }" />
        <img title="Haven Island" src="/img/hitman_woa/hitman_2/haven_island.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Haven Island')  }" />
    </div>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Hitman 3</div>
        <!-- Dubai, Dartmoor, Berlin, Chongqing, Mendoza, Carpathian Mountains, Ambrose Island -->

        <img title="Dubai" src="/img/hitman_woa/hitman_3/dubai.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Dubai')  }" />
        <img title="Dartmoor" src="/img/hitman_woa/hitman_3/dartmoor.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Dartmoor')  }" />
        <img title="Berlin" src="/img/hitman_woa/hitman_3/berlin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Berlin')  }" />
        <img title="Chongqing" src="/img/hitman_woa/hitman_3/chongqing.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Chongqing')  }" />
        <img title="Mendoza" src="/img/hitman_woa/hitman_3/mendoza.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Mendoza')  }" />
        <img title="Carpathian Mountains" src="/img/hitman_woa/hitman_3/carpathian_mountains.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Carpathian Mountains')  }" />
        <img title="Ambrose Island" src="/img/hitman_woa/hitman_3/ambrose_island.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level - Ambrose Island')  }" />
    </div>
</template>

<script>
export default {
    name: "gDataHitmanWOA",
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
        /*
            Possible Goals:
            level_completion,
            contract_collection,
            contract_collection_level_completion,
            number_of_completions
        */
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
            if (this.data.slot_data.include_farewell)
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
    }
}
</script>