import React from "react";

function Description() {
  return (
    <div className="ltn__shop-details-tab-area pb-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__shop-details-tab-inner">
              <div className="ltn__shop-details-tab-menu">
                <div className="nav">
                  <a
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_1"
                  >
                    Description
                  </a>
                  <a
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_2"
                    className=""
                  >
                    Reviews
                  </a>
                  <a
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_3"
                    className=""
                  >
                    Comments
                  </a>
                  <a
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_4"
                    className=""
                  >
                    Shipping Policy
                  </a>
                  <a
                    data-bs-toggle="tab"
                    href="#liton_tab_details_1_5"
                    className=""
                  >
                    Size Chart
                  </a>
                </div>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade active show"
                  id="liton_tab_details_1_1"
                >
                  <div className="ltn__shop-details-tab-content-inner">
                    <h4 className="title-2">
                      Lorem ipsum dolor sit amet elit.
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rerum odio omnis animi magnam qui sequi dolore, voluptatum
                      in recusandae dolorum obcaecati quas accusantium eius
                      porro laborum, corporis! Consectetur, dolores, provident!
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_details_1_2">
                  <div className="ltn__shop-details-tab-content-inner">
                    <h4 className="title-2">Customer Reviews</h4>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star-half-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star"></i>
                          </a>
                        </li>
                        <li className="review-total">
                          {" "}
                          <a href="#"> ( 95 Reviews )</a>
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <div className="ltn__comment-area mb-30">
                      <div className="ltn__comment-inner">
                        <ul>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/1.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 3, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/3.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/2.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star-half-alt"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="far fa-star"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <span className="ltn__comment-reply-btn">
                                  September 2, 2020
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ltn__comment-reply-area ltn__form-box mb-60">
                      <form action="#">
                        <h4 className="title-2">Add a Review</h4>
                        <div className="mb-30">
                          <div className="add-a-review">
                            <h6>Your Ratings:</h6>
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your comments...."></textarea>
                        </div>
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                        </div>
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                        </div>
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                        </div>
                        <label className="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
                        </label>
                        <div className="btn-wrapper">
                          <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_details_1_3">
                  <div className="ltn__shop-details-tab-content-inner">
                    <div className="ltn__comment-area mb-30">
                      <h4 className="title-2">Comments (5)</h4>
                      <div className="ltn__comment-inner">
                        <ul>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/1.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <span className="comment-date">
                                  20th May 2020
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <a href="#" className="ltn__comment-reply-btn">
                                  <i className="fas fa-reply"></i>Reply
                                </a>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/3.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <span className="comment-date">
                                  20th May 2020
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <a href="#" className="ltn__comment-reply-btn">
                                  <i className="fas fa-reply"></i>Reply
                                </a>
                              </div>
                            </div>
                            <ul>
                              <li>
                                <div className="ltn__comment-item clearfix">
                                  <div className="ltn__commenter-img">
                                    <img
                                      src="assets/img/testimonial/4.jpg"
                                      alt="Image"
                                    />
                                  </div>
                                  <div className="ltn__commenter-comment">
                                    <h6>
                                      <a href="#">Adam Smit</a>
                                    </h6>
                                    <span className="comment-date">
                                      20th May 2020
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Doloribus, omnis fugit
                                      corporis iste magnam ratione.
                                    </p>
                                    <a
                                      href="#"
                                      className="ltn__comment-reply-btn"
                                    >
                                      <i className="fas fa-reply"></i>Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="ltn__comment-item clearfix">
                                  <div className="ltn__commenter-img">
                                    <img
                                      src="assets/img/testimonial/1.jpg"
                                      alt="Image"
                                    />
                                  </div>
                                  <div className="ltn__commenter-comment">
                                    <h6>
                                      <a href="#">Adam Smit</a>
                                    </h6>
                                    <span className="comment-date">
                                      20th May 2020
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Doloribus, omnis fugit
                                      corporis iste magnam ratione.
                                    </p>
                                    <a
                                      href="#"
                                      className="ltn__comment-reply-btn"
                                    >
                                      <i className="fas fa-reply"></i>Reply
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="ltn__comment-item clearfix">
                              <div className="ltn__commenter-img">
                                <img
                                  src="assets/img/testimonial/2.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="ltn__commenter-comment">
                                <h6>
                                  <a href="#">Adam Smit</a>
                                </h6>
                                <span className="comment-date">
                                  20th May 2020
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Doloribus, omnis fugit
                                  corporis iste magnam ratione.
                                </p>
                                <a href="#" className="ltn__comment-reply-btn">
                                  <i className="fas fa-reply"></i>Reply
                                </a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="ltn__comment-reply-area ltn__form-box mb-60">
                      <form action="#">
                        <h4 className="title-2">Leave a Reply</h4>
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <textarea placeholder="Type your comments...."></textarea>
                        </div>
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input type="text" placeholder="Type your name...." />
                        </div>
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            type="email"
                            placeholder="Type your email...."
                          />
                        </div>
                        <div className="input-item input-item-website ltn__custom-icon">
                          <input
                            type="text"
                            name="website"
                            placeholder="Type your website...."
                          />
                        </div>
                        <label className="mb-0">
                          <input type="checkbox" name="agree" /> Save my name,
                          email, and website in this browser for the next time I
                          comment.
                        </label>
                        <div className="btn-wrapper">
                          <button
                            className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            type="submit"
                          >
                            <i className="far fa-comments"></i> Post Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_details_1_4">
                  <div className="ltn__shop-details-tab-content-inner">
                    <h4 className="title-2">Shipping policy for our store</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nam voluptates rerum neque ea libero numquam officiis
                      ipsum, consectetur ducimus dicta in earum repellat sunt ab
                      odit laboriosam cupiditate ipsam, doloremque.
                    </p>
                    <ul>
                      <li>1-2 business days (Typically by end of day)</li>
                      <li>
                        <a href="#">30 days money back guaranty</a>
                      </li>
                      <li>24/7 live support</li>
                      <li>odio dignissim qui blandit praesent</li>
                      <li>luptatum zzril delenit augue duis dolore</li>
                      <li>te feugait nulla facilisi.</li>
                    </ul>
                    <div className="ltn__video-img alignleft">
                      <img
                        src="assets/img/bg/17.jpg"
                        alt="video popup bg image"
                      />
                      <a
                        className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                        href="https://www.youtube.com/embed/OU368YgQb-M?autoplay=1&amp;showinfo=0"
                        data-rel="lightcase:myCollection"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis, quia vel eligendi ipsam. Ea, quasi quam ducimus
                      recusandae unde ipsa nam rem a minus tenetur quae sint
                      voluptatem voluptate inventore. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Omnis, quia vel
                      eligendi ipsam. Ea, quasi quam ducimus recusandae unde
                      ipsa nam rem a minus tenetur quae sint voluptatem
                      voluptate inventore.{" "}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Omnis, quia vel eligendi ipsam. Ea, quasi quam ducimus
                      recusandae unde ipsa nam rem a minus tenetur quae sint
                      voluptatem voluptate inventore. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Omnis, quia vel
                      eligendi ipsam. Ea, quasi quam ducimus recusandae unde
                      ipsa nam rem a minus tenetur quae sint voluptatem
                      voluptate inventore.
                    </p>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_details_1_5">
                  <div className="ltn__shop-details-tab-content-inner">
                    <div className="table-1 mb-20">
                      <table className="">
                        <tbody>
                          <tr>
                            <th>SIZE</th>
                            <th>XS</th>
                            <th>S</th>
                            <th>S/M</th>
                            <th>M</th>
                            <th>M/L</th>
                            <th>L</th>
                            <th>XL</th>
                          </tr>
                          <tr data-region="uk">
                            <th>UK</th>
                            <td>4</td>
                            <td>6 - 8</td>
                            <td>6 - 10</td>
                            <td>10 - 12</td>
                            <td>12 - 16</td>
                            <td>14 - 16</td>
                            <td>18</td>
                          </tr>
                          <tr data-region="eur">
                            <th>
                              <span className="mobile-show">EUR</span>
                              <span className="mobile-none">EUROPE</span>
                            </th>
                            <td>32</td>
                            <td>34 - 36</td>
                            <td>34 - 38</td>
                            <td>38 - 40</td>
                            <td>40 - 44</td>
                            <td>42 - 44</td>
                            <td>46</td>
                          </tr>
                          <tr data-region="usa">
                            <th>
                              <span>USA/</span>
                              <span className="mobile-none">CANADA</span>
                              <span className="mobile-show"> CA</span>
                            </th>
                            <td>0</td>
                            <td>2 - 4</td>
                            <td>2 - 6</td>
                            <td>6 - 8</td>
                            <td>8 - 12</td>
                            <td>10 - 12</td>
                            <td>14</td>
                          </tr>
                          <tr data-region="aus">
                            <th>AUS / NZ</th>
                            <td>4</td>
                            <td>6 - 8</td>
                            <td>6 - 10</td>
                            <td>10 - 12</td>
                            <td>12 - 16</td>
                            <td>14 - 16</td>
                            <td>18</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
