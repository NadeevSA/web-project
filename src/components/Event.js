import '../css/table.css'

function Event() {
  return (
    <section id="Event">
        <div className="table_main">
            <div className="table_div">
                <h2 className="table_h2"> Event Scheduler</h2>
                <div className="days">
                    <a id="days1" href="#day1" className="table_a">
                        <h3 className="titleDay">Day 01</h3>
                        <h5 className="underTitle">16 August</h5>
                        <div className="day_line"></div>
                    </a>
                    <a id="days2" href="#day2" className="table_a">
                        <h3 className="titleDay">Day 02</h3>
                        <h5 className="underTitle">17 August</h5>
                        <div className="day_line"></div>
                    </a>
                    <a id="days3" href="#day3" className="table_a">
                        <h3 className="titleDay">Day 03</h3>
                        <h5 className="underTitle">18 August</h5>
                        <div className="day_line"></div>
                    </a>
                </div>
                <div className="contentsall">
                    <div className="schedule_content" id="day1">
                        <div className="content">
                            <div>Time</div>
                            <div>Content</div>
                            <div>Speakers</div>
                        </div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">11:00 AM to 12:00 PM</div>
                            <div className="secondColomn">
                                Vestibulum vel eros vel metus lacinia feugiat a nec metus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis voluptate amet quae, facere beatae nam eius soluta sed earum dicta sunt quia. Eos tenetur iusto sapiente necessitatibus, quasi eveniet atque.
                            </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <img src={require('../img/Avatar.png')} />
                                    <div className="firdColomnContentName">Yui Ronald</div>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">12:00 PM to 03:00 PM</div>
                            <div className="secondColomn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, non asperiores explicabo laborum pariatur tenetur et autem veritatis itaque quam ducimus minus maxime aliquam quasi vitae iure cumque harum. Autem. </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <img src={require('../img/Avatar.png')} />
                                    <div className="firdColomnContentName">Bob John</div>
                                </div>
                                <div className="allfird">
                                    <img src={require('../img/av3.png')} />
                                    <div className="firdColomnContentName">Emma Satoshi</div>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">03:00 PM to 04:00 PM</div>
                            <div className="secondColomn">
                                Vestibulum vel eros vel metus lacinia feugiat a nec metus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima optio similique odit ex nesciunt nostrum corrupti veritatis cumque officiis assumenda animi, sint sapiente totam cupiditate, magni asperiores ab, magnam possimus.
                            </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/av4.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Sasha Jackson</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule_content" id="day2">
                        <div className="content">
                            <div>Time</div>
                            <div>Content</div>
                            <div>Speakers</div>
                        </div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">01:00 AM to 03:00 PM</div>
                            <div className="secondColomn">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                            </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/Avatar.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Yui Ronald</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">03:00 PM to 04:00 PM</div>
                            <div className="secondColomn">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum deleniti dolores quasi reiciendis quas quaerat sit incidunt delectus facere vitae, odit similique temporibus magni praesentium! Totam non obcaecati sint distinctio.</div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/av3.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Emma Satoshi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">04:00 PM to 05:00 PM</div>
                            <div className="secondColomn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nesciunt suscipit aliquid ratione reprehenderit sunt perspiciatis, expedita earum vel, excepturi, recusandae ipsa nostrum aut maxime laboriosam iste! Dolorum, aut quas?
                            </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/av4.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Sasha Jackson</div>
                                    </div>
                                </div>
                                <div className="allfird">
                                    <div> <img src={require('../img/av5.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Diana Brock</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="schedule_content" id="day3">
                        <div className="content">
                            <div>Time</div>
                            <div>Content</div>
                            <div>Speakers</div>
                        </div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">10:00 AM to 12:00 PM</div>
                            <div className="secondColomn">Vestibulum vel eros vel metus lacinia feugiat a nec metus.
                            </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/Avatar.png')} /></div>
                                    <div className="firdColomnContent">
                                        <div className="firdColomnContentName">Yui Ronald</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="line"></div>
                        <div className="textScheduleFirst">
                            <div className="firstColomn">12:00 PM to 05:00 PM</div>
                            <div className="secondColomn">Duis nec sodales nibh. Proin lectus tortor, rutrum vel
                                vulputate
                                vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent
                                porttitor
                                convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non
                                lacus
                                ac rhoncus. Morbi quis luctus leo, nec cursus ex. </div>
                            <div className="firdColomn">
                                <div className="allfird">
                                    <div> <img src={require('../img/Avatar.png')} /></div>
                                    <div className="firdColomnContent">
                                    <div className="firdColomnContentName">Bob John</div>
                            </div>
                        </div>
                        <div className="allfird">
                            <div> <img src={require('../img/av3.png')} /></div>
                            <div className="firdColomnContent">
                            <div className="firdColomnContentName">Emma Satoshi</div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </div> 
        </div> 
        </div>
    </section>
  );
}

export default Event;
