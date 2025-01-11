import './UrupaHeader.css'
import cccpIcon from '../../assets/HammerSickle.svg';

function UrupaHeader(){

    let foicelarg = 140;
    let foicealt = 140;

    return(
        <header className='header'>
            <div className='headerCenter'>
                <div className="spinner">
                    <img src={cccpIcon} alt="martelo e foice" width={foicelarg} height={foicealt}/>
                </div>
                <h1>
                    Urupês CCCP Community
                </h1>
                <div className="spinner">
                    <img src={cccpIcon} alt="martelo e foice" width={foicelarg} height={foicealt}/>
                </div>
            </div>
        </header>
    );
}

export default UrupaHeader;