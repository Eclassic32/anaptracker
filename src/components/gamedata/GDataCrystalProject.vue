<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="clamshellHunt()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Clamshell')  }"><img title="Clamshell" src="/img/crystal_project/keys/clamshell.png" />x{{ getNumberItemsFromName('Item - Clamshell') }} </span> / {{ clamshellHunt() }}</span>

            <span v-if="trueAstley()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Deity Eye')  }"><img title="Deity Eye" src="/img/crystal_project/keys/deity eye.png" />x{{ getNumberItemsFromName('Item - Deity Eye') }} </span></span>

            <img v-if="trueAstley()" title="S.T.E.M. Ward" src="/img/crystal_project/keys/STEM Ward.png" :class="{ 'opacity-25': !getNumberItemsFromName('S.T.E.M. Ward')  }" />

            <span v-if="getJobsGoal()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getJobs()  }"><img title="Jobs" src="/img/crystal_project/system/crystal.png" />x{{ getJobs() }} / {{ getJobsGoal() }} </span></span>
            <span v-else class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getJobs()  }"><img title="Jobs" src="/img/crystal_project/system/crystal.png" />x{{ getJobs() }} </span></span>

            <!--
            <span v-else>
                <img title="Job - Warrior" src="/img/crystal_project/classes/warrior.png" :class="{ 'opacity-25': !hasJob('Job - Warrior')  }" />
                <img title="Job - Monk" src="/img/crystal_project/classes/monk.png" :class="{ 'opacity-25': !hasJob('Job - Monk')  }" />
                <img title="Job - Rogue" src="/img/crystal_project/classes/rogue.png" :class="{ 'opacity-25': !hasJob('Job - Rogue')  }" />
                <img title="Job - Warlock" src="/img/crystal_project/classes/warlock.png" :class="{ 'opacity-25': !hasJob('Job - Warlock')  }" />
                <img title="Job - Cleric" src="/img/crystal_project/classes/cleric.png" :class="{ 'opacity-25': !hasJob('Job - Cleric')  }" />
                <img title="Job - Wizard" src="/img/crystal_project/classes/wizard.png" :class="{ 'opacity-25': !hasJob('Job - Wizard')  }" />
                <img title="Job - Fencer" src="/img/crystal_project/classes/fencer.png" :class="{ 'opacity-25': !hasJob('Job - Fencer')  }" />
                <img title="Job - Shaman" src="/img/crystal_project/classes/shaman.png" :class="{ 'opacity-25': !hasJob('Job - Shaman')  }" />
                <img title="Job - Scholar" src="/img/crystal_project/classes/scholar.png" :class="{ 'opacity-25': !hasJob('Job - Scholar')  }" />
                <img title="Job - Aegis" src="/img/crystal_project/classes/aegis.png" :class="{ 'opacity-25': !hasJob('Job - Aegis')  }" />
                <img title="Job - Hunter" src="/img/crystal_project/classes/hunter.png" :class="{ 'opacity-25': !hasJob('Job - Hunter')  }" />
                <img title="Job - Chemist" src="/img/crystal_project/classes/chemist.png" :class="{ 'opacity-25': !hasJob('Job - Chemist')  }" />
                <img title="Job - Reaper" src="/img/crystal_project/classes/reaper.png" :class="{ 'opacity-25': !hasJob('Job - Reaper')  }" />
                <img title="Job - Ninja" src="/img/crystal_project/classes/ninja.png" :class="{ 'opacity-25': !hasJob('Job - Ninja')  }" />
                <img title="Job - Nomad" src="/img/crystal_project/classes/nomad.png" :class="{ 'opacity-25': !hasJob('Job - Nomad')  }" />
                <img title="Job - Dervish" src="/img/crystal_project/classes/dervish.png" :class="{ 'opacity-25': !hasJob('Job - Dervish')  }" />
                <img title="Job - Beatsmith" src="/img/crystal_project/classes/beatsmith.png" :class="{ 'opacity-25': !hasJob('Job - Beatsmith')  }" />
                <img title="Job - Samurai" src="/img/crystal_project/classes/samurai.png" :class="{ 'opacity-25': !hasJob('Job - Samurai')  }" />
                <img title="Job - Assassin" src="/img/crystal_project/classes/assassin.png" :class="{ 'opacity-25': !hasJob('Job - Assassin')  }" />
                <img title="Job - Valkyrie" src="/img/crystal_project/classes/valkyrie.png" :class="{ 'opacity-25': !hasJob('Job - Valkyrie')  }" />
                <img title="Job - Summoner" src="/img/crystal_project/classes/summoner.png" :class="{ 'opacity-25': !hasJob('Job - Summoner')  }" />
                <img title="Job - Weaver" src="/img/crystal_project/classes/weaver.png" :class="{ 'opacity-25': !hasJob('Job - Weaver')  }" />
                <img title="Job - Beastmaster" src="/img/crystal_project/classes/beastmaster.png" :class="{ 'opacity-25': !hasJob('Job - Beastmaster')  }" />
                <img title="Job - Mimic" src="/img/crystal_project/classes/mimic.png" :class="{ 'opacity-25': !hasJob('Job - Mimic')  }" />
            </span>
                -->
        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Level & Mounts</div>

            <span v-if="logicalLevel()"  title="Logical Level" class="mr-2 text-xs"><img src="/img/crystal_project/system/image_part_005.png" />lvl <b>{{ logicalLevel() }}</b> </span>

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 6"  title="Quintar Instrument" src="/img/crystal_project/keys/quintar ocarina.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 1"  title="Quintar Instrument" src="/img/crystal_project/keys/quintar flute.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 0"  title="Quintar Instrument" src="/img/crystal_project/keys/proof of merit.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 2"  title="Quintar Instrument" src="/img/crystal_project/keys/quintar ocarina.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Quintar Flute') > 1"  title="Quintar Instrument" src="/img/crystal_project/keys/quintar flute.png" />
            <img v-else src="/img/crystal_project/keys/proof of merit.png"  title="Quintar Instrument" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Quintar Flute')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 2" title="Ibek Bell" src="/img/crystal_project/keys/ibek bell.png" />
            <img v-else src="/img/crystal_project/keys/ibek bell.png"  title="Ibek Bell" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Ibek Bell')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 3" title="Owl Drum" src="/img/crystal_project/keys/owl drum.png" />
            <img v-else src="/img/crystal_project/keys/owl drum.png" title="Owl Drum" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Owl Drum')  }" />

            <img v-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 5" title="Salmon Instrument" src="/img/crystal_project/keys/salmon cello.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Mount Instrument') > 4" title="Salmon Instrument" src="/img/crystal_project/keys/salmon violin.png" />
            <img v-else-if="getNumberItemsFromName('Item - Progressive Salmon Violin') > 1" title="Salmon Instrument" src="/img/crystal_project/keys/salmon cello.png" />
            <img v-else src="/img/crystal_project/keys/salmon violin.png" title="Salmon Instrument" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Progressive Salmon Violin')  }" />


        </div>

        <div v-if="regionLevel()" :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Key Items</div>


            <img v-if="sleketonKey()" src="/img/crystal_project/keys/skeleton key.png" title="Skeleton Key" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Skeleton Key')  }" />

            <span v-if="regionsanity()" class="mr-2 text-xs"><img title="Region Passes" src="/img/crystal_project/keys/map.png" />x{{ (getNumberItemsFromCategory('Pass') + 1) }} </span>
            <span v-if="warpShuffle()" class="mr-2 text-xs"><img title="Warp Points Passes" src="/img/crystal_project/system/image_part_001.png" />x{{ getNumberItemsFromCategory('Home Point') }} </span>

            <img src="/img/crystal_project/stones/new world.png" title="New World Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - New World Stone')  }" />
            <img v-if="regionLevel() > 3" src="/img/crystal_project/stones/old world.png" title="Old World Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Old World Stone')  }" />
            <img src="/img/crystal_project/stones/gaea.png" title="Gaea Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Gaea Stone')  }" />
            <img src="/img/crystal_project/stones/mars.png" title="Mars Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Mars Stone')  }" />
            <img src="/img/crystal_project/stones/poseidon.png" title="Poseidon Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Poseidon Stone')  }" />
            <img v-if="regionLevel() > 1" src="/img/crystal_project/stones/ganymede.png" title="Ganymede Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Ganymede Stone')  }" />
            <img v-if="regionLevel() > 1" src="/img/crystal_project/stones/dione.png" title="Dione Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Dione Stone')  }" />
            <img v-if="regionLevel() > 1" src="/img/crystal_project/stones/triton.png" title="Triton Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Triton Stone')  }" />
            <img v-if="regionLevel() > 1" src="/img/crystal_project/stones/callisto.png" title="Callisto Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Callisto Stone')  }" />
            <img v-if="regionLevel() > 1" src="/img/crystal_project/stones/europa.png" title="Europa Stone" :class="{ 'opacity-25': !getNumberItemsFromName('Item - Europa Stone')  }" />
        </div>
    </div>
