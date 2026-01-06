<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Ammo</div>

            <span v-if="getNumberItemsFromName('Energy Tank')" class="text-xs mr-1"><img title="Energy Tank" src="/img/metroid_zero_mission/EnergyTank.png" />x{{getNumberItemsFromName('Energy Tank')}}</span>
            <span v-else class="text-xs mr-1 opacity-25"><img title="Energy Tank" src="/img/metroid_zero_mission/EnergyTank.png" />x0</span>
            <span :class="{ 'opacity-25': !getNumberItemsFromName('Missile Tank')  }" class="text-xs mr-1"><img title="Missile" src="/img/metroid_zero_mission/MissileTank.png" />x{{getNumberItemsFromName('Missile Tank')}}</span>
            <span :class="{ 'opacity-25': !getNumberItemsFromName('Super Missile Tank')  }" class="text-xs mr-1"><img title="Missile" src="/img/metroid_zero_mission/SuperMissileTank.png" />x{{getNumberItemsFromName('Missile Tank')}}</span>
            <span :class="{ 'opacity-25': !getNumberItemsFromName('Power Bomb Tank')  }" class="text-xs mr-1"><img title="Power Bomb" src="/img/metroid_zero_mission/PowerBombTank.png" />x{{getNumberItemsFromName('Power Bomb Tank')}}</span>
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Weapons</div>

            <img title="Charge Beam" src="/img/metroid_zero_mission/ChargeBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Charge Beam')  }" />
            <img title="Ice Beam" src="/img/metroid_zero_mission/IceBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Ice Beam')  }" />
            <img title="Wave Beam" src="/img/metroid_zero_mission/WaveBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wave Beam')  }" />
            <img title="Wide Beam" src="/img/metroid_zero_mission/LongBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wide Beam')  }" />
            <img v-if="metroidDNA()" title="Plasma Beam" src="/img/metroid_zero_mission/PlasmaBeam.png" :class="{ 'opacity-25': !getNumberItemsFromName('Plasma Beam')  }" />
            <img v-else title="Plasma Beam" src="/img/metroid_zero_mission/UnknownPlasmaBeam.png" :class="{ 'opacity-15': !getNumberItemsFromName('Plasma Beam'), 'opacity-75': getNumberItemsFromName('Plasma Beam')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Equipment & Locks</div>

            <img title="Varia Suit" src="/img/metroid_zero_mission/VariaSuit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Varia Suit')  }" />
            <img v-if="metroidDNA()" title="Gravity Suit" src="/img/metroid_zero_mission/GravitySuit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gravity Suit')  }" />
            <img v-else title="Gravity Suit" src="/img/metroid_zero_mission/UnknownGravitySuit.png" :class="{ 'opacity-15': !getNumberItemsFromName('Gravity Suit'), 'opacity-75': getNumberItemsFromName('Gravity Suit')  }" />
            <img title="Morph Ball" src="/img/metroid_zero_mission/MorphBall.png" :class="{ 'opacity-25': !getNumberItemsFromName('Morph Ball')  }" />
            <img title="Bomb" src="/img/metroid_zero_mission/Bomb.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bomb')  }" />
            <img title="Screw Attack" src="/img/metroid_zero_mission/ScrewAttack.png" :class="{ 'opacity-25': !getNumberItemsFromName('Screw Attack')  }" />
            <img title="Power Grip" src="/img/metroid_zero_mission/PowerGrip.png" :class="{ 'opacity-25': !getNumberItemsFromName('Power Grip')  }" />
            <img title="Hi-Jump Boots" src="/img/metroid_zero_mission/HiJump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hi-Jump')  }" />
            <img v-if="luxurySetting()" title="Spring Attack" src="/img/super_metroid/items/springball.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spring Ball')  }" />
            <img title="Speed Booster" src="/img/metroid_zero_mission/SpeedBooster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Speed Booster')  }" />
            <img v-if="metroidDNA()" title="Space Jump" src="/img/metroid_zero_mission/SpaceJump.png" :class="{ 'opacity-25': !getNumberItemsFromName('Space Jump')  }" />
            <img v-else title="Space Jump" src="/img/metroid_zero_mission/UnknownSpaceJump.png" :class="{ 'opacity-15': !getNumberItemsFromName('Space Jump'), 'opacity-75': getNumberItemsFromName('Space Jump')  }" />
        </div>
    </div>
</template>
    
<script>

    /**
    * Metroid Zero Mission
    *
    */
export default {
        name: "gDataMetroidZeroMission",
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
            luxurySetting: function () {
                if (this.data.slot_data.hasOwnProperty('spring_ball')) {
                    return this.data.slot_data.spring_ball;
                }
                return 1;
            },
            metroidDNA: function () {
                if (this.data.slot_data.hasOwnProperty('metroid_dna_required') && this.data.slot_data.metroid_dna_required == 1) {
                    return this.getNumberItemsFromName('Metroid DNA');
                }
                return 1;
            },
        },
  components: {
  },
};
</script>
