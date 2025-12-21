<template>
    <span v-if="getNumberItemsFromName('Dreamer')">D x{{ getNumberItemsFromName('Dreamer') }}</span>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <img src="/img/hollow_knight/Monomon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Monomon')  }" />
        <img src="/img/hollow_knight/Lurien.png" :class="{ 'opacity-25': !getNumberItemsFromName('Lurien')  }" />
        <img src="/img/hollow_knight/Herrah.png" :class="{ 'opacity-25': !getNumberItemsFromName('Herrah')  }" />
        <span class="mr-2"></span>
        <img src="/img/hollow_knight/VoidHeart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Void_Heart')  }" />
        <img src="/img/hollow_knight/DreamGate.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream_Gate')  }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <img v-if="!getNumberItemsFromName('Awoken_Deam_Nail')" src="/img/hollow_knight/DreamNail1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream_Nail')  }" />
        <img v-else src="/img/hollow_knight/DreamNail2.png" />
        <img v-if="!getNumberItemsFromName('Shade_Cloak')" src="/img/hollow_knight/MothwingCloak.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mothwing_Cloak')  }" />
        <img v-else src="/img/hollow_knight/ShadeCloak.png" />
        <!-- Left_Wing_Mowthing_Cloak and Left_Wing_Mowthing_Cloak -->
        <img src="/img/hollow_knight/MantisClaw.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mantis_Claw')  }" />
        <img src="/img/hollow_knight/CrystalHeart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Crystal_Heart')  }" />
        <img src="/img/hollow_knight/IsmaTear.png" :class="{ 'opacity-25': !getNumberItemsFromName('Isma\'s_Tear')  }" />
        <img src="/img/hollow_knight/MonarchWings.png" :class="{ 'opacity-25': !getNumberItemsFromName('Monarch_Wings')  }" />
        <span class="mr-2"></span>
        <img v-if="!getNumberItemsFromName('Shade_Soul')" src="/img/hollow_knight/VengefulSpirit.png" :class="{ 'opacity-25': !getNumberItemsFromName('VengefulSpirit')  }" />
        <img v-else src="/img/hollow_knight/ShadeSoul.png" />
        <img v-if="!getNumberItemsFromName('Abyss_Shriek')" src="/img/hollow_knight/HowlingWraiths.png" :class="{ 'opacity-25': !getNumberItemsFromName('Howling_Wreaiths')  }" />
        <img v-else src="/img/hollow_knight/AbyssShriek.png" />
        <img v-if="!getNumberItemsFromName('Descending_Dark')" src="/img/hollow_knight/DesolateDive.png" :class="{ 'opacity-25': !getNumberItemsFromName('Desolate_Dive')  }" />
        <img v-else src="/img/hollow_knight/DescendingDark.png" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <img src="/img/hollow_knight/TramPass.png" :class="{ 'opacity-25': !getNumberItemsFromName('Tram_Pass')  }" />
    </div>
</template>
    
<script>

export default {
  name: "gDataHollowKnight",
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
