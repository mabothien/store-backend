import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Routes User', () => {
  it('Route get all ', async () => {
    const res = await request.get('/api/User');
    expect(res.status).toBe(200);
  });

  it('Route create User ', async () => {
    const res = await request.get('/api/User');
    expect(res.status).toBe(200);
  });

  it('Route get by ID', async () => {
    const res = await request.get(`/api/User/1`);
    expect(res.status).toBe(200);
  });
});
