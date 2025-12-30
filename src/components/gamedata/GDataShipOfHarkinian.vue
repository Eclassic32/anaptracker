<template>
    <div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>
            <span v-if="triforceHunt()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img src="/img/oot/triforce.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ triforceHunt() }}</span>

            <span v-if="skullsTokensCounts()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Gold Skulltula Token')  }"><img src="/img/oot/skull.png" />x{{ getNumberItemsFromName('Gold Skulltula Token') }} </span> / {{ skullsTokensCounts() }}</span>
            <img v-if="stonesCounts()" src="/img/oot/stone_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri\'s Emerald')  }" />
            <img v-if="stonesCounts()" src="/img/oot/stone_2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Goron\'s Ruby')  }" />
            <img v-if="stonesCounts()" src="/img/oot/stone_3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zora\'s Sapphire')  }" />
            <img v-if="medalsCounts()" src="/img/oot/medal_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Forest Medallion')  }" />
            <img v-if="medalsCounts()" src="/img/oot/medal_2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Medallion')  }" />
            <img v-if="medalsCounts()" src="/img/oot/medal_3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Water Medallion')  }" />
            <img v-if="LACSCounts()" src="/img/oot/medal_4.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow Medallion')  }" />
            <img v-if="LACSCounts()" src="/img/oot/medal_5.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spirit Medallion')  }" />
            <img v-if="medalsCounts()" src="/img/oot/medal_6.png" :class="{ 'opacity-25': !getNumberItemsFromName('Light Medallion')  }" />
            <img v-if="gregCounts()" src="/img/oot/rupee.png" :class="{ 'opacity-25': !getNumberItemsFromName('Greg the Green Rupee')  }" />
            <img v-if="ganonBkSanity()" src="/img/oot/114_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ganon\'s Castme Boss Key')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img src="/img/oot/22_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri Sword')  }" />
            <img src="/img/oot/23_2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Master Sword')  }" />
            <img v-if="getNumberItemsFromName('Mirror Shield')" src="/img/oot/27_1.png" />
            <img v-else src="/img/oot/26_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hylian Shield')  }" />
            <img src="/img/oot/32_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Iron Boots')  }" />
            <img src="/img/oot/33_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hover Boots')  }" />
            <img v-if="getNumberItemsFromName('Strength Upgrade') > 2" src="/img/oot/21_3.png" />
            <img v-else-if="getNumberItemsFromName('Strength Upgrade') > 1" src="/img/oot/21_2.png" />
            <img v-else src="/img/oot/21_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Strength Upgrade')  }" />
            <img v-if="getNumberItemsFromName('Progressive Magic Meter') > 2" src="/img/oot/18_2.png" />
            <img v-else src="/img/oot/18_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Magic Meter')  }" />
            <img v-if="getNumberItemsFromName('Progressive Ocarina') > 1" src="/img/oot/46_2.png" />
            <img v-else src="/img/oot/46_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Ocarina')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bomb Bag') > 2" src="/img/oot/5_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb Bag') > 1" src="/img/oot/5_2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb Bag')" src="/img/oot/5_1.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bombchu')" src="/img/oot/49_1.png" />
            <img v-else src="/img/oot/5_1.png" class="opacity-25" />
            <img src="/img/oot/2_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boomerang')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 2" src="/img/oot/6_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bow') > 1" src="/img/oot/6_2.png" />
            <img v-else src="/img/oot/6_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />
            <img src="/img/oot/9_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Arrow')  }" />
            <img src="/img/oot/11_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Light Arrow')  }" />
            <img v-if="getNumberItemsFromName('Progressive Hookshot') > 1" src="/img/oot/7_2.png" />
            <img v-else src="/img/oot/7_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Hookshot')  }" />
            <img src="/img/oot/8_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Megaton Hammer')  }" />
            <img src="/img/oot/12_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Din\'s Fire')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Songs</div>

            <img src="/img/oot/34_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zelda\'s Lullaby')  }" />
            <img src="/img/oot/35_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Epona\'s Song')  }" />
            <img src="/img/oot/36_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Saria\'s Song')  }" />
            <img src="/img/oot/37_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Time')  }" />
            <img src="/img/oot/38_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sun\'s Song')  }" />
            <img src="/img/oot/39_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Storms')  }" />
            <img src="/img/oot/40_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Minuet of Forest')  }" />
            <img src="/img/oot/41_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bolero of Fire')  }" />
            <img src="/img/oot/42_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Serenade of Water')  }" />
            <img src="/img/oot/43_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Requiem of Spirit')  }" />
            <img src="/img/oot/44_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Nocturne of Shadow')  }" />
            <img src="/img/oot/45_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Prelude of Light')  }" />
        </div>
    </div>
