<template>
<div class="container">
    <div class="card" v-for="(value,key) in allCommitsToDisplay['commits']" :key="key" style="margin-bottom:40px">
        <div class="card-body">
            <h5 class="card-title">{{value.allName}} - Github : {{value.name}} <span><button type="button" data-toggle="modal" v-bind:data-target="'#modal_readme_'+key" class="btn btn-primary"  style="margin-left:20px">Readme</button></span> </h5>
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
                    <tr v-for="(value, key) in value.commits" :key="key">
                        <th scope="row">{{key}}</th>
                        <td>{{value.committer.name}}</td>
                        <td>{{formatDate(new Date(value.committer.date))}}</td>
                        <td>{{value.message}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
<div class="modal fade bd-example-modal-lg" v-bind:id="'modal_readme_'+key" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">Readme</div>
              <div class="modal-body">
              <div v-html="value.readme"></div>
              </div>
            </div>
          </div>
        </div>
    </div>



</div>



</template>

<script>
export default {
  name: "Menu",
  data (){
    return {
      fgyhulijko: ""
    }
  },
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
