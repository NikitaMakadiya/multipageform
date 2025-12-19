<template>
  <div class="w-1/2 m-auto">
    Multi page form
    <component
      :is="steps[currentStep].component"
      :formdata="formdata"
      @update-field="updateField"
    />

    <div class="flex justify-between mt-6 pb-10 mx-10">
      <button
        class="text-red-800 font-bold"
        v-if="currentStep > 0"
        type="button"
        @click="previous"
      >
        Previous
      </button>

      <button
        class="ml-auto text-red-800 font-bold"
        v-if="currentStep < steps.length - 1"
        type="button"
        @click="next"
      >
        Next
      </button>
    </div>

    <div v-if="currentStep === steps.length - 1">
      <button @click="submit" class="bg-red-800 p-4 text-white rounded-md">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import PersonalDetail from "./pages/PersonalDetail.vue";
import CompanyDetailVue from "./pages/CompanyDetail.vue";

export default {
  name: "MultiPage",
  components: { PersonalDetail, CompanyDetailVue },
  data() {
    return {
      currentStep: 0,
      steps: [{ component: PersonalDetail }, { component: CompanyDetailVue }],
      formdata: {
        fname: "",

        compnyname: "",
      },
    };
  },
  methods: {
    next() {
      this.currentStep++;
    },
    previous() {
      this.currentStep--;
    },

    submit() {
      console.log("Final Form Data:", this.formdata);
    },
  },
};
</script>
