const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

describe('movies api test', function () {
    after((done) => {
        console.log("\n\n-- FINISHED TEST --")
        done()
    })

    it('should get all movies', async () => {
        const response = await chai.request(server).get('/api/movies/')
        response.should.have.status(200);
        response.body.length.should.eql(200)
    });

});
