<template>
    <div>
        <div v-if="getGoalTriforce()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Rewards</div>

            <span class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img src="/img/alttp/items/triforce_piece.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ getGoalTriforce() }}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img src="/img/minish_cap/items/EarthElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Element')  }" />
            <img src="/img/minish_cap/items/FireElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Element')  }" />
            <img src="/img/minish_cap/items/WaterElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Water Element')  }" />
            <img src="/img/minish_cap/items/WindElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wind Element')  }" />
            <span class="mr-2"></span>
            <img v-if="getNumberItemsFromName('Progressive Sword') > 4" src="/img/minish_cap/items/SmithSword_5.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 3" src="/img/minish_cap/items/SmithSword_4.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 2" src="/img/minish_cap/items/SmithSword_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 1" src="/img/minish_cap/items/SmithSword_2.png" />
            <img v-else src="/img/minish_cap/items/SmithSword_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Sword')  }" />

            <img v-if="getNumberItemsFromName('Progressive Shield') > 1" src="/img/minish_cap/items/Shield_2.png" />
            <img v-else src="/img/minish_cap/items/Shield_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Shield')  }" />

            <img src="/img/minish_cap/items/PegasusBoots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pegasus Boots')  }" />
            <img src="/img/minish_cap/items/PowerBracelets.png" :class="{ 'opacity-25': !getNumberItemsFromName('Power Bracelets')  }" />
            <img src="/img/minish_cap/items/GripRing.png" :class="{ 'opacity-25': !getNumberItemsFromName('Grip Ring')  }" />
            <img src="/img/minish_cap/items/Flippers.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flippers')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Items</div>

            <img src="/img/minish_cap/items/Ocarina.png"  />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 1" src="/img/minish_cap/items/Bow_2.png" />
            <img v-else src="/img/minish_cap/items/Bow_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />

            <img v-if="getNumberItemsFromName('Progressive Boomerang') > 1" src="/img/minish_cap/items/Boomerang_2.png" />
            <img v-else src="/img/minish_cap/items/Boomerang_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Boomerang') }" />

            <img v-if="getNumberItemsFromName('Bomb Bag') > 3" src="/img/minish_cap/items/BombBag_4.png" />
            <img v-else-if="getNumberItemsFromName('Bomb Bag') > 2" src="/img/minish_cap/items/BombBag_3.png" />
            <img v-else-if="getNumberItemsFromName('Bomb Bag') > 1" src="/img/minish_cap/items/BombBag_2.png" />
            <img v-else src="/img/minish_cap/items/BombBag_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb Bag') }" />

            <img src="/img/minish_cap/items/LanternOff.png" :class="{ 'opacity-25': !getNumberItemsFromName('Lantern')  }" />
            <img src="/img/minish_cap/items/MoleMitts.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mole Mitts')  }" />
            <img src="/img/minish_cap/items/GustJar.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gust Jar')  }" />
            <img src="/img/minish_cap/items/RocsCape.png" :class="{ 'opacity-25': !getNumberItemsFromName('Roc\'s Cape')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Moveset</div>

            <img src="/img/minish_cap/items/SpinAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spin Attack')  }" />
            <img src="/img/minish_cap/items/RollAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Roll Attack')  }" />
            <img src="/img/minish_cap/items/RockBreaker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rock Breaker')  }" />
            <img src="/img/minish_cap/items/DashAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Attack')  }" />
            <img src="/img/minish_cap/items/DownThrust.png" :class="{ 'opacity-25': !getNumberItemsFromName('DownThrust')  }" />
            <img src="/img/minish_cap/items/FastSplit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fast Split Scroll')  }" />
            <img src="/img/minish_cap/items/FastSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fast Spin Scroll')  }" />
            <img src="/img/minish_cap/items/GreatSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Greatspin')  }" />
            <img src="/img/minish_cap/items/LongSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Long Spin')  }" />
            <img src="/img/minish_cap/items/SwordBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sword Beam')  }" />
            <img src="/img/minish_cap/items/PerilBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Peril Beam')  }" />
        </div>

    </div>
</template>
    
<script>

    /**
    * The Minish Cap
    *
    * Goal is to beat Vaati.
    * You need a set Upgraded Sword and a number of Elements.
    * 
    */
export default {
        name: "gDataTheMinishCap",
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
            getGoalTriforce: function () {
                if (this.data.slot_data.triforce_pieces_mode) {
                    return this.data.slot_data.triforce_pieces_required;
                }
                return 0;
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
