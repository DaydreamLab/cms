<template>
  <div>
      <div class="error-msg">
        <div class="error-code">404</div>
        <div class="error-type">PAGE NOT FOUND</div>
      </div>
      <div class="error-desc">
        This is not the place you are looking for, you may try the below actions.
      </div>
      
  </div>
</template>
<script>
export default {
  name: "err404"
};
</script>
<style lang="sass" scoped>

.error-code 
  color: #E2C044
  font-size: 180px

.error-type 
  color: #D3D0CB
  font-size: 48px

.error-desc
  color: #7A8092
  font-size: 24px
  margin-bottom: $navbar-height
</style>

