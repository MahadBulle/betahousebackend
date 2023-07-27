const app = require('../../app')
const request = require('supertest')
// test houses api
//  describe('testing houses api crud operations', function () {
//   it('get houses data', async () => {
//
//     const resp = await request(app).get('/houses');
//     expect(resp.statusCode).toBe(200);
//   });
//   it('insert houses api', async () => {
//     const reqs = await request(app).post('/houses').send({
//       Type:"Guri villo isku goan",
//       Area:"Degmadda warta nabadda",
//       Address:"jidMariixaan",
//       Age:"5jir",
//       Rent:"$400",
//       Rooms:"6",
//       Toilets:"2",
//       MasterRoom:"Yes",
//       Parking:"Yes",
//       Image:"https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//       Deposit:"$100",
//       Status:"Available",
//       Description:"wuxu ku yaala meel la isku haleyn karo",
//       userId:"6496e50f29148cc8a677a894"
//     });
//     expect(reqs.statusCode).toBe(201);
//     userid = reqs.body.housesPosting._id;
//   });
//   it('get houses by id', async () => {
//
//     const resp = await request(app).get(`/houses/${userid}`);
//     expect(resp.statusCode).toBe(200);
//   });
//   it('update houses', async () => {
//     const Update = await request(app).put(`/houses/${userid}`).send({
//       Type:"Guri villo isku goan",
//       Area:"Degmadda warta nabadda",
//       Address:"jidMariixaan",
//       Age:"5jir",
//       Rent:"$40",
//       Rooms:"6",
//       Toilets:"2",
//       MasterRoom:"Yes",
//       Parking:"Yes",
//       Image:"https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//       Deposit:"$100",
//       Status:"Available",
//       Description:"wuxu ku yaala meel la isku haleyn karo",
//       userId:"6496e50f29148cc8a677a894"
//     });

//     expect(Update.statusCode).toBe(200);
//   });
//   it('delete house', async () => {
//     const Delete = await request(app).delete(`/houses/${userId}`);
//     expect(Delete.statusCode).toBe(200);
//   });
// });

