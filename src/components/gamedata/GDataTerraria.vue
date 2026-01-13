<template>

    <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
        <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal Progression</div>

        <img title="Post-Skeleton" src="/img/terraria/the_skeleton.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-Skeleton')  }" />
        <img title="Hardmode" src="/img/terraria/hard_mode.png" :class="{ 'opacity-25': !getNumberItemsFromName('Hardmode')  }" />
        <span v-if="getGoal() > 1" class="mr-2"></span>
        <img v-if="getGoal() > 1" title="Post-The Twins" src="/img/terraria/the_twins.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-The Twins')  }" />
        <img v-if="getGoal() > 1" title="Post-The Destroyer" src="/img/terraria/the_destroyer.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-The Destroyer')  }" />
        <img v-if="getGoal() > 1" title="Post-Skeleton Prime" src="/img/terraria/skeleton_prime.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-Skeleton Prime')  }" />
        <img v-if="getGoal() > 2" title="Post-Plantera" src="/img/terraria/planterra.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-Plantera')  }" />
        <img v-if="getGoal() > 3" title="Post-Golem" src="/img/terraria/golem.png" :class="{ 'opacity-25': !getNumberItemsFromName('Post-Golem')  }" />
    </div>
</template>
    
<script>

    /**
    * Hollow Knight
    *
    * Goal is to beat a set Boss
    * It can be :
    *   - 0 - Mechanical Bosses
    *   - 1 - Calamitas Clone
    *   - 2 - Plantera
    *   - 3 - Golem
    *   - 4 - Empress of Light
    *   - 5 - Lunatic Cultist
    *   - 6 - Astrum Deus
    *   - 7 - Moon Lord
    *   - 8 - Providence the Profaned Goddess
    *   - 9 - Devouer of Gods
    *   - 10 - Yharon Drgon of Rebirth
    *   - 11 - Zenith
    *   - 12 - Calamity Final Bosses
    *   - 13 - Primordial Wyrm
    *   - 14 - Boss Rush
    *
    */
export default {
  name: "gDataTerraria",
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
            getGoal: function () {
                if (this.data.slot_data.hasOwnProperty('goal')) {
                    return this.data.slot_data.options.Goal;
                }
                return 15;
            }
        },
  components: {
  },
};
</script>
