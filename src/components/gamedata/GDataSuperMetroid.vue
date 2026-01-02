<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Ammo</div>

            <span v-if="getNumberItemsFromName('Energy Tank')" class="text-xs mr-1"><img src="/img/super_metroid/items/etank.png" />x{{getNumberItemsFromName('Energy Tank')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img src="/img/super_metroid/items/etank.png" />x0</span>
            <span v-if="getNumberItemsFromName('Reserve Tank')" class="text-xs mr-1"><img src="/img/super_metroid/items/reservetank.png" />x{{getNumberItemsFromName('Reserve Tank')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img src="/img/super_metroid/items/reservetank.png" />x0</span>
            <span v-if="getNumberItemsFromName('Missile')" class="text-xs mr-1"><img src="/img/super_metroid/items/missile.png" />x{{getNumberItemsFromName('Missile')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img src="/img/super_metroid/items/missile.png" />x0</span>
            <span v-if="getNumberItemsFromName('Super Missile')" class="text-xs mr-1"><img src="/img/super_metroid/items/super.png" />x{{getNumberItemsFromName('Super Missile')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img src="/img/super_metroid/items/super.png" />x0</span>
            <span v-if="getNumberItemsFromName('Power Bomb')" class="text-xs mr-1"><img src="/img/super_metroid/items/powerbomb.png" />x{{getNumberItemsFromName('Power Bomb')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img src="/img/super_metroid/items/powerbomb.png" />x0</span>
            <img src="/img/super_metroid/items/grapple.png" :class="{ 'opacity-25': !getNumberItemsFromName('Grappling Beam')  }" />
            <img src="/img/super_metroid/items/xray.png" :class="{ 'opacity-25': !getNumberItemsFromName('X-Ray Scope')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Beam</div>

            <img src="/img/super_metroid/items/charge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Charge Beam')  }" />
            <img src="/img/super_metroid/items/ice.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Beam')  }" />
            <img src="/img/super_metroid/items/wave.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wave Beam')  }" />
            <img src="/img/super_metroid/items/spazer.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spazer')  }" />
            <img src="/img/super_metroid/items/plasma.png" :class="{ 'opacity-25': !getNumberItemsFromName('Plasma Beam')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Equipment</div>

            <img src="/img/super_metroid/items/varia.png" :class="{ 'opacity-25': !getNumberItemsFromName('Varia Suit')  }" />
            <img src="/img/super_metroid/items/gravity.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gravity Suit')  }" />
            <img src="/img/super_metroid/items/morph.png" :class="{ 'opacity-25': !getNumberItemsFromName('Morph Ball')  }" />
            <img src="/img/super_metroid/items/bomb.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb')  }" />
            <img src="/img/super_metroid/items/springball.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spring Ball')  }" />
            <img src="/img/super_metroid/items/screw.png" :class="{ 'opacity-25': !getNumberItemsFromName('Screw Attack')  }" />
            <img src="/img/super_metroid/items/hijump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hi-Jump Boots')  }" />
            <img src="/img/super_metroid/items/speed.png" :class="{ 'opacity-25': !getNumberItemsFromName('Speed Booster')  }" />
            <img src="/img/super_metroid/items/space.png" :class="{ 'opacity-25': !getNumberItemsFromName('Space Jump')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Super Metroid
    *
    * Objectives are present in the game. (stuff like full clear an area, or kill X minibosses)
    * But it's safe to assume that we mostly need Varia / Gravity and a way to kill Mother Brain (charge or 50+ supers)
    */
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
            getImageClass: function () {
                if (this.$parent.$parent.$parent.OPTIONS.row_size == 2) {
                    return 'iconbar-L my-1';
                }
                else if (this.$parent.$parent.$parent.OPTIONS.row_size == 1) {
                    return 'iconbar-M';
                }
                return 'iconbar-S';
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
