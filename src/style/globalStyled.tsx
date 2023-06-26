import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//Header
.container-header {
  position: relative;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background: url("https://img.freepik.com/vetores-gratis/fundo-do-ceu-nublado-em-estilo-simples_23-2147796380.jpg?w=740&t=st=1687789130~exp=1687789730~hmac=b6cb5dbd5f0d24164efee8a17bbcc0c52d84a9dc3c3a5e87e2c6e3edd38daafc" ) no-repeat center/cover;
 
}


@media (max-width: 770px) {
  .container-header {
    height: 100px;
  }
}

.tag-header {
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  
  object-fit: cover;
  gap: 1rem;
}

.tag-header > div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media (max-width: 767px) {
  .tag-header {
    flex-direction: column;
    margin-bottom: 5px;
  }
  .tag-logo {
    font-size: 30px;
  }
}

.tag-logo {
  font-weight: 400;
  font-size: 35px;
  line-height: 150%;
  color: var(--third-color);
  transition: 0.2s linear;
}

@media (max-width: 767px) {
  .tag-logo {
    font-size: 30px;
  }
}

.input-container {
  width: 352px;
  background-color: var(--second-color);
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.input-container > input {
  width: 100%;
  color: var(--text-color-1);
  font-size: 0.87rem;
  font-family: inherit;
  font-weight: 400;
  border: none;
  line-height: 22px;
  outline: none;
  background-color: var(--second-color);
  ::placeholder {
    color: var(--text-color-1);
  }

}


.search{
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: .2s linear;
  border-radius: 1rem;
  color: var(--text-color-1);
 
}


.search:hover{
  background-color: var(--third-color);
}

@media (max-width: 427px) {
  .input-container {
    width: 90%;
  }
}

// ########## paginação  ###########

.container-pagination {
  width: 100%;
  display: flex;
  align-items: start;
  padding: 1.4rem 0;
  justify-content: space-between;  
  flex-direction: column;
 .title-favorite-pagination{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
 }
}

.container-pagination .pagination {
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: var(--text-color-1);
  padding: 5px;
  border-radius: 5px;
  >p{
    font-size: 1rem;
    color: var(--fifth-color);
  }
}

.pagination button{
  border-radius: 5px;
  border:  none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: .2s linear  ;
  :hover{
    background-color: var(--fifth-color);
  }

  @media (max-width: 427px) {
    font-size: .9rem;
  }
}
.container-favorite{
  width: 100%;
}
.container-favorite h3 {
  color: var(--text-color-1);
  margin-bottom: 1rem;

}

.container-favorite ul{
    width: 100%;
    display: flex;
    gap :1rem ; 
    align-items: flex-start;
    align-items: center;
    overflow-x: auto;
}

.container-favorite ul  li{
    display: flex;
    cursor: pointer;
    img{
      transition: .2s linear;
      width: 65px;
      background-color: var(--fourth-color);
    border-radius: 50%;
    :hover{
      background-color: var(--fifth-color);
    }
    }
}

.clean-button{
  font-size: 1rem;
  padding: .7rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: .2s linear;
  :hover{
    background-color: var(--border-color);
  }
}

/* loading screen */

.loading-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
}

.loading-screen h2 {
  position: absolute;
  top: 80px;
}

.loading-screen img {
  background: url('https://res.cloudinary.com/ahmedagadir/image/upload/v1530730099/pokemon-API/pokedex.png') no-repeat ;
  object-fit: cover;
  position: absolute;
  width: 340px;
}
.favorite{
  font-size: 1.2rem;
  cursor: pointer;
  transition: .2s linear;
  margin-left: 1rem;
  border: none;
  :focus{
    background-color: var(--spDefense-color);
  }
}
`;
