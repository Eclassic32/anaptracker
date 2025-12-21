
import GDataAHatInTime from './components/gamedata/GDataAHatInTime.vue';
import GDataCeleste from './components/gamedata/GDataCeleste.vue';
import GDataFactorio from './components/gamedata/GDataFactorio.vue';
import GDataHollowKnight from './components/gamedata/GDataHollowKnight.vue';
import GDataPokemonCrystal from './components/gamedata/GDataPokemonCrystal.vue';
import GDataPokemonEmerald from './components/gamedata/GDataPokemonEmerald.vue';
import GDataPokemonFRLG from './components/gamedata/GDataPokemonFRLG.vue';
import GDataMario64 from './components/gamedata/GDataMario64.vue';
import GDataShipOfHarkinian from './components/gamedata/GDataShipOfHarkinian.vue';
import GDataFFMysticQuest from './components/gamedata/GDataFFMysticQuest.vue';
import GDataSuperMetroid from './components/gamedata/GDataSuperMetroid.vue';
import GDataCrystalProject from './components/gamedata/GDataCrystalProject.vue';

var LIST_OF_GAMES = [
    {
        'name': 'A Hat in Time',
        'class': GDataAHatInTime
    },
    {
        'name': 'Celeste (Open World)',
        'class': GDataCeleste
    },
    {
        'name': 'Crystal Project',
        'class': GDataCrystalProject
    },
    {
        'name': 'Factorio',
        'class': GDataFactorio
    },
    {
        'name': 'Final Fantasy Mystic Quest',
        'class': GDataFFMysticQuest
    },
    {
        'name': 'Hollow Knight',
        'class': GDataHollowKnight
    },
    {
        'name': 'Super Mario 64',
        'class': GDataMario64
    },
    {
        'name': 'Pokemon Crystal',
        'class': GDataPokemonCrystal
    },
    {
        'name': 'Pokemon Emerald',
        'class': GDataPokemonEmerald
    },
    {
        'name': 'Pokemon FireRed and LeafGreen',
        'class': GDataPokemonFRLG
    },
    {
        'name': 'Ship of Harkinian',
        'class': GDataShipOfHarkinian
    },
    {
        'name': 'Super Metroid',
        'class': GDataSuperMetroid
    }
];

export default LIST_OF_GAMES;