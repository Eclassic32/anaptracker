<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img title="Stone Badge" src="/img/pokemon_emerald/items/stone_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Stone Badge')  }" />
            <img title="Knuckle Badge" src="/img/pokemon_emerald/items/knuckle_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckle Badge')  }" />
            <img title="Dynamo Badge" src="/img/pokemon_emerald/items/dynamo_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dynamo Badge')  }" />
            <img title="Heat Badge" src="/img/pokemon_emerald/items/heat_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Heat Badge')  }" />
            <img title="Balance Badge" src="/img/pokemon_emerald/items/balance_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Balance Badge')  }" />
            <img title="Feather Badge" src="/img/pokemon_emerald/items/feather_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feather Badge')  }" />
            <img title="Mind Badge" src="/img/pokemon_emerald/items/mind_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mind Badge')  }" />
            <img title="Rain Badge" src="/img/pokemon_emerald/items/rain_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rain Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img title="HM01 - Cut" src="/img/pokemon_emerald/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img title="HM02 - Fly" src="/img/pokemon_emerald/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img title="HM03 - Surf" src="/img/pokemon_emerald/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img title="HM04 - Strength" src="/img/pokemon_emerald/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img title="HM05 - Flash" src="/img/pokemon_emerald/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
            <img title="HM06 - Rock Smash" src="/img/pokemon_emerald/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Rock Smash')  }" />
            <img title="HM07 - Waterfall" src="/img/pokemon_emerald/items/hm07.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
            <img title="HM08 - Dive" src="/img/pokemon_emerald/items/hm08.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM08 Dive')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img v-if="itemfinderRequired()" title="Itemfinder" src="/img/pokemon_emerald/items/itemfinder.png" :class="{ 'opacity-25': !getNumberItemsFromName('Itemfinder')  }" />
            <img title="Acro Bike" src="/img/pokemon_emerald/items/acro_bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Acro Bike')  }" />
            <img title="Mach Bike" src="/img/pokemon_emerald/items/mach_bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mach Bike')  }" />
            <img title="Devon Goods" src="/img/pokemon_emerald/items/devon_goods.png" :class="{ 'opacity-25': !getNumberItemsFromName('Devon Goods')  }" />
            <img title="Devon Scope" src="/img/pokemon_emerald/items/devon_scope.png" :class="{ 'opacity-25': !getNumberItemsFromName('Devon Scope')  }" />
            <img title="Magma Emblem" src="/img/pokemon_emerald/items/magma_emblem.png" :class="{ 'opacity-25': !getNumberItemsFromName('Magma Emblem')  }" />
            <img title="Meteorite" src="/img/pokemon_emerald/items/meteorite.png" :class="{ 'opacity-25': !getNumberItemsFromName('Meteorite')  }" />
            <img title="S.S. Ticket" src="/img/pokemon_emerald/items/ss_ticket.png" :class="{ 'opacity-25': !getNumberItemsFromName('S.S. Ticket')  }" />
            <img title="Go Goggles" src="/img/pokemon_emerald/items/go_goggles.png" :class="{ 'opacity-25': !getNumberItemsFromName('Go Goggles')  }" />
            <img title="Storage Key" src="/img/pokemon_emerald/items/storage_key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Storage Key')  }" />

        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Ticket</div>

            <img title="Thank you for the Mystic Ticket !" src="/img/pokemon_emerald/items/mystic_ticket.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mystic Ticket')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon Emerald
    *
    * Goal is to beat Elite 4 or Steven.
    * You needs badges, like any other Pokemon game.
    * 
    */
export default {
  name: "gDataPokemonEmerald",
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
                var row_goal = { title: 'Goal', value: null, details: null };
                var row_badges = { title: 'Badges required', value: null, details: null };

                if (this.data.slot_data.goal == 0) {
                    row_goal.value = 'Elite 4';
                    if (this.data.slot_data.elite_four_requirement == 1)
                        row_badges.title = 'Gyms to vainquish';
                    row_badges.value = this.data.slot_data.elite_four_count;
                }
                else if (this.data.slot_data.goal == 1) {
                    row_goal.value = 'Steven';
                    if (this.data.slot_data.elite_four_requirement == 1)
                        row_badges.title = 'Gyms to vainquish';
                    row_badges.value = this.data.slot_data.elite_four_count;
                }
                if (this.data.slot_data.goal == 2) {
                    row_goal.value = 'Norman';
                    if (this.data.slot_data.norman_requirement == 1)
                        row_badges.title = 'Gyms to vainquish';
                    row_badges.value = this.data.slot_data.norman_count;
                }
                if (this.data.slot_data.goal == 3) {
                    row_goal.value = 'Legendary Hunt';
                    row_badges = { title: 'Number to catch', value: this.data.slot_data.legendary_hunt_count, details: null };
                }

                res.push(row_goal);
                if (row_badges.value)
                    res.push(row_badges);


                var row_roadblocks = { title: 'Extra roadblocks', value: null, details: null };
                var dlcs = [];
                if (this.data.slot_data.extra_boulders)
                    dlcs.push('Route 115 Boulders');
                if (this.data.slot_data.extra_bumpy_slope)
                    dlcs.push('Route 115 Bumpy Slope');
                if (this.data.slot_data.modify_118)
                    dlcs.push('Route 118 Accro Bike');
                if (dlcs.length) {
                    row_roadblocks.value = dlcs.join(', ');
                    res.push(row_roadblocks);
                }

                row_roadblocks = { title: 'Removed', value: null, details: null };
                if (this.data.slot_data.remove_roadblocks.length) {
                    row_roadblocks.value = this.data.slot_data.remove_roadblocks.join(', ');
                    res.push(row_roadblocks);
                }


                return res;
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            itemfinderRequired: function () {
                if (this.data.slot_data.hasOwnProperty('require_itemfinder')) {
                    return this.data.slot_data.require_itemfinder;
                }
                return 1;
            }
            
        },
  components: {
  },
};
</script>
