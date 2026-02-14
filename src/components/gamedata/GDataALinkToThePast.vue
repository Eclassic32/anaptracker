<template>
    <div class="inline-block">
        <div v-if="getGoalTriforce()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Rewards</div>

            <span class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img title="Triforce Piece" src="/img/alttp/items/triforce_piece.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ getGoalTriforce() }}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img v-if="getSwordLevel() > 3" title="Golden Sword" src="/img/alttp/items/sword4.png" />
            <img v-else-if="getSwordLevel() > 2" title="Tempered Sword" src="/img/alttp/items/sword3.png" />
            <img v-else-if="getSwordLevel() > 1" title="Master Sword" src="/img/alttp/items/sword2.png" />
            <img v-else src="/img/alttp/items/sword1.png" title="Sword" :class="{ 'opacity-25': !getSwordLevel()  }" />

            <img v-if="getNumberItemsFromName('Progressive Shield') > 1" title="Mirror Shield" src="/img/alttp/items/Mirror_Shield.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Shield') > 1" title="Red Shield" src="/img/alttp/items/Shield_lvl2.png" />
            <img v-else src="/img/alttp/items/Shield_lvl1.png" title="Blue Shield" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Shield')  }" />

            <img v-if="getNumberItemsFromName('Progressive Mail') > 1" title="Red Mail" src="/img/alttp/items/Red_Mail.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Mail')" title="Blue Mail" src="/img/alttp/items/Blue_Mail.png" />
            <img v-else title="Green Mail" src="/img/alttp/items/Green_Mail.png" />

            <img v-if="getNumberItemsFromName('Progressive Glove') > 2" title="Titan Mits" src="/img/alttp/items/Titan_Mits.png" />
            <img v-else title="Power Glove" src="/img/alttp/items/Power_Glove.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Glove')  }" />

            <img title="Pegasus Boots" src="/img/alttp/items/Pegasus_Boots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pegasus Boots')  }" />
            <img title="Flippers" src="/img/alttp/items/Flippers.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flippers')  }" />
            <img title="Moon Pearl" src="/img/alttp/items/Moon_Pearl.png" :class="{ 'opacity-25': !getNumberItemsFromName('Moon Pearl')  }" />
            <img title="Magic Mirror" src="/img/alttp/items/Magic_Mirror.png" :class="{ 'opacity-25': !getNumberItemsFromName('Magic Mirror')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Items</div>

            <img src="/img/alttp/items/Flute.png" :class="{ 'opacity-25': !getNumberItemsFromName('Flute')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 1" title="Silver Bow" src="/img/alttp/items/bowandsilverarrow.png" />
            <img v-else src="/img/alttp/items/Bow+Arrows.png" title="Bow" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />

            <img v-if="getNumberItemsFromName('Progressive Boomerang') > 1 || getNumberItemsFromName('Red Boomerang')" title="Red Boomerang" src="/img/alttp/items/boomerang_red.png" />
            <img v-else src="/img/alttp/items/boomerang_blue.png" title="Blue Boomerang" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Boomerang') && !getNumberItemsFromName('Blue Boomerang') }" />

            <img src="/img/alttp/items/Lamp.png" title="Lamp" :class="{ 'opacity-25': !getNumberItemsFromName('Lamp')  }" />
            <img src="/img/alttp/items/Shovel.png" title="Shovel" :class="{ 'opacity-25': !getNumberItemsFromName('Shovel')  }" />
            <img src="/img/alttp/items/Magic_Powder.png" title="Magic Powder" :class="{ 'opacity-25': !getNumberItemsFromName('Magic Powder')  }" />
            <img src="/img/alttp/items/Book_of_Mudora.png" title="Book of Mudora" :class="{ 'opacity-25': !getNumberItemsFromName('Book of Mudora')  }" />
            <img src="/img/alttp/items/Hammer.png" title="Hammer" :class="{ 'opacity-25': !getNumberItemsFromName('Hammer')  }" />
            <img src="/img/alttp/items/Hookshot.png" title="Hookshot" :class="{ 'opacity-25': !getNumberItemsFromName('Hookshot')  }" />
            <img src="/img/alttp/items/Icerod.png" title="Ice Rod" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Rod')  }" />
            <img src="/img/alttp/items/Firerod.png" title="Fire Rod" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Rod')  }" />
            <img src="/img/alttp/items/Cane_of_Somaria.png" title="Cane of Somaria" :class="{ 'opacity-25': !getNumberItemsFromName('Cane of Somaria')  }" />

            <img v-if="getNumberItemsFromName('Cape')" title="Cape / Cane of Byrna" src="/img/alttp/items/Cape.png" />
            <img v-else src="/img/alttp/items/Cane_of_Byrna.png" title="Cape / Cane of Byrna" :class="{ 'opacity-25': !getNumberItemsFromName('Cane of Byrna')  }" />

            <img src="/img/alttp/items/Quake.png" title="Quake" :class="{ 'opacity-25': !getNumberItemsFromName('Quake')  }" />
            <img src="/img/alttp/items/Bombos.png" title="Bombos" :class="{ 'opacity-25': !getNumberItemsFromName('Bombos')  }" />
            <img src="/img/alttp/items/Ether.png" title="Ether" :class="{ 'opacity-25': !getNumberItemsFromName('Ether')  }" />
        </div>

    </div>
</template>
    
