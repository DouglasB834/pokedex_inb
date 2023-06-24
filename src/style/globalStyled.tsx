import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//Header
.container-header {
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto;
}

@media (max-width: 770px) {
  .container-header {
    height: 80px;
  }
}

.tag-header {
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  background-color: white;
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
}

.tag-logo {
  font-weight: 400;
  font-size: 35px;
  line-height: 150%;
  color: var(--third-color);
  transition: 0.2s linear;
}

@media (max-width: 427px) {
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
}

.search{
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: .2s linear;
  border-radius: 1rem;
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

.container-paginacao {
  display: flex;
  align-items: start;
  padding: 1.4rem 0;
  justify-content: space-between;

  
}

.container-paginacao .paginacao {
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
}
.paginacao button{
  border:  none;
  cursor: pointer;
}

.container-favorite h3 {
  color: var(--text-color-1);
  margin-bottom: 1rem;

}

.container-favorite ul{
    width: 100%;
    display: flex;
    gap :1rem ;
    
  
}
.container-favorite ul  li{
    background-color: var(--fourth-color);
    border-radius: 50%;
    width: 100%;
    display: flex;
  
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





`;