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

  class getDoctorNamewithgenderlovFetch extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {{hookHandler:'vb/RestHookHandler'}} params.configuration
     */
    async run(context, { configuration }) {
      const { $page, $flow, $application } = context;
      if (configuration.hookHandler.context.fetchOptions.filterCriterion) {
        const callRestHospitalmangGetDoctorNamewithgenderlovResult = await Actions.callRest(context, {
          endpoint: 'hospitalmang/getDoctorNamewithgenderlov',
          uriParams: {
            'P_DOC_NAME': $page.variables.Name,
            searchvalue: configuration.hookHandler.context.fetchOptions.filterCriterion.text,
          },
        });

        return callRestHospitalmangGetDoctorNamewithgenderlovResult;
      } else {

        const callRestEndpoint1 = await Actions.callRest(context, {
          endpoint: 'hospitalmang/getDoctorNamewithgenderlov',
          responseType: 'getDoctorNamewithgenderlov',
          hookHandler: configuration.hookHandler,
          requestType: 'json',
        });

        return callRestEndpoint1;
      }
    }
  }

  return getDoctorNamewithgenderlovFetch;
});
