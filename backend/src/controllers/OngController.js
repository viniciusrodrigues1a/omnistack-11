import * as Yup from 'yup';
import generateUniqueId from '../utils/generateUniqueId';

import connection from '../database/connection';

export default {
  async create(req, res) {
    const bodyValidationSchema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required().length(2),
    });

    if (!(await bodyValidationSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
