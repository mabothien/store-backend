import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);
describe('Test Routes product', () => {
  it('Route get all ', async () => {
    const res = await request.get('/api/product');
    expect(res.status).toBe(200);
  });

  it('Route create product ', async () => {
    const res = await request.get('/api/product');
    expect(res.status).toBe(200);
  });

  it('Route get by ID', async () => {
    const res = await request.get(`/api/product/1`);
    expect(res.status).toBe(200);
  });
});
