import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Routes User', () => {
  it('Route get all ', async () => {
    const res = await request
      .get('/api/User')
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('Route create User ', async () => {
    const res = await request
      .post('/api/User')
      .send({
        firstName: 'long',
        lastname: 'tran',
        username: 'longtran',
        password: 'yourpassword',
      })
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });

  it('Route get by ID', async () => {
    const res = await request
      .get(`/api/User/1`)
      .set('Accept', 'application/json');
    expect(res.status).toEqual(200);
  });
});
