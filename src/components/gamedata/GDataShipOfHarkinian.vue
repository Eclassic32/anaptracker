<template>
    <div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>
            <span v-if="triforceHunt()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Triforce Piece')  }"><img title="Triforce Piece" src="/img/oot/triforce.png" />x{{ getNumberItemsFromName('Triforce Piece') }} </span> / {{ triforceHunt() }}</span>

            <span v-if="skullsTokensCounts()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Gold Skulltula Token')  }"><img title="Gold Skulltulla Token" src="/img/oot/skull.png" />x{{ getNumberItemsFromName('Gold Skulltula Token') }} </span> / {{ skullsTokensCounts() }}</span>
            <img title="Kokiri's Emerald" v-if="stonesCounts()" src="/img/oot/stone_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri\'s Emerald')  }" />
            <img title="Goron's Ruby" v-if="stonesCounts()" src="/img/oot/stone_2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Goron\'s Ruby')  }" />
            <img title="Zora's Sapphire" v-if="stonesCounts()" src="/img/oot/stone_3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zora\'s Sapphire')  }" />
            <img title="Forest Medaillon" v-if="medalsCounts()" src="/img/oot/medal_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Forest Medallion')  }" />
            <img title="Fire Medaillin" v-if="medalsCounts()" src="/img/oot/medal_2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Medallion')  }" />
            <img title="Water Medaillon" v-if="medalsCounts()" src="/img/oot/medal_3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Water Medallion')  }" />
            <img title="Shadow Medaillon" v-if="LACSCounts()" src="/img/oot/medal_4.png" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow Medallion')  }" />
            <img title="Spirit Medaillon" v-if="LACSCounts()" src="/img/oot/medal_5.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spirit Medallion')  }" />
            <img title="Light Medaillon" v-if="medalsCounts()" src="/img/oot/medal_6.png" :class="{ 'opacity-25': !getNumberItemsFromName('Light Medallion')  }" />
            <img title="Greg the Green Rupee" v-if="gregCounts()" src="/img/oot/rupee.png" :class="{ 'opacity-25': !getNumberItemsFromName('Greg the Green Rupee')  }" />
            <img title="Ganon Boss Key" v-if="ganonBkSanity()" src="/img/oot/114_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ganon\'s Castle Boss Key')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img title="Kokiri Sword" src="/img/oot/22_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri Sword')  }" />
            <img title="Master Sword" src="/img/oot/23_2.png" :class="{ 'opacity-25': !hasMasterSword()  }" />
            <img v-if="getNumberItemsFromName('Mirror Shield')" title="Mirror Shield" src="/img/oot/27_1.png" />
            <img v-else src="/img/oot/26_1.png" title="Hylian Shield" :class="{ 'opacity-25': !getNumberItemsFromName('Hylian Shield')  }" />
            <img title="Iron Boots" src="/img/oot/32_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Iron Boots')  }" />
            <img title="Hover Boots" src="/img/oot/33_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hover Boots')  }" />
            <img v-if="getNumberItemsFromName('Strength Upgrade') > 2" title="Golden Gauntlets" src="/img/oot/21_3.png" />
            <img v-else-if="getNumberItemsFromName('Strength Upgrade') > 1" title="Silver Gauntlets" src="/img/oot/21_2.png" />
            <img v-else src="/img/oot/21_1.png" title="Goron Bracelet" :class="{ 'opacity-25': !getNumberItemsFromName('Strength Upgrade')  }" />
            <img v-if="getNumberItemsFromName('Progressive Magic Meter') > 2" title="Magic Meter" src="/img/oot/18_2.png" />
            <img v-else src="/img/oot/18_1.png" title="Magic Meter" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Magic Meter')  }" />
            <img v-if="getNumberItemsFromName('Progressive Ocarina') > 1" title="Ocarina of Time" src="/img/oot/46_2.png" />
            <img v-else src="/img/oot/46_1.png" title="Ocarina" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Ocarina')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bomb Bag') > 2" title="Bomb Bag" src="/img/oot/5_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb Bag') > 1" title="Bomb Bag" src="/img/oot/5_2.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb Bag')" title="Bomb Bag" src="/img/oot/5_1.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bombchu')" title="Bombchu Bag" src="/img/oot/49_1.png" />
            <img v-else src="/img/oot/5_1.png" title="Bomb Bag" class="opacity-25" />
            <img  title="Boomerang" src="/img/oot/2_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boomerang')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 2" title="Bow" src="/img/oot/6_3.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bow') > 1" title="Bow" src="/img/oot/6_2.png" />
            <img v-else src="/img/oot/6_1.png" title="Bow" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />
            <img src="/img/oot/9_1.png" title="Fire Arrow" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Arrow')  }" />
            <img src="/img/oot/11_1.png" title="Light Arrow" :class="{ 'opacity-25': !getNumberItemsFromName('Light Arrow')  }" />
            <img v-if="getNumberItemsFromName('Progressive Hookshot') > 1" title="Longshot" src="/img/oot/7_2.png" />
            <img v-else src="/img/oot/7_1.png" title="Hookshot" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Hookshot')  }" />
            <img title="Megaton Hammer" src="/img/oot/8_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Megaton Hammer')  }" />
            <img title="Din's Fire'" src="/img/oot/12_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Din\'s Fire')  }" />
            <img v-if="getNumberItemsFromName('Bottle with Ruto\'s Letter')" title="Bottle with Letter" src="/img/oot/3_2.png" />
            <img v-else title="Bottle" src="/img/oot/3_1.png" :class="{ 'opacity-25': !hasBottle()  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Songs</div>

            <img title="Zelda's Lullaby" src="/img/oot/34_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zelda\'s Lullaby')  }" />
            <img title="Epona's Song" src="/img/oot/35_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Epona\'s Song')  }" />
            <img title="Saria's Song" src="/img/oot/36_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Saria\'s Song')  }" />
            <img title="Song of Time" src="/img/oot/37_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Time')  }" />
            <img title="Sun's Song" src="/img/oot/38_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sun\'s Song')  }" />
            <img title="Song of Storms" src="/img/oot/39_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Storms')  }" />
            <img title="Minuet of Forest" src="/img/oot/40_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Minuet of Forest')  }" />
            <img title="Bolero of Fire" src="/img/oot/41_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bolero of Fire')  }" />
            <img title="Serenade of Water" src="/img/oot/42_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Serenade of Water')  }" />
            <img title="Requiem of Spirit" src="/img/oot/43_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Requiem of Spirit')  }" />
            <img title="Nocturne of Shadow" src="/img/oot/44_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Nocturne of Shadow')  }" />
            <img title="Prelude of Light" src="/img/oot/45_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Prelude of Light')  }" />
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
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
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
                        !this.triforceHunt() && [0, 2, 4, 5, 6].includes(this.data.slot_data.ganons_castle_boss_key))
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
            getNumberItemsNameStart: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id) {
                    var bottle_array = [];
                    for (var key in this.gamedata.location_name_to_id) {
                        if (key.startsWith(name)) {
                            bottle_array.push(this.gamedata.location_name_to_id[key]);
                        }
                    }
                    var id = this.gamedata.item_name_to_id[name];
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (bottle_array.includes(this.data.tracker_data.player_items_received[x][0]))
                            res++;
                    }
                }
                return res;
            },
            hasMasterSword: function (name) {
                if (this.data.slot_data.hasOwnProperty('shuffle_master_sword') && this.data.slot_data.shuffle_master_sword == 1) {
                    return this.getNumberItemsFromName('Master Sword');
                }
                return 1;
            },
            hasBottle: function (name) {
                if (this.getNumberItemsFromName('Empty Bottle') || this.getNumberItemsNameStart('Bottle with')) {
                    return true;
                }
                return false;
            }
        },
  components: {
  },
};
</script>
