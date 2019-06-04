<template>
  <div class="app-bar">
    <div class="header">
      <div class="main" @mouseover="toggleMode('over')" @mouseout="toggleMode('out')">
        <!-- Title -->
        <div key="title" class="title">CASHLITE</div>
      </div>

      <button @click="changeMode(mode === 'add' ? 'normal' : 'add')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAppBar',

  data: () => ({
    mode: 'normal', // normal | progress | add
  }), 

  computed: {

  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../helper/style/_variable.scss';
@import '../helper/style/_mixin.scss';

.app-bar {
  width: 100%;
  position: fixed;
  overflow: hidden;
  z-index: 1; 
  display: flex;
  flex-direction: column;
  background-color: $font-color-light-primary;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: $color-secondary;
}

.main {
  @include flex-center();

  width: calc(100% - 50px);
}

.title {
  font-size: $font-size-large;
  font-weight: $font-weight-heavy;
  color: $font-color-light-primary;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
