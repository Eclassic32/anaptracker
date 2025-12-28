<template>
    <div class="text-center text-white">
        <h1 class="text-xl my-4">Welcome to A Normal AP Tracker !</h1>
        <span>Please enter the ID or the URL of the Archipelago Room.</span>
        <form @submit.prevent="loadRoom()">
            <input v-model="roomid" type="text" class="border-1 border-gray-500 rounded-xs p-2 mr-2" />
            <input type="submit" class="bg-blue-800 p-2 br-1 rounded-xs" value="Track !" />
        </form>
        <div class="mt-10">
            <span class="font-bold">What the app can do :</span>
            <ul class="list-disc">
                <li>
                    Track global check completion and individual checks completion. (like the usual tracker)
                </li>
                <li>
                    Display key items for supported games.
                </li>
                <li>
                    Size settings, and display options.
                </li>
                <li>
                    List sorting (by completion, activity, ...)
                </li>
            </ul>
        </div>
        <div class="mt-6">
            <span class="font-bold">What will it do later :</span>
            <ul class="list-disc">
                <li>
                    Display goal settings for supported games.
                </li>
            </ul>
        </div>
        <div class="mt-6">
            <span class="font-bold">Supported games for advanced tracking :</span>
            <ul class="list-disc">
                <li v-for="element in LIST_OF_GAMES">
                    {{ element.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import LIST_OF_GAMES from "../listofgames.js";

    export default {
        name: 'home',
        props: {
        },
        data: function (
        ) {
            return {
                roomid: '',
                LIST_OF_GAMES
            }
        },

        methods: {
            loadRoom: function () {
                var roomstr = this.roomid;
                var fake_args = roomstr.split('/');
                this.$parent.loadRoom(fake_args[fake_args.length - 1]);
            }

        },
        components: {
        }
    }
</script>
