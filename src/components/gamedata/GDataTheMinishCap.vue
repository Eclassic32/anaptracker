<template>
    <div class="inline-block">
        <div v-if="getGoalTriforce()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img title="Triforce Piece" src="/img/alttp/items/triforce_piece.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ getGoalTriforce() }}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img title="Earth Element" src="/img/minish_cap/items/EarthElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Element')  }" />
            <img title="Fire Element" src="/img/minish_cap/items/FireElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Element')  }" />
            <img title="Water Element" src="/img/minish_cap/items/WaterElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Water Element')  }" />
            <img title="Wind Element" src="/img/minish_cap/items/WindElement.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wind Element')  }" />
            <span class="mr-2"></span>
            <img v-if="getNumberItemsFromName('Progressive Sword') > 4" title="Four Sword" src="/img/minish_cap/items/SmithSword_5.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 3" title="White Sword (Three)" src="/img/minish_cap/items/SmithSword_4.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 2" title="White Sword (Two)" src="/img/minish_cap/items/SmithSword_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Sword') > 1" title="White Sword" src="/img/minish_cap/items/SmithSword_2.png" />
            <img v-else title="Smith's' Sword" src="/img/minish_cap/items/SmithSword_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Sword')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img v-if="getNumberItemsFromName('Progressive Shield') > 1" title="Mirror Shield" src="/img/minish_cap/items/Shield_2.png" />
            <img v-else src="/img/minish_cap/items/Shield_1.png" title="Hero's Shield" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Shield')  }" />

            <img title="Pegasus Boots" src="/img/minish_cap/items/PegasusBoots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pegasus Boots')  }" />
            <img title="Power Bracelets" src="/img/minish_cap/items/PowerBracelets.png" :class="{ 'opacity-25': !getNumberItemsFromName('Power Bracelets')  }" />
            <img title="Grip Ring" src="/img/minish_cap/items/GripRing.png" :class="{ 'opacity-25': !getNumberItemsFromName('Grip Ring')  }" />
            <img title="Flippers" src="/img/minish_cap/items/Flippers.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flippers')  }" />
            <span class="mr-2"></span>
            <img title="Ocarina" src="/img/minish_cap/items/Ocarina.png" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 1" title="Silver Bow" src="/img/minish_cap/items/Bow_2.png" />
            <img v-else title="Bow" src="/img/minish_cap/items/Bow_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />

            <img v-if="getNumberItemsFromName('Progressive Boomerang') > 1" title="Boomerang" src="/img/minish_cap/items/Boomerang_2.png" />
            <img v-else title="Boomerang" src="/img/minish_cap/items/Boomerang_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Boomerang') }" />

            <img title="Bomb Bag" v-if="getNumberItemsFromName('Bomb Bag') > 3" src="/img/minish_cap/items/BombBag_4.png" />
            <img title="Bomb Bag" v-else-if="getNumberItemsFromName('Bomb Bag') > 2" src="/img/minish_cap/items/BombBag_3.png" />
            <img title="Bomb Bag" v-else-if="getNumberItemsFromName('Bomb Bag') > 1" src="/img/minish_cap/items/BombBag_2.png" />
            <img title="Bomb Bag" v-else src="/img/minish_cap/items/BombBag_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb Bag') }" />

            <img title="Lantern" src="/img/minish_cap/items/LanternOff.png" :class="{ 'opacity-25': !getNumberItemsFromName('Lantern')  }" />
            <img title="Mole Mitts" src="/img/minish_cap/items/MoleMitts.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mole Mitts')  }" />
            <img title="Gust Jar" src="/img/minish_cap/items/GustJar.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gust Jar')  }" />
            <img title="Roc's Cape" src="/img/minish_cap/items/RocsCape.png" :class="{ 'opacity-25': !getNumberItemsFromName('Roc\'s Cape')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Moveset</div>

            <img title="Spin Attack" src="/img/minish_cap/items/SpinAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spin Attack')  }" />
            <img title="Roll Attack" src="/img/minish_cap/items/RollAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Roll Attack')  }" />
            <img title="Rock Breaker" src="/img/minish_cap/items/RockBreaker.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rock Breaker')  }" />
            <img title="Dash Attack" src="/img/minish_cap/items/DashAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dash Attack')  }" />
            <img title="Down Thrust" src="/img/minish_cap/items/DownThrust.png" :class="{ 'opacity-25': !getNumberItemsFromName('DownThrust')  }" />
            <img title="Fast Split" src="/img/minish_cap/items/FastSplit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fast Split Scroll')  }" />
            <img title="Fast Spin" src="/img/minish_cap/items/FastSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fast Spin Scroll')  }" />
            <img title="Greatspin" src="/img/minish_cap/items/GreatSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Greatspin')  }" />
            <img title="Long Spin" src="/img/minish_cap/items/LongSpin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Long Spin')  }" />
            <img title="Sword Beam" src="/img/minish_cap/items/SwordBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sword Beam')  }" />
            <img title="Peril Beam" src="/img/minish_cap/items/PerilBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Peril Beam')  }" />
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
            getGoalDetails: function () {
                return [];
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            getGoalTriforce: function () {
                if (this.data.slot_data.triforce_pieces_mode) {
                    return this.data.slot_data.triforce_pieces_required;
                }
                return 0;
            }
        },
  components: {
  },
};
</script>
