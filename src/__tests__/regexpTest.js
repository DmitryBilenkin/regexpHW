import Validator from '../js/validator';

test('validName', () => {
  const validName = new Validator('gh678jk-78h_yj');
  expect(validName.validateUsername()).toBe(true);
});
