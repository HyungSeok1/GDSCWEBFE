import './Hello.css';

function Hello(){
    function hiClick(){
        alert("인사 제출완료")
    }
    return(
        <>
            <div>헬로우안녕하세요</div>
            <form>
                <label htmlFor='Hello'>인사를 해요</label>
                <input id='Hello' type='text' />
                <button onClick={hiClick}></button>
            </form>
            <div>안녕하세요</div>
        </>
    );
}

export default Hello;