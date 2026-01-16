<template>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Main Stages</div>

        <img title="Distant Roost" src="/img/risk_of_rain_2/distant_roost.png" :class="{ 'opacity-35': !environnementUnlocked('Distant Roost')  }" />
        <img title="Titanic Plains" src="/img/risk_of_rain_2/titanic_plains.png" :class="{ 'opacity-35': !environnementUnlocked('Titanic Plains')  }" />
        <img v-if="hasDLC1()" title="Siphoned Forest" src="/img/risk_of_rain_2/siphoned_forest.png" :class="{ 'opacity-35': !environnementUnlocked('Siphoned Forest')  }" />
        <img v-if="hasDLC1()" title="Verdant Falls" src="/img/risk_of_rain_2/verdant_falls.png" :class="{ 'opacity-35': !environnementUnlocked('Verdant Falls')  }" />
        <span class="mr-2"></span>
        <img title="Abandoned Aqueduct" src="/img/risk_of_rain_2/abandoned_aqueduct.png" :class="{ 'opacity-10': !environnementUnlocked('Abandoned Aqueduct') && !stageUnlocked(1), 'opacity-35': xOrStageLevel('Abandoned Aqueduct', 1) }" />
        <img title="Wetland Aspect" src="/img/risk_of_rain_2/wetland_aspect.png" :class="{ 'opacity-10': !environnementUnlocked('Wetland Aspect') && !stageUnlocked(1), 'opacity-35': xOrStageLevel('Wetland Aspect', 1) }" />
        <img v-if="hasDLC1()" title="Aphelian Sanctuary" src="/img/risk_of_rain_2/aphelian_sanctuary.png" :class="{ 'opacity-15': !environnementUnlocked('Aphelian Sanctuary') && !stageUnlocked(1), 'opacity-35': xOrStageLevel('Aphelian Sanctuary', 1)  }" />
        <span class="mr-2"></span>
        <img title="Rallypoint Delta" src="/img/risk_of_rain_2/rallypoint_delta.png" :class="{ 'opacity-10': !environnementUnlocked('Rallypoint Delta') && !stageUnlocked(2), 'opacity-35': xOrStageLevel('Rallypoint Delta', 2) }" />
        <img title="Scorched Acres" src="/img/risk_of_rain_2/scorched_acres.png" :class="{ 'opacity-10': !environnementUnlocked('Scorched Acres') && !stageUnlocked(2), 'opacity-35': xOrStageLevel('Scorched Acres', 2)  }" />
        <img v-if="hasDLC1()" title="Sulfur Pools" src="/img/risk_of_rain_2/sulfur_pools.png" :class="{ 'opacity-10': !environnementUnlocked('Sulfur Pools') && !stageUnlocked(2), 'opacity-35': xOrStageLevel('Sulfur Pools', 2) }" />
        <span class="mr-2"></span>
        <img title="Abyssal Depths" src="/img/risk_of_rain_2/abyssal_depths.png" :class="{ 'opacity-10': !environnementUnlocked('Abyssal Depths') && !stageUnlocked(3),  'opacity-35': xOrStageLevel('Abyssal Depths', 3)  }" />
        <img title="Siren's Call" src="/img/risk_of_rain_2/siren_call.png" :class="{ 'opacity-10': !environnementUnlocked('Siren\'s Call') && !stageUnlocked(3), 'opacity-35': xOrStageLevel('Siren\'s Call', 3)  }" />
        <img title="Sundered Grove" src="/img/risk_of_rain_2/sundered_grove.png" :class="{ 'opacity-10': !environnementUnlocked('Sundered Grove') && !stageUnlocked(3), 'opacity-35': xOrStageLevel('Sundered Grove', 3) }" />
        <span class="mr-2"></span>
        <img title="Sky Meadow" src="/img/risk_of_rain_2/sky_meadow.png" :class="{ 'opacity-10': !environnementUnlocked('Sky Meadow') && !stageUnlocked(4),  'opacity-35': xOrStageLevel('Sky Meadow', 4) }" />
        <span class="mr-2"></span>
        <img title="Commencement" src="/img/risk_of_rain_2/commencement.png" :class="{ 'opacity-10': !environnementUnlocked('Commencement') && !stageUnlocked(4), 'opacity-35': xOrStageLevel('Commencement', 4)  }" />

        <span v-if="limboRoute()" class="mr-2"></span>
        <img v-if="limboRoute()" title="Hidden Realm: A Moment, Fractured" src="/img/risk_of_rain_2/a_moment_fractured.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: A Moment, Fractured')  }" />
        <img v-if="limboRoute()" title="Hidden Realm: A Moment, Whole" src="/img/risk_of_rain_2/a_moment_whole.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: A Moment, Whole')   }" />

        <span v-if="voidlingRoute()" class="mr-2"></span>
        <img v-if="voidlingRoute()" title="Hidden Realm: Bazaar Between Time" src="/img/risk_of_rain_2/bazaar_between_time.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: Bazaar Between Time')   }" />
        <img v-if="voidlingRoute()" title="Void Fields" src="/img/risk_of_rain_2/void_fields.png" :class="{ 'opacity-35': !environnementUnlocked('Void Fields')   }" />
        <img v-if="voidlingRoute()" title="Void Locus" src="/img/risk_of_rain_2/void_locus.png" :class="{ 'opacity-35': !environnementUnlocked('Void Locus')   }" />
        <img v-if="voidlingRoute()" title="The Planetarium" src="/img/risk_of_rain_2/the_planetarium.png" :class="{ 'opacity-35': !environnementUnlocked('The Planetarium')   }" />
    </div>
    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Extra stages</div>

        <img v-if="!limboRoute()" title="Hidden Realm: A Moment, Fractured" src="/img/risk_of_rain_2/a_moment_fractured.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: A Moment, Fractured')  }" />
        <img v-if="!limboRoute()" title="Hidden Realm: A Moment, Whole" src="/img/risk_of_rain_2/a_moment_whole.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: A Moment, Whole')   }" />
        <img title="Hidden Realm: Gilded Coast" src="/img/risk_of_rain_2/glided_coast.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: Gilded Coast')  }" />
        <img title="Hidden Realm: Bulwark's Ambry" src="/img/risk_of_rain_2/bulwark_ambry.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: Bulwark\'s Ambry')  }" />
        <img v-if="!voidlingRoute()" title="Hidden Realm: Bazaar Between Time" src="/img/risk_of_rain_2/bazaar_between_time.png" :class="{ 'opacity-35': !environnementUnlocked('Hidden Realm: Bazaar Between Time')   }" />
        <img v-if="!voidlingRoute()" title="Void Fields" src="/img/risk_of_rain_2/void_fields.png" :class="{ 'opacity-35': !environnementUnlocked('Void Fields')   }" />
        <img v-if="!voidlingRoute()" title="Void Locus" src="/img/risk_of_rain_2/void_locus.png" :class="{ 'opacity-35': !environnementUnlocked('Void Locus')   }" />
        <img v-if="!voidlingRoute()" title="The Planetarium" src="/img/risk_of_rain_2/the_planetarium.png" :class="{ 'opacity-35': !environnementUnlocked('The Planetarium')   }" />
    </div>
