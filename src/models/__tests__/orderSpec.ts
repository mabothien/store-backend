import OrderModel from '../order';
const orderModel = new OrderModel();

describe('Test Order Model Methods', () => {
  it('Get all order exist', () => {
    expect(orderModel.getAll).toBeDefined();
  });
  it('Get order by Id', () => {
    expect(orderModel.getOrderById).toBeDefined();
  });
  it('Create order', () => {
    expect(orderModel.create).toBeDefined();
  });
});
