<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img title="Trio Badge" src="/img/pokemon_black_white/trio_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Trio Badge')  }" />
            <img title="Basic Badge" src="/img/pokemon_black_white/basic_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Basic Badge')  }" />
            <img title="Insect Badge" src="/img/pokemon_black_white/insect_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Insect Badge')  }" />
            <img title="Bolt Badge" src="/img/pokemon_black_white/bolt_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bolt Badge')  }" />
            <img title="Quake Badge" src="/img/pokemon_black_white/quake_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Quake Badge')  }" />
            <img title="Jet Badge" src="/img/pokemon_black_white/jet_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Jet Badge')  }" />
            <img title="Freeze Badge" src="/img/pokemon_black_white/freeze_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Freeze Badge')  }" />
            <img title="Legend Badge" src="/img/pokemon_black_white/legend_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Legend Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img title="HM01 - Cut" src="/img/pokemon_emerald/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img title="HM02 - Fly" src="/img/pokemon_emerald/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img title="HM03 - Surf" src="/img/pokemon_emerald/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img title="HM04 - Strength" src="/img/pokemon_emerald/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img title="HM05 - Rock Smash" src="/img/pokemon_emerald/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Rock Smash')  }" />
            <img title="HM06 - Waterfall" src="/img/pokemon_emerald/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Waterfall')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img v-if="itemfinderRequired()" title="Dowsing Machine" src="/img/pokemon_black_white/dowsingmchn.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dowsing Machine')  }" />
            <img title="Bicycle" src="/img/pokemon_black_white/bicycle.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bicycle')  }" />
            <img title="Liberty Pass" src="/img/pokemon_black_white/libertypass.png" :class="{ 'opacity-25': !getNumberItemsFromName('Liberty Pass')  }" />
            <img v-if="getNumberItemsFromName('Dark Stone')" title="Dark Stone" src="/img/pokemon_black_white/darkstone.png" />
            <img v-else title="Light Stone" src="/img/pokemon_black_white/lightstone.png" :class="{ 'opacity-25': !getNumberItemsFromName('Light Stone')  }" />

        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon Black & White
    *
    * Goal is to beat Elite 4 (and Gethis)
    * You needs badges, like any other Pokemon game.
    * 
    */
export default {
  name: "gDataPokemonBlackWhite",
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
