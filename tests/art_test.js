const authrouter = require('../art')
const { describe, it } = require('mocha');
const assert = require('assert');

describe('authrouter', () => {
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
        mockRes.json({ name: 'John Doe', description: 'Test artist' });
      };
    authrouter.get('/artist/:index', mockReq, mockRes);
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
    authrouter.get('/artwork/:index', mockReq, mockRes);
  });
});
