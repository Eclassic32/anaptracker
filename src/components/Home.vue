<template>
    <div class="bg-gray-500">
        <form @submit.prevent="loadRoom()">
            <input v-model="roomid" />
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
