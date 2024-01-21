import { promises as fs } from 'fs';


export default async function signIn (text:string, body){
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const projects = await JSON.parse(file)
   
    const user =projects.filter((user: { email: any; })=>user.email===body.email)

    return {user}
    
}

