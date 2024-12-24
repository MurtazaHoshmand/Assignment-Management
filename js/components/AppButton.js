export default {
  template: `
            <button 
            :class="{
              'border rounded px-5 py-2': true,
              'bg-blue-200 hover:bg-blue-400': type === 'primary',
              'bg-orange-200 hover:bg-orange-400': type === 'secondary',
              'bg-gray-200 hover:bg-gray-400': type === 'muted',
              'isLoading': processing
            }"

            :disabled="processing"
            >
              <slot/> 
            </button>
            `,
  data() {
    return { processing: false };
  },

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: Boolean,
      default: false,
    },
  },
};
