<template>
    <div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Science Packs</div>

            <img title="Automation Science Pack" src="/img/factorio/32px-Automation_science_pack.png" />
            <img title="Logistic Science Pack" src="/img/factorio/32px-Logistic_science_pack.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-science-pack') && !getNumberItemsFromName('logistic-science-pack') }" />
            <img title="Military Science Pack" src="/img/factorio/32px-Military_science_pack.png" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 2 && !getNumberItemsFromName('military-science-pack')  }" />
            <img title="Chemical Science Pack" src="/img/factorio/32px-Chemical_science_pack.png" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 3 && !getNumberItemsFromName('chemical-science-pack')  }" />
            <img title="Production Science Pack" src="/img/factorio/32px-Production_science_pack.png" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 4 && !getNumberItemsFromName('production-science-pack')  }" />
            <img title="Utility Science Pack" src="/img/factorio/32px-Utility_science_pack.png" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 5 && !getNumberItemsFromName('utility-science-pack')  }" />
            <img title="Rocket Silo" src="/img/factorio/32px-Rocket_silo.png" :class="{ 'opacity-25': !getNumberItemsFromName('rocket-silo')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Factory Buildings</div>

            <img v-if="getNumberItemsFromName('progressive-automation') > 2 || getNumberItemsFromName('automation-3') && getNumberItemsFromName('automation-2') && getNumberItemsFromName('automation')" title="Assembling Machine 3" src="/img/factorio/32px-Assembling_machine_3.png" />
            <img v-else-if="getNumberItemsFromName('progressive-automation') > 1 || getNumberItemsFromName('automation-2') && getNumberItemsFromName('automation')" title="Assembling Machine 2" src="/img/factorio/32px-Assembling_machine_2.png" />
            <img v-else title="Assembling Machine" src="/img/factorio/32px-Assembling_machine_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-automation') && !getNumberItemsFromName('automation')  }" />


            <img v-if="getNumberItemsFromName('progressive-logistics') > 2 || getNumberItemsFromName('logistics-3') && getNumberItemsFromName('logistics-2') && getNumberItemsFromName('logistics')" title="Express Transport Belt" src="/img/factorio/32px-Express_transport_belt.png" />
            <img v-else-if="getNumberItemsFromName('progressive-logistics') > 1 || getNumberItemsFromName('logistics-2') && getNumberItemsFromName('logistics')" title="Fast Transport Belt" src="/img/factorio/32px-Fast_transport_belt.png" />
            <img v-else title="Transport Belt" src="/img/factorio/32px-Transport_belt.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-logistics') && !getNumberItemsFromName('logistics')  }" />


            <img v-if="getNumberItemsFromName('progressive-inserter') > 1 || getNumberItemsFromName('bulk-inserters')" title="Bulk Inserter" src="/img/factorio/32px-Bulk_inserter.png" />
            <img v-else-if="getNumberItemsFromName('progressive-inserter') || getNumberItemsFromName('fast-inserters')" title="Fast Inserter" src="/img/factorio/32px-Fast_inserter.png" />
            <img v-else title="Inserter" src="/img/factorio/32px-Inserter.png" />

            <img v-if="getNumberItemsFromName('progressive-advanced-material-processing') > 1 || getNumberItemsFromName('electric-furnace')" title="Electric Furnace" src="/img/factorio/32px-Electric_furnace.png" />
            <img v-else-if="getNumberItemsFromName('progressive-advanced-material-processing') || getNumberItemsFromName('steel-furnace')" title="Steel Furnace" src="/img/factorio/32px-Steel_furnace.png" />
            <img v-else title="Stone Furnace" src="/img/factorio/32px-Stone_furnace.png" class="inline-block mr-1 w-[16px] h-[16px]" />

            <img title="Pumpjack" src="/img/factorio/32px-Pumpjack.png" :class="{ 'opacity-25': !getNumberItemsFromName('oil-gathering')  }" />

            <img v-if="getNumberItemsFromName('progressive-electric-energy-distribution') > 1 || getNumberItemsFromName('electric-energy-distribution-2')" title="Substation" src="/img/factorio/32px-Substation.png" />
            <img v-else-if="getNumberItemsFromName('progressive-electric-energy-distribution') || getNumberItemsFromName('electric-energy-distribution-1')" title="Medium Electric Pole" src="/img/factorio/32px-Medium_electric_pole.png" />
            <img v-else title="Small Electric Pole" src="/img/factorio/32px-Small_electric_pole.png" class="inline-block mr-1 w-[16px] h-[16px]" />

            <img v-if="getNumberItemsFromName('progressive-turret') > 1 || getNumberItemsFromName('laser-turret')" title="Laser Turret" src="/img/factorio/32px-Laser_turret.png" />
            <img v-else title="Gun Turret" src="/img/factorio/32px-Gun_turret.png" :class="{ 'opacity-25': !getNumberItemsFromName('gun-turret')  }" />

        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Materials</div>

            <img title="Steel Plate" src="/img/factorio/32px-Steel_plate.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-processing') && !getNumberItemsFromName('steel-processing') }" />
            <img v-if="getNumberItemsFromName('progressive-processing') > 2 || getNumberItemsFromName('advanced-oil-processing')" title="Advanced Oil Processing" src="/img/factorio/32px-Advanced_oil_processing.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else title="Basic Oil Processing" src="/img/factorio/32px-Basic_oil_processing.png" :class="{ 'opacity-25': getNumberItemsFromName('progressive-processing') < 2 && !getNumberItemsFromName('basic-oil-processing') }" />
            <img title="Sulfur" src="/img/factorio/32px-Sulfur.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-processing') < 3 && !getNumberItemsFromName('sulful-processing') }" />
            <img title="Plastic Bar" src="/img/factorio/32px-Plastic_bar.png" :class="{ 'opacity-25': !getNumberItemsFromName('plastics')  }" />
            <img v-if="getNumberItemsFromName('progressive-military') > 1 || getNumberItemsFromName('military-2')" title="Military 2" src="/img/factorio/32px-Piercing_rounds_magazine.png" />
            <img v-else title="Firearm magazine" src="/img/factorio/32px-Firearm_magazine.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-military') < 2 && !getNumberItemsFromName('military-2') }" />
            <img title="Advanced Circuit" src="/img/factorio/32px-Advanced_circuit.png" :class="{ 'opacity-25': !getNumberItemsFromName('advanced-circuit')  }" />
            <img title="Processing Unit" src="/img/factorio/32px-Processing_unit.png" :class="{ 'opacity-25': !getNumberItemsFromName('processing-unit')  }" />
            <img v-if="getNumberItemsFromName('progressive-engine') > 1 || getNumberItemsFromName('engine') && getNumberItemsFromName('electric-engine')" title="Electric Engine" src="/img/factorio/32px-Electric_engine_unit.png" />
            <img v-else title="Engine Part" src="/img/factorio/32px-Engine_unit.png" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-engine') && !getNumberItemsFromName('engine') }" />
            <img title="Low Density Structure" src="/img/factorio/32px-Low_density_structure.png" :class="{ 'opacity-25': !getNumberItemsFromName('low-density-structure')  }" />
            <img title="Construction Robots" src="/img/factorio/32px-Construction_robot.png" :class="{ 'opacity-25': !getNumberItemsFromName('construction-robotics')  }" />
            <img title="Logistic Robots" src="/img/factorio/32px-Logistic_robot.png" :class="{ 'opacity-25': !getNumberItemsFromName('logistic-robotics')  }" />
        </div>
    </div>
</template>

<script>

    /**
    * Factorio
    *
    * Goal of the game is Rocket Silo.
    *
    * This game is tricky to track, because science recipes can change.
    * Best I can do is to track the common upgrades.
    */
    export default {
        name: "gDataFactorio",
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
            }
        },
        components: {
        },
    };
</script>
