import React, { lazy } from 'react';

/*CSS muy custom para material ui, fijense si lo quieren pasar MUI */
import "../cssCustom/Newsletter.css";


function NewsletterF() {

return (

<div class="css-bh18vc">
  <div class="css-4p9r15">
    <div class="css-4cffwv">
      <div class="css-1o15qec">
        <div class="css-1b24wpc"></div>
        <div class="css-nzy9kr">
          <div class="css-uofbu2">
            <h2 class="css-za224a">Suscribite a nuestros newsletter!</h2>
            <div class="css-8v38cl">Te enviaremos la mejor informacion adecuada a tu perfil una vez al mes.</div>
            <div class="css-1fzlnob">
              <form>
                <div class="css-1cxfmu">
                    <input name="email" type="email" placeholder="Email " aria-label="Email " required="" class="css-1h9lpxu">
                    </input>    
                     
                        </div><button type="submit" class="css-1joeetd">Suscribirse </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}

export default function Newsletter() {
return <NewsletterF />;
    }
