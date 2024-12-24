import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
export default {
  components: { Assignment, AssignmentTags },
  template: `
    <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
          {{title}}
          ({{assignments.length}})
        </h2>

        <assignment-tags
          :initial-tags="assignments.map(a=>a.tag)"
          v-model="currentTag"
          @change="currentTag= $event"
        >
        </assignment-tags>

        <ul class="border border-gray-600 divide-y divide-gray-600">
          <assignment
            v-for="assignment in filteredAssignments"
           :assignment="assignment" 
            :key="assignment.id"

           >
           </assignment>
        </ul>
      </section>
      `,

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag === "all") {
        return this.assignments;
      }
      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
  props: {
    assignments: Array,

    title: String,
  },
};
