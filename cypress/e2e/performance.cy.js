describe('index', () => {
  it('view this page', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', '**/exec?api=display-record&serviceId=summer-dev-test', {
      "code": 200,
      "message": "success",
      "data": [{
          "comment": "蛋糕",
          "imageId": "1cbFTacqguUTk7HGIJ2Ly1iml92A2_2gh",
          "name": "蛋糕",
          "photoUrl": "https://drive.google.com/uc?id=1cbFTacqguUTk7HGIJ2Ly1iml92A2_2gh",
          "thumbnailUrl": "https://drive.google.com/thumbnail?id=1cbFTacqguUTk7HGIJ2Ly1iml92A2_2gh",
        },
        {
          "comment": "我的書",
          "imageId": "1Uc2Z8tLgQCbsHMJmUfK5lNEyqQCe1t5e",
          "name": "我的書",
          "photoUrl": "https://drive.google.com/uc?id=1Uc2Z8tLgQCbsHMJmUfK5lNEyqQCe1t5e",
          "thumbnailUrl": "https://drive.google.com/thumbnail?id=1Uc2Z8tLgQCbsHMJmUfK5lNEyqQCe1t5e",
        },
        {
          "comment": "北海道",
          "imageId": "1C5Wn8b4QYfV_uAFcW4QPFTg-hgJYIGZS",
          "name": "北海道",
          "photoUrl": "https://drive.google.com/uc?id=1C5Wn8b4QYfV_uAFcW4QPFTg-hgJYIGZS",
          "thumbnailUrl": "https://drive.google.com/thumbnail?id=1C5Wn8b4QYfV_uAFcW4QPFTg-hgJYIGZS",
        }
      ]
    });
  });
});
