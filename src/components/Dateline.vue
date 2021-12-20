<template>
  <div>
    <div class="center">
      <h1>{{ year }}</h1>
    </div>
    <div class="vl"></div>
  </div>
</template>

<script>
export default {
  name: "Dateline",
  props: {
    year: String
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
.vl {
  border-left: 1px solid white;
  height: 150px;
  position: relative;
  margin-left: 50%;
  margin-top: 90px;
  margin-bottom: 90px;
}

.center {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 16px;
  right: 0px;
  text-align: center;
  margin-top: 45px;
  letter-spacing: 20px;
}
</style>