</template>
    
<script>

    /**
    * Risk of Rain 2
    *
    * Goal is to beat a specific Boss on a specific stage
    * It can be :
    *   - 0 - Any
    *   - 1 - Mithrix (on Commencement)
    *   - 2 - Voidling (on The Planetarium)
    *   - 3 - Limbo (on A Moment, Whole)
    *
    */
export default {
  name: "gDataRiskOfRain2",
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
            hasDLC1: function () {
                return true;
            },
            xOrStageLevel: function (stage, level) {
                if (!this.stageUnlocked(level) && this.environnementUnlocked(stage) ||
                    (this.stageUnlocked(level) && !this.environnementUnlocked(stage))) {
                    return true;
                }
                return false;
            },
            environnementUnlocked: function (env) {
                if (!this.requireStages() || this.getNumberItemsFromName(env))
                    return true;
                return false;
            }, 
            stageUnlocked: function (level) {
                if (!this.requireStages() || this.getNumberItemsFromName('Progressive Stage') >= level || this.getNumberItemsFromName('Stage ' + level.toString()))
                    return true;
                return false;
            }, 
            requireStages: function () {
                if (this.data.slot_data.hasOwnProperty('requireStages')) {
                    return this.data.slot_data.requireStages;
                }
                return 1;
            },
            getVictory: function () {
                if (this.data.slot_data.hasOwnProperty('victory')) {
                    return this.data.slot_data.victory;
                }
                return 0;
            },
            limboRoute: function () {
                if (this.data.slot_data.hasOwnProperty('victory')) {
                    return this.data.slot_data.victory == 3;
                }
                return 1;
            },
            voidlingRoute: function () {
                if (this.data.slot_data.hasOwnProperty('victory')) {
                    return this.data.slot_data.victory == 2;
                }
                return 1;
            }
        },
  components: {
  },
};
</script>
