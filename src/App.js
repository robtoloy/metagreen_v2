import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './img/logo2.png'

import Slideshow from './Slideshow'

const Metagreen = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div className="container topnav">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <Link to="/"><img src={logo} className="logo-icon"/></Link>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/technology">Technology</Link></li>
                    <li><Link to="/people">People</Link></li>
                  </ul>
              </div>
          </div>
      </nav>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/technology" component={Technology}/>
      <Route path="/people" component={People}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <Slideshow/>
    <span className="line-accents">
    </span>
    <div className="intro-header">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="intro-message">
                        <div className="slideshow-label">Setting the standard for science-powered natural products innovation.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
)

const About = () => (
  <div>
    <span className="line-accents2">
    </span>
    {/* About Header */}
    <div className="about-header">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-6 about-flex">
            <div className="slideshow-label">Setting the standard for science-powered natural products innovation.</div>
            <br />
            <div><p className="lead">We do this by building proprietary technologies that tap into the highest value compounds found in plants. Our elite corps of scientists and engineers endeavor to harness this value and realize the potential of the natural world for enhancing human quality of life.</p></div>
            <div><p className="lead">Metagreen works with an exclusive group of invitation-only clients.</p></div>
            <div><hr className="intro-divider" /></div>
          </div>
        </div>
      </div>
      {/* /.container */}
    </div>
    {/* /.about-header */}
  </div>
)

