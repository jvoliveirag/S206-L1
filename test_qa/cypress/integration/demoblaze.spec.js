describe('Cenário de teste: Testar as funcionalidades do site demoblaze', () => {

    it('1º Caso de teste: Criar uma conta.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#signin2").click();
        cy.wait(2000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=sign-username]").type(userInfo[0]);
        cy.wait(1000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=sign-password]").type(userInfo[1]);
        cy.get('.btn-primary').click();
    })

    it('2º Caso de teste: Colocar uma senha incorreta.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#login2").click();
        cy.wait(2000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=loginusername]").type(userInfo[0]);
        cy.wait(1000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=loginpassword]").type('senhaincorreta123'); //senha aleatoria para gerar o erro
        cy.get('.btn-primary').click();

        //CASO FOSSE UMA <div> no lugar do pop-up
        //cy.get(".alert-success").should("contain.text","Seu nome de usuário ou senha podem estar incorretos.")
    })

    it('3º Caso de teste: Colocar a senha correta.', () => {
        let userInfo = createUser(); //criando usuario
        cy.visit("https://www.demoblaze.com/index.html");
        cy.get("#login2").click();
        cy.wait(2000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=loginusername]").type(userInfo[0]);
        cy.wait(1000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
        cy.get("input[id=loginpassword]").type(userInfo[1]);
        cy.get('.btn-primary').click();

        //CASO FOSSE UMA <div> no lugar do pop-up
        //cy.get(".alert-success").should("contain.text","Login successful.")
    })

})

function createUser(){
    let hour = new Date().getHours().toString();
    let min = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();

    let username = 'teste_jv' + hour + min + sec
    let password = 'teste_jv' + hour + min + sec

    let user_info = [username,password]

    cy.visit("https://www.demoblaze.com/index.html");
    cy.get('#signin2').click();
    cy.wait(2000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
    cy.get('#sign-username').type(username) 
    cy.wait(1000); //espera para evitar erro de timeout na hora do cadastro e nao faltar caracteres
    cy.get('#sign-password').type(password);
    cy.get('.btn-primary').click();
    
    //CASO FOSSE UMA <div> no lugar do pop-up
    //cy.get(".alert-success").should("contain.text","Sign up successful.")
    //OBS.: poderia tambem ocorrer de, coincidentemente, o nome gerado já existir e, caso exista a mensagem sera retornada conforme consta no ".should"
    return user_info;

}