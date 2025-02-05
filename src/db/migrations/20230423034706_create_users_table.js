const { default: knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('users', (table) => {
  table.increments('id');
  table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
  table.timestamps(true, true);
});

exports.up = (knex) => knex.schema.createTable('doctors', (table) => {
  table.increments('doctor-id');
  table.string('name').notNullable().unique();
  table.string('specialty').notNullable();
  table.string('password_hash').notNullable();
  table.timestamps(true, true);
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable('users');