const Technology = () => (
  <div>
    <div className="tech-header">
      <div className="flex-container">
        <div className="LPI-row">
          <div className="LPI1">
            <h3>LPI</h3>
            <hr className="intro-divider" />
            <h1>Low Pressure Isolation Natural Products Extraction</h1>
            <div className="desc-btns">
              <div className="lpi-btn-1"><span>1</span></div>
              <div className="lpi-btn-2"><span>2</span></div>
              <div className="lpi-btn-3"><span>3</span></div>
              <div className="lpi-btn-4"><span>4</span></div>
              <div className="lpi-btn-5"><span>5</span></div>
            </div>
            <div className="lpi-desc">
              <span className="lpi-desc-1"><h4>Low temperature, low pressure, non-hazardous, GRAS-approved.</h4></span>
              <span className="lpi-desc-2"><h4>2x yields with higher quality outcomes.</h4></span>
              <span className="lpi-desc-3"><h4>Smart automation and remote monitoring.</h4></span>
              <span className="lpi-desc-4"><h4>10x throughput and scalability.</h4></span>
              <span className="lpi-desc-5"><h4>High fidelity analysis and real time concentration data.</h4></span>
            </div>
            <span className="lpi-line" />
          </div>
          <div className="LPI2" />
        </div>
        <span className="slash-parent">
          <div className="slash" />
        </span>
        <div className="CW-row">
          <div className="CW1">
            <h3>CW</h3>
            <hr className="intro-divider" />
            <h1>ClarionWorks<sup style={{fontSize: '45%'}}>TM</sup> Natural Products Clarification</h1>
            <div className="desc-btns">
              <div className="cw-btn-1"><span>1</span></div>
              <div className="cw-btn-2"><span>2</span></div>
              <div className="cw-btn-3"><span>3</span></div>
              <div className="cw-btn-4"><span>4</span></div>
              <div className="cw-btn-5"><span>5</span></div>
            </div>
            <div className="cw-desc">
              <span className="cw-desc-1"><h4>Low temperature, fully reversible and controllable.</h4></span>
              <span className="cw-desc-2"><h4>Captures 25-50% more active compounds.</h4></span>
              <span className="cw-desc-3"><h4>Advanced R&amp;D for medical and consumer product innovation.</h4></span>
              <span className="cw-desc-4"><h4>Pesticide remediation program for product safety.</h4></span>
              <span className="cw-desc-5"><h4>Provides pharma-level standardization for predictable results.</h4></span>
            </div>
            <span className="cw-line" />
          </div>
          <div className="CW2" />
        </div>
      </div>
    </div>
    <div id="sm-tech" className="container" style={{padding: '5%'}}>
      <div className="row">
        <div className="col-xs-12">
          <div className="lpi-desc-sm">
            <h4>LPI</h4>
            <hr className="intro-divider" />
            <br />
            <h2 style={{marginBottom: 20}}> Low Pressure Isolation Natural Products Extraction</h2>
            <span className="lpi-desc-sm-1"><h5>– Low temperature, low pressure, non-hazardous, GRAS-approved.</h5></span>
            <span className="lpi-desc-sm-2"><h5>– 2x yields with higher quality outcomes.</h5></span>
            <span className="lpi-desc-sm-3"><h5>– Smart automation and remote monitoring.</h5></span>
            <span className="lpi-desc-sm-4"><h5>– 10x throughput and scalability.</h5></span>
            <span className="lpi-desc-sm-5"><h5>– High fidelity analysis and real time concentration data.</h5></span>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <div className="cw-desc-sm">
            <h4>CW</h4>
            <hr className="intro-divider" />
            <br />
            <h2 style={{marginBottom: 20}}>ClarionWorks<sup style={{fontSize: '45%'}}>TM</sup> Natural Products Clarification</h2>
            <span className="cw-desc-sm-1"><h5>– Low temperature, fully reversible and controllable.</h5></span>
            <span className="cw-desc-sm-2"><h5>– Captures 25-50% more active compounds.</h5></span>
            <span className="cw-desc-sm-3"><h5>– Advanced R&amp;D for medical and consumer product innovation.</h5></span>
            <span className="cw-desc-sm-4"><h5>– Pesticide remediation program for product safety.</h5></span>
            <span className="cw-desc-sm-5"><h5>– Provides pharma-level standardization for predictable results.</h5></span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const People = () => (
  <div>
    <div>
      <span className="line-accents3">
      </span>
      {/* company photo */}
      <div id="company" />
      {/* Bios section */}
      <div className="container">
        <div className="row bios">
          {/* Daniel Cook */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Daniel Cook</h2>
            <p>Co-Founder &amp; CEO</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#daniel">Learn more</button>
            {/* Modal */}
            <div id="daniel" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Daniel Cook</h2>
                      <h4>CEO &amp; Co-Founder</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Daniel has built and led successful companies for more than twenty years as an entrepreneur with a focus on product innovation. His belief that advanced science will catalyze the natural products industry sparked the creation of Metagreen. By assembling an elite corps of scientific talent, Metagreen is positioned to become a high growth venture that will deliver value, efficacy, and safety to the natural products world and enhance our quality of life.</p>
                    <p>Daniel specializes in growing companies from zero to $100M revenue in the Lifestyles of Health and Sustainability (LOHAS) space. As an Entrepreneur-in-Residence at Califa Farms, the fastest ever growing natural beverages company, he led innovation initiatives to launch new products and develop novel distribution channels. At Constellation Brands, Daniel worked with the Strategy Group to set up the acquisition of The Robert Mondavi Corporation. While CEO of YogaEarth® Group and Keen-Wah(+)® Foods, he built an eager community of 250,000 consumers that crowdsourced and co-developed dozens of successful natural products. Daniel forged a success story from one of Moet Hennessy group’s fastest growing properties and LVMH “Rising Star Brands” when he helmed the Terrazas de los Andes winery. As a senior executive at Endeavor Global, Daniel worked alongside entrepreneurs throughout the emerging markets and helped create more than $6B in revenue and 250,000 in new jobs.</p>
                    <p>Daniel earned an MBA from Harvard University. He served as a Fulbright Scholar to Chile and an Eisenhower Ambassador to Scandinavia and Russia.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Randall Murphy, Ph.D. */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Randall Murphy, Ph.D.</h2>
            <p>Co-Founder &amp; CSO</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#randall">Learn more</button>
            {/* Modal */}
            <div id="randall" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Randall Murphy, Ph.D.</h2>
                      <h4>Co-Founder &amp; CSO</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Dr. Murphy has forty years of experience building successful companies in biotechnology and biopharmaceuticals. As a famed academic in the scientific community with expertise in natural product extraction methods and neurochemistry, he is prepared to deliver significant technological advances to a scientifically stagnant industry. He believes Metagreen is poised to advance a much-needed revolution in the natural products space.</p>
                    <p>Dr. Murphy co-founded Achillion Pharmaceuticals and Marinus Pharmaceuticals, two companies that are today traded on NASDAQ, and participated in senior scientific management in a dozen other companies. He helped grow Epalex from a development-stage company in the neurology arena, and Progenra, a discovery company with a focus on ubiquitin and deubiquitinases. Dr. Murphy has designed, built, and managed several respected laboratories as well as developed widely used methodologies and standards that are in practice in labs at the U.S. National Bureau of Standards and Center for Analytical Chemistry, and the Staff Research Fellow Laboratory of Biophysical Chemistry. While a tenured faculty member at New York University, he received the Presidential Fellowship and mentored many post-doctoral students who now work at some of the most prestigious institutions and companies in the world.</p>
                    <p>Dr. Murphy is the youngest graduate on record at USC and attended the M.D. Program at UCLA. He earned a Ph.D. in chemistry under Nobel laureate W.F. Libby.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Jill Thomassian */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Jill Thomassian</h2>
            <p>Chief Operating Officer</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#jill">Learn more</button>
            {/* Modal */}
            <div id="jill" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Jill Thomaasian</h2>
                      <h4>Chief Operating Officer</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Jill has managed companies through high growth phases and ushered many new products and technologies to market. As an exceptional entrepreneur, operations and technical program manager, Jill recognized that Metagreen offered a chance to build a dynamic organization that could change an entire industry. She believes Metagreen has the right talent at the right time to make a lasting impact in this field.</p>
                    <p>As Chief Operating Officer for RealD, the market leader for 3D visualization in consumer and professional cinema, Jill oversaw the R&amp;D, engineering, operations, and manufacturing during a time of exponential growth in the industry. She took RealD from just over 100 installed systems to over 18,000 units worldwide and was part of a successful IPO on the NYSE in 2010. She oversaw the release of the patented XL cinema product and the development of the RDZ consumer display system. At Hewlett-Packard, Jill developed processes and artificial intelligence algorithms for the inkjet business unit, developed high volume manufacturing lines, and initiated programs for six sigma quality control efforts. She led multi-disciplinary technical teams at Accu-Fab Systems in the design and manufacture of high-speed, high-precision automation equipment. She also helped Microfabrica develop a patented technology to apply a 3D rapid prototyping approach to MEMs devices.</p>
                    <p>Jill received her MBA from the University of Southern California and earned her Master's of Science in Mechanical Engineering from MIT as a National Scientific Foundation research fellow. Jill also served as an officer in the United States Army Reserve.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Andres Martinez */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Andres Martinez</h2>
            <p>Director of Chemistry</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#andres">Learn more</button>
            {/* Modal */}
            <div id="andres" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Andres Martinez</h2>
                      <h4>Director of Chemistry</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Andres has been a driving force in health and wellness research projects for over fifteen years, managing technical relationships and onboarding technology. Having focused on improving people's day-to-day lives through chemistry, he welcomes the opportunity to introduce science and technology to natural products. Metagreen has assembled a leadership team and group of scientists that make him confident they can reboot the natural products industry.</p>
                    <p>Andres studied and participated in research projects in both the silica polymer synthesis laboratory and the stable-isotope geochemistry laboratory. At Novaxx Analytical Laboratories he worked closely with the owner, a well-respected pathologist. Together they built a small analytical laboratory capable of processing organic samples for mercury content as well as pesticide and PCB profiles. At Metagreen, Andres oversees the operations of the Chemistry Department’s ClarionWorks technology development, analytic capabilities, and product R&amp;D. He’s constructing a safe and user-friendly system while making sure the analytic laboratory operates under rigorous QA/QC criteria — as would any ISO-certified environmental lab. The ClarionWorks program is the culmination of science, technology, diplomacy, education, innovation, and communication. The program has evolved from an instrument in a box, to a full R&amp;D lab with a world-class team.</p>
                    <p>Andres received both his BS and MS from University of Southern California, with graduate work focused on proxy methods for evaluating environmental conditions at times of abrupt climate change.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Loren Erik Snyder */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Loren Erik Snyder</h2>
            <p>Director of Engineering</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#erik">Learn more</button>
            {/* Modal */}
            <div id="erik" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Loren Erik Snyder</h2>
                      <h4>Director of Engineering</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Erik is a mechanical engineer and entrepreneur with extensive experience in manufacturing in the fields of biomedical, energy, and defense. He believes it’s time for the natural products industry to deliver better products by taking a scientific, quantitative, and results-based approach. His leadership skills and lifelong dedication to engineering through science will help Metagreen redefine the standards of quality in natural products.</p>
                    <p>At the Lerner Research Institute’s Greenberg lab within Cleveland Clinic, Erik co-developed the IOPS™ real-time 3D surgical guidance system for endovascular surgery — the world’s first to operate without the dangers of ionizing radiation-based imaging. As a senior engineer at Ohio Lumex, he developed equipment for large power plants and designed acid gas removal systems for analysis instruments. He performed systems-level engineering studies for a prototype weapon system at Accurate Munition Systems and created mechanical, electromechanical, and electro-optical designs as a system engineer. Erik held research and operational engineering positions at Phillips Classic Biomedical Laser Research Laboratory and Mueller Streamline — one of the top five producers of copper/brass tubing and fittings in the world. He is also the founder of Senderos Recovery Technologies LLC, where he successfully designed, built, and demonstrated prototype technology/process demonstration equipment.</p>
                    <p>Erik received a BSME from Colorado State University and MSME from Texas A&amp;M, before completing his MBA at the University of Wisconsin–Madison. In 2011, he was selected a Clean Tech Open Semifinalist.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tisha Villaluz */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Tisha Villaluz</h2>
            <p>Director of People &amp; Operations</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#tisha">Learn more</button>
            {/* Modal */}
            <div id="tisha" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Tisha Villaluz</h2>
                      <h4>Director of People &amp; Operations</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Known for developing efficient internal operations, Tisha has been managing everything from payroll and human resources to supporting executive management for the past decade. Recognizing Metagreen’s potential, she directed her talents to the company — proud to work alongside brilliant people making a positive impact on the world.</p>
                    <p>Most recently, Tisha coordinated office operations for Wireless Capital Partners, supporting the CEO and executive team with human resources, payroll, and overall office management. At NanoH2O, a successful startup that developed advanced water purification and desalination technology, she handled the majority of tasks under the Vice President of Finance and Vice President of Business Development — while also optimizing office operations and procedures. At The Coffee Bean &amp; Tea Leaf, she gave administrative support to the Vice President of Real Estate and Construction and got promoted to Project Manager for exceptional work building an efficient and effective office. Everywhere she’s been, Tisha has developed organizational strategies by identifying and researching human resources issues, providing analysis, and executing on recommendations.</p>
                    <p>Tisha earned a Bachelor's degree in Psychology from the University of Cebu in the Philippines.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Daria Grigoreva */}
          <div className="hidden-xs col-sm-6 col-md-4 col-lg-4 bio">
            <h2>Daria Grigoreva</h2>
            <p>R&amp;D Chemist</p>
            {/* Trigger the modal with a button */}
            <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#daria">Learn more</button>
            {/* Modal */}
            <div id="daria" className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">×</button>
                    <div className="modal-title">
                      <h2>Daria Grigoreva</h2>
                      <h4>R&amp;D Chemist</h4>
                    </div>
                  </div>
                  <div className="modal-body">
                    <p>Daria is a chemical engineer and chemist with hands-on experience implementing new laboratory technologies and developing polymer materials with advanced properties. She feels the inspiring team at Metagreen offers the opportunity to use her expertise in both chemistry and process engineering to improve human lives.</p>
                    <p>Daria worked as a chemist for Russian Academy of Sciences for five years with a focus on polymer synthesis, polymer physics and chemistry, polymer solutions, membrane creation and study. As a Process Engineer for Gazprom in Russia, she performed the comprehensive analysis of various solutions for challenging oil and gas processing tasks — including hybrid and integrated processes, cost-efficient and energy-saving technologies. Daria has had profound success implementing new technologies from laboratory scale to large scale using her mastery of process engineering, operation optimization, and extensive analysis. She is also a recognized membrane specialist who can develop complex membrane structures for various applications and bring polymer synthesis to large scale integrated industrial units.</p>
                    <p>Daria earned her Masters at Moscow State Academy of Fine Chemical Technology and continued her studies at the Russian Academy of Sciences and Gazprom University. She is currently finishing her MBA.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row hidden-sm hidden-md hidden-lg" style={{marginBottom: 30}}>
          <div className="panel-group visible-xs" id="accordion">
            {/* Daniel Cook */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                    Daniel Cook</a>
                </h2>
              </div>
              <div id="collapse1" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Co-Founder &amp; CEO</h4>
                  <p>Daniel has built and led successful companies for more than twenty years as an entrepreneur with a focus on product innovation. His belief that advanced science will catalyze the natural products industry sparked the creation of Metagreen. By assembling an elite corps of scientific talent, Metagreen is positioned to become a high growth venture that will deliver value, efficacy, and safety to the natural products world and enhance our quality of life.</p>
                  <p>Daniel specializes in growing companies from zero to $100M revenue in the Lifestyles of Health and Sustainability (LOHAS) space. As an Entrepreneur-in-Residence at Califa Farms, the fastest ever growing natural beverages company, he led innovation initiatives to launch new products and develop novel distribution channels. At Constellation Brands, Daniel worked with the Strategy Group to set up the acquisition of The Robert Mondavi Corporation. While CEO of YogaEarth® Group and Keen-Wah(+)® Foods, he built an eager community of 250,000 consumers that crowdsourced and co-developed dozens of successful natural products. Daniel forged a success story from one of Moet Hennessy group’s fastest growing properties and LVMH “Rising Star Brands” when he helmed the Terrazas de los Andes winery. As a senior executive at Endeavor Global, Daniel worked alongside entrepreneurs throughout the emerging markets and helped create more than $6B in revenue and 250,000 in new jobs.</p>
                  <p>Daniel earned an MBA from Harvard University. He served as a Fulbright Scholar to Chile and an Eisenhower Ambassador to Scandinavia and Russia.</p>
                </div>
              </div>
            </div>
            {/* Randall Murphy, Ph.D. */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                    Randall Murphy, Ph.D.</a>
                </h2>
              </div>
              <div id="collapse2" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Co-Founder &amp; CSO</h4>
                  <p>Dr. Murphy has forty years of experience building successful companies in biotechnology and biopharmaceuticals. As a famed academic in the scientific community with expertise in natural product extraction methods and neurochemistry, he is prepared to deliver significant technological advances to a scientifically stagnant industry. He believes Metagreen is poised to advance a much-needed revolution in the natural products space.</p>
                  <p>Dr. Murphy co-founded Achillion Pharmaceuticals and Marinus Pharmaceuticals, two companies that are today traded on NASDAQ, and participated in senior scientific management in a dozen other companies. He helped grow Epalex from a development-stage company in the neurology arena, and Progenra, a discovery company with a focus on ubiquitin and deubiquitinases. Dr. Murphy has designed, built, and managed several respected laboratories as well as developed widely used methodologies and standards that are in practice in labs at the U.S. National Bureau of Standards and Center for Analytical Chemistry, and the Staff Research Fellow Laboratory of Biophysical Chemistry. While a tenured faculty member at New York University, he received the Presidential Fellowship and mentored many post-doctoral students who now work at some of the most prestigious institutions and companies in the world.</p>
                  <p>Dr. Murphy is the youngest graduate on record at USC and attended the M.D. Program at UCLA. He earned a Ph.D. in chemistry under Nobel laureate W.F. Libby.</p>
                </div>
              </div>
            </div>
            {/* Jill Thomassian */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                    Jill Thomassian</a>
                </h2>
              </div>
              <div id="collapse3" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Chief Operating Officer</h4>
                  <p>Jill has managed companies through high growth phases and ushered many new products and technologies to market. As an exceptional entrepreneur, operations and technical program manager, Jill recognized that Metagreen offered a chance to build a dynamic organization that could change an entire industry. She believes Metagreen has the right talent at the right time to make a lasting impact in this field.</p>
                  <p>As Chief Operating Officer for RealD, the market leader for 3D visualization in consumer and professional cinema, Jill oversaw the R&amp;D, engineering, operations, and manufacturing during a time of exponential growth in the industry. She took RealD from just over 100 installed systems to over 18,000 units worldwide and was part of a successful IPO on the NYSE in 2010. She oversaw the release of the patented XL cinema product and the development of the RDZ consumer display system. At Hewlett-Packard, Jill developed processes and artificial intelligence algorithms for the inkjet business unit, developed high volume manufacturing lines, and initiated programs for six sigma quality control efforts. She led multi-disciplinary technical teams at Accu-Fab Systems in the design and manufacture of high-speed, high-precision automation equipment. She also helped Microfabrica develop a patented technology to apply a 3D rapid prototyping approach to MEMs devices.</p>
                  <p>Jill received her MBA from the University of Southern California and earned her Master's of Science in Mechanical Engineering from MIT as a National Scientific Foundation research fellow. Jill also served as an officer in the United States Army Reserve.</p>
                </div>
              </div>
            </div>
            {/* Andres Martinez */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">
                    Andres Martinez</a>
                </h2>
              </div>
              <div id="collapse4" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Director of Chemistry</h4>
                  <p>Andres has been a driving force in health and wellness research projects for over fifteen years, managing technical relationships and onboarding technology. Having focused on improving people's day-to-day lives through chemistry, he welcomes the opportunity to introduce science and technology to natural products. Metagreen has assembled a leadership team and group of scientists that make him confident they can reboot the natural products industry.</p>
                  <p>Andres studied and participated in research projects in both the silica polymer synthesis laboratory and the stable-isotope geochemistry laboratory. At Novaxx Analytical Laboratories he worked closely with the owner, a well-respected pathologist. Together they built a small analytical laboratory capable of processing organic samples for mercury content as well as pesticide and PCB profiles. At Metagreen, Andres oversees the operations of the Chemistry Department’s ClarionWorks technology development, analytic capabilities, and product R&amp;D. He’s constructing a safe and user-friendly system while making sure the analytic laboratory operates under rigorous QA/QC criteria — as would any ISO-certified environmental lab. The ClarionWorks program is the culmination of science, technology, diplomacy, education, innovation, and communication. The program has evolved from an instrument in a box, to a full R&amp;D lab with a world-class team.</p>
                  <p>Andres received both his BS and MS from University of Southern California, with graduate work focused on proxy methods for evaluating environmental conditions at times of abrupt climate change.</p>
                </div>
              </div>
            </div>
            {/* Loren Erik Snyder */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse5">
                    Loren Erik Snyder</a>
                </h2>
              </div>
              <div id="collapse5" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Director of Engineering</h4>
                  <p>Erik is a mechanical engineer and entrepreneur with extensive experience in manufacturing in the fields of biomedical, energy, and defense. He believes it’s time for the natural products industry to deliver better products by taking a scientific, quantitative, and results-based approach. His leadership skills and lifelong dedication to engineering through science will help Metagreen redefine the standards of quality in natural products.</p>
                  <p>At the Lerner Research Institute’s Greenberg lab within Cleveland Clinic, Erik co-developed the IOPS™ real-time 3D surgical guidance system for endovascular surgery — the world’s first to operate without the dangers of ionizing radiation-based imaging. As a senior engineer at Ohio Lumex, he developed equipment for large power plants and designed acid gas removal systems for analysis instruments. He performed systems-level engineering studies for a prototype weapon system at Accurate Munition Systems and created mechanical, electromechanical, and electro-optical designs as a system engineer. Erik held research and operational engineering positions at Phillips Classic Biomedical Laser Research Laboratory and Mueller Streamline — one of the top five producers of copper/brass tubing and fittings in the world. He is also the founder of Senderos Recovery Technologies LLC, where he successfully designed, built, and demonstrated prototype technology/process demonstration equipment.</p>
                  <p>Erik received a BSME from Colorado State University and MSME from Texas A&amp;M, before completing his MBA at the University of Wisconsin–Madison. In 2011, he was selected a Clean Tech Open Semifinalist.</p>
                </div>
              </div>
            </div>
            {/* Tisha Villaluz */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse6">
                    Tisha Villaluz</a>
                </h2>
              </div>
              <div id="collapse6" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>Director of People &amp; Operations</h4>
                  <p>Known for developing efficient internal operations, Tisha has been managing everything from payroll and human resources to supporting executive management for the past decade. Recognizing Metagreen’s potential, she directed her talents to the company — proud to work alongside brilliant people making a positive impact on the world.</p>
                  <p>Most recently, Tisha coordinated office operations for Wireless Capital Partners, supporting the CEO and executive team with human resources, payroll, and overall office management. At NanoH2O, a successful startup that developed advanced water purification and desalination technology, she handled the majority of tasks under the Vice President of Finance and Vice President of Business Development — while also optimizing office operations and procedures. At The Coffee Bean &amp; Tea Leaf, she gave administrative support to the Vice President of Real Estate and Construction and got promoted to Project Manager for exceptional work building an efficient and effective office. Everywhere she’s been, Tisha has developed organizational strategies by identifying and researching human resources issues, providing analysis, and executing on recommendations.</p>
                  <p>Tisha earned a Bachelor's degree in Psychology from the University of Cebu in the Philippines.</p>
                </div>
              </div>
            </div>
            {/* Daria Grigoreva */}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordion" href="#collapse7">
                    Daria Grigoreva</a>
                </h2>
              </div>
              <div id="collapse7" className="panel-collapse collapse">
                <div className="panel-body">
                  <h4>R&amp;D Chemist</h4>
                  <p>Daria is a chemical engineer and chemist with hands-on experience implementing new laboratory technologies and developing polymer materials with advanced properties. She feels the inspiring team at Metagreen offers the opportunity to use her expertise in both chemistry and process engineering to improve human lives.</p>
                  <p>Daria worked as a chemist for Russian Academy of Sciences for five years with a focus on polymer synthesis, polymer physics and chemistry, polymer solutions, membrane creation and study. As a Process Engineer for Gazprom in Russia, she performed the comprehensive analysis of various solutions for challenging oil and gas processing tasks — including hybrid and integrated processes, cost-efficient and energy-saving technologies. Daria has had profound success implementing new technologies from laboratory scale to large scale using her mastery of process engineering, operation optimization, and extensive analysis. She is also a recognized membrane specialist who can develop complex membrane structures for various applications and bring polymer synthesis to large scale integrated industrial units.</p>
                  <p>Daria earned her Masters at Moscow State Academy of Fine Chemical Technology and continued her studies at the Russian Academy of Sciences and Gazprom University. She is currently finishing her MBA.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{position: 'fixed', bottom: 0, width: '100%', zIndex: 50}}>
        <div className="row">
          <a id="backToTop" href="#" title="Back to top">^</a>
          <footer className="meta-footer">
            <p>Metagreen - Est. 2015</p>
          </footer>
        </div>
      </div>
    </div>

  </div>
)



export default Metagreen
