<template>
    <div>
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img title="Job - Warrior" src="/img/crystal_project/classes/warrior.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Warrior')  }" />
            <img src="/img/crystal_project/classes/monk.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Monk')  }" />
            <img src="/img/crystal_project/classes/rogue.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Rogue')  }" />
            <img src="/img/crystal_project/classes/warlock.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Warlock')  }" />
            <img src="/img/crystal_project/classes/cleric.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Cleric')  }" />
            <img src="/img/crystal_project/classes/wizard.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Wizard')  }" />
            <img src="/img/crystal_project/classes/fencer.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Fencer')  }" />
            <img src="/img/crystal_project/classes/shaman.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Shaman')  }" />
            <img src="/img/crystal_project/classes/scholar.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Scholar')  }" />
            <img src="/img/crystal_project/classes/aegis.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Aegis')  }" />
            <img src="/img/crystal_project/classes/hunter.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Hunter')  }" />
            <img src="/img/crystal_project/classes/chemist.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Chemist')  }" />
            <img src="/img/crystal_project/classes/reaper.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Reaper')  }" />
            <img src="/img/crystal_project/classes/ninja.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Ninja')  }" />
            <img src="/img/crystal_project/classes/nomad.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Nomad')  }" />
            <img src="/img/crystal_project/classes/dervish.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Dervish')  }" />
            <img src="/img/crystal_project/classes/beatsmith.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Beatsmith')  }" />
            <img src="/img/crystal_project/classes/samurai.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Samurai')  }" />
            <img src="/img/crystal_project/classes/assassin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Assassin')  }" />
            <img src="/img/crystal_project/classes/valkyrie.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Valkyrie')  }" />
            <img src="/img/crystal_project/classes/summoner.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Summoner')  }" />
            <img src="/img/crystal_project/classes/weaver.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Weaver')  }" />
            <img src="/img/crystal_project/classes/beastmaster.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Beastmaster')  }" />
            <img src="/img/crystal_project/classes/mimic.png" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Mimic')  }" />
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 6" src="/img/crystal_project/keys/quintar ocarina.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 1" src="/img/crystal_project/keys/quintar flute.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 0" src="/img/crystal_project/keys/proof of merit.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 2" src="/img/crystal_project/keys/quintar ocarina.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 1" src="/img/crystal_project/keys/quintar flute.png" />
            <img v-else src="/img/crystal_project/keys/proof of merit.png" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Quintar Flute')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 2" src="/img/crystal_project/keys/ibek bell.png" />
            <img v-else src="/img/crystal_project/keys/ibek bell.png" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Ibek Bell')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 3" src="/img/crystal_project/keys/owl drum.png" />
            <img v-else src="/img/crystal_project/keys/owl drum.png" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Owl Drum')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 5" src="/img/crystal_project/keys/salmon cello.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 4" src="/img/crystal_project/keys/salmon violin.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Salmon Violin') > 1" src="/img/crystal_project/keys/salmon cello.png" />
            <img v-else src="/img/crystal_project/keys/salmon violin.png" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Salmon Violin')  }" />


        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <img src="/img/crystal_project/keys/skeleton key.png" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Skeleton Key')  }" />

            <span class="mr-2 text-xs" :class="{ 'opacity-25': !getNumberItemsFromCategory('Pass')  }" ><img src="/img/crystal_project/keys/map.png" />x{{ getNumberItemsFromCategory('Pass') }} </span>

        </div>
    </div>
</template>
    
<script>

export default {
        name: "gDataCrystalProject",
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
                if (this.gamedata && this.gamedata.location_name_to_id) {

                    var id = this.gamedata.item_name_to_id[name];
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        if (this.data.tracker_data.player_items_received[x][0] == id)
                            res++;
                    }
                }
                return res;
            },
            getNumberItemsFromCategory: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.item_name_groups) {

                    var group = this.gamedata.item_name_groups[name];
                    var list_of_ids = [];
                    for (var x = 0; x < group.length; x++) {
                        list_of_ids.push(this.gamedata.item_name_to_id[group[x]]);
                    }
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.tracker_data.player_items_received.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (list_of_ids.includes(this.data.tracker_data.player_items_received[x][0]))
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
