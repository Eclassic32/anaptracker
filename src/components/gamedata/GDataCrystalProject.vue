<template>
    <div>
        <img title="Job - Warrior" src="/img/crystal_project/classes/warrior.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Warrior')  }" />
        <img src="/img/crystal_project/classes/monk.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Monk')  }" />
        <img src="/img/crystal_project/classes/rogue.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Rogue')  }" />
        <img src="/img/crystal_project/classes/warlock.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Warlock')  }" />
        <img src="/img/crystal_project/classes/cleric.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Cleric')  }" />
        <img src="/img/crystal_project/classes/wizard.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Wizard')  }" />
        <img src="/img/crystal_project/classes/fencer.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Fencer')  }" />
        <img src="/img/crystal_project/classes/shaman.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Shaman')  }" />
        <img src="/img/crystal_project/classes/scholar.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Scholar')  }" />
        <img src="/img/crystal_project/classes/aegis.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Aegis')  }" />
        <img src="/img/crystal_project/classes/hunter.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Hunter')  }" />
        <img src="/img/crystal_project/classes/chemist.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Chemist')  }" />
        <img src="/img/crystal_project/classes/reaper.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Reaper')  }" />
        <img src="/img/crystal_project/classes/ninja.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Ninja')  }" />
        <img src="/img/crystal_project/classes/nomad.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Nomad')  }" />
        <img src="/img/crystal_project/classes/dervish.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Dervish')  }" />
        <img src="/img/crystal_project/classes/beatsmith.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Beatsmith')  }" />
        <img src="/img/crystal_project/classes/samurai.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Samurai')  }" />
        <img src="/img/crystal_project/classes/assassin.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Assassin')  }" />
        <img src="/img/crystal_project/classes/valkyrie.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Valkyrie')  }" />
        <img src="/img/crystal_project/classes/summoner.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Summoner')  }" />
        <img src="/img/crystal_project/classes/weaver.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Weaver')  }" />
        <img src="/img/crystal_project/classes/beastmaster.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Beastmaster')  }" />
        <img src="/img/crystal_project/classes/mimic.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Job - Mimic')  }" />

        |

        <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 6" src="/img/crystal_project/keys/quintar ocarina.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 1" src="/img/crystal_project/keys/quintar flute.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 0" src="/img/crystal_project/keys/proof of merit.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 2" src="/img/crystal_project/keys/quintar ocarina.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 1" src="/img/crystal_project/keys/quintar flute.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/crystal_project/keys/proof of merit.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Quintar Flute')  }" />

        <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 2" src="/img/crystal_project/keys/ibek bell.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/crystal_project/keys/ibek bell.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Ibek Bell')  }" />

        <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 3" src="/img/crystal_project/keys/owl drum.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/crystal_project/keys/owl drum.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Owl Drum')  }" />

        <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 5" src="/img/crystal_project/keys/salmon cello.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrusment') > 4" src="/img/crystal_project/keys/salmon violin.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else-if="getNumberItemsFromName('Item - Progressive Salmon Violin') > 1" src="/img/crystal_project/keys/salmon cello.png" class="inline-block mr-1 w-[16px] h-[16px]" />
        <img v-else src="/img/crystal_project/keys/salmon violin.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Salmon Violin')  }" />


        |
        <img src="/img/crystal_project/keys/skeleton key.png" class="inline-block mr-1 w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Skeleton Key')  }" />

        <span class="mr-2 text-xs"><img src="/img/crystal_project/keys/map.png" class="inline-block w-[16px] h-[16px]" :class="{ 'opacity-25': !getNumberItemsFromCategory('Pass')  }" />x{{ getNumberItemsFromCategory('Pass') }} </span>

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
            getNumberItemsFromName: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.location_name_to_id && this.data && this.data.player_items_received) {

                    var id = this.gamedata.item_name_to_id[name];
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (this.data.player_items_received[this.index].items[x][0] == id)
                            res++;
                    }
                }
                return res;
            },
            getNumberItemsFromCategory: function (name) {
                var res = 0;
                if (this.gamedata && this.gamedata.item_name_groups && this.data && this.data.player_items_received) {

                    var group = this.gamedata.item_name_groups[name];
                    var list_of_ids = [];
                    for (var x = 0; x < group.length; x++) {
                        list_of_ids.push(this.gamedata.item_name_to_id[group[x]]);
                    }
                    //console.log(this.gamedata.item_name_to_id);
                    //console.log(id);
                    //console.log(this.data.player_items_received);
                    for (var x = 0; x < this.data.player_items_received[this.index].items.length; x++) {
                        //console.log(this.data.player_items_received[this.index].items[x])
                        if (list_of_ids.includes(this.data.player_items_received[this.index].items[x][0]))
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