// homesetting test
describe('testing homesetting api crud operations', function () {
  it('get homesittting  data', async () => {
    const resp = await request(app).get('/homesetting')
    expect(resp.statusCode).toBe(200)
  })
  it('insert homesetting api', async () => {
    const reqs = await request(app).post('/homesetting').send({
      Title: 'haaaheyeyey',
      name: 'Betahouses',
      location: 'huddur',
      logo: 'LoogadaBooskeddddda',
      email: 'gadaas@gmail.com',
      Complaint_Email: 'dshdhg@gmail.com',
      Complaint_Phone: '6351653623',
      facebook: 'hsdhsfhsdjkfs',
      tiktok: 'gfhasgdfhags',
      twitter: 'kasdjhfjkasg',
      instagram: 'dhsfjkdhfj',
      HeroTitle: 'sdakhgdkasd',
      HeroDescription: 'dgfhsgfjsdhgf',
      heroImage: 'asdfhasjkgfkjsag mesha',
      footerText: 'asdkashdkjahdjhasjdhfaksnnkasjnhdnk',
      userId: '648e96a748d78f75de101a90'
    })
    expect(reqs.statusCode).toBe(201)
    userId = reqs.body.homeSettingPosting._id
  })
  it('get homesetting by id', async () => {
    const resp = await request(app).get(`/homesetting/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update homesetting', async () => {
    const Update = await request(app).put(`/homesetting/${userId}`).send({
      Title: 'haaaheyeyey',
      name: 'Betahouses',
      location: 'huddur',
      logo: 'Loogadaddda',
      email: 'gaaliiaisi@gmail.com',
      Complaint_Email: 'dshdhg@gmail.com',
      Complaint_Phone: '6351653623',
      facebook: 'hsdhsfhsdjkfs',
      tiktok: 'gfhasgdfhags',
      twitter: 'kasdjhfjkasg',
      instagram: 'dhsfjkdhfj',
      HeroTitle: 'sdakhgdkasd',
      HeroDescription: 'dgfhsgfjsdhgf',
      heroImage: 'asdfhasjkgfkjsag mesha',
      footerText: 'asdkashdkjahdjhasjdhfaksnnkasjnhdnk',
      userId: '648e96a748d78f75de101a90'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// gallery test api calls
describe('testing gallery api calls crud operations', function () {
  it('get gallery data', async () => {
    const resp = await request(app).get('/gallery')
    expect(resp.statusCode).toBe(200)
  })
  // it('insert gallery api', async () => {
  //   const reqs = await request(app).post('/gallery').send({
  //     ImageTitle: 'logo ',
  //     Image:'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  //   });
  //   expect(reqs.statusCode).toBe(201);
  //   userId = reqs.body.galleryPosting._id;
  // });
  it('get gallery by id', async () => {
    const resp = await request(app).get(`/gallery/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update gallery', async () => {
    const Update = await request(app).put(`/gallery/${userId}`).send({
      ImageTitle: 'ahdjsgdjhagjh',
      Image: 'sawirkahahshahsa'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// about api call
describe('testing about us  crud operations', function () {
  it('get about us api data', async () => {
    const resp = await request(app).get('/about')
    expect(resp.statusCode).toBe(200)
  })
  it('insert about api', async () => {
    const reqs = await request(app).post('/about').send({
      Description: 'ahdgjhagjhagdjhagjhdajhdfjhafdjh',
      ShortDescription: 'short'
    })
    expect(reqs.statusCode).toBe(201)
    userId = reqs.body.aboutPosting._id
  })
  it('get about api by id', async () => {
    const resp = await request(app).get(`/about/${userId}`)
    expect(resp.statusCode).toBe(200)
  })

  it('update about us ', async () => {
    const Update = await request(app).put(`/about/${userId}`).send({
      Description: 'ahdgjhagjhagdjhagjajhdfjhafdjh',
      ShortDescription: 'shiwrty'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// contact us api  test
describe('testing contact  api calls crud operations', function () {
  it('get contact us api data', async () => {
    const resp = await request(app).get('/contact')
    expect(resp.statusCode).toBe(200)
  })
  it('insert contact  api', async () => {
    const reqs = await request(app).post('/contact').send({
      Name: 'Mahad',
      Phone: '6346363',
      Message: 'asc walal'

    })
    expect(reqs.statusCode).toBe(201)
    userId = reqs.body.contactPosting._id
  })
  it('get contact api by id', async () => {
    const resp = await request(app).get(`/contact/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update contact us', async () => {
    const Update = await request(app).put(`/contact/${userId}`).send({
      Name: 'Mahad cali',
      Phone: '6346363',
      Message: 'asc walall'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// test ourourclient api
describe('testing ourourclient crud operations', function () {
  it('get ourourclient data', async () => {
    const resp = await request(app).get('/ourclient')
    expect(resp.statusCode).toBe(200)
  })
  // it('insert ourourclient api', async () => {
  //   const reqs = await request(app).post('/ourclient').send({
  //     ClientName: 'somnet ',
  //     Logo: 'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
  //   });
  //   expect(reqs.statusCode).toBe(201);
  //   userId = reqs.body.ourclientPosting._id;
  // });
  it('get ourourclient by id', async () => {
    const resp = await request(app).get(`/ourclient/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update ourourclient', async () => {
    const Update = await request(app).put(`/ourclient/${userId}`).send({
      ClientName: 'hormuud ',
      Logo: 'https://images.unsplash.com/photo-1687093875330-180f8be8d8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// test service api
describe('testing service crud operations', function () {
  it('get service', async () => {
    const resp = await request(app).get('/services')
    expect(resp.statusCode).toBe(200)
  })
  it('insert service', async () => {
    const reqs = await request(app).post('/services').send({
      Title: 'waaaayayayaya',
      Icon: 'wa queryhnabt aici',
      Decribtion: 'allahu akbar'
    })
    expect(reqs.statusCode).toBe(201)
    userId = reqs.body.ServicePosting._id
  })
  it('get service by id', async () => {
    const resp = await request(app).get(`/services/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update service', async () => {
    const Update = await request(app).put(`/services/${userId}`).send({
      Title: 'waaaayayayaya',
      Icon: 'wa queryhnabt aici',
      Decribtion: 'subhanallah'
    })

    expect(Update.statusCode).toBe(200)
  })
})

// test himages api
describe('testing himages crud operations', function () {
  it('get service', async () => {
    const resp = await request(app).get('/himages')
    expect(resp.statusCode).toBe(200)
  })
  // it('insert himages', async () => {
  //   const reqs = await request(app).post('/himages').send({
  //     houseId:"648ea7f9618d2077f70fe3f6",
  //     images:"hhhhhhhhhh",
  //     userId:"648e96a748d78f75de101a90"
  //   });
  //   expect(reqs.statusCode).toBe(201);
  //   userId = reqs.body.himagesPosting._id;
  // });
  it('get himages by id', async () => {
    const resp = await request(app).get(`/himages/${userId}`)
    expect(resp.statusCode).toBe(200)
  })
  it('update himages', async () => {
    const Update = await request(app).put(`/himages/${userId}`).send({
      houseId: '648ea7f9618d2077f70fe3f6',
      images: 'https://images.unsplash.com/photo-1485996463739-9cb09adbe6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      userId: '648e96a748d78f75de101a90'
    })

    expect(Update.statusCode).toBe(200)
  })

  it('delete himages', async () => {
    const Delete = await request(app).delete(`/himages/${userId}`)
    expect(Delete.statusCode).toBe(200)
  })
})
