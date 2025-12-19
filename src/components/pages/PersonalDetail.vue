<template>
  <div>
    <h1 class="my-4 text-red-800 font-bold text-2xl">Personal Detail</h1>
    <div class="w-3/4 mx-auto shadow-lg p-20">
      <div class="flex items-center gap-3 mb-3">
        <label class="w-28">First Name</label>
        <input :value="formdata.fname" name="fname" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PersonalDetail",
  props: {
    formdata: {
      type: Object,
      required: true,
    },
  },
};
</script>
