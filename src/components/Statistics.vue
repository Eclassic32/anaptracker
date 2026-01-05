<template>
    <div class="text-center text-white">
        <h1 class="text-2xl my-4">Statistics of the 30 last days</h1>
        <div class="inline-block w-full p-6 align-top align-center relative">
            <div>

                <div class="inline-block bg-red-800 rounded-sm mx-4 bg-opacity-25 p-4">Number of failed API calls<div class="text-5xl font-bold mt-4">{{ STATS_DATA.api_failed_stats.length }}</div></div>

                <div class="inline-block bg-emerald-800 rounded-sm mx-4 bg-opacity-25 p-4">Multiworld rooms tracked<div class="text-5xl font-bold mt-4">{{ STATS_DATA.rooms_stats.length }}</div></div>

                <div class="inline-block bg-emerald-800 rounded-sm mx-4 bg-opacity-25 p-4">Games tracked<div class="text-5xl font-bold mt-4">{{ STATS_DATA.game_stats.length }}</div></div>

                <div class="inline-block bg-emerald-800 rounded-sm mx-4 bg-opacity-25 p-4">Support Coverage<div class="text-5xl font-bold mt-4">{{ coveragePercent() }}</div></div>
            </div>

            <div class="mt-6 inline-block w-full lg:w-1/2 align-top">
                <table class="align-center clear-both border-collapse inline-block float-none table-fixed">
                    <caption class="caption-top">
                        Api calls failed :
                    </caption>
                    <thead>
                        <tr>
                            <th class="border border-gray-400 p-1 font-bold w-120">URL</th>
                            <th class="border border-gray-400 p-1 font-bold w-40">Error</th>
                            <th class="border border-gray-400 p-1 font-bold w-40">Time</th>
                        </tr>
                    </thead>
                    <tr v-for="(call, index) in STATS_DATA.api_failed_stats">
                        <td v-if="recentBy(call.created_at, 1)" class="text-xs border border-gray-400 p-1">{{call.arg1}}</td>
                        <td v-if="recentBy(call.created_at, 1)" class="text-sm border border-gray-400 p-1">{{call.arg2}}</td>
                        <td v-if="recentBy(call.created_at, 1)" class="text-sm border border-gray-400 p-1">{{call.created_at}}</td>
                    </tr>
                </table>
            </div>
            <div class="mt-6 inline-block w-1/2 lg:w-1/2 align-top">
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
                        <td :class="{'p-1' : index < 100, 'text-lg' : index < 10, 'text-sm' : index >= 20, 'text-xs' : index >= 50}" class="border border-gray-400">{{index + 1}}</td>
                        <td :class="{'p-1' : index < 100, 'text-lg' : index < 10, 'text-sm' : index >= 20, 'text-xs' : index >= 50}" class="border border-gray-400"><img v-if="supportedGame(game.game)" title="ANAP tracker supports this game!" src="/img/crystal_project/system/image_part_005.png" class="mr-1 w-[16px] h-[16px] inline" />{{game.game}}</td>
                        <td :class="{'p-1' : index < 100, 'text-lg' : index < 10, 'text-sm' : index >= 20, 'text-xs' : index >= 50}" class="border border-gray-400">{{game.count}}</td>
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
            recentBy: function (time, days) {
                var date_now = Date.now();
                var date_act = new Date(time).getTime();
                var seconds = Math.floor((date_now - date_act) / 1000);

                if (seconds > 60 * 60 * 24 * days)
                    return false;
                return true;
            },
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
                this.STATS_DATA.api_failed_stats.sort((a, b) => b.created_at.localeCompare(a.created_at));
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
