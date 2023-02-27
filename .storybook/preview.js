import { setCompodocJson } from "@storybook/addon-docs/angular";
import { customControlDecorator } from "./custom-decorators";
import { customSetCompodocJson } from "./customSetCompodocJson";
import { componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

// Grab the generated docs from compodoc and pass it into our custom handler instead of
// the setCompodocJson func from Storybook.
// customSetCompodocJson(docJson);
// export const parameters = {
//   viewMode: "docs",
//   previewTabs: {
//     "storybook/docs/panel": { index: -1 },
//   },
//   docs: {
//     inlineStories: true,
//   },
//   actions: {
//     disabled: true,
//   },
//   // Not sure if we want this
//   controls: {
//     sort: "alpha", // Sort all controls alphabetically
//     expanded: true, // Show more details (description, default value) in the controls
//     panelhideNoControlsWarning: true, // Some stories are demo only and have no inputs
//   },
//   options: {
//     storySort: {
//       method: "alphabetical",
//       order: [
//         "Getting Started",
//         ["Welcome", `What's New`],
//         "Foundations",
//         "Actions",
//         "Content",
//         "Data Charts",
//         "Experimental",
//         "Feedback",
//         "Form Inputs",
//         ["Reactive Form Fields"],
//       ],
//     },
//   },
// };
// Add custom decorators here
export const decorators = [customControlDecorator];



