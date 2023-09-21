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

  class getDoctorDocnamelovFetch2 extends ActionChain {

    /**
     * @param {Object} context
     * @param {Object} params
     * @param {{hookHandler:'vb/RestHookHandler'}} params.configuration
     */
    async run(context, { configuration }) {
      const { $page, $flow, $application } = context;
      if (configuration.hookHandler.context.fetchOptions.filterCriterion) {
        const callRestHospitalmangGetDoctorDocnamelovResult = await Actions.callRest(context, {
          endpoint: 'hospitalmang/getDoctorDocnamelov',
          uriParams: {
            searchvalue: configuration.hookHandler.context.fetchOptions.filterCriterion,
          },
        });

        return callRestHospitalmangGetDoctorDocnamelovResult;
      } else {

        const callRestEndpoint1 = await Actions.callRest(context, {
          endpoint: 'hospitalmang/getDoctorDocnamelov',
          responseType: 'getDoctorDocnamelovResponse',
          hookHandler: configuration.hookHandler,
          requestType: 'json',
        });

        return callRestEndpoint1;
      }
    }
  }

  return getDoctorDocnamelovFetch2;
});
