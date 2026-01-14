<template>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Stages</div>

        <img title="Distant Roost" src="/img/risk_of_rain_2/distant_roost.png" :class="{ 'opacity-35': !getNumberItemsFromName('Distant Roost')  }" />
        <img title="Titanic Plains" src="/img/risk_of_rain_2/titanic_plains.png" :class="{ 'opacity-35': !getNumberItemsFromName('Titanic Plains')  }" />
        <img v-if="hasDLC1()" title="Siphoned Forest" src="/img/risk_of_rain_2/siphoned_forest.png" :class="{ 'opacity-35': !getNumberItemsFromName('Siphoned Forest')  }" />
        <img v-if="hasDLC1()" title="Verdant Falls" src="/img/risk_of_rain_2/verdant_falls.png" :class="{ 'opacity-35': !getNumberItemsFromName('Verdant Falls')  }" />
        <span class="mr-2"></span>
        <img title="Abandoned Aqueduct" src="/img/risk_of_rain_2/abandoned_aqueduct.png" :class="{ 'opacity-10': !getNumberItemsFromName('Abandoned Aqueduct') && !getNumberItemsFromName('Progressive Stage'), 'opacity-35': xOrStageLevel('Abandoned Aqueduct', 1) }" />
        <img title="Wetland Aspect" src="/img/risk_of_rain_2/wetland_aspect.png" :class="{ 'opacity-10': !getNumberItemsFromName('Wetland Aspect') && !getNumberItemsFromName('Progressive Stage'), 'opacity-35': xOrStageLevel('Wetland Aspect', 1) }" />
        <img v-if="hasDLC1()" title="Aphelian Sanctuary" src="/img/risk_of_rain_2/aphelian_sanctuary.png" :class="{ 'opacity-15': !getNumberItemsFromName('Aphelian Sanctuary') && !getNumberItemsFromName('Progressive Stage'), 'opacity-35': xOrStageLevel('Aphelian Sanctuary', 1)  }" />
        <span class="mr-2"></span>
        <img title="Rallypoint Delta" src="/img/risk_of_rain_2/rallypoint_delta.png" :class="{ 'opacity-10': !getNumberItemsFromName('Rallypoint Delta') && getNumberItemsFromName('Progressive Stage') < 2, 'opacity-35': xOrStageLevel('Rallypoint Delta', 2) }" />
        <img title="Scorched Acres" src="/img/risk_of_rain_2/scorched_acres.png" :class="{ 'opacity-10': !getNumberItemsFromName('Scorched Acres') && getNumberItemsFromName('Progressive Stage') < 2, 'opacity-35': xOrStageLevel('Scorched Acres', 2)  }" />
        <img v-if="hasDLC1()" title="Sulfur Pools" src="/img/risk_of_rain_2/sulfur_pools.png" :class="{ 'opacity-10': !getNumberItemsFromName('Sulfur Pools') && getNumberItemsFromName('Progressive Stage') < 2, 'opacity-35': xOrStageLevel('Sulfur Pools', 2) }" />
        <span class="mr-2"></span>
        <img title="Abyssal Depths" src="/img/risk_of_rain_2/abyssal_depths.png" :class="{ 'opacity-10': !getNumberItemsFromName('Abyssal Depths') && getNumberItemsFromName('Progressive Stage') < 3,  'opacity-35': xOrStageLevel('Abyssal Depths', 3)  }" />
        <img title="Siren's Call" src="/img/risk_of_rain_2/siren_call.png" :class="{ 'opacity-10': !getNumberItemsFromName('Siren\'s Call') && getNumberItemsFromName('Progressive Stage') < 3, 'opacity-35': xOrStageLevel('Siren\'s Call', 3)  }" />
        <img title="Sundered Grove" src="/img/risk_of_rain_2/sundered_grove.png" :class="{ 'opacity-10': !getNumberItemsFromName('Sundered Grove') && getNumberItemsFromName('Progressive Stage') < 3, 'opacity-35': xOrStageLevel('Sundered Grove', 3) }" />
        <span class="mr-2"></span>
        <img title="Sky Meadow" src="/img/risk_of_rain_2/sky_meadow.png" :class="{ 'opacity-10': !getNumberItemsFromName('Sky Meadow') && getNumberItemsFromName('Progressive Stage') < 4,  'opacity-35': xOrStageLevel('Sky Meadow', 4) }" />
        <span class="mr-2"></span>
        <img title="Commencement" src="/img/risk_of_rain_2/commencement.png" :class="{ 'opacity-10': !getNumberItemsFromName('Commencement') && getNumberItemsFromName('Progressive Stage') < 5, 'opacity-35': xOrStageLevel('Commencement', 4)  }" />

        <span v-if="limboRoute()" class="mr-2"></span>
        <img v-if="limboRoute()" title="Hidden Realm: A Moment, Fractured" src="/img/risk_of_rain_2/a_moment_fractured.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: A Moment, Fractured')  }" />
        <img v-if="limboRoute()" title="Hidden Realm: A Moment, Whole" src="/img/risk_of_rain_2/a_moment_whole.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: A Moment, Whole')   }" />
        
        <span v-if="voidlingRoute()" class="mr-2"></span>
        <img v-if="voidlingRoute()" title="Hidden Realm: Bazaar Between Time" src="/img/risk_of_rain_2/bazaar_between_time.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: Bazaar Between Time')   }" />
        <img v-if="voidlingRoute()" title="Hidden Realm: Void Fields" src="/img/risk_of_rain_2/void_fields.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: Void Fields')   }" />
        <img v-if="voidlingRoute()" title="Hidden Realm: Void Locus" src="/img/risk_of_rain_2/void_locus.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: Void Locus')   }" />
        <img v-if="voidlingRoute()" title="Hidden Realm: The Planetarium" src="/img/risk_of_rain_2/the_planetarium.png" :class="{ 'opacity-35': !getNumberItemsFromName('Hidden Realm: The Planetarium')   }" />
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
                if ((this.getNumberItemsFromName('Progressive Stage') < level || !this.getNumberItemsFromName('Stage' + level.toString())) && this.getNumberItemsFromName(stage) ||
                    (this.getNumberItemsFromName('Progressive Stage') >= level || this.getNumberItemsFromName('Stage' + level.toString())) && !this.getNumberItemsFromName(stage)) {
                    return true;
                }
                return false;
            }, 
            getVictory: function () {
                if (this.data.slot_data.hasOwnProperty('goal')) {
                    return this.data.slot_data.goal;
                }
                return 0;
            },
            limboRoute: function () {
                if (this.data.slot_data.hasOwnProperty('goal')) {
                    return this.data.slot_data.goal == 3;
                }
                return 1;
            },
            voidlingRoute: function () {
                if (this.data.slot_data.hasOwnProperty('goal')) {
                    return this.data.slot_data.goal == 2;
                }
                return 1;
            }
        },
  components: {
  },
};
</script>
