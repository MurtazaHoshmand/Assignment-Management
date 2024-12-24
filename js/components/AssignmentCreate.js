export default {
  template: `
    <form @submit.prevent="handleAdd">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New Assignment..." class="py-px px-3">
          <button type="submit" placeholder="New Assignment..." class="p2 bg-white border-l">Add</button>
        </div>
    </form>
    `,
  date() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    handleAdd() {
      if (this.newAssignment) {
        this.$emit("add", this.newAssignment);
        this.newAssignment = "";
      }
    },
  },
};