</template>
    
<script>
    /**
    * Crystal Project
    *
    * Goal is to either beat Astley (true form or not) or get Clamshells (like a Triforce Hunt)
    *
    * Astley's World needs to collect Jobs.
    */
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
            getGoalDetails: function () {
                if (!this.$parent.hasSlotData())
                    return [];
                var res = [];
                var row_goal = { title: 'Goal', value: null, details: null };
                var row_requirement = { title: 'Jobs required', value: null, details: null };
                var row_regions = { title: 'Regions included', value: 'Beginner', details: null };

                if (this.data.slot_data.goal == 0) {
                    row_goal.value = 'Astley';
                    row_requirement.value = this.data.slot_data.jobGoalAmount;
                }
                else if (this.data.slot_data.goal == 1) {
                    row_goal.value = 'True Astley';
                    row_requirement.value = this.data.slot_data.jobGoalAmount;
                }
                else if (this.data.slot_data.goal == 2) {
                    row_goal.value = 'Clamshell Hunt';
                    row_requirement.title = 'Clamshells required';
                    row_requirement.value = this.data.slot_data.clamshellGoalQuantity;
                }

                res.push(row_goal);
                res.push(row_requirement);

                if (this.data.slot_data.includedRegionsOption == 1)
                    row_regions.value = 'Advanced';
                else if (this.data.slot_data.includedRegionsOption == 2)
                    row_regions.value = 'Expert';
                else if (this.data.slot_data.includedRegionsOption == 3)
                    row_regions.value = 'All';
                res.push(row_regions);

                var dlcs = [];
                if (this.data.slot_data.regionsanity)
                    dlcs.push('Regionsanity');
                if (this.data.slot_data.homePointHustle)
                    dlcs.push('Home Points');
                if (this.data.slot_data.shopsanity)
                    dlcs.push('Shops');


                var row_dlc = { title: 'Extra Shuffle', value: null, details: null };
                if (dlcs.length) {
                    row_dlc.value = dlcs.join(', ');
                    res.push(row_dlc);
                }

                return res;
            },
            getImageClass: function () {
                return this.$parent.getImageClass();
            },
            getNumberItemsFromName: function (name) {
                return this.$parent.getNumberItemsFromName(name);
            },
            getNumberItemsFromCategory: function (name) {
                return this.$parent.getNumberItemsFromCategory(name);
            },
            hasJob: function (name) {
                if (this.data.slot_data.startingJobsForUT && this.data.slot_data.startingJobsForUT.includes(name)) {
                    return 1;
                }
                return this.getNumberItemsFromName(name);
            },
            logicalLevel: function (name) {
                if (this.data.slot_data.progressiveLevelSize) {
                    var level = (1 + this.getNumberItemsFromName('Item - Progressive Level')) * this.data.slot_data.progressiveLevelSize;
                    if (level > this.data.slot_data.maxLevel)
                        level = this.data.slot_data.maxLevel;
                    return level;
                }
                return 0;
            },
            vanillaRun: function () {
                if (this.data.slot_data.hasOwnProperty('goal') && this.data.slot_data.goal == 0 && this.data.slot_data.use_mods == 0) {
                    return 1;
                }
                return 0;
            },
            getJobs: function() {
                return this.$parent.getNumberItemsFromCategory('Job');
        // startingJobQuantity
           },
            getJobsGoal: function () {
                if (this.data.slot_data.hasOwnProperty('jobGoalAmount') && this.data.slot_data.goal != 2) {
                    return this.data.slot_data.jobGoalAmount;
                }
                return 0;
            },
            trueAstley: function () {
                if (this.data.slot_data.hasOwnProperty('goal') && this.data.slot_data.goal == 1) {
                    return 1;
                }
                return 0;
            },
            clamshellHunt: function () {
                if (this.data.slot_data.hasOwnProperty('goal') && this.data.slot_data.goal == 2) {
                    return this.data.slot_data.clamshellGoalQuantity;
                }
                return 0;
            },
            regionsanity: function () {
                if (this.data.slot_data.hasOwnProperty('regionsanity') && this.data.slot_data.regionsanity == 0) {
                    return 0;
                }
                return 1;
            },
            sleketonKey: function () {
                if (this.data.slot_data.hasOwnProperty('keyMode') && this.data.slot_data.keyMode > 2) {
                    return 0;
                }
                return 1;
                
            },
            regionLevel: function () {
                if (this.data.slot_data.hasOwnProperty('includedRegionsOption')) {
                    return this.data.slot_data.includedRegionsOption;
                }
                return 3;
            },
            warpShuffle: function () {
                if (this.data.slot_data.hasOwnProperty('homePointHustle')) {
                    return this.data.slot_data.homePointHustle;
                }
                return this.getNumberItemsFromCategory('Home Point');
            },
        },
  components: {
  },
};
</script>
