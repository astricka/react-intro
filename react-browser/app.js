// JSX
const result = 5 * 43;

const topSectionData = {
    title: 'The band!',
    subTitle: 'We love music',
    mainParagraph: 'We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur\n' +
        '        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '        quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n' +
        '        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim\n' +
        '        id est laborum consectetur\n' +
        '        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n' +
        '        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imagesName: "name",
    images: 'img/sustauskas.jpeg'
} ;
const bottomSectionData = {
    title: "TOUR DATES",
    subTitle: "Remember to book your tickets!",
    buyTickets: 'Buy tickets',
    images: 'img/sustauskas.jpeg',
}
const App = (<div className="w3-container w3-content w3-center w3-padding-64">
    <h2 className="w3-wide">{topSectionData.title}</h2>
    <p className="w3-opacity"><i>{topSectionData.subTitle}</i></p>
    <p className="w3-justify">{topSectionData.mainParagraph}</p>
    <div className="w3-row w3-padding-32">
        <div className="w3-third">
            <p>{topSectionData.imagesName}</p>
            <img src={bottomSectionData.images} className="w3-round w3-margin-bottom"></img>
        </div>
        <div className="w3-third">
            <p>{topSectionData.imagesName}</p>
            <img src={bottomSectionData.images} className="w3-round w3-margin-bottom"></img>
        </div>
        <div className="w3-third">
            <p>{topSectionData.imagesName}</p>
            <img src={bottomSectionData.images} className="w3-round w3-margin-bottom"></img>
        </div>
    </div>
</div>);

const App2 = (<div className="w3-black" id="tour">
    <div className="w3-container w3-content w3-padding-64">
        <h2 className="w3-wide w3-center">{bottomSectionData.title}</h2>
        <p className="w3-opacity w3-center"><i>{bottomSectionData.subTitle }</i></p>

        <div className="w3-row-padding w3-padding-32">
            <div className="w3-third w3-margin-bottom">
                <img src={bottomSectionData.images} alt="New York" className="w3-hover-opacity"></img>
                    <div className="w3-container w3-white">
                        <p><b>New York</b></p>
                        <p className="w3-opacity">Fri 27 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                    </div>
            </div>
            <div className="w3-third w3-margin-bottom">
                <img src={bottomSectionData.images} alt="Paris" className="w3-hover-opacity"></img>
                    <div className="w3-container w3-white">
                        <p><b>Paris</b></p>
                        <p className="w3-opacity">Sat 28 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className="w3-button w3-black w3-margin-bottom">Buy Tickets</button>
                    </div>
            </div>
            <div className="w3-third w3-margin-bottom">
                <img src={bottomSectionData.images} alt="San Francisco" className="w3-hover-opacity"></img>
                    <div className="w3-container w3-white">
                        <p><b>San Francisco</b></p>
                        <p className="w3-opacity">Sun 29 Nov 2016</p>
                        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                        <button className="w3-button w3-black w3-margin-bottom">Buy Ticket</button>
                    </div>
            </div>
        </div>
    </div>
</div>);

ReactDOM.render(App, document.getElementById('root'));
ReactDOM.render(App2, document.getElementById('test'));
