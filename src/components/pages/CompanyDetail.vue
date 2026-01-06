<template>
  <div>
    <h1 class="font-bold text-lg text-red-800 my-10">CompanyDetail</h1>
    <div class="w-3/4 flex-col justify-start">
      <div class="justify-start gap-5">
        <label>Company Name:</label>
        <input v-model="form.companyName" type="text" class="border p-1 mb-2" />
      </div>
      <div>
        <label>Position:</label>
        <input v-model="form.position" type="text" class="border p-1 mb-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyDetail",
  data() {
    return {
      form: {
        companyName: "",
        position: "",
      },
    };
  },
  methods: {
    getData() {
      return this.form;
    },
  },
};
</script>
