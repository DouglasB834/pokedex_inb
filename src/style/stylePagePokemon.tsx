import { createGlobalStyle } from "styled-components";

export const StylePagePokemon = createGlobalStyle`

.containerPage {
  position: relative;
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  border: solid 1px var(--text-color-1);
@media (max-width: 885px ){ 
  flex-direction: column;
}

}

.back-button{
  
    border: none;
    background-color: transparent;
    width: 30px;
    cursor: pointer;
    margin-left: 1rem;
    svg{
        path{
            stroke: var(--text-color-1);
        }       
        width: 100%;
        height: 100%;
    }
    @media (max-width: 540px ){
  position: absolute;
  left: 10px;
  z-index: 1;
}
}
    
.card-container {
  width: 500px;
  margin:  1rem 0;
  
  .pokemon-container {
    position: relative;
    width: 100%;
    min-width: 450px;
    color: var(--fifth-color);
    
    .power-level {
      position: relative;
      width: 100%;
      height: 200px;
      text-align: center;
      font-size: 1em;
      line-height: 1;
      
      span {  
        font-size: 1.5em;
        color: var(--text-color-1);
      }
      
      .pokemon-snap {
        position: absolute;
        width: 300px;
        top: 25px;
        left: 20%;
        z-index: 3;
        
        img {
          width: 65%;
          object-fit: cover;
        }
      }
      
      .half-circle {
        position: absolute;
        top: 65px;
        left: 20%;
        width: 60%;
        height: 400px;
        border-left: 2px solid var(--text-color-1);
        border-top: 2px solid var(--text-color-1);
        border-right: 2px solid var(--third-color);
        border-radius: 50%;
        z-index: 1;
      }
      
    } // power-level
    
    .poke-card {
      position: relative;
      width: 65%;
      min-height: 400px;
      margin: 15px auto;
      padding: 25px 15px;
      background: var(--sixth-color);
      border-radius: 8px;
      z-index: 2;
      
      .name {
        text-align:  center;
        h1 { margin: 0; }
        
        .hp {
          position: relative;
          margin-top: 1rem ;
          font-weight: 600;
          &:before {
            background-color: var(--fifth-color);
            position: absolute;
            top: -8px;
            left: 50%;
            width: 50%;
            height: 2px;
            border-radius: 3px;
            content: ' ';
            transform: translateX(-50%);
          }
        }
        
      } // name
      
      .stats {
        display: table;
        width: 100%;
        margin: 0;
        padding: 0;
        border-bottom: 1px solid var(--border-color );
        list-style-type: none;
   
        li {
          display: block;
          float: left;
          width: 33%;
          margin: 10px 0;
          padding: 0 8px;
          font-size: .8rem;
          font-weight: 600;
          text-align: center;
          border-right: 1px solid var(--border-color );
          &:last-child {
            border-right: none;
          }
          p {
            font-size: .7rem;
          }
        }
      } // stats
      
      .info {
        text-align: center;
        margin: 15px 0;
        padding: 0 8px;      
        border-bottom: 1px solid var(--border-color );

        h3{
          font-weight: 600;
          line-height: 1; 
          font-size: 1.2rem;
        }
        
      } // info
      
    } // card
    
  } // pokemon-container
    
}

`;
