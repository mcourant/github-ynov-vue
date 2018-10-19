<template>
<div v-bind:class="{hide : isActive}" class="modal fade bd-example-modal-lg modalAccount" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in listAccount" :key="account.firstname">
              <td scope="row">{{ account.firstname }}</td>
              <td>{{ account.lastname }}</td>
              <td>
                <button type="button" v-if="account.selected" disabled class="btn btn-success btn-sm">Selected</button>
                <button type="button" v-else v-on:click="selectedAccount(account)" data-dismiss="close" class="btn btn-warning btn-sm">Select</button>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalAccount",
  data (){
    return {
      listAccount: [],
      isActive: false
    }
  },
  props:[
    'accountSelected'
  ],
  methods:{
    selectedAccount (account) {
      this.isActive = true
      this.$emit('selected', account)
    }
  },
  created () {
    this.listAccount.push({
      "id" : 1,
      "firstname" : "Maxime",
      "lastname" : "COURANT",
      "selected" : true
    })
    this.listAccount.push({
      "id" : 2,
      "firstname" : "Matthieu",
      "lastname" : "SAINT-MARTIN",
      "selected" : false
    })
  }
};
</script>
