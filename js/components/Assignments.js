import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
  <section class="space-y-6">
    <h1>Assignments</h1>
    <assignment-list title="In Progress" v-bind:assignments="filters.inprogress"> </assignment-list>
    <assignment-list title="Completed" :assignments="filters.completed"> </assignment-list>      
    <assignment-create @add="add"></assignment-create>
  </section> 
  `,

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },

  data() {
    return {
      assignments: [
        { name: "Do HomeWork", completed: false, id: 1, tag: "math" },
        { name: "Have Fun", completed: false, id: 2, tag: "reading" },
        { name: "Learn Vue.js", completed: false, id: 3, tag: "science" },
        { name: "Think Beautiful", completed: false, id: 3, tag: "science" },
      ],
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