<script>

    /**
    * A Link to the Past
    *
    * Goal is to either beat specific dungeons or get Triforce Pieces.
    * 
    * 0 - Ganon : Climb GT, defeat Agahnim 2, and then kill Ganon
    * 1 - Crystals: Only killing Ganon is required. However, items may still be placed in GT
    * 2 - Bosses: Defeat the boss of all dungeons, including Agahnim's tower and GT (Aga 2)
    * 3 - Pedestal: Pull the Triforce from the Master Sword pedestal
    * 4 - Ganon Pedestal: Pull the Master Sword pedestal, then kill Ganon
    * 5 - Triforce Hunt: Collect Triforce pieces spread throughout the worlds, then turn them in to Murahadala in front of Hyrule Castle
    * 6 - Local Triforce Hunt: Collect Triforce pieces spread throughout your world, then turn them in to Murahadala in front of Hyrule Castle
    * 7 - Ganon Triforce Hunt: Collect Triforce pieces spread throughout the worlds, then kill Ganon
    * 8 - Local Ganon Triforce Hunt: Collect Triforce pieces spread throughout your world, then kill Ganon
    * 
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
            getGoalDetails: function () {
                if (!this.data.slot_data.hasOwnProperty('goal'))
                    return [];
                var res = [];

                var row_goal = { title: 'Goal', value: 'Ganon (Agahnim 2)', details: null };
                if (this.data.slot_data.goal == 1) {
                    row_goal.value = 'Ganon (Crystals)';
                }
                else if (this.data.slot_data.goal == 2) {
                    row_goal.value = 'Bosses';
                }
                else if (this.data.slot_data.goal == 3) {
                    row_goal.value = 'Pedestal';
                }
                else if (this.data.slot_data.goal == 4) {
                    row_goal.value = 'Pedestal and Ganon';
                }
                else if (this.data.slot_data.goal == 5) {
                    row_goal.value = 'Triforce Hunt';
                }
                else if (this.data.slot_data.goal == 6) {
                    row_goal.value = 'Local Triforce Hunt';
                }
                else if (this.data.slot_data.goal == 7) {
                    row_goal.value = 'Triforce Hunt for Ganon';
                }
                else if (this.data.slot_data.goal == 8) {
                    row_goal.value = 'Local Triforce Hunt for Ganon';
                }

                res.push(row_goal);

                // Tower
                var row_tmp = { title: 'Crystals for Tower', value: 'None', details: null };
                if (this.data.slot_data.crystals_needed_for_gt) {
                    row_tmp.value = this.data.slot_data.crystals_needed_for_gt;
                }
                res.push(row_tmp);

                // Ganon
                if (this.data.slot_data.goal == 1) {
                    row_tmp = { title: 'Crystals for Ganon', value: 'None', details: null };
                    if (this.data.slot_data.crystals_needed_for_ganon) {
                        row_tmp.value = this.data.slot_data.crystals_needed_for_ganon;
                    }
                    res.push(row_tmp);
                }

                // Mode
                row_tmp = { title: 'Mode', value: 'Vanilla', details: null };
                if (this.data.slot_data.mode == 1)
                    row_tmp.value = 'Open';
                else if (this.data.slot_data.mode == 2)
                    row_tmp.value = 'Inverted';
               
                res.push(row_tmp);

                // Pyramid
                row_tmp = { title: 'Pyramid Hole', value: 'Closed', details: null };
                if (this.data.slot_data.open_pyramid == 1)
                    row_tmp.value = 'Open';
                else if (this.data.slot_data.open_pyramid == 2)
                    row_tmp.value = 'Goal';
                else if (this.data.slot_data.open_pyramid == 3)
                    row_tmp.value = 'Auto';

                res.push(row_tmp);


                row_tmp = { title: 'Medaillon for Misery Mire', value: this.data.slot_data.mm_medalion, details: null };
                res.push(row_tmp);
                row_tmp = { title: 'Medaillon for Turtle Rock', value: this.data.slot_data.tr_medalion, details: null };
                res.push(row_tmp);


                var dlcs = [];
                if ([3, 4].includes(this.data.slot_data.big_key_shuffle))
                    dlcs.push('Big Keys');
                if ([3,4].includes(this.data.slot_data.key_drop_shuffle))
                    dlcs.push('Key Drops');
                if ([3, 4].includes(this.data.slot_data.small_key_shuffle))
                    dlcs.push('Small Keys');
                if (this.data.slot_data.pot_shuffle)
                    dlcs.push('Pots');
                if (this.data.slot_data.enemy_shuffle)
                    dlcs.push('Ennemies');
                if (this.data.slot_data.boss_shuffle)
                    dlcs.push('Bosses');
                if (this.data.slot_data.entrance_shuffle)
                    dlcs.push('Entrances');


                var row_dlc = { title: 'Extra Shuffle', value: null, details: null };
                if (dlcs.length) {
                    row_dlc.value = dlcs.join(', ');
                    res.push(row_dlc);
                }

                return res;
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            getSwordLevel: function () {
                var res = 1;
                if (this.data.slot_data.swordless) {
                    res -= 1;
                }
                return res + this.getNumberItemsFromName('Progressive Sword');
            },
            getGoalTriforce: function () {
                if (this.data.slot_data.hasOwnProperty('goal') && [5, 7].includes(this.data.slot_data.goal) && [1,2].includes(this.data.slot_data.triforce_pieces_mode)) {
                    return this.data.slot_data.triforce_pieces_required;
                }
                return 0;
            }
        },
  components: {
  },
};
</script>
