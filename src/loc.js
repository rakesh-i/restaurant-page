import './loc.css';

function locations(){
    const container = document.createElement('div');
    container.id = 'loc';

    const left = document.createElement('div');
    left.id = 'lleft';
    const lheader = document.createElement('div');
    lheader.id = 'lheader';
    const lcontent = document.createElement('div');
    lcontent.id = 'lcontent';
    lheader.textContent = 'Hours & Location';

    lcontent.innerHTML = `
                    <div id="address">
                        <p>900 3rd St,</p>
                        <p>Alpharetta, GA 30009</p>
                        <p>(678) 722-8335</p>
                        <p>Colletta@theindigoroad.com</p>
                    </div>
                    <div id="brunch">
                        <p>Brunch</p>
                        <p>Saturday + Sunday: 11 a.m. - 2:30 p.m.</p>
                    </div>
                    <div id="dinner">
                        <p>Dinner</p>
                        <p>Sunday: 5 - 9 p.m.</p>
                        <p>Monday - Thursday: 5 - 10 p.m.</p>
                        <p>Friday + Saturday: 5 - 11 p.m.</p>
                    </div>
                    <div id="hapyhour">
                        <p>Happy Hour, available at the bar</p>
                        <p>Monday - Friday: 5 - 7 p.m.</p>
                    </div>
                    
                    <div id="order">
                        <button>ORDER ONLINE</button>
                    </div>`
    left.appendChild(lheader);
    left.appendChild(lcontent);

    const right = document.createElement('div');
    right.id = 'rright';
    const rheader = document.createElement('div');
    rheader.id = 'rheader';
    const rcontent = document.createElement('div');
    rcontent.id = 'rcontent';
    rheader.textContent = 'About Restaurent';

    rcontent.innerHTML = `
        <div id="about">
            <p>
            Located within Alpharetta’s Avalon, Colletta, which means “collection” in Italian, is just that – a compilation of lively dining experiences, top-notch service and quality American Italian cuisine that sets the stage for genuine connection over a great meal.  
            </p>
            <p>
            Colletta’s cuisine puts a twist on treasured classics and introducing modern culinary techniques with the changing of the seasons. House-made pastas, cheeses and other hand-crafted ingredients abound in the from-scratch kitchen, and guests will taste the culinary team’s attention to detail in every bite. Staying true to Italian dining traditions, Colletta also offers a “For the Table” dining option that allows for a fun, family-style experience, offered nightly alongside the full à la carte menu.
            </p>
            <div>
                <p>FOLLOW US ON SOCIAL</p>
                <div id='sociallinks'>
                    <p>facebook</p>
                    <p>twitter</p>
                    <p>instagram</p>
                </div> 
            </div>
        </div>
    `
    right.appendChild(rheader);
    right.appendChild(rcontent);

    container.appendChild(left);
    container.appendChild(right);
    return container;
}

export {
    locations
}