// import React from 'react';
// import { Link } from 'react-scroll';

// function App() {
//   const scrollToSection = () => {
//     // Faire défiler vers la section avec l'ID "ma_section"
//     scroller.scrollTo("footer", {
//       duration: 800,
//       delay: 0,
//       smooth: "easeInOutQuart"
//     });
//   };

//   return (
//     <div>
//       <h1>Mon site web</h1>
//       <button onClick={scrollToSection}>Faire défiler automatiquement</button>
//       <div>
//         <p>Contenu de la page</p>
//         <Link
//           activeClass="active"
//           to="popular"
//           spy={true}
//           smooth={true}
//           offset={-70}
//           duration={500}
//         >
//           Faire défiler vers la section
//         </Link>
//       </div>
//       <div id="about">
//         <p>Contenu de la section</p>
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div class="wrap container-fluid" role="document">
        <div class="content">
            <main class="main">
                <div class="row bg-primary_light">
                    <div class="container pb-5">
                        <div class="row">
                            <div class="col-12 text-center pt-5">
                                <h2 class="mb-5">Ireto ny Fikambanana Masina hita ato amin'ny ACUMg</h2>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="JUDFRA"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #7e1b15"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #7e1b15">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/judfra.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            JUDFRA
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="FET"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #0082a5"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #0082a5">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/fet.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            FET
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="FUJM"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #32835c"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #32835c">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/fujm.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            FUJM
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="JFU"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #177e82"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #177e82">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/jfu.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            JFU
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="MIEC"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #b50c31"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #b50c31">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/miec.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            MIEC
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="TAMPIKRI"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #177e82"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #177e82">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/tampikri.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            TAMPIKRI
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="AIM"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #366469"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #366469">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/aim.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            AIM
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="FIM"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #91372d"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #91372d">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/fim.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                           FIM
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#"
                                    title="TMV"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #32835c"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #32835c">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/tmv.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            TMV
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            
                            <div class="row">
                                <div class="col-12 text-center pt-5">
                                    <h2 class="mb-5">Ireto ny toerana misy azy hita ato amin'ny ACUMg      </h2>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="St Antoine de Padou"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #c3191d"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #c3191d">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/saint-antoine.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            Saint Antoine de Padou Cité Tsaramandroso
                                           
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="St Dominique Savio"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #ed451d"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #ed451d">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/saint-dominique-savio.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            Saint Dominique Savio Péripherie
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="St Jacque Berthieu"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #f1601d"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #f1601d">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/sain-jacque-bertieu.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                            Saint Jean Jacque Berthieu R+3A
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="St Francois D'assise"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #622f88"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #622f88">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/saint-francois-d\'assise.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                           Saint Francois D'Assise Bronx, Prototype, Bloc I a X
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="Ste Elisabeth"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #b50c31"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #b50c31">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/sainte-elisabethe.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                       Sainte Elisabeth Bloc XI a XX
                                        </strong>
                                    </p>
                                </a>
                            </div>
                            <div class="col-md-6 col-lg-4 py-3">
                                <a href="#" title="St Pierre"
                                    class="d-flex align-items-center bg-white btn-matiere text-dark position-relative">
                                    <div class="bg-color-matiere" style="background-color: #0c71b5"></div>
                                    <div class="p-2 m-1 position-relative">
                                        <div class="position-absolute bg-btn-matiere" style="background-color: #0c71b5">
                                        </div>
                                        <div class="img bg-cover rounded-circle"
                                            style="background-image: url(../../assets/saint-pierre.jpg)">
                                        </div>
                                    </div>
                                    <p class="mb-0 col ml-3 pl-0">
                                        <strong>
                                       Saint Pierre  Bloc XXI a XXX
                                        </strong>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  );
};

export default Popup;
