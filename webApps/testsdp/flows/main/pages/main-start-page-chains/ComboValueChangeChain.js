define([
  'vb/action/actionChain',
  'vb/action/actions',
  'vb/action/actionUtils',
], (
  ActionChain,
  Actions,
  ActionUtils
) => {
  'use strict';

  class ComboValueChangeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {any} params.value 
     */
    async run(context, { value }) {
      const { $page, $flow, $application } = context;

      await Actions.fireDataProviderEvent(context, {
        target: $page.variables.getDoctorNamewithgenderlovListSDP2,
        refresh: null,
      });
    }
  }

  return ComboValueChangeChain;
});
