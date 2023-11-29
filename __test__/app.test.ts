import { register, login, sum} from '../dist/controllers';
import request from 'supertest';



describe("FizzBuzz", () => {
  test('This should result to 11', () => {
    expect(sum(5,6)).toBe(11);
  });

  test('This should result in null', () => {
    expect(sum(4,'2')).toBe(null);
  });


});

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
// //login



// describe('Test the root path', () => {
//   test('It should response the GET method', () => {
//     return request(app).get('/').expect(200);
//   });
// });
