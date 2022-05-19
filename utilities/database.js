import postgres from 'postgres'

const sql = postgres(process.env.DATABASE_URL ?? 'postgres://postgres:postgres@localhost:5432/suitbot')
console.log(sql.options.host, sql.options.database)

export default {
  sql: sql,
  getLocale: async function getLocale(guildId) {
    return (await sql`select locale from servers where id = ${guildId};`)[0].locale
  },
  setLocale: async function setLocale(guildId, locale) {
    await sql`update servers set ${sql({ locale: locale })} where id = ${guildId};`
  },
  addServer: function addServer(guild) {
    sql`insert into servers (id, locale) values (${guild.id}, ${guild.preferredLocale});`
  },
  addAllServers: function addAllServers(guilds) {
    guilds = guilds.map((guild) => ({ id: guild.id, locale: guild.preferredLocale }))
    sql`insert into servers ${sql(guilds)} on conflict (id) do nothing;`
  },
}
