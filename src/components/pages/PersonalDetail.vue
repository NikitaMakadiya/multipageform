<template>
  <div>
    <h1 class="font-bold text-lg text-red-800 my-10">Personal Detail</h1>
    <div class="w-3/4 flex-col justify-start">
      <div class="justify-start gap-5">
        <label>First Name:</label>
        <input v-model="form.firstName" type="text" class="border p-1 mb-2" />
      </div>
      <div>
        <label>Last Name:</label>
        <input v-model="form.lastName" type="text" class="border p-1 mb-2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalDetail",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
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
