<template>
  <div>
    <h1 class="my-4 text-red-800 font-bold text-2xl">Company Detail</h1>
    <div class="w-3/4 mx-auto shadow-lg p-10">
      <div class="flex items-center gap-3 mb-3">
        <label class="w-28">Company Name</label>
        <input
          class="border border-red-800 p-2"
          :value="formdata.companyName"
          @input="$emit('update-field', { companyName: $event.target.value })"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyDetail",
  props: {
    formdata: {
      fname: String,
    },
  },
};
</script>
