export default function ControlCard({ title }) {
    // const alertStart = () => {
    //     window.alert('คุณกำลังกด Start' + title);
    // };
    // const alertRestart = () => {
    //     window.alert('คุณกำลังกด Restart' + title);
    // };
    // const alertDown = () => {
    //     window.alert('คุณกำลังกด Down' + title);
    // };
    // const titleArray = ['Logistic', 'E-Commerce', 'Banking'];
    const showData = () => (
            <div>
                <li>Hello</li>
                <li>World</li>
            </div>
    
    );
    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-md" >
            <h4>{title} </h4>
            <div className='flex-gap-2 md-2'>
            <button className="text-white p-2 font-bold bg-green-500 rounded-sm mr-2">Start</button>
            <button className="text-white p-2 font-bold bg-gray-500 rounded-sm mr-2">Restart</button>
            <button className="text-white p-2 font-bold bg-red-500 rounded-sm mr-2">Restart</button>
            </div>
                {showData()}
            </div>
        
    )
}