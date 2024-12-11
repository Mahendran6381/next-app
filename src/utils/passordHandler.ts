import bcrypt from 'bcrypt'

export async function getPasswordHash(password: string): Promise<string>{
    try{
        const hash = await bcrypt.hash(password, 10)
        return hash
    }
    catch(e){
        throw new Error("Faild to Hash Password")
    }
}
export async function getHashFromPassword(password: string, hashedPassword: string): Promise<boolean>{
    try{
        const isHashed = await bcrypt.compare(password, hashedPassword)
        return isHashed
    }
    catch(e){
        throw new Error("Faild to Compare Password")
    }
}