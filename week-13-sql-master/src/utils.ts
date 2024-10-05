import { Client } from 'pg';

export async function getClient() {
    const client = new Client({
        user: 'postgres',           
        host: 'localhost',          
        database: '100xdev',    
        password: 'Vaishnavi2026', 
        port: 5432,                
    });

    try {
        await client.connect();
        console.log("Connected to PostgreSQL");
    } catch (err) {
        console.error("Connection error:");
        
        throw err; 
    }

    return client;
}
