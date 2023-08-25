import * as yup from 'yup';

export const usageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  mileage: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
