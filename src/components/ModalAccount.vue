<template>
<div  class="modal fade bd-example-modal-lg modalAccount" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                <button type="button" v-if="account.selected" v-on:click="unselectedAccount(account)" class="btn btn-danger btn-sm">Unselected</button>
                <button type="button" v-else v-on:click="selectedAccount(account)" class="btn btn-success btn-sm">Select</button>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" v-on:click="saveInfo()" data-dismiss="modal">Save</button>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>

import userJson from "../assets/users.json"

export default {
  name: "ModalAccount",
  data (){
    return {
      listAccount: []
    }
  },
  props:[
    'accountSelected'
  ],
  methods:{
    selectedAccount (account) {
      this.listAccount.find(item => item.id === account.id).selected = true
    },
    unselectedAccount (account) {
      this.listAccount.find(item => item.id === account.id).selected = false
    },
    saveInfo(){
      const tmpListAccount = []
      this.listAccount.forEach((e)=>{
          if(e.selected){
            tmpListAccount.push(e)
          }
      })
      this.$emit("saveAccount", tmpListAccount)
    }
    
  },
  created () {
    this.listAccount = userJson
  }
};
</script>
