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
            console.log(api_response.body);
        });
    });

    it('expects the response to be having status code 200',()=>{
        return response.then((api_response)=>{
            expect(api_response).to.have.status(200)
        })
    })
});