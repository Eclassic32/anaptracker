<template>
    <div>
        <div :class="{ 'my-1' : $parent.$parent.$parent.OPTIONS.row_size}" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/oot/stone_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri\'s Emerald')  }" />
            <img src="/img/oot/stone_2.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Goron\'s Ruby')  }" />
            <img src="/img/oot/stone_3.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Zora\'s Sapphire')  }" />
            <img src="/img/oot/medal_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Forest Medallion')  }" />
            <img src="/img/oot/medal_2.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Medallion')  }" />
            <img src="/img/oot/medal_3.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Water Medallion')  }" />
            <img src="/img/oot/medal_4.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Shadow Medallion')  }" />
            <img src="/img/oot/medal_5.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Spirit Medallion')  }" />
            <img src="/img/oot/medal_6.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Light Medallion')  }" />
        </div>

        <div :class="{ 'my-1' : $parent.$parent.$parent.OPTIONS.row_size}" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/oot/22_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Kokiri Sword')  }" />
            <img src="/img/oot/23_2.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Master Sword')  }" />
            <img v-if="getNumberItemsFromName('Mirror Shield')" src="/img/oot/27_1.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/26_1.png" class="inline-block mr-3 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Hylian Shield')  }" />
            <img src="/img/oot/32_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Iron Boots')  }" />
            <img src="/img/oot/33_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Hover Boots')  }" />
            <img v-if="getNumberItemsFromName('Strength Upgrade') > 2" src="/img/oot/21_3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('Strength Upgrade') > 1" src="/img/oot/21_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/21_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Strength Upgrade')  }" />
            <img v-if="getNumberItemsFromName('Progressive Magic Meter') > 2" src="/img/oot/18_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/18_1.png" class="inline-block mr-3 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Magic Meter')  }" />
            <img v-if="getNumberItemsFromName('Strength Ocarina') > 1" src="/img/oot/46_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/46_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Ocarina')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bomb Bag') > 2" src="/img/oot/5_3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('Progressive Bomb Bag') > 1" src="/img/oot/5_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/5_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bomb Bag')  }" />
            <img v-if="getNumberItemsFromName('Progressive Bow') > 2" src="/img/oot/6_3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('Progressive Bow') > 1" src="/img/oot/6_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/6_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />
            <img src="/img/oot/9_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Arrow')  }" />
            <img src="/img/oot/10_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Arrow')  }" />
            <img src="/img/oot/11_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Light Arrow')  }" />
            <img v-if="getNumberItemsFromName('Progressive Hookshot') > 1" src="/img/oot/7_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/oot/7_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Hookshot')  }" />
            <img src="/img/oot/8_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Megaton Hammer')  }" />
            <img src="/img/oot/12_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Din\'s Fire')  }" />
        </div>

        <div :class="{ 'my-1' : $parent.$parent.$parent.OPTIONS.row_size}" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/oot/34_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Zelda\'s Lullaby')  }" />
            <img src="/img/oot/35_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Epona\'s Song')  }" />
            <img src="/img/oot/36_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Saria\'s Song')  }" />
            <img src="/img/oot/37_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Sun\'s Song')  }" />
            <img src="/img/oot/38_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Time')  }" />
            <img src="/img/oot/39_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Storms')  }" />
            <img src="/img/oot/40_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Minuet of Forest')  }" />
            <img src="/img/oot/41_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Bolero of Fire')  }" />
            <img src="/img/oot/42_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Serenade of Water')  }" />
            <img src="/img/oot/43_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Requiem of Spirit')  }" />
            <img src="/img/oot/44_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Nocturne of Shadow')  }" />
            <img src="/img/oot/45_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Prelude of Light')  }" />
        </div>
    </div>
</template>
    
<script>

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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id && this.data && this.data.player_items_received) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (this.data.player_items_received[this.index].items[x][0] == id)
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
