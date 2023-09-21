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

  class navigateToEditEmployeeChain extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {string} params.employeeId
     */
    async run(context, { employeeId }) {
      const { $page, $flow, $application } = context;
      const navigateToPageBusinessObjectEditEmployeeResult = await Actions.navigateToPage(context, {
        page: 'business-object-edit-employee',
        params: {
          employeeId: employeeId,
        },
      });
    }
  }

  return navigateToEditEmployeeChain;
});
