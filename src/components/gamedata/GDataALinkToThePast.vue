<template>
    <div>
        <div v-if="getGoalTriforce()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Rewards</div>

            <span class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img src="/img/alttp/items/triforce_piece.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ getGoalTriforce() }}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img v-if="getSwordLevel() > 3" src="/img/alttp/items/sword4.png" />
            <img v-else-if="getSwordLevel() > 2" src="/img/alttp/items/sword3.png" />
            <img v-else-if="getSwordLevel() > 1" src="/img/alttp/items/sword2.png" />
            <img v-else src="/img/alttp/items/sword1.png" :class="{ 'opacity-25': !getSwordLevel()  }" />

            <img v-if="getNumberItemsFromName('Progressive Shield') > 1" src="/img/alttp/items/Mirror_Shield.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Shield') > 1" src="/img/alttp/items/Shield_lvl2.png" />
            <img v-else src="/img/alttp/items/Shield_lvl1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Shield')  }" />

            <img v-if="getNumberItemsFromName('Progressive Mail') > 1" src="/img/alttp/items/Red_Mail.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Mail')" src="/img/alttp/items/Blue_Mail.png" />
            <img v-else src="/img/alttp/items/Green_Mail.png" />

            <img v-if="getNumberItemsFromName('Progressive Glove') > 2" src="/img/alttp/items/Titan_Mits.png" />
            <img v-else src="/img/alttp/items/Power_Glove.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Glove')  }" />

            <img src="/img/alttp/items/Pegasus_Boots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pegasus Boots')  }" />
            <img src="/img/alttp/items/Flippers.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flippers')  }" />
            <img src="/img/alttp/items/Moon_Pearl.png" :class="{ 'opacity-25': !getNumberItemsFromName('Moon Pearl')  }" />
            <img src="/img/alttp/items/Magic_Mirror.png" :class="{ 'opacity-25': !getNumberItemsFromName('Magic Mirror')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Items</div>

            <img src="/img/alttp/items/Flute.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flute')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 1" src="/img/alttp/items/bowandsilverarrow.png" />
            <img v-else src="/img/alttp/items/Bow+Arrows.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />

            <img v-if="getNumberItemsFromName('Progressive Boomerang') > 1 || getNumberItemsFromName('Red Boomerang')" src="/img/alttp/items/boomerang_red.png" />
            <img v-else src="/img/alttp/items/boomerang_blue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Boomerang') && !getNumberItemsFromName('Blue Boomerang') }" />

            <img src="/img/alttp/items/Lamp.png" :class="{ 'opacity-25': !getNumberItemsFromName('Lamp')  }" />
            <img src="/img/alttp/items/Shovel.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shovel')  }" />
            <img src="/img/alttp/items/Magic_Powder.png" :class="{ 'opacity-25': !getNumberItemsFromName('Magic Powder')  }" />
            <img src="/img/alttp/items/Book_of_Mudora.png" :class="{ 'opacity-25': !getNumberItemsFromName('Book of Mudora')  }" />
            <img src="/img/alttp/items/Hammer.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hammer')  }" />
            <img src="/img/alttp/items/Hookshot.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hookshot')  }" />
            <img src="/img/alttp/items/Icerod.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Rod')  }" />
            <img src="/img/alttp/items/Firerod.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Rod')  }" />
            <img src="/img/alttp/items/Cane_of_Somaria.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cane of Somaria')  }" />

            <img v-if="getNumberItemsFromName('Cape')" src="/img/alttp/items/Cape.png" />
            <img v-else src="/img/alttp/items/Cane_of_Byrna.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cane of Byrna')  }" />

            <img src="/img/alttp/items/Quake.png" :class="{ 'opacity-25': !getNumberItemsFromName('Quake')  }" />
            <img src="/img/alttp/items/Bombos.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bombos')  }" />
            <img src="/img/alttp/items/Ether.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ether')  }" />
        </div>

    </div>
</template>
    
<script>

    /**
    * A Link to the Past
    *
    * Goal is to either beat specific dungeons or get Triforce Pieces.
    */
export default {
        name: "gDataALinkToThePast",
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
            getSwordLevel: function () {
                var res = 1;
                if (this.data.slot_data.swordless) {
                    res -= 1;
                }
                return res + this.getNumberItemsFromName('Progressive Sword');
            },
            getGoalTriforce: function () {
                if (this.data.slot_data.triforce_pieces_mode == 1) {
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
