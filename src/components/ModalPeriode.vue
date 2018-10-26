<template>
    <!-- Modal -->
<div class="modal fade bd-example-modal-lg modalPeriode" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Choix de la periode</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body " style="height:400px">
        <div class="form-group">
          <label for="start-date">Start</label>
          <input type="date" id="start-date" class="form-control" v-model="dateStart">
        </div>
        <div class="form-group">
          <label for="end-date">End</label>
          <input type="date" id="end-date" class="form-control" v-model="dateEnd">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" v-on:click="sendInfo()" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ModalPeriode",
  data() {
    return {
      dateStart: "",
      dateEnd: ""
    };
  },
  methods: {
    dateTake(data) {
      console.log(data);
      this.dateStart = data.start;
      this.dateEnd = data.end;
    },
    sendInfo() {
      this.$emit("dateSend", { start: this.dateStart, end: this.dateEnd });
    }
  }
};
</script>
