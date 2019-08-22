export const state = () => ({
    posts: null,
    post: null
});

export const getters = {
    posts(state) {
        return state.posts
    },
    post(state) {
        return state.post
    }
};

export const actions = {
    getPosts({commit}) {
        this.$axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            commit('SET_POSTS', response.data);
        })
    },
    getPost({commit}, payload) {
        this.$axios.get("https://jsonplaceholder.typicode.com/posts/" + payload.id)
        .then(response => {
            commit('SET_POST', response.data);
        })
    },
};

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_POST(state, post) {
        state.post = post;
    }
};