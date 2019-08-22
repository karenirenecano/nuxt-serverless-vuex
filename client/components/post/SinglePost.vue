<template>
    <div>
        <div class="card w-100">
            <div class="card-body">
            <nuxt-link class="card-link" :to="'post/' + $attrs.item.id"><h5 class="card-title">{{ $attrs.item.title }}</h5></nuxt-link>
            </div>
        </div>
    </div>
</template>