<template>
  <div>
    <TopNav />
    <main>
        <router-view></router-view>
    </main>
  </div>
</template>

<script>


import TopNav from '@/components/TopNav'

export default {
  components: {
    TopNav
  },
};
</script>