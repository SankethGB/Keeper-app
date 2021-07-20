import React,{useState} from 'react'

function Footer() {
   
    var date=new Date().getFullYear();
    var dates=new Date().getTime();
    const [datea,setDate]= useState(dates);
    function increment()
    {
        var data=new Date().toLocaleTimeString();
        setDate(data);
    }
    setInterval(increment,1000);
    return (
        
        <div className='fixed-bottom text-muted' >
            Copyrights @ {date}

            <div style={{textAlign:"right"}}>
              {datea}
            </div>
        </div>
    )
}

export default Footer
