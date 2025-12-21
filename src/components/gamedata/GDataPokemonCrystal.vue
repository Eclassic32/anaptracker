<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/pokemon_crystal/items/zephyrbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Zephyr Badge')  }" />
            <img src="/img/pokemon_crystal/items/hivebadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hive Badge')  }" />
            <img src="/img/pokemon_crystal/items/plainbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Plain Badge')  }" />
            <img src="/img/pokemon_crystal/items/fogbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Fog Badge')  }" />
            <img src="/img/pokemon_crystal/items/stormbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Storm Badge')  }" />
            <img src="/img/pokemon_crystal/items/mineralbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mineral Badge')  }" />
            <img src="/img/pokemon_crystal/items/glacierbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Glacier Badge')  }" />
            <img src="/img/pokemon_crystal/items/risingbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rising Badge')  }" />
            <span class="mr-2"></span>
            <img src="/img/pokemon_crystal/items/boulderbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Boulder Badge')  }" />
            <img src="/img/pokemon_crystal/items/cascadebadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Cascade Badge')  }" />
            <img src="/img/pokemon_crystal/items/thunderbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Thunder Badge')  }" />
            <img src="/img/pokemon_crystal/items/rainbowbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Badge')  }" />
            <img src="/img/pokemon_crystal/items/soulbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Soul Badge')  }" />
            <img src="/img/pokemon_crystal/items/marshbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Marsh Badge')  }" />
            <img src="/img/pokemon_crystal/items/volcanobadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Volcano Badge')  }" />
            <img src="/img/pokemon_crystal/items/earthbadge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Earth Badge')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/pokemon_crystal/items/hm01.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM01 Cut')  }" />
            <img src="/img/pokemon_crystal/items/hm02.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM02 Fly')  }" />
            <img src="/img/pokemon_crystal/items/hm03.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM03 Surf')  }" />
            <img src="/img/pokemon_crystal/items/hm04.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM04 Strength')  }" />
            <img src="/img/pokemon_crystal/items/hm05.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM05 Flash')  }" />
            <img src="/img/pokemon_crystal/items/hm06.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM06 Whirlpool')  }" />
            <img src="/img/pokemon_crystal/items/hm07.png" :class="{ 'opacity-25': !getNumberItemsFromName('HM07 Waterfall')  }" />
            <img src="/img/pokemon_crystal/items/tm08.png" :class="{ 'opacity-25': !getNumberItemsFromName('TM08')  }" />
        </div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/pokemon_crystal/items/itemfinder.png" :class="{ 'opacity-25': !getNumberItemsFromName('Itemfinder')  }" />
            <img src="/img/pokemon_crystal/items/pokegear.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pokegear')  }" />
            <img src="/img/pokemon_crystal/items/radiocard.png" :class="{ 'opacity-25': !getNumberItemsFromName('Radio Card')  }" />
            <img src="/img/pokemon_crystal/items/expncard.png" :class="{ 'opacity-25': !getNumberItemsFromName('EXPN Card')  }" />
            <img src="/img/pokemon_crystal/items/bicycle.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bicycle')  }" />
            <img src="/img/pokemon_crystal/items/squirtbottle.png" :class="{ 'opacity-25': !getNumberItemsFromName('Squirtbottle')  }" />
            <img src="/img/pokemon_crystal/items/ssticket.png" :class="{ 'opacity-25': !getNumberItemsFromName('S.S. Ticket')  }" />
            <img src="/img/pokemon_crystal/items/pass.png" :class="{ 'opacity-25': !getNumberItemsFromName('Pass')  }" />
            <img src="/img/pokemon_crystal/items/basementkey.png"" :class="{ 'opacity-25': !getNumberItemsFromName('Basement Key')  }" />
            <img src="/img/pokemon_crystal/items/cardkey.png" :class="{ 'opacity-25': !getNumberItemsFromName('Card Key')  }" />
            <img src="/img/pokemon_crystal/items/rainbowwing.png"  :class="{ 'opacity-25': !getNumberItemsFromName('Rainbow Wing')  }" />
            <img src="/img/pokemon_crystal/items/machinepart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Machine Part')  }" />
            <img src="/img/pokemon_crystal/items/tea.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tea')  }" />
        </div>
    </div>
</template>
    
<script>

export default {
  name: "gDataPokemonCrystal",
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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.data && this.data.player_items_received && this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
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
