describe('/objects', () => {
  describe('POST /create-person', () => {
    it('returns an object with name and age properties', (done) => {
      chai.request(server)
        .post('/objects/create-person')
        .send({ name: 'Jack', age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: { name: 'Jack', age: 30 } });
          done();
        });
    });
    it('errors if the supplied age is not a number', (done) => {
      chai.request(server)
        .post('/objects/create-person')
        .send({ name: 'Jack', age: 'Thirty' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Age parameter must be a number.' });
          done();
        });
    });
  });
  describe('POST /has-property', () => {
    it('returns true when the supplied object has the supplied property', (done) => {
      chai.request(server)
        .post('/objects/has-property')
        .send({ property: 'eyeColour', object: { name: '', eyeColour: '' } })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });
    it('returns false when the supplied object does not have the supplied property', (done) => {
      chai.request(server)
        .post('/objects/has-property')
        .send({ property: 'hairColour', object: { name: '', eyeColour: '' } })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });
  });
  describe('POST /find-hondas', () => {
    it('returns an array of cars that match the manufacturuer - honda', (done) => {
      chai.request(server)
        .post('/objects/find-hondas')
        .send({
          cars: [{
            name: 'car1', manufacturer: 'Honda', year: 1997, colour: 'blue',
          },
          {
            name: 'car2', manufacturer: 'Ford', year: 1999, colour: 'red',
          }],
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({
            result: [{
              name: 'car1', manufacturer: 'Honda', year: 1997, colour: 'blue',
            }],
          });
          done();
        });
    });
    it('returns a message if the supplied array contains no cars matching manufactuer - honda', (done) => {
      chai.request(server)
        .post('/objects/find-hondas')
        .send({
          cars: [{
            name: 'car1', manufacturer: 'BMW', year: 1997, colour: 'blue',
          },
          {
            name: 'car2', manufacturer: 'Ford', year: 1999, colour: 'red',
          }],
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Supplied array contains no cars manufactured by honda' });
          done();
        });
    });
  });
  describe('POST /average-age', () => {
    it('returns the average of a supplied array of ages', (done) => {
      chai.request(server)
        .post('/objects/average-age')
        .send({
          people: [{
            name: 'George',
            age: 30,
          },
          {
            name: 'Fred',
            age: 20,
          }],
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 25 });
          done();
        });
    });
    it('errors if the supplied age parameters are not numbers', (done) => {
      chai.request(server)
        .post('/objects/average-age')
        .send({
          people: [{
            name: 'George',
            age: 30,
          },
          {
            name: 'Fred',
            age: 'twenty',
          }],
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'One of more of the supplied age paramaters are not numbers' });
          done();
        });
    });
  });
});
