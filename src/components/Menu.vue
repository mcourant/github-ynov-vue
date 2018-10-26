<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Github ynov vue</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalProject" href="#">Choix projet : <span class="text-info">{{ project }}</span></a>
        
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalPeriode" href="#">Choix période : <span class="text-info">{{ formatDate(periode[0]) }} -> {{ formatDate(periode[1]) }}</span></a>
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalAccount" href="#">Choix compte : <span class="text-info">{{ allAccounts.length }} selected</span></a>
      </nav>
      <a class="btn btn-outline-primary" v-on:click="getAllCommits()" href="#">Validate</a>
    </div>
    
    <modal-account @saveAccount="getAccounts"/>
    <modal-periode @dateSend="getDate"/>
    <modal-project/>

    

  </div>
</template>

<script>
import ModalAccount from "./ModalAccount.vue";
import ModalPeriode from "./ModalPeriode.vue";
import ModalProject from "./ModalProject.vue";
import userJson from "../assets/users.json";
import axios from "axios";

export default {
  name: "Menu",
  components: {
    ModalAccount,
    ModalPeriode,
    ModalProject
  },
  data() {
    return {
      project: "github-ynov-vue",
      periode: [new Date("2018-10-10"), new Date("2018-11-20")],
      allAccounts: userJson,
      allCommits: {
        commits: {}
      }
    };
  },
  methods: {
    getAccounts(accounts) {
      this.allAccounts = accounts;
    },
    getDate(date) {
      this.periode = [];
      this.periode.push(new Date(date.start));
      this.periode.push(new Date(date.end));
    },
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
    },
    getAllCommits() {
      this.allCommits = {
        commits: [],
        readme: {}
      };
      axios.defaults.headers.common["Authorization"] =
        "token 0cf95d3d17d2de5c52d1124967605f52e14485a5";
      this.allAccounts.forEach(e => {
        let commitsUser = {
          name: e.github,
          allName : e.firstname +" "+ e.lastname,
          commits: [],
          readme : ""
        };
        axios
          .get(
            "https://api.github.com/repos/" +
              e.github +
              "/" +
              this.project +
              "/commits"
          )
          .then(response => {
            response.data.forEach(e => {
              const dateCommit = new Date(e.commit.committer.date);
              if (
                dateCommit > this.periode[0] &&
                dateCommit < this.periode[1]
              ) {
                commitsUser.commits.push(e.commit)
              }
            });
            axios({
              method: "GET",
              url:
                "https://api.github.com/repos/" +
                e.github +
                "/" +
                this.project +
                "/readme"
            }).then(res => {
              commitsUser.readme = this.b64DecodeUnicode(res.data.content).replace(/(?:\r\n|\r|\n)/g, '</br>');
            });
            this.allCommits.commits.push(commitsUser)
            
            console.log(this.allCommits);
            this.$emit("saveCommits", this.allCommits);
          });
      });
    },
    b64DecodeUnicode: str => {
      return decodeURIComponent(
        Array.prototype.map
          .call(atob(str), function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    }
  }
};
</script>