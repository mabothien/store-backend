import ProductModel from '../product';
const productModel = new ProductModel();

describe('Test Product Model Methods', () => {
  it('Get all Product exist', () => {
    expect(productModel.index).toBeDefined();
  });
  it('Get Product by Id', () => {
    expect(productModel.show).toBeDefined();
  });
  it('Create Product', () => {
    expect(productModel.create).toBeDefined();
  });
});
