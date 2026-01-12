<template>
    <div class="inline-block">


        <div v-if="getGoalMetroids() || getNumberItemsFromName('Infant Metroid')" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="getGoalMetroids()" class="mr-1 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Infant Metroid')  }"><img src="/img/metroid_fusion/metroid.png" title="Metroid" />x{{ getNumberItemsFromName('Infant Metroid') }} </span> / {{ getGoalMetroids() }}</span>
            <span v-else-if="getNumberItemsFromName('Infant Metroid')" class="mr-1 text-xs font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Infant Metroid')  }"><img src="/img/metroid_fusion/metroid.png" title="Metroid" />x{{ getNumberItemsFromName('Infant Metroid') }} </span>

        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Ammo</div>

            <span v-if="getNumberItemsFromName('Energy Tank')" class="text-xs mr-1"><img title="Energy Tank" src="/img/metroid_fusion/EnergyTank.png" />x{{getNumberItemsFromName('Energy Tank')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img title="Energy Tank" src="/img/metroid_fusion/EnergyTank.png" />x0</span>
            <span :class="{ 'opacity-25': !getNumberItemsFromName('Missile Data')  }" class="text-xs mr-1"><img title="Missile" src="/img/metroid_fusion/MissileLauncher.png" />x{{getNumberItemsFromName('Missile Tank')}}</span>
            <span :class="{ 'opacity-25': !getNumberItemsFromName('Power Bomb Data')  }" class="text-xs mr-1"><img title="Power Bomb" src="/img/metroid_fusion/PowerBombs.png" />x{{getNumberItemsFromName('Power Bomb Tank')}}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Weapons</div>

            <img title="Charge Beam" src="/img/metroid_fusion/ChargeBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Charge Beam')  }" />
            <img title="Ice Beam" src="/img/metroid_fusion/IceBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Beam')  }" />
            <img title="Wave Beam" src="/img/metroid_fusion/WaveBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wave Beam')  }" />
            <img title="Wide Beam" src="/img/metroid_fusion/WideBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wide Beam')  }" />
            <img title="Plasma Beam" src="/img/metroid_fusion/PlasmaBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Plasma Beam')  }" />
            <span class="mr-2"></span>
            <img title="Super Missile" src="/img/metroid_fusion/SuperMissile.png" :class="{ 'opacity-25': !getNumberItemsFromName('Super Missile')  }" />
            <img title="Ice Missile" src="/img/metroid_fusion/IceMissile.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Missile')  }" />
            <img title="Diffusion Missile" src="/img/metroid_fusion/DiffusionMissile.png" :class="{ 'opacity-25': !getNumberItemsFromName('Diffusion Missile')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Equipment & Locks</div>

            <img title="Varia Suit" src="/img/metroid_fusion/VariaSuit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Varia Suit')  }" />
            <img title="Gravity Suit" src="/img/metroid_fusion/GravitySuit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gravity Suit')  }" />
            <img title="Morph Ball" src="/img/metroid_fusion/MorphBall.png" :class="{ 'opacity-25': !getNumberItemsFromName('Morph Ball')  }" />
            <img title="Bomb" src="/img/metroid_fusion/MorphBallBombs.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb Data')  }" />
            <img title="Screw Attack" src="/img/metroid_fusion/ScrewAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Screw Attack')  }" />
            <img title="Hi-Jump" src="/img/metroid_fusion/HiJumpBoots.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hi-Jump')  }" />
            <img title="Speed Booster" src="/img/metroid_fusion/SpeedBooster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Speed Booster')  }" />
            <img title="Space Jump" src="/img/metroid_fusion/SpaceJump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Space Jump')  }" />
            <span class="mr-2"></span>
            <img title="Level 1 Keycard" src="/img/metroid_fusion/LockLevel1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level 1 Keycard')  }" />
            <img title="Level 2 Keycard" src="/img/metroid_fusion/LockLevel2.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level 2 Keycard')  }" />
            <img title="Level 3 Keycard" src="/img/metroid_fusion/LockLevel3.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level 3 Keycard')  }" />
            <img title="Level 4 Keycard" src="/img/metroid_fusion/LockLevel4.png" :class="{ 'opacity-25': !getNumberItemsFromName('Level 4 Keycard')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Metroid Fusion
    *
    * Main objective is to get Infants Metroids.
    */
export default {
        name: "gDataMetroidFusion",
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
            slotData: function () {
                return this.data.slot_data.hasOwnProperty('GameMode');
            },
            getGoalMetroids: function () {
                if (this.data.slot_data.hasOwnProperty('InfantMetroidsRequired')) {
                    return this.data.slot_data.InfantMetroidsRequired;
                }
                return 0;
            },
        },
  components: {
  },
};
</script>
