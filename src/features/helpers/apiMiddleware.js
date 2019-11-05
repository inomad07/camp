import toastr from "toastr";

import sysError from '../redux/actions/SysErrorActions';

export const handleApiResponse = apiFunction => (dispatch, ...args) => {
  return apiFunction(...args)
    .then(({data}) => {
      if (data.status === 0)
        return Promise.resolve(data.data);

      let errors = data.data && data.data.errors || ['Ошибка сервера'];
      console.error('handleApiResponse.error:', data.data);
      dispatch(sysError.addSysErrors(errors));
      return Promise.reject(data.data);
    })
    .catch((error) => {
      console.error('handleApiResponse.error:', error);
      const message = error.message || 'Ошибка запроса';
      setTimeout(() => {
        toastr.error(message)
      }, 0);
      dispatch(sysError.addSysError(error.message));
      return Promise.reject(error);
    })
};
