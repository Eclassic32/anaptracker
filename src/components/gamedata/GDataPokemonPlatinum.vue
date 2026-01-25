<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img title="Coal Badge" src="/img/pokemon_platinum/coal_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coal Badge')  }" />
            <img title="Forest Badge" src="/img/pokemon_platinum/forest_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Forest Badge')  }" />
            <img title="Cobble Badge" src="/img/pokemon_platinum/cobble_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cobble Badge')  }" />
            <img title="Fen Badge" src="/img/pokemon_platinum/fen_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fen Badge')  }" />
            <img title="Relic Badge" src="/img/pokemon_platinum/relic_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Relic Badge')  }" />
            <img title="Mine Badge" src="/img/pokemon_platinum/mine_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mine Badge')  }" />
            <img title="Icicle Badge" src="/img/pokemon_platinum/icicle_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Icicle Badge')  }" />
            <img title="Beacon Badge" src="/img/pokemon_platinum/beacon_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Beacon Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img title="HM01 - Cut" src="/img/pokemon_emerald/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img title="HM02 - Fly" src="/img/pokemon_emerald/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img title="HM03 - Surf" src="/img/pokemon_emerald/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img title="HM04 - Strength" src="/img/pokemon_emerald/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img title="HM05 - Defog" src="/img/pokemon_emerald/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Defog')  }" />
            <img title="HM06 - Rock Smash" src="/img/pokemon_emerald/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Rock Smash')  }" />
            <img title="HM07 - Waterfall" src="/img/pokemon_emerald/items/hm07.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
            <img title="HM08 - Rock Climb" src="/img/pokemon_crystal/items/tm08.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM08 Rock Climb')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img title="Coupon 1" src="/img/pokemon_platinum/coupon1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coupon 1')  }" />
            <img title="Coupon 2" src="/img/pokemon_platinum/coupon2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coupon 2')  }" />
            <img title="Coupon 3" src="/img/pokemon_platinum/coupon3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Coupon 3')  }" />
            <img title="Bicycle" src="/img/pokemon_platinum/bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bicycle')  }" />
            <img title="Secret Potion" src="/img/pokemon_platinum/secret-potion.png" :class="{ 'opacity-25': !getNumberItemsFromName('Secret Potion')  }" />
            <img title="Powerplant Key" src="/img/pokemon_platinum/powerplant-key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Powerplant Key')  }" />
            <img title="Galaxy Key" src="/img/pokemon_platinum/galaxy-key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Galaxy Key')  }" />
            <img title="Warehouse Key" src="/img/pokemon_platinum/warehouse-key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Warehouse Key')  }" />
            <img title="Secret Key" src="/img/pokemon_platinum/secret-key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Secret Key')  }" />

        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon Platinum
    *
    * Goal is to beat Elite 4 and Cynthia.
    * You needs badges, like any other Pokemon game.
    * 
    */
export default {
  name: "gDataPokemonPlatinum",
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
                return [];
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
