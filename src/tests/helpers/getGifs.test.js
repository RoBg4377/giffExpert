import { getGifs } from "../../helpers/getGifs"

describe('evalúa getGifs', function() {
    it('si no recibe argumentos retorna un array vacío', async() =>{

        const retorno =  await getGifs('');

        expect(retorno.length).toBe(0);
    })

    it('si recibe un argumento válido retorna un array con 12 elementos', async() =>{

        const retorno = await getGifs('Goku');

        expect(retorno.length).toBe(12)
    })
})