<template>
    <div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">
            <span v-if="getNumberItemsFromName('Energy Tank')" class="text-xs mr-1"><img src="/img/super_metroid/items/etank.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Energy Tank')}}</span>
            <span v-else class="text-xs mr-1"><img src="/img/super_metroid/items/etank.png" class="inline-block w-[16px] h-[16px]" />x0</span>
            <span v-if="getNumberItemsFromName('Reserve Tank')" class="text-xs mr-1"><img src="/img/super_metroid/items/reservetank.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Reserve Tank')}}</span>
            <span v-else class="text-xs mr-1"><img src="/img/super_metroid/items/reservetank.png" class="inline-block w-[16px] h-[16px]" />x0</span>
            <span v-if="getNumberItemsFromName('Missile')" class="text-xs mr-1"><img src="/img/super_metroid/items/missile.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Missile')}}</span>
            <span v-else class="text-xs mr-1"><img src="/img/super_metroid/items/missile.png" class="inline-block w-[16px] h-[16px]" />x0</span>
            <span v-if="getNumberItemsFromName('Super Missile')" class="text-xs mr-1"><img src="/img/super_metroid/items/super.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Super Missile')}}</span>
            <span v-else class="text-xs mr-1"><img src="/img/super_metroid/items/super.png" class="inline-block w-[16px] h-[16px]" />x0</span>
            <span v-if="getNumberItemsFromName('Power Bomb')" class="text-xs mr-1"><img src="/img/super_metroid/items/powerbomb.png" class="inline-block w-[16px] h-[16px]" />x{{getNumberItemsFromName('Power Bomb')}}</span>
            <span v-else class="text-xs mr-1"><img src="/img/super_metroid/items/powerbomb.png" class="inline-block w-[16px] h-[16px]" />x0</span>
            <img src="/img/super_metroid/items/grapple.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Grappling Beam')  }" />
            <img src="/img/super_metroid/items/xray.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('X-Ray Scope')  }" />
        </div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">
            <img src="/img/super_metroid/items/charge.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Charge Beam')  }" />
            <img src="/img/super_metroid/items/ice.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Beam')  }" />
            <img src="/img/super_metroid/items/wave.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Wave Beam')  }" />
            <img src="/img/super_metroid/items/spazer.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Spazer')  }" />
            <img src="/img/super_metroid/items/plasma.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Plasma Beam')  }" />
        </div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">
            <img src="/img/super_metroid/items/varia.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Varia Suit')  }" />
            <img src="/img/super_metroid/items/gravity.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Gravity Suit')  }" />
            <img src="/img/super_metroid/items/morph.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Morph Ball')  }" />
            <img src="/img/super_metroid/items/bomb.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb')  }" />
            <img src="/img/super_metroid/items/springball.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Spring Ball')  }" />
            <img src="/img/super_metroid/items/screw.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Screw Attack')  }" />
            <img src="/img/super_metroid/items/hijump.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Hi-Jump Boots')  }" />
            <img src="/img/super_metroid/items/speed.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Speed Boster')  }" />
            <img src="/img/super_metroid/items/space.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Space Jump')  }" />
        </div>
    </div>
</template>
    
<script>

export default {
        name: "gDataSuperMetroid",
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
