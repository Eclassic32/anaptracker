<template>
    <div class="">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img src="/img/pokemon_emerald/items/stone_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Stone Badge')  }" />
            <img src="/img/pokemon_emerald/items/knuckle_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Knuckle Badge')  }" />
            <img src="/img/pokemon_emerald/items/dynamo_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dynamo Badge')  }" />
            <img src="/img/pokemon_emerald/items/heat_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Heat Badge')  }" />
            <img src="/img/pokemon_emerald/items/balance_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Balance Badge')  }" />
            <img src="/img/pokemon_emerald/items/feather_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Feather Badge')  }" />
            <img src="/img/pokemon_emerald/items/mind_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mind Badge')  }" />
            <img src="/img/pokemon_emerald/items/rain_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rain Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img src="/img/pokemon_crystal/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img src="/img/pokemon_crystal/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img src="/img/pokemon_crystal/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img src="/img/pokemon_crystal/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img src="/img/pokemon_crystal/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
            <img src="/img/pokemon_crystal/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Rock Smash')  }" />
            <img src="/img/pokemon_crystal/items/hm07.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
            <img src="/img/pokemon_crystal/items/tm08.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM08 Dive')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img src="/img/pokemon_emerald/items/itemfinder.png" :class="{ 'opacity-25': !getNumberItemsFromName('Itemfinder')  }" />
            <img src="/img/pokemon_emerald/items/acro_bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Acro Bike')  }" />
            <img src="/img/pokemon_emerald/items/mach_bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mach Bike')  }" />
            <img src="/img/pokemon_emerald/items/devon_goods.png" :class="{ 'opacity-25': !getNumberItemsFromName('Devon Goods')  }" />
            <img src="/img/pokemon_emerald/items/devon_scope.png" :class="{ 'opacity-25': !getNumberItemsFromName('Devon Scope')  }" />
            <img src="/img/pokemon_emerald/items/magma_emblem.png" :class="{ 'opacity-25': !getNumberItemsFromName('Magma Emblem')  }" />
            <img src="/img/pokemon_emerald/items/meteorite.png" :class="{ 'opacity-25': !getNumberItemsFromName('Meteorite')  }" />

        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Ticket</div>

            <img src="/img/pokemon_emerald/items/mystic_ticket.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mstic Ticket')  }" />
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
