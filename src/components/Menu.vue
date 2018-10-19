<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Github ynov vue</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalAccount" href="#">Choix compte : {{ account }}</a>
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalPeriode" href="#">Choix période : {{ periode[0] }} -> {{ periode[1] }}</a>
        <a class="p-2 text-dark" data-toggle="modal" data-target=".modalProject" href="#">Choix projet : {{ project }}</a>
      </nav>
    </div>
    
    <modal-account account-selected="1"/>
    <modal-periode/>
    <modal-project/>

  </div>
</template>

<script>
import ModalAccount from "./ModalAccount.vue";
import ModalPeriode from "./ModalPeriode.vue";
import ModalProject from "./ModalProject.vue";

export default {
  name: "Menu",
  components: {
    ModalAccount,
    ModalPeriode,
    ModalProject
  },
  data() {
    return {
      account: "Maxime COURANT",
      periode: ["18-09-2017", "18-09-2018"],
      project: "github-ynov-vue"
    };
  }
};
</script>