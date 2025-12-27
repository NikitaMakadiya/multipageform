<template>
  <div class="w-1/2 m-auto">
    Multi page form

    <PersonalDetail v-show="currentStep === 0" ref="personalRef" />
    <CompanyDetail v-show="currentStep === 1" ref="companyRef" />

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
    <pre>{{ personalData }}</pre>
    <pre>{{ companyData }}</pre>
  </div>
</template>

<script>
import PersonalDetail from "./pages/PersonalDetail.vue";
import CompanyDetail from "./pages/CompanyDetail.vue";

export default {
  name: "MultiPage",
  components: { PersonalDetail, CompanyDetail },
  data() {
    return {
      currentStep: 0,
      personalData: "",
      companyData: "",
      steps: [
        { component: PersonalDetail, ref: "personalRef" },
        { component: CompanyDetail, ref: "companyRef" },
      ],
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
      const personaldata = this.$refs.personalRef.getData();
      const companydata = this.$refs.companyRef.getData();
      // console.log("Personal Data:", personaldata);
      // console.log("Company Data:", companydata);
      this.personalData = personaldata;
      this.companyData = companydata;
    },
  },
};
</script>
