const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

describe('api test', function () {
    after((done) => {
        console.log("\n\n-- FINISHED TEST --")
        done()
    })

    it('should get all files', async () => {
        const response = await chai.request(server).get('/files/data/')
        response.should.have.status(200);
    });


    it('should get files list', async () => {
        const response = await chai.request(server).get('/files/list/')
        response.should.have.status(200);
    });


});
