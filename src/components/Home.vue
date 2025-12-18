<template>
    <div class="text-center text-white">
        <h1 class="text-xl my-4">Welcome to A Normal AP Tracker !</h1>
        <span>Please enter the ID of the Archipelago Room</span>
        <form @submit.prevent="loadRoom()">
            <input v-model="roomid" type="text" class="border-1 border-gray-500 rounded-xs p-2 mr-2" />
            <input type="submit" class="bg-blue-800 p-2 br-1 rounded-xs" value="Track !"/>
        </form>
    </div>
</template>

<script>


    export default {
        name: 'home',
        props: {
        },
        data: function (
        ) {
            return {
                roomid: ''
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
