const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generaet an Unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
