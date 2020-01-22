import chai from 'chai';
import http from 'http';

const { expect } = chai;

describe('server', () => {
  it('Main page', () => {
    http.get('http://localhost:3000', (res: http.IncomingMessage) => {
      expect(res.statusCode).to.equal(200);
    });
  });
});
