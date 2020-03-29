import * as Yup from 'yup';

import connection from '../database/connection';

export default {
  async index(req, res) {
    const queryValidationSchema = Yup.object().shape({
      page: Yup.number(),
    });

    if (!(await queryValidationSchema.isValid(req.query))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { page = 1 } = req.query;

    const [count] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name as ong_name',
        'ongs.email as ong_email',
        'ongs.whatsapp as ong_whatsapp',
        'ongs.city as ong_city',
        'ongs.uf as ong_uf',
      ]);

    res.header('X-Total-Count', count['count(*)']);

    return res.json(incidents);
  },
  async create(req, res) {
    const bodyValidationSchema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().positive().required(),
    });

    if (!(await bodyValidationSchema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    if (!ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  },
  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      value: Yup.number().positive(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    if (!ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    if (!title && !description && !value) {
      return res.status(400).json({ error: 'Empty body.' });
    }

    const incidentsUpdated = await connection('incidents')
      .where({
        id,
        ong_id,
      })
      .update({ title, description, value });

    if (incidentsUpdated === 0) {
      return res
        .status(401)
        .json({ error: "The incident ID informed doesn't belong to you" });
    }

    return res.status(204).end();
  },
  async delete(req, res) {
    const paramsValidationSchema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await paramsValidationSchema.isValid(req.params))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (!incident) {
      return res.status(404).json({ error: 'Incident not found.' });
    }

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return res.status(204).end();
  },
};
