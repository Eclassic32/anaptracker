<template>
    <span v-if="getNumberItemsFromName('Dreamer')">D x{{ getNumberItemsFromName('Dreamer') }}</span>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

        <span v-if="grubHunt()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Grubl')  }"><img src="/img/hollow_knight/grub.png" />x{{ getNumberItemsFromName('Grub') }} </span> / {{ grubHunt() }}</span>
        <img src="/img/hollow_knight/Monomon.png" :class="{ 'opacity-25': !getNumberItemsFromName('Monomon')  }" />
        <img src="/img/hollow_knight/Lurien.png" :class="{ 'opacity-25': !getNumberItemsFromName('Lurien')  }" />
        <img src="/img/hollow_knight/Herrah.png" :class="{ 'opacity-25': !getNumberItemsFromName('Herrah')  }" />
        <span v-if="radianceGoal()" class="mr-2"></span>
        <img v-if="siblingsGoal() && getNumberItemsFromName('King_Fragment') && getNumberItemsFromName('Queen_Fragment')" src="/img/hollow_knight/Kingsoul.png" />
        <img v-else-if="siblingsGoal() && getNumberItemsFromName('King_Fragment')" src="/img/hollow_knight/Charm_KingSoul_Left.png" />
        <img v-else-if="siblingsGoal() && getNumberItemsFromName('Queen_Fragment')" src="/img/hollow_knight/Charm_KingSoul_Right.png" />
        <img v-else-if="siblingsGoal()" class="opacity-25" src="/img/hollow_knight/Kingsoul.png" />
        <img v-if="radianceGoal()" src="/img/hollow_knight/VoidHeart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Void_Heart')  }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Moveset</div>

        <img v-if="!getNumberItemsFromName('Awoken_Deam_Nail')" src="/img/hollow_knight/DreamNail1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream_Nail')  }" />
        <img v-else src="/img/hollow_knight/DreamNail2.png" />
        <img src="/img/hollow_knight/DreamGate.png" :class="{ 'opacity-25': !getNumberItemsFromName('Dream_Gate')  }" />


        <!-- Left_Wing_Mowthing_Cloak and Right_Wing_Mowthing_Cloak -->
        <span v-if="splitCloak()">
            <img v-if="!getNumberItemsFromName('Left_Wing_Mowthing_Cloak')" src="/img/hollow_knight/MothwingCloak.png" class="opacity-25" />
            <img v-else-if="!getNumberItemsFromName('Shade_Cloak')" src="/img/hollow_knight/MothwingCloak.png" />
            <img v-else src="/img/hollow_knight/ShadeCloak.png" />
            <img v-if="!getNumberItemsFromName('Right_Wing_Mowthing_Cloak')" src="/img/hollow_knight/MothwingCloak2.png" class="opacity-25" />
            <img v-else-if="!getNumberItemsFromName('Shade_Cloak')" src="/img/hollow_knight/MothwingCloak2.png" />
            <img v-else src="/img/hollow_knight/ShadeCloak2.png" />
        </span>
        <span v-else>
            <img v-if="!getNumberItemsFromName('Shade_Cloak')" src="/img/hollow_knight/MothwingCloak.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mothwing_Cloak') && !getNumberItemsFromName('Left_Mothwing_Cloak') && !getNumberItemsFromName('Right_Mothwing_Cloak')  }" />
            <img v-else src="/img/hollow_knight/ShadeCloak.png" />
        </span>

        <span v-if="splitClaws()">
            <img src="/img/hollow_knight/MantisClaw2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Left_Mantis_Claw')  }" />
            <img src="/img/hollow_knight/MantisClaw.png" :class="{ 'opacity-25': !getNumberItemsFromName('Right_Mantis_Claw')  }" />

        </span>
        <img v-else src="/img/hollow_knight/MantisClaw.png" :class="{ 'opacity-25': !getNumberItemsFromName('Mantis_Claw') && !getNumberItemsFromName('Left_Mantis_Claw') && !getNumberItemsFromName('Right_Mantis_Claw')  }" />
        <span v-if="splitCrystal()">
            <img src="/img/hollow_knight/CrystalHeart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Left_Crystal_Heart')  }" />
            <img src="/img/hollow_knight/CrystalHeart2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Right_Crystal_Heart')  }" />

        </span>
        <img v-else src="/img/hollow_knight/CrystalHeart.png" :class="{ 'opacity-25': !getNumberItemsFromName('Crystal_Heart') && !getNumberItemsFromName('Left_Crystal_Heart') && !getNumberItemsFromName('Right_Crystal_Heart')  }" />
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

    /**
    * Hollow Knight
    *
    * Goal is to beat a set Final Boss
    * It can be :
    *   - 0 - Any : Get any ending
    *   - 1 - Hollow Knight : get 3 Dreamers
    *   - 2 - Siblings : get 3 Dreamers plus both White fragments and Void Heart
    *   - 2 - Radiance : get 3 Dreamers, Dream Nail and Void Heart
    *   - 3 - Godhome : get 3 Dreamers, Dream Nail and Void Heart
    *   - 4 - Godhome flower : get 3 Dreamers, Dream Nail and Void Heart
    *   - 5 - Grub Hunt : get Grubs
    *
    */
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
            grubHunt: function () {
                if (this.data.slot_data.hasOwnProperty('options') && this.data.slot_data.options.Goal == 5) {
                    return this.data.slot_data.options.GrubHuntGoal;
                }
                return 0;
            },
            siblingsGoal: function () {
                if (this.data.slot_data.hasOwnProperty('options') && this.data.slot_data.options.Goal != 2) {
                    return 0;
                }
                return 1;
            },
            radianceGoal: function () {
                if (this.data.slot_data.hasOwnProperty('options') && ![2, 3, 4, 5].includes(this.data.slot_data.options.Goal)) {
                    return 0;
                }
                return 1;
            },
            splitClaws: function () {
                if (this.data.slot_data.hasOwnProperty('options') && this.data.slot_data.options.SplitMantisClaw == 1) {
                    return 1;
                }
                return 0;
            },
            splitCloak: function () {
                if (this.data.slot_data.hasOwnProperty('options') && this.data.slot_data.options.SplitMothwingCloak == 1) {
                    return 1;
                }
                return 0;
            },
            splitCrystal: function () {
                if (this.data.slot_data.hasOwnProperty('options') && this.data.slot_data.options.SplitCrystalHeart == 1) {
                    return 1;
                }
                return 0;
            },
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
