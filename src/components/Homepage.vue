<template>
<div>
    <Menu @saveCommits="getCommit"/>
    <ListCommit v-if="allCommits.length != 0" v-bind:allCommitsToDisplay="allCommits"/>
<div class="container">
  <div class="alert alert-info" v-if="allCommits.length == 0" role="alert">
  <h4 class="alert-heading">Pour votre information :</h4>
  <p>Vous avez besoin de valider vos filtre dans la nav bar, en haut. Vous pouvez choisir le nom du projet / la période à laquelle vous voulez afficher les commits et selectionner les personnes </p>
  <hr>
  <p class="mb-0">Lorsque vous validez, tous les commits de chaque personne s'affichera en bas dans un tableau.</p>
</div>
</div>
</div>
</template>

<script>
import Menu from "./Menu.vue";
import ListCommit from "./ListCommit";

export default {
  name: "Homepage",
  components: {
    Menu,
    ListCommit
  },
  data() {
    return {
      allCommits: []
    };
  },
  methods: {
    getCommit(values) {
      this.allCommits = values;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
