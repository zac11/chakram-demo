const chakram = require('chakram');
const expect = chakram.expect;
let response;

describe('First API Test',()=>{
    before(()=>{
        let baseURL = "https://reqres.in/api/users?page=2";
        
        return chakram.wait(response = chakram.get(baseURL));
    });

    it('displays the response',()=>{
        return response.then((api_response)=>{
            console.log( api_response.body );
        });
    });

    it('expects the response to be having status code 200',()=>{
        return response.then((api_response)=>{
            expect(api_response).to.have.status(200)
        });
    });

    it('asserts that response is json',()=>{
        return response.then((api_response)=>{
            expect(api_response).to.be.json;
        });
    });

    it('checking header values',()=>{
        return response.then((api_response)=>{
            expect(api_response).to.have.header('Content-Type','application/json; charset=utf-8');
        });
    });

    it('checks the data is an array',()=>{
        return response.then((api_response)=>{
            expect(api_response.body.data).to.be.array;
        });
    });

    it('expects page to be 2',()=>{
        return response.then((api_response) => {
            expect(api_response.body.page).to.equal(2);
        });
    });

    it('prints all the ids from data',()=>{
        let data_array = [];
        return response.then((api_response)=>{
            data_array = api_response.body.data;
            let r = data_array.filter(({id})=> id !==null);
            for(var i=0;i<r.length;i++){
                console.log(r[i].id);
            }

        });
    });

    
});