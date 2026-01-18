<template>
    <div class="inline-block">

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="getGoalTimePieces()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Time Piece')  }"><img title="Time Piece" src="/img/a_hat_in_time/items/time_piece.png" />x{{ getNumberItemsFromName('Time Piece') }} </span> / {{ getGoalTimePieces() }}</span>
            <span v-else class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Time Piece')  }"><img title="Time Piece" src="/img/a_hat_in_time/items/time_piece.png" />x{{ getNumberItemsFromName('Time Piece') }} </span>

        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Hats & Abilities</div>


            <span v-if="!hatMode()" class="mr-2 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Yarn')  }"><img title="Yarn" src="/img/a_hat_in_time/items/yarn.png" />x{{ getNumberItemsFromName('Yarn') }} </span>
            <img v-if="hatMode()" title="Sprint Hat" src="/img/a_hat_in_time/items/sprint_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sprint Hat')  }" />
            <img v-if="hatMode()" title="Brewer Hat" src="/img/a_hat_in_time/items/brewer_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Brewing Hat')  }" />
            <img v-if="hatMode()" title="Ice Hat" src="/img/a_hat_in_time/items/ice_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Hat')  }" />
            <img v-if="hatMode()" title="Dweller Mask" src="/img/a_hat_in_time/items/dwellers_mask_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dweller Mask')  }" />
            <img v-if="hatMode()" title="Time Stop Hat" src="/img/a_hat_in_time/items/time_stop_hat_icon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Time Stop Hat')  }" />
            <span class="mr-2" />
            <img title="Scooter Badge" src="/img/a_hat_in_time/items/scooter_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Scooter Badge')  }" />
            <img title="Umbrella" src="/img/a_hat_in_time/items/umbrella.png" :class="{ 'opacity-25': !getNumberItemsFromName('Umbrella')  }" />
            <img title="Hookshot Badge" src="/img/a_hat_in_time/items/hookshot_badge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hookshot Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Relics</div>

            <img v-if="countBurgerRelic() > 1" title="Burger Relic (complete)" src="/img/a_hat_in_time/items/burgerrelic_completed.png" />
            <img v-else title="Burger Relic" src="/img/a_hat_in_time/items/burgerrelic1.png" :class="{ 'opacity-15': !countBurgerRelic(), 'opacity-60': countBurgerRelic()  }" />

            <img v-if="countTrainRelic() > 1" title="Train Relic (complete)" src="/img/a_hat_in_time/items/trainrelic_complete.png" />
            <img v-else title="Train Relic" src="/img/a_hat_in_time/items/trainrelic1.png" :class="{ 'opacity-15': !countTrainRelic(), 'opacity-60': countTrainRelic()  }" />

            <img v-if="countCowRelic() > 3" title="UFO Relic (complete)" src="/img/a_hat_in_time/items/uforelic_complete.png" />
            <img v-else-if="countCowRelic() > 2" title="UFO Relic" class="opacity-60" src="/img/a_hat_in_time/items/uforelic3.png" />
            <img v-else-if="countCowRelic() > 1" title="UFO Relic" class="opacity-60" src="/img/a_hat_in_time/items/uforelic2.png" />
            <img v-else src="/img/a_hat_in_time/items/uforelic1.png" title="UFO Relic" :class="{ 'opacity-15': !countCowRelic(), 'opacity-60': countCowRelic()  }" />

            <img v-if="countCrayonRelic() > 3" title="Crayon Relic (complete)" src="/img/a_hat_in_time/items/crayonrelic_complete.png" />
            <img v-else-if="countCrayonRelic() > 2" title="Crayon Relic" class="opacity-60" src="/img/a_hat_in_time/items/crayonrelic3.png" />
            <img v-else-if="countCrayonRelic() > 1" title="Crayon Relic" class="opacity-60" src="/img/a_hat_in_time/items/crayonrelic2.png" />
            <img v-else title="Crayon Relic" src="/img/a_hat_in_time/items/crayonrelic1.png" :class="{ 'opacity-15': !countCrayonRelic(), 'opacity-60': countCrayonRelic()  }" />

            <img v-if="countCakeRelic() > 3" title="Cake Relic (complete)" src="/img/a_hat_in_time/items/cakerelic_complete.png" />
            <img v-else-if="countCakeRelic() > 2" title="Cake Relic" class="opacity-60" src="/img/a_hat_in_time/items/cakerelic3.png" />
            <img v-else-if="countCakeRelic() > 1" title="Cake Relic" class="opacity-60" src="/img/a_hat_in_time/items/cakerelic2.png" />
            <img v-else-if="hasDLC1()" title="Cake Relic" src="/img/a_hat_in_time/items/cakerelic1.png" :class="{ 'opacity-15': !countCakeRelic(), 'opacity-60': countCakeRelic()  }" />

            <img v-if="countJewelryRelic() > 1" title="Jewelry Relic (complete)" src="/img/a_hat_in_time/items/jewelryrelic_complete.png" />
            <img v-else-if="hasDLC2()" title="Jewelry Relic" src="/img/a_hat_in_time/items/jewelryrelic1.png" :class="{ 'opacity-15': !countJewelryRelic(), 'opacity-60': countJewelryRelic()  }" />

        </div>
    </div>
