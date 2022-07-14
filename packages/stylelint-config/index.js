module.exports = {
  extends: [
    "stylelint-config-recess-order",
    "stylelint-config-standard-scss",
    "stylelint-config-standard-vue"
  ],
  rules: {
    "indentation": 4, 
    "no-descending-specificity": null,
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
  },
};