</template>
    
<script>


    /**
    * Ship of Harkinian
    *
    * By Default, Objectives are Dungeons rewards. But it can change depnding on the Bridge/Ganon Boss Key setting 
    * 
    * Bridge setting :
    *   0 - vanilla
    *   1 - always_open
    *   2 - stones
    *   3 - medallions
    *   4 - dungeon_rewards
    *   5 - dungeons
    *   6 - tokens
    *   7 - greg
    *   
    *   
    * Ganon Boss Key setting :
    *   0 - vanilla
    *   1 - anywhere
    *   2 - lacs_vanilla
    *   3 - lacs_stones
    *   4 - lacs_medallions
    *   5 - lacs_dungeon_rewards
    *   6 - lacs_dungeons
    *   7 - lacs_skull_tokens
    *   
    *   If Triforce Hunt is on, Ganon Boss Key will always be behind the Triforce Pieces goal.
    */
export default {
        name: "gDataShipOfHarkinian",
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
            triforceHunt: function () {
                if (this.data.slot_data.hasOwnProperty('triforce_hunt') && this.data.slot_data.triforce_hunt == 1) {
                    return this.data.slot_data.triforce_hunt_pieces_required;
                }
                return 0;
            },
            stonesCounts: function () {
                if (this.data.slot_data.hasOwnProperty('rainbow_bridge')) {
                    if ([2, 4, 5].includes(this.data.slot_data.rainbow_bridge) ||
                        !this.triforceHunt() && [3, 5, 6].includes(this.data.slot_data.ganons_castle_boss_key))
                        return true;
                    return false;
                }
                return true;
            },
            medalsCounts: function () {
                if (this.data.slot_data.hasOwnProperty('rainbow_bridge')) {
                    if ([3, 4, 5].includes(this.data.slot_data.rainbow_bridge) ||
                        !this.triforceHunt() && [4, 5, 6].includes(this.data.slot_data.ganons_castle_boss_key))
                        return true;
                    return false;
                }
                return true;
            },
            LACSCounts: function () {
                if (this.data.slot_data.hasOwnProperty('rainbow_bridge')) {

                    if ([0, 3, 4, 5].includes(this.data.slot_data.rainbow_bridge) ||
                        !this.triforceHunt() && [2, 4, 5, 6].includes(this.data.slot_data.ganons_castle_boss_key))
                        return true;
                    return false;
                }
                return true;
            },
            gregCounts: function () {
                if (this.data.slot_data.hasOwnProperty('rainbow_bridge') &&
                    (this.data.slot_data.rainbow_bridge == 7 || this.data.slot_data.rainbow_bridge_greg_modifier) ||
                    !this.triforceHunt() && [3, 4, 5, 7].includes(this.data.slot_data.ganons_castle_boss_key) && this.data.slot_data.ganons_castle_boss_key_greg_modifier) {
                    return true;
                }
                return false;
            },
            ganonBkSanity: function () {
                if (this.data.slot_data.hasOwnProperty('ganons_castle_boss_key') &&
                    (this.data.slot_data.ganons_castle_boss_key == 1)) {
                    return true;
                }
                return false;
            },
            skullsTokensCounts: function () {
                if (this.data.slot_data.hasOwnProperty('rainbow_bridge') &&
                    (this.data.slot_data.rainbow_bridge == 6 ||
                    !this.triforceHunt() && this.data.slot_data.ganons_castle_boss_key == 7)) {
                    return this.data.slot_data.rainbow_bridge_skull_tokens_required;
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
