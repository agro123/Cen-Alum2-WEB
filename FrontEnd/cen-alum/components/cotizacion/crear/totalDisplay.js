import formatter from '../../constants/colombianPeso';

const TotalDisplay = ({total}) =>  (
        <>
            <div className='totalDisplay'>
                <div className="titleLine">
                    <p>Total</p>
                </div>
                <p className="total">{formatter.format(total)}</p>
            </div>
        </>
    )
export default TotalDisplay;