<template>
  <div class="w-1/2 m-auto">
    Multi page form

    <component
      :is="steps[currentStep].component"
      :ref="steps[currentStep].ref"
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
      <!-- <button @click="submit" class="bg-red-800 p-4 text-white rounded-md">
        Submit
      </button> -->

      <button
        type="button"
        @click="submit"
        class="bg-red-800 p-4 text-white rounded-md"
      >
        Submit
      </button>
    </div>
    <pre>{{ formdata }}</pre>
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

      formdata: {
        personalData: {},
        companyData: {},
      },

      steps: [
        { component: PersonalDetail, ref: "personalRef", key: "personalData" },
        { component: CompanyDetail, ref: "companyRef", key: "companyData" },
      ],
    };
  },
  methods: {
    savecurrentdata() {
      const step = this.steps[this.currentStep];
      this.formdata[step.key] = this.$refs[step.ref].getData();
    },
    next() {
      this.savecurrentdata();
      this.currentStep++;
    },
    previous() {
      this.currentStep--;
    },

    submit() {
      this.savecurrentdata();
      this.formdata.personalData = this.$refs.personalRef.getData();
      this.formdata.companyData = this.$refs.companyRef.getData();
    },
  },
};
</script>
