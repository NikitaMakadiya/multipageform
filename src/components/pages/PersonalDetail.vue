<template>
  <div>
    <h1 class="font-bold text-lg text-red-800 my-10">Personal Detail</h1>
    <div>
      <label>First Name:</label>
      <input
        v-model="formdata.firstName"
        type="text"
        class="border p-1 mb-2 w-full"
      />

      <label>Last Name:</label>
      <input
        v-model="formdata.lastName"
        type="text"
        class="border p-1 mb-2 w-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalDetail",
  data() {
    return {
      formdata: {
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    getData() {
      return this.formdata;
    },
  },
};
</script>
