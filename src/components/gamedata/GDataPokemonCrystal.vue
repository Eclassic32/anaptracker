<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img title="Zephyr Badge" src="/img/pokemon_crystal/items/zephyrbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zephyr Badge')  }" />
            <img title="Hive Badge" src="/img/pokemon_crystal/items/hivebadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hive Badge')  }" />
            <img title="Plain Badge" src="/img/pokemon_crystal/items/plainbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Plain Badge')  }" />
            <img title="Fog Badge" src="/img/pokemon_crystal/items/fogbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fog Badge')  }" />
            <img title="Storm Badge" src="/img/pokemon_crystal/items/stormbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Storm Badge')  }" />
            <img title="Mineral Badge" src="/img/pokemon_crystal/items/mineralbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mineral Badge')  }" />
            <img title="Glacier Badge" src="/img/pokemon_crystal/items/glacierbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Glacier Badge')  }" />
            <img title="Rising Badge" src="/img/pokemon_crystal/items/risingbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rising Badge')  }" />
            <span v-if="kantoIsOn()" class="mr-2"></span>
            <img v-if="kantoIsOn()" title="Boulder Badge" src="/img/pokemon_crystal/items/boulderbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boulder Badge')  }" />
            <img v-if="kantoIsOn()" title="Cascade Badge" src="/img/pokemon_crystal/items/cascadebadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cascade Badge')  }" />
            <img v-if="kantoIsOn()" title="Thunder Badge" src="/img/pokemon_crystal/items/thunderbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Badge')  }" />
            <img v-if="kantoIsOn()" title="Rainbow Badge" src="/img/pokemon_crystal/items/rainbowbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Badge')  }" />
            <img v-if="kantoIsOn()" title="Soul Badge" src="/img/pokemon_crystal/items/soulbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Soul Badge')  }" />
            <img v-if="kantoIsOn()" title="Marsh Badge" src="/img/pokemon_crystal/items/marshbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Marsh Badge')  }" />
            <img v-if="kantoIsOn()" title="Volcano Badge" src="/img/pokemon_crystal/items/volcanobadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Volcano Badge')  }" />
            <img v-if="kantoIsOn()" title="Earth Badge" src="/img/pokemon_crystal/items/earthbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img title="HM01 - Cut" src="/img/pokemon_crystal/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img title="HM02 - Fly" src="/img/pokemon_crystal/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img title="HM03 - Surf" src="/img/pokemon_crystal/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img title="HM04 - Strength" src="/img/pokemon_crystal/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img title="HM05 - Flash" src="/img/pokemon_crystal/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
            <img title="HM06 - Whirlpool" src="/img/pokemon_crystal/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Whirlpool')  }" />
            <img title="HM07 - Waterfall" src="/img/pokemon_crystal/items/hm07.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
            <img title="TM08 - Rock Smash" src="/img/pokemon_crystal/items/tm08.png" :class="{ 'opacity-25': !getNumberItemsFromName('TM08')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img title="Pokegear" src="/img/pokemon_crystal/items/itemfinder.png" :class="{ 'opacity-25': !getNumberItemsFromName('Itemfinder')  }" />
            <img v-if="!getNumberItemsFromName('EXPN Card') && !getNumberItemsFromName('Radio Card')" src="/img/pokemon_crystal/items/pokegear.png" title="Pokegear" :class="{ 'opacity-25': !getNumberItemsFromName('Pokegear')  }" />
            <img v-else-if="!getNumberItemsFromName('EXPN Card')" title="Radio Card" src="/img/pokemon_crystal/items/radiocard.png" />
            <img v-else title="EXPN. Card" src="/img/pokemon_crystal/items/expncard.png" />
            <img title="Bicycle" src="/img/pokemon_crystal/items/bicycle.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bicycle')  }" />
            <img title="Squirtbottle" src="/img/pokemon_crystal/items/squirtbottle.png" :class="{ 'opacity-25': !getNumberItemsFromName('Squirtbottle')  }" />
            <img title="S.S. Ticket" src="/img/pokemon_crystal/items/ssticket.png" :class="{ 'opacity-25': !getNumberItemsFromName('S.S. Ticket')  }" />
            <img title="Pass" src="/img/pokemon_crystal/items/pass.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pass')  }" />
            <img title="Basement Key" src="/img/pokemon_crystal/items/basementkey.png" :class="{ 'opacity-25': !getNumberItemsFromName('Basement Key')  }" />
            <img title="Card Key" src="/img/pokemon_crystal/items/cardkey.png" :class="{ 'opacity-25': !getNumberItemsFromName('Card Key')  }" />
            <img title="Rainbow Wing" src="/img/pokemon_crystal/items/rainbowwing.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Wing')  }" />
            <img title="Machine Part" src="/img/pokemon_crystal/items/machinepart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Machine Part')  }" />
            <img title="Tea" src="/img/pokemon_crystal/items/tea.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tea')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Pokemon Crystal
    *
    * Goal is to either beat Red or be League Champion.
    * It either needs badges or gyms. But we can assume badges are required because they can also lock areas (Pokemon League, Mt Silver, Team Rocket invasion, ...)
    */
export default {
  name: "gDataPokemonCrystal",
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
            kantoIsOn: function () {
                if (this.data.slot_data.hasOwnProperty('johto_only') && this.data.slot_data.johto_only == 1)
                    return false;
                return true;
            }
        },
  components: {
  },
};
</script>
