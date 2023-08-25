import * as yup from 'yup';

export const performanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  rating: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
