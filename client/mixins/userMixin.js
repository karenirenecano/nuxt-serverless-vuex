export default {
    methods:{
        userData() {
            return this.$auth.$state.user;
        },
        isLoggedIn() {
            return this.$auth.$state.loggedIn;
        }
    }
}