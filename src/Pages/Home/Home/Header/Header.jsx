import React from "react";
import "./Header.css";
import "../../../../Header"

const Header = () => {
  return (
    <div>
      <div id="slider">
        <div class="dp-wrap">
          <div id="dp-slider">
            <div class="dp_item" data-class="1" data-position="1">
              <div class="dp-content">
                <h2>Dirlis Ertugrul</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit..
                </p>
                <a href="#" class="site-btn">
                  Read More…
                </a>
              </div>
              <div class="dp-img">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/rpTXWBb0/MV5-BOTQ0-NDY0-Y2-Mt-MTdi-Yi00-Zjgz-LWJj-Nm-It-Nz-Yw-Y2-Nk-Zjll-Ym-I1-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg"
                  alt="investing"
                />
              </div>
            </div>

            <div class="dp_item" data-class="2" data-position="2">
              <div class="dp-content">
                <h2>Dirlis Ertugrul</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit..
                </p>
                <a href="#" class="site-btn">
                  Read More…
                </a>
              </div>
              <div class="dp-img">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/pVsWvLS0/ffbd73fd0e5e40a8443e11c9d2b29d5d.jpg"
                  alt="investing"
                />
              </div>
            </div>

            <div class="dp_item" data-class="3" data-position="3">
              <div class="dp-content">
                <h2>Dirlis Ertugrul</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit..
                </p>
                <a href="#" class="site-btn">
                  Read More…
                </a>
              </div>
              <div class="dp-img">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/tgFRGt0P/MV5-BMGM2-Zm-E4-Yz-Mt-OTBm-NS00-Nm-E4-LWI4-NTUt-Mjg3-ZTJj-ZDYw-ZTc5-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg"
                  alt="investing"
                />
              </div>
            </div>

            <div class="dp_item" data-class="4" data-position="4">
              <div class="dp-content">
                <h2>Dirlis Ertugrul</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit..
                </p>
                <a href="#" class="site-btn">
                  Read More…
                </a>
              </div>
              <div class="dp-img">
                <img
                  class="img-fluid"
                  src="https://i.postimg.cc/wv6zKCQ8/MV5-BNj-I4-Yj-Jl-ZTct-Mj-U5-NS00-MGFh-LWFk-Zjgt-OTlj-N2-Y4-Nz-I1-Mj-A4-Xk-Ey-Xk-Fqc-Gde-QXVy-NDg4-Mjkz-NDk-V1.jpg"
                  alt="investing"
                />
              </div>
            </div>
          </div>

          <span id="dp-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
              <defs>
                {/* <style>
            .cls-1 {
              fill: none;
              stroke: gold;
              stroke-miterlimit: 10;
              stroke-width: 7px;
            }
          </style> */}
              </defs>
              <path
                id="Rectangle_4_Copy"
                data-name="Rectangle 4 Copy"
                class="cls-1"
                d="M32.246,0V33.178L0,31.953"
                transform="translate(0.094 25.276) rotate(-45)"
              />
            </svg>
          </span>

          <span id="dp-prev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.401 51.401">
              <defs>
                {/* <style>
            .cls-1 {
              fill: none;
              stroke: gold;
              stroke-miterlimit: 10;
              stroke-width: 7px;
            } */}
                {/* </style> */}
              </defs>
              <path
                id="Rectangle_4_Copy"
                data-name="Rectangle 4 Copy"
                class="cls-1"
                d="M32.246,0V33.178L0,31.953"
                transform="translate(0.094 25.276) rotate(-45)"
              />
            </svg>
          </span>

          <ul id="dp-dots">
            <li data-class="1" class="active"></li>
            <li data-class="2"></li>
            <li data-class="3"></li>
            <li data-class="4"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
