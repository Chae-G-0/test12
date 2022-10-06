import axios from "axios";
import { useEffect, useState } from "react";
import "./css/App.css";

function App() {
    const [wet, setWet] = useState();
    useEffect(() => {
        const url =
            "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&numOfRows=10&pageNo=1&base_date=20221006&base_time=0500&nx=35&ny=129&dataType=JSON";
        axios.get(url).then((res) => setWet(res.data.response.body.items.item));
    }, []);
    return (
        <>
        
            {wet ? (
                wet.map((it) => {
                    return (
                        <ul>
                            <li>{it.baseDate}</li>
                        </ul>
                    );
                })
            ) : (
                <div>loading...</div>
            )}
        </>
    );
}

export default App;
