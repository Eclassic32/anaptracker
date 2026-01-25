<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Badges</div>

            <img title="Boulder Badge" src="/img/pokemon_frlg/badges/boulder_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boulder Badge')  }" />
            <img title="Cascade Badge" src="/img/pokemon_frlg/badges/cascade_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cascade Badge')  }" />
            <img title="Thunder Badge" src="/img/pokemon_frlg/badges/thunder_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Badge')  }" />
            <img title="Rainbow Badge" src="/img/pokemon_frlg/badges/rainbow_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Badge')  }" />
            <img title="Soul Badge" src="/img/pokemon_frlg/badges/soul_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Soul Badge')  }" />
            <img title="Marsh Badge" src="/img/pokemon_frlg/badges/marsh_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Marsh Badge')  }" />
            <img title="Volcano Badge" src="/img/pokemon_frlg/badges/volcano_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Volcano Badge')  }" />
            <img title="Earth Badge" src="/img/pokemon_frlg/badges/earth_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">HMs</div>

            <img title="HM01 - Cut" src="/img/pokemon_frlg/hms/hm1.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img title="HM02 - Fly" src="/img/pokemon_frlg/hms/hm2.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img title="HM03 - Surf" src="/img/pokemon_frlg/hms/hm3.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img title="HM04 - Strength" src="/img/pokemon_frlg/hms/hm4.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img title="HM05 - Flash" src="/img/pokemon_frlg/hms/hm5.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>

            <img title="Bicycle" src="/img/pokemon_frlg/other/bike.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bike')  }" />
            <img title="Card Key" src="/img/pokemon_frlg/other/card_key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Card Key')  }" />
        </div>
    </div>
</template>
<script>
    /**
    * Pokemon Red and Blue
    *
    * Goal is to beat Elite 4.
    * You needs badges, like any other Pokemon game.
    *
    */

    export default {
        name: "gDataPokemonRedBlue",
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
            }
        },
        components: {
        },
    };
</script>
