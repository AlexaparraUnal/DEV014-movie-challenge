import {getMovies} from "../src/lib/getMovies";

describe('getMovies', () => {
    it('debería devolver una promesa', async () => {
      expect(getMovies()).toBeInstanceOf(Promise);
    });
    
});

// //describe('getMovies',()=>{

//    it('obtener peliculas',()=>{
//     expect(getMovies()).resolves.tobe(Response.result)
//    })
// })



