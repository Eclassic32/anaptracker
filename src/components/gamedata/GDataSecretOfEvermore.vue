<template>
    <div class="inline-block">
        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Goal</div>

            <span v-if="coreFragmentNumber()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Energy Core Fragment')  }"><img title="Energy Core Fragment" src="/img/secret_of_evermore/keyitems/energy_core_fragments.png" />x{{ getNumberItemsFromName('Energy Core Fragment') }} </span> / {{ coreFragmentNumber() }}</span>
            <span v-else-if="coreFragmentMode()" class="mr-2 text-xs"><span class="font-bold" :class="{ 'opacity-25': !getNumberItemsFromName('Energy Core Fragment')  }"><img title="Energy Core Fragment" src="/img/secret_of_evermore/keyitems/energy_core_fragments.png" />x{{ getNumberItemsFromName('Energy Core Fragment') }} </span></span>
            <img v-else title="Energy Core" src="/img/secret_of_evermore/keyitems/energy_core.png" :class="{ 'opacity-25': !getNumberItemsFromName('Energy Core')  }" />

            <img v-if="getNumberItemsFromName('Diamond Eye') > 2" title="3 Diamond Eyes" src="/img/secret_of_evermore/keyitems/diamond_eyes_3.png" />
            <img v-else-if="getNumberItemsFromName('Diamond Eye') > 1" title="2 Diamond Eyes" src="/img/secret_of_evermore/keyitems/diamond_eyes_2.png" />
            <img v-else title="Diamond Eye" src="/img/secret_of_evermore/keyitems/diamond_eyes_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Diamond Eye')  }" />
            <img title="Gauge" src="/img/secret_of_evermore/keyitems/gauge.png" :class="{ 'opacity-25': !getNumberItemsFromName('Gauge')  }" />
            <img title="Wheel" src="/img/secret_of_evermore/keyitems/wheel.png" :class="{ 'opacity-25': !getNumberItemsFromName('Wheel')  }" />


        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Equipment</div>

            <img v-if="getNumberItemsFromName('Neutron Blade')" title="Neutron Blade" src="/img/secret_of_evermore/weapons/sword_4.png" />
            <img v-else-if="getNumberItemsFromName('Crusader Sword')" title="Crusader Sword" src="/img/secret_of_evermore/weapons/sword_3.png" />
            <img v-else-if="getNumberItemsFromName('Gladiator Sword')" title="Gladiator Sword" src="/img/secret_of_evermore/weapons/sword_2.png" />
            <img v-else title="Bone Crusher" src="/img/secret_of_evermore/weapons/sword_1.png" />

            <img v-if="getNumberItemsFromName('Atom Smasher')" title="Atom Smasher" src="/img/secret_of_evermore/weapons/axe_4.png" />
            <img v-else-if="getNumberItemsFromName('Knight Basher')" title="Knight Basher" src="/img/secret_of_evermore/weapons/axe_3.png" />
            <img v-else-if="getNumberItemsFromName('Bronze Axe')" title="Bronze Axe" src="/img/secret_of_evermore/weapons/axe_2.png" />
            <img v-else title="Spider's Claw" src="/img/secret_of_evermore/weapons/axe_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Spider Claw')  }" />

            <img v-if="getNumberItemsFromName('Laser Lance')" title="Laser Lance" src="/img/secret_of_evermore/weapons/spear_4.png" />
            <img v-else-if="getNumberItemsFromName('Lance (Weapon)')" title="Lance" src="/img/secret_of_evermore/weapons/spear_3.png" />
            <img v-else-if="getNumberItemsFromName('Bronze Spear')" title="Bronze Spear" src="/img/secret_of_evermore/weapons/spear_2.png" />
            <img v-else title="Horn Spear" src="/img/secret_of_evermore/weapons/spear_1.png" :class="{ 'opacity-25': !getNumberItemsFromName('Horn Spear')  }" />

            <img v-if="getNumberItemsFromName('30 Cryo Blast')" title="Cryo Blast" src="/img/secret_of_evermore/weapons/ammo_3.png" />
            <img v-else-if="getNumberItemsFromName('30 Particle Bombs')" title="Particle Bomb" src="/img/secret_of_evermore/weapons/ammo_2.png" />
            <img v-else-if="getNumberItemsFromName('30 Thunderballs')" title="Thunderball" src="/img/secret_of_evermore/weapons/ammo_1.png" />
            <img v-else title="Bazooka" src="/img/secret_of_evermore/weapons/bazooka.png" :class="{ 'opacity-25': !getNumberItemsFromName('Bazooka')  }" />

        </div>

        <div :class="getImageClass()" class="inline-block bg-stone-100/40 rounded-xs p-[2px] pl-[4px] pb-[4px] mx-2 bg-opacity-25">
            <div v-if="$parent.get_size()" class="text-xs font-normal text-left">Alchemy</div>

            <img title="Levitate" src="/img/secret_of_evermore/magic/levitate.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Levitate')  }" />
            <img title="Revealer" src="/img/secret_of_evermore/magic/revealer.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Revealer')  }" />
            <span class="mr-2"></span>
            <img v-if="getNumberItemsFromName('Super Heal')" title="Super Heal" src="/img/secret_of_evermore/magic/super_heal.gif" />
            <img v-else title="Heal" src="/img/secret_of_evermore/magic/heal.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Heal')  }" />
            <img title="One Up" src="/img/secret_of_evermore/magic/one_up.gif" :class="{ 'opacity-25': !getNumberItemsFromName('One Up')  }" />
            <img title="Revive" src="/img/secret_of_evermore/magic/revive.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Revive')  }" />
            <img v-if="getNumberItemsFromName('Miracle Cure')" title="Miracle Cure" src="/img/secret_of_evermore/magic/miracle_cure.gif" />
            <img v-else title="Cure" src="/img/secret_of_evermore/magic/cure.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Cure')  }" />
            <img v-if="getNumberItemsFromName('Barrier')" title="Barrier" src="/img/secret_of_evermore/magic/barrier.gif" />
            <img v-else-if="getNumberItemsFromName('Speed')" title="Speed" src="/img/secret_of_evermore/magic/speed.gif" />
            <img v-else title="Defend" src="/img/secret_of_evermore/magic/defend.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Defend')  }" />
            <img v-if="getNumberItemsFromName('Energize')" title="Energize" src="/img/secret_of_evermore/magic/energize.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Energize')  }" />
            <img v-else title="Atlas" src="/img/secret_of_evermore/magic/atlas.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Atlas')  }" />
            <img title="Call Up" src="/img/secret_of_evermore/magic/call_up.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Call Up')  }" />
            <span class="mr-2"></span>

            <img v-if="getNumberItemsFromName('Lance')" title="Lance" src="/img/secret_of_evermore/magic/lance.gif" />
            <img v-else-if="getNumberItemsFromName('Crush')" title="Crush" src="/img/secret_of_evermore/magic/crush.gif" />
            <img v-else title="Hard Ball" src="/img/secret_of_evermore/magic/hard_ball.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Hard Ball')  }" />

            <img v-if="getNumberItemsFromName('Fire Power')" title="Fire Power" src="/img/secret_of_evermore/magic/fire_power.gif" />
            <img v-else-if="getNumberItemsFromName('Explosion')" title="Explosion" src="/img/secret_of_evermore/magic/explosion.gif" />
            <img v-else-if="getNumberItemsFromName('Fireball')" title="Fireball" src="/img/secret_of_evermore/magic/fireball.gif" />
            <img v-else title="Flash" src="/img/secret_of_evermore/magic/flash.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Flash')  }" />

            <img v-if="getNumberItemsFromName('Nitro')" title="Nitro" src="/img/secret_of_evermore/magic/nitro.gif" />
            <img v-else-if="getNumberItemsFromName('Lightning Storm')" title="Nitro" src="/img/secret_of_evermore/magic/lightning_storm.gif" />
            <img v-else-if="getNumberItemsFromName('Sting')" title="Sting" src="/img/secret_of_evermore/magic/sting.gif" />
            <img v-else title="Acid Rain" src="/img/secret_of_evermore/magic/acid_rain.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Acid Rain')  }" />

            <img v-if="getNumberItemsFromName('Slow Burn')" title="Slow Burn" src="/img/secret_of_evermore/magic/slow_burn.gif" />
            <img v-else title="Corrosion" src="/img/secret_of_evermore/magic/corrosion.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Corrosion')  }" />

            <img v-if="getNumberItemsFromName('Double Drain')" title="Double Drain" src="/img/secret_of_evermore/magic/double_drain.gif" />
            <img v-else title="Drain" src="/img/secret_of_evermore/magic/drain.gif" :class="{ 'opacity-25': !getNumberItemsFromName('Drain')  }" />
        </div>
    </div>
</template>
    
<script>
/**
 *  Secret of Evermore
 *  
 *  The goal is to reach Omnitopia and beat Carltron's Robot 
 *  You need the rocket ingredients (Diamond Eyes, Gauge and Wheel), and the Energy Core that can be splitted depending on the goal
 *  
 *  The game slot data is empty at the moment, but the goal can be :
 *  - 0 : Vanilla Core
 *  - 1 : Shuffled Core
 *  - 2 : Shuffled Fragments
 * 
 * Notes :
 * - You always start with a Bone Crusher. (it's never tracked by archipelago)
 * - A Bazooka is needed to fire their projectiles, but you can get a free one on Ebony (sphere 2).
 * 
 */ 
export default {
        name: "gDataSecretOfEvermore",
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
            coreFragmentMode: function () {
                if (this.data.slot_data.hasOwnProperty('EnergyCore') && this.data.slot_data.EnergyCore == 2) {
                    return 1;
                }
                return this.getNumberItemsFromName('Energy Core Fragment');
            },
            coreFragmentNumber: function () {
                if (this.coreFragmentMode()) {
                    return this.data.slot_data.RequiredFragments;
                }
                return 0;
            }
        },
  components: {
  },
};
</script>
