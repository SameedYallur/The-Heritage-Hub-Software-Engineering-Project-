const {authRouter} = require('../art');
const { describe, it } = require('mocha');
const assert = require('assert');

describe('authRouter', () => {
  it('should respond with a random artist', (done) => {
    const mockReq = { params: { index: 0 } };
    const mockRes = {
      json: (result) => {
        expect(result.name).toBeDefined();
        expect(result.description).toBeDefined();
        done();
      }
    };
    const mockCallback = (req, res) => {
        mocrekRes.json({ name: 'John Doe', description: 'Test artist' });
      };
    authRouter.get('/artist/:index', mockReq, mockRes);
  });

  it('should respond with a random artwork', (done) => {
    const mockReq = { params: { index: 0 } };
    const mockRes = {
      json: (result) => {
        expect(result.title).toBeDefined();
        expect(result.description).toBeDefined();
        done();
      }
    };
    const mockCallback = (req, res) => {
        mockRes.json({ title: 'Test artwork', description: 'Test description' });
      };
    authRouter.get('/artwork/:index', mockReq, mockRes);
  });
});
