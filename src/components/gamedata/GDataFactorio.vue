<template>
    <div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">
            <img src="/img/factorio/32px-Automation_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img src="/img/factorio/32px-Logistic_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 2  }" />
            <img src="/img/factorio/32px-Military_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 3  }" />
            <img src="/img/factorio/32px-Chemical_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 4  }" />
            <img src="/img/factorio/32px-Production_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 5  }" />
            <img src="/img/factorio/32px-Utility_science_pack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 6  }" />
            <img src="/img/factorio/32px-Space_science_pack.png" class="inline-block mr-3 w-[16px] h-[16px]" :class="{ 'opacity-25': getNumberItemsFromName('progressive-science-pack') < 7  }" />
            <img src="/img/factorio/32px-Rocket_silo.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('rocket-silo')  }" />
        </div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">

            <img v-if="getNumberItemsFromName('progressive-automation') > 2" src="/img/factorio/32px-Assembling_machine_3.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('progressive-automation') > 1" src="/img/factorio/32px-Assembling_machine_2.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Assembling_machine_1.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-automation')  }" />


            <img v-if="getNumberItemsFromName('progressive-logistics') > 2" src="/img/factorio/32px-Express_transport_belt.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('progressive-logistics') > 1" src="/img/factorio/32px-Fast_transport_belt.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Transport_belt.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-logistics')  }" />


            <img v-if="getNumberItemsFromName('progressive-inserter') > 1" src="/img/factorio/32px-Bulk_inserter.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('progressive-inserter')" src="/img/factorio/32px-Fast_inserter.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Inserter.png" class="inline-block mr-1 w-[16px] h-[16px]" />

            <img v-if="getNumberItemsFromName('progressive-electric-energy-distribution') > 1" src="/img/factorio/32px-Substation.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else-if="getNumberItemsFromName('progressive-electric-energy-distributionn')" src="/img/factorio/32px-Medium_electric_pole.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Small_electric_pole.png" class="inline-block mr-1 w-[16px] h-[16px]" />

            <img v-if="getNumberItemsFromName('progressive-turret') > 1" src="/img/factorio/32px-Laser_turret.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Gun_turret.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-turret')  }" />

        </div>

        <div class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 my-1 bg-opacity-25">
            <img src="/img/factorio/32px-Pumpjack.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('oil-gathering')  }" />
            <img src="/img/factorio/32px-Plastic_bar.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('plastics')  }" />
            <img src="/img/factorio/32px-Advanced_circuit.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('advanced-circuit')  }" />
            <img src="/img/factorio/32px-Processing_unit.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('processing-unit')  }" />
            <img v-if="getNumberItemsFromName('progressive-engine') > 1" src="/img/factorio/32px-Electric_engine_unit.png" class="inline-block mr-1 w-[16px] h-[16px]" />
            <img v-else src="/img/factorio/32px-Engine_unit.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('progressive-engine')  }" />
            <img src="/img/factorio/32px-Construction_robot.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('construction-robotics')  }" />
            <img src="/img/factorio/32px-Logistic_robot.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('logistic-robotics')  }" />
        </div>
    </div>
</template>
    
<script>

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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id && this.data && this.data.player_items_received) {

                    var id = this.gamedata.item_name_to_id[name];
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
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
