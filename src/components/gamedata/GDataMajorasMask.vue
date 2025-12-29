<template>
    <div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Rewards</div>

            <img src="/img/mm/equipment/odolwa.png" :class="{ 'opacity-25': !getNumberItemsFromName('Odolwa\'s Remains')  }" />
            <img src="/img/mm/equipment/goht.png" :class="{ 'opacity-25': !getNumberItemsFromName('Goht\'s Remains')  }" />
            <img src="/img/mm/equipment/gyorg.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gyorg\'s Remains')  }" />
            <img src="/img/mm/equipment/twinmold.png" :class="{ 'opacity-25': !getNumberItemsFromName('Twinmold\'s Remains')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Inventory</div>

            <img v-if="getSwordLevel() > 2" src="/img/mm/equipment/sword3.png" />
            <img v-else-if="getSwordLevel() > 1" src="/img/mm/equipment/sword2.png" />
            <img v-else src="/img/mm/equipment/sword1.png" :class="{ 'opacity-25': !getSwordLevel()  }" />

            <img v-if="getShieldLevel() > 1" src="/img/mm/equipment/shield2.png" />
            <img v-else src="/img/mm/equipment/shield1.png" :class="{ 'opacity-25': !getShieldLevel()  }" />

            <img v-if="getNumberItemsFromName('Progressive Magic Meter') > 2" src="/img/mm/equipment/magic2.png" />
            <img v-else src="/img/mm/equipment/magic1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Magic Meter')  }" />

            <img src="/img/mm/items/ocarina.png" />
            <img v-if="getNumberItemsFromName('Progressive Bomb Bag')" src="/img/mm/items/bomb.png" />
            <img v-else-if="getNumberItemsFromName('Progressive Bombchu')" src="/img/mm/items/bombchu.png" />
            <img v-else-if="getNumberItemsFromName('Blask Mask')"  src="/img/mm/masks/blast.png" />
            <img v-else src="/img/mm/items/bomb.png" class="opacity-25" />
            <img src="/img/mm/items/bow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Progressive Bow')  }" />
            <img src="/img/mm/items/fire_arrow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fire Arrow')  }" />
            <img src="/img/mm/items/ice_arrow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Arrow')  }" />
            <img src="/img/mm/items/light_arrow.png" :class="{ 'opacity-25': !getNumberItemsFromName('Light Arrow')  }" />
            <img src="/img/mm/items/hookshot.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hookshot')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Masks</div>

            <img src="/img/mm/masks/deku_mask.png" :class="{ 'opacity-25': !getNumberItemsFromName('Deku Mask')  }" />
            <img src="/img/mm/masks/goron.png" :class="{ 'opacity-25': !getNumberItemsFromName('Goron Mask')  }" />
            <img src="/img/mm/masks/zora.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zora Mask')  }" />
            <img src="/img/mm/masks/fierce_deity.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fiece Deity\'s Mask')  }" />
            <img src="/img/mm/masks/kafei_mask.png" :class="{ 'opacity-25': !getNumberItemsFromName('Kafei\'s Mask')  }" />
            <img src="/img/mm/masks/fairy_mask.png" :class="{ 'opacity-25': !getNumberItemsFromName('Great Fairy Mask')  }" />
            <img v-if="getNumberItemsFromName('Gibdo Mask') > 2" src="/img/mm/masks/gibdo.png" />
            <img v-else src="/img/mm/masks/garo_mask.png" :class="{ 'opacity-25': !getNumberItemsFromName('Garo Mask')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Songs</div>

            <img src="/img/mm/equipment/song_time.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Time')  }" />
            <img src="/img/mm/equipment/song_epona.png" :class="{ 'opacity-25': !getNumberItemsFromName('Epona\'s Song')  }" />
            <img src="/img/mm/equipment/song_healing.png" :class="{ 'opacity-25': !getNumberItemsFromName('Saria\'s Song')  }" />
            <img src="/img/mm/equipment/song_soaring.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Soaring')  }" />
            <img src="/img/mm/equipment/song_storms.png" :class="{ 'opacity-25': !getNumberItemsFromName('Song of Storms')  }" />
            <img src="/img/mm/equipment/song_sonata.png" :class="{ 'opacity-25': !getNumberItemsFromName('Sonata of Awakening')  }" />
            <img src="/img/mm/equipment/song_lullaby.png" :class="{ 'opacity-25': !getNumberItemsFromName('Goron\'s Lullaby')  }" />
            <img src="/img/mm/equipment/song_bossa_nova.png" :class="{ 'opacity-25': !getNumberItemsFromName('New Wave Bossa Nova')  }" />
            <img src="/img/mm/equipment/song_elegy.png" :class="{ 'opacity-25': !getNumberItemsFromName('Elegy of Emptiness')  }" />
            <img src="/img/mm/equipment/song_oath.png" :class="{ 'opacity-25': !getNumberItemsFromName('Oath to Order')  }" />
        </div>
    </div>
</template>
    
<script>


    /**
    * Majora's Mask Recompiled
    * 
    * Goal is to get bosses remains.
    */ 
export default {
        name: "gDataMajorasMask",
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
            getShieldLevel: function () {
                var res = 1;
                if (this.data.slot_data.shieldless) {
                    res -= 1;
                }
                return res + this.getNumberItemsFromName('Progressive Shield');
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
