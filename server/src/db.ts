import { Pool } from "pg";
const connectionString =
  "postgres://postgres:postgrespassword@172.19.0.3:5432/postgres";
const pool = new Pool({
  connectionString,
});

const query = (text: string, params?: any[]) => pool.query(text, params);
export default query;
