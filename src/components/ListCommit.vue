<template>
<div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Name commit</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value, key) in allCommitsToDisplay" :key="key">
      <th scope="row">{{key}}</th>
      <td>{{value.committer.name}}</td>
      <td>{{formatDate(new Date(value.committer.date))}}</td>
      <td>{{value.message}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    allCommitsToDisplay: {}
  },
  methods: {
    formatDate: date => {
      var monthNames = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + " " + monthNames[monthIndex] + " " + year;
    }
  }
};
</script>
