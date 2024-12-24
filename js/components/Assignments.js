import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
  <section class="space-y-6">
  <h1>Assignments</h1>
      <assignment-list title="In Progress" v-bind:assignments="filters.inprogress"> </assignment-list>
      <assignment-list title="Completed" :assignments="filters.completed"> </assignment-list>      
      <form @submit.prevent ="handleSubmit">
        <div class="border border-gray-600 text-black">
          <input v-model="newAssignment" placeholder="New Assignment..." class="p2">
          <button type="submit" placeholder="New Assignment..." class="p2 bg-white border-l">Add</button>
          </div>
          </form>
    
      </section> 
      `,
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.newAssignment.length + 1,
      });
      this.newAssignment = "";
    },
  },

  data() {
    return {
      assignments: [
        { name: "Do HomeWork", completed: false, id: 1 },
        { name: "Have Fun", completed: false, id: 2 },
        { name: "Learn Vue.js", completed: false, id: 3 },
      ],
      newAssignment: "",
    };
  },
  computed: {
    filters() {
      return {
        completed: this.assignments.filter((a) => a.completed),
        inprogress: this.assignments.filter((a) => !a.completed),
      };
    },
  },
};
