const knex = require('knex');

describe('test', () => {
  let db;

  beforeAll(async () => {
    db = knex({ client: 'sqlite3', connection: ':memory:', useNullAsDefault: true });
    await db.schema.createTable('table', table => {
      table.increments();
    });
  });

  it('selects a count', async () => {
    expect(await db('table')).toEqual([]);
  });
});
