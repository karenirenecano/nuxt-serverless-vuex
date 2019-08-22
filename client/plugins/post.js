import Vue from 'vue';

import { mapGetters, mapState } from 'vuex';

const Post = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    posts: 'post/posts',
                    post: 'post/post'
                })
            }
        })
    }
}


Vue.use(Post);