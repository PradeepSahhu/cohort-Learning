import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://postgres:Pradeep@localhost:5432/psql_database"
  );
  await client.connect();
  return client;
}
