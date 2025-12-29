<template>
    <div class="">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img src="/img/pokemon_frlg/badges/boulder_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boulder Badge')  }" />
            <img src="/img/pokemon_frlg/badges/cascade_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cascade Badge')  }" />
            <img src="/img/pokemon_frlg/badges/thunder_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Badge')  }" />
            <img src="/img/pokemon_frlg/badges/rainbow_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Badge')  }" />
            <img src="/img/pokemon_frlg/badges/soul_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Soul Badge')  }" />
            <img src="/img/pokemon_frlg/badges/marsh_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Marsh Badge')  }" />
            <img src="/img/pokemon_frlg/badges/volcano_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Volcano Badge')  }" />
            <img src="/img/pokemon_frlg/badges/earth_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img src="/img/pokemon_frlg/hms/hm1.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img src="/img/pokemon_frlg/hms/hm2.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img src="/img/pokemon_frlg/hms/hm3.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img src="/img/pokemon_frlg/hms/hm4.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img src="/img/pokemon_frlg/hms/hm5.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
            <img src="/img/pokemon_frlg/hms/hm6.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Rock Smash')  }" />
            <img src="/img/pokemon_frlg/hms/hm7.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img src="/img/pokemon_frlg/other/bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bike')  }" />
            <img src="/img/pokemon_frlg/other/card_key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Card Key')  }" />
            <img src="/img/pokemon_crystal/items/tea.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tea')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon FireRed and LeafGreen
    *
    * Goal is to beat Elite 4 (either Round 1 or 2).
    * You needs badges, like any other Pokemon game.
    * 
    */
export default {
  name: "gDataPokemonFRLG",
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