</template>
    
<script>

    /**
    * Hollow Knight
    *
    * Goal is to beat a set final stage
    * It can be :
    *   - 1 : Finale (Chapter 5)
    *   - 2 : Rush Hour (Chapter 6)
    *   - 3 : Seal The Deal (Chapter 7)
    * Time Pieces goal will depend on the chosen chapter cost.
    * 
    */
export default {
  name: "gDataAHatInTime",
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
            getGoalTimePieces: function () {
                if (this.data.slot_data.hasOwnProperty('EndGoal')) {
                    if (this.data.slot_data.EndGoal == 3)
                        return this.data.slot_data.Chapter7Cost;
                    if (this.data.slot_data.EndGoal == 2)
                        return this.data.slot_data.Chapter6Cost;
                    if (this.data.slot_data.EndGoal == 1)
                        return this.data.slot_data.Chapter5Cost;
                }
                return 0;
            },
            hasDLC1: function () {
                if (this.data.slot_data.hasOwnProperty('EnableDLC1')) {
                    return this.data.slot_data.EnableDLC1;
                }
                return 1;
            },
            hasDLC2: function () {
                if (this.data.slot_data.hasOwnProperty('EnableDLC2')) {
                    return this.data.slot_data.EnableDLC2;
                }
                return 1;
            },
            hatMode: function () {
                if (this.data.slot_data.hasOwnProperty('HatItems')) {
                    return this.data.slot_data.HatItems;
                }
                return !this.getNumberItemsFromName('Yarn');
            },
            countBurgerRelic: function () {
                return this.getNumberItemsFromName('Relic (Burger Cushion)') + this.getNumberItemsFromName('Relic (Burger Patty)');
            },
            countTrainRelic: function () {
                return this.getNumberItemsFromName('Relic (Train)') + this.getNumberItemsFromName('Relic (Mountain Set)');
            },
            countCowRelic: function () {
                return this.getNumberItemsFromName('Relic (Cow)') + this.getNumberItemsFromName('Relic (Cool Cow)')
                    + this.getNumberItemsFromName('Relic (Tin-foil Hat Cow)') + this.getNumberItemsFromName('Relic (UFO)');
            },
            countCrayonRelic: function () {
                return this.getNumberItemsFromName('Relic (Blue Crayon)') + this.getNumberItemsFromName('Relic (Green Crayon)')
                    + this.getNumberItemsFromName('Relic (Red Crayon)') + this.getNumberItemsFromName('Relic (Crayon Box)');
            },
            countCakeRelic: function () {
                return this.getNumberItemsFromName('Relic (Chocolate Cake)') + this.getNumberItemsFromName('Relic (Chocolate Cake Slice)')
                    + this.getNumberItemsFromName('Relic (Shortcake)') + this.getNumberItemsFromName('Relic (Cake Stand)');
            },
            countJewelryRelic: function () {
                return this.getNumberItemsFromName('Relic (Necklace)') + this.getNumberItemsFromName('Relic (Necklace Bust)');
            },
        },
  components: {
  },
};
</script>
