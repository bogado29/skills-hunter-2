import React, { lazy } from 'react';

/*CSS muy custom para material ui, fijense si lo quieren pasar MUI */
import "../cssCustom/MHero.css";


function LPHeaderF() {

	return (

		<div class="css-bh18vc">
			<div class="css-4p9r15">
				<div class="css-4cffwv">
					<div class="css-1o15qec">
						<div class="css-4p9r15">
							<div class="css-1y0s2bx">
								<div class="css-1mstnnf">
									<div class="css-4p9r15">
										<h2 class="css-1xvysa8">Sigue así! Aprendiste <span>5 habilidades</span> en
											 la ultima semana!</h2>
										<h2 class="css-133k6af">Se han abierto 7 nuevos puestos laborales gracias a tu esfuerzo.</h2>
									</div>
									<div class="css-tpo2py"><a aria-current="page" class="css-874zgm"
										href="https://www.linkedin.com/search/results/all/?keywords=frontend&origin=GLOBAL_SEARCH_HEADER&sid=vEd">Ver nuevos puestos</a><a class="css-7hq3ru"
											href="https://flexiblog-education.netlify.app/authors">Mejorar aún +</a></div>
								</div>
								<div class="css-1gzx6sh">
									<div class="css-mwzs00"></div>
								</div>
								<div class="css-1jh95fg">
									<div class="css-1dt3vv5">
										<h2 class="css-p29grk"><svg stroke="currentColor"
											fill="currentColor" stroke-width="0"
											viewBox="0 0 448 512" height="1em" width="1em"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z">
											</path>
										</svg></h2>
										<h2 class="css-1kzdknn">30+<h2 class="css-130zgsp">Habilidades</h2>
										</h2>
										<h2 class="css-1kzdknn">10+<h2 class="css-130zgsp">Cursos</h2>
										</h2>
										<h2 class="css-1kzdknn">15+<h2 class="css-130zgsp">Puestos</h2>
										</h2>
									</div>
								</div>
								<div class="css-1k5w6ik"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function LPHeader() {
	return <LPHeaderF />;
}
