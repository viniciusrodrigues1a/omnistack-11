import * as Yup from 'yup';
import connection from '../database/connection';

export default {
  async index(req, res) {
    const headersValidationSchema = Yup.object().shape({
      authorization: Yup.string().required(),
    });

    if (!(await headersValidationSchema.isValid(req.headers))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  },
};
