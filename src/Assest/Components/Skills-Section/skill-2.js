import '../Styling/style.css';

const SkillsProg = () => {
    return (
        <div className="prog-div">
            <h1 className="prog-head">Web Development</h1>
            <div className="prog-border-1"></div>

            <p className="prog-pera">Html</p>
            <div class="noload">
                <span class="loadtext1" id="loadspan">70%</span>
                <div class="load1" id="loaddiv">
                </div>
            </div>

            <p className="prog-pera">Css</p>
            <div class="noload">
                <span class="loadtext2" id="loadspan">80%</span>
                <div class="load2" id="loaddiv">
                </div>
            </div>

            <p className="prog-pera">JavaScript</p>
            <div class="noload">
                <span class="loadtext3" id="loadspan">70%</span>
                <div class="load3" id="loaddiv">
                </div>
            </div>

            <p className="prog-pera">React.Js</p>
            <div class="noload">
                <span class="loadtext4" id="loadspan">10%</span>
                <div class="load4" id="loaddiv">
                </div>
            </div>

        </div>
    )
}
export default SkillsProg;