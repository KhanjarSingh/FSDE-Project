const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/User');
const Product = require('../src/models/Product');
describe('ECommerce API Integration Tests', () => {
  beforeAll(async () => { const url = 'mongodb://127.0.0.1/minishop_test'; await mongoose.connect(url); });
  afterAll(async () => { await mongoose.connection.db.dropDatabase(); await mongoose.connection.close(); });
  let token;
  const testUser = { name: 'Test User', email: 'test@example.com', password: 'password123' };
  test('Auth: Register User', async () => {
    const res = await request(app).post('/api/auth/register').send(testUser);
    expect(res.statusCode).toEqual(201);
    token = res.body.token;
  });
  test('Auth: Login User', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: testUser.email, password: testUser.password });
    expect(res.statusCode).toEqual(200);
  });
});
