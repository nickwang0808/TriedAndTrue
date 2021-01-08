import { Pool } from "pg";
const connectionString =
  "postgres://postgres:postgrespassword@postgres:5432/postgres";
const pool = new Pool({
  connectionString,
});

const query = (text: string, params?: any[]) => pool.query(text, params);
export default query;
