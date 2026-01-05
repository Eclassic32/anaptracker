<template>
    <div class="text-center text-white">
        <h1 class="text-xl my-4">Statistics of the 30 last days</h1>
        <div class="inline-block w-200 p-6 align-top align-center relative">
            <div class="mt-4">
                <span class="text-lg">Number of failed API calls : <b>{{ STATS_DATA.api_failed_stats.length }}</b></span>
            </div>
            <div class="mt-4">
                <span class="text-lg">Multiworld rooms tracked : <b>{{ STATS_DATA.rooms_stats.length }}</b></span>
            </div>
            <div>
                <span class="text-lg">Games tracked : <b>{{ STATS_DATA.game_stats.length }}</b></span>
            </div>
            <div>
                <span class="text-lg">Support coverage : <b>{{ coveragePercent() }}</b></span>
            </div>

            <div class="mt-6">
                <table class="align-center clear-both border-collapse inline-block float-none table-fixed">
                    <caption class="caption-top">
                        List of games tracked :
                    </caption>
                    <thead>
                        <tr>
                            <th class="border border-gray-400 p-1 font-bold w-20">#</th>
                            <th class="border border-gray-400 p-1 font-bold w-120">Game</th>
                            <th class="border border-gray-400 p-1 font-bold w-40"># Tracked</th>
                        </tr>
                    </thead>
                    <tr v-for="(game, index) in STATS_DATA.game_counted">
                        <td class="border border-gray-400 p-1">{{index + 1}}</td>
                        <td class="border border-gray-400 p-1">{{game.game}}</td>
                        <td class="border border-gray-400 p-1">{{game.count}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="p-6 align-top">
            <a href="https://github.com/OriginalTomPouce/anaptracker" target="_blank" class="cursor-pointer hover:text-white">Github page</a>
        </div>
    </div>
</template>

<script>

    import ANAP_DATA from "../anapdata.js";
    import axios from 'axios';
    import LIST_OF_GAMES from "../listofgames.js";
    var STATS_DATA = {
        coverage: 0,
        rooms_stats: [],
        game_stats: [],
        api_failed_stats: [],
        game_counted: [],

    };

    export default {
        name: 'statistics',
        props: {
        },
        data: function (
        ) {
            return {
                LIST_OF_GAMES,
                STATS_DATA
            }
        },

        methods: {
            supportedGame: function (name) {
                for (var y = 0; y < this.LIST_OF_GAMES.length; y++) {
                    if (this.LIST_OF_GAMES[y].name == name) {
                        return true;
                    }
                }
                return false;
            },
            coveragePercent: function () {
                if (this.STATS_DATA.game_stats.length > 0) {
                    return Math.floor(this.STATS_DATA.coverage * 100 / this.STATS_DATA.game_stats.length).toString() + '%';
                }
                return '0%';
            },
            loadStatistics: function (data) {
                for (var x = 0; x < data.length; x++) {
                    if (data[x].type == 1) {
                        this.STATS_DATA.rooms_stats.push(data[x]);
                    }
                    else if (data[x].type == 2) {
                        this.STATS_DATA.game_stats.push(data[x]);

                    }
                    else if (data[x].type == 3) {
                        this.STATS_DATA.api_failed_stats.push(data[x]);

                    }
                }

                for (var x = 0; x < this.STATS_DATA.game_stats.length; x++) {
                    var new_game = 1;
                    for (var y = 0; y < this.STATS_DATA.game_counted.length; y++) {
                        if (this.STATS_DATA.game_counted[y].game == this.STATS_DATA.game_stats[x].arg2) {
                            this.STATS_DATA.game_counted[y].count += 1;
                            new_game = 0;
                            break;
                        }
                    }
                    if (new_game) {
                        this.STATS_DATA.game_counted.push({ game: this.STATS_DATA.game_stats[x].arg2, count: 1 });
                    }
                    if (this.supportedGame(this.STATS_DATA.game_stats[x].arg2))
                        this.STATS_DATA.coverage += 1;
                }
                this.STATS_DATA.game_counted.sort((a, b) => a.game - b.game);
                this.STATS_DATA.game_counted.sort((a, b) => b.count - a.count);
            }

        },
        components: {
        },
        mounted: function () {
            if (STATS_DATA.rooms_stats.length == 0) {
                axios
                    .get(ANAP_DATA.tomagueri.statistics_url)
                    .then(response => (this.loadStatistics(response.data)));

            }
        },
    }
</script>
